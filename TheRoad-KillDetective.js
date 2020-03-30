//https://www.codewars.com/kata/58e18c5434a3022d270000f2

// My name is State Trooper Mark ("skidmark" ) McDingle.

// My job is maintaining 117 miles of the Interstate, keeping it clean and clear of dead varmints.

// It is a serious job and I take my job seriously.

// I am the Road-Kill Detective

// NOTE : PLEASE CHECK THE KATA LINK FOR MORE INFORMATION

// Every time I find some dead critter I scrape it up and record what type it was in my dead-critter notebook.

// Mostly I just cruise up and down the interstate and only find a few racoons or the occasional squirrel...

// But recently the road-kill has become much more exotic.

// There must be some illegal private zoo back in the woods with a major security problem.

// But that's none of my business... Anything beyond the fog-line is out of my jurisdiction.

// Evidence
// Here are some photos of what I came across last week:

// There was a thing that looked like a hyena

// ==========h===yyyyyy===eeee=n==a========
// a long black and white smudge that probably once was a penguin

// ======pe====nnnnnn=======================n=n=ng====u==iiii=iii==nn========================n=
// and an unlucky bear that was hit going the other direction

// =====r=rrr=rra=====eee======bb====b=======
// Kata Task
// Even for a professional like me, the identification of flattened exotic animals is not always easy!

// If it ever happens that I can't find all of the remains, or if there are gaps or other parts that I don't recognise, 
//then I record it as ?? in my dead-critter notebook.

// What I really need is a program that I can scan my photos into which can give back the correct answer straight away.

// Something like this:

// Input
// photo (not null)
// Output
// the detected animal name, or ?? if unknown^
// ^ Note: An array/list of all "known" animals is preloaded in a variable called ANIMALS (refer to the initial solution)

var roadKill = function (photo) {
  let animals = ANIMALS;
  let evidence = cleanEvidence(photo);
  let result = '';

  if (!evidence.length || !animals || evidence.join('').includes(' ')) {
    return '??';
  }

  animals = animals.filter(val => val.split('')[0] == evidence[0][0] || val.split('')[val.length - 1] == evidence[0][0]);

  if (!animals.length) {
    return '??';
  }

  animals.map(val => {
    let animal = val;
    let reverseAnimal = val.split('').reverse().join('');

    if (checkAnimal(animal, photo)) {
      result = val;
    } else if (checkAnimal(reverseAnimal, photo)) {
      result = val;
    } else {
      if (!result) {
        result = '??'
      }
    }
  });

  return result;
}

checkAnimal = (animal, photo) => {
  let result;
  let evidence = cleanEvidence(photo);
  animal = cleanEvidence(animal);

  for (let i = 0; i <= animal.length - 1; i++) {
    if (animal[i][0] == evidence[i][0] && animal[i][1] <= evidence[i][1] && animal.length == evidence.length) {
      result = true;
    } else {
      result = false;
      break;
    }
  }

  return result;
}

cleanEvidence = (photo) => {
  let evidence = [];
  let holder = '';
  photo = photo.split('').filter(x => x != '=');

  while (photo.length > 0) {
    let temp = [];
    temp.push(photo.splice(0, 1)[0]);

    if (temp[temp.length - 1] == photo[0]) {
      do {
        holder = photo.splice(0, 1)[0];
        temp.push(holder);
      } while (temp[temp.length - 1] == photo[0]);
      evidence.push([temp[0], temp.length]);
    } else {
      evidence.push([temp[0], temp.length]);
    }
  }

  return evidence;
};
