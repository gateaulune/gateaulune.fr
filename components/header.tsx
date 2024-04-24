import Link from "next/link";
import Image from "next/image"
export default function Headerweb() {
  return (
    <ul className="max-sm:flex-col flex flex-row justify-between  ">
      <li className=" flex inline flex-row text-lg  max-sm:mb-4">
        <Link href="/">gateaulune.fr</Link>
      </li>
      <div className="max-sm:space-x-4 flex inline flex-row text-xl space-x-10">
        <Link href="/">Home</Link>
        <Link href="/">Articles</Link>
        <Link href="socials"> Socials</Link>
        <Link href="https://github.com/gateaulune">Projects</Link>
      </div>
    </ul>
  );
}