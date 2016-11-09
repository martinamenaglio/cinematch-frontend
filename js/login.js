//Acciones de logeo a la aplicacion. Facebook, Firebase etc

var fbusername;
var fbedad;
var fbmail;
var fbgenero;

var database;

function apiFacebook (){
	//Verifico si el usuario esta conectado previamente a fb. Paso a pantalla seleccion peliculas/combo
	//Sino, paso a pantalla login
	facebookConnectPlugin.api("me?fields=first_name,id,email,gender,birthday"
		, ['public_profile'],function (response) {
	        fbusername = response.first_name;
	        fbmail = response.email;
	        fbgenero = response.gender;
			fbedad = _calculateAge(response.birthday);	        
    },function (error) {
        alert("Failed: " + JSON.stringify(error));
        alert("no esta conectado");
    });
}

function firebaseDatabase (){
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyABF4LSnJhTqOon6glV43zXX3oBlflv9h4",
		authDomain: "cinematch-83826.firebaseapp.com",
		databaseURL: "https://cinematch-83826.firebaseio.com",
		storageBucket: "cinematch-83826.appspot.com",
		messagingSenderId: "693258065273"
	};
	firebase.initializeApp(config);
	database = firebase.database();
}

function logear() {
	//logea a facebook, pido permisos y manejo la respuesta
	//salta pop up pidiendo autorizacion para la app
	facebookConnectPlugin.login(
	['email', 'user_likes','user_birthday','user_photos','public_profile'],
	function(result) {
		alert(fbusername);
		alert(result.authResponse.userID);
		//verifico si existe en mi base de datos
		database.ref('usuarios').child(result.authResponse.userID).on('value', function(snapshot) {
			if(snapshot.val() !== null && typeof snapshot.val() === 'object') {

				alert('usuario existe');
				id = result.authResponse.userID;
				nombre = snapshot.child('username').val();
				edad = snapshot.child('age').val();
				genero = snapshot.child('gender').val();
				email = snapshot.child('email').val();

				//usuario.setUsuario(id,nombre,edad,genero,email);
			} else if (snapshot.val()===null) {

				//si no existe, lo creo en la db

				alert('creo usuario');
				database.ref('usuarios').child(result.authResponse.userID).set({
				    'username': fbusername,
				    'email': fbmail,
				    'gender': fbgenero
				})
				//tener en cuenta que cuando hago un cambio en la db, el evento value se vuelve a 
				//correr, volviendo al if
			}
		})
		
		$.mobile.changePage($("#combo-page"), {transition: "fade"});
		setCarousel();	

	},
	function(result) {
		if(result.cancelled) {
			alert("The user doesn't like my app");
		} else if(result.error) {
			alert("There was an error:" + result.errorLocalized);
		}
	}
	);

}

function buscarUsuario(usuarioid) {
	alert("llegue buscarUsuario");
	
}

function setCarousel(){
	$(document).ready(function(){
      $('.carousel').carousel();
    });
	// Next slide
    $('.carousel').carousel('next');
    $('.carousel').carousel('next', 3); // Move next n times.
    // Previous slide
    $('.carousel').carousel('prev');
    $('.carousel').carousel('prev', 4); // Move prev n times.
    // Set to nth slide
    $('.carousel').carousel('set', 4);

    $(document).ready(function(){
      // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
      $('.modal-trigger').leanModal();
    });
}

function _calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}