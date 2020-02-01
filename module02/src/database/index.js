import Sequelize from 'sequelize';

import Appointment from '../app/models/Appointment';
import File from '../app/models/File';
import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [Appointment, File, User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .forEach(
        model => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
