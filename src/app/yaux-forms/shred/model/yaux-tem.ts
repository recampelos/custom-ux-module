export interface Item {
  key?: string;
  label?: string;
  value: any;
  selected?: boolean;
}

export interface CheckBoxItem extends Item {
  checkBoxValue?: any;
}
