/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Quick Start',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Desktop APP',
      items: [{
        type: 'category',
        label: 'Installation',
        items: [
          'installation/windows',
          'installation/macos',
        ],
      },
      {
        type: 'category',
        label: 'LLM Provider',
        items: [
          'llm/nineone',
          'llm/openai',
          'llm/moonshot',
        ],
      }],
    }
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
