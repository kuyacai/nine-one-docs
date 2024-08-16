// src/components/CustomLayout.js
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { useColorMode } from '@docusaurus/theme-common';

const description = 'Nine One AI';

const ColorModeWrapper = ({ children }) => {
    const { colorMode } = useColorMode();

    return (
        <div className={colorMode === 'dark' ? 'tw-dark' : ''}>
            <div dir="ltr" className="tw-flex tw-min-h-screen tw-flex-col tw-bg-gradient-to-r tw-from-[#FCF1F4] tw-to-[#EDFBF9] tw-font-mulish tw-text-base tw-font-normal tw-text-gray tw-antialiased dark:tw-bg-[#101926] dark:tw-from-transparent dark:tw-to-transparent">
                <div className="tw-flex-grow tw-overflow-x-hidden">
                    {children}
                    {/* <Footer /> */}
                </div>
            </div>
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