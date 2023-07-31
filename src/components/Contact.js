//Bu sayfa 2 tane beyaz ekran olacak bir tarafında fotoğraf bir tarafın da sosyal medya hesapları olacak.

import React from "react";
import  { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function About() {
    return (
        <div className=" mx-auto bg-white w-[680px] h-[480px] section" id="about">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <h3 className="bg-slate-400">Sosyal Medya Hesapları </h3>
                    <div className="w-full lg:w-1/2"></div>
                </div>
            </div>
        </div>
    )
}
export default About;