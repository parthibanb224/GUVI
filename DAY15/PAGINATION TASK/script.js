function paginationCreation() {
    let size = (contact.length) / 5;
    let pageDiv = document.getElementById('paginationDiv');

    /*--------------------------for create previous button------------------------------*/
    let prev = document.createElement('li');
    prev.className = 'page-item';
    prev.id = 'previous';
    prev.innerHTML = `<button class="btn btn-sm btn btn-dark" onclick="prev()">Previous</button>`;
    pageDiv.appendChild(prev);

    /*--------------------------for create first button------------------------------*/
    let first = document.createElement('li');
    first.className = 'page-item';
    first.id = 'first';
    first.innerHTML = `<button class="btn btn-sm btn btn-dark" onclick="data(1)">First</button>`;
    pageDiv.appendChild(first);

    /*--------------------------for create 1 to n (1 to 20) number page  button------------------------------*/
    for (let i = 2; i < size; i++) {
        let li = document.createElement('li');
        li.className = 'page-item';
        li.innerHTML = `<button class="btn btn-sm btn btn-dark" onclick="data(${i})">${i}</button>`;
        pageDiv.appendChild(li);
    }

    /*--------------------------for create first button------------------------------*/
    let last = document.createElement('li');
    last.className = 'page-item';
    last.id = 'last';
    last.innerHTML = `<button class="btn btn-sm btn btn-dark" onclick="data(20)">Last</button>`;
    pageDiv.appendChild(last);

    /*--------------------------for create Next button------------------------------*/
    let next = document.createElement('li');
    next.className = 'page-item'
    next.id = 'Next';
    next.innerHTML = `<button class="btn btn-sm btn btn-dark" onclick="next()">Next</button>`;
    pageDiv.appendChild(next);
}

function data(pageNo) {
    localStorage.setItem('page', pageNo);
    let j = (pageNo - 1) * 5;
    let tBody = document.getElementById('tBody');
    tBody.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
        let tr = document.createElement('tr'); /* Table row */

        let th = document.createElement('th'); /* Table head */
        th.setAttribute('scope', 'col')   /* created in html */

        th.innerText = contact[j].id;    /* Table data for id */

        let td1 = document.createElement('td'); /* table data (name)*/
        td1.innerText = contact[j].name;

        let td2 = document.createElement('td'); /* Table data (email) */
        td2.innerText = contact[j].email;

        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tBody.appendChild(tr);
        j += 1;
    }
}
/*--------------------------for previous button------------------------------*/
function prev() {
    currentPage = localStorage.getItem('page');
    if (currentPage > 1) {
        data(currentPage - 1);
    } else {
        document.getElementById('previous').disabled = true
    }

}
/*--------------------------for Next button------------------------------*/
function next() {
    currentPage = localStorage.getItem('page');
    if (currentPage == (contact.length / 5)) {
        document.getElementById('Next').disabled = true
    }
    else {
        data(++currentPage);
    }

}