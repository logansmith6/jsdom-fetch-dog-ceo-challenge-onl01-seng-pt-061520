console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
let image = name.map((picName) => {
  return picName
})

fetch(imgUrl + image)
  .then(response => response.json())
  .then(images =>console.log(fetchUrl + images));
