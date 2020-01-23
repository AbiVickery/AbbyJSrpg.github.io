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
// scenario1();

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
// scenario2();

function scenario3() {
    var answer;
    var story = prompt("Percy decides to leave the house and go out to explore the town. This town is not as big as most but it is quite decent. He passes by a gas station, a library and a convenience store. Percy thinks about exploring one of those places but which one? Does he- A. Explore teh gas station? B. Explore the library? or C. Explore the convenience store?");
    switch(story) {
        case "A", "a", "1":
            answer = "Percy decided to explore the gas station. There were only 2 gas pumps so it wasn't a very big station. They looked old as well as a bit unused, as if this gas station didn't get very many visitors. As for the inside, it was hardly stocked and he couldn't see anyone else. He honestly started to wonder if this place was even open... Eventually he was bored and decided to leave and explore the rest of town.";
            console.log('answer 1/3');
        break;
        case "B", "b", "2":
            answer = "Percy decided to explore the library. The inside was not to bad. It was decorated to look like a nice library, except that it was really old. So old that some of the paint was starting to peel and chip. There were shelves with books covered in dust like they haven't seen the sun in forever. Speaking of sun, there was a broken window on the ceiling that let in sun light, making the whole place seem a bit magical. But there wern't anypeople in the library... Eventually he got bored after flying around the empty library and decided to go back out and explore the rest of the town.";
            console.log('answer 2/3');
        break;
        case "C", "c", "3":
            answer = "Percy decided to explore the convenience store. The outside of the store was boring and placid but the inside was quite different. There were shelves with all different kinds of items on them. People were busy walking around looking for objects through the store. There was one person that seemed a bit strange, so he went over to them to see what they were doing. When Percy was at eye level with them and they noticed him, they screamed as loud as they could. Percy guessed they must have an irrational fewar of insects and made his way out of the store quickly. Well, back to exploring the rest of the town.";
            console.log('answer 3/3');
        break;
        default:
            answer = "Please answer the question using A, a, B, b, C, c, 1, 2 or 3";
    }
    document.getElementById("story3").innerHTML = answer;
}
// scenario3();
