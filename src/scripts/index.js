const URL = 'https://jsonplaceholder.typicode.com/users'

const xhr = new XMLHttpRequest();

xhr.onreadystatechange =() => {
    console.log(xhr.response)
}
xhr.open('GET', URL)
xhr.send();