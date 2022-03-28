const addform = document.querySelector(`.add`);
const ul = document.querySelector(`.todos`);
const search = document.querySelector(`.search input`);

const generateTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
                `;
    ul.innerHTML += html;
 };


 const filterTodos = (term) => {
    Array.from(ul.children)
        .filter((todo) => ! todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add(`filterd`))

        Array.from(ul.children)
        .filter((todo) =>  todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove(`filterd`))
 };


addform.addEventListener(`submit`, e => {
    e.preventDefault();
    const todo = addform.add.value.trim();
    if(todo.length){
    generateTemplate(todo);
    addform.reset();
    }
});


ul.addEventListener(`click`, e => {
    if(e.target.classList.contains(`delete`)){
        
        e.target.parentElement.remove(); 
    }
});

search.addEventListener(`keyup`, e => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
    console.log(term)
});
