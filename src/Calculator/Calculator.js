import React , {useState} from 'react';
import "./Calculator.css"
function Calculator(){
    const[result, setResult]=useState('');
    const handleclick=(e)=>{
        setResult(result.concat(e.target.name))
    }
    const handlebackspace=()=>{
   
        setResult(result.slice(0,result.length-1))
    }
const handleEqual=()=>{
    let res = eval(result)
    setResult(String(res))
}
const date = new Date().toLocaleDateString()
const time = new Date().toLocaleTimeString()


    return (
        <>
        <div className="container">
           <h1 style={{color: "white", height: "2vh", textAlign: "center"}}>Normal Calculator clone</h1>
            <form>
                <input type="text" value={result}/>
            </form>
            <div className='keypad'>
            <button onClick={()=>{setResult('')}}id='clear'>clear</button>
                <button onClick={handlebackspace} >c</button>
                <button onClick={handleclick} name="/">&divide;</button>
                <button onClick={handleclick} name="7">7</button>
                <button onClick={handleclick} name="8">8</button>
                <button onClick={handleclick} name="9">9</button>
                <button onClick={handleclick} name="*">&times;</button>
                <button onClick={handleclick} name="4">4</button>
                <button onClick={handleclick} name="5">5</button>
                <button onClick={handleclick} name="6">6</button>
                <button onClick={handleclick} name="-">&ndash;</button>
                <button onClick={handleclick} name="1">1</button>
                <button onClick={handleclick} name="2">2</button>
                <button onClick={handleclick} name="3">3</button>
                <button onClick={handleclick} name="+">+</button>
                <button onClick={handleclick} name="0">0</button>
                <button onClick={handleclick} name=".">.</button>
                <button onClick={handleEqual} id="equal">=</button>

            </div>
            
        </div>

        </>
    )
}


export default Calculator;