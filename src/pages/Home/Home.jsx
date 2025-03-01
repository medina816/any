import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setColors } from "../../redux/counter/changeSlice"
import "../styles.css"
import { Link } from "react-router-dom";

const ColorBox = ({ index }) => {
  const color = useSelector((state) => state.colors.colors[index]);
  return <div className="color-box" style={{ backgroundColor: color }}></div>
};

const Home = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState("")

  const handleChange = () => {
    const colors = input.split(",").map((e) => e.trim().toLowerCase())
    dispatch(setColors(colors))
    setInput("")
  }

  return (
    <div className="container">
   
      <input
        className="input"
        type="text"
       placeholder="write a color"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="button" onClick={handleChange}>use</button>
      <div className="box-container">
        <ColorBox index={0} />
        <ColorBox index={1} />
        <ColorBox index={2} />
      </div>
    </div>
  );
};

export default Home