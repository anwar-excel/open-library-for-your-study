const searchBook = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  // clear data
  searchField.value = '';
  if (searchText == '') {

  }

  else {
    const url = `https://openlibrary.org/search.json?q=${searchText}`;

    fetch(url)
      .then(res => res.json())
      .then(data => displaySearchResult(data.docs))

  }


}


const displaySearchResult = docs => {
  // const totalResult = docs.slice(0, 10);
  // console.log(totalResult);
  searchResult.textContent = '';
  if (docs.length == 0) {

  }

  const searchResult = document.getElementById('search-result');
  docs.forEach(doc => {
    // console.log(doc);
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

  const bookDetails = document.getElementById('book-details');
  const div = document.createElement('div');;
  div.classList.add('card')
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




// document.getElementById('error-message').style.display = 'none';
// const searchBook = () => {
//   const searchField = document.getElementById('search-field');
//   const searchText = searchField.value;
//   // clear data
//   searchField.value = '';
//   document.getElementById('error-message').style.display = 'none';
//   if (searchText == '') {
//     // please write something to display
//   }
//   else {
//     // load data
//     const url = `https://openlibrary.org/search.json?q=${searchText}`;
//     fetch(url)
//       .then(res => res.json())
//       .then(data => displaySearchResult(data.docs))
//     // .catch(error => displayError(error));
//   }
// }


// const displayError = error => {
//   document.getElementById('error-message').style.display = 'block';
// }

// const displaySearchResult = docs => {
//   const searchResult = document.getElementById('search-result');
//   searchResult.textContent = '';
//   if (numfound.length == 0) {
//     // show no result found;
//   }
//   docs.forEach(doc => {
//     // console.log(meal);
//     const div = document.createElement('div');
//     div.classList.add('col');
//     div.innerHTML = `
//       <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
//           <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
//           <div class="card-body">
//               <h5 class="card-title">${meal.strMeal}</h5>
//               <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
//           </div>
//       </div>
//       `;
//     searchResult.appendChild(div);
//   })
// }
// const searchBook = () => {
//   const searchField = document.getElementById('search-field');
//   const searchText = searchField.value;
//   //console.log(searchText);

//   searchField.value = '';
//   // fetch("https://openlibrary.org/search.json?q=javascript")
//   fetch(`https://openlibrary.org/search.json?q=${searchText}`)
//     .then(res => res.json())
//     .then(data => displaySearchResult(data.docs))

// }


// const displaySearchResult = docs => {
//   // const totalResult = docs.slice(0, 10);
//   // console.log(totalResult);
//   document.getElementById("result-show").innerText = docs.length;
//   const searchResult = document.getElementById('search-result');
//   docs.forEach(doc => {
//     console.log(doc);
//     const div = document.createElement('div');
//     div.classList.add('col');
//     div.innerHTML = `
//       <div class="card h-100">
//                   <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
//                   <div class="card-body">
//                       <h5 class="card-title">${doc.author_name}</h5>
//                       <h6>${doc.first_publish_year}</h6>
//                       <h6>${doc.publisher}</h6>
//                       <p class="card-text">${doc.subject_facet}</p>
//                   </div>
//        </div>`;
//     searchResult.appendChild(div);
//   })
// }

// fetch("https://openlibrary.org/search.json?q=javascript")
//     .then(res => res.json())
//     .then(data => console.log(data.docs[0].first_publish_year))


// const setBooks = (posts) => {
//     const postContainer = document.getElementById("post-container")
//     for (const book of posts) {
//         console.log(book)
//     }
// }