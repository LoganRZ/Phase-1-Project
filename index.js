//Use DomContentLoaded to fetch the reptiles after the DOM loads, it prevents any errors happening before the DOM loads
//Makes a const for 'API'
//Used DomContenetLoaded event listener

document.addEventListener('DOMContentLoaded', sandwhiches)

//getting the reptiles using fetch GET

function fetchSandwhiches(){
    fetch('http://localhost:3000/sandwhiches')
    .then(res => res.json())
    .then(sandwhiches => data(sandwhiches))
}

//using forEach to loop through the reptile data
// then send each reptile through the addReptile function

function data(sandwhichType){
    sandwhichType.forEach(sandwhich => {
        addSandwhich(sandwhich)
    })
}

let reptileContainer = document.querySelector('.sandwhich-holder')

function addSandwhich(sandwhich) {
    let card = document.createElement('div')
    card.className = 'card'
    let img = document.createElement('img')
    img.src = sandwhich.image
    img.className = 'sandwhich-img'
    let type = document.createElement('div')
    type.textContent = sandwhich.type
    type.className = 'sandwhich-info'
    let price = document.createElement('div')
    price.textContent = sandwhich.price
    price.className = 'sandwhich-info'
    let amount = document.createElement('div')
    amount.textContent = `Amount: ${sandwhich.amount}`
    amount.className = 'amoun'
    let buyBtn = document.createElement('button')
    buyBtn.textContent = 'Buy'
    buyBtn.id = sandwhich.id
    buyBtn.className = 'buyBtn'
    card.append(img, type, price, amount, buyBtn)
    sandwhichHolder.append(card)
    if(sandwhich.amount === 0){
        buyBtn.disabled = true
        card.querySelector('.amoun').textContent = 'Out of this Item'
    }
// Used submit event listener

let buy = document.getElementById(`${sandwhich.id}`)
buy.addEventListener('click', () => {
    sandwhich.amount -= 1
    if (sandwhich.amount === 0){
        card.querySelector('.quant').textContent = 'Out of this Item'
        buyBtn.disabled = true
        update(reptile)
    }else{
        card.querySelector('.quant').textContent = `Quantity: ${sandwhich.amount}`
        update(sandwhich)
    }
})
}

// PATCH method used to send the updated quantity of the reptiles

function update(reptile){
    fetch(`http://localhost:3000/sandwhiches/${sandwhich.id}`,{
        method: 'PATCH',
        headers: {
             'Content-Type': 'application/json',
             Accept: 'application.json'
        },
        body:JSON.stringify(sandwhich)
    })
}

//Submit event listener

let form = document.querySelector('form')
form.addEventListener('submit', newSandwhich)

function anotherSandwhich(e){
    e.preventDefault()
    let newSandwhich = {
        'type': e.target.name.value,
        'image': e.target.image.value,
        'amount': e.target.amount.value,
        'quantity': e.target.quantity.value
    }

    newSandwhichSubmit(newSandwhich)
    form.reset()
}

//Used POST method to send new reptiles to the database

function sandyWhich(anotherSandwhich){
    fetch('http://localhost:3000/sandwhiches',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(anotherSandwhich)
    })
    .then(resp => resp.json())
    .then(sandwhich => addSandwhich(sandwhich))
}