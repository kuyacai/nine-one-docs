import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Hero Component
 * 
 * This component renders a hero section with a background image, text, and a button.
 * 
 * Usage Example:
 * 
 * import React from 'react';
 * import Hero from './Hero';
 * import './assets/css/tailwind.css'; // Ensure to import Tailwind CSS file
 * 
 * const App = () => {
 *   return (
 *     <div>
 *       <Hero />
 *       
 *     </div>
 *   );
 * };
 * 
 * export default App;
 */
// SVGIcon.js

const SVGIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24.6667 0.666687H8.66669C7.20002 0.666687 6.00002 1.86669 6.00002 3.33335V19.3334C6.00002 20.8 7.20002 22 8.66669 22H24.6667C26.1334 22 27.3334 20.8 27.3334 19.3334V3.33335C27.3334 1.86669 26.1334 0.666687 24.6667 0.666687ZM13.68 15.7067L10.92 12.9334C10.4134 12.4134 10.4134 11.5867 10.92 11.0667C11.0434 10.9431 11.1899 10.845 11.3512 10.7781C11.5125 10.7112 11.6854 10.6768 11.86 10.6768C12.0346 10.6768 12.2076 10.7112 12.3689 10.7781C12.5302 10.845 12.6767 10.9431 12.8 11.0667L14.6134 12.8934L20.5067 6.94669C20.63 6.82308 20.7766 6.72502 20.9379 6.65811C21.0992 6.5912 21.2721 6.55676 21.4467 6.55676C21.6213 6.55676 21.7942 6.5912 21.9555 6.65811C22.1168 6.72502 22.2633 6.82308 22.3867 6.94669C22.8934 7.46669 22.8934 8.29335 22.3867 8.81335L15.5467 15.7067C15.0534 16.24 14.2 16.24 13.68 15.7067ZM2.00002 6.00002C1.26669 6.00002 0.666687 6.60002 0.666687 7.33335V24.6667C0.666687 26.1334 1.86669 27.3334 3.33335 27.3334H20.6667C21.4 27.3334 22 26.7334 22 26C22 25.2667 21.4 24.6667 20.6667 24.6667H4.66669C3.93335 24.6667 3.33335 24.0667 3.33335 23.3334V7.33335C3.33335 6.60002 2.73335 6.00002 2.00002 6.00002Z"
      fill="#B476E5"
    />
  </svg>
);

const FeatureItem = ({ text }) => (
  <div className="tw-mt-4 tw-flex tw-items-center tw-gap-4">
    <div className="tw-shrink-0">
      <SVGIcon />
    </div>
    <div className="tw-flex-1">
      <p className="tw-text-lg tw-text-left tw-font-semibold tw-text-white dark:tw-text-white">{text}</p>
    </div>
  </div>
);


const features = [
  'Supports major LLMs: GPT-4o, Claude 3, Moonshot, Qwen, and more.',
  'Supports Ollama.',
  'Enables personal RAG creation using AI models.',
  'Integrates multiple AI agents.',
  'Chatbot Platform.',
  'Includes various tools.',
];

const FeaturesList = () => (
  <>
    {features.map((feature, index) => (
      <FeatureItem key={index} text={feature} />
    ))}
  </>
);


const Hero = ({ isRtl = true }) => {

  //console.log('Hero');
  return (
    <div className="tw-overflow-hidden tw-bg-black sm:tw--mx-[250px] sm:tw-rounded-b-[50%] lg:tw--mx-[150px]">
      <div className="tw-relative">
        <img src="/assets/images/banner-lefticon.png" alt="banner-lefticon" className="tw-absolute tw-left-0 tw-top-20 sm:tw-left-[250px] lg:tw-left-[150px]" />
        <img
          src="/assets/images/banner-rightIcon.png"
          alt="banner-rightIcon"
          className="tw-absolute tw-right-0 tw--top-4 sm:tw-right-[250px] lg:tw-right-[150px]"
        />
        <div className="tw-container">
          <div className="tw-relative tw-bg-map tw-bg-cover tw-bg-top tw-bg-no-repeat tw-pt-8 tw-pb-0 lg:tw-pt-10 lg:tw-pb-24 xl:tw-pt-20">
            <div className="tw-relative tw-z-[1] tw-text-center tw-text-white lg:tw-w-3/5 ltr:lg:tw-text-left rtl:lg:tw-text-right xl:tw-w-1/2">
              <h2 className="tw-text-xl tw-font-extrabold tw-leading-normal sm:tw-text-2xl lg:tw-text-[40px] lg:tw-leading-[60px] tw-wider tw-text-left">
                Nine One <span className="tw-text-primary">Copilot</span> <br />
                All-in-One AI
                <span className="tw-text-secondary"> Assistant </span>
              </h2>
              <FeaturesList />
            </div>
            <div className="tw-pt-4 tw-relative tw-z-[1] tw-text-center tw-text-white lg:tw-w-3/5 ltr:lg:tw-text-left rtl:lg:tw-text-right xl:tw-w-1/2">
              <Link to="/about-us" className="tw-btn tw-mx-auto tw-mt-2 tw-block tw-w-fit lg:tw-mx-0 lg:rtl:tw-ml-auto tw-text-xl tw-font-bold">
                Download - It's Free
              </Link>
            </div>
            <div
              className="tw-z-[2] tw-bottom-0 tw-mx-auto tw-w-auto tw-right-0 rtl:tw-left-0 md:tw-w-[540px] lg:tw-absolute xl:tw-w-[650px]"
              data-aos={isRtl ? 'fade-right' : 'fade-left'}
              data-aos-duration="1000"
              data-aos-offset="0"
              data-aos-delay="200"
            >
              <img src="/assets/images/home-banner-icon.svg" alt="home-banner-icon" className="rtl:tw-rotate-y-180" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;