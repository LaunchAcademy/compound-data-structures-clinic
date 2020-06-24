// 2D Arrays: Experiment Results: Times to complete all reps

const experimentResults = [
  [5, 4.5, 5.33, 4.8],
  [4, 3.2, 4.4, 4.8],
  [6.2, 5.7, 5.8, 5.2],
  [4.3, 3.5, 6.4, 4.7],
]

// What was participant three's time on the first test?
// const participant3 = experimentResults[2]
console.log("Participant 3's first result")
// console.log(participant3[0])
console.log(experimentResults[2][0])

// What is participant 2's average?
const participant2Results = experimentResults[1]
let totalResults = participant2Results.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
let average = totalResults / participant2Results.length
console.log(average)

// Create a new array of all third test times
let thirdTestTimes = experimentResults.map((singleParticipantResults) => {
  console.log(singleParticipantResults)

  return singleParticipantResults[2]
})
console.log(thirdTestTimes)

// What was the average grade on test 1?

// What was the worst score on exam 2?
// let secondTestTimes = experimentResults.map((singleParticipantResults) => {
// return singleParticipantResults[1]
// })
// console.log('Second test times', secondTestTimes)
// let worstScore
// secondTestTimes.forEach((timeOnTest2) => {
//   debugger
//   if (!worstScore || timeOnTest2 > worstScore) {
//     worstScore = timeOnTest2
//   }
// })

let worstScore
experimentResults.forEach((participantResults) => {
  const timeOnTest2 = participantResults[1]
  if (!worstScore || timeOnTest2 > worstScore) {
    worstScore = timeOnTest2
  }
})
console.log('worst score', worstScore)

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
let princessOutput = 'Princess Names:\n'
princessData.princesses.forEach((princess) => {
  princessOutput += `${princess.name}\n`
})
console.log(princessOutput)

// Print out the name and species of Moana's sidekicks
let moanaOutput = "Moana's Sidekicks:\n"
const moanaSidekicks = princessData.princesses[1].sidekicks
moanaSidekicks.forEach((sidekick) => {
  moanaOutput += `- ${sidekick.name} the ${sidekick.species}\n`
})
console.log(moanaOutput)

// Optional depending on time: Create an array with the names of all of the intelligent animals

// Create a new array with the names of all of the animals with a favorite snack

console.log('princesses', princessData.princesses)

let allSidekicks = []

princessData.princesses.forEach((princess) => {
  allSidekicks = allSidekicks.concat(princess.sidekicks)
})
console.log('allSidekicks', allSidekicks)

let hungrySidekicks = allSidekicks.filter((sidekick) => {
  return !!sidekick.favoriteSnack
})

console.log('hungry sidekicks', hungrySidekicks)

let hungrySidekickNames = hungrySidekicks.map((sidekick) => {
  return sidekick.name
})

console.log('hungry sidekick names', hungrySidekickNames)
