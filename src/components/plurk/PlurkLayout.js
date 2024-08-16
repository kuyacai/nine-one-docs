// src/components/CustomLayout.js
import { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { useColorMode } from '@docusaurus/theme-common';
import ScreenLoader from '@site/src/components/plurk/ScreenLoader';
import ReturnToTop from '@site/src/components/plurk/ReturnToTop';

const description = 'Nine One AI';

const ColorModeWrapper = ({ children }) => {
    const { colorMode } = useColorMode();
    const [showLoader, setShowLoader] = useState(true);
    const [showTopButton, setShowTopButton] = useState(false);

    const goToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    const onScrollHandler = () => {
        //console.log('Scrolling...'); 
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            //console.log('Show top button'); 
            setShowTopButton(true);
        } else {
            //console.log('Hide top button');
            setShowTopButton(false);
        }
    };

    useEffect(() => {
        document.addEventListener('scroll', onScrollHandler);

        const screenLoader = document.getElementsByClassName('tw-screen_loader');
        if (screenLoader?.length) {
            setTimeout(() => {
                setShowLoader(false);
            }, 200);
        }

        return () => {
            document.removeEventListener('scroll', onScrollHandler);
        };
    }, [location.pathname]);


    useEffect(() => {
        window.scroll(0, 0);
    }, [location.pathname]);

    


    return (

        <div className={colorMode === 'dark' ? 'tw-dark' : ''}>
            {showLoader && <ScreenLoader />}
            <div dir="ltr" className="tw-flex tw-min-h-screen tw-flex-col tw-bg-gradient-to-r tw-from-[#FCF1F4] tw-to-[#EDFBF9] tw-font-mulish tw-text-base tw-font-normal tw-text-gray tw-antialiased dark:tw-bg-[#101926] dark:tw-from-transparent dark:tw-to-transparent">
                <div className="tw-flex-grow tw-overflow-x-hidden">
                    {children}
                    {/* <Footer /> */}
                </div>
            </div>
            <ReturnToTop showTopButton={showTopButton} goToTop={goToTop} />
        </div>
    );
};

export default function PlurkLayout({ children, title }) {


    return (
        <Layout description={description}>
            <Head />
            <ColorModeWrapper>

                {children}
                {/* <Footer /> */}

            </ColorModeWrapper>
        </Layout>
    );
}