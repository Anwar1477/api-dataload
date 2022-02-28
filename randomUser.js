const loadData = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayData(data))
}
loadData();
const displayData = user => {
    console.log(user);
    const buddies = user.results;
    // console.log(user.results);
    const buddyDiv = document.getElementById('buddy')
    for (const buddy of buddies) {
        console.log(buddy);
        const p = document.createElement('p');
        p.innerText = `
        Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        Email: ${buddy.email} `;
        buddyDiv.appendChild(p);

    }
}