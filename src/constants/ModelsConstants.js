const models = [
    
    {
        title: 'GPT-4 Turbo and GPT-4',
        link: '/models/openai',
        logo: '/assets/images/provider/open_ai_small.svg',
        isNew: false,
        isHot: true,
        order: 1000
    },
    {
        title: 'Claude 3.5',
        link: '/models/anthropic',
        logo: '/assets/images/provider/anthropic.svg',
        isNew: false,
        isHot: true,
        order: 900
    },
    {
        title: 'gemma2',
        link: '/models/gemma',
        logo: '/assets/images/provider/Google.svg',
        isNew: false,
        isHot: true,
        order: 800
    },
    {
        title: 'Mistral',
        link: '/models/mistral',
        logo: '/assets/images/provider/MistralAI.svg',
        isNew: false,
        isHot: true,
        order: 700
    },
    {
        title: '文心一言',
        link: '/models/baidu',
        logo: '/assets/images/provider/baidu_cloud.png',
        isNew: false,
        isHot: true,
        order: 600
    },
    {
        title: '通义千问',
        link: '/models/ali',
        logo: '/assets/images/provider/AlibabaCloud.svg',
        isNew: false,
        isHot: true,
        order: 500
    },
    {
        title: '讯飞星火认知',
        link: '/models/xfyun',
        logo: '/assets/images/provider/xunfei.png',
        isNew: false,
        isHot: true,
        order: 400
    },
    {
        title: '智谱 ChatGLM',
        link: '/models/bigmodel',
        logo: '/assets/images/provider/zhipu.png',
        isNew: false,
        isHot: true,
        order: 300
    },
    {
        title: 'Moonshot',
        link: '/models/moonshot',
        logo: '/assets/images/provider/moonshot.png',
        isNew: false,
        isHot: true,
        order: 200
    },
    {
        title: '百川大模型',
        link: '/models/baichuan',
        logo: '/assets/images/provider/baichuan.png',
        isNew: false,
        isHot: true,
        order: 100
    },
    {
        title: 'Llama3.1',
        link: '/models/llama',
        logo: '/assets/images/provider/meta.svg',
        isNew: false,
        isHot: true,
        order: 90
    },
    
];

// 按照 order 属性从大到小排序
const sortedModels = models.sort((a, b) => b.order - a.order);

//console.log(sortedModels);

export { sortedModels };