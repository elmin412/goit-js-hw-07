const textInput = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
  
  if (event.currentTarget.value.trim() !== "") {
    output.textContent = event.currentTarget.value;
  } else output.textContent = "Anonymous";
})