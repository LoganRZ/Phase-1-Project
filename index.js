const sandwhiches=[
    {
      "name": "Turkey and Cheese",
      "ingredientCount": "6",
      "ingredients": [
        "Lettuce",
        "Tomato",
        "Turkey",
        "Cheddar",
        "Bread",
        "Mustard"
      ]
    },
    {
      "name": "BLT",
      "ingredientCount": "5",
      "ingredients": [
        "Bacon",
        "Lettuce",
        "Tomato",
        "Bread",
        "Mayo"
      ]
    },
    {
      "name": "Meatball",
      "ingredientCount": "4",
      "ingredients": [
        "Meatballs",
        "Marinara Sauce",
        "Bread",
        "Cheese"
      ]
    }
  ]

  const element = document.getElementById("myBtn");
  element.addEventListener("click", myFunction);
  
  function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  }