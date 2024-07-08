"use client";

import { useState } from "react";

export default function NewItem({onHandleAddItem}){

    const [name , setName] = useState("");

    const [quantity, setQuantity] = useState(1);

    const [category , setCategory] = useState("Produce");

    const generateId = (length = 17) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i< length; i++){
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }


    const handleSubmit = (event) =>{
        
        event.preventDefault();

        const newId = generateId();
        const new_item = {id: newId, name, quantity, category};
        onHandleAddItem(new_item);
        setName("");
        setQuantity(1);
        setCategory("produce");
}
return(
    <main className="flex justify-start items-center mx-8 my-8 w-full">
    

    <form onSubmit= {handleSubmit} className="w-30"  >
    <div>
        
        <input type="text"
         placeholder="Item name" class="w-full border-5 border-black rounded-lg text-black " 
         value={name}
        onChange={(e) => setName (e.target.value)} required/>
        
    </div>

    <div class="flex justify-between ">
        <input type="number" class="border-5 border-black rounded-lg  text-black mx-1 my-2" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} min="1" max="99" required/>
        
       
        <select value={category} onChange={(e) => setCategory(e.target.value)} class="border-5 border-black rounded-lg text-black mx-1 my-2 ">
            <option value="Produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
        </select>
       
    </div>
    <div>
    <button type="submit" className="bg-blue-500 w-full text-white font-semibold rounded border-10 border-black">+</button>
    </div>

</form>
    </main>
);
}