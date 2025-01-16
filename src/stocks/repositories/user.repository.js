import { prisma } from "src/shared/services/prisma.service";

export class OrdersRepository {

	async findFirst(query) {
		try {
			return await prisma.orders.findFirst(query);
		} catch (err) {
			console.log('OrdersRepository.findFirst: Something went wrong while reading from intermediate db', err);
			return null;
		}
	}

	
}