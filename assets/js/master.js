let _quote = document.querySelector(".overlay");
let _btc = document.querySelector("#btc");

let _data = getQuote();
_quote.addEventListener("click", getQuote);

function getQuote() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            _data = JSON.parse(xhr.response).bpi.USD.rate;
            console.log(_data);
            _btc.innerHTML = _data.slice(0, -2);
        }
    }
    xhr.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    xhr.send();
};
