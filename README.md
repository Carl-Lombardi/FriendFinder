## DevilsPlayerFinder (Github: https://github.com/Carl-Lombardi/FriendFinder)(Heroku: https://devilsplayerfinder.herokuapp.com)
This is Devils Player Finder. The user will answer a short set of questions based on their own feelings and the system will tell them who their favorite player is. 

## Why the Devils?
As a Devils fan, I figured that a survey that matched fans and players would be fun to create and informative. The look of the site is as basic as it comes, but that was done on purpose. The purpose of the game was not to be flashy, but rather create a working, fun app.

## This site uses Express, Path, JQuery, Bootstrap and HTML
This basic app uses Express, Path, JQuery and Bootstrap to create the quiz and the logic behind it. A custom API is used as well. 

## Features
This page consists of an intro page and a second page with 10 questions. Upon answering all the questions, the system displays the users favorite player based on their inputs.

## Code Example
The below code is for the the HTML routes.

module.exports = function(app) {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  });

  app.use(function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });
};

## Installation
No outside software is needed for installation.

## How to Use
This is a pretty straight forward app. Upon hitting the button on the Home Page, the user inputs their name and answers 10 questions. After hitting submit, they are shown their favorite player according to the system. 

## Issues and Solutions
The biggest issue that I ran into in creation of this app was coming up with challenging questions and making the app work as intended.

## Credits
This app was created, written and developed by Carl Lombardi.