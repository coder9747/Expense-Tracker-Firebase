import { addDoc, collection } from "firebase/firestore"
import { useState } from "react"
import { database } from "../Firebase/Config"
import useGetUser from "./useGetUser"
export const addTransaction = async ({ description, type, amount }) => {
    const {userId} = JSON.parse(localStorage.getItem("user"));
     try {
        const transactionRef = collection(database, "transaction");
        await addDoc(transactionRef, {
            transactionDescription: description,
            transactionAmount: amount,
            transactionType: type,
            userId,
        })
        console.log("Succes");

    } catch (error) {
        console.log("Error");
    }



}