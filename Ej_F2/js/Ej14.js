function extensionArchivo(){

    let archivo = prompt("Introduzca el nombre del archivo:");

    let extension = archivo.split('.')[1];

    if(extension == -1){

        document.write('no ha introducido una extensión')
    } else {

        alert(`Es un archivo .${extension}`);
    }
        
      }