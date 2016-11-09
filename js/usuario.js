//manejo de propiedades del usuario dentro de aplicacion


var usuario = {
	(function(){
		var id;
		var nombre;
		var edad;
		var genero;
		var email;
		return {
			getId: function() {
				return id;
			},
			setId: function(newId) {
				id = newId;
			},
			getNombre: function() {
				return nombre;
			},
			setNombre: function(newNombre) {
				nombre = newNombre;
			},
			getEdad: function() {
				return edad;
			},
			setEdad: function(newedad) {
				edad = newEdad;
			},
			getGenero: function() {
				return genero;
			},
			setGenero: function(newGenero) {
				genero = newGenero;
			},
			getEmail: function() {
				return email;
			},
			setEmail: function(newEmail) {
				email = newEmail;
			}
		}
	}),
	setUsuario: function(idfb, nombrefb, edadfb, generofb, emailfb){
		this.setId = idfb;
		this.setNombre = nombrefb;
		this.setEdad = edadfb;
		this.setGenero = generofb;
		this.setEmail = emailfb; 
	}
}