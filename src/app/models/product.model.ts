export interface Category {
  id: number;
  name: string;
  typeImg: string;
}
export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  available?: boolean;
  description: string;
  category: Category;
}
export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
  categoryId: number;
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> {}
