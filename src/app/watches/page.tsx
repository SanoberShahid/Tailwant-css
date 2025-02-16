import React from 'react'

const watches = () => {
  const watchData = [
    
     
      {id:1, name:"HUBLOT", prize:80, description:"luxury watches", img:"/hublot(1).jpg"},
      {id:2, name:"HUBLOT", prize:70, description:"luxury watches", img:"/hublot(2).jpg"},
      {id:3, name:"HUBLOT", prize:60, description:"luxury watches", img:"hublot(3).jpg"},
      {id:4, name:"HUBLOT", prize:50, description:"luxury watches", img:"/hublot(4).jpg"},
      {id:5, name:"HUBLOT", prize:40, description:"luxury watches", img:"/hublot(5).jpg"},
      {id:6, name:"HUBLOT", prize:100, description:"luxury watches", img:"/hublot(6).jpg"}, 

  ]; 
  return (
    <div className='watches grid grid-cols-1 md:grid-cols-3 gap-10 px-10 text-center'>

        {watchData.map((watch)=>(
<div key={watch.id} className='watch-card bg-white p-5 rounded-md shadow-md text-center '>
  <img src={watch.img} alt={watch.name} className='w-full rounded-md transition-transform duration-300 transform hover:scale-110' />
  <h3 className='mt-4 text-2xl font-bold'>{watch.name}</h3>
  <p className='text-gray-500'>{watch.description}</p>
  <div className='prize text-blue-500 text-xl font-semibold mt-2'>${watch.prize}</div>
  <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md'>Add_Card</button>
  

     </div>
        
        ))}
      </div>

    
  );
};

export default watches