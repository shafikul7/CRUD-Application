import axios from "axios";
const URL = 'http://localhost:3000/contact';

window.onload = function () {
    let tbody = document.querySelector('#tbody');
    axios.get(URL)
        .than(res => {
            res.data.forEach(contact => {
                createTDElement(contact, tbody);
            })
        })
        .catch()
}

// const URL = 'https://jsonplaceholder.typicode.com/users'
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



// axios 

// let btn = document.querySelector('#loadData')
// let p = document.querySelector('#output')
// btn.addEventListener('click', function () {

//     axios
//         .get(URL)
//         .then(res => {
//             res.data.forEach(user => {
//                 p.innerHTML = `${p.innerHTML} </br> name: ${user.name}`;
//             })
//         })
//         .catch(err => console.log(err))
// });

function createTDElement(contact, parentElement) {
    const TR = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.innerHTML = contact.name
    TR.appendChild(tdName);
    const tdPhone = document.createElement('td');
    tdPhone.innerHTML = contact.phone ? contact.phone : 'N/A'
    TR.appendChild(tdPhone);
    const tdEmail = document.createElement('td');
    tdEmail.innerHTML = contact.email ? contact.email : 'N/A'
    TR.appendChild(tdEmail);
    const tdAction = document.createElement('td');

    const tdEditBtn = document.createElement('button');
    tdEditBtn.className = 'btn btn-warning'
    tdEditBtn.innerHTML = 'Edit'
    tdEditBtn.addEventListener('click', function () {
        console.log('i am edit button')
    })
    tdAction.appendChild(tdEditBtn);


    const tdDeleteBtn = document.createElement('button');
    tdDeleteBtn.className = 'btn btn-danger'
    tdDeleteBtn.innerHTML = 'Delete'
    tdDeleteBtn.addEventListener('click', function () {
        console.log('i am Delete button')
    })
    tdAction.appendChild(tdDeleteBtn);


    TR.appendChild(tdAction)

    parentElement.appendChild(TR);


}
