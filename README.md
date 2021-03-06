# React App

This is a React App for my application in theVelops following their criteria.

It mainly uses react, redux, axios (to connect to API) and semantic ui.

This App uses REST API in https://github.com/marcksm/rest-api (http://35.227.122.182:4000)

## Demo

Check out demo deployed in Google Cloud Computer Engine of the App on the link below:

http://35.227.122.182:3000/

(depending when you are accessing, it may not be up anymore)

## Dependencies

* Unix/Linux machine
* Git
* NodeJS
* REST API running on http://localhost:4000  (https://github.com/marcksm/rest-api)
* npm

## Installing locally via NPM

Clone this repository

**(check npm permissions to avoid error : EACCES)
```
git clone https://github.com/marcksm/my-app.git
cd my-app
npm install
```

## Running locally via NPM

Inside the my-app folder:
```
npm start
```
You should open http://localhost:3000

## Running tests via NPM

Inside the rest-api folder
```
npm test
```
