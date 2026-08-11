const { Sequelize } = require("sequelize");
import pg from "pg"


const sequelize = new Sequelize(
  "postgres://postgres:postgres@localhost:5432/postgres",

  psql 
  {
    logging: false,
    // dialectModule: pg
  },
);

module.exports = sequelize
// export default sequalize
