document.addEventListener("DOMContentLoaded", () => {
  let taskForm = document.querySelector('form')
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newItem = document.getElementById('new-task-description').Value;
    console.log(newItem);
    buildTask(newItem);
  })

  function buildTask(task){
    const li = document.createElement('li')
    li.textContent= `${task}`
    const theList = document.querySelector('#tasks')
    theList.appendChild(li)
  

const button = document.createElement('button')
button.addEventListener('click',handledelete);
button.textContent = 'x'
li.textContent = `${task}`
li.appendChild(button)
console.log(li)
theList.appendChild(li)
  }
});



function handledelete(e){
  e.target.parentNode.remove();
}

