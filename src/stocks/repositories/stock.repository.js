import { prisma } from "../../shared/db/prisma.service.js";
export class StocksRepository {
   
    async getStockChanges(results) {
        let sqlQuery = `
            SELECT
                stocks.name,
                stocks.img_url as imgUrl,
                stocks.ticker,
                stockData.opening,
                stockData.closing,
                stockData.average,
                stockData.change,
                stockData.percentageChange as percentageChange
            FROM
                stocks
                INNER JOIN (
                    VALUES `;

        for (const result of results) {
            if (result.status === 'fulfilled') {
                const tickerData = result.value.data;
                const tickerName = tickerData.results[0].T;
                const opening = tickerData.results[0].o;
                const closing = tickerData.results[0].c;
                const average = tickerData.results[0].vw;

                const change = opening - closing;
                let percentageChange = ((change / opening) * 100).toFixed(2);
                if (closing < opening) {
                    percentageChange = `-${Math.abs(percentageChange)}`; // Add a minus sign if closing is less than opening
                }

                sqlQuery += `('${tickerName}', ${opening}, ${closing}, ${average}, ${change}, ${percentageChange}),`;
            } else {
                console.error(`Error fetching data for ticker:`, result.reason);
            }
        }

        if (sqlQuery.endsWith(',')) {
            sqlQuery = sqlQuery.slice(0, -1);
        }

        sqlQuery += `) AS stockData (ticker, opening, closing, average, change, percentageChange) ON stockData.ticker = stocks.ticker
            WHERE
                stockData.ticker = stocks.ticker;`;
        
        return await this.runRawSelect(sqlQuery);
    }

    async runRawSelect(query) {
        console.log("StockRepository.runRawSelect", query);
        try {
            return await prisma.$queryRawUnsafe(query);
        } catch (err) {
            console.log('StocksRepository.findFirst: Something went wrong while reading the stocks information', err);
            return null;
        }
    }
}