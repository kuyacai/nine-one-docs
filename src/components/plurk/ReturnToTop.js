import React from 'react';
import PropTypes from 'prop-types';

const ReturnToTop = ({ showTopButton, goToTop }) => {
  //console.log('ReturnToTop');
  //console.log('showTopButton:', showTopButton);
  return (
    <>
      {showTopButton && (
        <button type="button" className="tw-fixed tw-bottom-5 tw-z-10 tw-animate-bounce tw-right-5 rtl:tw-left-5" onClick={goToTop}>
          <div className="tw-group tw-flex tw-h-14 tw-w-14 tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-black/20 tw-bg-black tw-text-white tw-transition tw-duration-500 hover:tw-bg-secondary dark:tw-bg-primary dark:hover:tw-bg-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="tw-h-6 tw-w-6 tw-transition group-hover:tw-text-black"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </div>
        </button>
      )}
    </>
  );
};

ReturnToTop.propTypes = {
  showTopButton: PropTypes.bool.isRequired,
  goToTop: PropTypes.func.isRequired,
};

export default ReturnToTop;