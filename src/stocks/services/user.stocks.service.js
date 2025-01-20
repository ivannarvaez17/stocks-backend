import { UserStocksRepository } from '../repositories/user.stock.repository.js';

export class UsersStocksService {
    constructor() {
        this.userStocksRepository = new UserStocksRepository();
    }

    async getUserStocks(userId) {
        return await this.userStocksRepository.getUserStocks(userId);
    }
}