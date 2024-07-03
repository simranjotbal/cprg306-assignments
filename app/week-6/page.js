"use client"
import { useState } from "react";
import NewItem from "../week-4/new-item";
import ItemList from "./item-list";
import itemsData from './items.json';
 
 
export default function page(){
  const [itemList , setItemList] = useState(
      itemsData.map((item) => ({...item}))
  );
  
    const handleAddItem = (newItem) => {
      setItemList([...itemList, newItem]);
    };
  
    return(
        <main>
        <h1 className="text-2xl font-bold m-5 text-pink-300">Shopping List</h1>
        <NewItem onAddItem={handleAddItem}/>
        <ItemList items={itemList}/>
        
        
      </main>
    );
  }