import { atom } from "recoil";

export type toDoList = {
  index: number;
  value: string;
};

const listState = atom<toDoList[]>({
  key: "listState",
  default: [],
});

export { listState };
