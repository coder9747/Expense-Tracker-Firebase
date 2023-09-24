import React, { useState } from 'react';
import { addTransaction } from '../Hooks/useTransaction';
import useGet from "../Hooks/useGetTransactoin";
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/Config';
import {useNavigate} from "react-router-dom"

const Expense = () => {
  const navigate = useNavigate();
  const {transaction,income,expense} = useGet();
    const [info,setInfo] = useState({
        description:"",
        amount:"",
        type:"",
    })
    function handleChange(e)
    {
        const {name,value} = e.target;
        setInfo({...info,[name]:value});
    }
    function handleClick()
    {
        if(info.amount && info.description && info.type)
        {
            addTransaction(info);
        }
        else
        {
            console.log("Hey");
        }
    }
    function handleSignOut()
    {
      localStorage.clear();
      signOut(auth);
      navigate("/")

    }
  return (
    <div className='container'>
      <button onClick={handleSignOut}>Sign Out</button>
        <label htmlFor="description">Description</label>
      <input name='description' value={info.description} onChange={handleChange} id='description' type="text" />
      <label htmlFor="amount">amount</label>
      <input name='amount' value={info.amount} onChange={handleChange} id='amount' type="text" />
      <label htmlFor="expense">Expense</label>
      <input id='expense' type="radio" name='type' onChange={handleChange} value={'expense'} />
      <label htmlFor="income">Income</label>
      <input id='income' type="radio" name='type' onChange={handleChange} value={'income'} />
      <button onClick={handleClick} >Add</button>
      <div className="income">Income : ${income} </div>
      <div className="expense">Expense : ${expense}</div>
      <div className="transactions">
        {
          transaction.map((item)=>{
            return(<div>
              <p>Description : {item.transactionDescription}</p>
              <p>Type : {item.transactionType}</p>
              <p>Amount : {item.transactionAmount}</p>
              

            </div>)
          })
        }
      </div>
    </div>
  )
}

export default Expense
