import { toDoList } from "@/store/listState";
import { Dispatch, SetStateAction } from "react";

interface propsList {
  data: toDoList;
  setList: Dispatch<SetStateAction<toDoList[]>>;
}

const ShowList = (props: propsList) => {
  const deleteValue = (): void => {
    props.setList((el) => el.filter((element) => element.index !== props.data.index));
  };

  return (
    <div className="w-full pt-1">
      <span className="inline-block w-4/5" onClick={deleteValue}>{props.data.value}</span>
      <input className="w-1/5" type="checkbox" />
    </div>
  );
};

export default ShowList;
