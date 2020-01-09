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
    alert('.');
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