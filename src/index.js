console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function fetchImages(){
  return fetch(imgUrl)
    .then(response => response.json())
    .then(json => addImages(json));
}




  function addImages(json){
    let arrayItems = [];
    arrayItems = JSON.parse(json)
    const div = document.getElementById('dog-image-container');

    for (i = 0; i <= arrayItems.length - 1; i++ ){
      let img = document.createElement('img');
      img.src = arrayItems[i].Image;
      div.appendChild(img);

    }
  }


  document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
  })
