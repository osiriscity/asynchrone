const boutton = document.getElementById("button")
const rules = fetch("txt.json")
const body = document.querySelector("body")
const list = document.getElementById("listContainer")

function load() {
    fetch(txt.json)
    .then(response => response.json())
    .then(data => generatorList(data.rules))
    .catch(console.error("error loading json file"))
}

function generatorList(rules){
    list.innerHTML = ''
    rules.array.forEach(rule => {
        document.createElement('li')
    });
    body.appendChild(list)
}

boutton.addEventListener('click', load)