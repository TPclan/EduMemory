### Sync your fork with the master

- in terminal do a "git checkout master" to see if you are ahead or behind
- "git pull <link to original repo>"

### specific screen capture in windows. "windows + shift + s". then select

##

- Cheat sheets! https://htmlcheatsheet.com/css/

- NPM shortcuts https://www.freecodecamp.org/news/npm-cheat-sheet-most-common-commands-and-nvm/
- Page transitions https://dev.to/joserfelix/page-transitions-in-react-1c8g
- more advanced transition code with Scott with Framer Motion and React Router (cool)
  https://www.youtube.com/watch?v=sIm1ApP5YH8
- Page Transitions with React Router and Framer Motion (longer video) https://www.youtube.com/watch?v=3QrkCmsfewM another one https://www.youtube.com/watch?v=qJt-FtzJ5fo
- CSS selectors and how they work https://www.w3schools.com/cssref/css_selectors.asp

## Making mobile/desktop friendly

- Excellent approach with code examples https://webup.org/blog/react-device-based-code-split/
- Approach is in 3 stages: css first, then functionality, then css for shared functionality
- 1st step: css
- When we get to a functionality difference between mobile/desktop we can add a button to change the state to demonstrate the differences (also allow a mobile user to have desktop functionality if needed)
- Used this in useWindowSize https://dev.to/3sanket3/usewindowsize-react-hook-to-handle-responsiveness-in-javascript-3dcl
- Good sass structure advice. Seems to be a best practice: https://www.webdesignerdepot.com/2020/12/2-smartest-ways-to-structure-sass/
- could possibly set up a dark mode similar to the useWindowSize?
- UI Components are a thing. Need to look into for buttons, etc. https://www.pluralsight.com/guides/wrap-a-custom-react.js-component-for-an-html-button
- Component libraries will save time and look more like an app. Here's a list and the first one is so we can start and share our own library. Good idea for the learning curve. https://blog.bitsrc.io/13-top-react-component-libraries-for-2020-488cc810ca49
- Build our own UI components and sort them. Have access to other shared components to see how they're built. https://bit.dev/
-
- Next. Add button to manually change Mobile to Desktop
