import Head from "next/head";
import pfp from "./assets/pfp.png";
import Image from "next/image";
import Link from "next/link";
export default function Socials(){
    return(
        <>
        <Head>
            <title>
            Moon Make Games
            </title>
            <link rel="icon" href="./assets/icon.png" sizes="any" />
        </Head>

        <div className="p-6 h-lvh bg-gradient-to-r from-violet-500 to-fuchsia-500 ">

            <div className="flex flex-row justify-around">
                <div >
                    <Link href="https://x.com/">
                        <Image src={pfp} width={250} height={250} alt="Charlotte's pfp" className="rounded-full"/>
                    </Link>
                </div>
                <div className="border-solid border-2 pr-24 pl-6 w-96 rounded-lg drop-shadow-[1px_1px_6px_rgba(255,255,255,1)] bg-gradient-to-r from-fuchsia-700 to-violet-700">
                    <div className="flex flex-col text-white" >
                        <a>Twitter</a>
                        <Link href="https://github.com/gateaulune">Github</Link>
                        <a>Discord</a>
                    </div>
                </div>

            </div>

        </div>
        </> 
    )
}