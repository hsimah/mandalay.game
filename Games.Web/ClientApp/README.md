Mandalay programming assignment - simple card game

## Installing & Running

* Clone this repository and checkout `master` branch.
* Ensure you have the Cosmos DB emulator installed and running (or have an Azure instance).
* Run `Setup\Seed.ps1` or import `Setup\cards.json` into your Cosmos DB instance.
  * Database ID `gamedb`.
  * Collection ID `cards` (other collections created by API as necessary).
* Run `Games.Web` project from Visual Studio 2017.
* Play the game!

## Assumptions

* Maximum of 10 players, with one left over card


## TODO:

* Handle errors
  * Server/API error
