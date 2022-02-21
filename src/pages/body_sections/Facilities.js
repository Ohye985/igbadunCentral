import React from "react";
import rest_img from "../../assets/images/Restaurant.jpeg";
import conf_img from "../../assets/images/Event-center.jpeg";
import bar_img from "../../assets/images/Bar.jpeg";
import pool_img from "../../assets/images/pool.jpeg";

const Facilities = () => {
    return (
        <>
            <div id="bg-img-fac" className="min-h-[60vh] flex flex-col justify-center content-center items-center text-white">
                <div class="inset-0 h-full w-full bg-gradient-to-br from-black/75" ></div>
                <h1 className="font-extrabold text-4xl md:text-5xl tracking-tight m-4">Facilities</h1>
            </div>
            <div className="text-blue px-4 md:px-20 py-6 text-md font-semibold">
                <a href="/" className="after:content-['>'] after:ml-2 after:text-blue">Home</a>
                <a href="/facilities" className="ml-2">Facilities</a>
            </div>
            <div className="p-4 mt-4 md:p-20">
                <div>
                    <div className="mt-2 flex flex-col-reverse lg:grid lg:grid-cols-3 lg:gap-8">
                        <div className="lg:flex lg:flex-col">
                            <h1 className="font-semibold text-3xl capitalize tracking-tight">IGB Restaurant</h1>
                            <p className="capitalize font-semibold my-4">From ＃50,000/night</p>
                            <p className="text-justify mb-8 md:leading-7">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, excepturi cum omnis autem laboriosam voluptatum illum perspiciatis quis hic nisi ab, iusto a, aliquid odio quia voluptatibus soluta reprehenderit impedit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, ducimus. Neque nisi, cumque nostrum dolore perferendis aut.
                            </p>

                        </div>
                        <img src={rest_img} alt="about" className="lg:col-span-2" />
                    </div>
                </div>
            </div>
            <div className="p-4 mt-4 md:p-20">
                <div>
                    <div className="mt-2 flex flex-col lg:grid lg:grid-cols-3 lg:gap-8">
                        <img src={conf_img} alt="about" className="lg:col-span-2" />
                        <div className="lg:flex lg:flex-col">
                            <h1 className="font-semibold text-3xl self-end capitalize tracking-tight">Conference Center</h1>
                            <p className="capitalize font-semibold self-end my-4">From ＃300,000/night</p>
                            <p className="text-justify mb-8 md:leading-7">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, excepturi cum omnis autem laboriosam voluptatum illum perspiciatis quis hic nisi ab, iusto a, aliquid odio quia voluptatibus soluta reprehenderit impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae voluptatum soluta adipisci modi placeat alias!
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4 mt-4 md:p-20">
                <div>
                    <div className="mt-2 flex flex-col-reverse lg:grid lg:grid-cols-3 lg:gap-8">
                        <div className="lg:flex lg:flex-col">
                            <h1 className="font-semibold text-3xl capitalize tracking-tight">ATG Bar</h1>
                            <p className="capitalize font-semibold my-4">From ＃150,000/night</p>
                            <p className="text-justify mb-8 md:leading-7">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, excepturi cum omnis autem laboriosam voluptatum illum perspiciatis quis hic nisi ab, iusto a, aliquid odio quia voluptatibus soluta reprehenderit impedit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, ducimus. Neque nisi, cumque nostrum dolore perferendis aut.
                            </p>

                        </div>
                        <img src={bar_img} alt="about" className="lg:col-span-2" />
                    </div>
                </div>
            </div>
            <div className="p-4 mt-4 md:p-20">
                <div>
                    <div className="mt-2 flex flex-col lg:grid lg:grid-cols-3 lg:gap-8">
                        <img src={pool_img} alt="about" className="lg:col-span-2" />
                        <div className="lg:flex lg:flex-col">
                            <h1 className="font-semibold text-3xl self-end capitalize tracking-tight">Swimming pool</h1>
                            <p className="capitalize font-semibold self-end my-4">From ＃100,000/night</p>
                            <p className="text-justify mb-8 md:leading-7">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, excepturi cum omnis autem laboriosam voluptatum illum perspiciatis quis hic nisi ab, iusto a, aliquid odio quia voluptatibus soluta reprehenderit impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae voluptatum soluta adipisci modi placeat alias!
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Facilities;