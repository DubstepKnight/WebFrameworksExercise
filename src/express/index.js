const express = require('express');
const app = express();
const port = 4000;
const db = require('./db');

// The function below is supposed to store data from JSON file to the database. But it doesn't =(

app.post('/addData', (req, res) => {
  let data = req.body;
  console.log(data.length);
  Promise.all([
    data.forEach(element => {
      console.log(element)
      db.query('INSERT INTO stations (Title, AddressLine, Town, StateOrProvince, Postcode, Latitude, Longitude, PowerKW, Price, Measure, Code, Type) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', [element.Title, element.AddressLine, element.Town, element.StateOrProvince, element.Postcode, element.Latitude, element.Longitude, element.PowerKW, element.Price, element.Measure, element.Code, element.Type])
    })]
  ).then((response) => {
    res.send(response);
    console.log(response);
  })
    .catch((err) => {
      console.log(err);
    })
});


Promise.all(
  [
    db.query("CREATE TABLE IF NOT EXISTS charges ( `idCharging` INT NOT NULL AUTO_INCREMENT , `userID` INT NOT NULL , `StationID` INT NOT NULL , `StartTime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `UsageTime` INT NOT NULL , `Cost` float(10, 3) NOT NULL, `Energy` float(10, 3) NOT NULL, `Measure` TEXT NOT NULL,  INDEX (`userID`), INDEX (`StationID`), PRIMARY KEY (`idCharging`)) ENGINE = InnoDB "),
    db.query("CREATE TABLE IF NOT EXISTS stations( `StationID` INT NOT NULL AUTO_INCREMENT , `Title` TEXT NOT NULL , `AddressLine` TEXT NOT NULL , `Town` TEXT NOT NULL , `StateOrProvince` TEXT NOT NULL , `Postcode` VARCHAR(255) , `Latitude` float(50) NOT NULL, `Longitude` float(50) NOT NULL,  `PowerKW` float(10, 5) NOT NULL,  `Status` BOOLEAN NOT NULL DEFAULT FALSE, `Code` VARCHAR(4) NOT NULL, `Price` float(10, 3) NOT NULL, `Measure` TEXT NOT NULL, `Type` varchar(40) NOT NULL, PRIMARY KEY (`StationID`))"),
    db.query("CREATE TABLE IF NOT EXISTS users ( `userID` INT NOT NULL AUTO_INCREMENT , `email` varchar(50) NOT NULL , `password` varchar(512) NOT NULL , PRIMARY KEY (`userID`))"),
    db.query("ALTER TABLE `charges` ADD FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE;"),
    db.query("ALTER TABLE `charges` ADD FOREIGN KEY (`StationID`) REFERENCES `stations` (`StationID`) ON DELETE CASCADE ON UPDATE CASCADE;")
  ]
).then(() => {
  console.log('database initialized');
  app.listen(port, () => {
    console.log('Listening to port ', port)
  });
}).catch(dbEr => console.log(dbEr));
