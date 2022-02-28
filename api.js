function dataLoad() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => showDisplay(data))
}
// dataLoad();
function showDisplay(data) {
    const ul = document.getElementById('users')
    for (const user of data) {
        console.log(user);
        const li = document.createElement('li');
        li.innerText = user.address.street;
        ul.appendChild(li);
    }
}