export interface TourOperator {
  address: string;
  phone: string;
  site: string;
  imageUrl: string;
}
export interface TourOperators {
  [key: string]: TourOperator;
}
