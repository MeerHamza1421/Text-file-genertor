
//importing neccessary modules

const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');

//setting templat engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// use middleware to get data from forms

app.use(express.urlencoded());



app.get('/', (req, res) => {
  res.status(200).render('index.pug');

});

//function that store form data by post request

app.post('/', (req, res) => {

  let data = req.body;
  let info = `the name of person is "${data.name}" 
the phone number is "${data.phone}"
the age is "${data.age}" 
the address is "${data.address}"
other info about it is"${data.text}" `;
  res.status(200).render('index.pug');
  // to create or update file of the name of the person
  // ../file_creator/views give the path of the directory
  // you would change it according to your folder

  fs.writeFileSync(`${data.name}.txt`, info);

});

// to start server

app.listen(80, () => {
  console.log("server started successfully");
})