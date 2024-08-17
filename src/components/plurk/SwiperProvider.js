import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay, Virtual } from 'swiper';
import { sortedModels } from '@site/src/constants/ModelsConstants';

/**
 * Pricing Component
 * 
 * This component renders a pricing section with different pricing plans.
 * 
 * Usage Example:
 * 
 * import React from 'react';
 * import Pricing from './Pricing';
 * import './assets/css/tailwind.css'; // Ensure to import Tailwind CSS file
 * 
 * const App = () => {
 *   return (
 *     <div>
 *       <Pricing />
 *      //other code
 *     </div>
 *   );
 * };
 * 
 * export default App;
 */

const SwiperProvider = () => {
    let isRtl = false;

    //console.log('SwiperProvider');
    return (
        <section className="tw-py-14 tw-pb-[160p] lg:tw-py-[100px]">
                <div className="tw-container">
                    <div className="tw-heading tw-text-center">
                        <h6 className="!tw-text-secondary">Team. Peoples. Support</h6>
                        <h4>As featured with medical companies</h4>
                    </div>
                </div>
                <div className="tw-mx-auto tw-w-4/5 tw-py-10">
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
                                        <img src={model.logo} alt={model.title} style={{ width: '50px', height: '50px' }} />
                                    </div>
                                    <span className="tw-text-xl tw-font-bold tw-text-black dark:tw-text-white">{model.title}</span>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
    );
};

export default SwiperProvider;