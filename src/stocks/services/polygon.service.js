import axios from 'axios';
import config from '../../shared/environment.js';
import { StocksRepository } from '../repositories/stock.repository.js';

class PolygonService {
    constructor() {
        this.stocksRepository = new StocksRepository();
    }

    async fetchStockData(tickers) {
        if (!Array.isArray(tickers) || tickers.length === 0) {
            throw new Error('Please provide a valid list of tickers.');
        }

        const promises = tickers.map(ticker => {
            return axios.get(`${config.polygonURL}/v2/aggs/ticker/${ticker}/prev`, {
                params: {
                    apiKey: config.polygonAPIKey
                }
            });
        });

        const results = await Promise.allSettled(promises);

        return await this.stocksRepository.getStockChanges(results);        
    }
}


export { PolygonService }