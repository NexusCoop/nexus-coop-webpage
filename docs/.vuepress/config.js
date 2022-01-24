module.exports = {
    base:'/',
    title: '时空枢纽',
    description: '时空枢纽, NexusCoop',
    lang: 'zh-CN',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '时空枢纽',
            description: '时空枢纽, NexusCoop',
        },
        '/en/': {
            lang: 'en-US',
            title: 'NexusCoop',
            description: 'NexusCoop',
        }
    },
    head: [['link', { rel: 'icon', href: '/images/Nexus_Coop_Logo_x128.png' }]],
    themeConfig: {
        logo: '/images/Nexus_Coop_Logo_Nav.png',
        logoDark: null,
        darkMode: true,
        docsRepo: 'https://github.com/MengLuoRJ/nexus-coop-webpage',
        editLink: false,
        locales: {
            '/': {
                selectLanguageName: '简体中文',
                selectLanguageText: '语言',
                lastUpdatedText: '最后更新',
                contributorsText: '贡献者',
                notFound: ['🎉 该页面不存在。'],
                backToHome: '回到首页'
            },
            '/en/': {
                selectLanguageName: 'English',
                selectLanguageText: 'Language'
            }
        },
        navbar: [
            { text: '首页', link: '/' },
            { 
                text: '枢纽博文',
                children: [
                    { text: '枢纽博文', link: '/blog/' },
                    { text: '更新日志', link: '/patch-notes/' },
                    { text: '更新历程', link: '/update-road/' },
                ]
            },
            { 
                text: '教程攻略', 
                children: [
                    { text: '攻略总览', link: '/tutorial/' },
                    { text: '教程攻略', children: [
                        { text: '新手教程', link: '/tutorial/new-player/' },
                        { text: '指挥官攻略', link: '/tutorial/commander/' },
                        { text: '地图因子攻略', link: '/tutorial/map-and-mutator/' },
                        { text: '勇敢者游戏攻略', link: '/tutorial/vincent-game/' },
                        { text: '灾难之轮攻略', link: '/tutorial/wmc/' },
                    ]}
                ]
            },
            {
                text: '游玩时空枢纽',
                children: [
                    { text: '时空枢纽概览', link: '/nexus-coop/' },
                    { text: '游戏模式', children: [
                        { text: '合作模式', link: '/nexus-coop/coop.html' },
                        { text: '时空战场', link: '/nexus-coop/space-battlefield.html' },
                        { text: '试炼之地', link: '/nexus-coop/trainning-ground.html' },
                        { text: '勇敢者游戏', link: '/nexus-coop/vincengt-game.html' },
                        { text: '随机突变挑战', link: '/nexus-coop/rmc.html' },
                        { text: '灾难之轮', link: '/nexus-coop/wmc.html' },
                        { text: '克洛诺斯神殿', link: '/chrono-temple/' },
                        { text: '特别活动', link: '/activity/' }
                    ]},
                ],
            },
            { 
                text: '游玩地图',
                children: [
                    { text: '地图概览', link: '/map/' },
                    { text: '游戏地图', children: [
                        { text: '铁甲钢拳', link: '/map/promethus.html' },
                        { text: '黑暗杀星', link: '/map/scythe-of-amon.html' },
                        { text: '聚铁成兵', link: '/map/part-and-parcel.html' },
                        { text: '机会渺茫', link: '/map/mist-opportunities.html' },
                        { text: '湮灭快车', link: '/map/oblivion-express.html' },
                        { text: '天界封锁', link: '/map/lock-and-load.html' },
                        { text: '升格之链', link: '/map/chain-of-ascension.html' },
                        { text: '克哈裂缝', link: '/map/rifts-to-korhal.html' },
                        { text: '虚空降临', link: '/map/void-launch.html' },
                        { text: '亡者之夜', link: '/map/dead-of-night.html/' },
                        { text: '营救矿工', link: '/map/miner-evacuation.html' },
                        { text: '净网行动', link: '/map/malwarfare.html' },
                        { text: '往日神庙', link: '/map/temple-of-the-past.html' },
                        { text: '熔火危机', link: '/map/the-vermillion-problem.html' },
                        { text: '虚空撕裂', link: '/map/void-thrashing.html' },
                        { text: '天幕危机', link: '/map/skyfall.html' },
                    ]},
                ]
            },
            {
                text: '指挥官',
                children: [
                    { text: '指挥官概览', link: '/commander/'},
                    { text: '指挥官', children: [
                        { text: '泽拉图', link: '/commander/zeratul/' },
                        { text: '蒙斯克', link: '/commander/mengsk/' },
                        { text: '托什', link: '/commander/tosh/' },
                        { text: '汉森', link: '/commander/hanson/' },
                        { text: '主宰', link: '/commander/overmind/' },
                        { text: '塔萨达尔', link: '/commander/tassadar/' },
                        { text: '杰拉德', link: '/commander/gerard/' },
                        { text: '斯台特曼', link: '/commander/stetmann/' },
                        { text: '卡拉斯', link: '/commander/karass/' },
                        { text: '阿塔尼斯', link: '/commander/artanis/' },
                        { text: '纳法许', link: '/commander/nafash/' },
                        { text: '雷诺', link: '/commander/raynor/' },
                        { text: '欧雷加', link: '/commander/ulrezaj/' },
                        { text: '零', link: '/commander/zero/' },
                        { text: '赛兰迪斯', link: '/commander/selendis/' }
                    ]}
                ]
            },
            {
                text: '突变因子',
                link: '/mutator/'
            },
            { 
                text: '秘密档案', 
                link: '/secret/document/'
            },
            {
                text: '关于',
                link: '/about/'
            }
        ],
        sidebar: 'auto'
    },
}