
import express, { json } from 'express';
const app = express();
const port = 3000;

app.use(json()); // Middleware to parse JSON requests

app.get('/', (req, res) => {
  res.send('Welcome to the REST API!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/events', (req, res) => {
  const {id, context_code, title, description, start_at, end_at} = req.body;
  const event = 
    //{ id: 1, context_code: "473847", title: 'title1', description: "hfhfhfhf", start_at: '2026-07-19T21:00:00Z', end_at: '2012-07-19T22:00:00Z' },
  res.json(event);
});

app.post('/events', (req, res) => {
  const newEvent = {
    id: 3,
    name: req.body.name,
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


