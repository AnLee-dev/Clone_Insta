import React from 'react'

export const SearchMobile = () => {
  return (
    <div>
        <div className='w-[100%] h-[44px]'>
        <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Thêm bình luận..."
            name="comment"
          />
        </div>
        <div></div>
    </div>
  )
}
