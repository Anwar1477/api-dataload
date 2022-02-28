const loadData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => showDisplay(data))
}
loadData()
const showDisplay = countryes => {
    const countryDiv = document.getElementById('country');
    countryes.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('countryinfo');
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick = "loadCountry('${country.name.common}')">Show Detailes</button>
        
        `;
        // const h3 = document.createElement('h3')
        // h3.innerText = country.name.common;
        // div.appendChild(h3)
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        countryDiv.appendChild(div);
    });
}

const loadCountry = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
        // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => showLoadCountry(data[0]))

}
const showLoadCountry = country => {
    console.log(country);
    const countrysDiv = document.getElementById('country-details');
    countrysDiv.innerHTML = `
    <h4>Country Name: ${country.name.common}</h4>
    <p>Total Population: ${country.population}</p>
    <img src="${country.flags.png}">
    `

}