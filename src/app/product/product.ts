export enum Category {
  Dairy = 'Dairy',
  Beauty = 'Beauty',
  Tech = 'Tech',
  Grocery = 'Grocery',
  Fruits = 'Fruits',
  Veges = 'Veges',
  Clothing = 'Clothes',
  Footwear = 'FootWear',
  Furniture = 'Furnitures',
  Appliances = 'Electrical Appliances',
}

export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  category: Category;
  rating: number;
  quantity: number;
}
