const listContainer = document.querySelector(".list-task-container");
const inputTask = document.querySelector("#input-task");
const btnAdd = document.querySelector("#btn-add-task");

btnAdd.addEventListener("click", (e) =>{
    e.preventDefault();
   const taskContainer = document.createElement('div');
   taskContainer.classList.add("task-container");
   const inputValue = document.createElement('input');
   inputValue.classList.add("task");
   inputValue.value = inputTask.value;
   const fragment1 = document.createDocumentFragment()
   const fragment2 = document.createDocumentFragment();
   const actions = document.createElement('div');
   actions.classList.add("actions");
   const btndelete = document.createElement('span');
   const btndone = document.createElement('span');
   btndelete.textContent = "DELETE";
   btndone.textContent = "DONE";
   btndelete.classList.add("delete");
   btndone.classList.add("done");
   fragment1.appendChild(btndelete);
   fragment1.appendChild(btndone);
   fragment2.appendChild(inputValue);
   fragment2.appendChild(actions);
   actions.appendChild(fragment1);
   taskContainer.appendChild(fragment2);
   listContainer.appendChild(taskContainer);
   inputValue.setAttribute('readonly', true);
   inputTask.value = '';

   btndelete.addEventListener("click", () =>{
        listContainer.removeChild(taskContainer);
   })
   btndone.addEventListener("click", () =>{
        inputValue.style.textDecoration = "line-through";
   })
})