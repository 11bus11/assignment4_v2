const { DataTypes } = require('sequalize');

const EventModel = {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    context_code: { type: DataTypes.STRING },
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    start_at: { type: DataTypes.DATETIME },
    end_at: { type: DataTypes.DATETIME }
};

module.exports = (sequelize) => sequelize.define('event', EventModel);