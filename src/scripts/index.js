const URL = 'https://jsonplaceholder.typicode.com/users'

// @ XMLHttpRequest

// let btn = document.querySelector('#loadData')
// let p = document.querySelector('#output')

// btn.addEventListener('click', function () {
//     const xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = () => {
//         p.innerHTML = xhr.response
//     }
//     xhr.open('GET', URL)
//     xhr.send()
// });

//fetch api
let btn = document.querySelector('#loadData')
let p = document.querySelector('#output')

fetch(URL)
    // .then(res => console.log(res.json()))
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))