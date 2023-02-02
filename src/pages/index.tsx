import ShowList from "@/components/ShowList";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { listState } from "@/store/listState";

const Home = () => {
  const [value, setValue] = useState<string>("");
  const [countIndex, setCountIndex] = useState<number>(0);
  const [list, setList] = useRecoilState(listState);

  const inputValue = (e: string): void => {
    setValue(e);
  };

  const addValue = (): void => {
    setList([...list, { index: countIndex, value: value }]);
    setCountIndex(countIndex + 1);
    setValue("");
  };

  return (
    <div className="w-80 border-solid border-2 border-black">
      <div className="w-full">
        <input type="text" className="w-4/5 border-solid border-2 border-sky-500 rounded-lg p-2" onChange={(e) => inputValue(e.target.value)} value={value || ""}></input>
        <button className="w-1/5 rounded-lg p-2" onClick={addValue}>
          입력
        </button>
      </div>

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
