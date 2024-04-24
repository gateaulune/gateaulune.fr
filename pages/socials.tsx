import Head from "next/head";
import pfp from "./assets/pfp.png";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header"

export default function Socials(){
    
    return(
        <>

        <div className=" min-h-screen  bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
            <Head>
                <title>Moon Make Games</title>
                <link rel="icon" href="./assets/pfp2.png" sizes="any" className="rounded-full"/>
            </Head>
            <div className="p-6">
                <Header/>
            </div>

            <div className="flex flex-row justify-center mt-12 w-screen">
                <div className="flex flex-col w-11/12">
                    <div className="justify-center flex ">    
                        <div className="flex flex-col align-center  justify-center">
                            <Image src={pfp} width={250} height={250} alt="Charlotte's pfp" className="rounded-full "/>
                            <a className="text-2xl ">Charlotte "GateauLune" Rodrigues</a>
                        </div>
                    </div>
                    <div className="flex justify-center mt-12">
                        <div className="flex flex-col w-2/6" >
                            {/*<Link href="https://x.com/"> */}
                                <div className="w-full bg-indigo-50/75 px-2 h-12 drop-shadow-[10px_10px_3px_rgba(0,0,0,0.25)]">
                                    <div className="flex justify-center align-center flex-col text-center text-white bg-blue-600/75 h-12">
                                        <a>Twitter</a>
                                    </div>
                                </div>
                            {/*</Link>*/}
                                <div className="w-full bg-indigo-50/75 px-2 h-12 mt-4 drop-shadow-[10px_10px_3px_rgba(0,0,0,0.25)]">
                                    <div className="flex justify-center align-center flex-col text-center text-white bg-pink-600/75 h-12">
                                        <a>Github</a>
                                    </div>
                                </div>
                                <div className="w-full bg-indigo-50/75 px-2 h-12 mt-4 drop-shadow-[10px_10px_3px_rgba(0,0,0,0.25)]">
                                    <div className="flex justify-center align-center flex-col text-center text-black bg-zinc-300/75 h-12">
                                        <a>Discord</a>
                                    </div>
                                </div>
                                <div className="w-full bg-indigo-50/75 px-2 h-12 mt-4 drop-shadow-[10px_10px_3px_rgba(0,0,0,0.25)]">
                                    <div className="flex justify-center align-center flex-col text-center text-white bg-pink-600/75 h-12">
                                        <a>Twitch</a>
                                    </div>
                                </div>
                                <div className="w-full bg-indigo-50/75 px-2 h-12 mt-4 drop-shadow-[10px_10px_3px_rgba(0,0,0,0.25)]">
                                    <div className="flex justify-center align-center flex-col text-center text-white bg-blue-600/75 h-12">
                                        <a>Game Dev</a>
                                    </div>
                                </div>

                           {/* <Link href="https://github.com/gateaulune">Github</Link>*/}
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </> 
    )
}