

(function () {


const letraAleatoria = () => {
    let alfabeto = ["a", "b", "c", "d", 
    "e", "f", "g", "h", "i", "j", 
    "k", "l", "m", "n", "o", "p", 
    "q", "r", "s", "t", "u", "v", 
    "w", "x", "y", "z"];
    let numAleatorio = Math.round(Math.random() * 25);
    return String(alfabeto[numAleatorio].toLocaleUpperCase());
};

function imprimeLetra(letra) {
    const campoLetra = document.getElementById("campoLetra");
    const p = document.createElement('p');
    p.innerText = letra;
    campoLetra.appendChild(p);
}

function limpaDiv(div) {
    div.innerHTML = "";
}

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn-submit')) {
        e.preventDefault();
        limpaDiv((document.getElementById('campoLetra')));
        imprimeLetra(letraAleatoria());
    }
});


}());

