import React from 'react';

/**
 * ScreenLoader Component
 * 
 * This component renders a loading screen with animated circles.
 * 
 * Usage Example:
 * 
 * import React from 'react';
 * import ScreenLoader from './ScreenLoader';
 * import './assets/css/tailwind.css'; // Ensure to import Tailwind CSS file
 * 
 * const App = () => {
 *   return (
 *     <div>
 *       <ScreenLoader />
 *       
 *     </div>
 *   );
 * };
 * 
 * export default App;
 */

const ScreenLoader = () => {
  //console.log('ScreenLoader');
  return (
    <div className="tw-screen_loader tw-fixed tw-inset-0 tw-z-[60] tw-grid tw-place-content-center tw-bg-[#fafafa] dark:tw-bg-[#060818]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle cx="50" cy="50" r="0" fill="none" stroke="#47bdff" strokeWidth="4">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1s"
            values="0;16"
            keyTimes="0;1"
            keySplines="0 0.2 0.8 1"
            calcMode="spline"
            begin="0s"
          ></animate>
          <animate
            attributeName="opacity"
            repeatCount="indefinite"
            dur="1s"
            values="1;0"
            keyTimes="0;1"
            keySplines="0.2 0 0.8 1"
            calcMode="spline"
            begin="0s"
          ></animate>
        </circle>
        <circle cx="50" cy="50" r="0" fill="none" stroke="#b476e5" strokeWidth="4">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1s"
            values="0;16"
            keyTimes="0;1"
            keySplines="0 0.2 0.8 1"
            calcMode="spline"
            begin="-0.5s"
          ></animate>
          <animate
            attributeName="opacity"
            repeatCount="indefinite"
            dur="1s"
            values="1;0"
            keyTimes="0;1"
            keySplines="0.2 0 0.8 1"
            calcMode="spline"
            begin="-0.5s"
          ></animate>
        </circle>
      </svg>
    </div>
  );
};

export default ScreenLoader;