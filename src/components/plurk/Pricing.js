import React from 'react';
import { Link } from 'react-router-dom';

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

const Pricing = () => {
    //console.log('Pricing');
    return (
        <section className="tw-bg-gradient-to-b tw-from-white/60 tw-to-transparent tw-py-14 dark:tw-from-white/[0.02] lg:tw-py-[100px]">
            <div className="tw-container">
                <div className="tw-heading tw-text-center">
                    <h6>Pricing Plan</h6>
                    <h4>Choose Affordable Prices</h4>
                </div>


                <div className="tw-grid tw-grid-cols-1 tw-gap-[30px] md:tw-grid-cols-2 lg:tw-grid-cols-3">
                    <div className="tw-flex tw-flex-col tw-group tw-rounded-3xl tw-border-2 tw-border-primary tw-bg-white tw-p-6 tw-px-4 tw-transition hover:tw-bg-primary hover:tw-drop-shadow-[-10px_30px_70px_rgba(40,38,77,0.25)] dark:tw-border-white/10 dark:tw-bg-transparent dark:tw-bg-gradient-to-b dark:tw-from-white/[0.01] dark:tw-to-transparent dark:tw-drop-shadow-none dark:hover:tw-border-gray-dark dark:hover:tw-bg-gray-dark sm:tw-px-6" data-aos="fade-up" data-aos-duration="1000">
                        <div className="tw-mb-8">
                            <h3 className="tw-text-[22px] tw-font-black tw-text-black dark:tw-text-white">Intro</h3>
                        </div>
                        <ul className="tw-space-y-5 tw-pb-7 tw-text-sm tw-font-bold group-hover:tw-text-white">
                            <li className="tw-flex tw-items-center">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <p className="tw-pl-3 rtl:tw-pr-3">Daily content updates</p>
                            </li>
                            <li className="tw-flex tw-items-center">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <p className="tw-pl-3 rtl:tw-pr-3">Unlimited downloads of FREE resources</p>
                            </li>
                            <li className="tw-flex tw-items-center">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <p className="tw-pl-3 rtl:tw-pr-3">Unlimited PREMIUM downloads</p>
                            </li>
                            <li className="tw-flex tw-items-center">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <p className="tw-pl-3 rtl:tw-pr-3">Valid commercial licenses</p>
                            </li>
                            <li className="tw-flex tw-items-center">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.3">
                                            <circle cx="8" cy="8" r="8" fill="#7780A1" />
                                        </g>
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <p className="tw-pl-3 rtl:tw-pr-3">Advanced Search</p>
                            </li>
                            <li className="tw-flex tw-items-center">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.3">
                                            <circle cx="8" cy="8" r="8" fill="#7780A1" />
                                        </g>
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <p className="tw-pl-3 rtl:tw-pr-3">No attribution required</p>
                            </li>
                            <li className="tw-flex tw-items-center">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.3">
                                            <circle cx="8" cy="8" r="8" fill="#7780A1" />
                                        </g>
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <p className="tw-pl-3 rtl:tw-pr-3">Browse with no ads</p>
                            </li>
                        </ul>

                        <div className="tw-mt-auto tw-border-t-2 tw-border-[#BBC0D0]/50 tw-pt-7">
                            <div className="tw-mb-3 tw-flex tw-flex-col tw-items-center tw-justify-center sm:tw-flex-row sm:tw-justify-between">
                                <div className="tw-relative tw-mb-2 tw-text-lg tw-font-extrabold before:tw-absolute before:tw-top-1/2 before:tw-h-2.5 before:tw-w-2.5 before:tw--translate-y-1/2 before:tw-rounded-full before:tw-bg-primary group-hover:tw-text-white group-hover:before:tw-bg-white tw-pl-5 before:tw-left-0 rtl:tw-pr-5 rtl:before:tw-right-0 sm:tw-mb-0">
                                    Monthly
                                </div>
                                <Link to="#" className="tw-btn tw-text-xl tw-text-white group-hover:tw-bg-white group-hover:tw-text-primary dark:tw-text-black xl:tw-w-44">
                                    $39.99
                                    <small className="tw-text-xs tw-lowercase">/month</small>
                                </Link>
                            </div>
                            <span className="tw-block tw-text-center tw-text-sm tw-font-bold tw-text-black dark:tw-text-white sm:tw-pr-5 sm:tw-text-right rtl:sm:tw-text-left">
                                Billed every month
                            </span>
                        </div>
                    </div>


                    <div className="tw-flex tw-flex-col tw-group tw-rounded-3xl tw-border-2 tw-border-secondary tw-bg-white tw-p-6 tw-px-4 tw-transition hover:tw-bg-secondary hover:tw-drop-shadow-[-10px_30px_70px_rgba(40,38,77,0.25)] dark:tw-border-white/10 dark:tw-bg-transparent dark:tw-bg-gradient-to-b dark:tw-from-white/[0.01] dark:tw-to-transparent dark:tw-drop-shadow-none dark:hover:tw-border-gray-dark dark:hover:tw-bg-gray-dark sm:tw-px-6" data-aos="fade-up" data-aos-duration="1000">
                        <div className="tw-relative tw-mb-8">
                            <h3 className="tw-text-[22px] tw-font-black tw-text-black dark:tw-text-white">Base</h3>
                            <div className="group-hover:tw-white/10 tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-rounded-xl tw-bg-secondary/10 tw-py-2 tw-px-4 tw-text-xs tw-font-black tw-text-secondary group-hover:tw-bg-white group-hover:tw-text-black tw-right-0 rtl:tw-left-0">
                                MOST POPULAR
                            </div>
                        </div>
                        <ul className="tw-space-y-5 tw-pb-7 tw-text-sm tw-font-bold group-hover:tw-text-white">
                            <li className="tw-flex tw-items-center">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <p className="tw-pl-3 rtl:tw-pr-3">Daily content updates</p>
                            </li>
                            <li className="tw-flex tw-items-center">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <p className="tw-pl-3 rtl:tw-pr-3">Unlimited downloads of FREE resources</p>
                            </li>
                            <li className="tw-flex tw-items-center">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <p className="tw-pl-3 rtl:tw-pr-3">Unlimited PREMIUM downloads</p>
                            </li>
                            <li className="tw-flex tw-items-center">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <p className="tw-pl-3 rtl:tw-pr-3">Valid commercial licenses</p>
                            </li>
                            <li className="tw-flex tw-items-center">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <p className="tw-pl-3 rtl:tw-pr-3">Advanced Search</p>
                            </li>
                            <li className="tw-flex tw-items-center">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <p className="tw-pl-3 rtl:tw-pr-3">No attribution required</p>
                            </li>
                            <li className="tw-flex tw-items-center">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <p className="tw-pl-3 rtl:tw-pr-3">Browse with no ads</p>
                            </li>
                        </ul>
                        <div className="tw-mt-auto tw-border-t-2 tw-border-[#BBC0D0]/50 tw-pt-7">
                            <div className="tw-mb-3 tw-flex tw-flex-col tw-items-center tw-justify-center sm:tw-flex-row sm:tw-justify-between">
                                <div className="tw-relative tw-mb-2 tw-text-lg tw-font-extrabold before:tw-absolute before:tw-top-1/2 before:tw-h-2.5 before:tw-w-2.5 before:-tw-translate-y-1/2 before:tw-rounded-full before:tw-bg-secondary group-hover:tw-text-white group-hover:before:tw-bg-white tw-pl-5 before:tw-left-0 rtl:tw-pr-5 rtl:before:tw-right-0 sm:tw-mb-0">
                                    Yearly
                                </div>
                                <Link
                                    to="#"
                                    className="tw-btn tw-bg-secondary tw-text-xl tw-text-white group-hover:tw-bg-white group-hover:tw-text-secondary dark:tw-text-black xl:tw-w-44"
                                >
                                    $14.99
                                    <small className="tw-text-xs tw-lowercase">/month</small>
                                </Link>
                            </div>
                            <span className="tw-block tw-text-center tw-text-sm tw-font-bold tw-text-black dark:tw-text-white sm:tw-pr-5 sm:tw-text-right rtl:sm:tw-text-left">
                                $179.00 every 12 months
                            </span>
                        </div>
                    </div>


                    <div className="tw-flex tw-flex-col tw-group tw-rounded-3xl tw-border-2 tw-border-black tw-bg-white tw-p-6 tw-px-4 tw-transition hover:tw-bg-black hover:tw-drop-shadow-[-10px_30px_70px_rgba(40,38,77,0.25)] dark:tw-border-white/10 dark:tw-bg-transparent dark:tw-bg-gradient-to-b dark:tw-from-white/[0.01] dark:tw-to-transparent dark:tw-drop-shadow-none dark:hover:tw-border-gray-dark dark:hover:tw-bg-gray-dark sm:tw-px-6" data-aos="fade-up" data-aos-duration="1000">
                    <div className="tw-mb-8">
                        <h3 className="tw-text-[22px] tw-font-black tw-text-black group-hover:tw-text-white dark:tw-text-white">Pro</h3>
                    </div>
                    <ul className="tw-space-y-5 tw-pb-7 tw-text-sm tw-font-bold group-hover:tw-text-white">
                        <li className="tw-flex tw-items-center">
                            <div>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8" fill="#45B649" />
                                    <path
                                        d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                        stroke="white"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <p className="tw-pl-3 rtl:tw-pr-3">Daily content updates</p>
                        </li>
                        <li className="tw-flex tw-items-center">
                            <div>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8" fill="#45B649" />
                                    <path
                                        d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                        stroke="white"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <p className="tw-pl-3 rtl:tw-pr-3">Unlimited downloads of FREE resources</p>
                        </li>
                        <li className="tw-flex tw-items-center">
                            <div>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8" fill="#45B649" />
                                    <path
                                        d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                        stroke="white"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <p className="tw-pl-3 rtl:tw-pr-3">Unlimited PREMIUM downloads</p>
                        </li>
                        <li className="tw-flex tw-items-center">
                            <div>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8" fill="#45B649" />
                                    <path
                                        d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                        stroke="white"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <p className="tw-pl-3 rtl:tw-pr-3">Valid commercial licenses</p>
                        </li>
                        <li className="tw-flex tw-items-center">
                            <div>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8" fill="#45B649" />
                                    <path
                                        d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                        stroke="white"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <p className="tw-pl-3 rtl:tw-pr-3">Advanced Search</p>
                        </li>
                        <li className="tw-flex tw-items-center">
                            <div>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8" fill="#45B649" />
                                    <path
                                        d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                        stroke="white"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <p className="tw-pl-3 rtl:tw-pr-3">No attribution required</p>
                        </li>
                        <li className="tw-flex tw-items-center">
                            <div>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8" fill="#45B649" />
                                    <path
                                        d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                        stroke="white"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <p className="tw-pl-3 rtl:tw-pr-3">Browse with no ads</p>
                        </li>
                    </ul>
                    <div className="tw-mt-auto tw-border-t-2 tw-border-[#BBC0D0]/50 tw-pt-7">
                        <div className="tw-mb-3 tw-flex tw-flex-col tw-items-center tw-justify-center sm:tw-flex-row sm:tw-justify-between">
                            <div className="tw-relative tw-mb-2 tw-text-lg tw-font-extrabold before:tw-absolute before:tw-top-1/2 before:tw-h-2.5 before:tw-w-2.5 before:tw--translate-y-1/2 before:tw-rounded-full before:tw-bg-black group-hover:tw-text-gray group-hover:before:tw-bg-white tw-pl-5 before:tw-left-0 rtl:tw-pr-5 rtl:before:tw-right-0 sm:tw-mb-0">
                                Yearly
                            </div>
                            <Link to="#" className="tw-btn tw-bg-black tw-text-xl tw-text-white group-hover:tw-bg-white group-hover:tw-text-black xl:tw-w-44">
                                $499
                            </Link>
                        </div>
                        <span className="tw-block tw-text-center tw-text-sm tw-font-bold tw-text-black group-hover:tw-text-white dark:tw-text-white sm:tw-pr-5 sm:tw-text-right rtl:sm:tw-text-left">
                            Billed once only
                        </span>
                    </div>
                </div>


                </div>


                


            </div>
        </section>
    );
};

export default Pricing;