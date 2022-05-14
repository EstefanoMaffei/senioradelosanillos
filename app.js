function Jugador( nombre ) {

	this.nombre = nombre;
	this.hp = 200;
	this.est = 150;


	this.golpear= function ( jugadorObjetivo ) {

		if(jugadorObjetivo.hp > 25) {

		this.est -=35;
		jugadorObjetivo.hp -= 100;
		
		}else{
			jugadorObjetivo.hp = 0;
			console.error('el jugador: ' + jugadorObjetivo.nombre +
				' ha muerto.');

		}

		this.estado(jugadorObjetivo);
	}

	this.curar = function(jugadorObjetivo){

		if(this.est>= 45){

			this.hp += 40;
			this.est -= 45;
		}else{

			console.info('no puedes ejecutar esta accion.');
		}
		this.estado(jugadorObjetivo);
	}


	this.hablar = function(jugadorObjetivo){
		if (this.est > 5) {

			console.info( nombre + ': Puedes curarte a ti mismo mientras combates.' );

		}
		this.estado(jugadorObjetivo);
	}


	this.putear = function(jugadorObjetivo){

		if(this.est >= 2){
			console.log('te matare y buscare a tu familia tambien '+ jugadorObjetivo.nombre + '!');
		}

	}

	this.estado = function(jugadorObjetivo) {

		console.log( this ) ;
		console.info(jugadorObjetivo);
	}

};


var blanco = new Jugador('blanco');
var negro = new Jugador('negro');


console.log(blanco);
console.log(negro);
