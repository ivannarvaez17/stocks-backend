import express from 'express'
import axios from 'axios'
import config from './src/shared/environment.js'
import Stock from './src/stocks/modeld/stock.model.js'

// PolygonService class
class PolygonService {
    async fetchStockData(tickers) {
        if (!Array.isArray(tickers) || tickers.length === 0) {
            throw new Error('Please provide a valid list of tickers.');
        }

        try {
            const response = await axios.get(config.POLYGON_URL, {
                params: {
                    tickers: tickers.join(','),
                    apiKey: config.POLYGON_API_KEY 
                }
            });

            // Store the results in the stockData object
            const stockData = response.data.tickers.map(tickerData => new Stock(tickerData));


            console.log("stockData",stockData)

            return stockData;
        } catch (error) {
            console.error('Error fetching stock data:', error);
            throw new Error('Failed to fetch stock data.');
        }
    }
}

// Middleware to parse JSON requests
app.use(express.json());

// Endpoint to fetch stock data
app.post('/fetch-stock-data', async (req, res) => {
    const tickers = req.body.tickers; // Expecting an array of tickers
    const polygonService = new PolygonService();

    try {
        const data = await polygonService.fetchStockData(tickers);
        res.json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

