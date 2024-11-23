import I18N___Switch from "@/lib/i18n/i18n___switch";
import { Button } from "../../ui/button";
import ASSETS___BrandLogo from "@/lib/assets/assets___brandlogo/assets___brandlogo";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/90">
      <nav className="container py-2 flex items-center justify-between">
      <ASSETS___BrandLogo className="w-20"/>
        <ul>
          <li>Home</li>
        </ul>
        <div className="flex items-center gap-2">
              <I18N___Switch />
          <Button>Login</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
