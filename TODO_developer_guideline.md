# Enterprise project TODO list
* pre_commit script (ts_lint & ng test with coverage)
* coverage in your face during a pull request
* Versioning of Project
* Lerna multi project.
* Structure Feature Based
  * /feature
  * /feature/store/S(reducers/effects/etc)
  * /feature/user.ts
  * /feature/i-user.ts
  * /feature/components/user.section.component.ts 
  * /test/feature/*test.helper.ts
  * /feature/users.service.ts
* Change Detection Strategy
* In our face project version, implemented user stories

### Running the App locally start mocking service using JSON-Server
* M Setup json-server
* M Add concat script

### Which Tests (In Future)
* M Unit tests > 85%
* M End 2 End Tests, All user scenarios
* M Running Test should be down with Wallaby.js

### How to Route
* DONE Lazy loading modules

### How to SCSS (In Future)
* S ITCSS dir structure
* *themes.scss (see angular google material project)

# How to Manage State and Single point of truths
* NGRX www.ultimateangular.com

# How to Retrieve Data using Observables
* Read up on RxJs and it operators. https://www.learnrxjs.io/

### How to Log
* Console logs stay in but should read as a story.. Don't just log variables log, class,method,action, message, variables.
* Add Business logging for every scenario.
* Raven Log

### TODO's stay in..
* Todo's are documentation.

### Documentation
* Global doc in confluence
* Detailed doc in source code
* Your code  should read like a story.. So choose your method and variable names carefully.

### SCRUM / KABAN .. Jira.
* Statuses of dev are reflected in Jira.
* Story is in Description of Jira only.
* Questions about the story are in the description area. 

### Al communication, via Slack
* No Specs in E-mail
* If your half way through the time an issue should take... And it takes longer inform scrummaster if all oke.. expectations are you finish on time.
* When you cannot finish all that is assigned to you in sprint inform scrummaster

### How to debug
* Debugger in code.
* Break point in browser code.
* Sentry for client side error catching / logging

### A developer should develop.. thus everything else should be automated
* Simply put when a developer commits it should result in a new version on a server

### Git Flow.. + 
* Git flow is not compatible with SCRUM
* Create release directly after
* Handy tool use GitKraken
* Use GIT Prefixes.
  * /techdept
  * /feature
 Git Commit Messages
  * TODO>
  * JIRA-XXX>DOC>
  * JIRA-XXX>REFACTOR>
  * JIRA-XXX>IMP>
  * JIRA-XXX>TESTS>

### Patterns GOF patterns you must live and breath
* Encapsulation of code
* Separation of concerns
* Publish Subscribe
* Services
* OO (Abstract, Classes, Helper Methods)

### Other things you should know by heart.
* Object Destruction
* BehaviourSubject service pattern
* Write Pure Methods only as there easy to test

### When creating services
* Extend AbstractServie.ts
* All service calls should be measure if one takes over 2seconds it should be logged to Sentry.

### When creating a form
* Extend Abstract from

### If you are not sure on the guideline.
* Ask the lead developer after search the code.

