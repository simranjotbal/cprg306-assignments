"use client"
import { useState } from "react";
import Item from "./item";
import data from './items.json';
 
export default function ItemList() {

    let Array = data.map((list) => ({...list}))
    const [sortBy,setSortBy] = useState("name","category");
    //let handelChangeSort = (event) => setSortBy(event.target.value);

    Array = Array.sort ((a,b) => {

      if (sortBy === 'name' || sortBy === 'category'){
      if( isNaN(parseInt(a[sortBy])))
          {
      let nameA = a[sortBy].toUpperCase();
      let nameB = b[sortBy].toUpperCase();
      if (nameA < nameB){
          return -1;
      }
      if (nameA > nameB){
          return 1;
      }
      return 0;
      }
      else {
          return a[sortBy] - b[sortBy]
      }  

      } 
  } );
 
  return (
    <div>
        <label className="p-1 m-2 w-28"> Sort By:</label>

          <button onClick={() => setSortBy('name')} className="bg-blue-300 p-1 m-2 w-28 rounded  hover:bg-pink-500 text-black  ">
            Name 
          </button>
        
          <button onClick={() => setSortBy('category')} className="bg-blue-300 p-1 m-2 w-28 rounded  hover:bg-pink-500 text-black  ">
            Category 
          </button>
          
          <section className='flex flex-col space-y-2'>
            {Array.map((list) => (
                <Item item={list}/>
            ))}
            </section>
            
    </div>
    
  );
}
 