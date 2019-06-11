export interface SingleOption {
  text: string;
}

export interface SingleCategory {
  name: string;
  active: boolean;
  used: Item[];
  list: Item[];
}

export interface Item {
  PL: string;
  ORIGINAL: string;
}
