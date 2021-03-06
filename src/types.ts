export interface Item {
  id: string;
  name: string;
  items: Item[];
}

export enum Actions {
  SELECT,
  UNSELECT,
}
export interface HistoryItem {
  id: string;
  name: string;
  datetime: string;
  action: Actions;
}

export enum HistoryModes {
  ALL = 'all',
  SELECTED = 'selected',
  UNSELECTED = 'unselected',
}
