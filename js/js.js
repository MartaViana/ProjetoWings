///////////////////menuButton//////////////////////

var button = document.querySelector(".menuButton");
console.log(button.toString());

button.addEventListener("click", function () {
    console.log("button click");

    document.querySelector(".lateral").classList.toggle("show");
});


document.addEventListener("click", function (event) {
    console.log("document click");

    var nav = document.querySelector(".lateral");

    var isClickInsideNav = nav.contains(event.target);
    var isClickInsideButton = button.contains(event.target);

    if (!isClickInsideNav && !isClickInsideButton) {
        document.querySelector(".lateral").classList.remove("show");
    }
});


////////////typewriter effect//////////////////////////
function startTypeWriter() {


    var a = 0;
    var cycle = 0;
    var pos = 1;

    var txt = 'Aventura  ';
    var time = setInterval(typeWriter, 150);

    var txt1 = ['Aventura  ', 'Cultura  ', 'Praia  ', 'Festivais  '];


    function typeWriter() {
        if (cycle === 0) {
            if (a < txt.length) {
                document.getElementById("demo").innerHTML += txt.charAt(a);
                a++;
            }
            if (a === txt.length) {
                cycle = 1;
            }
        }
        if (cycle === 1) {
            if (a >= 0) {
                document.getElementById("demo").innerHTML = txt.substr(0, a);
                a--;
            }
            if (a === -1) {
                cycle = 0;
                txt = txt1[pos];
                pos++;
                if (pos === txt1.length) {
                    pos = 0;

                }
            }

        }
    }
}


/////////////////////////galeria de imagens//////////////////////////
function startGaleria() {
    var myIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {
            myIndex = 1
        }
        x[myIndex - 1].style.display = "block";
        setTimeout(carousel, 3000);
    }
}

/////////DropDown////////////////////

function myFunction_P() {
    document.getElementById("Dropdown_P").classList.toggle("show");
}

function myFunction_D() {
    document.getElementById("Dropdown_D").classList.toggle("show");
}

function myFunction_T() {
    document.getElementById("Dropdown_T").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var b;
        for (b = 0; b < dropdowns.length; b++) {
            var openDropdown = dropdowns[b];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


//////////////API gerar equipa///////////////////////////////////

function gerarEquipa() {
    for (var c = 0; c < 6; c++) {
        fetch("https://randomuser.me/api/ ")
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                    console.log(json);

                    var equipa = document.createElement("div");
                    equipa.className = "equipa";

                    var imagemE = document.createElement("img");
                    imagemE.setAttribute("src", json.results[0].picture.large);
                    var imagemDiv = document.createElement("div");
                    imagemE.className = "imagemE";
                    imagemDiv.appendChild(imagemE);
                    equipa.appendChild(imagemDiv);

                    var lista = document.createElement("ul");
                    lista.className = "lista";
                    var pessoa = document.createElement("li");
                    pessoa.innerHTML = "Nome: " + json.results[0].name.first + " " + json.results[0].name.last;
                    lista.appendChild(pessoa);
                    equipa.appendChild(lista);
                    document.body.appendChild(equipa);

                    var numero = document.createElement("li");
                    numero.innerHTML = "Número: " + json.results[0].phone;
                    lista.appendChild(numero);

                    var email = document.createElement("li");
                    email.innerHTML = "Email: " + json.results[0].email;
                    lista.appendChild(email);

                    var cidade = document.createElement("li");
                    cidade.innerHTML = "Morada: " + json.results[0].location.city + ", " + json.results[0].location.street;
                    lista.appendChild(cidade);


                }
            )
        ;
    }
}
