function gameObject() {
  const teamData = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["black", "white"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["turquoise", "purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
  return teamData;
}

function homeTeamName() {
  return gameObject()["home"]["teamName"];
}

/**
 * Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
 * Think about where in the object you will find a player's points. How can you iterate down into that level? Think about the return value of your function.
 */

// Object iteration in Nested Objects ELI5: use "for (let ... in ...)" to iterate through every key in the first object,
// assign a new variable for each key of the obj to access its keys, and then do the same things again for the next object using the new variable we created
// by doing "for (let ... in newVariable)" and the same thing repeats for each nested object until we get to the object we want to investigate,
// in which case we use a if statement to find if one of the keys is equal to the key we want to look at. If it is, we can continue iterating through more
// nested objects, especially if we have multiple keys with multiple objects to go through and we just want one of the keys, or we can, as we can see in these functions,
// add the current scope of the object into a variable to be returned by the entire function.

function numPointsScored(playerName) {
  const game = gameObject();
  for (let gameKey in game) {
    // debugger
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      if (teamKey === "players") {
        let players = teamObj[teamKey];
        for (let player in players) {
          // debugger
          if (player === `${playerName}`) {
            // debugger
            const newObj =
              gameObject()[`${gameKey}`][`${teamKey}`][`${player}`].points;
            return newObj;
          }
        }
      }
    }
  }
  return "Player not found";
}

console.log(
  "numPointsScored",
  "Brendan Haywood",
  numPointsScored("Brendan Haywood")
);

/**
 * Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.
 * Think about how you will find the shoe size of the correct player. How can you check and see if a player's name matches the name that has been passed into the function as an argument?
 */

function shoeSize(playerName) {
  const game = gameObject();
  for (let gameKey in game) {
    // debugger
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      if (teamKey === "players") {
        let players = teamObj[teamKey];
        for (let player in players) {
          // debugger
          if (player === `${playerName}`) {
            // debugger
            const newObj =
              gameObject()[`${gameKey}`][`${teamKey}`][`${player}`].shoe;
            return newObj;
          }
        }
      }
    }
  }
  return "Player not found";
}

console.log("shoe size", "Brendan Haywood", shoeSize("Brendan Haywood"));

/**
 * Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
 */
function teamColors(teamName) {
  const game = gameObject();
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      if (teamKey === "teamName" && teamObj[`${teamKey}`] === `${teamName}`) {
        return gameObject()[gameKey]["colors"];
      }
    }
  }
  return "invalid team name";
}
console.log("teamColors", teamColors("Charlotte Hornets"));
console.log("teamColors", teamColors("Brooklyn Nets"));

/**
 * Build a function, teamNames, that operates on the game object to return an array of the team names.
 */
function teamNames() {
  const game = gameObject();
  const teams = [];
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      if (teamKey === "teamName") {
        teams.push(gameObject()[`${gameKey}`][`${teamKey}`]);
      }
    }
  }
  return teams;
}

console.log(teamNames());

/**
 * Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey numbers for that team.
 */
function playerNumbers(teamName) {
  const game = gameObject();
  const jerseyArr = [];
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      if (teamKey === "teamName") {
        let team = teamObj[teamKey];
        if (team === `${teamName}`) {
          for (let teamKey in teamObj) {
            if (teamKey === "players") {
              let playersObj = teamObj[teamKey];
              for (let playerKey in playersObj) {
                let statsObj = playersObj[playerKey];
                for (let statKey in statsObj) {
                  if (statKey === "number") {
                    jerseyArr.push(
                      gameObject()[`${gameKey}`][`${teamKey}`][`${playerKey}`][
                        `${statKey}`
                      ]
                    );
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return jerseyArr;
}
console.log(
  "playerNumbers for Brooklyn Nets: ",
  playerNumbers("Brooklyn Nets")
);
console.log(
  "playerNumbers for Charlotte Hornets ",
  playerNumbers("Charlotte Hornets")
);

/**
 * Build a function, playerStats, that takes in an argument of a player's name and returns an object of that player's stats. Check out the following example of the expected return value of the playerStats function:
 */

function playerStats(playerName) {
  const game = gameObject();
  let statsArr = {};
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      if (teamKey === "players") {
        let playersObj = teamObj[teamKey];
        for (let playerKey in playersObj) {
          if (playerKey === `${playerName}`) {
            statsArr = gameObject()[`${gameKey}`][`${teamKey}`][`${playerKey}`];
          }
        }
      }
    }
  }
  return statsArr;
}
console.log("playerStats", playerStats("Reggie Evans"));
/**
 * Build a function, bigShoeRebounds, that will return the number of rebounds (12) associated with the player that has the largest shoe size (19). Break this one down into steps:
 * First, find the player with the largest shoe size (have three arrays for shoe size, playerName, and rebounds.)
 * (Look at shoe size array and find the index with the highest number and save that number to a constant)
 * (use said constant which is the array index with the highest shoe size on each array to obtain playerName and rebound)
 * (console log player name and shoe size with a return of rebounds)
 * Then, return that player's number of rebounds
 * Remember to think about return values here. Use debugger to drop into your function and understand what it is returning and why.
 */

function bigShoeRebounds() {
  const game = gameObject();
  const shoeArr = [];
  const nameArr = [];
  const reboundArr = [];
  let i = 0;
  let maxSize = 0;
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      if (teamKey === "players") {
        let playersObj = teamObj[teamKey];
        for (let playerKey in playersObj) {
          let statsObj = playersObj[playerKey];
          nameArr[i] = `${playerKey}`;
          for (let statKey in statsObj) {
            switch (
              statKey //switch statements take out the corresponding shoesize and rebound values into the new arrays.
            ) {
              case "shoe":
                shoeArr[i] =
                  gameObject()[`${gameKey}`][`${teamKey}`][`${playerKey}`][
                    `${statKey}`
                  ];
                break;
              case "rebounds":
                reboundArr[i] =
                  gameObject()[`${gameKey}`][`${teamKey}`][`${playerKey}`][
                    `${statKey}`
                  ];
                break;
            }
          }
          i++;
        }
      }
    }
  }
  maxSize = Math.max(...shoeArr);
  let index = shoeArr.indexOf(maxSize);
  console.log("shoeArr: ", shoeArr, "name", nameArr, "rebound", reboundArr);
  console.log(
    "name: ",
    nameArr[index],
    "shoe size: ",
    shoeArr[index],
    "rebounds: ",
    reboundArr[index]
  );
  return reboundArr[index];
}

console.log("bigShoeRebounds: ", bigShoeRebounds());
/**
 * Bonus Questions
 * Define functions to return the answer to the following questions:
 *
 * Which player has the most points? Call the function mostPointsScored.
 * Which team has the most points? Call the function winningTeam.
 * Which player has the longest name? Call the function playerWithLongestName.
 *
 * Super Bonus
 * Write a function that returns true if the player with the longest name had the most steals. Call the function doesLongNameStealATon.
 */

// * Which player has the most points? Call the function mostPointsScored.
function mostPointsScored() {
  const game = gameObject();
  // using two arrays and a iteration var is intended to keep track of corresponding names and points. maxPoints will be the highest score. index will be the index of the highest score and that will be used to pull out the Player name of the highest score.
  const nameArr = [];
  const pointsArr = [];
  let i = 0;
  let maxPoints = 0;
  let index = 0;
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      if (teamKey === "players") {
        let playersObj = teamObj[teamKey];
        for (playerKey in playersObj) {
          let statsObj = playersObj[playerKey];
          nameArr[i] = `${playerKey}`;
          for (let statKey in statsObj) {
            if (statKey === "points") {
              pointsArr[i] =
                gameObject()[`${gameKey}`][`${teamKey}`][`${playerKey}`][
                  `${statKey}`
                ];
            }
          }
          i++;
        }
      }
    }
  }
  maxPoints = Math.max(...pointsArr);
  index = pointsArr.indexOf(maxPoints);
  console.log(
    "nameArr:",
    nameArr,
    "pointsArr:",
    pointsArr,
    "max Points:",
    maxPoints,
    "index:",
    index,
    "player with most points:",
    nameArr[index]
  );
  return nameArr[index];
}

console.log(mostPointsScored());

// * Which team has the most points? Call the function winningTeam.

// * Which player has the longest name? Call the function playerWithLongestName.

// Write a function that returns true if the player with the longest name had the most steals. Call the function doesLongNameStealATon.
