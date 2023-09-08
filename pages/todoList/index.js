const form = document.querySelector('form');
const input = document.querySelector('#input-text');

function createCard() {
  const div = document.createElement('div')
  div.classList.add('card');
  
  const p = document.createElement('p')
  const button = document.createElement('button')
  
  div.appendChild(p)
  div.appendChild(button)
  
  button.classList.add("btn-delete")
  button.textContent = "X"

  p.textContent = input.value

  document.body.appendChild(div)
}

form.onsubmit = (event) => {
  event.preventDefault()

  createCard()
  
  

  input.value = ""
}

function deleteCard(event) {
  if(event.target.classList.contains("btn-delete")) {
    if(confirm("Deseja apagar este item?")) {

      event.target.parentElement.remove()
    }
  }
}




//clone node