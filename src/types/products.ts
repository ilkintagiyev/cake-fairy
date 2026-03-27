export interface Product {
  id: number;
  name: string;
  currentPrice: number;
  oldPrice?: number;
  discount?: number;
  image: string;
  quantity?:number;
}