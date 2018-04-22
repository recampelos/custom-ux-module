export interface Item {
  key?: string;
  label?: string;
  value: any;
  selected?: boolean;
}

export interface MultipleInputItem extends Item {
  id: string;
  inputValue?: any;
}
