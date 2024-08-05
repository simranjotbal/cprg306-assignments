"use client"
export default function Item({item , onSelect}){
    
    const { name, quantity, category} = item;
    
    
 
  return (
    <ul  className="bg-slate-900 text-white p-2 m-4 max-w-sm hover:bg-blue-400 cursor-pointer" onClick={() => onSelect(item)}>

      <div className="text-pink-600 text-lg bg-sky-950 border border-pink-300 mx-10 my-5  m-5 p-5 max-w-sm"
      >

      <li className="text-2xl font-bold">{name}</li>

      <li>Buy {quantity} in {category}</li>
      </div>
    </ul>
  );
}
