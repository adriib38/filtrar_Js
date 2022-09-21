
let personajes;

let personajesUl = document.getElementById("personajes").innerHTML;

console.log(personajesUl)

fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(response => buscar(response))
    .catch(err => console.error(err));


function buscar(response) {
    let num = 0;
    while (num < 19) {
        let nom = response.results[num].name;
        let status = statusTxt(response.results[num].status);
        let img = response.results[num].image;
        let genero = generoTxt(response.results[num].gender);
        let loc = response.results[num].location.name;
        let specie = response.results[num].species;

        document.getElementById("personajes").innerHTML += `

        
        <li class="card" style="${setBackgroud(specie)}">
            <img src="${img}" height="20%">
                <h3>${nom}</h3>
                <h4 class="specie">${specie}</h4>
                <p>${status}</p>
                <p>${genero}</p>
                <p><i class="fa-solid fa-location-dot"></i> ${loc}</p>
        </li>
  
        `;
        //console.log(response.results[num].name)

        num++;
    }



}

function setBackgroud(s) {
    if (s == ("Human")) {
        return 'background:linear-gradient(135deg, #C56CD6 0%,#3425AF 100%);'
    }
    if (s == ("Alien")) {
        return 'background:linear-gradient(135deg, #184e68 0%,#57ca85 100%);;'
    }

}

function statusTxt(s) {
    if (s == ("Alive")) {
        return '<span class="green"><i class="fa-solid fa-circle"></i></span> Vivo'
    }
    if (s == "unknown") {
        return '<span class="yellow"><i class="fa-solid fa-circle"></i></span> Desconocido'
    }
    if (s == "Dead") {
        return '<span class="red"><i class="fa-solid fa-circle"></i></span> Muerto'
    }
}

function generoTxt(g) {
    console.log(g)
    if (g == ("Female")) {
        return 'Mujer'
    }
    if (g == "Male") {
        return 'Hombre'
    }
    if (g == "Dead") {
        return 'Deconocido'
    }
}

const sb = document.querySelector('#select-state')
sb.onchange = (e) => {
    e.preventDefault();
    const selectedValues = [].filter
        .call(sb.options, option => option.selected)
        .map(option => option.text);
  
    var filter, ul, li, a, i;

    filter = selectedValues;
    ul = document.getElementById("personajes");
    li = ul.getElementsByTagName("li");

    //VER TODOS
    if(selectedValues.includes("Todos")){
        for (i = 0; i < li.length; i++) {
     
            li[i].classList.remove("none");
            
        }
    }else{


        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("p")[0];

            if (a.textContent.includes(selectedValues)) {
                //li[i].style.display = "";
                li[i].classList.remove("none");
            } else {
                //li[i].style.display = "none";
                li[i].classList.add("none");
            }
        }
    }
};

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("personajes");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h3")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}




const changeSelected = (e) => {
    const $select = document.querySelector('#select-state');
    $select.value = 'Todos';
  };
  
  document.getElementById('myInput').addEventListener('click', changeSelected);
  
