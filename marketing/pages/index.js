import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      Home page
      <Link href="/" passHref>
        <a>Go to dashboard</a>
      </Link>
    </>
  );
}
