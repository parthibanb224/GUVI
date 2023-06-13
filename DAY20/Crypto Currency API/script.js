
let pageDiv = document.getElementById("pagination");

// Create previous button 

let prevTab = document.createElement("li");
prevTab.setAttribute('id', 'prev');
prevTab.setAttribute('class', 'page-item');
prevTab.innerHTML = `<button class="btn btn-md btn btn-primary" onclick="prev()">Previous</button>`;
pageDiv.append(prevTab);

// Create 1-20 button

for (let i = 1; i <= 20; i++) {
    let page = document.createElement("li");
    page.setAttribute('class', 'page-item');
    page.innerHTML = `<button class="btn btn-md btn btn-primary" onclick="dataContent(${i})">${i}</button>`;
    pageDiv.append(page);
}

// Create Next button

let nextTab = document.createElement("li");
nextTab.setAttribute('id', 'next');
nextTab.setAttribute('class', 'page-item');
nextTab.innerHTML = `<button class="btn btn-md btn btn-primary" onclick="nexts()">Next</button>`;
pageDiv.append(nextTab);




// Render Datas

async function dataContent(pageNO) {
    let response = await fetch("https://api.coinlore.net/api/tickers/?start=0&limit=100");
    let datas = await response.json();
    let data = await datas.data;
    console.log(data);

    localStorage.setItem('page', pageNO);

    let j = (pageNO - 1) * 5;
    let tableDiv = document.getElementById("table");
    let body = document.getElementById("body");
    body.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        let content = document.createElement("tr");
        content.innerHTML = `
      <th class="p-2" scope="row">${data[j].rank}</th>
        <td class="p-2">${data[j].name}</td>
        <td class="p-2">${data[j].symbol}</td>
        <td class="p-2">${data[j].id}</td>
        <td class="p-2">${data[j].price_usd}</td>`
        body.append(content);
        j++;
    }
    tableDiv.append(body);
}


// Render Data for Previous Button

function prev() {
    currendPage = localStorage.getItem('page');
    if (currendPage > 1) {
        dataContent(currendPage - 1);
    } else {
        document.getElementById("prev").disabled = true;
    }
}

function nexts() {
    currendPage = localStorage.getItem('page');
    if (currendPage == 20) {
        document.getElementById("next").disabled = true;
    } else {
        dataContent(++currendPage);
    }
}