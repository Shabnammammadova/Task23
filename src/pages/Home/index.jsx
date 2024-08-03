import React, { useState } from "react";
import styles from "./index.module.css";


// function onPlay({square,xIsNext,onPlay}){
//   function handleClick(i){
//     if(winner(square)|| square[i]){
//       return
//     }
//     const nextSquares = square.slice()
//     if (xIsNext){
//     nextSquares[i] = 'X'
//   }
//   else{
//     nextSquares[i] = '0'
//   }
//   onPlay(nextSquares)
// }
// }

// function buttonClick ({xIsNext,element,onClick}){
//   const nextElement = element.slice()
// if(xIsNext){
//   nextElement[i]='x'
// }
// else{
//   nextElement[i]='y'
// }
// onclick(nextElement)
// }

const data = [];


const Home = () => {
  // const [button, setButton] = useState();
  // const [show,setShow] = useState(false)

  const[count,setCount] = useState(0)
  const[show, setShow] = useState(false);

   const toggle = (e,num)=>{
    if(show){
      return 0;
    }
    if(count%2==0){
      data[num] = X;
      setCount(++count)
    }
   }

  return (
    <>
      <div className={styles.players}>
        <h1>Tic Tac Toe</h1>
        <h2>Players 1's Turn</h2>
        <table role="grid">
          <tbody>
            <tr>
              <td>
                <button
                  // onClick={() => {
                  //   setButton(!button);
                  //   setShow(!show)
                  // }}
                  className={styles["game-square"]}
                >
                  {/* {show ? "X" : "O"} */}
                </button>
              </td>
              <td>
                <button className={styles["game-square"]}>
                </button>
              </td>
              <td>
                <button className={styles["game-square"]}></button>
              </td>
            </tr>
            <tr>
              <td>
                <button className={styles["game-square"]}></button>
              </td>
              <td>
                <button className={styles["game-square"]}></button>
              </td>
              <td>
                <button className={styles["game-square"]}></button>
              </td>
            </tr>
            <tr>
              <td>
                <button className={styles["game-square"]}></button>
              </td>
              <td>
                <button className={styles["game-square"]}></button>
              </td>
              <td>
                <button className={styles["game-square"]}></button>
              </td>
            </tr>
          </tbody>
        </table>
        <button className={styles.restart}>Restart Game</button>
      </div>
    </>
  );
};

export default Home;
