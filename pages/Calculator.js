import { useState } from "react";

function Calculator() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [method, setMethod] = useState("plus");
  function addNumber(number) {
    setResult(result * 10 + number)
  }

  function swithMethod(methodName){
    setFirstNumber(result)
    setResult(0)
    setMethod(methodName)
  }

  function calculate(){
    if(method === "plus"){
      setResult(firstNumber + result)
    }else if(method === "minus"){
      setResult(firstNumber - result)
    }else if(method === "multiply"){
      setResult(firstNumber * result)
    }else if(method === "division"){
      setResult(firstNumber / result)
    }
  }
    
  return (
    <div>
      <p>Calculator</p>
      <input className="resultDisplay" value={result}/>
      <div>
        <button onClick={()=>addNumber(1)} className="number">1</button>
        <button onClick={()=>addNumber(2)} className="number">2</button>
        <button onClick={()=>addNumber(3)} className="number">3</button>
      </div>
      <div>
        <button onClick={()=>addNumber(4)} className="number">4</button>
        <button onClick={()=>addNumber(5)} className="number">5</button>
        <button onClick={()=>addNumber(6)} className="number">6</button>
      </div>
      <div>
        <button onClick={()=>addNumber(7)} className="number">7</button>
        <button onClick={()=>addNumber(8)} className="number">8</button>
        <button onClick={()=>addNumber(9)} className="number">9</button>
      </div>
      <div>
        <button onClick={()=>addNumber(0)} className="number zero">0</button>
        <button onClick={()=>calculate()} className="number symbol">=</button>
        {/* <button className="number">.</button>*/}
      </div>
      <div className="controlBar">
        <button onClick={()=>swithMethod("plus")}  className="number symbol">+</button>
        <button onClick={()=>swithMethod("minus")}  className="number symbol">-</button>
        <button onClick={()=>swithMethod("multiply")} className="number symbol">x</button>
        <button onClick={()=>swithMethod("division")} className="number symbol">/</button>
      </div>
    </div>
  );
}

export default Calculator;
