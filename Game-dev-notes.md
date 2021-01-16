## Links to existing memory games in React

Analyse methods to build our own improved version

- https://www.code-boost.com/react-memory-game/.
  - uses React spring for animation. `npm install react-spring` https://www.react-spring.io/

### Don't delete! change to "- [x]" for complete tasks

## To Do - make pretty

- fix house logo and hover
- make mobile friendly
- [x] replace card back with new back
- [x] move difficulty buttons to below the instructions
- [x] memory game in the middle and remove "game"
- move high score to the centre. Add high score explanation in the how to play
- reorganize cards so they fit in the window. PC and Mobile versions. might need if statement based on screen size.
- [x] make all buttons in app look similar. colours and shapes + hover
- [x] Edumemory logo. top left. add brain to logo
- page transitions
- card animation. change to gsap.
- hover effect over cards. maybe with shadow.

## To do - Functionality

- [x] add individual pictures in exchange for the colours. Tom
- change high score to integer
- when game is finished, no popup window. Insert high score and add text in page, like "you win". Possibly learn how to make a lightbox/modular window.
- [x] remove "start over" button (see functionality behind it and either delete or use for something else)
- store data so if we refresh page it saves state of the game
- when there is a match add a message like "Congrats! keep going". Possibly add a sound.
- change card time once chosen your 2 cards from 1 second to 2
- display the number of turns.
- add a timer and display
- add "Attempts" or turns. flippedcount is in the code already.

## To do - content

- replace Tom's MYP with "about the app" and add credits
- add "pick two" once game starts

## Bug fixes

- get out of sync sometimes when you click too fast before it has time to reset. Can lead to odd cards staying up.

## To do - go live

- need to figure out how to do this. probably need a host

## To do - if we have time

- when click on start game more messages and animation
  - show message "here are the cards". Shuffling in 3, 2, 1. Countdown. so show cards face up
  - show animation of cards being shuffle with message "cards shuffling"
  - then place cards face down with message "play"
- add login
- record data in remote db
- add multiple high scores
- with high score add your name
- choose your card deck or make your own.
