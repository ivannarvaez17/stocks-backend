import { prisma } from "../../shared/db/prisma.service.js";

export class UserStocksRepository {
    async getUserStocks(userId) {
        const sqlQuery = `
            SELECT 
                stocks.ticker 
            FROM 
                user_stocks 
            INNER JOIN 
                stocks 
            ON 
                user_stocks.stock_id = stocks.id 
            WHERE 
                user_stocks.user_id = '${userId}';`;

        return await this.runRawSelect(sqlQuery);
    }

    async runRawSelect(query) {
        console.log("UserStocksRepository.runRawSelect", query);
        try {
            return await prisma.queryRawUnsafe(query);
        } catch (err) {
            console.log('UserStocksRepository.runRawSelect: Something went wrong while reading from intermediate db', err);
            return null;
        }
    }
}