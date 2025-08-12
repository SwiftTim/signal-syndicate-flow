import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <nav className="container flex h-14 items-center justify-between px-4">
        <Link to="/" className="font-semibold tracking-tight">
          CopyTrade Syndicate
        </Link>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <NavLink to="/dashboard" className={({isActive}) => isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}>Dashboard</NavLink>
          <NavLink to="/broker-link" className={({isActive}) => isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}>Broker Link</NavLink>
          <NavLink to="/pricing" className={({isActive}) => isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}>Pricing</NavLink>
          <NavLink to="/admin" className={({isActive}) => isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}>Admin</NavLink>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/settings">
            <Button variant="outline" size="sm">Settings</Button>
          </Link>
          <Link to="/pricing">
            <Button variant="hero" size="sm">Get Started</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
