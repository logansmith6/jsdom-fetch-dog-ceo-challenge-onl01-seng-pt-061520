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
      if(subBreedIdentifier(json[breed])){
        const ul = renderDogSubBreeds(subli)
      }
      breedContainer.appendChild(li)
    }
  }

  function clickChangeColor(){
      const li =  document.querySelectorAll(".dog-breed > p");

        for (i = 0; i < li.length; i++){

          li[i].addEventListener("click", function(test){
            test.target.style.color = "red";
          })
        }
  }

  function renderBreedsAndClick(json){
    renderBreeds(json)
    clickChangeColor()
  }


  function listenForSort(){
      const li = document.getElementById("breed-dropdown");
        li.addEventListener("change", userSelection);
  }

  function userSelection(x){
    const alpha = x.target.value;
    sortBreeds(alpha);
  }

  function sortBreeds(alpha){
    const breedList = document.getElementById("dog-breeds");
    const newList = breedList.cloneNode(false);
    filterList = Array.from(breedList.childNodes);

    for (const li of filterList) {
      if (li.textContent[0] != alpha) {
          li.classList.add("sorted");
        } else {
          li.classList.remove("sorted");
        }

    newList.appendChild(li);
    }
    breedList.parentNode.replaceChild(newList, breedList);
  }

  function subBreedIdentifier(array){
    return !(!Array.isArray(array) || !array.length);
  }

  function renderDogSubBreeds(subBreeds){
    const ul = document.createElement("ul");

    for (const subBreed of subBreeds){
      const subli = document.createElement("li");
      subli.textContent = subBreed;
      ul.appendChild(subli);
    }
  }




  document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
    listenForSort()
  })
