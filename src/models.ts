export interface IJob {
  id: string;
  title: string;
  name: string;
  description: string;
  createdAt: string;
  location: { lat: number; long: number };
  pictures: string[];
  address: string;
  salary: string;
  benefits: string[];
  employment_type: string[];
  email: string;
  phone: string;
}

export interface IStyles {
  styles: string;
}
