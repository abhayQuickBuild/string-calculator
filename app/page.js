'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { add } from "./calculator/utils";

export default function Home() {
  const [res,setRes] = useState(null);
  const [input,setInput] = useState("");
  const [error, setError] = useState('');
  console.log("input",input);
  const handleCalculation = () => {
    try {
      const sum = add(input);
      setRes(sum);
      setError('');
    } catch (e) {
      setError(e.message);
      setRes(null);
    }
  };
  const handleInputChange = (e)=>{
    console.log("value",e.target.value)
    setInput(e.target.value)
  }
  const handleReset = ()=>{
    setRes(null);
    setInput("")
  }
  
  return (
    <div className={styles.page}>
      <label>Enter String</label>
      <input className={styles["input-1"]} value={input} onChange={handleInputChange}/>
      <div className={styles["reset-wrapper"]}>
      <button onClick={handleCalculation}>Click Me!</button>
      <button onClick={handleReset}>Reset</button>
      </div>
      {error? <div>{error}</div>: null}
      <div>Res :{res !== null? res:""}</div>
    </div>
  );
}
