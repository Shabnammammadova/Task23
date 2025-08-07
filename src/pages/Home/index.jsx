import { useState } from "react";
import styles from "./index.module.css";

const Home = () => {
  const [array, setArray] = useState(Array(9).fill(""));
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");

  const toggle = (num) => {
    if (show || array[num]) return;

    const newArray = [...array];
    newArray[num] = count % 2 === 0 ? "X" : "O";
    setArray(newArray);
    setCount(count + 1);
    checkWinner(newArray);
  };

  const handleClick = (index) => (
    <button className={styles["game-square"]} onClick={() => toggle(index)}>
      {array[index]}
    </button>
  );

  const checkWinner = (data) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of winPatterns) {
      if (data[a] === data[b] && data[b] === data[c] && data[a] !== "") {
        won(data[a]);
        return;
      }
    }
  };

  const won = (winner) => {
    setShow(true);
    setTitle(`Won : ${winner}`);
  };

  const resetButton = () => {
    setArray(Array(9).fill(""));
    setCount(0);
    setShow(false);
    setTitle("");
  };

  return (
    <div className={styles.players}>
      <h1>Tic Tac Toe</h1>
      <h2>
        {show ? title : `Players ${count % 2 === 0 ? "1's" : "2's"} Turn`}
      </h2>

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

      <button className={styles.restart} onClick={resetButton}>
        Restart Game
      </button>
    </div>
  );
};

export default Home;
