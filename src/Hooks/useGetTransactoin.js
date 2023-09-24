import React, { useEffect, useState } from 'react';
import { database } from '../Firebase/Config';
import useGetUser from './useGetUser';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

const useGetTransactoin = () => {
    const [transaction,setTransaction] = useState([]);
    const [income,setIncome] = useState(null);
    const [expense,setExpense] = useState(null)
    const {userId} = useGetUser();
    const getTransaciton = async()=>
    {
        const transactionRef = collection(database,"transaction");
        const q = query(transactionRef,where("userId","==",userId));
        onSnapshot(q,(snapshot)=>
        {
            let tincome = 0;
            let texpense = 0;
         setTransaction(snapshot.docs.map((item)=>{
            if(item.data().transactionType=='income')
            {
                tincome+=Number(item.data().transactionAmount)
            }
            else
            {
                texpense+=Number(item.data().transactionAmount);
            }
            return {...item.data(),id:item.id}
         }))
         setIncome(tincome);
         setExpense(texpense);
        })

    }
    useEffect(()=>{
        getTransaciton();
    },[])
    return {transaction,income,expense};
}

export default useGetTransactoin
