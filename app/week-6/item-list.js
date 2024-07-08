'use client'
import { useState } from "react";
import Item from "./item";


export default function ItemList({items}){
    

    const [sortBy,setSortBy] = useState("name");

   
    const handleSortByName = () => setSortBy("name");
    const handleSortByCategory = () => setSortBy("category");
    
    const sortedItems = [...items];
    if (sortBy === "name") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") 
    {
      sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    }

      const groupByCategory = (items) => {
        return items.reduce((acc, item) => {
          const { category } = item;
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(item);
          return acc;
        }, {});
      };

       const renderGroupedItems = (groupedItems) => {
        return Object.keys(groupedItems).sort().map((category) => (
            <div key={category}>
                <h2 className="text-2xl font-mono ml-4 mt-4 mb-2">{category}</h2>
                {groupedItems[category].map((eachItem) => (
                    <Item key={eachItem.id} item={eachItem}/>
                ))}
            </div>
        ));
    }
    


    return(
        <div>
        <section className=" flex mb-5 px-10 py-5 ">
                <div>
                <label className="text-xl font-medium">Sort By: </label>
                </div>
            <button className=" bg-blue-300 hover:bg-pink-700 py-1 m-1 w-28"  onClick={handleSortByName}>Name</button>
            <button className=" bg-blue-300 hover:bg-pink-700 p-1 m-1 w-28" onClick={handleSortByCategory}>Category</button>
        </section>
        <section className=" p-2 m-4 bg-slate-900 max-w-sm">
          {sortedItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
        </section>
        <section className="p-2 m-4 bg-slate-900 max-w-sm">
          {sortBy === "category"
          ? renderGroupedItems(groupByCategory(sortedItems))
          : sortedItems.map((item) => <Item key={item.id} item={item} />)}
        </section>
  </div>            
    );}