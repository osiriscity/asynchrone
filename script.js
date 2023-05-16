document.getElementById('displayJSON').addEventListener('click', function() {
    fetch('data.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            generateList(data);
        })
        .catch(function(error) {
            console.log('Error:', error);
        });
});

