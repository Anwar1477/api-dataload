const loadData = () => {
        fetch('https://api.kanye.rest/')
            .then(res => res.json())
            .then(data => showDisplay(data))
    }
    // loadData();
const showDisplay = (quote) => {
    const quoteElement = document.getElementById('qoute');
    // console.log(qoute)
    quoteElement.innerText = quote.quote;



}