function scenario1() {
    var answer;
    var story = prompt("Percy flies around a home and a human is in the proccess of yawning. Does Percy- A. Fly into the human's mouth, knowing he has a 50/50 chance of survival? or B. Land on the human's nose while their eyes are closed?", "input");
    switch(story) {
        case "A", "a", "1" :
            answer = "Percy zooms into the person's mouth, buzzing around in the dark cave. Its all wet and smells bad, ideal for him to live in if he wanted to. As Percy floats around in the mouth, the person finishes yawning and closes their mouth. Only a few seconds after closing their mouth do they realize what has happened and immedeatly open it back up and start coughing and wheezing. Percy takes this chance to escape! That was fun!";
            console.log('answer 1/2');
        break;
        case "B", "b", "2" :
            answer = "Percy decides to land on their nose while their eyes are closed. What he didn't know was that the human had a fly swatter in their hands, but that didn't stop him. They took the fly swatter and tried to get PErcy, but he is to fast and quick on his feet, so instead of getting him, they end up hitting themselves in the face, leaving a red mark especially around the nose.";
            console.log('answer 2/2');
        break;
        default:
            answer = "Either answer with A or B. please try again.";
    }
    document.getElementById("story1").innerHTML = answer;
}

function scenario2() {
    var answer;
    var story = prompt("Percy continues flying around, laughing about his previous adventure with that human, the look on their face after what he had done. He wasn't really paying attention to where he was going and got sucked into a vaccum cleaner. Percy is now stuck inside the vaccum, trying to think of what to do next. He has 2 choices. He can- A. Wait until the vaccum gets emptied or turned off and then escape. or B. Fly into the mechanics and break the vaccum down.");
    switch(story) {
        case "A", "a", "1" :
            answer = "He waits for the vaccum to finish and eventually turn off. Once it does turn off, he makes for the exit and fies away from the machine. Thank goodness he didn't try anything drastic, who knows how that would have ended...";
            console.log('answer 1/2');
        break;
        case "B", "b", "2" :
            answer = "Percy goes to the inner mechanics of the vaccum and clogs it up with debris that was stuck to his hairy legs. The whole vaccum starts making bad noises and it stops working. He takes this chance to escape the vaccum cleaner and fly away.";
            console.log('answer 2/2');
        break;
        default:
            answer = "Please answer the question using A, a, B, b, 1 or 2";
    }
    document.getElementById("story2").innerHTML = answer;
}