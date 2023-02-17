import moment from "moment";
import clsx from "clsx";

interface Iprops {
  time: string;
  className?: string;
}
export const PostTime = ({ time, className }: Iprops): JSX.Element => {
  return (
    <div className={clsx("text-[14px] text-c3", className)}>
      {moment(time, "YYYYMMDD").fromNow()}
    </div>
  );
};
