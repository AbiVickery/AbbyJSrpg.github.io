var character = {
    name: 'Percy Mercy',
    nic: 'Pim',
    otherInfo: [
        age = null,
        gender = null,
        radioactive = true
    ]
}

// prompt('Are you ready to begin?');

// alert('Page still in development!');
// prompt('What is the purpose of your visit?');
// alert('Alright, just curious. :)');

/* function scenario1() {
    // do stuff
} */

function scenario1() {
    alert('Percy flies around a home and a human is in the proccess of yawning. Does Percy-');
    ans1 = prompt('A. Fly into the human\'s mouth, knowing he has a 50/50 chance of survival? or B. Land on the human\'s nose while their eyes are closed?');
    // takes answers
    if (ans1 == [
        'a',
        'A',
        '1'
    ]) {
        //display story for answer 1 of scenario1
        alert('Percy zooms into the person\'s mouth, buzzing around in the dark cave. Its all wet and smells bad, ideal for him to live in if he wanted to. As Percy floats around in the mouth, the person finishes yawning and closes their mouth. Only a few seconds after closing their mouth do they realize what has happened and immedeatly open it back up and start coughing and wheezing. Percy takes this chance to escape! That was fun!');
        console.log('answer 1/2');
    } else if (ans1 == [
        'b',
        'B',
        '2'
    ]) {
        // display story for answer 2 of scenario1
        alert('Percy decides to land on their nose while their eyes are closed. What he didn\'t know was that the human had a fly swatter in their hands, but that didn\'t stop him. They took the fly swatter and tried to get Percy, but he is to fast and quick on his feet, so instead of getting him, they end up hitting themselves in the face, leaving a red mark especially around the nose.');
        console.log('answer 2/2');
    } else {
        console.log('error');
    }
}
// scenario1();

function scenario2() {
    alert('Percy continues flying around, laughing about his previous adventure with that human, the look on their face after what he had done. He wasn\'t really paying attention to where he was going and got sucked into a vaccum cleaner. Percy is now stuck inside the vaccum, trying to think of what to do next. He has 2 choices.');
    ans2 = prompt('He can- A. Wait until the vaccum gets emptied or turned off and then escape. or B. Fly into the mechanics and break the vaccum down.');
    // takes answers
    if (ans2 == [
        'a',
        'A',
        '1'
    ]) {
        // display story for answer 1 of scenario 2
        alert('He waits for the vaccum to finish and eventually turn off. Once it does turn off, he makes for the exit and flies away from the machine. Thank goodness he didn\'t try anything drastic, who knows how that would have ended...');
        console.log('answer 1/2');
    } else if (ans2 == [
        'b',
        'B',
        '2'
    ]){
        // display story for answer 2 of scenario 2
        alert('Percy goes to the inner mechanics of the vaccum and clogs it up with debris that was stuck to his legs. The whole vaccum starts making bad noises and it stops working. He takes this chance to excape the vaccum cleaner and fly away.');
        console.log('answer 2/2');
    } else {
        console.log('error');
    }
}
// scenario2();

function scenario3() {
    alert('Percy decides to leave the house and go out to explore the town. This town is not as big as most but it is quite decent. He passes by a gas station, a library and a convenience store. Percy thinks about exploring one of those places but which one?');
    ans3 = prompt('Does he- A. Explore the Gas Station? B. Explore the Library? or C. Explore the Convenience Store?');
    // takes answers
    if (ans3 == [
        'a',
        'A',
        '1'
    ]) {
        // display story for answer 1 of scenario 3
        alert('Percy decided to explore the gas station. There were only 2 gas pumps so it wasn\'t a very big station. They looked old as well as a bit unused, as if this gas station didn\'t get very many visitors. As for the inside, it was hardly stocked and he couldn\'t see anyone else. He honestly started to wonder if this place was even open... Eventually he was bored and decided to leave and explore the rest of town.');
        console.log('answer 1/3');
    } else if (ans3 == [
        'b',
        'B',
        '2'
    ]) {
        // display story for answer 2 of scenario 3
        alert('Percy decided to explore the library. The inside was not to bad. It was decorated to look like a nice library, except that it was really old. So old that some of the paint was starting to peel and chip. There were shelves with books covered in dust like they haven\'t seen the sun in forever. Speaking of sun, there was a broken window on the ceiling that let in sun light, making the whole place seem a bit magical. But there wern\'t any people in the library... Eventually he got bored after flying around the empty library and decided to go back out and explore the rest of the town.');
        console.log('answer 2/3');
    } else if (ans3 == [
        'c',
        'C',
        '3'
    ]) {
        // display story for answer 3 of scenario 3
        alert('Percy decided to explore the convenience store. The outside of the store was boring and placid, but the inside was quite different. There were shelves with all different kinds of items on them. People were busy walking around looking for objects through the store. There was one person that seemed a bit strange, so he went over to them to see what they were doing. When Percy was at eye level with them and they noticed him, they screamed as loud as they could. Percy guessed they must have an irational fear of insects and made his way out of the store quickly. Well, back to exploring the rest of the town.');
        console.log('answer 3/3');
    } else {
        console.log('error');
    }
}
// scenario3();
function scenario4() {
    alert('Percy is flying through the streets of town when he notices some signs pointing towards a bulding. On the signs it says something about a big meeting/presentation that is being held. That sounds interesting.');
    ans4 = prompt('Does he- A. Visit this big meeting/presentation to see whats going on? or B. Ignore the signs but still go knowing there would probably be foo there?');
    // takes answers
    if (ans4 == [
        'a',
        'A',
        '1'
    ]) {
        // display story for answer 1 of scenario 4
        alert('Percy decides that this could be interesting. Maybe they are passing a law that lests flies access things like missile plans... nah, that\'s absurd. Still, couldn\'t hurt to check...');
        console.log('answer 1/2');
    } else if (ans4 == [
        'b',
        'B',
        '2'
    ]) {
        // display story for answer 2 of scenario 4
        alert('Percy starts thinking with his stomach and decides to go anyway, thinking that a big meeting/presentation like this is bound to have some food.');
        console.log('answer 2/2');
    } else {
        console.log('error');
    }
}
// scenario4();

function scenario5() {
    alert('Percy is now in a building that has lots of people in dress clothes. There\'s a stage with someone on it that looks nervous, like they are about to give a big speech. They have a microphone sitting in a microphone stand. Percy suddenly has an idea.');
    ans5 = prompt('Does he- A. Go through with the idea? or B. Ignore the idea knowing he could be killed and continue exploring the building?');
    // takes answers
    if (ans5 == [
        'a',
        'A',
        '1'
    ]) {
        // display story for answer 1 of scenario 5
        alert('Percy decides to go through with his idea. First he sneaks over to the mic, making sure its plugged in (which is is of course). Then he lands on the microphone and makes the most annoying buzzing noises ever as loud as he can. The whole room is in an uproar as they think the noise is caused by someone in the back messing with the sound systems. Percy just sits there luaghing while buzzing until someone sees him sitting on the microphone and then- SPLAT! He has been smushed! But on the plus side, the person that smushed him didn\'t know that Percy was radioactive so now they have radioation poisoning. Poor them. POOR PERCY! Oh well, that\'s life. THE END!... Just kidding! Did you forget that you have skin as strong as steel? Nothing can just squish you!... unless it were made of some imaginary substance like vabranium... or is it adamantium... whatever, you play dead until the person flicks you off and into the unknown. You wait a few minutes before getting up and leaving that area of the building to continue exploring.');
        console.log('answer 1/2');
    } else if (ans5 == [
        'b',
        'B',
        '2'
    ]) {
        // display story for answer 2 of scenario 5
        alert('Percy continues on with his adventure, exploring the building.');
        console.log('answer 2/2');
    } else {
        console.log('error');
    }
}
// scenario5();

function scenario6() {
    alert('Percy continues searching the building, looking for fun things to do when he stumbles upon a tray of cupcakes. Percy is feeling hungry and wants to eat one of them (or at least part of one), but there is a person guarding them.');
    ans6 = prompt('Will he- A. Swoop in lkike a ravage bird and dive-bomb onto one of the cupcakes? or B. Wait for the person to go away?');
    // takes answers
    if (ans6 == [
        'a',
        'A',
        '1'
    ]) {
        // display story for answer 1 of scenario 6
        alert('Percy decided to do a sort of swoop in and dive-bomb move. While doing this, he had the tune "flight of the valkerie" playing in his head for dramatic effect. He dive-bombed and hit one of the cupcakes. The person must have noticed cause they suddenly ran over to a window, holding the cupcake Percy landed in and CHUCKED it out the window! Well, at least he has his own cupcake all to himself. He sits there and eats until he is comfortably full. Then takes off, exploring more of the town.');
        console.log('answer 1/2');
    } else if (ans6 == [
        'b',
        'B',
        '2'
    ]) {
        // display story for answer 2 of scenario 6
        alert('Percy decided to wait for the person to stop guarding the cupcakes and walk away. Yeah, they stayed in place for a really long time... Eventually Percy gave up and left. He would find something fun to do or something else to eat elsewhere...');
        console.log('answer 2/2');
    } else {
        console.log('error');
    }
}
// scenario6();
function scenario7() {
    alert('Percy is currently flying around the town and he sees a lab-like structure on a hill by itself. Curiousity sets in and he contemplates whether or not he should explore it or just keep flying around the town.');
    ans7 = prompt('Does he- A. Go and explore the Lab? or B. Keep exploring the town?');
    // takes answers
    if (ans7 == [
        'a',
        'A',
        '1'
    ]) {
        // display story for answer 1 of scenario 7
        alert('Percy decided to go and explore the lab, curious as to what might lie inside the halls of the sterile building.');
        console.log('answer 1/2');
    } else if (ans7 == [
        'b',
        'B',
        '2'
    ]) {
        // display story for answer 2 of scenario 7
        alert('Percy starts to lose interest in the building on the hill and continues exploring the town, but later on he keeps thinking about the building on the hill, what secrets it might hold. Eventually, he decides to go back and take a look around the lab, curiosity outrulling reason.');
        console.log('answer 2/2');
    } else {
        console.log('error');
    }
}
// scenario7();
function scenario8() {
    alert('Percy is flying around the laboratory and he spots a strange device on the table. Normally when he sees devices like this, he ignores them but this one is tiny, small enough for him to operate. He looks at what different controls it has and there are 2 buttons. One is blue with a circle shape. The other is yellow with a square shape. On the back of the device is a warning not to use or there will be severe consequences. Being the tiny jerk he is, Percy ignores the warning and decides to use the device just to be funny. Which button does he press?');
    ans8 = prompt('Does he press- A. The blue circle button? or B. The yellow square button?');
    // takes answers
    if (ans8 == [
        'a',
        'A',
        '1'
    ]) {
        // display story for answer 1 of scenario 8
        alert('At first, nothing happens. But then he hears a strange noise and suddenly there is a massive black hole forming in the room out of thin air. It swallows the entire earth and everything and everyone dies. THE END!');
        console.log('answer 1/2');
    } else if (ans8 == [
        'b',
        'B',
        '2'
    ]) {
        // display story for answer 2 of scenario 8
        alert('PErcy pushes the yellow button and suddenly it starts raining inside the lab. Apparently he didn\'t notice he was sitting under a shower head that has been attached to the ceiling. The liquid is a sort of yellow color. Its lemonade! YUM! While he sits there enjoying the lemonade, he wonders who made this device and why. Percy is happy with the lemonade but now he goes off to explore the rest of the lab.');
        console.log('answer 2/2');
    } else {
        console.log('error');
    }
}
// scenario8();
function scenario9() {
    alert('Percy is now in a different part of the lab, exploring and kind of wondering where all the lab people are cause he hasnt seen any lately. He stumbles into a large warehouse-like room that has a huge rocket ship. His curiousity compels him! He goes inside the rocket and sees a control panel with all sorts of buttons and switches.');
    ans9 = prompt('Does he- A. Press all the buttons and switches until something happens? or B. Only press one random button?');
    // takes answers
    if (ans9 = [
        'a',
        'A',
        '1'
    ]) {
        // display story for answer 1 of scenario 9
        alert('Percy presses all the buttons and switches to see what happens and for fun because why not? Lots of lights start flashing and noises go off, including what sounds like the engines starting up. Suddenly the rocket blasts right through the roof of the lab and starts heading up into the sky, breaking through the atmosphere. Percy looks out the window and sees that he is headed towards the moon! What will he do now? Will he be the first radioactive fly on the moon!?');
        console.log('answer 1/2');
    } else if (ans9 == [
        'b',
        'B',
        '2'
    ]) {
        // display story for answer 2 of scenario 9
        alert('Percy decided to only press one button and choose a random one. Suddenly a countdown starts and he hears the sound of the engines of the rocket turning on. He knows what that means... THE ROCKET IS GETTING READY TO LAUNCH!!! Percy and the rocket soon start making their way up, pushing through the earth\'s atmosphere, heading for the moon! What will happen now?');
        console.log('answer 2/2');
    } else {
        console.log('error');
    }
}
// scenario9();

// function myFunction() {
//     document.getElementById("demo").innerHTML = "test1 of js to text";
//   }
  
//   myFunction();

// set up text to print, each item in array is new line
var aText = new Array(
    "Percy Mercy, (called Pim for short), was an ordinary house fly that would fly around getting all up in people's faces. One day while flying around, Pim accidently landed in something radioactive and became radioactive himself. He now can fly slightly faster than before, has skin as strong as steel, I mean he's basically a living bullet. Now, with his new abilities, he flies around being the tiniest jerk alive (at the moment)."
    );
    var iSpeed = 100; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();