import Link from "next/link";

interface NavbarProps {
  pathname: string;
}

const Navbar = ({ pathname }: NavbarProps) => {
  return (
    <nav className="w-full border-t-2 border-brand-lightGreen-100">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8 overflow-auto scrollbar-hide">
        <div className="flex items-center gap-3">
          {/*<Link
            href="/"
            className={`py-4 px-3 border-t-5 text-brand-lightGreen-100 hover:border-brand-green-dark ${
              pathname !== "/"
                ? "border-transparent"
                : "border-brand-green-dark"
            } text-base leading-19.2 font-normal whitespace-nowrap`}
          >
            Home
          </Link>
          <Link
            href="/discover"
            className={`py-4 px-3 border-t-5 text-brand-lightGreen-100 hover:border-brand-green-dark ${
              pathname !== "/discover"
                ? "border-transparent"
                : "border-brand-green-dark"
            } text-base leading-19.2 font-normal whitespace-nowrap`}
          >
            Discover
          </Link>
          <Link
            href="/education"
            className={`py-4 px-3 border-t-5 text-brand-lightGreen-100 hover:border-brand-green-dark ${
              pathname !== "/education"
                ? "border-transparent"
                : "border-brand-green-dark"
            } text-base leading-19.2 font-normal whitespace-nowrap`}
          >
            Education
          </Link>
          <Link
            href="/science"
            className={`py-4 px-3 border-t-5 text-brand-lightGreen-100 hover:border-brand-green-dark ${
              pathname !== "/science"
                ? "border-transparent"
                : "border-brand-green-dark"
            } text-base leading-19.2 font-normal whitespace-nowrap`}
          >
            Science
          </Link>
          <Link
            href="/about-us"
            className={`py-4 px-3 border-t-5 text-brand-lightGreen-100 hover:border-brand-green-dark ${
              pathname !== "/about-us"
                ? "border-transparent"
                : "border-brand-green-dark"
            } text-base leading-19.2 font-normal whitespace-nowrap`}
          >
            About the IAFGG
          </Link>
          <Link
            href="/events"
            className={`py-4 px-3 border-t-5 text-brand-lightGreen-100 hover:border-brand-green-dark ${
              pathname !== "/events"
                ? "border-transparent"
                : "border-brand-green-dark"
            } text-base leading-19.2 font-normal whitespace-nowrap`}
          >
            Events
          </Link>
          <Link
            href="/shop"
            className={`py-4 px-3 border-t-5 text-brand-lightGreen-100 hover:border-brand-green-dark ${
              pathname !== "/shop"
                ? "border-transparent"
                : "border-brand-green-dark"
            } text-base leading-19.2 font-normal whitespace-nowrap`}
          >
            Shop
          </Link>*/}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
