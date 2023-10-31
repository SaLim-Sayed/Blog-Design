export interface Client {
  imageUrl: string;
  alt: string;
}

export interface Feature {
  imageUrl: string;
  title: string;
  content: string;
}

export interface featureBlock extends Feature {
  isReversed?: boolean;
}

export interface Testimonial {
  imageUrl: string;
  name: string;
  role: string;
  review: string;
}

export interface Posts {
  // elixirs:Array<WElixirs>,
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface Products {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[] 
}
