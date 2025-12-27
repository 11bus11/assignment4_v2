
//file import
//const sequelize = require('./common/database.cjs');
//const defineEvent = require('./common/models/Event.cjs');
//const Event = defineEvent(sequelize);

//sequelize.sync();

//server setup
const express = require('express');
const app = express();

app.use(express.json());

app.get('/status', (req, res) => {
  res.json({
    status: 'Running',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

