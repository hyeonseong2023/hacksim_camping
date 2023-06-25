import React, { useEffect } from 'react'
// import Swiper,{ Navigation, Pagination } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import '../../public/image/images/'

import 'swiper/css';
// core version + navigation, pagination modules:

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';





const Notice = () => {
    useEffect(() => {
      // Initialize the vertical swiper for the notice section
      new Swiper('.notice-line .swiper-container', {
        direction: 'vertical',
        autoplay: true,
        loop: true,
      });
  
      // Initialize the horizontal swiper for the promotion section
      new Swiper('.promotion .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 4000,
        },
        pagination: {
          el: '.promotion .swiper-pagination',
          clickable: true,
        },
        navigation: {
          prevEl: '.promotion .swiper-prev',
          nextEl: '.promotion .swiper-next',
        },
      });
    }, []);

    
    return (
        <div>
            {/* <!-- 공지사항 --> */}
            <section className="notice">

                <div className="notice-line">
                    <div className="bg-left"></div>
                    <div className="bg-right"></div>
                    <div className="inner">

                        <div className="inner__left">
                            <h2>공지사항</h2>
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <a href="#">모두의캠핑 고객센터영업시간 변경 안내</a>
                                    </div>
                                    <div className="swiper-slide">
                                        <a href="#">[당첨자 발표] 2023 모두의 캠핑 BEST PHOTO 이벤트</a>
                                    </div>
                                    <div className="swiper-slide">
                                        <a href="#">모두의 캠핑 웹 버전 업데이트 안내</a>
                                    </div>
                                    <div className="swiper-slide">
                                        <a href="#">[당첨자 발표] 캠핑용품 리뷰 이벤트</a>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="notice-line__more">
                                <div className="material-icons">add_circle</div>
                            </a>
                        </div>
                        <div className="inner__right">
                            <h2>모두의캠핑 프로모션</h2>
                            <div className="toggle-promotion">
                                <div className="material-icons">upload</div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="promotion">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img  src={process.env.PUBLIC_URL + 'img/main1_slide.jpg'}/>
                                    {/* <a href="#" className="btn">자세히 보기</a> */}
                            </div>
                            <div className="swiper-slide">
                            <img  src={process.env.PUBLIC_URL + 'img/main2_slide.jpg'}/>
                                    {/* <a href="#" className="btn">자세히 보기</a> */}
                            </div>
                            <div className="swiper-slide">
                            <img  src={process.env.PUBLIC_URL + 'img/main3_slide.jpg'}/>
                                    {/* <a href="#" className="btn">자세히 보기</a> */}
                            </div>
                            <div className="swiper-slide">
                            <img  src={process.env.PUBLIC_URL + 'img/main1_slide.jpg'}/>
                                    {/* <a href="#" className="btn">자세히 보기</a> */}
                            </div>
                            <div className="swiper-slide">
                            <img  src={process.env.PUBLIC_URL + 'img/main2_slide.jpg'}/>
                                    {/* <a href="#" className="btn">자세히 보기</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-prev"></div>
                    <div className="swiper-next"></div>
                </div>

            </section>
        </div>
    )
}

export default Notice