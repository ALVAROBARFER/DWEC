window.onload = noClickDcho;

function noClickDcho(){
    document.oncontextmenu = function(){return false};
}