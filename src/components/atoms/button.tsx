import { classNames } from "../../utils";
import { Icon, type IconType } from "./Icon";

type ButtonInternalLinkProps = {
  variant: "green";
  to: string;
  text: string;
  icon?: IconType;
};

export const ButtonInternalLink = ({
  variant,
  to,
  text,
  icon,
}: ButtonInternalLinkProps) => (
  <a
    href={to}
    className={classNames(
      "group relative flex items-stretch justify-center rounded-lg bg-gradient-to-r from-green-500 to-green-600 py-4 px-8 font-bold text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
    )}
  >
    <div className="relative z-10 flex items-center justify-center gap-3">
      <span>{text}</span>
      {icon && <Icon icon={icon} className="h-5" />}
    </div>
    <div className="absolute inset-0 rounded-[8px] bg-black opacity-0 shadow-lg shadow-green-500/25 transition duration-300 group-hover:opacity-10"></div>
  </a>
);

type ButtonExternalLinkProps = {
  variant: "green" | "blue" | "instagram";
  href: string;
  text: string;
  icon: IconType;
};

export const ButtonExternalLink = ({
  variant,
  href,
  text,
  icon,
}: ButtonExternalLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer external"
    className={classNames(
      "group relative flex items-stretch rounded-[8px] px-[30px] py-[15px] font-bold shadow  focus:outline-none  focus:ring-2 focus:ring-offset-2 sm:px-[60px]",
      variant === "green"
        ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-green-500/25 focus:ring-green-500"
        : "",
      variant === "blue"
        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-blue-500/25 focus:ring-blue-500"
        : "",
      variant === "instagram"
        ? "bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white shadow-purple-500/25 focus:ring-purple-500"
        : "",
    )}
  >
    <div className="relative z-10 flex items-center justify-center gap-3">
      <Icon icon={icon} className="h-5" />
      <span>{text}</span>
    </div>
    <div className="absolute inset-0 rounded-[8px] bg-black opacity-0 shadow-lg transition duration-300 group-hover:opacity-10"></div>
  </a>
);
