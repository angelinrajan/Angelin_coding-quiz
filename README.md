# Angelin_coding-quiz

## Website Overview

The website named Angelin Coding Quiz is a website created by me to allow users take a timed coding quiz on Javascript. The purpose of the website is to allow user to take a quiz and to store their scores. Eventually, the goal is to include different topics so I can gauge user's progress as they advance through the bootcamp.

## Website's Live URL - 

https://angelinrajan.github.io/Angelin_coding-quiz/

## Functionality of the website-

1. Homepage will display:
                a. A timer of the top right
                b. Title of the webpage
                c. Instructions for the user regarding the quiz
                d. 'Start Quiz' button
2. 60 seconds are alloted for the quiz in the timer for a total of 6 questions
3. The user has a total of 6 questions in this quiz
4. Clicking on the 'Start Quiz' button allows user to start the quiz
5. Clicking on the 'Start Quiz' button also starts the timer countdown
6. Once an answer is clicked (regardless if the answer is correct or incorrect), the next question is displayed on the screen for the user
7. The answer option for a question will have a different color upon hover and active state of the option
8. If a wrong answer is selected, 10 seconds is deducted from the timercount
9. When a correct answer is selected, the scorecount is added by 1. Therefore the maximum score a user can have is 6.
9. Quiz ends when all 6 questions are answered or when the timercount reaches 0. The timer is cleared as well
10. The final score for the user will then be displayed on the screen along with the remaining time. If timer is below 10seconds when the question is answered incorrectly, a negative remaining time is displayed on the screen
11. An input box will also be displayed for the user to enter his/her initials (max length- 2) and submit the initials to store the score in local.
12. An alert is displayed for the user if the submit button is clicked without writing the initials
13. After the submit button for the initials is clicked, a highscore display page is displayed
14. Within the highscore display, the current score, and the locally stored scores will be displayed
15. If user clicks on 'Go Back' button, user is navigated back to the start of the quiz
16. If user clicks on 'Clear Highscore' button, the  locally stored scores are cleared and a cleared scores message is displayed.

## Deployment steps-

1. Created a new repository within Github (included README file)
2. Copied the ssh url for cloning
3. Performed a git clone command followed by the copied ssh url in my local (VS code)
4. Multiple commits and git push was done to keep repository up to date
5. Finally, deployment happened from Github by nativating to the repository/settings/pages and selecting main branch to deploy
6. The progress and the live website's url is displayed within the Actions tab
7. Clicking on the live website's link navigates user to the live website which is deployed without errors (See screenshot below)
![AngelinCodingQuizLiveWebsite](Assets/LiveWebsite%20Screenshot/Angelin_coding-quiz_LiveWebsite.png)


## Outside source reference:

1. To learn on how to create element in js instead of html. https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
2. Learned how to have multiple choice question display: https://gamedevacademy.org/javascript-quiz-tutorial/#Question_-_HTML_Web_Page
3. Learned about making list items clickable : https://www.reddit.com/r/AskProgramming/comments/8tn81y/htmljavascript_making_added_list_items_clickable/
4. Looked into sample creating quiz: https://gamedevacademy.org/javascript-quiz-tutorial/#Question_-_HTML_Web_Page
5. Obtained dark color code from here :https://htmlcolorcodes.com/color-chart/
6. Learned on how to obtain hover effects: https://www.w3schools.com/cssref/sel_hover.php
7. Obtained quiz questions: https://www.tutorialspoint.com/javascript/javascript_online_quiz.htm
8. Obtained more quiz questions: https://www.interviewbit.com/javascript-mcq/
9. Learnt how to set properties for active class: https://linuxhint.com/change-button-color-on-click-css/

