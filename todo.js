const addform = document.querySelector(".footer-form");
const ul = document.querySelector(`ul`);
const search =document.querySelector('.header-form');




//add

addform.addEventListener("submit", e => {
  e.preventDefault();
  const todo = addform.add.value.trim();
  const description = addform.description.value.trim();
  console.log(description);


  if (todo.length) {
    const html = ` 
        <li class="li">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>`;
    ul.innerHTML += html;



    addform.reset();
  }
});






//delete

ul.addEventListener(`click`, e =>{
    if(e.target.classList.contains(`delete`)){
        e.target.parentElement.remove();
    }
});





//search

search.addEventListener(`keyup`, e => {
    e.preventDefault();
    const term = search.search.value.trim().toLowerCase();
    Array.from(ul.children)
        .filter((todo) => ! todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add(`filterd`))

        Array.from(ul.children)
        .filter((todo) =>  todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove(`filterd`))

})



