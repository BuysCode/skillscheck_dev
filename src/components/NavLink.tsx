import Link, { LinkProps } from 'next/link'
import { forwardRef } from "react";

interface NavLinkCompatProps extends Omit<LinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, href, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };