export interface Place {
  city: string;
  about: string;
  imageUrl: string;
  type: string;
}
export interface Places {
  [key: string]: Place;
}
