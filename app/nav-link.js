"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export default function NavLink({ href, children }) {
  const segments = useSelectedLayoutSegments();
  const active = href === `/${segments[0] ?? ""}`;
  return (
    <Link className={active ? "underline" : ""} href={href}>
      {children}
    </Link>
  );
}
