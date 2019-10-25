const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
var cors = require('cors');
const db = require('./db');
const bcrypt = require('bcryptjs');
const passport = require('passport');
var Strategy = require('passport-http').BasicStrategy;

const saltRounds = 4;
app.use(bodyParser.json());
app.use(cors())

passport.use(new Strategy((email, password, cb) => {
  db.query('SELECT userID, email, password FROM users WHERE email = ?', [email]).then(dbResults => {
    if (dbResults.length == 0) {
      return cb(null, false);
    }
    bcrypt.compare(password, dbResults[0].password).then(bcryptResult => {
      if (bcryptResult == true) {
        cb(null, dbResults[0]);
      }
      else {
        return cb(null, false);
      }
    })

  }).catch(dbError => cb(res.send(false)))
}));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get('/getData', (req, res) => {
  db.query('SELECT * FROM stations').then(results => {
    res.json(results)
  })
    .catch(() => {
      res.sendStatus(500);
    })
});

app.get('/getUserId/:email',
  passport.authenticate('basic', { session: false }),
  (req, res) => {
    db.query('select userID from users where email = ?', [req.params.email])
      .then(dbRes => res.send(dbRes))
      .catch(dbEr => console.log(dbEr))
  });

app.get('/signIn',
  passport.authenticate('basic', { session: false }),
  (req, res) => res.send(true));

app.post('/signUp', (req, res) => {
  let email = req.body.email.trim();
  let password = req.body.password.trim();
  if ((typeof email === "string") &&
    (email.length > 3) &&
    (typeof password === "string") &&
    (password.length > 3)) {
    bcrypt.hash(password, saltRounds).then(hash =>
      db.query('INSERT INTO users (email, password) VALUES (?,?)', [email, hash])
    )
      .then(dbResults => {
        console.log(dbResults);
        res.sendStatus(201);
      })
      .catch(error => res.sendStatus(500));
  }
  else {
    res.send("Incorrect email or password, both must be strings and email more than 4 long and password more than 6 characters long");
  }
});

app.post('/addData', (req, res) => {
  let data = req.body;
  Promise.all([
    data.forEach(element => {
      db.query('INSERT INTO stations (Title, AddressLine, Town, StateOrProvince, Postcode, Latitude, Longitude, PowerKW, Price, Code, Type,) VALUES (?,?,?,?,?,?,?,?,?)', [element.Title, element.AddressLine, element.Town, element.StateOrProvince, element.Postcode, element.Latitude, element.Longitude, element.PowerKW, element.Price, element.Code, element.Type])
    })]
  ).then((response) => {
    res.send('succesfull');
  })
    .catch((err) => {
      console.log(err);
    })
});

Promise.all(
  [
    db.query("CREATE TABLE IF NOT EXISTS charges ( `idCharging` INT NOT NULL AUTO_INCREMENT , `userID` INT NOT NULL , `StationId` INT NOT NULL , `StartTime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `UsageTime` INT NOT NULL , `Cost` float(10, 3) NOT NULL, `Energy` float(10, 3) NOT NULL,  INDEX (`userID`), INDEX (`StationId`), PRIMARY KEY (`idCharging`)) ENGINE = InnoDB "),
    db.query("CREATE TABLE IF NOT EXISTS stations(`StationId` INT NOT NULL AUTO_INCREMENT , `Title` TEXT NOT NULL , `AddressLine` TEXT NOT NULL , `Town` TEXT NOT NULL , `StateOrProvince` TEXT NOT NULL , `Postcode` VARCHAR(255) , Latitude` float(50) NOT NULL , `Longitude` float(50) NOT NULL,  `PowerKW` float(10, 5) NOT NULL,  `Status` BOOLEAN NOT NULL DEFAULT FALSE, `Code` VARCHAR(4) NOT NULL, `Price` float(10, 3) NOT NULL,  `Type` varchar(40) NOT NULL PRIMARY KEY (`StationId`))"),
    db.query("CREATE TABLE IF NOT EXISTS users ( `userID` INT NOT NULL AUTO_INCREMENT , `email` varchar(50) NOT NULL , `password` varchar(512) NOT NULL , PRIMARY KEY (`userID`))"),
    db.query("ALTER TABLE `charges` ADD FOREIGN KEY (`userID`) REFERENCES `users`(`userID`) ON DELETE CASCADE ON UPDATE CASCADE;"),
    db.query("ALTER TABLE `charges` ADD FOREIGN KEY (`StationId`) REFERENCES `stations`(`StationId`) ON DELETE CASCADE ON UPDATE CASCADE;")
  ]
).then(() => {
  console.log('database initialized');
  app.listen(port, () => {
    console.log('Listening to port ', port)

  });
}).catch(dbEr => console.log(dbEr));
