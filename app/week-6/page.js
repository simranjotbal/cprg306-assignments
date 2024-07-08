"use client"
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from './items.json';
 
 
export default function page(){
  const [items , setItems] = useState(
      itemsData.map((item) => ({...item})));
  
    const handleAddItem = (item) => {
      setItems([...items, item]);
    };
  
    
    return(
        <main>
        <h1 className="text-2xl font-bold m-5 text-pink-300">Shopping List</h1>
        <NewItem onHandleAddItem={handleAddItem}/>
        <ItemList items={items}/>
        
        
      </main>
    );
  
  }