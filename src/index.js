document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // const form = document.querySgetelector("#create-task-form")
  // console.log(form)
  // form.addEventListener("submit", addToDo)

  // function addToDo(e){
  //   console.log(e)
  // }
  const form = document.getElementById("create-task-form")
  const formContainer = document.getElementById("list")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const formInput = e.target.querySelector("#new-task-description").value
    const formPTag = document.createElement('p')
    formPTag .textContent = formInput
    formContainer.appendChild(formPTag)
    console.log(formContainer)
    console.log(formInput)
    
  })
});
