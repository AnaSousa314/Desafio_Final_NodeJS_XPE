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