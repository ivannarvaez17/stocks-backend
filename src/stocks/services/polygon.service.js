import axios from 'axios';
import config from './src/shared/environment.js';
import { StocksRepository } from './src/stocks/repositories/stock.repository';

class PolygonService {
    constructor() {
        this.stocksRepository = new StocksRepository();
    }

    async fetchStockData(tickers) {
        if (!Array.isArray(tickers) || tickers.length === 0) {
            throw new Error('Please provide a valid list of tickers.');
        }

        const promises = tickers.map(ticker => {
            return axios.get(`${config.POLYGON_URL}/${ticker}/prev`, {
                params: {
                    apiKey: config.POLYGON_API_KEY 
                }
            });
        });

        const results = await Promise.allSettled(promises);

        return await this.stocksRepository.getStockChanges(results);        
    }
}