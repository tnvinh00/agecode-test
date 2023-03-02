import { LinkType } from '@/types/link.type'
import React, { useRef, useState } from 'react'
import CustomLink from '@/components/cards/CustomLink'
import { Grid } from 'swiper';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import "swiper/css";
import "swiper/css/grid";
import Image from 'next/image';

const LinksBlock = ({ links }: { links: LinkType[] }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <div>
      <div className="flex justify-between w-full items-center my-4">
        <span className='text-xl font-bold text-gray-900'>
          リンク
        </span>
        {links.length > 2 && <Image
          src='/images/chevron_right.svg'
          width={20}
          height={20}
          alt=""
          onClick={() => swiperRef && swiperRef.current?.swiper.slideNext()}
          className='h-7 w-7 cursor-pointer'
        />}
      </div>

      {links.length <= 2 ? (
        links.map((link) => (
          <CustomLink key={link.id} item={link} />
        ))
      ) : (
        <Swiper
          ref={swiperRef}
          spaceBetween={0}
          slidesPerView={1}
          grid={{
            rows: 2,
            fill: "row",
          }}
          onSlideChange={(swiper) => {
            setActiveSlide(swiper.activeIndex);
          }}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          modules={[Grid]}
          className='mt-6 mySlider'
        >
          {links.map((link) => (
            <SwiperSlide
              className=''
              key={link.id}
            >
              <CustomLink key={link.id} item={link} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  )
}

export default LinksBlock