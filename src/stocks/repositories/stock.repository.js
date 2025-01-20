import { prisma } from "src/shared/services/prisma.service";
export class StocksRepository {
   
    async getStockChanges(results) {
        let sqlQuery = `
            SELECT
                stocks.name,
                stocks.ticker,
                stockData.opening,
                stockData.closing,
                stockData.average,
                stockData.change,
                stockData.percentageChange
            FROM
                stocks AS t
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
                const percentageChange = ((change / opening) * 100).toFixed(2);

                sqlQuery += `('${tickerName}', ${opening}, ${closing}, ${average}, ${change}, ${percentageChange}),`;
            } else {
                console.error(`Error fetching data for ticker:`, result.reason);
            }
        }

        if (sqlQuery.endsWith(',')) {
            sqlQuery = sqlQuery.slice(0, -1);
        }

        sqlQuery += `) AS stockData (ticker, opening, closing, average, change, percentageChange) ON stockData.ticker = t.ticker
            WHERE
                stockData.ticker = t.ticker;`;

        console.log("SQL Query:", sqlQuery);
        
        return await this.runRawSelect(sqlQuery);
    }

    async runRawSelect(query) {
        console.log("StockRepository.runRawSelect", query);
        try {
            return await prisma.queryRawUnsafe(query);
        } catch (err) {
            console.log('StocksRepository.findFirst: Something went wrong while reading from intermediate db', err);
            return null;
        }
    }
}