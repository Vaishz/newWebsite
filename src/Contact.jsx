import React from 'react'
import Card from './components/Card';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Contact = () => {
  return (
    <>
      <Swiper
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Card title='Vaisish' url='https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?w=1380&t=st=1705942136~exp=1705942736~hmac=4a13c811009e74dfdcf4cb885f1ad44d8842f4fa80858492718732f43eb89ac8' info='lorlrlrlrlrl' /></SwiperSlide>
      <SwiperSlide><Card title='Shou' url='https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?w=1380&t=st=1705942136~exp=1705942736~hmac=4a13c811009e74dfdcf4cb885f1ad44d8842f4fa80858492718732f43eb89ac8' info='fdfddf' /></SwiperSlide>
      <SwiperSlide><Card title='Shine' url='https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?w=1380&t=st=1705942136~exp=1705942736~hmac=4a13c811009e74dfdcf4cb885f1ad44d8842f4fa80858492718732f43eb89ac8' info='frgjfvx' /></SwiperSlide>
      <SwiperSlide><Card title='Shone' url='https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?w=1380&t=st=1705942136~exp=1705942736~hmac=4a13c811009e74dfdcf4cb885f1ad44d8842f4fa80858492718732f43eb89ac8' info='kmjhnbv' /></SwiperSlide>
      <SwiperSlide><Card title='Nemek' url='https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?w=1380&t=st=1705942136~exp=1705942736~hmac=4a13c811009e74dfdcf4cb885f1ad44d8842f4fa80858492718732f43eb89ac8' info='mjh gbvcx' /></SwiperSlide>
      <SwiperSlide><Card title='turnpi' url='https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?w=1380&t=st=1705942136~exp=1705942736~hmac=4a13c811009e74dfdcf4cb885f1ad44d8842f4fa80858492718732f43eb89ac8' info='jh ngbvcx' /></SwiperSlide>
      <SwiperSlide><Card title='piper' url='https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?w=1380&t=st=1705942136~exp=1705942736~hmac=4a13c811009e74dfdcf4cb885f1ad44d8842f4fa80858492718732f43eb89ac8' info='imunbtrv' /></SwiperSlide>
      <SwiperSlide><Card title='smol' url='https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?w=1380&t=st=1705942136~exp=1705942736~hmac=4a13c811009e74dfdcf4cb885f1ad44d8842f4fa80858492718732f43eb89ac8' info='nhgf d' /></SwiperSlide>
      <SwiperSlide><Card title='pepep' url='https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?w=1380&t=st=1705942136~exp=1705942736~hmac=4a13c811009e74dfdcf4cb885f1ad44d8842f4fa80858492718732f43eb89ac8' info='tybrvcd' /></SwiperSlide>
      ...
    </Swiper>


    </>
  )
}

export default Contact