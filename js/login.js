//Acciones de logeo a la aplicacion. Facebook, ¿comunicacion con sails?, etc



function onLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
	console.log("Listorti");
}

function logear() {
	window.CordovaFacebook.login({
	permissions: ['email', 'user_likes','user_birthday','user_photos'],
	onSuccess: function(result) {
		alert(result.userID);
		//usuarios.push(result.userID);
		//buscarUsuario(result.userID);

	},
	onFailure: function(result) {
		if(result.cancelled) {
			alert("The user doesn't like my app");
		} else if(result.error) {
			alert("There was an error:" + result.errorLocalized);
		}
	}
	});

}

function buscarUsuario(usuarioid) {
	alert("llegue buscarUsuario");
	var rootRef = firebase.database.ref('usuarios');
	//fbidRef = rootRef.child('fbid');
	//alert(.child('fbid').get(usuarioid));
//	rootRef.orderByChild("fbid").equalTo(usuarioid).addListenerForSingleValueEvent(new ValueEventListener() {
//		public void onDataChange(DataSnapshot dataSnapshot) {

 //           for (DataSnapshot child: dataSnapshot.getChildren()) {
//	            Log.d("User key", child.getKey());
//	            Log.d("User ref", child.getRef().toString());
//	            Log.d("User val", child.getValue().toString());
  //      	}
  //      }
//	});
	rootRef.once('value', function(userPathSnapshot) {
		userPathSnapshot.forEach(function(userSnap) {
			var fbid = userSnap.val().fbid;
		});
	});
	
}
