function getDestination(){
        let destinationArray = ["Louisville", "Lexington", "Bowling Green", "Georgetown", "Covington"];
        let selectedCity = destinationArray[Math.floor(Math.random() * destinationArray.length)];
        return selectedCity;
}

function getRestaurant(destination){
    if(destination === "Louisville"){
        let restaurantList = ["Brown Hotel Lobby Bar & Grill", "Yummy Pollo", "J. Graham's Cafe", "Jack Fry's", "English Grill"];
        let selectedRestaurant = restaurantList[Math.floor(Math.random() * restaurantList.length)];
        return selectedCity;
    }
    else if(destination === "Lexington"){
        let restaurantList = ["Corto Lima", "Merrick Inn Restaurant", "Red State BBQ", "Tony's of Lexington", "Coles 735 Main"];
        let selectedRestaurant = restaurantList[Math.floor(Math.random() * restaurantList.length)];
        return selectedCity;
    }
    else if(destination === "Bowling Green"){
        let restaurantList = ["Mellow Mushroom Bowling Green", "Rafferty's Restaurant & Bar", "Double Dogs Chow House", "The Bistro", "Montana Grille"];
        let selectedRestaurant = restaurantList[Math.floor(Math.random() * restaurantList.length)];
        return selectedCity;
    }
    else if(destination === "Georgetown"){
        let restaurantList = ["Cattleman's Roadhouse", "Rodney's on Broadway", "Fava's Restaurant", "Fatkat's Pizzeria", "Galvin's];
        let selectedRestaurant = restaurantList[Math.floor(Math.random() * restaurantList.length)];
        return selectedCity;
    }
    else if(destination === "Covington"){
        let restaurantList = ["Otto's", "Bouquet Restaurant", "Blinkers Tavern", "Orchids at Palm Court", "Sotto"];
        let selectedRestaurant = restaurantList[Math.floor(Math.random() * restaurantList.length)];
        return selectedCity;
    }

    


}

function getModeOfTravel(){
    


}

function getEntertainment(destination){
    


}

let selection = [];
let selectedCity;
let confirmation;

while(confirmation != "yes"){
    selectedCity = getDestination();
    confirmation = prompt("Would you like to go to: " + selectedCity + "? Please type yes or no.");
    }
while(confirmation != "yes"){
        selectedCity = getDestination();
        confirmation = prompt("Would you like to go to: " + selectedCity + "? Please type yes or no.");
        }


// selection.push(getDestination);

// console.log(selection);
