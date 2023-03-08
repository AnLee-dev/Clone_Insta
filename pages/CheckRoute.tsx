import { SectionEnum } from "@/constants/routes";
import { useAppDispatch } from "@/store/hooks";
import { setSectionSelect } from "@/store/slice/nav";
import { useRouter } from "next/router";
import { useEffect } from "react";

function CheckRoute(): JSX.Element {
  const router = useRouter();
  const dispatch = useAppDispatch();
  let section = router.asPath?.split('/')?.[1];

  useEffect(() => {
    switch (section) {
      case "":
        dispatch(setSectionSelect(SectionEnum.HOME));
        break;
      case "SEARCH":
        dispatch(setSectionSelect(SectionEnum.SEARCH));
        break;
      case "explore":
        dispatch(setSectionSelect(SectionEnum.EXPLORE));
        break;
      case "reels":
        dispatch(setSectionSelect(SectionEnum.REELS));
        break;
      case "MESSENGER":
        dispatch(setSectionSelect(SectionEnum.MESSENGER));
        break;
      case "NOTIFICATION":
        dispatch(setSectionSelect(SectionEnum.NOTIFICATION));
        break;
      case "CREATE":
        dispatch(setSectionSelect(SectionEnum.CREATE));
        break;
      case "PROFILE":
        dispatch(setSectionSelect(SectionEnum.PROFILE));
        break;
      case "MORE":
        dispatch(setSectionSelect(SectionEnum.MORE));
        break;
    }
  }, [dispatch, section]);
  return <></>;
}

export default CheckRoute;
