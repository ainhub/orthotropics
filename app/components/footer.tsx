import Link from "next/link";
import Logo from "./icons/logo";
import Facebook from "./icons/brands/facebook";
import Twitter from "./icons/brands/twitter";
import YouTube from "./icons/brands/youtube";
import LinkedIn from "./icons/brands/linkedin";
import Reddit from "./icons/brands/reddit";

const Footer = () => {
  return (
    <footer className="pt-8 pb-16 bg-brand-lightGreen-100 flex flex-col gap-8">
      <div className="mx-auto flex lg:flex-row flex-col w-full max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-6 md:flex-row flex-col"
        >
          <Logo classNames="w-12 h-12 fill-brand-light-100" />
          <p className="font-source-serif font-semibold text-sm leading-16.8 font-semibold text-white md:max-w-[263px] md:text-left text-center">
            The International Association of Facial Growth Guidance
            (Orthotropics®)
          </p>
        </Link>
        {/*<nav className="flex lg:flex-row flex-col items-center gap-1 font-source-serif">
          <Link
            href="/discover"
            className="py-4 px-3 font-semibold text-xl leading-6 text-white"
          >
            Discover
          </Link>
          <Link
            href="/education"
            className="py-4 px-3 font-semibold text-xl leading-6 text-white"
          >
            Education
          </Link>
          <Link
            href="/science"
            className="py-4 px-3 font-semibold text-xl leading-6 text-white"
          >
            Science
          </Link>
          <Link
            href="/about-us"
            className="py-4 px-3 font-semibold text-xl leading-6 text-white"
          >
            About the IAFGG
          </Link>
          <Link
            href="/shop"
            className="py-4 px-3 font-semibold text-xl leading-6 text-white"
          >
            Shop
          </Link>
        </nav>*/}
      </div>
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/*<div className="flex flex-wrap items-center lg:justify-end justify-center gap-2">
          <a
            href="http://www.facebook.com/Orthotropics"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-lg p-3 bg-brand-dark-500"
          >
            <Facebook classNames="w-6 fill-white" />
          </a>
          <a
            href="https://twitter.com/Orthotropics"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-lg p-3 bg-brand-dark-500"
          >
            <Twitter classNames="w-6 fill-white" />
          </a>
          <a
            href="http://www.youtube.com/Orthotropics"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-lg p-3 bg-brand-dark-500"
          >
            <YouTube classNames="w-6 fill-white" />
          </a>
          <a
            href="http://www.linkedin.com/in/orthotropics"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-lg p-3 bg-brand-dark-500"
          >
            <LinkedIn classNames="w-6 fill-white" />
          </a>
          <a
            href="http://www.reddit.com/user/Orthotropics"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-lg p-3 bg-brand-dark-500"
          >
            <Reddit classNames="w-6 fill-white" />
          </a>
        </div>*/}
        <div className="w-full flex lg:flex-row flex-col items-center justify-between gap-3">
          {/*<nav className="flex lg:flex-row flex-col items-center gap-3">
            <Link
              href="#"
              className="py-4 px-3 text-base leading-19.2 text-white"
            >
              Contact us
            </Link>
            <Link
              href="#"
              className="py-4 px-3 text-base leading-19.2 text-white"
            >
              Privacy notice
            </Link>
            <Link
              href="#"
              className="py-4 px-3 text-base leading-19.2 text-white"
            >
              Cookies
            </Link>
            <Link
              href="#"
              className="py-4 px-3 text-base leading-19.2 text-white"
            >
              Disclaimer
            </Link>
          </nav>*/}
          {/*<p className="text-right text-base leading-19.2 text-white" style={{ textAlign: 'right' }}>
            &copy; Orthotropics 1999 – {new Date().getFullYear()}
          </p>*/}
        </div>
        <p className="text-right text-base leading-19.2 text-white">
            &copy; Orthotropics 1999 – {new Date().getFullYear()}
          </p>
      </div>
    </footer>
  );
};

export default Footer;
