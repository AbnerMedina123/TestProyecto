import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Carga las variables de entorno
const NODE_ENV = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${NODE_ENV}` });

const db = new Sequelize(
    process.env.DB_DATABASE || '',
    process.env.DB_USERNAME || '',
    process.env.DB_PASSWORD || '',
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false,
        dialectOptions: {
            typeCast: (field: any, next: any) => {
                if (field.type === 'DATETIME') {
                    return field.string();
                }
                return next();
            },
        },
        timezone: '-06:00',
    }
);

export default db;
