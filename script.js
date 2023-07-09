function loadDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Esta línea mostrará los datos JSON en la consola.

            const img = document.createElement('img');
            img.src = data.message;
            const dogDiv = document.getElementById('dogDiv');
            dogDiv.appendChild(img);
        })
        .catch(error => console.error(error));
}
