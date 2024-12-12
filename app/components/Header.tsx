import Link from "next/link";
import { PCMenu } from "./Menu/PCMenu";
import { PhoneMenu } from "./Menu/PhoneMenu";
import { LogoSVG } from "./Svg";

function Header() {
  return (
    <header className="w-full relative">
    
      <div className="flex justify-between items-center  w-full">
        <div className="p-[10px]">
          <Link
            href="/"
            className="flex items-center font-bold p-[10px] text-[20px]"
          >
            <LogoSVG />
            PDF.ai
          </Link>
        </div>

        <PCMenu />
        <PhoneMenu />
      </div>

    </header>
  );
}

export default Header;
