export interface Restaurant {
    city: string;
    about: string;
    imageUrl: string;
  }
  export interface Restaurants {
    [key: string]: Restaurant;
  }
  