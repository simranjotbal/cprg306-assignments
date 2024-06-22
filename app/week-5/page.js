import ItemList from "./item-list";
 
 
export default function page(){
 
    return(
        <main>
        <h1 className="text-2xl font-bold m-5 text-pink-300">Shopping List</h1>
        <ItemList/>
        
      </main>
    );
  }