export class Stock {
	constructor(chargeData) {
		this.ticket = chargeData?.ticket;
		this.name = chargeData.name;
		this.todaysChange = chargeData?.todaysChange;
		this.todayChangePercentage = chargeData?.todayChangePercentage ?? 0;
		this.price = chargeData.price;
	}

    ticket;
    name;
    todaysChange;
    todayChangePercentage;
    price;
}