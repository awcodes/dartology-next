import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useUser } from "../context/user";

function NavLink({ children, href }) {
  const router = useRouter();

  return (
    <Link href={href}>
      <a className={`${router.pathname == href ? "border-b border-white" : ""} reset-link hover:text-primary-500 text-secondary-500`}>{children}</a>
    </Link>
  );
}

export default function DesktopNavigation() {
  const { user } = useUser();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <nav className="flex items-center space-x-6" aria-label="primary">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/routines">Practice</NavLink>
      <NavLink href="/flipout">Flipout</NavLink>
      <NavLink href="/checkouts">Checkout Chart</NavLink>
      <NavLink href="/setups">Setups</NavLink>
      <NavLink href="/analyzer">Analyzer</NavLink>
      {user && isClient ? <NavLink href="/logout">Logout</NavLink> : <NavLink href="/login">Login</NavLink>}
    </nav>
  );
}
