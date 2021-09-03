const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))
}


const displaySearchResult = docs => {
    // const totalResult = docs.slice(0, 10);
    // console.log(totalResult);

    const searchResult = document.getElementById('search-result');
    docs.forEach(doc => {
        console.log(doc);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadBookDetail()" class="card h-100">
                    <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${doc.author_name}</h5>
                        <h6>${doc.first_publish_year}</h6>
                        <h6>${doc.publisher}</h6>
                        <p class="card-text">${doc.subject_facet}</p>
                    </div>
         </div>`;
        searchResult.appendChild(div);
    })
}

const loadBookDetail = book => {
    const url = `https://openlibrary.org/search.json?q=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayBookDetail(data.numFound))

}

const displayBookDetail = book => {

    const bookDetails = document.getElementById('meal-details');
    const div = document.createElement('div');;
    div.className = "classList.add('card')
    div.innerHTML = `
    <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>`;
    bookDetails.appendChild(div)
}

