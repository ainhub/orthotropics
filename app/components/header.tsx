import Link from "next/link";
import Logo from "./icons/logo";
import LogoText from "./icons/logo-text";
import Search from "./search";

const Header = () => {
  return (
    <header className="w-full py-8">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-3">
          <Logo classNames="w-12 h-12 fill-brand-lightGreen-100" />
          <LogoText classNames="fill-brand-lightGreen-100" />
        </Link>
        <p className="md:block hidden text-brand-lightGreen-100 font-semibold text-sm leading-22.4 font-source-serif">
          The International Association of Facial Growth Guidance
          (Orthotropics®)
        </p>
        <Search />
      </div>
    </header>
  );
};

export default Header;
