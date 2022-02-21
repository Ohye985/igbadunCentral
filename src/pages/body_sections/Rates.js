import React from "react";
import pres_img from "../../assets/images/President.jpeg";
import exec_img from "../../assets/images/Executive.jpeg";
import del_img from "../../assets/images/Deluxe.jpeg";

const Rates = () => {
    return (
        <>
            <div id="bg-img-rate" className="min-h-[60vh] flex flex-col justify-center content-center items-center text-white">
                <div class="inset-0 h-full w-full bg-gradient-to-br from-black/75" ></div>
                <h1 className="font-extrabold text-4xl md:text-5xl tracking-tight m-4">Rates</h1>
            </div>
            <div className="text-blue px-4 md:px-20 py-6 text-md font-semibold">
                <a href="/" className="after:content-['>'] after:ml-2 after:text-blue">Home</a>
                <a href="/rates" className="ml-2">Rates</a>
            </div>
            <div className="p-4 mt-4 md:p-20">
                <div>
                    <div className="mt-2 flex flex-col-reverse lg:grid lg:grid-cols-3 lg:gap-8">
                        <div className="lg:flex lg:flex-col">
                            <h1 className="font-semibold text-3xl capitalize tracking-tight">Presidential suite</h1>
                            <p className="capitalize font-semibold my-4">From ＃50,000/night</p>
                            <p className="text-justify mb-8 md:leading-7">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, excepturi cum omnis autem laboriosam voluptatum illum perspiciatis quis hic nisi ab, iusto a, aliquid odio quia voluptatibus soluta reprehenderit impedit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quod officiis odio perspiciatis recusandae harum necessitatibus cum? Repudiandae obcaecati magni soluta eius, vel at dolorum, ullam totam facilis placeat ipsum!
                            </p>
                            <button className="p-4 bg-blue self-center text-sm text-white font-medium uppercase">
                                <a href="#">Book now</a>
                            </button>
                        </div>

                        <img src={pres_img} alt="about" className="lg:col-span-2" />
                    </div>
                </div>
            </div>
            <div className="p-4 mt-4 md:p-20">
                <div>
                    <div className="mt-2 flex flex-col lg:grid lg:grid-cols-3 lg:gap-8">
                        <img src={exec_img} alt="about" className="lg:col-span-2" />
                        <div className="lg:flex lg:flex-col">
                            <h1 className="font-semibold text-3xl self-end capitalize tracking-tight">Executive suite</h1>
                            <p className="capitalize font-semibold self-end my-4">From ＃30,000/night</p>
                            <p className="text-justify mb-8 md:leading-7">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, excepturi cum omnis autem laboriosam voluptatum illum perspiciatis quis hic nisi ab, iusto a, aliquid odio quia voluptatibus soluta reprehenderit impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis deleniti eos accusamus eum totam, animi magnam necessitatibus nam eveniet numquam omnis alias provident illo similique maxime dolores ipsam illum asperiores!
                            </p>
                            <button className="p-4 bg-blue self-center text-sm text-white font-medium uppercase">
                                <a href="#">Book now</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4 mt-4 md:p-20">
                <div>
                    <div className="mt-2 flex flex-col-reverse lg:grid lg:grid-cols-3 lg:gap-8">
                        <div className="lg:flex lg:flex-col">
                            <h1 className="font-semibold text-3xl capitalize tracking-tight">Deluxe suite</h1>
                            <p className="capitalize font-semibold my-4">From ＃20,000/night</p>
                            <p className="text-justify mb-8 md:leading-7">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, excepturi cum omnis autem laboriosam voluptatum illum perspiciatis quis hic nisi ab, iusto a, aliquid odio quia voluptatibus soluta reprehenderit impedit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum reiciendis, nemo cum cumque laudantium dolor sed odio suscipit quas. Voluptates ipsum nam, autem suscipit eveniet amet asperiores non dicta similique.
                            </p>
                            <button className="p-4 bg-blue self-center text-sm text-white font-medium uppercase">
                                <a href="#">Book now</a>
                            </button>
                        </div>
                        <img src={del_img} alt="about" height="600px" className="lg:col-span-2" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rates;