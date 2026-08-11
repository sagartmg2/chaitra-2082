import { Sequelize } from "sequelize";
import pg from "pg";

const sequelize = new Sequelize(
  `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:5432/${process.env.DB_NAME}`,
  {
    logging: false,
    dialectModule: pg,
  },
);

// module.exports = sequelize
export default sequelize;
