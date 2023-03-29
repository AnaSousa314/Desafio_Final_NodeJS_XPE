import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config()

const sequelize = new Sequelize(
    process.env.PG_HOST  
  ,
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
)

export default sequelize;



// import { Sequelize } from 'sequelize';
// import dotenv from 'dotenv';

// dotenv.config();

// const sequelize = new Sequelize(
//   process.env.PG_DB,
//   process.env.PG_USER,
//   process.env.PG_PASSWORD,
//   {
//     dialect: 'postgres',
//     define: {
//         timestamps: false
//     },
//     port: process.env.PG_PORT
//   }
// );

// export default sequelize;