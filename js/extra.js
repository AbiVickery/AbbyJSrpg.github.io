function save() {
    // make the object from things we want to save
    var save = {
        player1 = player,
        story1 = story,
        outcome1 = outcome
    }
    // save it to local storage
    localStorage.setItem("save", JSON.stringify(save));
}

// save();

function load() {
    // make a variable from a save file
    var savegame = JSON.parse(localStorage.getItem("save"));
    // check if it exists
    if (savegame != null && savegame != undefined) {
        // update the game player and story
        story = savegame.story1;
        outcome = savegame.outcome1;
    }
}

// load();

function myFunction() {
    var person = prompt("Please enter your name", "insert_name_here");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?";
    }
  }