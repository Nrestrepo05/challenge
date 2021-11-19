import { useEffect, useState } from "react";
import Button from "./Button";
import reverseList from "./utils/reverseList";

const STARTING_LIST = [1, 2, 3, 4, 5, 6]

const ReverseList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const reversedList = await reverseList(STARTING_LIST);
    setList(reversedList);
    })()
  }, [])

  const handleReverseList = async (e) => {
    e.preventDefault();
    const reversedList = await reverseList(list);
    setList(reversedList);
  }
  return (
    <>
      <h1>List Presentation</h1>
      <ul>
        {list.length > 0 ? list.map((item) => (
          <li key={item}>{item}</li>
        ))
        : ""
      }
      </ul>
      <Button onClick={handleReverseList} title="Reverse List" />
    </>
  );
};

export default ReverseList;
