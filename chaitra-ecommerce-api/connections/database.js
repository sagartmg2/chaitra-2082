const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "postgres://postgres:postgres@localhost:5432/postgres",
  {
    logging: false,
  },
);

const checkDbConnection = async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({ force: true }); // NOTE: this will remove all the datas from database
    await sequelize.sync();
    console.log("DB Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

checkDbConnection();

module.exports = sequelize
// export default sequalize
