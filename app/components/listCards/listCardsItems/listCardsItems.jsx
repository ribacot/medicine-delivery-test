"use client"
export default function ListCardsItems({title,idx}) {
const cutArr=[]
const onIsAddInCut=()=>{
cutArr.push({title,idx})
}


  return (
    <div className='relative w-[250px] h-[200px] border-solid border-red-500 border-[1px] rounded-xl'>{title}
    <button type='button' onClick={onIsAddInCut} className="absolute bottom-4 right-4 last:border-solid border-[1px] rounded-xl border-blue-900 p-[5px] hover:bg-blue-400 hover:text-red-700">Add to cart</button>
    </div>
  )
}
