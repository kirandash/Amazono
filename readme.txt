1. npm i npm -- To update npm package
2. npm install nodemon -g
3. mkdir server
4. cd server
5. npm init
6. npm install express body-parser morgan mongoose --save (-g if needeb globally. --save if required locally)

4. Running server
node server.js -- Will not refresh if code refreshes
nodemon server.js -- will refresh
If nodemon does not run -- add it to PATH variables %appdata%\npm