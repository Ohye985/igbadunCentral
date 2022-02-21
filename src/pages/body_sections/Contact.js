import React from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '80%',
    height: '400px',
    margin: "5% auto 0 auto"
};

const center = {
    lat: 6.4141,
    lng: 4.0887
};

const Contact = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAApqSDJyy74D5msT3lHcPuzQxxwbQXV98"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, []);

    return (
        <>
            <div id="bg-img-contact" className="min-h-[60vh] flex flex-col justify-center content-center items-center text-white">
                <div className="inset-0 h-full w-full bg-gradient-to-br from-black/75" ></div>
                <h1 className="font-extrabold text-4xl md:text-5xl tracking-tight m-4 capitalize">Contact us</h1>
            </div>
            <div className="text-blue px-4 md:px-20 py-6 text-md font-semibold">
                <a href="/" className="after:content-['>'] after:ml-2 after:text-blue">Home</a>
                <a href="/contact" className="ml-2">Contact us</a>
            </div>
            <div>
                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                        onLoad={onLoad}
                    >

                        <></>
                    </GoogleMap>
                ) : <></>}
            </div>
            <div className="p-4 md:p-20 flex flex-col md:flex-row md:justify-between">
                <div className="p-4">
                    <ul>
                        <li className="text-lg font-semibold uppercase">Contact</li>
                        <li><p>Lekki, Nigeria</p></li>
                        <li>08168827399 08168827399</li>
                        <li>info@igbaduncentral.com</li>
                    </ul>
                </div>
                <div className="p-4">
                    <ul>
                        <li className="text-lg font-semibold uppercase">Get in touch</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
            <div className="p-4 md:p-20 text-center">
                <h1 className="font-semibold text-xl md:text-3xl">Let's hear from you</h1>

                <form action="#" className="min-h-[100vh] flex flex-col justify-evenly mx-auto items-center py-4">
                    <input type="text" name="name" id="name" placeholder="*Name" className="bg-gray p-3 rounded-md all" />
                    <input type="email" name="mail" id="email" placeholder="*Email" className="bg-gray p-3 rounded-md all" />
                    <input type="text" name="subject" id="subject" placeholder="*Subject" className="bg-gray p-3 rounded-md all" />
                    <textarea name="text" id="text" cols="30" rows="5" placeholder="*Your Message..." className="bg-gray p-3  rounded-md outline-none all"></textarea>
                    <button className="p-4 w-32 bg-blue uppercase font-semibold rounded-md text-white">
                        <a href="#" className="text-sm">
                            Submit
                        </a>
                    </button>
                </form>
            </div>
        </>
    )
}

export default Contact;