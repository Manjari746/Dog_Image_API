function fetchRandomDogImage() {

    var xhrRequest = new XMLHttpRequest();

    xhrRequest.onload = function () {
        console.log(xhrRequest.response);
        var responseJSON = JSON.parse(xhrRequest.response);

        var imageUrl = responseJSON.message;
        var dog_img = document.getElementById('dog-image');
        dog_img.src = imageUrl;

    };

    xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random');
    xhrRequest.send();

}

let img_btn = document.getElementById('fetch-dog-image-button');
console.log(img_btn);
img_btn.addEventListener('click', fetchRandomDogImage);