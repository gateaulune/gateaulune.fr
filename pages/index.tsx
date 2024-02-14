import Head from "next/head";
import pfp from "./assets/pfp.png";
import Image from "next/image";
import Header from "../components/header";
import Link from "next/link";
import Articles from "../components/articles"
export default function index(){
  return(
    <div className="p-6 h-lvh bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
      <Head>
        <title>
          Moon Make Games
        </title>
        <link rel="icon" href="./assets/az.png" sizes="any" className="rounded-full"/>
  
      </Head>
      <Header/>
      <div className="flex justify-around mt-52 ">
        <div  className="text-xl flex flex-col text-center justify-center">
          <a>Hello, im GateauLune !</a>
          <a>I'm a little Game developper</a>
          <a>I'm currently working with </a> 
          <Link href='http://clochettesgames.fr' className="font-bold underline">ClochettesGames</Link>
        </div>
        <Image
          src={pfp}
          width={250}
          height={250}
          alt="Charlotte's pfp"
          className="rounded-full"
        />
      </div>
      <div className="mt-24">
        <Articles/>
      </div>
    </div>
  )
}