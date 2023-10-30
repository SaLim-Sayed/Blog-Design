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