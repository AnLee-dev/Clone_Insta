interface IProps {
  settingRef:React.MutableRefObject<null>
  setCheck: React.Dispatch<React.SetStateAction<boolean>>
}
export const Options = ({settingRef, setCheck}:IProps):JSX.Element => {
  return (
    <div className="bg-[#00000096] fixed inset-0 flex justify-center items-center z-50">
    <div ref={settingRef} className="absolute w-[400px] h-[432px] bg-c2 rounded-[12px]">
        <ul className="[&>li]:text-[14px] [&>li]:h-[48px] [&>li]:flex [&>li]:items-center [&>li]:justify-center [&>li]:px-[8px] [&>li]:py-[4px] [&>li]:cursor-pointer divide-y divide-c8">
            <li className="text-c6 font-bold">Báo cáo</li>
            <li className="text-c6 font-bold">Bỏ theo dõi</li>
            <li className="">Thêm vào mục yêu thích</li>
            <li className="">Đi tới bài viết</li>
            <li className="">Chia sẻ lên...</li>
            <li className="">Sao chép liên kết</li>
            <li className="">Nhúng</li>
            <li className="">Giới thiệu về tài khoản này</li>
            <li className="" onClick={() =>setCheck((pre) => !pre)}>Hủy</li>
        </ul>
    </div>
    </div>
  )
}
