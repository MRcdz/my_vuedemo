// interface
export interface UserProps {
  isLogin: boolean;
  name?: string;
  password?: string;
  id?:number;
  columnId?: number;
}
export interface ColumnProps{
  id: number;
  title: string;
  avatar?: string;
  description: string;
}
export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  columnId: number;
}
// data
export const users: UserProps = { isLogin: false, name: 'John', password: '3333' }
export const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'Javascript攻城狮',
    description: '创维商用精准聚焦用户场景诉求，多维度技术升级打造商用智慧巨幕',
    avatar: 'https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e3a17c305b1070f455202.jpg?x-oss-process=image/resize,m_pad,h_50,w_50'
  },
  {
    id: 2,
    title: 'HTML前段架构师',
    description: '生态品牌新成果！海尔社区洗落地菲律宾'
  },
  {
    id: 3,
    title: 'Python深度学习',
    description: '三星联合迪士尼推出Galaxy S10系列专属壁纸 适配Infinity-O屏幕',
    avatar: 'https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/6183abd6fc0f930997b02815.jpg?x-oss-process=image/resize,m_pad,h_50,w_50'
  },
  {
    id: 4,
    title: '自然语言处理训练营',
    description: '如何提升预防接种服务能力？海尔生物：数字化、物联化或是最优解',
    avatar: 'https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41b3b7d9c60b68cdd1ee.jpg?x-oss-process=image/resize,m_pad,h_50,w_50'
  },
  {
    id: 5,
    title: 'Alter聊科技',
    description: '4800万像素大内存手机OPPO A9x今日开售，仅需1999元！',
    avatar: 'https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/6183abd6fc0f930997b02815.jpg?x-oss-process=image/resize,m_pad,h_50,w_50'
  },
  {
    id: 6,
    title: 'test6专栏',
    description: '谷歌再次diss苹果：Pixel 3a的AR步行导航效果比iPhone XS更好',
    avatar: 'https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41b8b7d9c60b68cdd1ef.jpg?x-oss-process=image/resize,m_pad,h_50,w_50'
  }
]

export const articles:PostProps [] = [
  {
    id: 1,
    title: '这是我的第一篇文章',
    content: '也许你有这样的困扰：所有英语老师都告诉你学英语需要多听多看，为什么看了几年美剧后，眼睛还是得死盯着字幕才能听懂对白呢?说实话，我看日剧也是这个感觉。 我大学二外选择的是日语，日语的基础语法学过一些，词汇也背过一些。我日剧也看了有十几年了吧，…',
    image: 'https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee1980819f4ae08ac78d458.png?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
    createdAt: '2020-06-11 10:34:22',
    columnId: 1
  },
  {
    id: 2,
    title: '这是我的第二篇文章',
    content: 'this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif...',
    createdAt: '2020-06-11 10:34:22',
    columnId: 1
  },
  {
    id: 3,
    title: '这是我的第三篇文章',
    content: 'this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif...',
    image: 'https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5edcc2329f2b4e28352b75eb.jpg?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
    createdAt: '2020-06-11 10:34:22',
    columnId: 1
  }
]
