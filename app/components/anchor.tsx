import Link from "next/link";

interface AnchorProps {
  classNames?: string;
  link: string;
  text: string;
  variant: "light" | "dark-green" | "light-green" | "yellow";
}

const Anchor = ({ classNames, link, text, variant }: AnchorProps) => {
  return (
    <Link
      href={link}
      className={`${
        variant === "light"
          ? "bg-brand-light-100 text-brand-dark-300"
          : variant === "dark-green"
          ? "bg-brand-green-dark text-white"
          : variant === "yellow"
          ? "bg-brand-yellow-200 text-brand-lightGreen-100"
          : "bg-brand-green-light text-brand-green-darker"
      } ${classNames} rounded-full p-5 gap-[15px] text-xl leading-6 max-w-fit inline-flex items-center group whitespace-nowrap`}
    >
      {text}
      <span className="material-symbols-outlined group-hover:translate-x-1 transition-all text-3xl leading-6">
        chevron_right
      </span>
    </Link>
  );
};

export default Anchor;
