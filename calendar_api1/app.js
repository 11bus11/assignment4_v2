import express, { json } from 'express';
import path from 'path';
import ejs from 'ejs';

const app = express();
const port = 3000;

const appHTML = express();
const portHTML = 3003;
const router = express.Router();

//event class declaration
class Event {
    constructor(context_code, title, description, location_name, start_at, end_at) {
        this.context_code = context_code;
        this.title = title;
        this.description = description;
        this.location_name = location_name;
        this.start_at = start_at;
        this.end_at = end_at;
    }
}


const jsonArray = ['{"id":"1165512","startdate":"2026-01-21","starttime":"10:15","enddate":"2026-01-21","endtime":"11:45","columns":["Föreläsning","E239","S7012E","Digital kommunikation","","Jaap van de Beek","","","","Luleå","","",""]}',
                  '{"id":"1165512","startdate":"2026-01-21","starttime":"10:15","enddate":"2026-01-21","endtime":"11:45","columns":["Föreläsning","E239","S7012E","Digital kommunikation","","Jaap van de Beek","","","","Luleå","","",""]}',
                  '{"id":"1165513","startdate":"2026-01-27","starttime":"14:45","enddate":"2026-01-27","endtime":"16:15","columns":["Föreläsning","E239","S7012E","Digital kommunikation","","Jaap van de Beek","","","","Luleå","","",""]}'
                  ]
let eventsArray = jsonToObject(jsonArray);

//express server
appHTML.set('view engine', 'ejs');
appHTML.set('views', import.meta.dirname + '/views');


router.get('/',function(req,res){
  const events = eventsArray;
  res.render('index', { events });
});
 
appHTML.use('/', router);
appHTML.listen(process.env.portHTML || 3003);
 
console.log('Running at Port 3003');


//REST API
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

//creating the event objects from json
function jsonToObject(jsonArray) {
  let objArray = [];
  let jsonString = ''
  for (let i = 0; i < jsonArray.length; i++) {
    jsonString = jsonArray[i];
    let jsonObj = JSON.parse(jsonString);
    const reqEvent = new Event("S7012E", jsonObj.columns[0], jsonObj.columns[7], jsonObj.columns[1], jsonObj.startdate + "T" + jsonObj.starttime + ":00Z", jsonObj.enddate + "T" + jsonObj.endtime + ":00Z");
    objArray.push(reqEvent);
  }
  return objArray;
}
