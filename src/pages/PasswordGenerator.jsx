import React, { useState } from 'react'
import { LC, NC, SC, UC } from "../data/content";

function PasswordGenerator() {
  const [uppercaseCheckbox, setUppercaseCheckbox] = useState(false);
  const [lowercaseCheckbox, setLowercaseCheckbox] = useState(false);
  const [numberCheckbox, setNumberCheckbox] = useState(false);
  const [symbolCheckbox, setSymbolCheckbox] = useState(false);

  const [passwordLen, setPasswordLen] = useState(10)
  const [inputPass, setInputPass] = useState('')
  const generatePassword = () => {
    let charSet = '';
    let finalPassword = '';
    if (uppercaseCheckbox || lowercaseCheckbox || numberCheckbox || symbolCheckbox) {
      if (uppercaseCheckbox) charSet+=UC;
      if (lowercaseCheckbox) charSet+=LC;
      if (numberCheckbox) charSet+=NC;
      if (symbolCheckbox) charSet+=SC;
      // console.log(charSet);
      for (let i = 0; i < passwordLen; i++) {
        // const element = i.chatAt();
        // console.log(element);
        // setInputPass(element);
        finalPassword += charSet.charAt(Math.floor(Math.random()*charSet.length));
        console.log(finalPassword);
        setInputPass(finalPassword)
        
      }
    }
    else{
      alert('choose atleast one')
    }
  }
  return (
    <>
      <div className="pg-wrap">
        <input type="text" className="border" value={inputPass} readOnly/>
        <div className="form-group">
          <label htmlFor="">Password Charactor</label>
          <input type="number" className="border" value={passwordLen} onChange={(e)=>setPasswordLen(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="uppercase">Uppercase</label>
          <input type="checkbox" id="uppercase" checked={uppercaseCheckbox} onChange={()=>setUppercaseCheckbox(!uppercaseCheckbox)} />
        </div>
        <div className="form-group">
          <label htmlFor="lowercase">Lowercase</label>
          <input type="checkbox" id="lowercase" checked={lowercaseCheckbox} onChange={()=>setLowercaseCheckbox(!lowercaseCheckbox)} />
        </div>
        <div className="form-group">
          <label htmlFor="number">Number</label>
          <input type="checkbox" id="number" checked={numberCheckbox} onChange={()=>setNumberCheckbox(!numberCheckbox)} />
        </div>
        <div className="form-group">
          <label htmlFor="symbol">Symbol</label>
          <input type="checkbox" id="symbol" checked={symbolCheckbox} onChange={()=>setSymbolCheckbox(!symbolCheckbox)} />
        </div>
        <button onClick={generatePassword} className="bg-[blue] text-white py-2 px-4">Generate Password</button>
      </div>
    </>
  )
}

export default PasswordGenerator


// data flow each step
/*
1. concatenate all (uppercase,lowercase,symbols,numbers)
2. take charactors from all concatenated (uppercase,lowercase,symbols,numbers)  according given number
*/