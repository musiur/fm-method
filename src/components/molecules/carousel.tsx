"use client";

import { ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const getBreakpoint = (maxSlidesPerView: number) => {
    const breakpoints = {
        1: {
            320: { slidesPerView: 1, spaceBetween: 5 },
        },
        2: {
            320: { slidesPerView: 1, spaceBetween: 5 },
            768: { slidesPerView: 2, spaceBetween: 5 },
        },
        3: {
            320: { slidesPerView: 1, spaceBetween: 5 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30}
        },
        4: {
            320: { slidesPerView: 1, spaceBetween: 5 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 10 },
            1280: { slidesPerView: 4, spaceBetween: 20 },
        },
    }
    return breakpoints[maxSlidesPerView as keyof typeof breakpoints]
};

interface CarouselProps {
    list: ReactElement[];
    title: string;
    col?: 1 | 2 | 3 | 4;
    darkbg?: boolean;
}

const Carousel = ({ list, title, col = 4, darkbg = false }: CarouselProps) => {
    const slidesPerView = getBreakpoint(col);
    
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
                nextEl: `.next-${title}`,
                prevEl: `.prev-${title}`,
            }}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            spaceBetween={20}
            pagination={{
                clickable: true,
                bulletClass: clsx('swiper-pagination-bullet', {
                    '!bg-gray-200': darkbg,
                    '!bg-primary': !darkbg
                }),
                bulletActiveClass: clsx('swiper-pagination-bullet-active !w-6 !rounded-[6px]', {
                    '!bg-white': darkbg,
                    '!bg-primary': !darkbg,
                }),
            }}
            breakpoints={slidesPerView}
            id={`swiper-${title}-carousel`}
            className="relative"
        >
            {list.map((item, index) => (
                <SwiperSlide key={index} className="pb-10 grid grid-cols-1">{item}</SwiperSlide>
            ))}
            <CarouselController className={`prev-${title}`} left={true} />
            <CarouselController className={`next-${title}`} left={false} />
        </Swiper>
    );
};

interface CarouselControllerProps {
    className?: string;
    left?: boolean;
}

const CarouselController = ({ className, left = true }: CarouselControllerProps) => {
    return (
        <div className={clsx(
            "absolute top-0 w-[60px] h-full z-10 flex items-center justify-center",
            {
                "left-0": left,
                "right-0": !left,
            },
            className
        )}>
            <div className="w-8 h-8 md:w-12 md:h-12 bg-white/80 rounded-full flex items-center justify-center backdrop-blur-xl text-primary cursor-pointer">
                {left ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
            </div>
        </div>
    );
};

export default Carousel;
