import Head from "next/head";
import pfp from "./assets/pfp.png";
import Image from "next/image";
import Header from "../components/header";
import Link from "next/link";
import Articles from "../components/articles"
export default function index(){
  return(
    <div className="p-6 h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
      <Head>
        <title>Moon Make Games</title>
        <link rel="icon" href="./assets/pfp2.png" sizes="any" className="rounded-full"/>
  
      </Head>
      <Header/>
      <div className="flex justify-around mt-52 ">
        <div  className="text-xl flex flex-col justify-center w-4/12">
          <a className="text-2xl font-bold w-full">Charlotte "GateauLune" Rodrigues</a>
            <div className=" text-justify mt-4">  
              <a>Hello, im GateauLune ! I'm a Junior Web Developper working with NextJs. On this website you'll find some project i made. I'm currently working on a video game with </a>
              <Link href='http://clochettesgames.fr' className="font-bold underline">ClochettesGames</Link> 
              <a> !</a>
            </div>
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
      <div className="mb-96"></div>
    </div>
  )
}