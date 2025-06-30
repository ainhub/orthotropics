import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

const DescriptionCard = ({ title, description, link }: CardProps) => {
  return (
    <div className="bg-brand-light-400 rounded-2xl p-8 flex flex-col gap-4">
      <Link href={link} className="flex items-center gap-4 group">
        <span className="shrink-0 w-10 h-10 rounded-full bg-brand-green-dark rounded-full inline-flex items-center justify-center material-symbols-outlined text-brand-light-400">
          <span className="group-hover:translate-x-0.5 transition-all">
            arrow_forward
          </span>
        </span>
        <h3 className="font-semibold text-2xl leading-[26.4px] text-brand-lightGreen-100">
          {title}
        </h3>
      </Link>
      <p className="text-xl text-brand-lightGreen-100 leading-[30px]">
        {description}
      </p>
    </div>
  );
};

export default DescriptionCard;
