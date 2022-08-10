import axios from "axios";
import { useState, useRef } from "react"
import CanvasDraw from "react-canvas-draw";


const WhiteBoard = ({width, height}) => {
    
    const [toErase, setToErase] = useState(0)
    const [colour, setColour] = useState('#000000')
    const canvasRef = useRef(null)
    const onErase = (e) => {
        setToErase(1)
    }
    const clearAll = () => {
        canvasRef.current.clear()
    }
    const changeBlue = () => {
        setColour('dodgerblue')
    }
    const changeRed = () => {
        setColour('red')
    }
    const changeGreen = () => {
        setColour('forestgreen')
    }
    const changePurple = () => {
        setColour('blueviolet')
    }
    const changeBlack = () => {
        setColour('black')
    }
    const undo = () => {
        canvasRef.current.undo()
    }
    const save = () => {
        var id = ""
        const canvasData = canvasRef.current.getSaveData()
        axios.delete("http://localhost:4000/api/canvas/")
        axios.post("http://localhost:4000/api/canvas/", {
            text: canvasData,
          }).then()
        
    }

    const load = () => {
        axios.get("http://localhost:4000/api/canvas").then((response) => {
            canvasRef.current.loadSaveData(response.data[0].text, true)
            
          })
    }
    return (
        <div className="board">
    
            <CanvasDraw className = 'whiteboard' canvasWidth={width} canvasHeight={height} erase={toErase} ref={canvasRef} hideInterface={true} hideGrid={true} brushColor={colour}  brushRadius={3}></CanvasDraw>
            <div className='buttonRow'>
                <button onClick={clearAll}>Clear All</button>
                <button onClick={undo}>Undo</button>
               
                <button className="blueButton" onClick={changeBlue}>&nbsp;&nbsp;&nbsp;&nbsp;</button>
                <button className="redButton"  onClick={changeRed}>&nbsp;&nbsp;&nbsp;&nbsp;</button>
                <button className="purpleButton" onClick={changePurple}>&nbsp;&nbsp;&nbsp;&nbsp;</button>
                <button className="greenButton" onClick={changeGreen}>&nbsp;&nbsp;&nbsp;&nbsp;</button>
                <button className="blackButton" onClick={changeBlack}>&nbsp;&nbsp;&nbsp;&nbsp;</button>

                <button onClick={save}>Save</button>
                <button onClick={load}>Load</button>
            </div>
            

        </div>
    
    )
}




export default WhiteBoard