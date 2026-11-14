// In-memory singleton pattern for food repository
class FoodRepository {
  constructor() {

    if (FoodRepository.instance) {
      return FoodRepository.instance;
    }

    //started with 5 food items with their prices 
    this.foods = [
        { id: 1, name: 'Pizza', price: 10.99 },
        { id: 2, name: 'Burger', price: 8.99 },
        { id: 3, name: 'Salad', price: 7.99 },
        { id: 4, name: 'Pasta', price: 12.99 },
        { id: 5, name: 'Soup', price: 5.99 }
    ];

    console.log("[FoodRepository] Singleton started with 5 food items.");
    FoodRepository.instance = this;
  }

    // Method to get all food items
    getAllFoods() {
        console.log("[FoodRepository] Fetching all food items.");
        return this.foods;
    }
  }

//Export a single frozen instance of the FoodRepository class
const foodRepositoryInstance = new FoodRepository();
Object.freeze(foodRepositoryInstance);
module.exports = foodRepositoryInstance;

