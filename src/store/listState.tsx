// import { atom } from "recoil";

// export type toDoList = {
//   index: number;
//   value: string;
// };

// const asyncUserListEffect =
//   (key: string) =>
//   ({ onSet, setSelf }: any) => {
//     setSelf(() => {
//       if (typeof window !== "undefined") {
//         const localData = localStorage.getItem(key);
//         if (localData !== null) {
//           return JSON.parse(localData);
//         } else {
//           return [];
//         }
//       }
//     });

//     onSet((newValue: any, _: any, isReset: boolean) => {
//       localStorage.setItem(key, JSON.stringify(newValue));
//     });
//   };

// const listState = atom<toDoList[]>({
//   key: "listState",
//   effects: [asyncUserListEffect("listState")],
// });

// export { listState };

import { atom } from "recoil";

export type toDoList = {
  index: number;
  value: string;
};

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    if (typeof window !== "undefined") {
      const savedValue = localStorage.getItem(key);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
    }

    onSet((newValue: any, _: any, isReset: boolean) => {
      isReset ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const listState = atom<toDoList[]>({
  key: "listState",
  default: [],
  effects: [localStorageEffect("listState")],
});
