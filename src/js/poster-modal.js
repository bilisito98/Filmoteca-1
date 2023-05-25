const members = [
  {
    "name": "David",
    "surname": "Vargas",
    "url": "https://github.com/bilisito98",
    "role": ["Leader", "Fullstack Developer"],
    "photo": "https://avatars.githubusercontent.com/u/102624868?s=400&u=cdeacadc7ff36b27bb342e227054c2c0ba511458&v=4"
  },
]


const contentModal = document.querySelector('.content_modal');
const libtn = document.querySelector('.movie-card');
const clearContent = document.querySelector('#clearModal');
const clearWhnClck = document.querySelector('.modal');



function addModalPoster(event) {
  event.preventDefault();

  let contentPoster = event.currentTarget.innerHTML;
  console.log(event.currentTarget.dataset.value);
  document.querySelector('.modal-watched').setAttribute('id', `${event.currentTarget.dataset.value}`);
  document.querySelector('.modal-queue').setAttribute('id', `${event.currentTarget.dataset.value}`);
  // console.log(contentPoster);


  const moviePoster = document.createElement('div');
  moviePoster.classList.add('div-example');
  // const { title, poster_path, release_date, popularity, genre_ids } = movie;

  contentModal.innerHTML = '';

  const galleryMarkup = members
    .map(
      member =>
        `
    <div class="modal-body__image">
    ${contentPoster}

    </div>


    `
    )
    .join('');

  contentModal.insertAdjacentHTML('afterbegin', galleryMarkup);

}
clearContent.addEventListener('click', () => {
  console.log('sirveeee el CLICKKKKKKKKKKKKKKK')

})

document.body.addEventListener("keydown", () => {
  console.clear();
  setTimeout(() => {
    contentModal.innerHTML = '';
  }, 200);
})
// clearWhnClck.addEventListener('click', () => {
// })

libtn.addEventListener('click', addModalPoster);