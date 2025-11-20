import * as React from "react";
import Link, { LinkProps } from "next/link";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./button";

const ButtonLink = ({
  href,
  variant,
  size,
  className,
  children,

  disabled,
  ...props
}: LinkProps & {
  disabled?: boolean;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  children: React.ReactNode;
}) => {
  // Internal links use Next.js Link
  return (
    <Button asChild>
      <Link
        href={href}
        className={cn(
          buttonVariants({ variant, size, className }),
          disabled ? "cursor-not-allowed opacity-50" : ""
        )}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
          }
        }}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </Link>
    </Button>
  );
};

ButtonLink.displayName = "ButtonLink";

export { ButtonLink };
