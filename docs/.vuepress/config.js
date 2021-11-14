module.exports = {
    base:'/',
    title: '时空枢纽',
    description: '时空枢纽, NexusCoop',
    lang: 'zh-CN',
    head: [['link', { rel: 'icon', href: '/images/Nexus_Coop_Logo_x128.png' }]],
    themeConfig: {
        logo: '/images/Nexus_Coop_Logo_Nav.png',
        logoDark: null,
        darkMode: true,
        navbar: [
            { text: '首页', link: '/' },
            {
                text: '合作',
                children: [
                        { text: '合作模式', link: '/coop/' },
                        { text: '游玩地图', link: '/coop/maps.html' },
                        { text: '更新日志', link: '/coop/patchnotes.html' },
                ],
            },
            {
                text: '大厅',
                children: [
                    { text: '大厅模式', link: '/arcade/'}
                ]
            },
            {
                text: '指挥官',
                children: [
                    { text: '指挥官概览', link: '/commander/'},
                    { text: '指挥官', children: [
                        { text: '零', link: '/commander/zero/' },
                    ]}
                ]
            },
            {
                text: '秘密档案',
                link: '/secret/'
            },
            {
                text: '关于',
                link: '/about/'
            }
        ]
    },
}