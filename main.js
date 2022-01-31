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
// let princessOutput = "Here are all the princesses names:"
// princessData.princesses.forEach( (princess) => {
//   princessOutput += `\n\t- ${princess.name}`
// })
// console.log(princessOutput)

const princessOutput = princessData.princesses.map( (princess) => {
  return `\n\t- ${princess.name}`
})
console.log(`Here are all the princesses names: ${princessOutput.join("")}`)

// Print out the name and species of Moana's sidekicks
const moanaSidekicks = princessData.princesses[1].sidekicks

let moanaSidekicksOutput = "Here are Moana's sidekicks:"
moanaSidekicks.forEach( (sidekick) => {
  moanaSidekicksOutput += `\n\t- ${sidekick.name}, ${sidekick.species}`
})
console.log(moanaSidekicksOutput)

// Create a new array with the names of all of the animals with a favorite snack

let allSidekicks = []
princessData.princesses.forEach( (princess) => {
  allSidekicks = allSidekicks.concat(princess.sidekicks)
})

let snackingSidekicks = []
allSidekicks.forEach( (sidekick) => {
  // if the sidekick has a favorite snack, then
  if (sidekick.favoriteSnack) {
    // put into the snackingSidekicks array
    snackingSidekicks.push(sidekick.name)
  }
})

const filteredSidekicks = allSidekicks.filter( (sidekick) => sidekick.favoriteSnack)

// Optional depending on time: Create an array with the names of all of the intelligent animals

let smartSidekicks = []
allSidekicks.forEach( (sidekick) => {
  if (sidekick.intelligent) {
    smartSidekicks.push(sidekick.name)
  }
})

