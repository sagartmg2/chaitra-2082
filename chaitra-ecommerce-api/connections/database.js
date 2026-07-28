const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "postgres://postgres:postgres@localhost:5432/postgres",
  {
    logging: false,
  },
);

module.exports = sequelize
// export default sequalize
