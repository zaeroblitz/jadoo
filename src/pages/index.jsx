import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { Header, Testimonial } from "components";
import HeroDecor from "images/decor-hero-1.svg";
import HeroTextDecor from "images/text-decor-hero.svg";
import PlayIcon from "images/ic_play.svg";
import PlusStyleDecor from "images/decor-plus-style-1.svg";
import DecorDestination from "images/decor-destination.svg";
import LocationIcon from "images/ic_location.svg";
import DestinationIcon from "images/ic_destination.svg";
import PaymentIcon from "images/ic_payment.svg";
import TaxiIcon from "images/ic_taxi.svg";
import LeafIcon from "images/ic_leaf.svg";
import MapIcon from "images/ic_map.svg";
import SendIcon from "images/ic_send.svg";
import BuildingIcon from "images/ic_building.svg";
import HeartIcon from "images/ic_heart.svg";
import DecorSubsribe1 from "images/decor-subscibe-1.svg";
import DecorSubsribe2 from "images/decor-subscibe-2.svg";
import EmailIcon from "images/ic_email.svg";
import SubscribeSendIcon from "images/ic_send-subscribe.svg";
import FacebookIcon from "images/ic_facebook.svg";
import TwitterIcon from "images/ic_twitter.svg";
import InstagramIcon from "images/ic_instragram.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jadoo</title>
        <meta name="description" content="Jado App Travel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute z-10 w-full py-12">
        <Header />
      </div>

      {/* Hero */}
      <section className="relative mb-28">
        <div className="w-96 h-96 bg-accent-3/70 rounded-full blur-3xl absolute -left-80 -top-10"></div>
        <span className="w-5/12 h-screen absolute top-0 bottom-0 right-0">
          <HeroDecor className="fill-accent-4" />
        </span>

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex">
            <div className="w-6/12 pt-52">
              <h1 className="text-accent-2 font-bold text-xl transform uppercase leading-8 mb-6">
                BEST DESTINATIONS AROUND THE WORLD
              </h1>
              <h2 className="text-gray-800 font-serif text-[84px] leading-[90px] tracking-tighter mb-8">
                Travel,{" "}
                <span className="relative">
                  enjoy
                  <span className="absolute -left-4 bottom-5 -z-10">
                    <HeroTextDecor className="w-[385px] h-3 fill-accent-2" />
                  </span>
                </span>{" "}
                and live a new and full life
              </h2>
              <p className="text-gray-500 max-w-lg leading-8 mb-8">
                Built Wicket longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening. Park gate sell
                they west hard for the.
              </p>

              <div className="flex items-center">
                <Link href="">
                  <button
                    type="button"
                    className="bg-accent-1 text-white rounded-xl shadow-accent-1/10 shadow-[0_20px_35px] px-6 py-4 mr-11"
                  >
                    Find out more
                  </button>
                </Link>

                <button type="button" className="flex items-center">
                  <span className="mr-6 bg-accent-2 text-white inline-flex items-center justify-center p-4 rounded-full shadow-accent-2/20 shadow-xl">
                    <PlayIcon />
                  </span>

                  <span className="text-gray-500">Play Demo</span>
                </button>
              </div>
            </div>

            <div className="w-6/12 pt-24 relative">
              <div className="absolute w-[137px] h-[95px] top-44 left-24 z-30">
                <Image
                  src="/images/plane.png"
                  alt="Plane Decor"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="relative w-[765px] h-[764px] z-20 transform -translate-x-44">
                <Image
                  src="/images/hero-traveller.png"
                  alt="Traveller"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              <div className="absolute w-[137px] h-[95px] top-56 right-14 z-10">
                <Image
                  src="/images/plane.png"
                  alt="Plane Decor"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category */}
      <section className="mb-32">
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Decor */}
          <div className="absolute w-36 h-36 -top-10 right-10">
            <PlusStyleDecor />
          </div>

          {/* Heading */}
          <div className="flex flex-col text-center mb-16">
            <h3 className="font-semibold text-lg text-gray-600 uppercase leading-7 mb-[10px]">
              Category
            </h3>
            <h2 className="font-serif text-5xl text-gray-800 leading-snug">
              We Offer Best Services
            </h2>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-4 gap-x-[72px]">
            {/* Calculated Weather */}
            <div className="relative flex flex-col justify-center items-center text-center transition-all duration-300 bg-white rounded-[36px] hover:shadow-great group cursor-pointer">
              {/* Illust */}
              <div className="relative mb-6 inline-flex h-28">
                <div className="z-10 absolute w-[60px] h-[60px] transform -translate-x-1/2 translate-y-1/2 -left-3">
                  <Image
                    src="/images/illust_weather.png"
                    alt="Calculated Weather"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="absolute bottom-0 left-5 transform -translate-x-1/2 bg-accent-4 rounded-tl-lg rounded-tr-md rounded-bl-md rounded-br-2xl w-12 h-12"></div>
              </div>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Calculated Weather
              </h4>

              <h5 className="font-medium text-gray-500 px-12 mb-8">
                Built Wicket longer admire do barton vanity itself do in it.
              </h5>

              {/* Hover Decoration */}
              <div
                className="absolute left-12 bottom-12 -translate-x-1/2 translate-y-1/2 opacity-0 -z-10
               group-hover:left-6 group-hover:bottom-6 group-hover:opacity-100
               transition-all duration-300 bg-accent-2 rounded-tl-3xl rounded-br-lg w-28 h-28"
              ></div>
            </div>

            {/* Best Flights */}
            <div className="relative flex flex-col justify-center items-center text-center transition-all duration-300 bg-white rounded-[36px] hover:shadow-great group cursor-pointer">
              {/* Illust */}
              <div className="relative mb-6 inline-flex h-28">
                <div className="z-10 absolute w-[146px] h-[133px] transform -translate-x-1/2">
                  <Image
                    src="/images/plane.png"
                    alt="Best Flights"
                    width={146}
                    height={133}
                  />
                </div>

                <div className="absolute bottom-8 -right-9 transform -translate-x-1/2 bg-accent-4 rounded-tl-md rounded-tr-md rounded-bl-2xl rounded-br-lg w-12 h-12"></div>
              </div>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Best Flights
              </h4>

              <h5 className="font-medium text-gray-500 px-12 mb-8">
                Engrossed listening. Park gate sell they west hard for the.
              </h5>

              {/* Hover Decoration */}
              <div
                className="absolute left-12 bottom-12 -translate-x-1/2 translate-y-1/2 opacity-0 -z-10
               group-hover:left-6 group-hover:bottom-6 group-hover:opacity-100
               transition-all duration-300 bg-accent-2 rounded-tl-3xl rounded-br-lg w-28 h-28"
              ></div>
            </div>

            {/* Local Events */}
            <div className="relative flex flex-col justify-center items-center text-center transition-all duration-300 bg-white rounded-[36px] hover:shadow-great group cursor-pointer">
              {/* Illust */}
              <div className="relative mb-6 inline-flex h-28">
                <div className="z-10 absolute w-[40px] h-[69px] transform -translate-x-1/2 translate-y-1/2 -right-8 top-2">
                  <Image
                    src="/images/illust_event.png"
                    alt="Local Events"
                    width={40}
                    height={69}
                    className="object-contain"
                  />
                </div>

                <div className="absolute bottom-0 left-5 transform -translate-x-1/2 bg-accent-4 rounded-tl-md rounded-tr-2xl rounded-bl-lg rounded-br-md w-12 h-12"></div>
              </div>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Local Events
              </h4>

              <h5 className="font-medium text-gray-500 px-12 mb-8">
                Barton vanity itself do in it. Preferd to men it engrossed
                listening.
              </h5>

              {/* Hover Decoration */}
              <div
                className="absolute left-12 bottom-12 -translate-x-1/2 translate-y-1/2 opacity-0 -z-10
               group-hover:left-6 group-hover:bottom-6 group-hover:opacity-100
               transition-all duration-300 bg-accent-2 rounded-tl-3xl rounded-br-lg w-28 h-28"
              ></div>
            </div>

            {/* Customization */}
            <div className="relative flex flex-col justify-center items-center text-center transition-all duration-300 bg-white rounded-[36px] hover:shadow-great group cursor-pointer">
              {/* Illust */}
              <div className="relative mb-6 inline-flex h-28">
                <div className="z-10 absolute w-[50px] h-[50px] transform -translate-x-1/2 translate-y-1/2 top-5 -right-10">
                  <Image
                    src="/images/illust_customization.png"
                    alt="Customization"
                    width={50}
                    height={50}
                  />
                </div>

                <div className="absolute bottom-0 left-5 transform -translate-x-1/2 bg-accent-4 rounded-tl-md rounded-tr-lg rounded-bl-2xl rounded-br-md w-12 h-12"></div>
              </div>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Customization
              </h4>

              <h5 className="font-medium text-gray-500 px-12 mb-8">
                We deliver outsourced aviation services for military customers
              </h5>

              {/* Hover Decoration */}
              <div
                className="absolute left-12 bottom-12 -translate-x-1/2 translate-y-1/2 opacity-0 -z-10
               group-hover:left-6 group-hover:bottom-6 group-hover:opacity-100
               transition-all duration-300 bg-accent-2 rounded-tl-3xl rounded-br-lg w-28 h-28"
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Selling */}
      <section className="mb-40">
        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Heading */}
          <div className="flex flex-col text-center mb-16">
            <h3 className="font-semibold text-lg text-gray-600 uppercase leading-7 mb-[10px]">
              Top Selling
            </h3>
            <h2 className="font-serif text-5xl text-gray-800 leading-snug">
              Top Destinations
            </h2>
          </div>

          <div className="flex relative pr-10 gap-x-[60px]">
            {/* Content 1 */}
            <div className="w-4/12 relative z-20 shadow-great">
              {/* Background */}
              <div className="relative rounded-3xl overflow-hidden w-full min-h-[458px] max-h-full ">
                <Image
                  src="/images/rome.jpg"
                  alt="Rome"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Details */}
              <div className="w-full absolute bottom-0 bg-white px-5 pt-6 pb-10 rounded-b-3xl">
                <div className="flex justify-between items-center mb-5">
                  <h6 className="font-medium text-lg text-gray-700">
                    Rome, Italy
                  </h6>
                  <h6 className="font-medium text-lg text-gray-700">$5,42 K</h6>
                </div>
                <div className="flex items-center gap-x-3">
                  <LocationIcon className="w-5 h-5" />
                  <h6 className="font-medium text-gray-700">10 Days Trip</h6>
                </div>
              </div>
            </div>

            {/* Content 2 */}
            <div className="w-4/12 relative z-20 shadow-great">
              {/* Background */}
              <div className="relative rounded-3xl overflow-hidden w-full h-full min-h-[458px] max-h-full ">
                <Image
                  src="/images/london.jpg"
                  alt="London"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Details */}
              <div className="w-full absolute bottom-0 bg-white px-5 pt-6 pb-10 rounded-b-3xl">
                <div className="flex justify-between items-center mb-5">
                  <h6 className="font-medium text-lg text-gray-700">
                    London, United Kingdom
                  </h6>
                  <h6 className="font-medium text-lg text-gray-700">$4,2 K</h6>
                </div>
                <div className="flex items-center gap-x-3">
                  <LocationIcon className="w-5 h-5" />
                  <h6 className="font-medium text-gray-700">12 Days Trip</h6>
                </div>
              </div>
            </div>

            {/* Content 3 */}
            <div className="w-4/12 relative z-20 shadow-great">
              {/* Background */}
              <div className="relative rounded-3xl overflow-hidden w-full h-full min-h-[458px] max-h-full ">
                <Image
                  src="/images/europe.jpg"
                  alt="Europe"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Details */}
              <div className="w-full absolute bottom-0 bg-white px-5 pt-6 pb-10 rounded-b-3xl">
                <div className="flex justify-between items-center mb-5">
                  <h6 className="font-medium text-lg text-gray-700">
                    Full Europe
                  </h6>
                  <h6 className="font-medium text-lg text-gray-700">$15 K</h6>
                </div>
                <div className="flex items-center gap-x-3">
                  <LocationIcon className="w-5 h-5" />
                  <h6 className="font-medium text-gray-700">28 Days Trip</h6>
                </div>
              </div>
            </div>

            {/* Decoration */}
            <div className="absolute w-[96px] h-[252px] bottom-10 right-0">
              <DecorDestination className="stroke-gray-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Book a Trip */}
      <section className="mb-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex">
            <div className="w-6/12 pl-8 pr-20">
              <h3 className="font-semibold text-lg text-gray-600 leading-7 mb-[10px]">
                Easy and Fast
              </h3>
              <h2 className="font-serif text-5xl text-gray-800 leading-snug mb-8">
                Book your next trip in 3 easy steps
              </h2>

              <ul className="flex flex-col gap-y-12">
                <li className="flex items-center">
                  <span className="bg-accent-1 rounded-xl flex flex-none text-white items-center justify-center w-12 h-12">
                    <DestinationIcon />
                  </span>

                  <div className="w-8/12 flex flex-col ml-4 leading-5">
                    <h6 className="font-bold mb-1 text-gray-500">
                      Choose Destination
                    </h6>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Urna, tortor tempus.
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="bg-accent-2 rounded-xl flex flex-none text-white items-center justify-center w-12 h-12">
                    <PaymentIcon />
                  </span>

                  <div className="w-8/12 flex flex-col ml-4 leading-5">
                    <h6 className="font-bold mb-1 text-gray-500">
                      Make Payment
                    </h6>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Urna, tortor tempus.
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="bg-[#006380] rounded-xl flex flex-none text-white items-center justify-center w-12 h-12">
                    <TaxiIcon />
                  </span>

                  <div className="w-8/12 flex flex-col ml-4 leading-5">
                    <h6 className="font-bold mb-1 text-gray-500">
                      Reach Airport on Selected Date
                    </h6>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Urna, tortor tempus.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="w-6/12 pl-20 pr-10">
              <div className="relative w-fit bg-white shadow-great rounded-3xl px-6 pt-5 pb-8">
                {/* Image */}
                <div className="relative w-80 h-40 rounded-3xl mb-6">
                  <Image
                    src="/images/greece.jpg"
                    alt="Greece"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <span className="font-medium text-lg text-gray-800 mb-3">
                    Trip to Greece
                  </span>

                  <h6 className="font-medium text-gray-500 mb-5">
                    14-29 June
                    <span className="ml-1 mr-3">|</span>
                    by Robbin joseph
                  </h6>

                  <div className="flex items-center gap-x-4 mb-[30px]">
                    <div className="bg-gray-200 text-gray-600 p-3 rounded-full">
                      <LeafIcon className="w-[14px] h-[14px]" />
                    </div>

                    <div className="bg-gray-200 text-gray-600 p-3 rounded-full">
                      <MapIcon className="w-[14px] h-[14px]" />
                    </div>

                    <div className="bg-gray-200 text-gray-600 p-3 rounded-full">
                      <SendIcon className="w-[14px] h-[14px]" />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <BuildingIcon className="w-4 h-4 mr-4" />
                    <p className="font-medium text-gray-500">24 people going</p>
                    <HeartIcon className="w-5 h-5 ml-auto" />
                  </div>
                </div>

                {/* Blur */}
                <div className="absolute top-0 -translate-y-1/4 right-0 translate-x-1/4 w-[354px] h-[367px] bg-violet-400/30 rounded-full blur-3xl -z-10"></div>

                {/* Ongoing */}
                <div className="absolute bottom-14 -right-28 shadow-great bg-white pt-4 px-5 pb-6 rounded-2xl">
                  <div className="flex">
                    <div className="relative w-[50px] h-[50px] rounded-full mr-3">
                      <Image
                        src="/images/rome-1.png"
                        alt="Rome"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>

                    <div className="flex flex-col">
                      <h6 className="font-medium text-gray-500 text-sm mb-[6px]">
                        Ongoing
                      </h6>
                      <h6 className="font-medium text-gray-700 text-lg mb-[14px]">
                        Trip to Rome
                      </h6>
                      <h6 className="font-medium text-gray-700 mb-[10px]">
                        <span className="text-violet-500">40%</span> completed
                      </h6>

                      <div className="w-[156px] h-[5px] rounded-full bg-gray-200 relative">
                        <div className="absolute bg-violet-500 w-[73px] h-[5px] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

      <section className="mb-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex relative z-50">
            <div className="w-1/5 px-4">
              <div className="w-full h-8 px-8 py-5 relative grayscale hover:grayscale-0 bg-white transform hover:scale-105 hover:shadow-great rounded-2xl transition-all duration-300">
                <Image
                  src="/images/logo_axon.png"
                  alt="Axon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="w-1/5 px-4">
              <div className="w-full h-8 px-8 py-5 relative grayscale hover:grayscale-0 bg-white transform hover:scale-105 hover:shadow-great rounded-2xl transition-all duration-300">
                <Image
                  src="/images/logo_jetstar.png"
                  alt="Jetstar"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="w-1/5 px-4">
              <div className="w-full h-8 px-8 py-5 relative grayscale hover:grayscale-0 bg-white transform hover:scale-105 hover:shadow-great rounded-2xl transition-all duration-300">
                <Image
                  src="/images/logo_expedia.png"
                  alt="Expedia"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="w-1/5 px-4">
              <div className="w-full h-8 px-8 py-5 relative grayscale hover:grayscale-0 bg-white transform hover:scale-105 hover:shadow-great rounded-2xl transition-all duration-300">
                <Image
                  src="/images/logo_qantas.png"
                  alt="Qantas"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="w-1/5 px-4">
              <div className="w-full h-8 px-8 py-5 relative grayscale hover:grayscale-0 bg-white transform hover:scale-105 hover:shadow-great rounded-2xl transition-all duration-300">
                <Image
                  src="/images/logo_alitalia.png"
                  alt="Alitalia"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-32">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="absolute w-36 h-36 -right-8 -bottom-20 -z-10 transform rotate-90 translate-y-2">
            <PlusStyleDecor />
          </div>

          <div className="w-full relative bg-white">
            <div className="absolute z-30 top-0 right-0 -translate-y-1/2 translate-x-1/2 w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center">
              <div className="mb-2 ml-1">
                <SubscribeSendIcon className="w-full h-auto" />
              </div>
            </div>
            <div className="bg-accent-3/20 rounded-tl-[120px] overflow-hidden rounded-3xl relative z-20 pt-20 pb-20 mb-20">
              <div className="absolute -top-6 -right-0">
                <DecorSubsribe2 />
              </div>

              <div className="absolute -bottom-14 -left-24">
                <DecorSubsribe1 />
              </div>

              <div className="text-gray-500 font-bold text-3xl px-36 text-center leading-normal mb-10">
                Subscribe to get information, latest news and other interesting
                offers about Cobham
              </div>

              <form className="flex items-center justify-center">
                <label htmlFor="email" className="relative">
                  <span className="text-gray-500 absolute top-1/2 -translate-y-1/2 left-4 flex items-center">
                    <EmailIcon className="h-full w-6" />
                  </span>
                  <input
                    type="text"
                    name="email"
                    placeholder="Your Email Address"
                    className="appearance-none rounded-lg py-4 pl-14 bg-white w-96 focus:outline-none transition duration-300 border-20 border-transparent focus:border-accent-6 mr-10"
                  />
                </label>

                <button className="rounded-lg text-white bg-gradient-to-b from-accent-2/90 to-accent-2 py-4 px-16">
                  Subsribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 relative overflow-hidden">
        <div className="w-60 h-60 rounded-full blur-3xl absolute z-10 -bottom-10 -right-10 bg-gray-500/20"></div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex mb-12">
            <div className="w-3/12 px-4">
              <h6 className="text-5xl tracking-tight text-gray-900 mb-4">
                Jadoo.
              </h6>
              <p className="text-sm text-gray-500 pr-8">
                Book your trip in minute, get full Control for much longer.
              </p>
            </div>

            <div className="w-2/12 px-4">
              <h6 className="text-xl font-bold tracking-tight text-gray-900 mb-7 mt-2">
                Company
              </h6>
              <ul className="text-lg text-gray-500 flex flex-col gap-y-2">
                <li>
                  <Link href="/about">About</Link>
                </li>

                <li>
                  <Link href="/about">Careers</Link>
                </li>

                <li>
                  <Link href="/about">Mobile</Link>
                </li>
              </ul>
            </div>

            <div className="w-2/12 px-4">
              <h6 className="text-xl font-bold tracking-tight text-gray-900 mb-7 mt-2">
                Contact
              </h6>
              <ul className="text-lg text-gray-500 flex flex-col gap-y-2">
                <li>
                  <Link href="/about">Help/FAQ</Link>
                </li>

                <li>
                  <Link href="/about">Press</Link>
                </li>

                <li>
                  <Link href="/about">Affilates</Link>
                </li>
              </ul>
            </div>

            <div className="w-2/12 px-4">
              <h6 className="text-xl font-bold tracking-tight text-gray-900 mb-7 mt-2">
                More
              </h6>
              <ul className="text-lg text-gray-500 flex flex-col gap-y-2">
                <li>
                  <Link href="/about">Airlefees</Link>
                </li>

                <li>
                  <Link href="/about">Airline</Link>
                </li>

                <li>
                  <Link href="/about">Low fare tips</Link>
                </li>
              </ul>
            </div>

            <div className="w-3/12 px-4 flex flex-col justify-center">
              <ul className="text-lg text-gray-500 flex gap-x-5">
                <li>
                  <a
                    href=""
                    className="w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex justify-center items-center rounded-full"
                    target="_blank"
                    rel="norefferer noopener"
                  >
                    <span className="group-hover:opacity-100 opacity-0 z-10 transform  rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gradient-social absolute inset-0"></span>
                    <span className="relative z-20">
                      <FacebookIcon className="fill-black group-hover:fill-white transition-colors duration-300" />
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex justify-center items-center rounded-full"
                    target="_blank"
                    rel="norefferer noopener"
                  >
                    <span className="group-hover:opacity-100 opacity-0 z-10 transform  rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gradient-social absolute inset-0"></span>
                    <span className="relative z-20">
                      <InstagramIcon className="fill-black group-hover:fill-white transition-colors duration-300" />
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex justify-center items-center rounded-full"
                    target="_blank"
                    rel="norefferer noopener"
                  >
                    <span className="group-hover:opacity-100 opacity-0 z-10 transform  rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gradient-social absolute inset-0"></span>
                    <span className="relative z-20">
                      <TwitterIcon className="fill-black group-hover:fill-white transition-colors duration-300" />
                    </span>
                  </a>
                </li>
              </ul>

              <h6 className="text-xl tracking-wide text-gray-500 mt-7 mb-3">
                Discover our app
              </h6>

              <div className="flex items-center">
                <div className="relative w-28 h-9 mr-1">
                  <a
                    href=""
                    className="relative w-full h-full flex overflow-hidden"
                  >
                    <Image
                      src="/images/btn_google_play.png"
                      alt="Play Store"
                      fill
                      className="object-contain"
                    />
                  </a>
                </div>

                <div className="relative w-28 h-9">
                  <a
                    href=""
                    className="relative w-full h-full flex overflow-hidden"
                  >
                    <Image
                      src="/images/btn_apple_store.png"
                      alt="Apple Store"
                      fill
                      className="object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <footer className="text-gray-500 text-center text-sm font-medium">
            All rights reserved@jadoo.co
          </footer>
        </div>
      </section>
    </>
  );
}
