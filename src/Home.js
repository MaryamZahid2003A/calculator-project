
import {useState} from 'react';
const Home = () => {
    // take value from user 
   let[value,SetNewValue]=useState("");
   //which operator user want to perform
   let[operator,setOperater]=useState("");
   let[step,NewStep]=useState(0);
   //desired result
   let[result,SetResult]=useState();
   
    const digit=(num)=>{
        
        SetNewValue(value+num);
        
    }
    const Multiply=(oper)=>{
        setOperater(oper);
        SetNewValue("");
        if (step===0){
            NewStep(1);
            result=value;
            SetResult(result);
           
        }
        Result();
    }
    const Divide=(oper)=>{
        setOperater(oper);
        SetNewValue("");
        if (step===0){
            NewStep(1);
            result=value;
            SetResult(result);
           
        }
        Result();
    }
    const Plus=(oper)=>{
        setOperater(oper);
        SetNewValue("");
        if (step===0){
            NewStep(1);
            result=value;
            SetResult(result);
        }
        Result();
    }
    const Minus=(oper)=>{
        setOperater(oper);
        SetNewValue("");
        if (step===0){
            NewStep(1);
            result=value;
            SetResult(result);
           
        }  
        Result();
    }
    const Result=()=>{
        console.log("second value",value);
        let numericValue = parseFloat(value);
        if (operator==="*"){
            result=result*numericValue;
            SetResult(result);
            SetResult(Number(result.toFixed(1)));
        }
        if (operator==="/"){
            if (numericValue!==0){
                result=result/numericValue;
                SetResult(Number(result.toFixed(1)));
                
               
            }
           else{
            SetResult("undefined");
            clear();
           }
            
        }
        if (operator==="+"){
            result=result+numericValue;
            SetResult(result);
        }
        if (operator==="-"){
            result=result-numericValue;
            SetResult(result);
        }
    }
    const FinalResult=()=>{
        Result();
        if (operator==="+" || operator==="-"){
            SetNewValue("0");
        }
        if (operator==="*" || operator==="/"){
            SetNewValue("1");
        }
    }
    const clear = () => {
        SetNewValue(""); // Reset value to empty string
        setOperater(""); // Reset operator to empty string
        NewStep(0); // Reset step to 0
        SetResult(); // Reset result to 0
    }
    
    return (
        <div className=" h-screen flex justify-center">
            <div className="  bg-slate-950  h-5/6 lg:w-1/4 sm:w-1/3 rounded-2xl mt-7">
                <div className="flex justify-end border-4 border-slate-400 rounded-2xl h-2/6 w-11/12 mt-4 ml-4">
                    <p className="text-white font-mono text-3xl mr-5 mt-10">{result} </p>
                    <p className="text-white font-mono text-3xl mr-5 mt-10"> {operator}</p>
                    <p className="text-white font-mono text-3xl mr-5 mt-10"> {value}</p>
                    <br />
                    <p className="text-white font-mono text-3xl mr-5 mt-10">  = {result}  </p>
                </div>
               
                {/* row1 */}
                <div className="flex ml-3 mt-6 ">
                    <button  onClick={clear}  className="bg-purple-950 rounded-full h-14 w-14 text-white text-2xl ml-3">AC</button>
                    <button  onClick={()=>Multiply("*")} className="bg-purple-950 rounded-full h-14 w-14 text-white text-2xl ml-3">*</button>
                    <button  onClick={()=>Divide("/")} className="bg-purple-950 rounded-full h-14 w-14 text-white text-2xl ml-3">/</button>
                    <button  onClick={()=>Plus("+")} className="bg-purple-950 rounded-full h-14 w-14 text-white text-2xl ml-3">+</button>
                    <button  onClick={()=>Minus("-")} className="bg-purple-950 rounded-full h-14 w-14 text-white text-2xl ml-3">-</button>
                </div>
                <div className="flex flex-wrap ml-3 mt-2 ">
                    <button onClick={()=>digit(1)} className="bg-purple-950 rounded-full h-14 w-24 text-white text-2xl ml-3 mb-2">1</button>
                    <button onClick={()=>digit(2)} className="bg-purple-950 rounded-full h-14 w-24 text-white text-2xl ml-3 mb-2">2</button>
                    <button onClick={()=>digit(3)}className="bg-purple-950 rounded-full h-14 w-24 text-white text-2xl ml-3 mb-2">3</button>
                    <button onClick={()=>digit(4)} className="bg-purple-950 rounded-full h-14 w-24 text-white text-2xl ml-3 mb-2">4</button>
                    <button onClick={()=>digit(5)} className="bg-purple-950 rounded-full h-14 w-24 text-white text-2xl ml-3 mb-2">5</button>
                    <button onClick={()=>digit(6)} className="bg-purple-950 rounded-full h-14 w-24 text-white text-2xl ml-3 mb-2">6</button>
                    <button onClick={()=>digit(7)} className="bg-purple-950 rounded-full h-14 w-24 text-white text-2xl ml-3 mb-2">7</button>
                    <button onClick={()=>digit(8)} className="bg-purple-950 rounded-full h-14 w-24 text-white text-2xl ml-3 mb-2">8</button>
                    <button onClick={()=>digit(9)} className="bg-purple-950 rounded-full h-14 w-24 text-white text-2xl ml-3 mb-2">9</button>
                    <button onClick={()=>digit(0)} className="bg-purple-950 rounded-full h-14 w-24 text-white text-2xl ml-3 mb-2">0</button>
                    <button onClick={()=>digit(".")} className="bg-purple-950 rounded-full h-14 w-24 text-white text-2xl ml-3 mb-2">.</button>
                    <button onClick={FinalResult} className="bg-pink-900 rounded-full h-14 w-24 text-white text-2xl ml-3 mb-2">=</button>
                </div>
            </div>
        </div>
    );
}

export default Home;