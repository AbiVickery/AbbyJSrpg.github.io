var character = {
    name: 'Percy Mercy',
    nic: 'Pim',
    otherInfo: [
        age = null,
        gender = null
    ]
}

// prompt('Are you ready to begin?');

alert('Page still in development!');

/* function scenario1() {
    // do stuff
} */

function scenario1() {
    alert('You fly around a home and a human is in the proccess of yawning. Do you-');
    ans1 = prompt('A. Fly into their mouth, knowing you have a 50/50 chance of survival? or B. Land on their nose while their eyes are closed?');
    // takes answers
    if (ans1 == [
        'a',
        'A',
        '1'
    ]) {
        //display story for answer 1 of scenario1
        message('You zoom into the person\'s mouth, buzzing around in the dark cave. Its all wet and smells bad, ideal for you to live in if you wanted to. As you\'re floating around in the mouth, the person finishes yawning and closes their mouth. Only a few seconds after closing their mouth do they realize what has happened and immedeatly open it back up and start coughing and wheezing. You take this chance to escape! That was fun!');
        console.log('answer 1/2');
    } else if (ans1 == [
        'b',
        'B',
        '2'
    ]) {
        // display story for answer 2 of scenario1
        message('You decide to land on their nose while their eyes are closed. What you didn\'t know was that they had a fly swatter in their hands, but that didn\'t stop you. They took the fly swatter and tried to get you, but you are to fast and quick on your feet, so instead of getting you, they end up hitting themselves in the face, leaving a red mark especially around the nose.');
        console.log('answer 2/2');
    }
}
// scenario1();
function scenario2() {
    alert('You continue flying around, laughing about your previous adventure with that human, the look on their face after what you had done. You wer\'nt really paying attention to where you were going and got sucked into a vaccum cleaner.');
    ans2 = prompt('.');
    // takes answers
    if (ans2 == [
        'a',
        'A',
        '1'
    ]) {
        // display story for answer 1 of scenario 2
        message('.');
        console.log('answer 1/2');
    } else if(ans2 == [
        'b',
        'B',
        '2'
    ]){
        // display story for answer 2 of scenario 2
        message('.');
        console.log('answer 2/2');
    }
}
// scenario2();

function scenario3() {
    // do stuff
}
// scenario3();

function scenario4() {
    // do stuff
}
// scenario4();

function scenario5() {
    // do stuff
}
// scenario5();

function scenario6() {
    alert('You\'re now in a building that has lots of people in dress clothes. There\'s a stage with someone on it that looks nervous, like they are about to give a big speech. They have a microphone sitting on a stand. You suddenly have an idea. Do you-');
    ans6 = prompt('A. Go through with the idea? or B. Ignore the idea knowing you could be killed and continue exploring the building?');
    // takes answers
    if (ans6 == [
        'a',
        'A',
        '1'
    ]) {
        // display story for answer 1 of scenario 6
        message('You decide to go through with your idea. First you sneak over to the mic, making sure its plugged in (which it is of course). Then you land on the microphone and make the most annoying buzzing noises ever as loud as you can. The whole room is in an uproar as they think the noise is cause by someone in the back messing with the sound systems. You just sit there laughing while buzzing until someone sees you on the mic and then- SPLAT! You have been squished! But on the plus side, the person that smushed you didn\'t know that you were radioactive so now they have radiation poisoning. Poor them. POOR YOU! Oh well, that\'s life. THE END!');
        console.log('answer 1/2');
    } else if (ans6 == [
        'b',
        'B',
        '2'
    ]) {
        // display story for answer 2 of scenario 6
        message('You continue on with your adventure, exploring the building.');
        console.log('answer 2/2');
    }
}
// scenario6();

function myFunction() {
    document.getElementById("demo").innerHTML = "test1 of js to text";
  }
  
  myFunction();