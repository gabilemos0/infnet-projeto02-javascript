const form = document.querySelector('.formContact')
const inputs = document.getElementsByClassName('editArea')
let submitBtn = document.getElementById('submit')

function cleanInputs() {
  for (const input of inputs) {
    input.value = ''
  }
}

form.addEventListener('submit', event => {
  event.preventDefault()
  const buttonText = submitBtn.innerText
  submitBtn.innerText = ''
  submitBtn.innerHTML =
    '<span class="spinner-border  spinner-border-sm"></span>'
  setTimeout(() => {
    submitBtn.innerHTML = ''
    submitBtn.innerText = buttonText
    cleanInputs()
  }, 2000)
})
