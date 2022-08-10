import axios from "axios";
import { useState, useRef } from "react"
import CanvasDraw from "react-canvas-draw";


const WhiteBoard = ({width, height}) => {
    
    const [colour, setColour] = useState('#000000')
    const canvasRef = useRef(null)
    
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
    
            <CanvasDraw className = 'whiteboard' backgroundColor="aliceblue" canvasWidth={width} canvasHeight={height} ref={canvasRef} hideInterface={false} hideGrid={true} brushColor={colour}  brushRadius={3}></CanvasDraw>
            
            <div className="buttonRow">

            
                <div className="undoClearRow" alig>
                    <button className="saveBtn" onClick={clearAll}>Clear All</button>
                    <button className="saveBtn" onClick={undo}>Undo</button>
                </div>
                    
                
                <div className='colourRow'>
                    <button className="blueButton" onClick={changeBlue}>&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    <button className="redButton"  onClick={changeRed}>&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    <button className="purpleButton" onClick={changePurple}>&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    <button className="greenButton" onClick={changeGreen}>&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    <button className="blackButton" onClick={changeBlack}>&nbsp;&nbsp;&nbsp;&nbsp;</button>
                </div>

                <div className="saveLoadRow">
                    <button className="saveBtn" onClick={save}>Save</button>
                    <button className="saveBtn" onClick={load}>Load</button>
                </div>
            </div>

        </div>
    
    )
}




export default WhiteBoard