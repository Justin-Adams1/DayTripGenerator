function getRandomElement(arrayToCheck){
        let selectedElement = arrayToCheck[Math.floor(Math.random() * arrayToCheck.length)];
        return selectedElement;
}

function getRestaurantList(destination){
    if(destination === "Louisville"){
        let restaurantList = ["Brown Hotel Lobby Bar & Grill", "Yummy Pollo", "J. Graham's Cafe", "Jack Fry's", "English Grill"];
        let selectedRestaurant = getRandomElement(restaurantList);
        return selectedRestaurant;
    }
    else if(destination === "Lexington"){
        let restaurantList = ["Corto Lima", "Merrick Inn Restaurant", "Red State BBQ", "Tony's of Lexington", "Coles 735 Main"];
        let selectedRestaurant = getRandomElement(restaurantList);
        return selectedRestaurant;
    }
    else if(destination === "Bowling Green"){
        let restaurantList = ["Mellow Mushroom Bowling Green", "Rafferty's Restaurant & Bar", "Double Dogs Chow House", "The Bistro", "Montana Grille"];
        let selectedRestaurant = getRandomElement(restaurantList);
        return selectedRestaurant;
    }
    else if(destination === "Georgetown"){
        let restaurantList = ["Cattleman's Roadhouse", "Rodney's on Broadway", "Fava's Restaurant", "Fatkat's Pizzeria", "Galvin's"];
        let selectedRestaurant = getRandomElement(restaurantList);
        return selectedRestaurant;
    }
    else if(destination === "Covington"){
        let restaurantList = ["Otto's", "Bouquet Restaurant", "Blinkers Tavern", "Orchids at Palm Court", "Sotto"];
        let selectedRestaurant = getRandomElement(restaurantList);
        return selectedRestaurant;
    }
}

let destinationArray = ["Louisville", "Lexington", "Bowling Green", "Georgetown", "Covington"];
let travelModes = ["Biking", "Walking", "Taking an Uber", "Renting a Limo", "Driving myself"];
let entertainment = ["Laser Tag", "Wine Tasting", "Tour of a Museum", "Bowling", "Room Escape Game"];
let selectedCity;
let selectedRestaurant;
let selectedTravelMode;
let selectedEntertainment;
let confirmation;
let finalConfirmation;

do{
    confirmation = "no"; //reset confirmation
    while(confirmation != "yes"){
    selectedCity = getRandomElement(destinationArray);
    confirmation = prompt("Would you like to go to:\n\n" + selectedCity + "\n\nPlease type yes or hit enter for a new choice.");
    }
    confirmation = "no"; //reset confirmation
    while(confirmation != "yes"){
    selectedRestaurant = getRestaurantList(selectedCity);
    confirmation = prompt("Would you like to eat at:\n\n" + selectedRestaurant + "\n\nPlease type yes or hit enter for a new choice.");
    }
    confirmation = "no"; //reset confirmation
    while(confirmation != "yes"){
    selectedTravel = getRandomElement(travelModes);
    confirmation = prompt("Would you like to travel by:\n\n" + selectedTravel + "\n\nPlease type yes or hit enter for a new choice.");
    }
    confirmation = "no"; //reset confirmation
    while(confirmation != "yes"){
        selectedEntertainment = getRandomElement(entertainment);
        confirmation = prompt("While there, would you like this activity?\n\n" + selectedEntertainment + "\n\nPlease type yes or hit enter for a new choice.");
        }
console.log("You have selected the following choices:\n\n" + selectedCity + " ," + selectedRestaurant + " ," + selectedTravel + " ," + selectedEntertainment + ".");
finalConfirmation = prompt("Would you like to change anything? Please type yes.\n If everything looks good, hit enter");
}
while(finalConfirmation === "yes");

console.log("Your final selection is:\n\n" + selectedCity + ", " + selectedRestaurant + ", " + selectedTravel + ", " + selectedEntertainment + ".");