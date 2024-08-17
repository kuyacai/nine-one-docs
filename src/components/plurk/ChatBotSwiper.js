import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Virtual } from 'swiper';
import { sortedChatbots } from '@site/src/constants/BotConstants';
import PropTypes from 'prop-types';

const ChatBotSlide = ({ bot, showShadow }) => {
    return (
        <SwiperSlide className="tw-relative tw-text-center" key={bot.title}>
            {showShadow && (
                <span className="tw-absolute tw-inset-x-0 tw--top-5">
                    <img src="/assets/images/team-shadow1.svg" className="tw-mx-auto" alt={bot.title} />
                </span>
            )}
            <div className="tw-mx-auto tw-w-48 tw-h-48 tw-rounded-full">
                <img src={bot.logo} alt={bot.title} className="tw-w-full tw-h-full tw-object-cover tw-rounded-full" />
            </div>
            <h3 className="tw-mt-2 tw-text-xl tw-font-extrabold tw-text-black dark:tw-text-white">{bot.title}</h3>
        </SwiperSlide>
    );
};

ChatBotSlide.propTypes = {
    bot: PropTypes.shape({
        title: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
    }).isRequired,
    showShadow: PropTypes.bool.isRequired,
};

const ChatBotSwiper = ({ isRtl = false }) => {
    //console.log('Hero');
    let showShadow = false;
    return (
        <section className="tw-overflow-hidden tw-py-12 lg:tw-py-24">
            <div className="tw-container">
                <div className="tw-heading tw-text-center">
                    <h6 className="!tw-text-secondary">AI Chat Bots</h6>
                    <h4>Interact with Expert Bots Across Various Fields</h4>
                </div>
            </div>

            <div className="tw-container tw-relative tw-px-16">
                <div className="swiper-button-prev2 tw-absolute tw-left-2 tw-top-1/2 tw-flex tw-h-11 tw-w-11 -tw-translate-y-1/2 tw-items-center tw-justify-center tw-rounded-full tw-border-2 tw-border-secondary tw-text-secondary tw-duration-200 hover:tw-bg-secondary hover:tw-text-white">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.5892 14.4111L9.41083 15.5895L3.82167 10.0003L9.41083 4.41113L10.5892 5.58947L7.01167 9.16697H15V10.8336H7.01167L10.5892 14.4111Z"
                            fill="currentcolor"
                        />
                    </svg>
                </div>

                <div className="swiper-button-next1 tw-absolute tw-right-2 tw-top-1/2 tw-flex tw-h-11 tw-w-11 -tw-translate-y-1/2 tw-items-center tw-justify-center tw-rounded-full tw-border-2 tw-border-secondary tw-text-secondary tw-duration-200 hover:tw-bg-secondary hover:tw-text-white">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.41083 14.4111L10.5892 15.5895L16.1783 10.0003L10.5892 4.41113L9.41083 5.58947L12.9883 9.16697H5V10.8336H12.9883L9.41083 14.4111Z"
                            fill="currentcolor"
                        />
                    </svg>
                </div>

                <Swiper
                    loop={true}
                    slidesPerView="auto"
                    spaceBetween={30}
                    navigation={{
                        nextEl: '.swiper-button-next1',
                        prevEl: '.swiper-button-prev2',
                    }}
                    modules={[Navigation,Autoplay,Virtual]}
                    speed={2500}
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        600: {
                            slidesPerView: 2,
                        },
                        1000: {
                            slidesPerView: 4,
                        },
                        1600: {
                            slidesPerView: 6,
                        },
                    }}
                    dir={isRtl ? 'rtl' : 'ltr'}
                    key={isRtl ? 'true' : 'false'}
                >
                    {sortedChatbots.map(bot => (
                        <SwiperSlide className="tw-relative tw-text-center" key={bot.title}>
                            {showShadow && (
                                <span className="tw-absolute tw-inset-x-0 tw--top-5">
                                    <img src="/assets/images/team-shadow1.svg" className="tw-mx-auto" alt={bot.title} />
                                </span>
                            )}
                            <div className="tw-mx-auto tw-w-48 tw-h-48 tw-rounded-full">
                                <img src={bot.logo} alt={bot.title} className="tw-w-full tw-h-full tw-object-cover tw-rounded-full" />
                            </div>
                            <h3 className="tw-mt-2 tw-text-xl tw-font-extrabold tw-text-black dark:tw-text-white">{bot.title}</h3>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ChatBotSwiper;