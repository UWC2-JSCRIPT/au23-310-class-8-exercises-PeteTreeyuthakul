const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');

formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  // Fetch bestselling books for date and add top 5 to page

  const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/`;
  const bookType = 'hardcover-fiction'
  const api_Key = 'PCRL7GmiAdQkogUWy1DMHjy4r5KZrBzK'

  const url = `${BASE_URL}/${year}-${month}-${date}/${bookType}.json?api-key=${api_Key}`;

  const bookContainer = document.getElementById('books-container')

  fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);
    
    for(let i =0; i<5;i++){
      let result = responseJson.results.books[i];
      console.log(result);
    
      let rankEl = document.createElement('h3')
      rankEl.innerText =`Rank${result.rank}`
      bookContainer.appendChild(rankEl)

      let titleEl = document.createElement('p')
      titleEl.innerText = `Title: ${result.title}`
      bookContainer.appendChild(titleEl)

      let authorEl = document.createElement('p')
      authorEl.innerText = `Author: ${result.author}`
      bookContainer.appendChild(authorEl)

      let descriptionEl = document.createElement('p')
      descriptionEl.innerText = `Description: ${result.description}`
      bookContainer.appendChild(descriptionEl)

      let imgEl =document.createElement('img')
      imgEl.src = result.book_image
      bookContainer.appendChild(imgEl)

    }
  });
})