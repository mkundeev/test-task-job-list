export interface IProduct {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IJob {
  id: number;
  title: string;
  name: string;
  description: string;
  updatedAt: string;
  location: { lat: number; long: number };
  pictures: string[];
  address: string;
}
