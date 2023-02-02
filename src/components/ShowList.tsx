import { toDoList } from "@/store/listState";
import { Dispatch, SetStateAction } from "react";

interface propsList {
  data: toDoList;
  setList: Dispatch<SetStateAction<toDoList[]>>;
}

const ShowList = (props: propsList) => {
  const deleteValue = (): any => {
    props.setList((el) => el.filter((element) => element.index !== props.data.index));
  };

  return (
    <div>
      <span onClick={deleteValue}>{props.data.value}</span>
      <input type="checkbox" />
    </div>
  );
};

export default ShowList;
