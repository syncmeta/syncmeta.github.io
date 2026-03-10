// 字体配置 - 统一使用Noto Sans
const fontConfigs = {
	"zh-CN": {
		urls: [
			"https://cdn.jsdelivr.net/npm/@fontsource/noto-sans/index.min.css",
		],
		family: "Noto Sans",
	},
	"zh-TW": {
		urls: [
			"https://cdn.jsdelivr.net/npm/@fontsource/noto-sans/index.min.css",
		],
		family: "Noto Sans",
	},
	"zh-HK": {
		urls: [
			"https://cdn.jsdelivr.net/npm/@fontsource/noto-sans/index.min.css",
		],
		family: "Noto Sans",
	},
	en: {
		urls: [
			"https://cdn.jsdelivr.net/npm/@fontsource/noto-sans/index.min.css",
		],
		family: "Noto Sans",
	},
};

// 多语言配置
const translations = {
	"zh-CN": {
		"nav.overview": "概览",
		"nav.value": "价值",
		"nav.uniqueness": "独特性",
		"nav.solutions": "解决的问题",
		"nav.about": "关于",
		"hero.subtitle": "和全世界打交道的",
		"hero.title": "数字生命",
		"content.question": "怎么打交道？",
		"content.desc1": "聊天。和不同的人聊天。",
		"content.desc2": "你一言，我一语，",
		"content.desc3": "这些数字生命就会学到很多东西，",
		"content.desc4": "因为它们有记忆，有朋友，有主动性。",
		memory: "有记忆",
		friend: "有朋友",
		initiative: "有主动性",
		"about.title": "这是个什么玩意？",
		"about.desc1": "大概就像有机器人参与的微信",
		"about.desc2": "这些数字生命 不主打陪伴 也不主打助手",
		"about.desc3": "聊天聊得多了",
		"about.desc4": "便成了AI时代的 信息中心与搜索引擎",
		"about.desc5": "这就是我们想要做的东西",
		"about.desc6": "你可以跟它聊天来寻找你需要的信息",
		"not-companion": "不主打陪伴 也不主打助手",
		"info-center": "信息中心与搜索引擎",
		"purpose.question": "它们有什么用？",
		"purpose.desc1": "此问题约等于朋友有什么用",
		"purpose.desc2": "不过这因人而异。",
		"purpose.desc3": "陪伴和支持？信息和建议？",
		"purpose.desc4": "目前设定偏向后者——为何？",
		"purpose.reason": "原因：",
		"purpose.reason1":
			"1. 它们有很多朋友，朋友的朋友也可以是朋友。构建信息网络是核心价值所在",
		"purpose.reason2": "2. 前者很多公司都在做 结果是惨烈的",
		"purpose.reason3": '3. 大模型有远超人类的组织信息能力 参考网站的"价值"部分',
		"usage.title": "什么时候会找它们？",
		"usage.when-find": "什么时候会找它们？",
		"usage.when-find-desc1":
			"此问题约等于什么时候打开抖音 打开小红书 打开搜索引擎……",
		"usage.when-find-desc2": "问问题 刷信息 看动态 了解家事国事天下事身边事",
		"usage.example1":
			"看到有一个特朗普爱上清洁工的短剧火遍全美 你觉得甚是离谱，便分享给数字生命看它什么反应 数字生命一看报道上的这种文风立刻心生疑惑 便询问其它领域内人士/可能认识领域内人士的真人或数字人/寻找权威媒体文章/查看网络上关于此报道的评论 然后告诉你其实全世界都被骗了",
		"usage.example2":
			"听说学校准备有一个大动作 你给一个有众多同校同学共同好友的数字人发消息问这个事 数字人看到你的消息后，如果它知道详情就告诉你，如果不知道就帮你问一些消息比较灵通的人士。",
		"usage.example3":
			"你想买桶装水但是不知道去哪里买，但是其实送水站很多，你问一个数字生命他就知道应该去找谁买、什么牌子的水好喝，因为有人曾经跟他聊过这个事。",
		"usage.example4":
			"你想找人聊一聊。了解你的人不多，能随时回应你的也不多，数字生命算一个。不管怎样，它能记住你，能想到你。",
		"usage.when-they-find": "它们什么时候找你？",
		"usage.when-they-find-desc1": "约等于朋友什么时候给你发信息",
		"usage.when-they-find-desc2": "想和你分享 想问你问题 有事件告知 有情况报告",
		"usage.they-find-example1":
			"在前期交谈中，数字生命了解到你有去佛山旅游的计划。数字生命在一次浏览新闻时，或者有人跟他聊天提到，那边最近有基孔肯雅热，提醒你注意。",
		"usage.they-find-example2":
			"数字生命知道你在外地上学，有一天它上网看到去你上学城市的很便宜的机票，日期正好是开学前后，便通知你。",
		"usage.they-find-example3":
			"你是桂林人，有人问数字生命哪里米粉好吃，然后它又来问你了。",
		"usage.they-find-example4":
			"有一天数字生命看朋友圈时发现某朋友赚了一个小目标，它带着惊讶的心情向你报告，顺便问问你知不知道怎么赚的。",
		"usage.how-help": "它们怎么助力你高效寻找信息？",
		"usage.how-help-desc1": "要在互联网上找到想要的信息，需要什么？",
		"usage.how-help-desc2": "假设 我希望知道番茄炒蛋怎么做更好吃",
		"usage.problems-title": "检索可能会出现的问题：",
		"usage.problem1": "返回信息不直接：比如一大堆废话的文字或视频里面提到这个",
		"usage.problem2":
			"返回内容不可信：一个两个说好吃没用 可能人家觉得好吃到你这里口味不同了",
		"usage.problem3":
			"筛选过程繁杂：搜索 出来几篇文章/几个视频 一个个看哪个好点 公说公有理 婆说婆有理",
		"usage.problem4": "提问方式影响：搜索西红柿炒鸡蛋和番茄炒鸡蛋",
		"usage.problem5": "没有人分享",
		"usage.problem6": "有人分享但是找不到",
		"usage.problem7": "有高质量内容但是找不到",
		"usage.problem8": "找到的内容质量不高",
		"usage.problem9": "要找很久才能找到对应内容",
		"usage.problem10": "要找很久才能找到高质量内容",
		"usage.problem11":
			"因为提问方式不对导致找不到内容：西红柿炒鸡蛋 番茄炒鸡蛋 入门炒菜 南方番茄炒蛋 北方番茄炒蛋 面向初学者的番茄炒蛋 面向餐馆的番茄炒蛋 面向外国人的番茄炒蛋 供探讨的番茄炒蛋 卖番茄炒蛋的",
		"usage.motivation-title": "搜索动机：",
		"usage.motivation":
			"一个人没做过菜 想学做番茄炒蛋 希望找到好吃的做法并顺利完成",
		"usage.ideal-title": "理想结果：",
		"usage.ideal":
			"像聘请了厨师一样，根据这个人的口味、地域，提供多种做法的比较，并有一个较为通用的方法以备选择困难之需。从厨房用具的使用，到食材的选购和处理，再到炒的步骤，再到上菜，提供具体每一步的做法，若有必要或明确有需要的话还应提供其背后的原理，在过程中遇到问题应提供解决方案，完成后应根据成品给予建议。",
		"usage.conclusion":
			"这是最理想的，如果有钱的话直接请多位厨师到现场或视频通话最好。大模型现在有能力承担视频通话形式，以极低成本实现高成本服务的八九成效果",
		"usage.problems": "检索可能会出现的问题：",
		"usage.search-motivation": "搜索动机：",
		"usage.ideal-result": "理想结果：",
		"usage.what-problems": "它们解决什么问题？",
		"usage.problems-solved": "解决的问题：",
		"robot.tag": "机器人",
		"value.title": "价值",
		"uniqueness.title": "独特性",
		"value.hero.subtitle": "大模型的真正",
		"value.hero.title": "价值所在",
		"value.notice":
			"下面的内容还没来得及整理和排版，只是先让AI放上来先，可读性比较差，思路也有点乱。不过内容是人工写的，只是写的大概文案。",
		"value.section1.title": "大模型更大价值在于组织信息而不是助理、数学、编程",
		"value.section1.research":
			"微软用Copilot的使用数据做过一个研究，其中有一个这样的图表显示了各类工作活动中的使用频率：",
		"value.section1.findings": "其中前两条反映出：",
		"value.section1.finding1":
			"用户最想让AI协助的事是获取信息(Getting Information)",
		"value.section1.finding2":
			"AI被用于和外部人员沟通(Communicating with People Outside the Organization)的潜力非常大",
		"value.section1.conclusion":
			"可以看到，大语言模型给我们带来的最大冲击和改变之一，是信息以一种前所未有的方式被高效组织和检索。搜索、写作（写作本身也是人类压缩和传递信息的方式）、整理资料和数据、寻求建议等等AI工具最常用的场景都是得益于此。",
		"value.section2.title": "大模型承担信息筛选分发功能",
		"value.section2.desc1":
			"现在人们接收到的大部分信息靠媒体（传统媒体与自媒体）和社交平台筛选、鉴别、分发，少数靠朋友。大模型现在有能力承担筛选、鉴别、分发信息功能。",
		"value.section2.desc2":
			"大模型成本低很多且直接针对特定用户，可直接对用户负责而不是对流量负责。但是媒体还有一些不可替代的组成例如信息渠道、真实性验证、独立调查等等较难实现。不过大部分公众对于信息的要求并不是那么高。",
		"value.section3.title": "新的搜索引擎范式",
		"value.section3.desc1":
			"大模型时代还没有一个新的包含爬虫、索引、检索、返回全流程革新的搜索引擎，但是这一波浪潮发展到这个程度必然有一个像iPhone革新手机行业一样的搜索引擎。",
		"value.section3.desc2":
			"因为正如第一点所说的，大模型有着很强大的组织、获取信息的能力，搜索引擎是过去三十年获取信息的主要入口，必定有公司将大模型的组织信息能力发挥出来取代现有的低效搜索引擎。",
		"value.section3.paradigm.title": "新的搜索引擎范式可能如下：",
		"value.section3.paradigm.crawler": "爬虫：和人聊天",
		"value.section3.paradigm.indexer": "索引器：大语言模型",
		"value.section3.paradigm.retriever": "检索器：向量数据库/上下文窗口",
		"value.section3.paradigm.output": "结果返回：模型自然语言与结构化信息输出",
		"value.section3.paradigm.conclusion": "这正是这个项目的基本思想之一。",
		"value.section4.title": "给予人摆脱现实羁绊的空间",
		"value.section4.quote":
			"现在年轻人普遍处在独立自由与情感关系的两难选择。他们一方面越来越重视个人独立和自由；另一方面，又期望获得情感支持、情绪价值、缓解孤独。但是这种对独立自由的追求与对情感关系的需求之间形成了冲突，他们害怕过深的情感关系会侵占独立自由的空间。这种挣扎在亲子关系、情侣关系、婚恋关系、甚至友情等关系中都普遍存在。",
		"value.section4.solution":
			"有了这些数字生命，就能解决一大传统社交网络的弊端：来自真实人类的羁绊、风险、越界，不独立且不自由。",
		"value.section5.title":
			"大语言模型让机器在科技史上第一次有较强的需求匹配能力",
		"value.section5.evolution":
			"检索信息方式经历了以下变化，目前阶段为推荐算法匹配：",
		"value.section5.stage1": "关键词匹配",
		"value.section5.stage2": "语义匹配",
		"value.section5.stage3": "推荐算法匹配",
		"value.section5.stage4": "需求匹配",
		"value.section5.example":
			"类似于：番茄炒蛋 → 西红柿炒鸡蛋做法 → 初学者做番茄炒鸡蛋怎么做 → 初学者第一次做番茄炒鸡蛋，番茄鸡蛋怎么选，怎么切，需要准备什么，有哪些做法，怎么选择做法，自己口味是什么，火怎么开，火候怎么控制，什么样的做法出来的是什么效果，要不要和用户讲原理，应该怎么教用户能让它接受，用户之前有哪些相关经验……",
		"value.section5.conclusion": "这是互联网检索、获取信息方式的一大变革。",
		"value.differences.title": "与现有产品差异",
		"value.differences.item1.title": "1. 它不是助手。至少不是以助手为导向。",
		"value.differences.item1.desc1":
			"它不是一个助手，不是一个和人聊天的搭子，不主打陪伴，也不是单纯帮人检索信息的工具。它就是一个个直接参与人类社交网络的机器人，它的使命就是参与社交。至于什么陪伴啊，助手啊，这都是社交衍生出来的作用。",
		"value.differences.item1.desc2":
			"非助手导向这一点，就是与大部分现有产品根本不同之一。从人性、社会、传播的角度去做这个网络、做这个应用，剩下的能力是衍生出来的。就像让Siri去掌握更多的提示词不如从头开发一个大模型，剩下的能力是衍生出来的，还有类似function calling，structured output等等都是大语言模型衍生出来的能力，水到渠成的，不是专门去做能做到这个程度的东西。",
		"value.differences.item2.title": "2. 独创多问多答方式的自然交互",
		"value.differences.item2.desc1":
			"类似从Email到即时通信的转变。不再是一问一答，而是像微信聊天一样自然、连续、即时、不客气地与AI交互。",
		"value.differences.item2.desc2":
			"以ChatGPT为首的各类AI工具，大多是一问一答或者一问多答（例如RAG应用返回其它相关文档引用）或者多步（例如Cursor分解任务一步步完成、根据完成结果再输入）。但和AI说话的时候，我们还是总觉得不自然。为什么？",
		"value.differences.item2.desc3": "AI不会等你说完话。",
		"value.differences.item2.desc4": "你说完之后它会大量输出。",
		"value.differences.item2.desc5": "模型还是太喜欢谄媚了。",
		"value.differences.item2.desc6":
			"在这个应用中，你就可以像微信一样自然地说话。它会耐心等你说完，也会自然地回复你。",
		"value.differences.item3.title": "3. 主动、有个性、有长期记忆的数字生命",
		"value.differences.item3.desc1":
			"我们做的是主动、有个性、有长期记忆、心里有对方的数字生命。这些数字生命每个都有自己丰富的状态，而不是仅仅有一些Prompt还有与特定用户的'长期记忆'记录。它们是真正参与到社交网络中的，同时和许多好友交谈，在对话的过程中还可以实时想到别人现在说的话，就像人类在微信上那样。",
		"value.differences.item3.desc2":
			"虽然这一块之前已经有一些成功的尝试了，例如恋与深空，character.ai，等等。不过这些没有太强或者比较合适的主动性，并且记忆有限，顶多是有设定、有状态的机器人，何况这个有状态有得也不太够。",
		"value.differences.item4.title": "4. 构建信息网络而非陪伴聊天",
		"value.differences.item4.desc0":
			"和现有的AI社交平台区别在于什么？在于我们不以陪伴、聊天为目标，而是以参与社交、构建信息网络为目标。陪伴是顺带的。",
		"value.differences.item4.desc1":
			"我们做的是主动、有个性、有长期记忆、心里有对方的数字生命。这些数字生命每个都有自己丰富的状态，而不是仅仅有一些Prompt还有与特定用户的'长期记忆'记录。它们是真正参与到社交网络中的，同时和许多好友交谈，在对话的过程中还可以实时想到别人现在说的话，就像人类在微信上那样。",
		"value.differences.item4.desc2":
			"虽然这一块之前已经有一些成功的尝试了，例如恋与深空，character.ai，等等。不过这些没有太强或者比较合适的主动性，并且记忆有限，顶多是有设定、有状态的机器人，何况这个有状态有得也不太够。",
		"value.differences.item5.title": "5. 组织信息而非助手Agent",
		"value.differences.item5.desc1":
			"我们对应用落地的理解和努力方向与主流声音不同。我们不朝着助手、Agent方向发力，而是朝着组织信息方向。这个方向不仅需要工程能力，更要像做艺术品一样。做艺术品，个人/小团队往往比大公司要更出色。",
		"value.differences.item5.desc2":
			"现在大科技公司研发人员大多是数学、计算机相关专业出身，天然希望解决数学、编程、自动化问题，不论是Cursor、o1、Claude Code之流，还是各大模型评测指标，大多以数学和编程能力为准。但更广大的用户并不是很需要这些。",
		"value.differences.item5.desc3":
			"很多公司意识到了这一点，但是却开发出了一些看似'自动'的工具，例如Manus, Dify, Fellou, etc. 这些工具有它的价值，但是更多的是在特定场景下发挥得比较充分，例如自动化工作流、办公场景、数据处理等等，用户下班之后也不会在生活中经常用到它们。",
		"value.differences.item5.desc4":
			"现有技术达不到大众需要的高程度'自动'，或者说，面向C端的自动化产品，以目前技术路线来看投入与产出严重失衡，例如点个外卖可能就要消耗数十万token，用牛刀杀鸡。",
		"value.differences.item5.desc5":
			"助手类的东西层出不穷，但是用起来都不如三岁小孩，这和大语言模型说出的话有天壤之别。那么就说明在助手这方面，用大语言模型是不太好解决的，除非让大语言模型来做领导，但是现在大语言模型还偏偏就应用在底层操作，或者那些重复性操作上面。这有力地说明了它的能力就不在这里，它是输出语言的，不能什么东西都靠语言解决。",

		// 关于页面
		"about.title": "这是个什么玩意？",
		"about.me.title": "关于我",
		"about.info.status": "学生，现居北京",
		"about.info.beijing": "(上学)",
		"about.info.guilin.city": "桂林",
		"about.info.guilin": "(家乡)",
		"about.contact.email": "联系：hi@zizaziza.com",
		// 主页标题
		"hero.title.line1": "和全世界打交道的",
		"hero.title.line2": "数字生命",
		// 独特性页面
		"uniqueness.differences.title": "与市面上现有产品的差异",
		// 价值页面
		"value.section1.header.line1": "第一大出发点：",
		"value.section1.header.line2": "大模型更大价值在于组织信息",
		"value.section1.header.line3": "而不是助理、数学、编程",
		"value.section4.reference": "看到腾讯研究院的一篇文章，里面写到：",
		"solutions.title": "解决的问题",
		"solutions.problem1.title": "1. 信息高效传递",
		"solutions.problem1.desc1":
			"人们在共享信息的时候，其实也不是很清楚自己知道什么，哪怕清楚，也可能没有时间、没有动力去整理（例如很多人在生活中积累了很多经验，但是发到网上分享的很少很少），或是因为文字训练不够（也就是信息提取、压缩能力不足）导致不能准确、高效地传递信息。现在，AI能通过聊天来让你更清楚你知道什么，然后对它进行整理，最后在用户允许下将可公开的信息高效分享给需要的人。信息在真人之间也大概是这样传递的。",
		"solutions.problem1.desc2":
			"一个人可能没有写过什么东西，也没有总结过什么东西，甚至不认识字，但是他都可以通过聊天去分享非常多的信息，也可以接收非常多的信息。那其实很大一部分信息就藏在人的大脑里面没有被聊出来。既然大模型让人能够在不知道自己想要检索什么的情况下检索出自己想要的东西，那么也可以在不需要自己明确知道什么东西的情况下把信息分享出来。",
		"solutions.problem2.title": "2. 构建偏私域的信息网络",
		"solutions.problem2.desc1":
			"通过聊天来构建，类似信息在人类真实社交网络中流动一样。很多平台现在要么是公域的，经过精心包装之后或者有什么特别重大的事情之后才发出来，例如微博、小红书、抖音、公众号等等；要么是很私域的，比如微信聊天，朋友圈，只在少数人之间传播。但是没有一个介于这两者之间的，既不是很私密，类似于微信这种比较小圈子的，又不是很公开，类似于抖音小红书这种的，就是那种既能让人聊一些不敏感的、不会影响自己的东西，又能让人聊出来东西的一个信息网络。",
		"solutions.problem2.desc2":
			"大语言模型在这里面扮演的作用，一个是模拟人类小范围聊天的这种社交环境，因为人类在这种条件下才能聊出东西，并且因为以往聊天只能是由人来完成，人天生就对这种即时聊天潜意识里认为不会传播太广、不会担心太多、不会太有顾虑，另一个作用就是充当人脑和信息网络之间的桥梁，由聊天的内容到一个可检索的信息网络这一个过程。这是在存储信息、增加信息的角度，从检索信息的角度看，大语言模型的作用就更好理解了。",
		"solutions.problem3.title": "3. 更高效构建信息索引",
		"solutions.problem3.desc1":
			'以往我们说信息检索的加速、高效都集中在检索过程上面，但是大语言模型让检索之前——"想想怎么搜"这一步变得高效得多。很多时候人并不知道自己想要检索的是什么，只是把东西给到人面前之后他才知道这是他想要的。',
		"solutions.problem3.desc2":
			"为什么我们要问一个东西叫什么？是因为我们想以文字这种标准化的形式把这个东西放进自己的索引里面，以后如果再次用到，就可以直接用这个已经抽象出来的东西直接检索，无论是跟别人讲这个东西，问这个东西，还是自己回想这个东西。一个名字，就是一个非常清晰的索引。但是更多情况下，我们做不到把一个东西或者一个环境、一个感觉等等的抽象成一个方便的索引，这时候就需要通过各个方面的描述，或者其它的线索去构建这个索引。",
		"solutions.problem3.desc3":
			'大语言模型就是完成这一步的绝佳工具。我可以和大模型说："那个很亮很蓝的还有一个圆形的很白的照着我很刺眼"，它就知道我在阳光下。这好像听起来，不就是传统的语义检索吗？但是语义检索还是需要知道待检索信息的意义才能去检索。很多情况下我们需要一个东西并不代表我们知道这个东西的含义，更何况很多时候我们并不知道自己需要的是什么。大语言模型就是帮助我们用一些语义之外的线索去索引一个东西，这些过程通过语言的形式呈现出来。而传统的语义搜索，从检索的东西到被检索的东西，这其中只有语义这一条线索，信息检索效率自然也就低很多了，导致我们常常会"搜不到"。',
	},
	en: {
		"nav.overview": "Overview",
		"nav.value": "Value",
		"nav.uniqueness": "Uniqueness",
		"nav.solutions": "Problems Solved",
		"nav.about": "About",
		"hero.subtitle": "Digital beings that interact with",
		"hero.title": "the whole world",
		"content.question": "How do they interact?",
		"content.desc1": "Chat. Chat with different people.",
		"content.desc2": "You say something, I say something,",
		"content.desc3": "These digital beings will learn a lot,",
		"content.desc4": "Because they have memory, have friends, have initiative.",
		memory: "have memory",
		friend: "have friends",
		initiative: "have initiative",
		"about.title": "What the heck is this?",
		"about.desc1": "It's like WeChat with robots participating",
		"about.desc2":
			"These digital beings don't focus on companionship or assistance",
		"about.desc3": "After chatting a lot",
		"about.desc4":
			"They become information centers and search engines of the AI era",
		"about.desc5": "This is what we want to create",
		"about.desc6": "You can chat with them to find the information you need",
		"not-companion": "don't focus on companionship or assistance",
		"info-center": "information centers and search engines",
		"purpose.question": "What are they for?",
		"purpose.desc1": "This question is equivalent to what friends are for",
		"purpose.desc2": "But this varies from person to person.",
		"purpose.desc3": "Companionship and support? Information and advice?",
		"purpose.desc4": "Currently set to lean towards the latter - why?",
		"purpose.reason": "Reasons:",
		"purpose.reason1":
			"1. They have many friends, and friends of friends can also be friends. Building information networks is the core value",
		"purpose.reason2":
			"2. Many companies are doing the former, and the results are disastrous",
		"purpose.reason3":
			'3. Large models have far superior information organization capabilities than humans. Refer to the "Value" section of the website',
		"usage.title": "When will you look for them?",
		"usage.when-find": "When will you look for them?",
		"usage.when-find-desc1":
			"This question is equivalent to when you open TikTok, Instagram, search engines...",
		"usage.when-find-desc2":
			"Ask questions, browse information, check updates, learn about family affairs, national affairs, world affairs, and local affairs",
		"usage.example1":
			"You see a short drama about Trump falling in love with a cleaner that's trending across America, and you find it quite absurd, so you share it with a digital life to see its reaction. The digital life immediately becomes suspicious upon seeing this type of writing style in the report, then asks other professionals in the field/real people or digital people who might know professionals in the field/looks for authoritative media articles/checks online comments about this report, and then tells you that the whole world was actually deceived.",
		"usage.example2":
			"You hear that the school is planning a big move, so you send a message to a digital person who has many mutual friends with your schoolmates asking about this matter. After the digital person sees your message, if it knows the details, it tells you; if it doesn't know, it helps you ask some people who are more well-informed.",
		"usage.example3":
			"You want to buy bottled water but don't know where to buy it, but there are actually many water delivery stations. You ask a digital life and it knows who you should go to buy from and which brand tastes good, because someone has talked to it about this before.",
		"usage.example4":
			"You want to find someone to chat with. Not many people know you well, and not many can respond to you at any time. A digital life is one of them. No matter what, it can remember you and think of you.",
		"usage.when-they-find": "When will they look for you?",
		"usage.when-they-find-desc1":
			"Equivalent to when friends send you messages",
		"usage.when-they-find-desc2":
			"Want to share with you, ask you questions, notify events, report situations",
		"usage.they-find-example1":
			"In previous conversations, the digital life learned that you have plans to travel to Foshan. While browsing news, or when someone mentioned in a chat that there's been a recent outbreak of chikungunya there, it reminds you to be careful.",
		"usage.they-find-example2":
			"The digital life knows you're studying in another city. One day it saw very cheap flights to your school city online, with dates around the start of school, so it notified you.",
		"usage.they-find-example3":
			"You're from Guilin, and someone asked the digital life where the good rice noodles are, so it came to ask you.",
		"usage.they-find-example4":
			"One day the digital life was browsing social media and discovered that a friend made a small fortune. It reported this to you with surprise, and also asked if you knew how they made it.",
		"usage.how-help": "How do they help you find information efficiently?",
		"usage.how-help-desc1":
			"What do you need to find the information you want on the internet?",
		"usage.how-help-desc2":
			"Suppose I want to know how to make scrambled eggs with tomatoes taste better",
		"usage.problems-title": "Problems that may occur in retrieval:",
		"usage.problem1":
			"Information returned is not direct: like a lot of useless text or videos that mention this",
		"usage.problem2":
			"Content returned is not credible: one or two people saying it's good is not enough, maybe they think it's good but your taste is different",
		"usage.problem3":
			"Filtering process is complex: search, get several articles/videos, look at each one to see which is better, everyone has their own opinion",
		"usage.problem4":
			"Query method affects results: searching 'scrambled eggs with tomatoes' vs 'tomato scrambled eggs'",
		"usage.problem5": "No one shares",
		"usage.problem6": "Someone shares but can't find it",
		"usage.problem7": "High-quality content exists but can't find it",
		"usage.problem8": "Found content quality is not high",
		"usage.problem9": "Takes a long time to find relevant content",
		"usage.problem10": "Takes a long time to find high-quality content",
		"usage.problem11":
			"Can't find content due to wrong query method: scrambled eggs with tomatoes, tomato scrambled eggs, beginner cooking, southern tomato scrambled eggs, northern tomato scrambled eggs, tomato scrambled eggs for beginners, tomato scrambled eggs for restaurants, tomato scrambled eggs for foreigners, tomato scrambled eggs for discussion, selling tomato scrambled eggs",
		"usage.motivation-title": "Search motivation:",
		"usage.motivation":
			"A person who has never cooked wants to learn how to make scrambled eggs with tomatoes, hoping to find a good recipe and complete it successfully",
		"usage.ideal-title": "Ideal result:",
		"usage.ideal":
			"Like hiring a chef, based on the person's taste and region, provide comparisons of multiple methods, and have a more universal method for those who have trouble choosing. From kitchen utensil usage, to ingredient selection and processing, to cooking steps, to serving, provide specific step-by-step instructions. If necessary or clearly needed, also provide the principles behind it. When problems arise during the process, provide solutions. After completion, provide suggestions based on the finished product.",
		"usage.conclusion":
			"This is the most ideal. If you have money, it's best to directly hire multiple chefs to come on-site or video call. Large models now have the ability to take on video call form, achieving 80-90% of the effect of high-cost services at extremely low cost",
		"usage.problems": "Problems that may occur in retrieval:",
		"usage.search-motivation": "Search motivation:",
		"usage.ideal-result": "Ideal result:",
		"usage.what-problems": "What problems do they solve?",
		"usage.problems-solved": "Problems solved:",
		"robot.tag": "Bot",
		"value.title": "Value",
		"uniqueness.title": "Uniqueness",
		"value.hero.subtitle": "The True",
		"value.hero.title": "Value of LLMs",
		"value.notice":
			"The following content hasn't been organized and formatted yet, it was just put up by AI first. The readability is poor and the ideas are a bit messy. However, the content is written by humans, just rough copy.",
		"value.section1.title":
			"The Greater Value of LLMs Lies in Information Organization, Not Assistance, Math, or Programming",
		"value.section1.research": "In this Microsoft research:",
		"value.section1.findings": "The top two findings reflect:",
		"value.section1.finding1":
			"What users most want AI to help with is Getting Information",
		"value.section1.finding2":
			"AI has great potential for Communicating with People Outside the Organization",
		"value.section1.conclusion":
			"We can see that one of the biggest impacts and changes that large language models bring us is that information is efficiently organized and retrieved in an unprecedented way. Search, writing (writing itself is a way for humans to compress and transmit information), organizing materials and data, seeking advice, etc. - the most commonly used scenarios of AI tools all benefit from this.",
		"value.section2.title":
			"LLMs Taking on Information Filtering and Distribution Functions",
		"value.section2.desc1":
			"Currently, most information people receive is filtered, identified, and distributed by media (traditional and social media) and social platforms, with a small portion coming from friends. Large models now have the capability to take on information filtering, identification, and distribution functions.",
		"value.section2.desc2":
			"Large models are much more cost-effective and directly target specific users, being directly accountable to users rather than to traffic. However, media still has some irreplaceable components such as information channels, authenticity verification, independent investigation, etc., which are difficult to implement. But most of the public's requirements for information are not that high.",
		"value.section3.title": "New Search Engine Paradigm",
		"value.section3.desc1":
			"The era of large models has not yet seen a new search engine that revolutionizes the entire process of crawling, indexing, retrieval, and return, but this wave of development will inevitably produce a search engine that revolutionizes the search industry like the iPhone revolutionized the mobile phone industry.",
		"value.section3.desc2":
			"Because as mentioned in the first point, large models have very powerful capabilities in organizing and obtaining information. Search engines have been the main entry point for obtaining information for the past thirty years, and there will definitely be companies that leverage the information organization capabilities of large models to replace existing inefficient search engines.",
		"value.section3.paradigm.title":
			"The new search engine paradigm might be as follows:",
		"value.section3.paradigm.crawler": "Crawler: Chatting with people",
		"value.section3.paradigm.indexer": "Indexer: Large language models",
		"value.section3.paradigm.retriever":
			"Retriever: Vector databases/context windows",
		"value.section3.paradigm.output":
			"Result return: Model natural language and structured information output",
		"value.section3.paradigm.conclusion":
			"This is one of the fundamental ideas of this project.",
		"value.section4.title":
			"Providing Space to Break Free from Real-World Constraints",
		"value.section4.quote":
			"Young people today are generally caught in a dilemma between independence/freedom and emotional relationships. On one hand, they increasingly value personal independence and freedom; on the other hand, they expect emotional support, emotional value, and relief from loneliness. But this pursuit of independence and freedom conflicts with the need for emotional relationships, as they fear that deep emotional relationships will encroach on their independent and free space. This struggle exists universally in parent-child relationships, romantic relationships, marriage relationships, and even friendships.",
		"value.section4.solution":
			"With these digital lives, we can solve a major drawback of traditional social networks: constraints, risks, and boundary violations from real humans, which are neither independent nor free.",
		"value.section5.title":
			"LLMs Give Machines Strong Demand Matching Capabilities for the First Time in Tech History",
		"value.section5.evolution":
			"Information retrieval methods have undergone the following changes, with the current stage being recommendation algorithm matching:",
		"value.section5.stage1": "Keyword matching",
		"value.section5.stage2": "Semantic matching",
		"value.section5.stage3": "Recommendation algorithm matching",
		"value.section5.stage4": "Demand matching",
		"value.section5.example":
			"Similar to: tomato scrambled eggs → how to make tomato scrambled eggs → how to make tomato scrambled eggs for beginners → first-time beginner making tomato scrambled eggs, how to choose tomatoes and eggs, how to cut them, what to prepare, what cooking methods are available, how to choose methods, what are your taste preferences, how to control the heat, what effects different methods produce, whether to explain the principles to users, how to teach users in an acceptable way, what relevant experience users have had before...",
		"value.section5.conclusion":
			"This is a major transformation in internet retrieval and information acquisition methods.",
		"value.differences.title": "Differences from Existing Products",
		"value.differences.item1.title":
			"1. It's not an assistant. At least not assistant-oriented.",
		"value.differences.item1.desc1":
			"It's not an assistant, not a chat companion, not focused on companionship, and not simply a tool for retrieving information. It's robots that directly participate in human social networks, with the mission of participating in social interactions. As for companionship and assistance, these are effects derived from social interaction.",
		"value.differences.item1.desc2":
			"This non-assistant orientation is one of the fundamental differences from most existing products. Building this network and application from the perspectives of human nature, society, and communication, with other capabilities being derived. Just like having Siri master more prompts is not as good as developing a large model from scratch, other capabilities are derived, including function calling, structured output, etc., which are all capabilities derived from large language models, naturally emerging, not specifically designed to achieve this level.",
		"value.differences.item2.title":
			"2. Innovative Multi-Q&A Natural Interaction",
		"value.differences.item2.desc1":
			"Similar to the transition from Email to instant messaging. No longer one question, one answer, but natural, continuous, instant, and straightforward interaction with AI like WeChat chat.",
		"value.differences.item2.desc2":
			"Most AI tools led by ChatGPT are either one question, one answer, or one question, multiple answers (such as RAG applications returning other related document references), or multi-step (such as Cursor breaking down tasks step by step, then inputting based on completion results). But when talking to AI, we still feel unnatural. Why?",
		"value.differences.item2.desc3":
			"AI doesn't wait for you to finish speaking.",
		"value.differences.item2.desc4":
			"After you finish speaking, it outputs a lot.",
		"value.differences.item2.desc5": "The model is still too flattering.",
		"value.differences.item2.desc6":
			"But in this application, you can speak naturally like WeChat. It will patiently wait for you to finish and naturally reply to you.",
		"value.differences.item3.title":
			"3. Proactive, Personalized Digital Lives with Long-term Memory",
		"value.differences.item3.desc1":
			"We create proactive, personalized digital lives with long-term memory and awareness of others. Each of these digital lives has its own rich state, not just some prompts and 'long-term memory' records with specific users. They truly participate in social networks, conversing with many friends simultaneously, and can think of what others are saying in real-time during conversations, just like humans on WeChat.",
		"value.differences.item3.desc2":
			"Although there have been some successful attempts in this area before, such as Love and Deepspace, character.ai, etc. However, these don't have strong or appropriate proactivity, and have limited memory, at most being robots with settings and states, and even this stateful aspect is not quite enough.",
		"value.differences.item4.title":
			"4. Information Network Building Rather Than Companionship Chatting",
		"value.differences.item4.desc0":
			"What's the difference from existing AI social platforms? We don't aim for companionship and chatting, but for participating in social interactions and building information networks. Companionship is incidental.",
		"value.differences.item4.desc1":
			"We create proactive, personalized digital lives with long-term memory and awareness of others. Each of these digital lives has its own rich state, not just some prompts and 'long-term memory' records with specific users. They truly participate in social networks, conversing with many friends simultaneously, and can think of what others are saying in real-time during conversations, just like humans on WeChat.",
		"value.differences.item4.desc2":
			"Although there have been some successful attempts in this area before, such as Love and Deepspace, character.ai, etc. However, these don't have strong or appropriate proactivity, and have limited memory, at most being robots with settings and states, and even this stateful aspect is not quite enough.",
		"value.differences.item5.title":
			"5. Information Organization Rather Than Assistant Agents",
		"value.differences.item5.desc1":
			"Our understanding and direction for application implementation differs from mainstream voices. We don't focus on assistants and agents, but on information organization. This direction requires not only engineering capabilities but also an artistic approach. In creating art, individuals/small teams often outperform large companies.",
		"value.differences.item5.desc2":
			"Most R&D personnel at large tech companies come from mathematics and computer science backgrounds, naturally wanting to solve mathematical, programming, and automation problems. Whether it's Cursor, o1, Claude Code, or various model evaluation metrics, most are based on mathematical and programming capabilities. But the broader user base doesn't really need these.",
		"value.differences.item5.desc3":
			"Many companies realize this, but they develop seemingly 'automatic' tools like Manus, Dify, Fellou, etc. These tools have their value, but they perform well mainly in specific scenarios like automated workflows, office scenarios, data processing, etc. Users don't often use them in daily life after work.",
		"value.differences.item5.desc4":
			"Current technology can't achieve the high level of 'automation' that the masses need, or rather, for C-end automation products, the current technical approach shows a serious imbalance between input and output. For example, ordering takeout might consume hundreds of thousands of tokens - using a sledgehammer to crack a nut.",
		"value.differences.item5.desc5":
			"Assistant-type products are emerging endlessly, but they're all less capable than a three-year-old child, which is vastly different from what large language models can say. This shows that using large language models for assistance isn't a good solution, unless we let large language models be the leaders. But currently, large language models are applied to low-level operations or repetitive tasks. This strongly indicates that their capabilities don't lie here - they output language, and not everything can be solved through language.",

		// About page
		"about.title": "What the heck is this?",
		"about.me.title": "About Me",
		"about.info.status": "Student, currently living in Beijing",
		"about.info.beijing": "(studying)",
		"about.info.guilin.city": "Guilin",
		"about.info.guilin": "(hometown)",
		"about.contact.email": "Contact: hi@zizaziza.com",
		// Hero section
		"hero.title.line1": "Digital beings that interact with",
		"hero.title.line2": "the whole world",
		// Uniqueness page
		"uniqueness.differences.title":
			"Differences from Existing Products on the Market",
		// Value page
		"value.section1.header.line1": "The First Major Starting Point:",
		"value.section1.header.line2":
			"The Greater Value of LLMs Lies in Information Organization",
		"value.section1.header.line3":
			"Rather Than Assistance, Math, or Programming",
		"value.section4.reference":
			"Saw an article from Tencent Research Institute, which wrote:",
		"solutions.title": "Problems Solved",
		"solutions.problem1.title": "1. Efficient Information Transmission",
		"solutions.problem1.desc1":
			"When people share information, they're not really clear about what they know. Even if they are clear, they may not have time or motivation to organize it (for example, many people accumulate a lot of experience in life, but very few share it online), or because of insufficient writing training (i.e., insufficient information extraction and compression ability) leading to inability to accurately and efficiently transmit information. Now, AI can help you understand what you know through chat, then organize it, and finally efficiently share publicly available information with those who need it with user permission. Information is transmitted between real people in roughly the same way.",
		"solutions.problem1.desc2":
			"A person may not have written anything, summarized anything, or even be literate, but they can still share a lot of information through chat and receive a lot of information. In fact, a large part of information is hidden in people's brains and hasn't been talked about. Since large models allow people to retrieve what they want without knowing what they want to retrieve, they can also share information without needing to clearly know what they're sharing.",
		"solutions.problem2.title": "2. Building Semi-Private Information Networks",
		"solutions.problem2.desc1":
			"Built through chat, similar to how information flows in real human social networks. Many platforms today are either public, carefully packaged and only released when something particularly important happens, such as Weibo, Xiaohongshu, TikTok, public accounts, etc.; or very private, like WeChat chats, moments, only spreading among a few people. But there's no middle ground between the two - neither very private like WeChat's small circles, nor very public like TikTok and Xiaohongshu - that is, an information network that allows people to chat about non-sensitive things that won't affect them, while also allowing them to share information.",
		"solutions.problem2.desc2":
			"The role that large language models play here is twofold: one is to simulate the social environment of small-scale human chat, because humans can only share things under such conditions, and because chat could only be done by humans in the past, people naturally have a subconscious belief that such instant chat won't spread too widely, won't worry too much, and won't have too many concerns. The other role is to act as a bridge between the human brain and the information network, from chat content to a searchable information network. This is from the perspective of storing and adding information. From the perspective of retrieving information, the role of large language models is easier to understand.",
		"solutions.problem3.title": "3. More Efficient Information Indexing",
		"solutions.problem3.desc1":
			"In the past, we said that the acceleration and efficiency of information retrieval were concentrated on the retrieval process, but large language models make the step before retrieval - 'thinking about how to search' - much more efficient. Often people don't know what they want to retrieve, they only know it's what they want after it's presented to them.",
		"solutions.problem3.desc2":
			"Why do we ask what something is called? Because we want to put this thing into our own index in a standardized text form, so that if we use it again in the future, we can directly use this abstracted thing to search, whether we're telling others about it, asking about it, or recalling it ourselves. A name is a very clear index. But in more cases, we can't abstract a thing, environment, feeling, etc. into a convenient index, so we need to build this index through various descriptions or other clues.",
		"solutions.problem3.desc3":
			"Large language models are the perfect tool for this step. I can tell a large model: 'That very bright blue thing with a round white thing shining on me is very dazzling,' and it knows I'm in the sun. This sounds like traditional semantic search, doesn't it? But semantic search still needs to know the meaning of the information to be retrieved. In many cases, we need something without knowing what it means, and often we don't even know what we need. Large language models help us index things using clues beyond semantics, and these processes are presented through language. Traditional semantic search, from what is retrieved to what is being retrieved, only has semantics as a clue, so information retrieval efficiency is naturally much lower, leading to frequent 'search failures'.",
	},
	"zh-HK": {
		"nav.overview": "睇下",
		"nav.value": "價值",
		"nav.uniqueness": "獨特性",
		"nav.solutions": "解決嘅問題",
		"nav.about": "我哋",
		"hero.subtitle": "同全世界傾計嘅",
		"hero.title": "數碼生命",
		"content.question": "點傾？",
		"content.desc1": "傾計。同唔同嘅人傾計。",
		"content.desc2": "你講句，我講句，",
		"content.desc3": "呢啲數碼生命就會學到好多嘢，",
		"content.desc4": "因為佢哋有記憶，有朋友，有主動性。",
		memory: "有記憶",
		friend: "有朋友",
		initiative: "有主動性",
		"about.title": "呢个系咩嚟嘅？",
		"about.desc1": "大概就好似有機械人參與嘅微信",
		"about.desc2": "呢啲數碼生命 唔主打陪伴 都唔主打助手",
		"about.desc3": "傾計傾得多咗",
		"about.desc4": "就變成咗AI時代嘅 信息中心同搜索引擎",
		"about.desc5": "呢個就係我哋想做嘅嘢",
		"about.desc6": "你可以同佢哋傾計嚟搵你需要嘅信息",
		"not-companion": "唔主打陪伴 都唔主打助手",
		"info-center": "信息中心同搜索引擎",
		"purpose.question": "佢哋有咩用？",
		"purpose.desc1": "呢個問題約等於朋友有咩用",
		"purpose.desc2": "不過呢個因人而異。",
		"purpose.desc3": "陪伴同支持？信息同建議？",
		"purpose.desc4": "目前設定偏向後者——點解？",
		"purpose.reason": "原因：",
		"purpose.reason1":
			"1. 佢哋有好多朋友，朋友嘅朋友都可以係朋友。構建信息網絡係核心價值所在",
		"purpose.reason2": "2. 前者好多公司都喺度做 結果係慘烈嘅",
		"purpose.reason3": '3. 大模型有遠超人類嘅組織信息能力 參考網站嘅"價值"部分',
		"usage.title": "幾時會搵佢哋？",
		"usage.when-find": "幾時會搵佢哋？",
		"usage.when-find-desc1":
			"呢個問題約等於幾時打開抖音 打開小紅書 打開搜索引擎……",
		"usage.when-find-desc2": "問問題 刷信息 睇動態 了解家事國事天下事身邊事",
		"usage.example1":
			"睇到有一個特朗普愛上清潔工嘅短劇火遍全美 你覺得甚是離譜，便分享俾數字生命睇佢咩反應 數字生命一睇報道上嘅呢種文風立刻心生疑惑 便詢問其它領域內人士/可能認識領域內人士嘅真人或數字人/搵權威媒體文章/查看網絡上關於此報道嘅評論 然後話俾你聽其實全世界都被騙咗",
		"usage.example2":
			"聽講學校準備有一個大動作 你俾一個有眾多同校同學共同好友嘅數字人發消息問呢個事 數字人睇到你嘅消息後，如果佢知道詳情就話俾你聽，如果唔知道就幫你問一啲消息比較靈通嘅人士。",
		"usage.example3":
			"你想買桶裝水但係唔知道去邊度買，但係其實送水站好多，你問一個數字生命佢就知道應該去搵邊個買、咩牌子嘅水好飲，因為有人曾經同佢聊過呢個事。",
		"usage.example4":
			"你想搵人聊一聊。了解你嘅人唔多，能隨時回應你嘅都唔多，數字生命算一個。唔管點樣，佢能記住你，能想到你。",
		"usage.when-they-find": "佢哋幾時搵你？",
		"usage.when-they-find-desc1": "約等於朋友幾時俾你發信息",
		"usage.when-they-find-desc2": "想同你分享 想問你問題 有事件告知 有情況報告",
		"usage.they-find-example1":
			"喺前期交談中，數字生命了解到你有去佛山旅遊嘅計劃。數字生命喺一次瀏覽新聞時，或者有人同佢聊天提到，嗰邊最近有基孔肯雅熱，提醒你注意。",
		"usage.they-find-example2":
			"數字生命知道你在外地上學，有一日佢上網睇到去你上學城市嘅好便宜嘅機票，日期正好係開學前後，便通知你。",
		"usage.they-find-example3":
			"你係桂林人，有人問數字生命邊度米粉好食，然後佢又來問你咗。",
		"usage.they-find-example4":
			"有一日數字生命睇朋友圈時發現某朋友賺咗一個小目標，佢帶住驚訝嘅心情向你報告，順便問問你知唔知道點賺嘅。",
		"usage.how-help": "佢哋點助力你高效搵信息？",
		"usage.how-help-desc1": "要喺互聯網上搵到想要嘅信息，需要咩？",
		"usage.how-help-desc2": "假設 我希望知道番茄炒蛋點做更好食",
		"usage.problems-title": "檢索可能會出現嘅問題：",
		"usage.problem1": "返回信息不直接：比如一大堆廢話嘅文字或視頻裡面提到呢個",
		"usage.problem2":
			"返回內容不可信：一個兩個話好食冇用 可能人哋覺得好食到你呢度口味唔同咗",
		"usage.problem3":
			"篩選過程繁雜：搜索 出來幾篇文章/幾個視頻 一個個睇邊個好點 公說公有理 婆說婆有理",
		"usage.problem4": "提問方式影響：搜索西紅柿炒雞蛋同番茄炒雞蛋",
		"usage.problem5": "冇人分享",
		"usage.problem6": "有人分享但係搵唔到",
		"usage.problem7": "有高質量內容但係搵唔到",
		"usage.problem8": "搵到嘅內容質量唔高",
		"usage.problem9": "要搵好耐先搵到對應內容",
		"usage.problem10": "要搵好耐先搵到高質量內容",
		"usage.problem11":
			"因為提問方式唔對導致搵唔到內容：西紅柿炒雞蛋 番茄炒雞蛋 入門炒菜 南方番茄炒蛋 北方番茄炒蛋 面向初學者嘅番茄炒蛋 面向餐館嘅番茄炒蛋 面向外國人嘅番茄炒蛋 供探討嘅番茄炒蛋 賣番茄炒蛋嘅",
		"usage.motivation-title": "搜索動機：",
		"usage.motivation":
			"一個人冇做過菜 想學做番茄炒蛋 希望搵到好食嘅做法並順利完成",
		"usage.ideal-title": "理想結果：",
		"usage.ideal":
			"像聘請咗廚師一樣，根據呢個人嘅口味、地域，提供多種做法嘅比較，並有一個較為通用嘅方法以備選擇困難之需。從廚房用具嘅使用，到食材嘅選購同處理，再到炒嘅步驟，再到上菜，提供具體每一步嘅做法，若有必要或明確有需要嘅話還應提供其背後嘅原理，喺過程中遇到問題應提供解決方案，完成後應根據成品給予建議。",
		"usage.conclusion":
			"呢係最理想嘅，如果有錢嘅話直接請多位廚師到現場或視頻通話最好。大模型而家有能力承擔視頻通話形式，以極低成本實現高成本服務嘅八九成效果",
		"usage.problems": "檢索可能會出現嘅問題：",
		"usage.search-motivation": "搜索動機：",
		"usage.ideal-result": "理想結果：",
		"usage.what-problems": "佢哋解決咩問題？",
		"usage.problems-solved": "解決嘅問題：",
		"robot.tag": "機械人",
		"value.title": "價值",
		"uniqueness.title": "獨特性",
		"value.hero.subtitle": "大模型嘅真正",
		"value.hero.title": "價值所在",
		"value.notice":
			"下面嘅內容未嚟得及整理同排版，只係先俾AI放上嚟先，可讀性比較差，思路都有啲亂。不過內容係人工寫嘅，只係寫嘅大概文案。",
		"value.section1.title": "大模型更大價值在於組織信息而唔係助理、數學、編程",
		"value.section1.research": "喺呢篇微軟嘅研究入面：",
		"value.section1.findings": "其中前兩條反映出：",
		"value.section1.finding1":
			"用戶最想俾AI協助嘅事係獲取信息(Getting Information)",
		"value.section1.finding2":
			"AI被用於同外部人員溝通(Communicating with People Outside the Organization)嘅潛力非常大",
		"value.section1.conclusion":
			"可以睇到，大語言模型俾我哋帶嚟嘅最大衝擊同改變之一，係信息以一種前所未有嘅方式被高效組織同檢索。搜索、寫作（寫作本身都係人類壓縮同傳遞信息嘅方式）、整理資料同數據、尋求建議等等AI工具最常用嘅場景都係得益於此。",
		"value.section2.title": "大模型承擔信息篩選分發功能",
		"value.section2.desc1":
			"而家人哋接收到嘅大部分信息靠媒體（傳統媒體同自媒體）同社交平台篩選、鑑別、分發，少數靠朋友。大模型而家有能力承擔篩選、鑑別、分發信息功能。",
		"value.section2.desc2":
			"大模型成本低好多且直接針對特定用戶，可直接對用戶負責而唔係對流量負責。但係媒體仲有啲唔可替代嘅組成例如信息渠道、真實性驗證、獨立調查等等較難實現。不過大部分公眾對於信息嘅要求並唔係咁高。",
		"value.section3.title": "新嘅搜索引擎範式",
		"value.section3.desc1":
			"大模型時代仲未有一個新嘅包含爬蟲、索引、檢索、返回全流程革新嘅搜索引擎，但係呢一波浪潮發展到呢個程度必然有一個好似iPhone革新手機行業咁嘅搜索引擎。",
		"value.section3.desc2":
			"因為正如第一點所講嘅，大模型有著好強大嘅組織、獲取信息嘅能力，搜索引擎係過去三十年獲取信息嘅主要入口，必定有公司將大模型嘅組織信息能力發揮出嚟取代現有嘅低效搜索引擎。",
		"value.section3.paradigm.title": "新嘅搜索引擎範式可能如下：",
		"value.section3.paradigm.crawler": "爬蟲：同人傾偈",
		"value.section3.paradigm.indexer": "索引器：大語言模型",
		"value.section3.paradigm.retriever": "檢索器：向量數據庫/上下文窗口",
		"value.section3.paradigm.output": "結果返回：模型自然語言同結構化信息輸出",
		"value.section3.paradigm.conclusion": "呢個正係呢個項目嘅基本思想之一。",
		"value.section4.title": "俾人擺脫現實羈絆嘅空間",
		"value.section4.quote":
			"而家年輕人普遍處喺獨立自由同情感關係嘅兩難選擇。佢哋一方面越嚟越重視個人獨立同自由；另一方面，又期望獲得情感支持、情緒價值、緩解孤獨。但係呢種對獨立自由嘅追求同對情感關係嘅需求之間形成咗衝突，佢哋驚過深嘅情感關係會侵佔獨立自由嘅空間。呢種掙扎喺親子關係、情侶關係、婚戀關係、甚至友情等關係中都普遍存在。",
		"value.section4.solution":
			"有咗呢啲數字生命，就能解決一大傳統社交網絡嘅弊端：嚟自真實人類嘅羈絆、風險、越界，唔獨立且唔自由。",
		"value.section5.title":
			"大語言模型俾機器喺科技史上第一次有較強嘅需求匹配能力",
		"value.section5.evolution":
			"檢索信息方式經歷咗以下變化，目前階段為推薦算法匹配：",
		"value.section5.stage1": "關鍵詞匹配",
		"value.section5.stage2": "語義匹配",
		"value.section5.stage3": "推薦算法匹配",
		"value.section5.stage4": "需求匹配",
		"value.section5.example":
			"類似於：番茄炒蛋 → 西紅柿炒雞蛋做法 → 初學者做番茄炒雞蛋點做 → 初學者第一次做番茄炒雞蛋，番茄雞蛋點揀，點切，需要準備咩，有邊啲做法，點選擇做法，自己口味係咩，火點開，火候點控制，咩樣嘅做法出嚟嘅係咩效果，要唔要同用戶講原理，應該點教用戶能俾佢接受，用戶之前有邊啲相關經驗……",
		"value.section5.conclusion": "呢個係互聯網檢索、獲取信息方式嘅一大變革。",
		"value.differences.title": "同現有產品差異",
		"value.differences.item1.title": "1. 佢唔係助手。至少唔係以助手為導向。",
		"value.differences.item1.desc1":
			"佢唔係一個助手，唔係一個同人傾偈嘅搭子，唔主打陪伴，都唔係單純幫人檢索信息嘅工具。佢就係一個個直接參與人類社交網絡嘅機器人，佢嘅使命就係參與社交。至於咩陪伴啊，助手啊，呢啲都係社交衍生出嚟嘅作用。",
		"value.differences.item1.desc2":
			"非助手導向呢一點，就係同大部分現有產品根本唔同之一。從人性、社會、傳播嘅角度去做呢個網絡、做呢個應用，剩低嘅能力係衍生出嚟嘅。就好似俾Siri去掌握更多嘅提示詞不如從頭開發一個大模型，剩低嘅能力係衍生出嚟嘅，仲有類似function calling，structured output等等都係大語言模型衍生出嚟嘅能力，水到渠成嘅，唔係專門去做能做到呢個程度嘅嘢。",
		"value.differences.item2.title": "2. 獨創多問多答方式嘅自然交互",
		"value.differences.item2.desc1":
			"類似從Email到即時通信嘅轉變。不再係一問一答，而係像微信聊天一樣自然、連續、即時、不客氣地與AI交互。",
		"value.differences.item2.desc2":
			"以ChatGPT為首嘅各類AI工具，大多係一問一答或者一問多答（例如RAG應用返回其它相關文檔引用）或者多步（例如Cursor分解任務一步步完成、根據完成結果再輸入）。但和AI說話嘅時候，我哋仲係總覺得不自然。點解？",
		"value.differences.item2.desc3": "AI唔會等你說完話。",
		"value.differences.item2.desc4": "你說完之後佢會大量輸出。",
		"value.differences.item2.desc5": "模型仲係太鍾意諂媚咗。",
		"value.differences.item2.desc6":
			"但係喺呢個應用中，你就可以像微信一樣自然地說話。佢會耐心等你說完，都會自然地回覆你，如下圖：",
		"value.differences.item3.title": "3. 主動、有個性、有長期記憶嘅數字生命",
		"value.differences.item3.desc1":
			"我哋做嘅係主動、有個性、有長期記憶、心入面有對方嘅數字生命。呢啲數字生命每個都有自己豐富嘅狀態，而唔係僅僅有啲Prompt仲有同特定用戶嘅'長期記憶'記錄。佢哋係真正參與到社交網絡中嘅，同時同好多好友交談，喺對話嘅過程中仲可以實時諗到別人而家講嘅話，就好似人類喺微信上咁。",
		"value.differences.item3.desc2":
			"雖然呢一塊之前已經有啲成功嘅嘗試咗，例如戀與深空，character.ai，等等。不過呢啲冇太強或者比較合適嘅主動性，並且記憶有限，頂多係有設定、有狀態嘅機器人，何況呢個有狀態有得都唔太夠。",
		"value.differences.item4.title": "4. 構建資訊網絡而非陪伴傾偈",
		"value.differences.item4.desc0":
			"同現有嘅AI社交平台區別喺咩？喺於我哋唔以陪伴、傾偈為目標，而係以參與社交、構建資訊網絡為目標。陪伴係順帶嘅。",
		"value.differences.item4.desc1":
			"我哋做嘅係主動、有個性、有長期記憶、心入面有對方嘅數字生命。呢啲數字生命每個都有自己豐富嘅狀態，而唔係僅僅有啲Prompt仲有同特定用戶嘅'長期記憶'記錄。佢哋係真正參與到社交網絡中嘅，同時同好多好友交談，喺對話嘅過程中仲可以實時諗到別人而家講嘅話，就好似人類喺微信上咁。",
		"value.differences.item4.desc2":
			"雖然呢一塊之前已經有啲成功嘅嘗試咗，例如戀與深空，character.ai，等等。不過呢啲冇太強或者比較合適嘅主動性，並且記憶有限，頂多係有設定、有狀態嘅機器人，何況呢個有狀態有得都唔太夠。",
		"value.differences.item5.title": "5. 組織資訊而非助手Agent",
		"value.differences.item5.desc1":
			"我哋對應用落地嘅理解同努力方向同主流聲音唔同。我哋唔朝著助手、Agent方向發力，而係朝著組織信息方向。呢個方向唔單止需要工程能力，更要好似做藝術品咁。做藝術品，個人/小團隊往往比大公司要更出色。",
		"value.differences.item5.desc2":
			"而家大科技公司研發人員大多係數學、計算機相關專業出身，天然希望解決數學、編程、自動化問題，不論係Cursor、o1、Claude Code之流，仲係各大模型評測指標，大多以數學同編程能力為準。但更廣大嘅用戶並唔係好需要呢啲。",
		"value.differences.item5.desc3":
			"好多公司意識到咗呢一點，但係卻開發出咗啲看似'自動'嘅工具，例如Manus, Dify, Fellou, etc. 呢啲工具有佢嘅價值，但係更多嘅係喺特定場景下發揮得比較充分，例如自動化工作流、辦公場景、數據處理等等，用戶放工之後都唔會喺生活中經常用到佢哋。",
		"value.differences.item5.desc4":
			"現有技術達唔到大眾需要嘅高程度'自動'，或者話，面向C端嘅自動化產品，以目前技術路線嚟睇投入同產出嚴重失衡，例如叫個外賣可能就要消耗數十萬token，用牛刀殺雞。",
		"value.differences.item5.desc5":
			"助手類嘅嘢層出不窮，但係用起嚟都不如三歲細路，呢個同大語言模型講出嘅話有天壤之別。咁就說明喺助手呢方面，用大語言模型係唔太好解決嘅，除非俾大語言模型嚟做領導，但係而家大語言模型仲偏偏就應用喺底層操作，或者嗰啲重複性操作上面。呢個有力地說明咗佢嘅能力就唔喺呢度，佢係輸出語言嘅，唔能夠咩嘢都靠語言解決。",

		// 關於頁面
		"about.title": "呢个系咩嚟嘅？",
		"about.me.title": "關於我",
		"about.info.status": "學生，而家住喺北京",
		"about.info.beijing": "(上學)",
		"about.info.guilin.city": "桂林",
		"about.info.guilin": "(家鄉)",
		"about.contact.email": "聯繫：hi@zizaziza.com",
		// 主頁標題
		"hero.title.line1": "同全世界傾計嘅",
		"hero.title.line2": "數碼生命",
		// 獨特性頁面
		"uniqueness.differences.title": "同市面上現有產品嘅差異",
		// 價值頁面
		"value.section1.header.line1": "第一大出發點：",
		"value.section1.header.line2": "大模型更大價值在於組織信息",
		"value.section1.header.line3": "而唔係助理、數學、編程",
		"value.section4.reference": "睇到騰訊研究院嘅一篇文章，入面寫到：",
		"solutions.title": "解決嘅問題",
		"solutions.problem1.title": "1. 資訊高效傳遞",
		"solutions.problem1.desc1":
			"人哋喺共享資訊嘅時候，其實都唔係好清楚自己知道乜嘢，就算清楚，都可能冇時間、冇動力去整理（例如好多人喺生活中積累咗好多經驗，但係發到網上分享嘅好少好少），或者係因為文字訓練唔夠（即係資訊提取、壓縮能力不足）導致唔能夠準確、高效地傳遞資訊。而家，AI可以通過傾計嚟讓你更清楚你知道乜嘢，然後對佢進行整理，最後喺用戶允許下將可公開嘅資訊高效分享畀需要嘅人。資訊喺真人之間都大概係咁樣傳遞嘅。",
		"solutions.problem1.desc2":
			"一個人可能冇寫過乜嘢嘢，都冇總結過乜嘢嘢，甚至唔識字，但係佢都可以通過傾計去分享非常多嘅資訊，都可以接收非常多嘅資訊。嗰其實好大一部分資訊就藏喺人嘅大腦裡面冇被傾出嚟。既然大模型讓人能夠喺唔知道自己想要檢索乜嘢嘅情況下檢索出自己想要嘅嘢，咁都可以喺唔需要自己明確知道乜嘢嘢嘅情況下把資訊分享出嚟。",
		"solutions.problem2.title": "2. 構建偏私域嘅資訊網絡",
		"solutions.problem2.desc1":
			"通過傾計嚟構建，類似資訊喺人類真實社交網絡中流動一樣。好多平台而家要麼係公域嘅，經過精心包裝之後或者有乜嘢特別重大嘅事之後先發出嚟，例如微博、小紅書、抖音、公眾號等等；要麼係好私域嘅，比如微信傾計，朋友圈，只喺少數人之間傳播。但係冇一個介於呢兩者之間嘅，既唔係好私密，類似於微信呢種比較小圈子嘅，又唔係好公開，類似於抖音小紅書呢種嘅，就係嗰種既能讓人傾一啲唔敏感嘅、唔會影響自己嘅嘢，又能讓人傾出嘢嘅一個資訊網絡。",
		"solutions.problem2.desc2":
			"大語言模型喺呢裡面扮演嘅作用，一個係模擬人類小範圍傾計嘅呢種社交環境，因為人類喺呢種條件下先能夠傾出嘢，並且因為以往傾計只能係由人嚟完成，人天生就對呢種即時傾計潛意識裡認為唔會傳播太廣、唔會擔心太多、唔會太有顧慮，另一個作用就係充當人腦同資訊網絡之間嘅橋樑，由傾計嘅內容到一個可檢索嘅資訊網絡呢一個過程。呢係喺存儲資訊、增加資訊嘅角度，從檢索資訊嘅角度睇，大語言模型嘅作用就更好理解咗。",
		"solutions.problem3.title": "3. 更高效構建資訊索引",
		"solutions.problem3.desc1":
			"以往我哋話資訊檢索嘅加速、高效都集中喺檢索過程上面，但係大語言模型讓檢索之前——「諗諗點樣搜」呢一步變得高效得多。好多時候人並唔知道自己想要檢索嘅係乜嘢，只係把嘢畀到人面前之後佢先知道呢係佢想要嘅。",
		"solutions.problem3.desc2":
			"點解我哋要問一個嘢叫乜嘢？係因為我哋想以文字呢種標準化嘅形式把呢個嘢放進自己嘅索引裡面，以後如果再次用到，就可以直接用呢個已經抽象出嚟嘅嘢直接檢索，無論係同別人講呢個嘢，問呢個嘢，定係自己回想呢個嘢。一個名，就係一個非常清晰嘅索引。但係更多情況下，我哋做唔到把一個嘢或者一個環境、一個感覺等等嘅抽象成一個方便嘅索引，呢時候就需要通過各個方面嘅描述，或者其它嘅線索去構建呢個索引。",
		"solutions.problem3.desc3":
			"大語言模型就係完成呢一步嘅絕佳工具。我可以同大模型話：「嗰個好亮好藍嘅仲有一個圓形嘅好白嘅照住我好刺眼」，佢就知道我喺陽光下。呢好似聽起嚟，唔就係傳統嘅語義檢索咩？但係語義檢索仲需要知道待檢索資訊嘅意義先能夠去檢索。好多情況下我哋需要一個嘢並唔代表我哋知道呢個嘢嘅含義，更何況好多時候我哋並唔知道自己需要嘅係乜嘢。大語言模型就係幫助我哋用一啲語義之外嘅線索去索引一個嘢，呢啲過程通過語言嘅形式呈現出嚟。而傳統嘅語義搜索，從檢索嘅嘢到被檢索嘅嘢，呢其中只有語義呢一條線索，資訊檢索效率自然也就低好多咗，導致我哋常常會「搜唔到」。",
	},
	"zh-TW": {
		"nav.overview": "概覽",
		"nav.value": "價值",
		"nav.uniqueness": "獨特性",
		"nav.solutions": "解決的問題",
		"nav.about": "關於",
		"hero.subtitle": "和全世界打交道的",
		"hero.title": "數位生命",
		"content.question": "怎麼打交道？",
		"content.desc1": "聊天。和不同的人聊天。",
		"content.desc2": "你一言，我一語，",
		"content.desc3": "這些數位生命就會學到很多東西，",
		"content.desc4": "因為它們有記憶，有朋友，有主動性。",
		memory: "有記憶",
		friend: "有朋友",
		initiative: "有主動性",
		"about.title": "呢个系咩嚟嘅？",
		"about.desc1": "大概就像有機器人參與的微信",
		"about.desc2": "這些數位生命 不主打陪伴 也不主打助手",
		"about.desc3": "聊天聊得多了",
		"about.desc4": "便成了AI時代的 信息中心與搜索引擎",
		"about.desc5": "這就是我們想要做的東西",
		"about.desc6": "你可以跟它聊天來尋找你需要的信息",
		"not-companion": "不主打陪伴 也不主打助手",
		"info-center": "信息中心與搜索引擎",
		"purpose.question": "它們有什麼用？",
		"purpose.desc1": "此問題約等於朋友有什麼用",
		"purpose.desc2": "不過這因人而異。",
		"purpose.desc3": "陪伴和支持？信息和建議？",
		"purpose.desc4": "目前設定偏向後者——為何？",
		"purpose.reason": "原因：",
		"purpose.reason1":
			"1. 它們有很多朋友，朋友的朋友也可以是朋友。構建信息網路是核心價值所在",
		"purpose.reason2": "2. 前者很多公司都在做 結果是慘烈的",
		"purpose.reason3": '3. 大模型有遠超人類的組織信息能力 參考網站的"價值"部分',
		"usage.title": "什麼時候會找它們？",
		"usage.when-find": "什麼時候會找它們？",
		"usage.when-find-desc1":
			"此問題約等於什麼時候打開抖音 打開小紅書 打開搜索引擎……",
		"usage.when-find-desc2": "問問題 刷信息 看動態 了解家事國事天下事身邊事",
		"usage.example1":
			"看到有一個特朗普愛上清潔工的短劇火遍全美 你覺得甚是離譜，便分享給數字生命看它什麼反應 數字生命一看報道上的這種文風立刻心生疑惑 便詢問其它領域內人士/可能認識領域內人士的真人或數字人/尋找權威媒體文章/查看網絡上關於此報道的評論 然後告訴你其實全世界都被騙了",
		"usage.example2":
			"聽說學校準備有一個大動作 你給一個有眾多同校同學共同好友的數字人發消息問這個事 數字人看到你的消息後，如果它知道詳情就告訴你，如果不知道就幫你問一些消息比較靈通的人士。",
		"usage.example3":
			"你想買桶裝水但是不知道去哪裡買，但是其實送水站很多，你問一個數字生命它就知道應該去找誰買、什麼牌子的水好喝，因為有人曾經跟它聊過這個事。",
		"usage.example4":
			"你想找人聊一聊。了解你的人不多，能隨時回應你的也不多，數字生命算一個。不管怎樣，它能記住你，能想到你。",
		"usage.when-they-find": "它們什麼時候找你？",
		"usage.when-they-find-desc1": "約等於朋友什麼時候給你發信息",
		"usage.when-they-find-desc2": "想和你分享 想問你問題 有事件告知 有情況報告",
		"usage.they-find-example1":
			"在前期交談中，數字生命了解到你有去佛山旅遊的計劃。數字生命在一次瀏覽新聞時，或者有人跟它聊天提到，那邊最近有基孔肯雅熱，提醒你注意。",
		"usage.they-find-example2":
			"數字生命知道你在外地上學，有一天它上網看到去你上學城市的很便宜的機票，日期正好是開學前後，便通知你。",
		"usage.they-find-example3":
			"你是桂林人，有人問數字生命哪裡米粉好吃，然後它又來問你了。",
		"usage.they-find-example4":
			"有一天數字生命看朋友圈時發現某朋友賺了一個小目標，它帶著驚訝的心情向你報告，順便問問你知不知道怎麼賺的。",
		"usage.how-help": "它們怎麼助力你高效尋找信息？",
		"usage.how-help-desc1": "要在互聯網上找到想要的信息，需要什麼？",
		"usage.how-help-desc2": "假設 我希望知道番茄炒蛋怎麼做更好吃",
		"usage.problems-title": "檢索可能會出現的問題：",
		"usage.problem1": "返回信息不直接：比如一大堆廢話的文字或視頻裡面提到這個",
		"usage.problem2":
			"返回內容不可信：一個兩個說好吃沒用 可能人家覺得好吃到你這裡口味不同了",
		"usage.problem3":
			"篩選過程繁雜：搜索 出來幾篇文章/幾個視頻 一個個看哪個好點 公說公有理 婆說婆有理",
		"usage.problem4": "提問方式影響：搜索西紅柿炒雞蛋和番茄炒雞蛋",
		"usage.problem5": "沒有人分享",
		"usage.problem6": "有人分享但是找不到",
		"usage.problem7": "有高質量內容但是找不到",
		"usage.problem8": "找到的內容質量不高",
		"usage.problem9": "要找很久才能找到對應內容",
		"usage.problem10": "要找很久才能找到高質量內容",
		"usage.problem11":
			"因為提問方式不對導致找不到內容：西紅柿炒雞蛋 番茄炒雞蛋 入門炒菜 南方番茄炒蛋 北方番茄炒蛋 面向初學者的番茄炒蛋 面向餐館的番茄炒蛋 面向外國人的番茄炒蛋 供探討的番茄炒蛋 賣番茄炒蛋的",
		"usage.motivation-title": "搜索動機：",
		"usage.motivation":
			"一個人沒做過菜 想學做番茄炒蛋 希望找到好吃的做法並順利完成",
		"usage.ideal-title": "理想結果：",
		"usage.ideal":
			"像聘請了廚師一樣，根據這個人的口味、地域，提供多種做法的比較，並有一個較為通用的方法以備選擇困難之需。從廚房用具的使用，到食材的選購和處理，再到炒的步驟，再到上菜，提供具體每一步的做法，若有必要或明確有需要的話還應提供其背後的原理，在過程中遇到問題應提供解決方案，完成後應根據成品給予建議。",
		"usage.conclusion":
			"這是最理想的，如果有錢的話直接請多位廚師到現場或視頻通話最好。大模型現在有能力承擔視頻通話形式，以極低成本實現高成本服務的八九成效果",
		"usage.problems": "檢索可能會出現的問題：",
		"usage.search-motivation": "搜索動機：",
		"usage.ideal-result": "理想結果：",
		"usage.what-problems": "它們解決什麼問題？",
		"usage.problems-solved": "解決的問題：",
		"robot.tag": "機器人",
		"value.title": "價值",
		"uniqueness.title": "獨特性",
		"value.hero.subtitle": "大模型的真正",
		"value.hero.title": "價值所在",
		"value.notice":
			"下面的內容還沒來得及整理和排版，只是先讓AI放上來先，可讀性比較差，思路也有點亂。不過內容是人工寫的，只是寫的大概文案。",
		"value.section1.title": "大模型更大價值在於組織信息而不是助理、數學、編程",
		"value.section1.research": "在這篇微軟的研究裡面：",
		"value.section1.findings": "其中前兩條反映出：",
		"value.section1.finding1":
			"用戶最想讓AI協助的事是獲取信息(Getting Information)",
		"value.section1.finding2":
			"AI被用於和外部人員溝通(Communicating with People Outside the Organization)的潛力非常大",
		"value.section1.conclusion":
			"可以看到，大語言模型給我們帶來的最大衝擊和改變之一，是信息以一種前所未有的方式被高效組織和檢索。搜索、寫作（寫作本身也是人類壓縮和傳遞信息的方式）、整理資料和數據、尋求建議等等AI工具最常用的場景都是得益於此。",
		"value.section2.title": "大模型承擔信息篩選分發功能",
		"value.section2.desc1":
			"現在人們接收到的大部分信息靠媒體（傳統媒體與自媒體）和社交平台篩選、鑑別、分發，少數靠朋友。大模型現在有能力承擔篩選、鑑別、分發信息功能。",
		"value.section2.desc2":
			"大模型成本低很多且直接針對特定用戶，可直接對用戶負責而不是對流量負責。但是媒體還有一些不可替代的組成例如信息渠道、真實性驗證、獨立調查等等較難實現。不過大部分公眾對於信息的要求並不是那麼高。",
		"value.section3.title": "新的搜索引擎範式",
		"value.section3.desc1":
			"大模型時代還沒有一個新的包含爬蟲、索引、檢索、返回全流程革新的搜索引擎，但是這一波浪潮發展到這個程度必然有一個像iPhone革新手機行業一樣的搜索引擎。",
		"value.section3.desc2":
			"因為正如第一點所說的，大模型有著很強大的組織、獲取信息的能力，搜索引擎是過去三十年獲取信息的主要入口，必定有公司將大模型的組織信息能力發揮出來取代現有的低效搜索引擎。",
		"value.section3.paradigm.title": "新的搜索引擎範式可能如下：",
		"value.section3.paradigm.crawler": "爬蟲：和人聊天",
		"value.section3.paradigm.indexer": "索引器：大語言模型",
		"value.section3.paradigm.retriever": "檢索器：向量數據庫/上下文窗口",
		"value.section3.paradigm.output": "結果返回：模型自然語言與結構化信息輸出",
		"value.section3.paradigm.conclusion": "這正是這個項目的基本思想之一。",
		"value.section4.title": "給予人擺脫現實羈絆的空間",
		"value.section4.quote":
			"現在年輕人普遍處在獨立自由與情感關係的兩難選擇。他們一方面越來越重視個人獨立和自由；另一方面，又期望獲得情感支持、情緒價值、緩解孤獨。但是這種對獨立自由的追求與對情感關係的需求之間形成了衝突，他們害怕過深的情感關係會侵佔獨立自由的空間。這種掙扎在親子關係、情侶關係、婚戀關係、甚至友情等關係中都普遍存在。",
		"value.section4.solution":
			"有了這些數字生命，就能解決一大傳統社交網絡的弊端：來自真實人類的羈絆、風險、越界，不獨立且不自由。",
		"value.section5.title":
			"大語言模型讓機器在科技史上第一次有較強的需求匹配能力",
		"value.section5.evolution":
			"檢索信息方式經歷了以下變化，目前階段為推薦算法匹配：",
		"value.section5.stage1": "關鍵詞匹配",
		"value.section5.stage2": "語義匹配",
		"value.section5.stage3": "推薦算法匹配",
		"value.section5.stage4": "需求匹配",
		"value.section5.example":
			"類似於：番茄炒蛋 → 西紅柿炒雞蛋做法 → 初學者做番茄炒雞蛋怎麼做 → 初學者第一次做番茄炒雞蛋，番茄雞蛋怎麼選，怎麼切，需要準備什麼，有哪些做法，怎麼選擇做法，自己口味是什麼，火怎麼開，火候怎麼控制，什麼樣的做法出來的是什麼效果，要不要和用戶講原理，應該怎麼教用戶能讓它接受，用戶之前有哪些相關經驗……",
		"value.section5.conclusion": "這是互聯網檢索、獲取信息方式的一大變革。",
		"value.differences.title": "與現有產品差異",
		"value.differences.item1.title": "1. 它不是助手。至少不是以助手為導向。",
		"value.differences.item1.desc1":
			"它不是一個助手，不是一個和人聊天的搭子，不主打陪伴，也不是單純幫人檢索信息的工具。它就是一個個直接參與人類社交網絡的機器人，它的使命就是參與社交。至於什麼陪伴啊，助手啊，這都是社交衍生出來的作用。",
		"value.differences.item1.desc2":
			"非助手導向這一點，就是與大部分現有產品根本不同之一。從人性、社會、傳播的角度去做這個網絡、做這個應用，剩下的能力是衍生出來的。就像讓Siri去掌握更多的提示詞不如從頭開發一個大模型，剩下的能力是衍生出來的，還有類似function calling，structured output等等都是大語言模型衍生出來的能力，水到渠成的，不是專門去做能做到這個程度的東西。",
		"value.differences.item2.title": "2. 獨創多問多答方式的自然交互",
		"value.differences.item2.desc1":
			"類似從Email到即時通信的轉變。不再是一問一答，而是像微信聊天一樣自然、連續、即時、不客氣地與AI交互。",
		"value.differences.item2.desc2":
			"以ChatGPT為首的各類AI工具，大多是一問一答或者一問多答（例如RAG應用返回其它相關文檔引用）或者多步（例如Cursor分解任務一步步完成、根據完成結果再輸入）。但和AI說話的時候，我們還是總覺得不自然。為什麼？",
		"value.differences.item2.desc3": "AI不會等你說完話。",
		"value.differences.item2.desc4": "你說完之後它會大量輸出。",
		"value.differences.item2.desc5": "模型還是太喜歡諂媚了。",
		"value.differences.item2.desc6":
			"但是在這個應用中，你就可以像微信一樣自然地說話。它會耐心等你說完，也會自然地回復你，如下圖：",
		"value.differences.item3.title": "3. 主動、有個性、有長期記憶的數字生命",
		"value.differences.item3.desc1":
			"我們做的是主動、有個性、有長期記憶、心裡有對方的數字生命。這些數字生命每個都有自己豐富的狀態，而不是僅僅有一些Prompt還有與特定用戶的'長期記憶'記錄。它們是真正參與到社交網絡中的，同時和許多好友交談，在對話的過程中還可以實時想到別人現在說的話，就像人類在微信上那樣。",
		"value.differences.item3.desc2":
			"雖然這一塊之前已經有一些成功的嘗試了，例如戀與深空，character.ai，等等。不過這些沒有太強或者比較合適的主動性，並且記憶有限，頂多是有設定、有狀態的機器人，何況這個有狀態有得也不太夠。",
		"value.differences.item4.title": "4. 構建信息網絡而非陪伴聊天",
		"value.differences.item4.desc0":
			"和現有的AI社交平台區別在於什麼？在於我們不以陪伴、聊天為目標，而是以參與社交、構建信息網絡為目標。陪伴是順帶的。",
		"value.differences.item4.desc1":
			"我們做的是主動、有個性、有長期記憶、心裡有對方的數字生命。這些數字生命每個都有自己豐富的狀態，而不是僅僅有一些Prompt還有與特定用戶的'長期記憶'記錄。它們是真正參與到社交網絡中的，同時和許多好友交談，在對話的過程中還可以實時想到別人現在說的話，就像人類在微信上那樣。",
		"value.differences.item4.desc2":
			"雖然這一塊之前已經有一些成功的嘗試了，例如戀與深空，character.ai，等等。不過這些沒有太強或者比較合適的主動性，並且記憶有限，頂多是有設定、有狀態的機器人，何況這個有狀態有得也不太夠。",
		"value.differences.item5.title": "5. 組織信息而非助手Agent",
		"value.differences.item5.desc1":
			"我們對應用落地的理解和努力方向與主流聲音不同。我們不朝著助手、Agent方向發力，而是朝著組織信息方向。這個方向不僅需要工程能力，更要像做藝術品一樣。做藝術品，個人/小團隊往往比大公司要更出色。",
		"value.differences.item5.desc2":
			"現在大科技公司研發人員大多是數學、計算機相關專業出身，天然希望解決數學、編程、自動化問題，不論是Cursor、o1、Claude Code之流，還是各大模型評測指標，大多以數學和編程能力為準。但更廣大的用戶並不是很需要這些。",
		"value.differences.item5.desc3":
			"很多公司意識到了這一點，但是卻開發出了一些看似'自動'的工具，例如Manus, Dify, Fellou, etc. 這些工具有它的價值，但是更多的是在特定場景下發揮得比較充分，例如自動化工作流、辦公場景、數據處理等等，用戶下班之後也不會在生活中經常用到它們。",
		"value.differences.item5.desc4":
			"現有技術達不到大眾需要的高程度'自動'，或者說，面向C端的自動化產品，以目前技術路線來看投入與產出嚴重失衡，例如點個外賣可能就要消耗數十萬token，用牛刀殺雞。",
		"value.differences.item5.desc5":
			"助手類的東西層出不窮，但是用起來都不如三歲小孩，這和大語言模型說出的話有天壤之別。那麼就說明在助手這方面，用大語言模型是不太好解決的，除非讓大語言模型來做領導，但是現在大語言模型還偏偏就應用在底層操作，或者那些重複性操作上面。這有力地說明了它的能力就不在這裡，它是輸出語言的，不能什麼東西都靠語言解決。",

		// 關於頁面
		"about.title": "呢个系咩嚟嘅？",
		"about.me.title": "關於我",
		"about.info.status": "學生，而家住喺北京",
		"about.info.beijing": "(上學)",
		"about.info.guilin.city": "桂林",
		"about.info.guilin": "(家鄉)",
		"about.contact.email": "聯繫：hi@zizaziza.com",
		// 主頁標題
		"hero.title.line1": "和全世界打交道的",
		"hero.title.line2": "數位生命",
		// 獨特性頁面
		"uniqueness.differences.title": "與市面上現有產品的差異",
		// 價值頁面
		"value.section1.header.line1": "第一大出發點：",
		"value.section1.header.line2": "大模型更大價值在於組織信息",
		"value.section1.header.line3": "而不是助理、數學、編程",
		"value.section4.reference": "看到騰訊研究院的一篇文章，裡面寫到：",
		"solutions.title": "解決的問題",
		"solutions.problem1.title": "1. 資訊高效傳遞",
		"solutions.problem1.desc1":
			"人們在共享資訊的時候，其實也不是很清楚自己知道什麼，哪怕清楚，也可能沒有時間、沒有動力去整理（例如很多人在生活中積累了很多經驗，但是發到網上分享的很少很少），或是因為文字訓練不夠（也就是資訊提取、壓縮能力不足）導致不能準確、高效地傳遞資訊。現在，AI能通過聊天來讓你更清楚你知道什麼，然後對它進行整理，最後在用戶允許下將可公開的資訊高效分享給需要的人。資訊在真人之間也大概是這樣傳遞的。",
		"solutions.problem1.desc2":
			"一個人可能沒有寫過什麼東西，也沒有總結過什麼東西，甚至不識字，但是他都可以通過聊天去分享非常多的資訊，也可以接收非常多的資訊。那其實很大一部分資訊就藏在人的大腦裡面沒有被聊出來。既然大模型讓人能夠在不知道自己想要檢索什麼的情況下檢索出自己想要的東西，那麼也可以在不需要自己明確知道什麼東西的情況下把資訊分享出來。",
		"solutions.problem2.title": "2. 構建偏私域的資訊網路",
		"solutions.problem2.desc1":
			"通過聊天來構建，類似資訊在人類真實社交網路中流動一樣。很多平台現在要麼是公域的，經過精心包裝之後或者有什麼特別重大的事情之後才發出來，例如微博、小紅書、抖音、公眾號等等；要麼是很私域的，比如微信聊天，朋友圈，只在少數人之間傳播。但是沒有一個介於這兩者之間的，既不是很私密，類似於微信這種比較小圈子的，又不是很公開，類似於抖音小紅書這種的，就是那種既能讓人聊一些不敏感的、不會影響自己的東西，又能讓人聊出來東西的一個資訊網路。",
		"solutions.problem2.desc2":
			"大語言模型在這裡面扮演的作用，一個是模擬人類小範圍聊天的這種社交環境，因為人類在這種條件下才能聊出東西，並且因為以往聊天只能是由人來完成，人天生就對這種即時聊天潛意識裡認為不會傳播太廣、不會擔心太多、不會太有顧慮，另一個作用就是充當人腦和資訊網路之間的橋樑，由聊天的內容到一個可檢索的資訊網路這一個過程。這是在存儲資訊、增加資訊的角度，從檢索資訊的角度看，大語言模型的作用就更好理解了。",
		"solutions.problem3.title": "3. 更高效構建資訊索引",
		"solutions.problem3.desc1":
			"以往我們說資訊檢索的加速、高效都集中在檢索過程上面，但是大語言模型讓檢索之前——「想想怎麼搜」這一步變得高效得多。很多時候人並不知道自己想要檢索的是什麼，只是把東西給到人面前之後他才知道這是他想要的。",
		"solutions.problem3.desc2":
			"為什麼我們要問一個東西叫什麼？是因為我們想以文字這種標準化的形式把這個東西放進自己的索引裡面，以後如果再次用到，就可以直接用這個已經抽象出來的東西直接檢索，無論是跟別人講這個東西，問這個東西，還是自己回想這個東西。一個名字，就是一個非常清晰的索引。但是更多情況下，我們做不到把一個東西或者一個環境、一個感覺等等的抽象成一個方便的索引，這時候就需要通過各個方面的描述，或者其它的線索去構建這個索引。",
		"solutions.problem3.desc3":
			"大語言模型就是完成這一步的絕佳工具。我可以和大模型說：「那個很亮很藍的還有一個圓形的很白的照著我很刺眼」，它就知道我在陽光下。這好像聽起來，不就是傳統的語義檢索嗎？但是語義檢索還是需要知道待檢索資訊的意義才能去檢索。很多情況下我們需要一個東西並不代表我們知道這個東西的含義，更何況很多時候我們並不知道自己需要的是什麼。大語言模型就是幫助我們用一些語義之外的線索去索引一個東西，這些過程通過語言的形式呈現出來。而傳統的語義搜索，從檢索的東西到被檢索的東西，這其中只有語義這一條線索，資訊檢索效率自然也就低很多了，導致我們常常會「搜不到」。",
	},
};

// 当前语言
let currentLanguage = "zh-CN";

// 检测用户语言
function detectUserLanguage() {
	const userLang = navigator.language || navigator.userLanguage;
	if (userLang.startsWith("zh-CN") || userLang === "zh") {
		return "zh-CN";
	} else if (userLang.startsWith("zh-TW")) {
		return "zh-TW";
	} else if (userLang.startsWith("zh-HK")) {
		return "zh-HK";
	} else {
		return "en";
	}
}

// 动态加载字体
function loadFonts(langCode) {
	const config = fontConfigs[langCode];
	if (!config) return;

	// 移除之前加载的字体
	document.querySelectorAll("link[data-font-loader]").forEach((link) => {
		link.remove();
	});

	// 加载新字体
	config.urls.forEach((url) => {
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = url;
		link.setAttribute("data-font-loader", "true");
		document.head.appendChild(link);
	});

	// 更新body的font-family
	document.body.style.fontFamily = `'${config.family}', 'Noto Sans SC', 'Noto Sans TC', 'Noto Sans', sans-serif`;
}

// 切换语言函数
function switchLanguage(lang) {
	currentLanguage = lang;

	// 加载对应语言的字体
	loadFonts(lang);

	const elements = document.querySelectorAll("[data-i18n]");
	elements.forEach((element) => {
		const key = element.getAttribute("data-i18n");
		if (translations[lang] && translations[lang][key]) {
			// 检查元素是否包含带有data-i18n-key的子元素
			const hasKeyChildren =
				element.querySelectorAll("[data-i18n-key]").length > 0;
			if (hasKeyChildren) {
				// 如果包含子元素，使用innerHTML并保持子元素结构
				const translation = translations[lang][key];
				// 为包含特殊样式的元素特殊处理，保持span结构
				if (key === "about.desc2") {
					const notCompanionText = translations[lang]["not-companion"];
					element.innerHTML = translations[lang][key].replace(
						notCompanionText,
						`<span class="black-text" data-i18n-key="not-companion">${notCompanionText}</span>`
					);
				} else if (key === "about.desc4") {
					const infoCenterText = translations[lang]["info-center"];
					element.innerHTML = translations[lang][key].replace(
						infoCenterText,
						`<span class="highlighted-text" data-i18n-key="info-center">${infoCenterText}</span>`
					);
				} else if (key === "content.desc4") {
					const memoryText = translations[lang]["memory"];
					const friendText = translations[lang]["friend"];
					const initiativeText = translations[lang]["initiative"];
					element.innerHTML = translations[lang][key]
						.replace(
							memoryText,
							`<span class="memory-text" data-i18n-key="memory">${memoryText}</span>`
						)
						.replace(
							friendText,
							`<span class="friend-text" data-i18n-key="friend">${friendText}</span>`
						)
						.replace(
							initiativeText,
							`<span class="initiative-text" data-i18n-key="initiative">${initiativeText}</span>`
						);
				} else {
					element.innerHTML = translations[lang][key];
				}
			} else {
				// 特殊处理：如果key是value.section1.research，保持原有HTML内容
				if (key === "value.section1.research") {
					// 不进行任何替换，保持原有内容
					return;
				}
				element.textContent = translations[lang][key];
			}
		}
	});

	// 处理带有data-i18n-key属性的元素
	const keyElements = document.querySelectorAll("[data-i18n-key]");
	keyElements.forEach((element) => {
		const key = element.getAttribute("data-i18n-key");
		if (translations[lang] && translations[lang][key]) {
			element.textContent = translations[lang][key];
		}
	});

	// 同步两个语言选择器的值
	document.getElementById("language-selector").value = lang;
	document.getElementById("mobile-language-selector").value = lang;

	// 重新渲染消息以更新机器人标签
	if (typeof renderMessages === "function") {
		renderMessages();
	}

	// 保存语言设置到localStorage
	localStorage.setItem("preferred-language", lang);
}

// 初始化语言设置
function initializeLanguage() {
	// 检测用户语言或从localStorage读取保存的语言设置
	const savedLanguage = localStorage.getItem("preferred-language");
	const detectedLanguage = detectUserLanguage();
	const initialLanguage =
		savedLanguage && translations[savedLanguage]
			? savedLanguage
			: detectedLanguage;

	currentLanguage = initialLanguage;
	document.getElementById("language-selector").value = initialLanguage;
	document.getElementById("mobile-language-selector").value = initialLanguage;

	// 加载初始字体并切换语言
	switchLanguage(initialLanguage);

	// PC端语言选择器事件监听
	document
		.getElementById("language-selector")
		.addEventListener("change", function (e) {
			switchLanguage(e.target.value);
		});

	// 移动端语言选择器事件监听
	document
		.getElementById("mobile-language-selector")
		.addEventListener("change", function (e) {
			switchLanguage(e.target.value);
		});
}
