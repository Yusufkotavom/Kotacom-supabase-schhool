export interface Product {
  id: string;
  title: string;
  description?: string;
  price: number;
  file_url?: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  products: CartItem[];
  status: 'pending' | 'paid' | 'completed';
  created_at: string;
}

export interface CheckoutFormData {
  name: string;
  email: string;
  whatsapp: string;
  products: CartItem[];
}