import { useState } from "react";
import styles from "./index.module.css";
import { useRef } from "react";

const Home = () => {
  const [array, setArray] = useState(Array(9).fill(""));
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const titleRef = useRef(null);
  const [title,setTitle] = useState("")

  const toggle = (num) => {
    if (show || array[num]) {
      return;
    }
    const newArray = array.slice();
    newArray[num] = count % 2 === 0 ? "X" : "O";
    setArray(newArray);
    setCount(count + 1);
    checkWinner(newArray);
  };

  const handleClick = (index) => {
    return (
      <button className={styles["game-square"]} onClick={() => toggle(index)}>
        {array[index]}
      </button>
    );
  };

  const checkWinner = (data) => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[0]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data);
    }
  };
  const won = (winner) => {
    // console.log(titleRef.current.textContent);
    setShow(true);
    if (winner === "X") {
      // titleRef.current.textContent = `Won x`;
      title.textContent = 'Won X'
    } else {
      title.textContent = 'Won O'
    }
  };
  const resetButton = () => {
    setShow(false);
    setArray(Array(9).fill(""));
  };
  return (
    <>
      <div className={styles.players}>
        <h1>Tic Tac Toe</h1>
        <h2>Players {count % 2 === 0 ? "1's" : "2's"} Turn</h2>
        <table role="grid">
          <tbody>
            <tr>
              <td>{handleClick(0)}</td>
              <td>{handleClick(1)}</td>
              <td>{handleClick(2)}</td>
            </tr>
            <tr>
              <td>{handleClick(3)}</td>
              <td>{handleClick(4)}</td>
              <td>{handleClick(5)}</td>
            </tr>
            <tr>
              <td>{handleClick(6)}</td>
              <td>{handleClick(7)}</td>
              <td>{handleClick(8)}</td>
            </tr>
          </tbody>
        </table>
        <button
          className={styles.restart}
          onClick={() => {
            resetButton();
          }}
        >
          Restart Game
        </button>
      </div>
    </>
  );
};

export default Home;
