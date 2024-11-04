import Link from "next/link";

const Navbar = () => {
  const links = [
    {
      href: "/",
      name: "home",
    },
    {
      href: "/about",
      name: "about",
    },
    {
      href: "/blog",
      name: "blog",
    },
    {
      href: "/contact",
      name: "contact",
    },
  ];

  return (
    <nav className="bg-black py-3 px-2 flex gap-2">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="text-white hover:underline uppercase font-semibold"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
