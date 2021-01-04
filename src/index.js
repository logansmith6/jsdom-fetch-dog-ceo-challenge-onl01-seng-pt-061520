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
      .then(json => renderBreedsAndClick(json.message));
  }

  function renderBreeds(json){
    const breedContainer = document.getElementById('dog-breeds');
    for (const breed in json) {
      const li = document.createElement('li')
      li.innerHTML = `<p>${breed} </p>`
      li.classList.add("dog-breed");
      breedContainer.appendChild(li)
    }
  }

  function clickChangeColor(){
      const ul =  document.querySelectorAll(".dog-breed > p");
      
        for (li of listItems){
          let tryP = listItems.getElemetsByTagName("p");
          tryP.addEventListener('click', function(){
            if(this.classList.contains('active')){
              this.classList.remove("active");
            } else {
              this.classList.add("active");
            }
          })
        }
  }

  function renderBreedsAndClick(json){
    renderBreeds(json)
  }






  document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
  })
