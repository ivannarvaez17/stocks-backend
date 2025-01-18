import dotenv from 'dotenv'

dotenv.config();

const _default = {    
    polygonUrl: process.env.POLYGON_URL,
    polygonAPIKey: process.env.POLYGON_API_KEY,
    port: process.env.PORT,
    db: {
        host: process.env.db_host,
        port: process.env.db_port
    }
    
};

export { _default as default };