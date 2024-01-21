import { ButtonHTMLAttributes, Children, DetailedHTMLProps, forwardRef } from "react";
import cn from "../utils/cn";

type TVariant = "solid" | "outline" | "ghost" | "default";
type TButtonOptions = {
  variant?: TVariant;
};
type TRef = HTMLButtonElement;
type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOptions;

const Button = forwardRef<TRef, TButton>(
  ({ className, variant="solid", ...rest }, ref) => {
    const buttonVariant = getVariant(variant);

    return (
      <button
        {...rest}
        ref={ref}
        className={cn(buttonVariant, className)}
      >
     
      </button>
    );
  }
);

const getVariant = (variant: TVariant) => {
  switch (variant) {
    case "outline":
      return "btn-outline";
    case "solid":
      return "btn-solid";
    case "ghost":
      return "btn-ghost";
    case "default":
      return "btn-default";
    default:
      // Handle the case where the variant is not recognized
      console.warn(`Unknown variant: ${variant}`);
      return "btn-default"; // Return a default class or handle it as needed
  }
};

export default Button;
