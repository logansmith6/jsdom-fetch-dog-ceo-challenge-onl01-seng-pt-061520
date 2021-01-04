console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function fetchImages(){
  return fetch(imgUrl)
    .then(response => response.json())
    .then(json => addImages(json));
}




  function addImages(){
    const div = document.getElementById('dog-image-container');
    json.forEach(image => {
      const h2 = document.createElement('img')
        img.innerHTML = image
        div.appendChild(img)
    })
  }


  document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
  })
