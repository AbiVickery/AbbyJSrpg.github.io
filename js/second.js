function scenario1() {
    var answer;
    var story = prompt("Percy flies around a home and a human is in the proccess of yawning. Does Percy- A. Fly into the human's mouth, knowing he has a 50/50 chance of survival? or B. Land on the human's nose while their eyes are closed?", "input");
    switch(story) {
        case "A" :
            answer = "Percy zooms into the person's mouth, buzzing around in the dark cave. Its all wet and smells bad, ideal for him to live in if he wanted to. As Percy floats around in the mouth, the person finishes yawning and closes their mouth. Only a few seconds after closing their mouth do they realize what has happened and immedeatly open it back up and start coughing and wheezing. Percy takes this chance to escape! That was fun!";
        break;
        case "B" :
            answer = "Percy decides to land on their nose while their eyes are closed. What he didn't know was that the human had a fly swatter in their hands, but that didn't stop him. They took the fly swatter and tried to get PErcy, but he is to fast and quick on his feet, so instead of getting him, they end up hitting themselves in the face, leaving a red mark especially around the nose.";
        break;
        default:
            answer = "Either answer with A or B. please try again.";
    }
    document.getElementById("story1").innerHTML = answer;
}