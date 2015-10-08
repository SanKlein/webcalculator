# Project Specifications

## Overview

The objective of this assignment is to create a simple calculator web application. The assignment will require both front end development, using HTML and CSS, and back end development, using JavaScript, so choose your teammates accordingly. The webpage should display a simple, visually pleasing calculator ([See example](http://what-when-how.com/wp-content/uploads/2011/08/tmp5D80_thumb.jpg)), which behaves appropriately when the user clicks on each button. The functionality of the calculator should include the following:

1. A display box showing numbers when they are clicked, the results of operations after '=' has been clicked, or 'ERROR' in the case of an invalid operation (i.e. divide by 0).
2. Basic arithmetic operations (i.e. +, -, x, /).
3. Calculations with decimal numbers using the '.' (decimal) button.
4. Switching between positive and negative numbers using the '+/-' button.
5. Clearing the display using the 'C' button.

For extra credit (see Grading Standard section for details on grading):

1. 'M+': Add the displayed value to the existing number in memory. If there is no number in memory, 'M+' should store the displayed value in memory.
2. 'M-': Subtract the displayed value from the existing number in memory. If there is no number in memory, 'M-' should store in memory the negative of the currently displayed value.
3. 'MC': Memory Clear - Erase the memory without affecting the current calculation.
4. 'MR': Memory Recall - Display the number saved in memory, replacing any value already display. Note: MR can be used mid-calculation (e.g. '2 + MR =').

Your team should also create a testing suite for your implementation (preferably using Mocha and Chai).

## User Stories

* "This is the most simple calculator I've ever used. It is laid out clearly without the clutter of unnecessary buttons."
* "The memory buttons help me save so much time when I'm performing operations on numbers that I use all the time."
* "The 'C' button makes it easy for me to start over when I press the wrong button."
* "It is very easy to perform decimal operations with the '.' button."
* "It's easy to perform calculations with both positive and negative numbers using the '+/-' button."
* "The calculator always catches my mistakes, like when I accidentally divide by 0."

## Deliverables

Your team should turn in all your files on GitHub by the due date, including any JavaScript, HTML, and CSS files used in your implementation. Additionally, you should have a README.md file with a list of all team members, an overview of the assignment, and how you went about implementing it. Please include a package.json file as well, including dependencies for any libraries used in your implementation.

## Grading Standard

Grading is broken down into four different categories:

### Functionality - 25%

Determined by how well you adhere to the specifications of described in the Overview section. A 100% in this category means the webpage meets all the specifications laid out in the overview, performs all calculations correctly, and is tested thoroughly. If any of these conditions are not met, points will be deducted accordingly. The visual layout of the webpage is not covered in this grading category, but rather in Style. Extra credit of up to 20% of the total points for functionality will be rewarded for implementing and testing the extra features described in the Overview. This means that if your team does all the extra credit, you could get an extra 5% on your overall grade for the assignment.

### Style - 25%

Divided into two parts:

1. Code Style (50%): Determined by how well your code is designed, structured, and commented. A high grade will be awarded for following good coding practices (e.g. modularity, reducing duplication, easy to read).
2. Webpage Design (50%): Determined by how well your webpage is laid out. A high grade will be awarded to a webpage that is clean, simple, and visually appealing. This is where your CSS comes in. Third party libraries like Bootstrap are allowed, but not required.

### Process - 25%

Determined by how well your team follows the development process described in the PROCESS.md file. This category should boost your grade, not hurt it, so please follow the process!

### Teamwork - 25%

Graded on an individual basis and determined by how much of a team player you are during the project. Every team member must send the grader a confidential email containing the following:

Name:
* On a scale of 1-5, rate your overall contribution to the project:
* On a scale of 1-5, how much did you pull your weight in the project?
* On a scale of 1-5, how present were you in group meetings?
* On a scale of 1-5, how much did you contribute to group conversations?
* On a scale of 1-5, how well did you follow the process described in the PROCESS.md file?
* Comments:

Team Member 1:
* On a scale of 1-5, rate this team member's overall contribution to the project:
* On a scale of 1-5, how much did this team member pull his/her weight in the project?
* On a scale of 1-5, how present was this team member in group meetings?
* On a scale of 1-5, how much did this team member contribute to group conversations?
* On a scale of 1-5, how well did this team member follow the process described in the PROCESS.md file?
* Comments:

Team Member 2:
* On a scale of 1-5, rate this team member's overall contribution to the project:
* On a scale of 1-5, how much did this team member pull his/her weight in the project?
* On a scale of 1-5, how present was this team member in group meetings?
* On a scale of 1-5, how much did this team member contribute to group conversations?
* On a scale of 1-5, how well did this team member follow the process described in the PROCESS.md file?
* Comments:

Your grade for this category will be determined by your and your teammates' responses to these questions. If a team member has to do a significantly larger portion of the work because another team member isn't pulling his/her weight, extra points may be awarded. If you do not send an email to your grader with your responses by the due date, you will receive a 0% in this category.