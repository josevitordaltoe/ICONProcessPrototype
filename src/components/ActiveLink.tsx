import Link, { LinkProps } from "../../node_modules/next/link";
import { cloneElement, ReactElement } from "react";
import { useRouter } from "../../node_modules/next/router";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  matchExactHref?: boolean;
}

export default function ActiveLink({
  children,
  matchExactHref,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  let isActive = false;
  let exactPath = false;

  if (matchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }
  if (
    !matchExactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }
  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "red.500" : "gray.50",
      })}
    </Link>
  );
}
