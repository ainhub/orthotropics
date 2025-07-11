interface IconProps {
  classNames?: string;
}
const PoundIcon = ({ classNames }: IconProps) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames}
    >
      <path
        d="M15.5 8.16666C15 7.05556 14 6.5 13 6.5C11.3431 6.5 10 7.99238 10 9.83333V12.5M10 12.5V14.2778C10 16.5 8 16.5 8 16.5H16M10 12.5H8M10 12.5H14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        stroke="#1D4953"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default PoundIcon;
