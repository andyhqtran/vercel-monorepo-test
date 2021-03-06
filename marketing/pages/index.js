import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      Home page
      <Link href="/dashboard" passHref>
        <a>Go to dashboard</a>
      </Link>
      <Link href="/step/1" passHref>
        <a>Go to dashboard step 1</a>
      </Link>
      <Link href="/step/2" passHref>
        <a>Go to dashboard step 2</a>
      </Link>
      <Link href="/step/3" passHref>
        <a>Go to dashboard step 3</a>
      </Link>
    </>
  );
}
