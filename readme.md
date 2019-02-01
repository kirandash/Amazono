## Installing Dependencies
1. npm i npm -- To update npm package
2. npm install nodemon -g
3. mkdir server
4. cd server
5. npm init
6. npm install express body-parser morgan mongoose --save (-g if needeb globally. --save if required locally)

## Running server
node server.js -- Will not refresh if code refreshes
nodemon server.js -- will refresh
If nodemon does not run -- add it to PATH variables %appdata%\npm

## MLab
mlab.com - sign up - Create a server - amazon and sandbox - continue - US east - DB Name - Continue
- add database user - copy the mongodb link 
mongodb://<dbuser>:<dbpassword>@ds261114.mlab.com:61114/amazono and paste in mongo db application

## Setting up Configuration file for database, port number and secret key
create a file config.js - copy mongodb url and replace username and password
Include config file in server.js
mongoose.connect() - fn to connect to mongo db database

## CORS (Cross Origin Resource Sharing)
Middleware for communication between front end and backend
npm install cors --save (amazono project)
Add CORS in server.js

## Angular Dependencies
amazono - mkdir client
npm install -g @angular/cli // angular cli is a cli for managing our angular project
ng new AngularAmazono --routing --style=scss (angular proj with routing preconfigured and style set as scss)
cd AngularAmazono
npm install @ng-bootstrap/ng-bootstrap

Add bootstrap from https://getbootstrap.com/docs/4.0/getting-started/introduction/ and fontawesome from https://www.bootstrapcdn.com/fontawesome/

## Adding Angular dependencies
app.module.ts - declarations: has list of all components
imports - has list of all dependencies
providers - list of services
bootstrap - list of components that will run when app starts

## Routing
ng generate component Home
ng serve

ng generate service RestApi

