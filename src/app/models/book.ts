import {Tag} from "./tag";
import {Author} from "./author";

export interface Book {
  id: number;
  title: string;
  author: Author;
  publicationYear: number;
  isbn: string;
  level: string;
  description: string;
  available: boolean;
  tags: Tag[];
}
