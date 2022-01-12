import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

export default function Nav() {
  return (
    <div className="relative z-40 flex items-center">
      <div className="block lg:hidden">
        <MobileNavigation />
      </div>
      <div className="hidden lg:flex">
        <DesktopNavigation />
      </div>
    </div>
  );
}
