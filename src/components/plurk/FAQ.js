import React, { useState } from 'react';
import { sortedFAQs } from '@site/src/constants/FAQConstants';
import AnimateHeight from 'react-animate-height';

const FAQ = ({ isRtl = true }) => {
    //console.log('Hero');
    const [active, setActive] = useState(0);
    return (
        <section className="tw-bg-black/[0.05] tw-py-12 dark:tw-bg-gray-dark lg:tw-py-24">
            <div className="tw-container">
                <div className="tw-heading tw-text-center">
                    <h4 className="!tw-font-black !tw-text-primary">FAQ’S</h4>
                    <p className="tw-mx-auto tw-mt-5 tw-max-w-[663px] tw-text-lg tw-font-medium dark:tw-text-white">
                        Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                        auctor a ornare odio.
                    </p>
                </div>
                {sortedFAQs.map((faq, i) => (

                    <div key={faq.id} className="tw-accordion-container tw-mx-auto lg:tw-w-[730px]" data-aos="flip-left" data-aos-duration="1000">
                        <div className="tw-ac tw-mt-6 tw-border-0 tw-border-b-2 tw-border-gray/20 tw-bg-transparent">
                            <h2 className="tw-ac-header">
                                <button
                                    type="button"
                                    className="tw-ac-trigger tw-relative !tw-flex tw-w-full tw-items-center tw-justify-between tw-gap-2 !tw-py-2.5 !tw-px-0 !tw-font-mulish !tw-text-lg !tw-font-bold !tw-text-black after:!tw-hidden ltr:tw-text-left rtl:tw-text-right dark:!tw-text-white"
                                    onClick={() => setActive(active === i ? null : i)}
                                >
                                    <div>{faq.question}</div>
                                    <div
                                        className={`tw-grid tw-h-6 tw-w-6 tw-flex-shrink-0 tw-place-content-center tw-rounded-full tw-border-2 tw-border-gray tw-text-gray tw-transition ${active === i ? 'tw-!border-black tw-!text-black dark:tw-!border-white dark:tw-!text-white' : ''}`}
                                    >
                                        {active === i ? (
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M0.5 5.90039C0.5 5.34811 0.947715 4.90039 1.5 4.90039H10.5C11.0523 4.90039 11.5 5.34811 11.5 5.90039V6.10039C11.5 6.65268 11.0523 7.10039 10.5 7.10039H1.5C0.947715 7.10039 0.5 6.65268 0.5 6.10039V5.90039Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        ) : (
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.09961 0.500977C6.65189 0.500977 7.09961 0.948692 7.09961 1.50098L7.09961 10.501C7.09961 11.0533 6.65189 11.501 6.09961 11.501H5.89961C5.34732 11.501 4.89961 11.0533 4.89961 10.501L4.89961 1.50098C4.89961 0.948692 5.34732 0.500977 5.89961 0.500977H6.09961Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M0.5 5.90039C0.5 5.34811 0.947715 4.90039 1.5 4.90039H10.5C11.0523 4.90039 11.5 5.34811 11.5 5.90039V6.10039C11.5 6.65268 11.0523 7.10039 10.5 7.10039H1.5C0.947715 7.10039 0.5 6.65268 0.5 6.10039V5.90039Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                </button>
                            </h2>

                            <AnimateHeight duration={600} height={active === i ? 'auto' : 0}>
                                <div className="lg:tw-w-4/5">
                                    <p className="tw-px-0 tw-pb-5 tw-pt-0 tw-text-sm tw-font-bold tw-leading-[18px] tw-text-gray">{faq.answer}</p>
                                </div>
                            </AnimateHeight>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;