### Registration and Login

- [x] You can register. When you register you are automatically logged in and sent to your profile.
- [x] You can login. When you login you are sent to your profile or landing page
- [x] In your profile, you can edit your information
- [x] Clicking on the dashboard, you only see the courses for the currently logged in user. At least one course
- [x] Clicking on a course navigates to the details of that course, with Course Navigation sidebar containing at least Quizzes link
- [x] Clicking on Quizzes link navigates to Quizzes List Screen described later in this form
- [x] A different course has a different set of quizzes


### Courses Per User
- [x] Users only see courses they are associated with
- [x] Faculty only see courses they have created (or enrolled in)
- [x] Students only see courses they are enrolled in
- [x] Anyone can enroll into a course (Faculty or Student)
- [x] Faculty can edit course, but student can not


### Quizzes List Screen
- [x] Quizzes screen displays the quizzes for the current course
- [x] Quizzes list is empty by default. Provide message to click Add Quiz button (+ Quiz) 
  To test, login as faculty, create a brand new course, quizzes list should be empty
- [x] Clicking Add Quiz button (+ Quiz) creates a new quiz with a default name and navigates to Quiz Details screen for editing the quiz. Alternatively, it can navigate to Quiz Details Editor screen
- [x] Clicking the context menu button (3 dots) reveals the Quiz Context Menu with options listed below...
  - [x] Edit - navigates to Quiz Details screen
  - [x] Delete - removes the quiz and stays in the Quiz List screen
  - [x] Publish - publishes the quiz and option becomes Unpublish so you can unpublish 
- [x] By default quizzes are unpublished and unavailable to students depicted with a Unpublished symbol ❌ as shown below
- [x] Clicking Unpublished symbol publishes the quiz, makes it available to students and is represented with the Published symbol ✅ as shown below
- [x] Clicking quiz title navigates to Quiz Details screen
- [ ] Under the quiz title display
  - [x] Availability
  - Closed-if current date is after quizzes Available Date
  - Available -if current date is between Available Date and Available Until Date
  - Not available until < AVAILABLE DATE > - if current date is before the Available Date
  - [ ] 
      Due date, Points, Number of questions,
      Score - if the current user is a student, the score from the last attempt is show
    【加上student的score】

### Quiz Details Screen
Implement a Quizzes Details screen as described below with only following propertiesIgnore other properties
【加两个button，start和last submition】
- [x] Displays summary of quiz properties
- [x] Quiz Type - Graded Quiz (default), Practice Quiz, Graded Survey, Ungraded surveyPoints - the sum of the points of all questions in the quizAssignment Group-Quizzes (default), Exams,  Assignments, Project
Shuffle Answers- Yes (default) / NoTime Limit -20 Minutes (default)
- [x] Multiple Attempts-No (default)/ YesHow Many Attempts -1 (default). lf Multiple Attempts is Yes, then can configure
how many times the student can retake the quiz
- [x] Show Correct Answers -lf and when correct answers are shown to studentsAccess Code-Passcode students need to type to access the quiz. Default is blank
One Question at a Time-Yes (default)/ No
Webcam Required-No(default)/ Yes
Lock Questions After Answering-No (default)/ Yes

- [x] Due date- date the assignment is due
Available date - date assignment is availableUntil date - date assignment is available until

- [x] Click Preview button to navigate to Quiz Preview screen described later
- [x] Click Edit to navigate to Quiz Editor screen (described later)
- [ ] Can edit Multiple Attempts-No (default)/ YesShow Correct Answers -lf and when correct answers are shown to students
- [ ] Can edit
Access Code-Passcode students need to type to access the quiz. Default is blankOne Ouestion at a Time-Yes (default)/ No
Webcam Required-No(default)/ Yes
Lock Questions After Answering -No (default) / Yes

- [x] Can edit
Due date - date the assignment is due
Available date- date assignment is available
Until date -date assignment is available until

- [x] Clicking Save saves changes and navigates to Quiz Details screen

- [x] Clicking Save and Publish saves & publishes quiz and navigates to Quiz List screen

- [x] Clicking Cancel doesn't save and navigates ton Quiz List screen


### Quiz Editor Features
The Quiz Editor screen allows faculty to edit the meta data for a quiz. lmplement the QuizEditor screen as shown below. Feel free to give it your own twist
- [x] Has 2 tabs: Details (default), Questions
- [x] Clicking Details navigates to the Quiz Details Editor screen (this screen)
- [x] Clicking Questions navigates to Quiz Questions Editor screen (described later)
- [x] Form elements display current values of quiz properties
- [x] Can edit Title (input text)
    Must be a text input field
- [x] Can edit Description
  Must be a wySlwyG component

- [x] Can editQuiz Type- Graded Quiz (default), Practice Quiz, Graded Survey, Ungraded SurveyPoints - the sum of the points of all guestions in the quiz
Assignment Group-Quizzes (default),Exams, Assignments, Project
Shuffle Answers - Yes (default) / No
Time Limit - 20 Minutes (default)

- [ ] Points shows sum of all the points of each question.
- [x] Clicking Cancel button dismisses the edits
- [x] Clicking Save saves the edits but does not publish the quiz


#### Quiz Questions Editor
Clicking Questions tab navigates to Quiz questions screen with the following behavior
- [x] Displays list of questions for this quiz. List is initially empty
- [x] Clicking New Question adds question at bottom of list. Multiple choice question is default
- [x] New questions are displayed in edit preview mode by default
- [ ] Clicking Edit displays question in edit mode
- [x] Dropdown can choose question type:
  1) True/false,
  2) Multiple choice question
  3) Fill in the blank question
- [ ] Points shows sum of all the points of each question.
- [ ] Clicking Cancel button dismisses the edits

#### Multiple choice question editor
Implement a Multiple choice type question where students need select one correct choiceout a list of multiple choices. Faculty can configure the following question properties
- [x] Title (input:text) -the title of the question: Input text
- [ ] Points (input:number) - how many points is the question
Number input field
- [x] Question (wYslWYG): WYSIWYG
- [x] Can add/remove choices
- [x] Each choice has a radio button that selects it as the single correct answer
- [x] Option text (textarea)
- [x] Cancel button discards changes
- [x] Save/Update Question button saves question


#### True false question editor
Implement a True false type question where students need select whether a text is true orfalse. Faculty can configure the following question properties
- [x] Title (input:text) -the title of the question
- [x] Points (input:number) -how many points is the question
- [x] Question(WYSIWYG)
- [x] Tue/false- whether the correct answer is true or false. Can be a simple checkbox or a couple of radio buttons..
- [x] Cancel button discards changes
- [x] Save/Update Question button saves question

#### Fill in the blank guestion editor
Implement a Fill in the blank type question where students need to fill in a blank. Faculty canconfigure the following guestion properties
- [x] Title (input:text) -the title of the question
- [x] Points (input:number) -how many points is the question
- [x] Question (WYSIWYG)
- [x] Several Correct answers (input:text)- the correct answers for the blank. Faculty canadd/remove any number of correct answers. Answers can be case insensitive, andif the student answer matches at least one of the options, then the answer iscorrect, e.g, Question: How muchis2+2=? possible correct answers: "2"!"two", "dos"
- [x] Cancel button discards changes
- [x] Save/Update Question button saves question

### Quiz Preview screen
The Quiz Preview screen allow faculty to view the quiz as students would see the quiz
- [x] All questions in quiz are displayed
- [x] Each question is rendered in the format based on their type
- [x] You can answer the questions
- [x] When you submit the quiz, the quiz is graded with final score
- [x] Graded quiz shows which answers faculty got correct/wrong highlighting itcorrectly

#### Persist Student Quiz Answers and Scores
- [x] Students can take quiz as many times as configured in How Many Attempts property
- [x] Answers to the quiz are stored per student
- [x] Students can come back later and see the when they took the quiz, what score theygot, and what they answered the last time they took the quiz
- [x] Questions are highlighted as green or checkmark if they were correctly answered, and red or X if they were answered incorrectly
- [x] Students can't change the answers of a quiz they already took
- [x] They can take the quiz again if Multiple Attempts is configured and as many timesas configured in How Many Attempts
- [x] Once a student has exhausted the number of attempts, they can not take the quiz again
- [x] Students can only see the answers and score to the last attempt
- [ ] If another student takes the quiz, their answers are stored separately so that whenthey submit their answers and then comeback to view the results, they can seewhat they answered in their last attempt

