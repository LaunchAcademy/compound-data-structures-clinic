// 2D Arrays: Experiment Results: Times to complete all reps

const experimentResults = [
  [5, 4.5, 5.33, 4.8],
  [4, 3.2, 4.4, 4.8],
  [6.2, 5.7, 5.8, 5.2],
  [4.3, 3.5, 6.4, 4.7],
]

// What was participant three's time on the first test?

const participantThree = experimentResults[2]
console.log(participantThree);
const firstTest = participantThree[0]
console.log(`Participant 3's first test had a time of ${firstTest}`);

// What is participant 2's average?

const participantTwo = experimentResults[1]

// let sum = 0
// participantTwo.forEach(score => {
//   sum += score
// })

let sum = participantTwo.reduce((accumulator, currentValue) => {
  return accumulator += currentValue
})

console.log(sum);
let average = sum/participantTwo.length
console.log(`The average time for Participant 2 is ${average}`)

// Create a new array of all third test times

// let thirdTestTimes = []
// experimentResults.forEach(participant => {
//   thirdTestTimes.push(participant[2])
// })

let thirdTestTimes = experimentResults.map(participant => {
  return participant[2]
})

console.log("thirdTestTimes", thirdTestTimes)

// What was the average time on test 1?


// What was the worst time on exam 2?

// figure out the times for exam 2
// let secondTestTimes = experimentResults.map(participant => participant[1])
// console.log("secondTestTimes", secondTestTimes)
// let worstTime = Math.max(...secondTestTimes)

// figure out which one is the worst
// let worstTime = secondTestTimes[0]
// secondTestTimes.forEach(testTime => {
//   // if the next test time is slower than the "worstTime", we want to reset the "worstTime"
//   if(testTime > worstTime) {
//     worstTime = testTime
//   }
// })

let worstTime = 0
experimentResults.forEach(participant => {
  if(participant[1] > worstTime) {
    worstTime = participant[1]
  }
})

console.log(`The worst second test time is ${worstTime}`);



// Compound Data Structures: Disney Princesses and Animal Sidekicks
const princessData = {
  princesses: [
    {
      name: 'Pocahontas',
      sidekicks: [
        {
          name: 'Meeko',
          species: 'raccoon',
          intelligent: false,
          favoriteSnack: 'biscuits',
        },
        {
          name: 'Flit',
          species: 'bird',
          intelligent: false,
        },
      ],
    },
    {
      name: 'Moana',
      sidekicks: [
        {
          name: 'Pua',
          species: 'pig',
          intelligent: true,
        },
        {
          name: 'Heihei',
          species: 'rooster',
          intelligent: false,
          favoriteSnack: 'rocks',
        },
      ],
    },
    {
      name: 'Cinderella',
      sidekicks: [
        {
          name: 'Gus',
          species: 'mouse',
          intelligent: false,
          favoriteSnack: 'corn',
        },
        {
          name: 'Jaq',
          species: 'mouse',
          intelligent: true,
        },
      ],
    },
  ],
}

// Print out a list of all the princesses' names


let list = `A list of all the princesses:\n`
princessData.princesses.forEach(princess => {
  // list += princess.name + "/n"
  list += `${princess.name}\n`
})

console.log(list);


// Print out the name and species of Moana's sidekicks

let sidekickList = `Moana's sidekicks are:\n`
// let moana = princessData.princesses[1]
let moana = princessData.princesses.find(princess => {
  return princess.name === "Moana"
})

moana.sidekicks.forEach(sidekick => {
sidekickList += `- ${sidekick.name} the ${sidekick.species}\n`
})

console.log(sidekickList);


// Create a new array with the names of all of the animals with a favorite snack

// create a new array -- map()
// names of all animals WITH A FAVORITE SNACK

// get an array with ALL sidekicks
let allSidekicks = []

princessData.princesses.forEach(princess => {
  // add princess.sidekicks to allSidekicks array
  allSidekicks = allSidekicks.concat(princess.sidekicks)
})

console.log(allSidekicks)

// go through and get the sidekicks that have a favorite snack
let hungrySidekicks = allSidekicks.filter(sidekick => {
  return !!sidekick.favoriteSnack
})

console.log("hungrySidekicks", hungrySidekicks);


// Optional depending on time: Create an array with the names of all of the intelligent animals
