import express, { json } from 'express';
const app = express();
const port = 3000;

//import { Sequelize, DataTypes } from '@sequelize/core';
//import { Event } from './event.js';
//const Event = Event;

class Event {
    constructor(context_code, title, description, start_at, end_at) {
        this.context_code = context_code;
        this.title = title;
        this.description = description;
        this.start_at = start_at;
        this.end_at = end_at;
    }

    introduce() {
      console.log(`Hello, my name is ${this.title}`);
    }
}

//import pkg from './event.js';
//const { Event } = pkg;
const reqEvent = new Event("dnd4444", "Title1", "ghfjdkkssk", "2012-07-19T22:00:00Z", "2012-07-19T2300:00Z");
console.log(reqEvent.title);


app.use(json()); // Middleware to parse JSON requests

app.get('/', (req, res) => {
  res.send('Welcome to the REST API!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


app.get('/events', async (req, res) => {
  //const {context_code, title, description, start_at, end_at} = req.body;
  const event = [
    {context_code: "reqEvent.context_code",
    title: "reqEvent.title",
    description: "reqEvent.description",
    start_at: "reqEvent.start_at",
    end_at: "reqEvent.end_at"},

    {context_code: reqEvent.context_code,
    title: reqEvent.title,
    description: reqEvent.description,
    start_at: reqEvent.start_at,
    end_at: reqEvent.end_at},
  ];
  res.json(event);
});

app.post('/events', (req, res) => {
  const event = {
  context_code: context_code,
  title: title,
  description: description,
  start_at: start_at,
  end_at: end_at,
  };
  res.status(201).json(newUser);
});

// app.put('/events/:id', (req, res) => {
//  const user = event.find((u) => u.id === parseInt(req.params.id));
//  if (user) {
//    user.name = req.body.name;
//    res.json(user);
//  } else {
//    res.status(404).send('User not found');
//  }
//});


