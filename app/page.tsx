"use client"
import Content from '@/components/Content/Content'
import NavBar from '@/components/NavBar/NavBar'
import { NavMobileBottom } from '@/components/NavBar/NavMobileBottom'
import { NavMobileTop } from '@/components/NavBar/NavMobileTop'
import { Provider } from 'react-redux'
import { store } from '@/store/index'

export default function Home() {
  return (
    <Provider store={store}>
    <div className="flex w-full [&__svg]:cursor-pointer">
        <NavMobileTop />
        <NavBar />
      <div className="w-full md:ml-[71px] lg:ml-[71px] xl:ml-[336px] h-screen lg:w-[calc(100vw-71px)] ssm:w-[70%] ssm:m-auto md:w-[100%]">
        <div className="m-auto mt-[48px] h-screen lg:w-[853px] w-full">
          <Content />
        </div>
      </div>
      <NavMobileBottom />
    </div>
    </Provider>
  )
}
