import Link from "next/link";
import React from "react";

export default function StepThreePage() {
  return (
    <>
      Dashboard page
      <Link href="/" passHref>
        <a>Go home</a>
      </Link>
      <Link href="/step/1" passHref>
        <a>Go step 1</a>
      </Link>
      <Link href="/step/2" passHref>
        <a>Go step 2</a>
      </Link>
      <Link href="/step/3" passHref>
        <a>Go step 3</a>
      </Link>
    </>
  );
}
