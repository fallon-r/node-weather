console.log("client side js is loaded, sucka");

// fetch("http://puzzle.mead.io/puzzle").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

// fetch("http://127.0.0.1:3000/weather?address=burlington").then((response) => {
//   response.json().then((data) => {
//     if (data.error) {
//       console.log(data.error);
//     } else {
//       console.log(data.location);
//     }
//   });
// });


const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne= document.querySelector('#messageOne')
const messageTwo = document.querySelector("#messageTwo")

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const location  = search.value

    messageOne.textContent ="Loading..."

    fetch("http://127.0.0.1:3000/weather?address=" + location).then((response) => {
        response.json().then((data) => {
          if (data.error) {
            messageOne.textContent=data.error;
          } else {
            messageOne.textContent=data.location;
            messageTwo.textContent=data.forecastData
          }
        });
      });
      



})