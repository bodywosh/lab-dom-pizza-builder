// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

function renderPrice() {
  // DESOLE CHER TA C EST DEGEU JVAIS REFACTOR TOUSSA

  let panel = document.querySelector('.panel.price ul')
  panel.innerHTML=''
  let totalPrice = 10

  if(state.pepperoni){
    let newLi = document.createElement("li");
    let newContent = document.createTextNode(`\$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}`.toLowerCase());
    newLi.appendChild(newContent);
    panel.insertAdjacentElement('beforeend', newLi);
    totalPrice += ingredients.pepperoni.price
  }
  if(state.mushrooms){
    let newLi = document.createElement("li");
    let newContent = document.createTextNode(`\$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`.toLowerCase());
    newLi.appendChild(newContent);
    panel.insertAdjacentElement('beforeend', newLi);
    totalPrice += ingredients.mushrooms.price
  }
  if(state.greenPeppers){
    let newLi = document.createElement("li");
    let newContent = document.createTextNode(`\$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`.toLowerCase());
    newLi.appendChild(newContent);
    panel.insertAdjacentElement('beforeend', newLi);
    totalPrice += ingredients.greenPeppers.price
  }
  if(state.whiteSauce){
    let newLi = document.createElement("li");
    let newContent = document.createTextNode(`\$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`.toLowerCase());
    newLi.appendChild(newContent);
    panel.insertAdjacentElement('beforeend', newLi);
    totalPrice += ingredients.whiteSauce.price
  }
  if(state.glutenFreeCrust){
    let newLi = document.createElement("li");
    let newContent = document.createTextNode(`\$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`.toLowerCase());
    newLi.appendChild(newContent);
    panel.insertAdjacentElement('beforeend', newLi);
    totalPrice += ingredients.glutenFreeCrust.price
  }

  document.querySelector('.panel.price strong').textContent=`\$${totalPrice}`
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreen) => {
    if (state.greenPeppers) {
      oneGreen.style.visibility = 'visible';
    } else {
      oneGreen.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((item) => {
    if (state.whiteSauce) {
      item.classList.add("sauce-white")
    } else {
      item.classList.remove("sauce-white")
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((item) => {
    if (state.glutenFreeCrust) {
      item.classList.add("crust-gluten-free")
    } else {
      item.classList.remove("crust-gluten-free")
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if(state.pepperoni){
    document.querySelector('.btn-pepperoni').classList.add('active')
  }else{
    document.querySelector('.btn-pepperoni').classList.remove('active')
  }
  if(state.mushrooms){
    document.querySelector('.btn-mushrooms').classList.add('active')
  }else{
    document.querySelector('.btn-mushrooms').classList.remove('active')
  }
  if(state.greenPeppers){
    document.querySelector('.btn-green-peppers').classList.add('active')
  }else{
    document.querySelector('.btn-green-peppers').classList.remove('active')
  }
  if(state.whiteSauce){
    document.querySelector('.btn-sauce').classList.add('active')
  }else{
    document.querySelector('.btn-sauce').classList.remove('active')
  }
  if(state.glutenFreeCrust){
    document.querySelector('.btn-crust').classList.add('active')
  }else{
    document.querySelector('.btn-crust').classList.remove('active')
  }
}



renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').addEventListener('click',function(){
  state.mushrooms = !state.mushrooms
  renderEverything()
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').addEventListener('click',function(){
  state.greenPeppers = !state.greenPeppers
  renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click',function(){
  state.whiteSauce = !state.whiteSauce
  renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click',function(){
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
})