import Image from "next/image";
import React, { useState, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCreative,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ArrowUp from "images/ic_arrow-up.svg";
import ArrowDown from "images/ic_arrow-down.svg";

const items = [
  {
    id: "1",
    desc: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    image: "user-1.jpg",
    author: "Mike Taylor",
    role: "Lahore, Pakistan",
  },
  {
    id: "2",
    desc: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    image: "user-2.jpg",
    author: "Chris Thomas",
    role: "CEO of Red Button",
  },
  {
    id: "3",
    desc: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    image: "user-3.jpg",
    author: "Zaero Blitz",
    role: "Depok, Indonesia",
  },
];

const Testimonial = () => {
  const [realSlide, setRealSlide] = useState(0);
  const swiper = useRef(null);

  const fnPrev = useCallback(() => {
    if (realSlide > 0) swiper?.current?.slidePrev();
  }, [swiper, realSlide]);

  const fnNext = useCallback(() => {
    if (realSlide < items.length) swiper?.current?.slideNext();
  }, [swiper, realSlide]);

  return (
    <section className="mb-48">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex">
          <div className="w-6/12 pl-8 pr-20">
            <h3 className="font-semibold text-lg text-gray-600 leading-7 mb-[10px]">
              Testimonials
            </h3>
            <h3 className="font-serif text-5xl text-gray-800 leading-snug mb-8">
              What people say about Us.
            </h3>

            <ul className="flex gap-x-6">
              {items.map((item, i) => (
                <li
                  key={item.id}
                  className={[
                    "w-2 h-2 rounded-full",
                    i === realSlide ? "bg-gray-800" : "bg-gray-300",
                  ].join(" ")}
                  onClick={() => i !== realSlide && swiper?.current?.slideTo(i)}
                ></li>
              ))}
            </ul>
          </div>

          <div className="w-6/12 flex items-center justify-center relative">
            <div className="absolute -inset-10 -top-20">
              <Swiper
                modules={[
                  Navigation,
                  Pagination,
                  Scrollbar,
                  A11y,
                  Autoplay,
                  EffectCreative,
                ]}
                spaceBetween={50}
                slidesPerView={1}
                effect="creative"
                creativeEffect={{
                  prev: {
                    translate: [60, 70, 0],
                  },
                  next: {
                    translate: ["-100%", "-100%", 0],
                  },
                }}
                simulateTouch={false}
                onSlideChange={(s) => setRealSlide(s.realIndex)}
                onSwiper={(s) => {
                  swiper.current = s;
                }}
              >
                {items.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="relative px-32 pt-20 pb-48">
                      <div className="relative">
                        <div className="bg-white shadow-great rounded-xl p-6 relative z-20">
                          <span className="w-12 h-12 absolute top-0 left-0 overflow-hidden transform -translate-x-1/2 -translate-y-1/2 rounded-full flex-none mr-3">
                            <Image
                              src={`/images/${item.image}`}
                              alt={item.author}
                              fill
                              className="object-cover"
                            />
                          </span>

                          <p className="text-gray-500 mb-8">{item.desc}</p>

                          <h6 className="text-gray-900 text-lg">
                            {item.author}
                          </h6>
                          <h6 className="text-gray-500 text-sm">{item.role}</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="1/12 items-center justify-center flex z-30">
            <div className="flex flex-col gap-y-6">
              <button
                type="button"
                onClick={fnPrev}
                className={[
                  "cursor-pointer w-14 h-14 rounded-lg text-sm",

                  realSlide === 0
                    ? "bg-slate-300 text-slate-800"
                    : "bg-slate-800 text-white",
                ].join(" ")}
              >
                Up
              </button>

              <button
                onClick={fnNext}
                className={[
                  "cursor-pointer w-14 h-14 text-white rounded-lg text-sm",

                  realSlide === items.length - 1
                    ? "bg-slate-300 text-slate-800"
                    : "bg-slate-800 text-white",
                ].join(" ")}
              >
                Down
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
