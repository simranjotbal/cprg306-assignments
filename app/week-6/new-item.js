"use client";

import { useState } from "react";

export default function NewItem({onAddItem}){

    const [name , setName] = useState("");

    const [quantity, setQuantity] = useState(1);

    const [category , setCategory] = useState("Produce");

    const handleSubmit = (event) =>{
        //console.dir(event);
        event.preventDefault();

        const item = {
            id: Math.random().toString(36).substring(2, 9),
            name,
            quantity,
            category
        };

        
        
        onAddItem(item);
        setName("");
        setQuantity(1);
        setCategory("produce");
}
return(
    <div class="flex justify-start p-4">

    <form onSubmit= {handleSubmit} className="w-30"  >
    <div>
        <label>
        <input type="text"
         placeholder="Item name" class="w-full border-5 border-black rounded-lg text-black " 
         value={name}
        onChange={(e) => setName (e.target.value)} required/>
        </label>
    </div>

    <div class="flex justify-between">
        <input type="number" class="border-5 border-black rounded-lg  text-black mx-1 my-2" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} min={1} max={99} required/>
        
        <label>
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
        </label>
    </div>
    <button type="submit" className="bg-blue-500 w-full text-white font-semibold rounded border-10 border-black">+</button>

</form>

</div>
);
}