import React from 'react';
import Article1 from './articles/article1';
import Link from 'next/link';
export default function ArticlesPage() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col ">
                <div className="flex flex-col pb-1.5 w-11/12 pt-2.5 px-6 bg-white rounded-tl-[25px] rounded-br-[25px] drop-shadow-[10px_10px_3px_rgba(0,0,0,0.25)] mb-14">
                    <Link href="../components/articles/article1" target="_blank" rel="noopener noreferrer" className="">
                        <div className="flex mb-2">Soon</div>
                        <div>Descriptions Lorem ipsum - Currently working on</div>
                        <div className="flex justify-end">
                            <div>GateauLune</div>
                        </div>
                    </Link>
                </div>

                <div className="flex flex-col pb-1.5 w-11/12 pt-2.5 px-5 bg-white rounded-tr-[25px] rounded-bl-[25px] drop-shadow-[10px_10px_3px_rgba(0,0,0,0.25)]">
                    <div className="flex mb-2">Soon</div>
                    <div>Descriptions Lorem ipsum - Currently working on</div>
                    <div className="flex justify-end">
                        <a>GateauLune</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
