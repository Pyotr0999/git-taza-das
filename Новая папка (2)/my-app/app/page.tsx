  'use client'
  import { Swiper, SwiperSlide } from 'swiper/react';

  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';


  import { Pagination, Navigation } from 'swiper/modules';
  import { useEffect, useState } from 'react';
  
  interface SliderItemProps {
    id:number,
    image:string
  }

  export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then(res => res.json())
            .then(res => {
                if (res.recipes) {
                    console.log(res.recipes);
                    setData(res.recipes);
                }
            })
            .catch(err => {
                console.error("Error fetching recipes:", err);
            });
    }, []);
    return (
      <Swiper
        pagination={{ type: 'fraction' }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-96 h-64"
      >
        {data.map((e:SliderItemProps) => (
          <SwiperSlide key={e.id} >
            <img src={e.image} alt="" className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }