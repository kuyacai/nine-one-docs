const chatbots = [
    {
        title: '中文润色专家',
        link: '/agents/Chinese_language_polishing_expert',
        logo : '/assets/images/bots/pen_notebook_1.png',
        isNew: false,
        isHot: false,
        order: 20,
        showInNav: true
    },
    {
        title: '公文写作专家',
        link: '/agents/official_document_writer',
        logo : '/assets/images/bots/pen_notebook_3.png',
        isNew: false,
        isHot: false,
        order: 30,
        showInNav: true
    },
    {
        title: '标语创作大师',
        link: '/agents/slogan_master',
        logo : '/assets/images/bots/pen_notebook_6.png',
        isNew: true,
        isHot: false,
        order: 40,
        showInNav: true
    },
    {
        title: '标题生成器',
        link: '/agents/title_generator',
        logo : '/assets/images/bots/pen_notebook_10.png',
        isNew: false,
        isHot: false,
        order: 50,
        showInNav: true
    },
    {
        title: '周报生成器',
        link: '/agents/weekly_report_generator',
        logo : '/assets/images/bots/pen_notebook_12.png',
        isNew: false,
        isHot: false,
        order: 60,
        showInNav: true
    },
    {
        title: '小红书写作专家',
        link: '/agents/xhs',
        logo : '/assets/images/bots/pen_notebook_15.png',
        isNew: false,
        isHot: false,
        order: 70,
        showInNav: true
    }
];

const agents = [
    {
        title: 'I18n Assistant',
        link: '/agents/i18n_assistant',
        logo : '/assets/images/bots/elephant_1.png',
        isNew: false,
        isHot: true,
        order: 10,
        showInNav: true
    }
];

// 按照 order 属性从大到小排序
const sortedChatbots = chatbots.sort((a, b) => b.order - a.order);

// 按照 order 属性从大到小排序，且 showInNav 为 true 的数组
const sortedChatbotsForNav = chatbots
    .filter(bot => bot.showInNav)
    .sort((a, b) => b.order - a.order);




// 按照 order 属性从大到小排序
const sortedAgents = agents.sort((a, b) => b.order - a.order);

// 按照 order 属性从大到小排序，且 showInNav 为 true 的数组
const sortedAgentsForNav = agents
    .filter(agent => agent.showInNav)
    .sort((a, b) => b.order - a.order);


export { sortedChatbots, sortedChatbotsForNav,sortedAgents, sortedAgentsForNav };