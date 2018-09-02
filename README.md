Mandalay programming assignment - simple card game

## Installing & Running

* Clone this repository and checkout `master` branch.
* Ensure you have the Cosmos DB emulator installed and running (or have an Azure instance).
* Run `Setup\Seed.ps1` or import `Setup\cards.json` into your Cosmos DB instance.
  * Database ID `gamedb`.
  * Collection ID `cards` (other collections created by API as necessary).
* Restore nuget and npm packages.
* Run `Games.Web` project from Visual Studio 2017.
* Play the game!

## Assumptions

* UI layout responsiveness is not of concern.
* Maximum of 10 players, with one left over card.
* Game history does not need to be displayed.
  * The game history is saved in the database but not rendered on screen. Controller endpoints and data access would allow this to be added easily.
* Minimal validation.
  * One could validate no duplicate cards in a round and could include server side score validation to increase robustness.
