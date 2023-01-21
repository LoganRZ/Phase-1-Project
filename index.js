const characters=[
    {
      "name": "Rick",
      "status": "Alive",
      "favoriteFood": [
        "Pizza",
        "Candy",
        "Apples"
      ]
    },
    {
      "name": "Morty",
      "status": "Alive",
      "favoriteFood": [
        "Sushi",
        "Chips",
        "Hamburger"
      ]
    },
    {
      "name": "Squanchy",
      "status": "Alive",
      "favoriteFood": [
        "Fish",
        "Chicken",
        "Pork"
      ]
    }
  ]
  
  //the task is to take the characters array and make a button for each character and display it in the buttonsDiv.
  //when the one of the buttons is clicked on, display the name, status, and favorite food for the character that was clicked on inside of the detailsDiv 
  
  //NOTES FOR THE DETAILS DIV
  // The name should be made inside of a h1 HTML element
  // The status should be made inside of a h2 HTML element
  // The favorite food should be displayed inside of a ul HTML element(each food should be listed in its OWN li element)
  
  
  
  let buttonsDiv = document.querySelector('.buttonDiv')
  let detailsDiv = document.querySelector('.detailsDiv')
  
  characters.forEach((character) => {
    let btn = document.createElement('button')
    btn.textContent = character.name
    buttonsDiv.append(btn)
    btn.addEventListener('click', () => {
      let h1 = document.createElement('h1')
      h1.textContent = character.name
      let h2 = document.createElement('h2')
      h2.textContent = character.status
      let ul = document.createElement('ul')
      character.favoriteFood.forEach((food) => {
        let li = document.createElement('li')
        li.textContent = food
        ul.append(li)
      })
      detailsDiv.append(h1, h2, ul)
    })
  })