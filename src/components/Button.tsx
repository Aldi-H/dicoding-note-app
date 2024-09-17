import { ReactNode } from "react";

import { cn } from "../lib/utils";

interface ButtonProps {
  icon: ReactNode;
  buttonName: string;
  className?: string;
  buttonAction?: () => void;
}

const Button = ({ icon, buttonName, className, buttonAction }: ButtonProps) => {
  return (
    <button
      onClick={buttonAction}
      className={cn(
        "flex gap-2 rounded-md p-2 text-sm font-semibold",
        className,
      )}
    >
      {icon}
      {buttonName}
    </button>
  );
};

export default Button;
