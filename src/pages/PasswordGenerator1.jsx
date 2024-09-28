import React, { useState } from 'react'
import { LC, NC, SC, UC } from "../data/content";

function PasswordGenerator1() {
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const [passLen, setPassLen] = useState(10);
  const [inputPassword, setInputPassword] = useState('');

  const createPassword = () => {
    let charSet = '';
    let finalPass = '';
    if (uppercase || lowercase || number || symbol) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (symbol) charSet += SC;

      for (let i = 0; i < passLen; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random()*charSet.length))
        setInputPassword(finalPass)
        
      }
    }
  }
  return (
    <>
      <div className="pg1-wrap max-w-[500px] m-auto bg-slate-700 p-10 ">
        <input type="text" placeholder="password" className="w-full" value={inputPassword}/>
        <div className="form-group flex ">
          <label htmlFor="" className="text-white">Password Limit</label>
          <input type="number" className="w-full" value={passLen} onChange={(e)=>setPassLen(e.target.value)} />
        </div>
        <div className="form-group flex justify-between">
          <label htmlFor="" className="text-white">Uppercase</label>
          <input type="checkbox" checked={uppercase} onChange={(e)=>setUppercase(!uppercase)} />
        </div>
        <div className="form-group flex text-white justify-between">
          <label htmlFor="">Lowercase</label>
          <input type="checkbox" checked={lowercase} onChange={(e)=>setLowercase(!lowercase)} />
        </div>
        <div className="form-group flex text-white justify-between">
          <label htmlFor="">Number</label>
          <input type="checkbox" checked={number} onChange={(e)=>setNumber(!number)} />
        </div>
        <div className="form-group flex text-white justify-between">
          <label htmlFor="">Symbol</label>
          <input type="checkbox" checked={symbol} onChange={(e)=>setSymbol(!symbol)} />
        </div>
        {/* <div className="form-group flex text-white justify-between">
          <label htmlFor="">Symbols</label>
          <input type="checkbox"  />
        </div> */}
        <button onClick={createPassword}>Generate</button>
      </div>
    </>
  )
}

export default PasswordGenerator1