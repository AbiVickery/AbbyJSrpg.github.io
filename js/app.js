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
    alert('story and choice #1');
    ans1 = prompt('choices A and B');
    // takes answers
    if (ans1 == [
        'a',
        'A',
        '1'
    ]) {
        //display story for answer 1 of scenario1
        alert('answer1 of scenario1');
        console.log('answer 1/2');
    } else {
        // display story for answer 2 of scenario1
        alert('answer2 of scenario1');
        console.log('answer 2/2');
    }
}
scenario1();