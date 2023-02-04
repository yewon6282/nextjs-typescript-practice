import ShowList from "@/components/ShowList";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { listState } from "@/store/listState";

const Home = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    mounted && (
      <div className="w-80 p-2">
        <div className="w-full">
          <input type="text" className="w-4/5 border-solid border-2 border-sky-500 rounded-lg p-2" onChange={(e) => inputValue(e.target.value)} value={value || ""}></input>
          <button className="w-1/5 rounded-lg p-2" onClick={addValue}>
            입력
          </button>
        </div>

        {list.length > 0 && (
          <ul>
            {list.map((el) => (
              <li key={el.index}>
                <ShowList data={el} setList={setList} />
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  );
};

export default Home;
