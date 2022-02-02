// let nome = prompt ("Olá, digite seu nome");

let pesquisar = document.querySelector('button');
let data = document.getElementById('data');


pesquisar.addEventListener('click', function () {

    let apodNasa = `https://api.nasa.gov/planetary/apod?api_key=37dGrzTM4zAnPuK4HIaMTWArAChTK59oxVvGRP14&date=${data.value}`;
    let requisicao = new XMLHttpRequest();
    requisicao.open("GET", apodNasa);
    requisicao.onload = function () {

        let imagemObj = JSON.parse(requisicao.response);
        let imagemDia = document.getElementById("imagemDoDia");
        let video = document.getElementById("videoDoDia");
        let descricao = document.getElementById("sobreAImagem");

        descricao.innerText = imagemObj.explanation

        if (imagemObj.media_type != "video") {

            imagemDia.setAttribute("src", imagemObj.url);
            imagemDia.style.display = "flex";
            video.style.display = "none";

        } else {

            video.setAttribute("src", imagemObj.url);
            imagemDia.style.display = "none";
            video.style.display = "flex";
        }

    }
    requisicao.send();

})

padrao()

function padrao() {

    let apodNasa = `https://api.nasa.gov/planetary/apod?api_key=37dGrzTM4zAnPuK4HIaMTWArAChTK59oxVvGRP14`;

    let requisicao = new XMLHttpRequest();
    requisicao.open("GET", apodNasa);
    requisicao.onload = function () {

        let imagemObj = JSON.parse(requisicao.response);
        let imagemDia = document.getElementById("imagemDoDia")
        let video = document.getElementById("videoDoDia")
        let descricao = document.getElementById("sobreAImagem")

        descricao.innerText = imagemObj.explanation

        if (imagemObj.media_type != "video") {

            imagemDia.setAttribute("src", imagemObj.url)
            data.setAttribute("max", imagemObj.date)
            imagemDia.style.display = "flex"
            video.style.display = "none"

        } else {
            video.setAttribute("src", imagemObj.url)
            imagemDia.style.display = "none"
            video.style.display = "flex"
        }
    }
    requisicao.send();
}