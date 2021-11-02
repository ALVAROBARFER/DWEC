class Alumno{

    constructor(dni, nombre, notaMedia){

        this.dni = dni;

        this.nombre = nombre;

        this.notaMedia = notaMedia;
    }

    consultarNota(){

        alert("El alumno " + this.nombre + " tiene una nota media de: " + this.notaMedia);
    }

    cambiarNota(){

        this.notaMedia = nuevaNota;
    }

}



class Colegio{
    constructor(nombre, numeroAulas, numeroAlumnos){

        this.nombre = nombre;

        this.numeroAulas = numeroAulas;

        this.arrayAlumnos = new Array();

        for (let i = 0; i < numeroAlumnos; i++){
            
            this.arrayAlumnos[i] = new Alumno(1, "Alumno" + 1, 5.0);
        }
    }

    consultarNotaMedia(n) {
		this.arrayAlumnos[n].consultarNota();
	}
    cambiarNotaMedia(n, nuevaNota) {
		this.arrayAlumnos[n].cambiarNotaMedia(nuevaNota);
	}

}

function main() {

	// Creo un colegio

	let miColegio = new Colegio("Ceed", 10, 10);

	// Consulto
	miColegio.consultarNotaMedia(0);
	miColegio.consultarNotaMedia(2);
	miColegio.cambiarNotaMedia(0, 10.0);
	miColegio.cambiarNotaMedia(2, 7.5);
	miColegio.consultarNotaMedia(0);
	miColegio.consultarNotaMedia(2);

}

// Llamamos a la funcion principal
main();