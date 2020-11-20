// console.log('%c HI', 'color: firebrick')

// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

// document.addEventListener('DOMContentLoaded',() => {
//     handleDogBtn()
//   })
  
//   const handleDogBtn = () => {
//     // Get the button
//     const fetchDogBtn = document.querySelector('button')
//     // Listen for a click
//     fetchDogBtn.addEventListener('click',() => {
//       // Make a request
//       fetch(URL,{
//         method: 'GET'
//       })
//       .then((response) => response.json())
//       .then((dogObj) => {
//         let dogUrl = dogObj.message
//         addImageToPage(dogUrl)
//       })
//     })
//   }
  
  
//   const addImageToPage = (dogUrl) => {
//     // create image
//     const dogImg = document.createElement('img')
  
//     // change the src
//     dogImg.src = dogUrl
  
//     // find the parent
//     const dogImgParent = document.querySelector('#addnewstuff')
//     dogImgParent.innerHTML = ''
  
//     // ✋🏻
//     dogImgParent.appendChild(dogImg)
//   }

console.log('%c HI', 'color: firebrick')
​
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
​
document.addEventListener('DOMContentLoaded', () => {
  // imageListener();
  ulListener();
  dropListener();
});
​
​
// GET ELEMENT LISTERNER
const imageListener = () => {
  const dogContainer = document.querySelector('#dog-image-container');
​
  // Fetch Url
  fetch(imgUrl)
  .then( (promise) => promise.json() )
  .then( (result) => showResult(dogContainer, result.message) );
​
}
​
// Display the Image
const showResult = (target, dogObject) => {
  dogObject.forEach(dog => {
    let dogContainer = document.createElement('div');
    target.appendChild(dogContainer);
    dogContainer.innerHTML = `<img src="${dog}" size="50">`;
  }) 
}
​
//Challenge 2
const ulListener = () => {
  const dogBreed = document.querySelector('#dog-breeds');  
  
  fetch(breedUrl)
  .then( (promise) => promise.json() )
  .then( (result) => showList(dogBreed, result.message) );
}
​
const showList = (target, dogBreed) => {
  for (const breed in dogBreed) {    
    // breed is a property
    // Get Array from dog Breed
    let dogList = document.createElement('li');
    target.appendChild(dogList);
    dogList.innerText = breed;
    listChildListener(dogList);
  }
}
​
// Challenge 3
// Add Listener To Every List
// Change Font
const listChildListener = (child) => {
  child.addEventListener('click', () => {
    child.style.color = 'blue';
  })
}
​
// Challenge 4
// Add listerner to dropdown
// for every letter, filter the list with a conditional
let dropValue = 'a';
​
const dropListener = () => {
  const dropDown = document.querySelector('#breed-dropdown');
  dropDown.addEventListener('change', (event) => {
    // console.log(event.target.value);
    dropValue = event.target.value;
    console.log(dropValue)
  })
}
​
const compareToList = (target, value) => {
  if (target.innerText.charAt(0) !== value ) {
    target.remove()
  }
}
​
​
​
// Get HTML ElEMENT TARGET
// const getImageDiv = () => {
//   const imageContainer = document.querySelector('#dog-image-container');
// }
