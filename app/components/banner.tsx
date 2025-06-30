import Anchor from "./anchor";
import LogoLarge from "./icons/logo-large";

interface BannerProps {
  anchorTitle: string;
  anchorUrl: string;
  anchorVariant: "light" | "dark-green" | "light-green" | "yellow";
  backgroundColor: string;
  hasLogo: boolean;
  title: string;
  variant: "light" | "dark" | "darker";
}
const Banner = ({
  anchorTitle,
  anchorUrl,
  anchorVariant,
  backgroundColor,
  hasLogo,
  title,
  variant,
}: BannerProps) => {
  return (
    <section className={`py-24 bg-${backgroundColor}`}>
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden">
          {hasLogo && (
            <LogoLarge
              classNames={`absolute inset-0 ${
                variant === "light"
                  ? "fill-brand-lightGreen-10"
                  : "fill-brand-dark-450"
              }`}
            />
          )}
          <div
            className={`w-full flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-8 rounded-2xl overflow-hidden px-20 py-[72px] ${
              variant === "dark"
                ? "bg-brand-dark-500"
                : variant === "darker"
                ? "bg-brand-lightGreen-200"
                : "bg-brand-lightGreen-50"
            }`}
          >
            <h4
              className={`${
                variant === "light"
                  ? "text-brand-lightGreen-100"
                  : "text-brand-light-400"
              } z-[1] font-semibold text-4.5xl leading-48 xl:max-w-[660px] lg:max-w-md lg:text-left text-center`}
            >
              {title}
            </h4>
            <Anchor
              classNames="z-[1]"
              link={anchorUrl}
              text={anchorTitle}
              variant={anchorVariant}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
