import Head from "next/head";
import pfp from "./assets/pfp.png";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header"

export default function Socials(){
    
    return(
        <>

        <div className=" h-lvh bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
            <Head>
                <title>Moon Make Games</title>
                <link rel="icon" href="./assets/pfp2.png" sizes="any" className="rounded-full"/>
            </Head>
            <Header/>

            <div className="flex flex-row justify-center mt-12 w-screen">
                <div className="flex flex-col w-11/12">
                    <div className="justify-center flex">    
                        <Image src={pfp} width={250} height={250} alt="Charlotte's pfp" className="rounded-full"/>
                    </div>
                    <div className="flex justify-center mt-12">
                        <div className="flex flex-col w-2/6" >
                            <Link href="https://x.com/"> 
                                <div className="w-full bg-violet-800 px-2 h-12">
                                    <div className="flex justify-center align-center flex-col text-center text-white bg-purple-500 h-12">
                                        <a>Twitter</a>
                                    </div>
                                </div>
                            </Link>

                            <Link href="https://github.com/gateaulune">Github</Link>
                            <a>Discord</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </> 
    )
}