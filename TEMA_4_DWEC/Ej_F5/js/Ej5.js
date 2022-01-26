window.onload = mostrarUrls;

function mostrarUrls(){
    document.getElementById("imagen1").addEventListener("mouseover", Url);
    document.getElementById("imagen2").addEventListener("mouseover", Url);

    function Url() {
        let url1 = document.getElementById("imagen1").src;
        let url2 = document.getElementById("imagen2").src;

        document.getElementById("imagen1").title = url1;
        document.getElementById("imagen2").title = url2;
    }
}