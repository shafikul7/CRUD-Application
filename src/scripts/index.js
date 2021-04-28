import axios from 'axios';
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

// @ fetch Api
// let btn = document.querySelector('#loadData')
// let p = document.querySelector('#output')

// btn.addEventListener('click', function () {
//     fetch(URL)
//         // .then(res => console.log(res.json()))
//         .then(res => res.json())
//         .then(data => {
//             data.forEach(user => {
//                 p.innerHTML = `${p.innerHTML} </br> name: ${user.name}`;
//             })
//         })
//         .catch(err => console.log(err))
// });

// fetch(URL,{
//     method: 'POST',
//     body : JSON.stringify(),
// })

// axios 

let btn = document.querySelector('#loadData')
let p = document.querySelector('#output')
btn.addEventListener('click', function () {

    axios
        .get(URL)
        .then(res => {
            res.data.forEach(user => {
                p.innerHTML = `${p.innerHTML} </br> name: ${user.name}`;
            })
        })
        .catch(err => console.log(err))
});