import { Menu, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Link from "next/link";

export function CustomLink({ children, href }) {
  const router = useRouter();
  return (
    <Link href={href}>
      <a className={`${router.pathname == href ? "bg-primary-500 text-gray-900" : "bg-gray-700 text-white"} reset-link block py-2 text-center rounded hover:bg-primary-500 hover:text-gray-900 focus:bg-primary-500 focus:text-gray-900`}>{children}</a>
    </Link>
  );
}

export default function MobileNavigation() {
  const menuItems = [
    { slug: "home", label: "Home", url: "/" },
    { slug: "practice", label: "Practice", url: "/routines" },
    { slug: "flipout", label: "Flipout", url: "/flipout" },
    { slug: "checkouts", label: "Checkouts", url: "/checkouts" },
    { slug: "setups", label: "Setups", url: "/setups" },
    { slug: "analyzer", label: "Analyzer", url: "/analyzer" },
  ];
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button className="block leading-none text-secondary-500 hover:text-secondary-600 focus:text-secondary-600">
            <MenuIcon className="w-8 h-8" />
            <span className="sr-only">Menu</span>
          </Menu.Button>
          <Transition show={open} enter="transition ease-out duration-200" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
            <Menu.Items static className="absolute right-0 w-48 p-2 mt-2 space-y-1 origin-top-right bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
              {menuItems.map((item) => (
                <Menu.Item key={item.url}>
                  <CustomLink href={item.url}>{item.label}</CustomLink>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
