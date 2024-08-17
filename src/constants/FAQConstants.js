
const faqs = [
    
    {   
        id: 1,
        question: 'Is Monica free?',
        answer: 'You can start using Monica for free. Free users have a daily usage limit. However, for advanced features, you may need to upgrade to a paid version.',
        order: 1000
    },
    {   
        id: 2,
        question: 'Is Monica free?',
        answer: 'You can start using Monica for free. Free users have a daily usage limit. However, for advanced features, you may need to upgrade to a paid version.',
        order: 900
    },
    {
        id: 3,
        question: 'Is Monica free?',
        answer: 'You can start using Monica for free. Free users have a daily usage limit. However, for advanced features, you may need to upgrade to a paid version.',
        order: 800
    },
    {
        id: 4,
        question: 'Is Monica free?',
        answer: 'You can start using Monica for free. Free users have a daily usage limit. However, for advanced features, you may need to upgrade to a paid version.',
        order: 700
    },
    {
        id: 5,
        question: 'Is Monica free?',
        answer: 'You can start using Monica for free. Free users have a daily usage limit. However, for advanced features, you may need to upgrade to a paid version.',
        order: 600
    },
    {
        id: 6,
        question: 'Is Monica free?',
        answer: 'You can start using Monica for free. Free users have a daily usage limit. However, for advanced features, you may need to upgrade to a paid version.',
        order: 500
    },
    {
        id: 7,
        question: 'Is Monica free?',
        answer: 'You can start using Monica for free. Free users have a daily usage limit. However, for advanced features, you may need to upgrade to a paid version.',
        order: 400
    },
    
];

// 按照 order 属性从大到小排序
const sortedFAQs = faqs.sort((a, b) => b.order - a.order);

export { sortedFAQs };