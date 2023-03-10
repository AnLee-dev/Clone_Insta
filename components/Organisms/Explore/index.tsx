import React from 'react'
import { DetailExplore } from './DetailExplore'

interface IProps {
  item?: any,
  idx: number
}
export const Explore = ({item, idx}: IProps):JSX.Element => {
  
  return (
    <div className='overflow-hidden w-full lg:w-[calc(100%-71px)] lg:ml-[71px] xl:w-[calc(100%-250px)] xl:ml-[250px] 2xl:w-[calc(100%-336px)] 2xl:ml-[336px] ssm:w-[100%] md:w-[90%] flex justify-center items-center'>
        <div className='w-[80%]'>
        {(idx + 1) % 2 === 0 && (
        <div className='mt-[2px] grid w-full grid-cols-3 gap-[2px] md:mt-[15px] md:gap-[15px]'>
          <DetailExplore src={item[0]?.src} isBig/>
          <DetailExplore  src={item[1]?.src}/>
          <DetailExplore  src={item[2]?.src}/>
        </div>
        )}
        <div className='mt-[2px] grid w-full grid-cols-3 gap-[2px] md:mt-[15px] md:gap-[15px]'>
          <DetailExplore  src={item[0]?.src}/>
          <DetailExplore  src={item[1]?.src} isBig/>
          <DetailExplore  src={item[2]?.src}/>
        </div>
        </div>
    </div>
  )
}
