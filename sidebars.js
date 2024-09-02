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
      collapsed: false,
      items: [
        'quick-start/intro',
        'quick-start/all-in-one-ai-api',
        'quick-start/nine-one-copilot-quick-start'],
    },
    {
      type: 'category',
      label: 'Nine One Copilot',
      collapsed: false,
      items: ['nine-one-copilot/nine-one-copilot-introduction',
        {
        type: 'category',
        label: 'Installation',
        items: [
          'nine-one-copilot/installation/windows',
          'nine-one-copilot/installation/macos',
        ],
      },
      {
        type: 'category',
        label: 'Chat',
        items: [
          'nine-one-copilot/chat/chat-introduction',
        ],
      },
      {
        type: 'category',
        label: 'LLM Provider',
        items: [
          'nine-one-copilot/llm/nineone',
          'nine-one-copilot/llm/openai',
          'nine-one-copilot/llm/moonshot',
        ],
      },
      {
        type: 'category',
        label: 'Chat Bots',
        items: [
          'nine-one-copilot/chatbots/chatbots-introduction'
        ],
      },
      {
        type: 'category',
        label: 'RAG',
        items: [
          'nine-one-copilot/rag/rag-introduction'
        ],
      },
      {
        type: 'category',
        label: 'Agents',
        items: [
          'nine-one-copilot/agents/i18n-assistant'
        ],
      },
    ],
    },
    'faq',
    
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
