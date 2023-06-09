export interface Product {
  id: string;
  title: string;
  price: number;
  images: string [];
  description: string;
  category: Category;
  qty: number;
}

export interface Category {
  id: string;
  name: string;
}
