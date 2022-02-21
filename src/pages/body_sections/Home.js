import React from "react";
import about_img from "../../assets/images/About.jpeg";
import pool_fac from "../../assets/images/pool.jpeg";
import room_fac from "../../assets/images/Room.jpeg";
import sun_fac from "../../assets/images/sunlounger.jpeg";

const Home = () => {
    return (
        <>
            <div id="bg-img" className="min-h-[60vh] flex flex-col justify-center content-center items-center text-white">
                <div class="inset-0 h-full w-full bg-gradient-to-br from-black/75" ></div>
                <h3 className="font-semibold uppercase">Welcome to</h3>
                <h1 className="font-extrabold text-4xl md:text-5xl tracking-tight m-4">Igbadun Central</h1>
                <p className="tracking-tight">A place where you will enjoy yourself</p>
                <button className="p-2 mt-4 bg-blue rounded uppercase font-semibold text-sm">
                    <a href="#">Take a tour</a>
                </button>
            </div>
            <div className="p-4 mt-8 md:p-16">
                <div>
                    <h1 className="font-bold text-4xl">About us</h1>
                    <div className="mt-8 flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-8">
                        <p className="text-justify mt-4 lg:mt-0 md:leading-7">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil commodi doloribus odit voluptate saepe totam minima, incidunt provident ut aperiam quibusdam quia, quisquam atque eius laudantium aut, officiis iste quas. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam voluptates incidunt ratione! Labore reiciendis beatae esse ullam voluptatum nisi iusto, minus dolorum officia doloribus, itaque deleniti reprehenderit optio aperiam omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta expedita beatae architecto quos harum culpa illo? Molestiae dignissimos alias, molestias sequi distinctio debitis maxime nisi, quasi, unde ad magni consectetur! <br /> <a href="#" className="text-blue tracking-tight text-md after:content-['→'] after:ml-2">Read more</a>
                        </p>
                        <img src={about_img} alt="about" />
                    </div>
                </div>
            </div>
            <div>
                <div className="p-4 mt-8 md:p-16 text-center">
                    <h1 className="font-bold text-4xl">Facilities</h1>
                    <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-4 ">

                        <div>
                            <img src={room_fac} alt="room" height="30vh" />
                            <svg className="relative bottom-32 md:bottom-56 lg:bottom-40 mx-auto hover:bg-white hover:rounded-full" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 0C16.0444 0 12.1776 1.14385 8.8886 3.2869C5.59962 5.42995 3.03617 8.47594 1.52242 12.0397C0.00866566 15.6035 -0.387401 19.5249 0.384303 23.3082C1.15601 27.0915 3.06082 30.5666 5.85787 33.2942C8.65492 36.0218 12.2186 37.8793 16.0982 38.6318C19.9778 39.3844 23.9992 38.9981 27.6537 37.522C31.3082 36.0458 34.4318 33.546 36.6294 30.3387C38.827 27.1314 40 23.3607 40 19.5033C40 14.3307 37.8929 9.36996 34.1421 5.71238C30.3914 2.0548 25.3043 0 20 0V0ZM30.6857 20.7292L14.9714 29.0878C14.7543 29.21 14.5079 29.2744 14.2571 29.2744C14.0064 29.2744 13.76 29.21 13.5429 29.0878C13.328 28.9603 13.1515 28.7799 13.0311 28.5646C12.9107 28.3494 12.8507 28.107 12.8571 27.8618V11.1447C12.8572 10.903 12.9218 10.6654 13.0445 10.4553C13.1672 10.2453 13.3439 10.07 13.5571 9.94668C13.7743 9.82441 14.0207 9.76004 14.2714 9.76004C14.5222 9.76004 14.7685 9.82441 14.9857 9.94668L30.7 18.3052C30.9268 18.4246 31.1162 18.6016 31.2483 18.8174C31.3803 19.0332 31.45 19.2798 31.45 19.5312C31.45 19.7825 31.3803 20.0291 31.2483 20.2449C31.1162 20.4607 30.9268 20.6377 30.7 20.7571L30.6857 20.7292Z" fill="#3590F3" />
                            </svg>
                            <p className="relative bottom-20 font-bold text-white">Rooms</p>
                        </div>
                        <div>
                            <img src={pool_fac} alt="food" />
                            <svg className="relative bottom-32 md:bottom-56 lg:bottom-40 mx-auto hover:bg-white hover:rounded-full" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 0C16.0444 0 12.1776 1.14385 8.8886 3.2869C5.59962 5.42995 3.03617 8.47594 1.52242 12.0397C0.00866566 15.6035 -0.387401 19.5249 0.384303 23.3082C1.15601 27.0915 3.06082 30.5666 5.85787 33.2942C8.65492 36.0218 12.2186 37.8793 16.0982 38.6318C19.9778 39.3844 23.9992 38.9981 27.6537 37.522C31.3082 36.0458 34.4318 33.546 36.6294 30.3387C38.827 27.1314 40 23.3607 40 19.5033C40 14.3307 37.8929 9.36996 34.1421 5.71238C30.3914 2.0548 25.3043 0 20 0V0ZM30.6857 20.7292L14.9714 29.0878C14.7543 29.21 14.5079 29.2744 14.2571 29.2744C14.0064 29.2744 13.76 29.21 13.5429 29.0878C13.328 28.9603 13.1515 28.7799 13.0311 28.5646C12.9107 28.3494 12.8507 28.107 12.8571 27.8618V11.1447C12.8572 10.903 12.9218 10.6654 13.0445 10.4553C13.1672 10.2453 13.3439 10.07 13.5571 9.94668C13.7743 9.82441 14.0207 9.76004 14.2714 9.76004C14.5222 9.76004 14.7685 9.82441 14.9857 9.94668L30.7 18.3052C30.9268 18.4246 31.1162 18.6016 31.2483 18.8174C31.3803 19.0332 31.45 19.2798 31.45 19.5312C31.45 19.7825 31.3803 20.0291 31.2483 20.2449C31.1162 20.4607 30.9268 20.6377 30.7 20.7571L30.6857 20.7292Z" fill="#3590F3" />
                            </svg>
                            <p className="relative bottom-20 text-white font-bold">Pools</p>
                        </div>
                        <div>
                            <img src={sun_fac} alt="event" />
                            <svg className="relative bottom-32 lg:bottom-40 md:bottom-56 mx-auto hover:bg-white hover:rounded-full" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 0C16.0444 0 12.1776 1.14385 8.8886 3.2869C5.59962 5.42995 3.03617 8.47594 1.52242 12.0397C0.00866566 15.6035 -0.387401 19.5249 0.384303 23.3082C1.15601 27.0915 3.06082 30.5666 5.85787 33.2942C8.65492 36.0218 12.2186 37.8793 16.0982 38.6318C19.9778 39.3844 23.9992 38.9981 27.6537 37.522C31.3082 36.0458 34.4318 33.546 36.6294 30.3387C38.827 27.1314 40 23.3607 40 19.5033C40 14.3307 37.8929 9.36996 34.1421 5.71238C30.3914 2.0548 25.3043 0 20 0V0ZM30.6857 20.7292L14.9714 29.0878C14.7543 29.21 14.5079 29.2744 14.2571 29.2744C14.0064 29.2744 13.76 29.21 13.5429 29.0878C13.328 28.9603 13.1515 28.7799 13.0311 28.5646C12.9107 28.3494 12.8507 28.107 12.8571 27.8618V11.1447C12.8572 10.903 12.9218 10.6654 13.0445 10.4553C13.1672 10.2453 13.3439 10.07 13.5571 9.94668C13.7743 9.82441 14.0207 9.76004 14.2714 9.76004C14.5222 9.76004 14.7685 9.82441 14.9857 9.94668L30.7 18.3052C30.9268 18.4246 31.1162 18.6016 31.2483 18.8174C31.3803 19.0332 31.45 19.2798 31.45 19.5312C31.45 19.7825 31.3803 20.0291 31.2483 20.2449C31.1162 20.4607 30.9268 20.6377 30.7 20.7571L30.6857 20.7292Z" fill="#3590F3" />
                            </svg>
                            <p className="relative bottom-20 text-white font-bold">Sunlounger</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="p-4 mt-8 md:p-16 text-center">
                    <h1 className="font-bold text-4xl">Hear from our Customers</h1>
                    <div
                        id="carouselExampleCrossfade"
                        class="carousel slide carousel-fade relative mt-8"
                        data-bs-ride="carousel"
                    >
                        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCrossfade"
                                data-bs-slide-to="0"
                                class="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCrossfade"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCrossfade"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                        </div>
                        <div class="carousel-inner relative w-full overflow-hidden">
                            <div class="carousel-item active float-left w-full">
                                <p class="block w-[85vw] md:w-[80vw] text-center text-white m-auto bg-blue p-2 md:p-12 rounded">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquam amet non nihil quae enim, dolor nam minus ex quo labore! Dolor dignissimos voluptas libero, illum reiciendis quisquam est suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nemo culpa eos doloremque atque harum expedita nesciunt maxime, laborum nulla neque, architecto a ea ut corporis placeat reiciendis. Similique, quae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint unde quibusdam obcaecati repudiandae vero nihil? Velit corrupti, dolor, ad itaque, dolore possimus fuga pariatur amet at cupiditate labore quibusdam dolorem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi deserunt enim quis dolore explicabo consequuntur accusamus eveniet unde nam quas voluptas, ex reprehenderit, eligendi nulla voluptate quod distinctio. Voluptas, debitis!
                                </p>
                            </div>
                            <div class="carousel-item float-left w-full">
                                <p class="block w-[85vw] md:w-[80vw] text-center text-white m-auto bg-blue p-2 md:p-12 rounded">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquam amet non nihil quae enim, dolor nam minus ex quo labore! Dolor dignissimos voluptas libero, illum reiciendis quisquam est suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nemo culpa eos doloremque atque harum expedita nesciunt maxime, laborum nulla neque, architecto a ea ut corporis placeat reiciendis. Similique, quae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint unde quibusdam obcaecati repudiandae vero nihil? Velit corrupti, dolor, ad itaque, dolore possimus fuga pariatur amet at cupiditate labore quibusdam dolorem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi deserunt enim quis dolore explicabo consequuntur accusamus eveniet unde nam quas voluptas, ex reprehenderit, eligendi nulla voluptate quod distinctio. Voluptas, debitis!
                                </p>
                            </div>
                            <div class="carousel-item float-left w-full">
                                <p class="block w-[85vw] md:w-[80vw] text-center text-white m-auto bg-blue p-2 md:p-12 rounded">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquam amet non nihil quae enim, dolor nam minus ex quo labore! Dolor dignissimos voluptas libero, illum reiciendis quisquam est suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nemo culpa eos doloremque atque harum expedita nesciunt maxime, laborum nulla neque, architecto a ea ut corporis placeat reiciendis. Similique, quae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint unde quibusdam obcaecati repudiandae vero nihil? Velit corrupti, dolor, ad itaque, dolore possimus fuga pariatur amet at cupiditate labore quibusdam dolorem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi deserunt enim quis dolore explicabo consequuntur accusamus eveniet unde nam quas voluptas, ex reprehenderit, eligendi nulla voluptate quod distinctio. Voluptas, debitis!
                                </p>

                            </div>
                        </div>
                        <button
                            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                            type="button"
                            data-bs-target="#carouselExampleCrossfade"
                            data-bs-slide="prev"
                        >
                            <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                            type="button"
                            data-bs-target="#carouselExampleCrossfade"
                            data-bs-slide="next"
                        >
                            <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className="p-4 mt-8 md:p-16 text-center">
                    <h1 className="font-bold text-4xl">Latest from our Blog</h1>
                    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-3 ">
                        <div>
                            <img src={room_fac} alt="room" height="30vh" />
                            <p className="font-bold mt-2">Rooms</p>
                            <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque tempore fuga animi nesciunt culpa quisquam repudiandae fugiat nam soluta, earum adipisci debitis porro iste hic nobis voluptatibus ullam. Earum.</p>
                        </div>
                        <div>
                            <img src={pool_fac} alt="food" />
                            <p className="font-bold mt-2">Pools</p>
                            <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati in hic. Commodi cum eum hic adipisci aperiam, veritatis numquam suscipit sint minima, odio obcaecati, temporibus dignissimos iure quaerat possimus?</p>
                        </div>
                        <div>
                            <img src={sun_fac} alt="event" />
                            <p className="font-bold mt-2">Sunlounger</p>
                            <p className="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsum omnis illum! Dolore ullam quidem, repudiandae officiis nulla maxime consequuntur, consectetur provident magnam nostrum expedita inventore fuga, ea asperiores impedit.</p>
                        </div>
                        <div>
                            <img src={room_fac} alt="room" height="30vh" />
                            <p className="font-bold mt-2">Rooms</p>
                            <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid quia exercitationem aut voluptate magnam blanditiis ex non, delectus neque repellendus voluptatem fuga reprehenderit cupiditate, quidem nemo, dolore a iusto!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;