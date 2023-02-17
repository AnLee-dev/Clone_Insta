function Footer() {
  const abouts = [
    "Giới thiệu",
    "Trợ giúp",
    "Báo chí",
    "API",
    "Việc làm",
    "Quyền riêng tư",
    "Điều khoản",
    "Vị trí",
    "Ngôn ngữ",
  ];
  return (
    <div>
      <div className="flex flex-row flex-wrap text-[12px] mt-[35px]">
        {abouts.map((i, idx)  =>
          <span className="text-c7 font-normal after:mx-1 after:content-['.'] last:after:content-['']" key={idx}>{i}</span>
        )}
      </div>
      <div className="text-[12px] font-normal text-c7 mt-[30px] uppercase">
        © 2023 Instagram from Giô-suê
      </div>
    </div>
  );
}
export default Footer;
