export interface Hotel {
  city: string;
  about: string;
  imageUrl: string;
}
export interface Hotels {
  [key: string]: Hotel;
}
