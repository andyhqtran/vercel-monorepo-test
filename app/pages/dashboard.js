import Link from "next/link";
import React from "react";

export default function DashboardPage() {
  return (
    <>
      Dashboard page
      <Link href="/" passHref>
        <a>Go home</a>
      </Link>
    </>
  );
}
