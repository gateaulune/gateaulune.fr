import Head from "next/head";
import pfp from "./assets/pfp.png";
import Image from "next/image";
export default function index(){
  return(
    <div className="p-6 h-dvh bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
      <Head>
        <title>
          Moon
        </title>
      </Head>
      <div className="flex align-center flex-row justify-center h-dvh">
        <div className="align-center justify-start text-center text-white text-4xl font-bold flex-col ">
        <Image  
            src={pfp}
            width={200}
            height={200}
            alt="Kurowne's pfp"
            />
          <a>Maintenance</a>
        </div> 
      </div>
    </div>
  )
}