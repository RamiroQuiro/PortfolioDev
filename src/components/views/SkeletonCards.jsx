import React from 'react'

export default function SkeletonCards() {
  return (
    
<div className="bg-gray-50 bg-opacity-95 animate-pulse w-44 md:w-72 shadow-md hover:shadow-lg hover:-translate-y-1 mx-auto rounded-xl hover:scale-110 duration-150 ">
    <div className="bg-gray-200 h-48 p-3 overflow-hidden animate-pulse">
    </div>
    <div className="h- p-3">
        <div className="grid grid-cols-3 gap-4 mt-2">
            
            
            <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse">
            </div>
            <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse">
            </div>
            <div className=" h-8 bg-gray-200 rounded animate-pulse">
            </div>
            
            <div className="col-span-2 ...">
            </div>
        </div>
    </div>
</div>

  )
}
