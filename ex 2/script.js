const fetchName = (name) => fetch("https://api.agify.io/?name=" + name)
const button = document.getElementById('btn')

function fetchAge() {
    let name = document.getElementById('input').value
    if (name === ''){
        alert("No name detected")
        return
    }

    let apiUrl = "https://api.agify.io/?name=" + name

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        let results = document.getElementById('results')
        let result = document.createElement('div')
        result.className = 'result'
        result.textContent = "The name"
    })
}
