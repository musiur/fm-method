import I18N___Switch from "@/lib/i18n/i18n___switch";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div>Navbar</div>
        <ul>
          <li>Menu</li>
        </ul>
              <div>
              <I18N___Switch />
          <Button>Login</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
