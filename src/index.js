console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function fetchImages(){
  return fetch(imgUrl + image)
    .then(response => response.json())
    .then(images =>console.log(fetchUrl + images));
}




  function addImages(){
    const div = document.getElementById('dog-image-container');
    json.forEach(image => {
      const h2 = document.createElement('img')
        h2.innerHTML = image.src
        div.appendChild(img)
    })
  }
