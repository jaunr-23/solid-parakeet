## DESCRIPTION

Hi there!. This repo is the solution for the deel backend task, I assumed the following:

- I can use typescript without modifying current js files. Often we can find code in javascript that should be migrated to typescript and good practice is to start with the new features on typescript and migrate
- Typical MVC architecture, with Routes, Controllers, Services. There is a lot of classes and object composition. Nothing fancy
- Classes are structured by domain (Job, Admin, Contracts, etc). This help to separate the layers.
- 

## TODO
- Caching. If some of the requests are cached it will help to have better performance
- Better input validation, is quite basic right now.
- Think on more cases for tests and improve error handling
- Concurrency?. SQLite can handle only 1 write lock. I think Sequelize handles that for us, but I need to read more the documentation... Improve writes into transactions
- Github actions for CI/CD or similar


## TIME TRACKING (AROUND 4 HOURS IN TOTAL)

- 30/06 - Skeleton app, tsc config, jest config - 20 mins in the morning
- 30/06 - Job and Contracts API - 1.5 hours
- 01/07 - Refactor some job tests and rewrite readme - 20 min
- 01/07 - Write balances API and tests - 1 hour
- 01/07 - Write Admin API and tests - 1 hour
## SETUP

- clone this repo
- npm install

## TESTING

- npm start
- npm run test (in another terminal)

## DEPLOYMENT

- docker build -t deel .
- docker run -dp 3000:3001 deel
- optional: run tests against docker with changing the port for testing to 3000
# DEEL BACKEND TASK DESCRIPTION

[See description](TASK.md)
