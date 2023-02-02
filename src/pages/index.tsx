import ShowList from "@/components/ShowList";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { listState } from "@/store/listState";

const Home = () => {
  const [value, setValue] = useState<string>("");
  const [countIndex, setCountIndex] = useState<number>(0);
  const [list, setList] = useRecoilState(listState);

  const inputValue = (e: string): any => {
    setValue(e);
  };

  const addValue = (): any => {
    setList([...list, { index: countIndex, value: value }]);
    setCountIndex(countIndex + 1);
    setValue("");
  };

  return (
    <div>
      <input type="text" onChange={(e) => inputValue(e.target.value)} value={value || ""}></input>
      <button onClick={addValue}>입력</button>

      <ul>
        {list.length > 0 &&
          list.map((el) => (
            <li key={el.index}>
              <ShowList data={el} setList={setList} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
