import dotenv from 'dotenv'

dotenv.config();

const _default = {
    postgresURL: process.env.POSTGRES_URL,
    polygonURL: process.env.POLYGON_URL,
    polygonAPIKey: process.env.POLYGON_API_KEY,
    port: parseInt(process.env.PORT),
};

export { _default as default };