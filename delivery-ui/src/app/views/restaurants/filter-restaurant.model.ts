import { Restaurant } from "src/app/delivery.namespace";

export class RestaurantsHandler {
    originalList: Restaurant[];
    filteredList: Restaurant[];

    get currentList(): Restaurant[] {
        return this.filteredList
    }

    constructor(restaurantList: Restaurant[]) {
        this.originalList = restaurantList;
    }

    filter(property: 'name' | 'description', searchTerm: string): void {
        const listCopy = [...this.originalList];
        const byProperty = (restaurant: Restaurant) => restaurant[property].includes(searchTerm);
        this.filteredList = listCopy.filter(byProperty);
    }
}