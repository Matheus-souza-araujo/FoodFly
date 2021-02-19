// === Fazer animação do adicionar novo campo no admin === 
function addIngredient() {
    document.querySelector('.add-ingredient').addEventListener('click', function() {
        const ingredients = document.querySelector('#ingredients')
        const fieldContainer = document.querySelectorAll('.ingredient')
        const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true)
        
        if (newField.children[0].value == "") return false
        
        newField.children[0].value = ''
        ingredients.appendChild(newField)
    })
  }
  
  document
    .querySelector(".add-ingredient")
    .addEventListener("click", addIngredient);

function addStep() {
    document.querySelector('.add-step').addEventListener('click', function() {
        const steps = document.querySelector('#steps')
        const fieldContainer = document.querySelectorAll('.step')
        const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true)
        
        if (newField.children[0].value == "") return false
        
        newField.children[0].value = ''
        steps.appendChild(newField)
    })
}

document
.querySelector(".add-step")
.addEventListener("click", addStep);