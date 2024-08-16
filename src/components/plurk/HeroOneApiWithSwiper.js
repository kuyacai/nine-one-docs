import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay, Virtual } from 'swiper';
import { sortedModels } from '@site/src/constants/ModelsConstants';


const HeroOneApiWithSwiper = ({ isRtl = false }) => {

    //console.log('Hero');
    return (
        <section className="tw-bg-banner-img tw-bg-bottom tw-bg-no-repeat rtl:tw-rotate-y-180 dark:tw-bg-black">
            <div className="tw-pt-24 tw-pb-16 dark:tw-bg-gradient-to-r dark:tw-from-[#B476E5]/10 dark:tw-to-[#47BDFF]/10 lg:tw-pt-30 lg:tw-pb-10">
                <div className="tw-container">
                    <div className="tw-mx-auto tw-max-w-[1028px] tw-text-center rtl:tw-rotate-y-180">
                        <h2 className="tw-text-3xl tw-font-black tw-text-black dark:tw-text-white sm:tw-text-5xl lg:tw-text-7xl lg:tw-leading-[90px]">
                            <span className="tw-text-color">Nine One API</span> <br />Accessible 100+ Models
                        </h2>
                        <p className="tw-mt-5 tw-text-lg tw-font-bold">Integrate AI features via our AI API.</p>
                    </div>
                </div>
                <div className="tw-mx-auto tw-w-4/5 tw-py-8">
                    <Swiper
                        modules={[Navigation, Autoplay, Virtual]}
                        slidesPerView="auto"
                        spaceBetween={30}
                        speed={2500}
                        loop={true}
                        autoplay={{ delay: 0, disableOnInteraction: false }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.7,
                            },
                            600: {
                                slidesPerView: 3,
                            },
                            1000: {
                                slidesPerView: 5,
                            },
                            1600: {
                                slidesPerView: 8,
                            },
                        }}
                        dir={isRtl ? 'rtl' : 'ltr'}
                        key={isRtl ? 'true' : 'false'}
                    >
                        {sortedModels.map(model => (
                            <SwiperSlide key={model.title}>
                                <Link to="#" className="tw-flex tw-items-center tw-gap-3">
                                    <div>
                                        <img src={model.logo} alt={model.title} className="tw-w-12 tw-h-12 tw-rounded-full tw-overflow-hidden" />
                                    </div>
                                    <span className="tw-text-xl tw-font-bold tw-text-black dark:tw-text-white">{model.title}</span>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="tw-pt-0 tw-relative tw-z-[1] tw-text-center tw-text-white tw-flex tw-justify-center tw-gap-10">
                    <Link to="/about-us" className="tw-btn tw-mx-auto tw-mt-2 tw-block tw-w-fit lg:tw-mx-0 lg:rtl:tw-ml-auto tw-text-xl tw-font-bold">
                        Get API Key
                    </Link>
                    <Link to="/about-us" className="tw-btn tw-mx-auto tw-mt-2 tw-block tw-w-fit lg:tw-mx-0 lg:rtl:tw-ml-auto tw-text-xl tw-font-bold">
                        Download Desktop App
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroOneApiWithSwiper;