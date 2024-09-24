'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [res,setRes] = useState(null);
  const [input,setInput] = useState("");

  const handleInputChange = (e)=>{
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
      <button>Click Me!</button>
      <button onClick={handleReset}>Reset</button>
      </div>
      <div>Res :{res? res:""}</div>
    </div>
  );
}
