import { Sequelize, DataTypes } from '@sequelize/core';

const sequelize = new Sequelize('sqlite::memory:');
const Event = sequelize.define('event', {
  context_code: DataTypes.STRING,
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  start_at: DataTypes.DATE,
  end_at: DataTypes.DATE,
});


(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();

export default class { Event };