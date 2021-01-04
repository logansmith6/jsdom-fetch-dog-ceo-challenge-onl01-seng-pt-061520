console.log('%c HI', 'color: firebrick')

function fetchImages(){
  return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(json => json.message.forEach((image) => addImages(json));
}




  function renderImages(json){

    let imageContainer = document.getElementById('dog-image-container');

      json.forEach(image => {
        const img = document.createElement('img')
        img.innerHTML = `<img src=${image}/>`
        imageContainer.appendChild(img)
      })


  }


  document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
  })
