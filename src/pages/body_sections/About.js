import React from "react";

const About = () => {
    return (
        <>
            <div id="bg-img-about" className="min-h-[60vh] flex flex-col justify-center content-center items-center text-white">
                <div className="inset-0 h-full w-full bg-gradient-to-br from-black/75" ></div>
                <h1 className="font-extrabold text-4xl md:text-5xl tracking-tight m-4 capitalize">About us</h1>
            </div>
            <div className="text-blue px-4 md:px-20 py-6 text-md font-semibold">
                <a href="/" className="after:content-['>'] after:ml-2 after:text-blue">Home</a>
                <a href="/about" className="ml-2">About us</a>
            </div>
            <div className="p-4 md:p-24 text-sm md:text-base">
                <p className="leading-7">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit non placeat tenetur distinctio, alias, iste ex ad odio odit dignissimos, qui blanditiis atque ipsum. Dolore impedit dolor blanditiis necessitatibus doloremque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci quo eos beatae, nam officia eaque illo consequuntur dicta. Inventore eveniet delectus odit ducimus aliquid quasi exercitationem? Minus, repellat sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi autem maxime aliquid? Alias similique voluptate impedit porro recusandae, reiciendis eveniet cupiditate, modi illum ad fugit provident suscipit aut. Voluptas, asperiores.
                </p>
                <p className="mt-8 leading-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dicta officia laudantium, iste a deleniti fuga animi quaerat provident amet minus sequi dolore nobis atque temporibus eligendi consequatur adipisci totam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique suscipit, explicabo dignissimos vero sint ipsum cupiditate cum, fuga itaque inventore placeat aperiam consequatur ipsa debitis deleniti. Ipsa quod velit eveniet! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt molestias, voluptates rerum omnis reiciendis assumenda dolore fugit iste pariatur? Ea libero obcaecati, temporibus veritatis a modi dolores. Illo, eos aspernatur?
                </p>
                <p className="my-8 leading-7">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit laudantium, praesentium dolores voluptate quia illum non quas distinctio provident eveniet dolorem nam maxime, placeat sapiente dignissimos corporis neque hic dolorum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam voluptates unde, itaque cumque veritatis architecto aliquam nobis reprehenderit, culpa beatae voluptatibus quas hic? Corrupti est porro quia distinctio. Aliquid, natus.
                </p>
                <p className="leading-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus veniam excepturi aliquam, asperiores, placeat quisquam maxime quia fuga aspernatur voluptates tempora. Mollitia, eius laboriosam minima harum assumenda numquam provident odit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis odit minima nam illo quos voluptate voluptatibus a necessitatibus omnis ex maiores explicabo obcaecati, est quis dolorum blanditiis amet enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam non, ut vitae aliquid blanditiis natus possimus ipsa voluptatum, reiciendis, nobis ullam perspiciatis commodi sunt? Officia animi soluta delectus tenetur quidem.
                </p>
            </div>
        </>
    )
}

export default About;