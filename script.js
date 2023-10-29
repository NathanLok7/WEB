
function getInfo(elemento, atributo) {
    if (elemento && elemento.hasAttribute(atributo)) {
        return elemento.getAttribute(atributo);
    } else {
        return null;
    }
}

function setInfo(elemento, atributo, valor) {
    if (elemento) {
        elemento.setAttribute(atributo, valor);
    }
}
const miElemento = document.getElementById("miElemento");

const valorAtributo = getInfo(miElemento, "data-info");
console.log("Valor del atributo 'data-info':", valorAtributo);

setInfo(miElemento, "nuevo-atributo", "Nuevo valor del atributo");

console.log("Nuevo valor del atributo 'nuevo-atributo':", miElemento.getAttribute("nuevo-atributo"));

