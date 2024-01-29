import Link from "next/link";
import Image from "next/image"


export default function Headerweb() {
  return (
    <ul className="max-sm:flex-col flex flex-row justify-between  ">
      <li className=" flex inline flex-row text-lg  max-sm:mb-4">
        <a>gateaulune.fr </a>
      </li>
      <div className="max-sm:space-x-4 flex inline flex-row text-xl space-x-10">
        <a>Home</a>
        <a>Articles</a>
        <a>Socials</a>
        <a>Projects</a>
      </div>
    </ul>
  );
}