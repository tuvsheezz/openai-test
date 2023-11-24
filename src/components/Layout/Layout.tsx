import { isMobile } from "react-device-detect";
import MobileLayout from "./MobileLayout/MobileLayout";
import PcLayout from "./PcLayout/PcLayout";

interface Props {
  window?: () => Window;
}

export default function Layout(props: Props) {
  if (isMobile) return <MobileLayout />;
  return <PcLayout {...props} />;
}
