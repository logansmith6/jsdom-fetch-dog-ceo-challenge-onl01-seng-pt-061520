console.log('%c HI', 'color: firebrick')

function fetchImages(){
  return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(json => addImages(json));
}




  function renderImages(json){

    const div = document.getElementById('dog-image-container');

      json.forEach(image => {
        const img = document.createElement('img')
        img.innerHTML = `<img src=${image}/>`
        div.appendChild(img)
      })

    /*
    for (i = 0; i <= arrayItems.length - 1; i++ ){
      let img = document.createElement('img');
      img.src = arrayItems[i].Image;
      div.appendChild(img);

    } */
  }


  document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
  })
