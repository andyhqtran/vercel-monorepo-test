import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      Home page
      <Link href="/dashboard" passHref>
        <a>Go to dashboard</a>
      </Link>
    </>
  );
}
