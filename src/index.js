console.log('%c HI', 'color: firebrick')

function fetchImages(){
  return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(image => renderImages(image.message));
}

  function renderImages(image){
    const imageContainer = document.getElementById('dog-image-container');
      image.forEach(image => {
        const img = document.createElement('img')
        img.src = image;
        imageContainer.appendChild(img)
      })
  }

  function fetchBreeds(){
    return fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(json => renderBreeds(json.message));
  }

  function renderBreeds(json){
    const breedContainer = document.getElementById('dog-breeds');
    json.forEach(breed => {
      const list = document.createElement('li')
      li.innerHTML = breed;
      breedContainer.appendChild(li)
    })
  }




  document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
  })
