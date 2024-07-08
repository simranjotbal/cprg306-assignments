"use client"
export default function Item({item}){
    
    let { name, quantity, category} = item;
 
  return (
    <ul>
      <div className="text-pink-600 text-lg bg-sky-950 border border-pink-300 mx-10 my-5  m-5 p-5 max-w-sm">
      <li className="text-2xl font-bold">{name}</li>
      <li>Buy {quantity} in {category}</li>
      </div>
    </ul>
  );
}
