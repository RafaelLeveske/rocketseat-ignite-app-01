import { v4 as uuidV4 } from "uuid";

export interface ICategory {
  id?: string;
  name: string;
  description: string;
  createdAt: Date;
}

export default class Category {
  id?: string;
  name: string;
  description: string;
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
