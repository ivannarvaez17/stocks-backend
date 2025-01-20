import { UsersStocksService } from './user.stocks.service.js';
import { PolygonService } from './polygon.service.js';

export class HomePageService {
    constructor() {
        this.usersStocksService = new UsersStocksService();
        this.polygonService = new PolygonService();
    }

    async getUserOverview(userId) {
        const tickers = await this.usersStocksService.getUserStocks(userId);
        
        if (!tickers || tickers.length === 0) {
            return {
                totalInvesting: 0,
                buyingPower: 0,
                stocksData: []
            };
        }

        const tickerValues = tickers.map(ticker => ticker.ticker);
        const stocksData = await this.polygonService.fetchStockData(tickerValues);

        const overview = {
            totalInvesting: 600.55,
            buyingPower: 545.55,
            stocksData: stocksData
        };

        return overview;
    }
}