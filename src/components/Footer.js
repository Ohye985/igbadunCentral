import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import foot from '../data/foot.json';

const Footer = () => {
    return (
        <>
            <div className="pt-16 ">
                <div className="flex flex-col md:flex-row justify-center content-center items-center my-8">
                    <h3 className="font-semibold">Subscribe to our Newsletter</h3>
                    <input type="email" name="email" id="mail" placeholder="*Email" className="bg-gray w-72 md:w-96 p-3 mx-4 my-4 md:my-0 rounded-md" />
                    <button className="p-3 bg-blue uppercase font-semibold rounded-md text-white">
                        <a href="#" className="text-sm">Subscribe</a>
                    </button>
                </div>
                <div className="bg-blue p-12 lg:py-16 lg:px-44 flex flex-col md:flex-row justify-between text-white">
                    <div className="text-md md:text-2xl font-semibold">
                        <text>Igbadun <br /> <span className="ml-1">Central</span></text>
                    </div>

                    {Object.values(foot).map(values => {
                        const { title, subtitle, content, subcontent, sub } = values;
                        return (
                            <div className="mt-8 md:mt-0">
                                <ul>
                                    <h1 className="mb-2 uppercase font-semibold">{title}</h1>
                                    <li><a href="#">{subtitle}</a></li>
                                    <li><p>{sub}</p></li>
                                    <li className="my-2"><a href="#">{content}</a></li>
                                    <li><a href="#">{subcontent}</a></li>
                                </ul>
                            </div>
                        )
                    })}

                </div>
                <div className="bg-blue text-white text-center capitalize font-semibold">
                    <span>2022 <span className="inline-block pt-4"><FaRegCopyright /></span>  Igbadun central all rights reserved</span>
                </div>
            </div>
        </>
    )
}

export default Footer;