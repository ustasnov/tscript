import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    calculateTotalCost(): number {
        return this._items.reduce((prevValue, curValue) => {
            return prevValue + curValue.price;
        }, 0);
    }

    calculateTotalCostWithDiscount(discount: number): number {
        const totalCost = this.calculateTotalCost();
        return totalCost - Number((totalCost * discount / 100).toFixed(2));
    }

    delete(itemId: number): void {
        this._items = this._items.filter((item) => typeof (item) === 'object' && item.id !== itemId);
    }
}