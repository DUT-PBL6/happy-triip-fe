# Happy Triip - PBL6 - Software Technology Project - FE
## Technology
- [Angular](https://angular.io/) Application-design Framework
- [Eslint](https://eslint.org/) Tool for identifying and reporting on patterns found in ECMAScript/JavaScript code
- [Prettier](https://prettier.io/) An opinionated code formatter with support for
- [RXJS](https://rxjs.dev/) A library for composing asynchronous and event-based programs by using observable sequences
- [NGXS](https://www.ngxs.io/) A state management pattern + library for Angular
- [PrimeNg](https://primeng.org/) Library UI
- [Docker](https://docs.docker.com/) Environment Setup

## Clone project
### With SSH 
```
    git clone git@gitlab.com:pbl6-software-technology-project/pbl6-be.git
```
### With HTTPS
```
    git clone https://gitlab.com/pbl6-software-technology-project/pbl6-be.git
```

## Git Flow

### Flow these step to create a new branch, commit and Merge Request
#### Step 1: Update Task in [Trello](https://trello.com/b/yU3jJhLL/happy-triip) and spent time in [GG Sheet](https://docs.google.com/spreadsheets/d/1jAGPitvpIeJg8PalK2oeOleiEmT9uiOO4arJmSdsLpM/edit#gid=1170519418) 
#### Step 2: Checkout to `develop`, pull newest code from `develop`
```
    git checkout develop
    git pull origin develop
```
#### Step 3: Create a new branch for task, base in branch `develop`
**Rule of branch name**
- Follow your tile task in [Trello](https://trello.com/b/yU3jJhLL/happy-triip), if your title task is `[HT - 123] - Config CI/ CD`, your branch name will be `ht-123/config-ci-cd`
```
    git checkout -b ht-123/config-ci-cd develop
```

#### Step 4: When commit, message of commit follow rule
**Rule of commit message**
- Follow your tile task in [Trello](https://trello.com/b/yU3jJhLL/happy-triip), if your title task is `[HT - 123] - Config CI/ CD`, your commit message will be `[HT - 123] - Config CI/ CD`
- **Remember whitespace** (tips: You can copy message from Task Title in Trello)
  
#### Step 5: When create new Merge Request, follow rule
**Rule of merge request**
- Follow your tile task in [Trello](https://trello.com/b/yU3jJhLL/happy-triip), if your title task is `[HT - 123] - Config CI/ CD`, your title merge request will be `[HT - 123] - Config CI/ CD`
- **Remember to describe everything you do in this task** 
- **Assigner will be you**
- **Reviewer will be anyone in this project**