console.log('%c HI', 'color: firebrick')

function fetchImages(){
  return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(images => renderImages(images.message));
}

  function renderImages(images){
    const imageContainer = document.getElementById('dog-image-container');
      images.forEach(image => {
        const img = document.createElement('img')
        img.src = image;
        imageContainer.appendChild(img)
      })
  }

  function fetchBreeds(){
    return fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(breeds => renderBreeds(breeds.message));
  }

  function renderBreeds(breeds){
    const breedContainer = document.getElementById('dog-breeds');
    breeds.forEach(breed => {
      const list = document.createElement('li')
      li.innerHTML = breed;
      breedContainer.appendChild(li)
    })
  }




  document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
  })
