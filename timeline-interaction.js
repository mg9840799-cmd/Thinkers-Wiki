// 时间轴交互功能脚本

// 定义各个时间点的详细内容
const timelineData = {
    // 认知革命时间轴
    skinner: {
        title: "1956：旧帝国最后的辉煌",
        subtitle: "行为主义的绝唱",
        content: `
            <p class="text-sm mb-2"><strong>人物/事件：</strong>B.F. 斯金纳（B.F. Skinner）</p>
            <p class="text-sm mb-2"><strong>角色与定位：</strong>行为主义皇帝。在达特茅斯会议（人工智能元年）上，他展示了行为主义的强大解释力，认为人类所有复杂行为，包括语言，都只是对外部环境刺激的"强化-反应"结果。人类的心智是一个无法也无需探究的"黑箱"。</p>
            <p class="text-sm"><strong>关键文：</strong>即将出版的《言语行为》（Verbal Behavior），被视为行为主义统一语言学的野心之作。</p>
        `
    },
    chomsky: {
        title: "1959：革命的第一枪",
        subtitle: "诺姆·乔姆斯基的致命批判",
        content: `
            <p class="text-sm mb-2"><strong>人物/事件：</strong>诺姆·乔姆斯基（Noam Chomsky）</p>
            <p class="text-sm mb-2"><strong>角色与定位：</strong>革命的刺客。年仅31岁的乔姆斯基发表了对斯金纳《言语行为》的毁灭性评论。他精准地指出了行为主义的致命弱点：无法解释儿童语言的"生成性"（能说出从未听过的句子）和"刺激的贫困"（儿童接触的语料有限，却能掌握复杂语法）。</p>
            <p class="text-sm"><strong>关键文：</strong>《评B.F.斯金纳的〈言语行为〉》。这篇评论被誉为"20世纪最具影响力的学术评论之一"，直接宣告了行为主义在语言学领域的死刑。</p>
        `
    },
    neisser: {
        title: "1967：新王国的法典",
        subtitle: "认知心理学的正式诞生",
        content: `
            <p class="text-sm mb-2"><strong>人物/事件：</strong>乌尔里克·奈塞尔（Ulric Neisser）</p>
            <p class="text-sm mb-2"><strong>角色与定位：</strong>新秩序的书记官。他出版了第一本以《认知心理学》命名的教科书，正式为这场革命命名。书中系统整合了乔姆斯基的语言学、米勒的记忆研究、布鲁纳的思维研究，宣告一个新学科的诞生。</p>
            <p class="text-sm"><strong>关键文：</strong>《认知心理学》。这本书标志着"认知革命"的胜利，心理学的焦点从外在的"行为"彻底转向内在的"心智过程"（如注意、记忆、决策）。</p>
        `
    },
    "newell-simon": {
        title: "1972：帝国的黄昏",
        subtitle: "认知科学与人工智能的结盟",
        content: `
            <p class="text-sm mb-2"><strong>人物/事件：</strong>艾伦·纽厄尔 & 赫伯特·西蒙</p>
            <p class="text-sm mb-2"><strong>角色与定位：</strong>新联盟的缔造者。他们因在"人类问题解决"研究中的贡献获得图灵奖，其"信息处理模型"成为认知科学的核心范式。这标志着认知心理学与新兴的人工智能、计算机科学彻底结盟。</p>
            <p class="text-sm"><strong>结果：</strong>行为主义的统治被终结。"心智"重返科学殿堂，但这一次，它带着计算机的隐喻归来，开启了至今仍在延续的"认知科学时代"。</p>
        `
    },
    // 结构主义内战时间轴
    "levi-strauss": {
        title: "1958：帝国的奠基",
        subtitle: "列维-斯特劳斯的结构人类学",
        content: `
            <p class="text-sm mb-2"><strong>人物/事件：</strong>克洛德·列维-斯特劳斯（Claude Lévi-Strauss）</p>
            <p class="text-sm mb-2"><strong>角色与定位：</strong>结构主义的皇帝。他出版《结构人类学》，正式将索绪尔的语言学模型应用到人类学。他论证了所有人类文化（如神话、婚姻规则）的表象之下，都隐藏着一套不变的、二元对立的深层"结构"。</p>
            <p class="text-sm"><strong>核心思想：</strong>不是人通过神话思考，而是神话通过人自我思考。"人"只是结构的载体。</p>
        `
    },
    barthes: {
        title: "1964-1966：最亲密的战友，最深刻的背叛",
        subtitle: "罗兰·巴特的转向",
        content: `
            <p class="text-sm mb-2"><strong>人物/事件：</strong>罗兰·巴特（Roland Barthes）</p>
            <p class="text-sm mb-2"><strong>角色与定位：</strong>从元帅到叛将。巴特早期是结构主义的忠实推广者（《符号学原理》）。但很快，他发现纯粹的结构分析是冰冷和僵化的。他开始关注文本中的"快感"、"裂隙"和"意义的播撒"。</p>
            <p class="text-sm"><strong>决裂点：</strong>他逐渐从"找出文本的单一结构"转向"享受文本意义的无限可能性"。这为他日后著名的"作者之死"宣言埋下了伏笔，也标志着他被"踢出"了严格的结构主义阵营。</p>
        `
    },
    "struct-rupture": {
        title: "1966：结构主义的终结",
        subtitle: "约翰·霍普金斯大学研讨会",
        content: `
            <p class="text-sm mb-2"><strong>关键事件：</strong>约翰·霍普金斯大学研讨会</p>
            <p class="text-sm mb-2"><strong>核心冲突：</strong>结构主义的"中心"与"在场"概念受到前所未有的挑战。德里达、福柯等新一代思想家开始质疑结构的稳定性和封闭性。</p>
            <p class="text-sm"><strong>历史意义：</strong>这一年被视为结构主义与后结构主义的分界点，标志着法国思想界的一次重大范式转换。</p>
        `
    },
    "lacan-derrida": {
        title: "1966：帝国的裂解与新大陆的发现",
        subtitle: "拉康与德里达的双重挑战",
        content: `
            <p class="text-sm mb-2"><strong>人物/事件：</strong>雅克·拉康（Jacques Lacan） & 雅克·德里达（Jacques Derrida）</p>
            <p class="text-sm mb-2"><strong>拉康的角色：</strong>神秘的盟友。他宣称"无意识的结构就像语言"，将结构主义引入精神分析，看似是盟友。但他强调的"欲望"、"缺失"和"无法言说的真实界"，为冰冷的结构注入了不安的动态因素。</p>
            <p class="text-sm"><strong>德里达的角色：</strong>帝国的终结者。在著名的约翰·霍普金斯大学研讨会上，德里达发表《结构、符号与游戏》，宣告了"中心"的终结。他指出，任何结构都存在一个无法被结构化的"游戏"空间。这篇演讲被视为"后结构主义"的开端。</p>
        `
    },
    "may-storm": {
        "title": "1967-1968：法兰克福到巴黎的街头回响",
        "subtitle": "思想论战与社会运动的共振",
        "content": `
            <p class="text-sm mb-2"><strong>事件：</strong>思想论战与社会运动的共振</p>
            <p class="text-sm mb-2"><strong>核心战场：</strong>结构主义的非历史性和去政治化倾向，使其无法回应1968年巴黎"五月风暴"等激烈的社会运动。学生们高呼"结构不上街！"</p>
            <p class="text-sm"><strong>结果：</strong>结构主义的冰封王座在理论的内部爆破和外部的现实冲击下彻底裂解。福柯的"权力/话语"、德里达的"解构"、德勒兹的"欲望机器"等后结构主义思想，正是在这片废墟上崛起的。它们继承了结构主义对"主体"的批判，但重新引入了历史、权力和欲望的动态维度。</p>
        `
    },
    // 危机神学内战时间轴
    "barth-1930": {
        "title": "1922-1930：统一战线",
        "subtitle": "卡尔·巴特的危机神学",
        "content": `
            <p class="text-sm mb-2"><strong>人物/事件：</strong>卡尔·巴特（Karl Barth）</p>
            <p class="text-sm mb-2"><strong>角色与定位：</strong>革命的先知。巴特《罗马书释义》第二版的出版，标志着"危机神学"的诞生。他宣告上帝是"全然他者"（Wholly Other），与人类世界存在"无限的质的区别"。人类无法通过理性、道德或历史进步来认识上帝，只能被动地等待上帝"从上至下"的启示。</p>
            <p class="text-sm"><strong>核心盟友：</strong>鲁道夫·布尔特曼（Rudolf Bultmann）、保罗·田立克（Paul Tillich）等人，共同反对将上帝"人化"的自由派神学。</p>
        `
    },
    "natural-theology": {
        "title": "1934：决裂的导火索",
        "subtitle": "自然神学之争",
        "content": `
            <p class="text-sm mb-2"><strong>人物/event：</strong>"自然神学"之争</p>
            <p class="text-sm mb-2"><strong>角色与定位：</strong>第一次路线斗争。神学家埃米尔·布鲁内尔试图为"自然神学"保留一点空间，认为人类理性中仍有认识上帝的"接触点"。巴特以一篇斩钉截铁的《不！》作为回应，彻底否定了在"上帝的启示"之外，人类有任何认识上帝的可能性。</p>
            <p class="text-sm"><strong>实质：</strong>这是"后门"之争的预演。巴特要焊死所有人类理性通向上帝的门窗，而其他人则开始寻找缝隙。</p>
        `
    },
    "bultmann-1941": {
        "title": "1941：布尔特曼的\"修正主义\"",
        "subtitle": "去神话化运动",
        "content": `
            <p class="text-sm mb-2"><strong>人物/事件：</strong>鲁道夫·布尔特曼</p>
            <p class="text-sm mb-2"><strong>角色与定位：</strong>现代主义的翻译官。他发起了"去神话化"（Demythologization）运动，主张《圣经》中神迹（如童贞女怀孕、死人复活）是古代世界观的"神话外壳"，现代人无法接受。必须剥去这层外壳，才能触及其包含的"存在主义内核"。</p>
            <p class="text-sm"><strong>巴特的反击：</strong>巴特认为这是对上帝启示的阉割，是向现代科学理性的投降，是用存在主义哲学取代上帝之道。这是"从内部攻破堡垒"。</p>
        `
    },
    "tillich-1946": {
        "title": "1946：田立克的\"第三条道路\"",
        "subtitle": "存在本身与终极关切",
        "content": `
            <p class="text-sm mb-2"><strong>人物/事件：</strong>保罗·田立克</p>
            <p class="text-sm mb-2"><strong>角色与定位：</strong>哲学的桥梁建造者。田立克拒绝巴特的"绝对隔绝"和布尔特曼的"剥离手术"。他认为上帝不是一个"存在者"，而是"存在本身"（Ground of Being）。所有宗教语言都是"象征"，而非字面事实。它们指向"终极关切"。</p>
            <p class="text-sm"><strong>结果：</strong>"危机神学"三巨头最终分道扬镳，形成了20世纪新教神学的三大流派：巴特的"新正统神学"（强调启示）、布尔特曼的"存在主义神学"（强调诠释）和田立克的"哲学神学"（强调象征）。这场内战定义了现代神学的基本版图。</p>
        `
    },
    // 非暴力互怼时间轴
    "camus-orwell": {
        "title": "1945-1946：盟友的起点",
        "subtitle": "加缪与奥威尔的共同反思",
        "content": `
            <p class="text-sm mb-2"><strong>人物/事件：</strong> 阿尔贝·加缪（Albert Camus） vs 乔治·奥威尔（George Orwell）</p>
            <p class="text-sm mb-2"><strong>角色与定位：</strong> 反思的开端。 奥威尔发表《我为何写作》，加缪则主编《战斗报》。两人都明确指出，战后的首要任务是警惕一切形式的极权主义谎言，尤其是来自左翼内部的。</p>
            <p class="text-sm"><strong>共同立场：</strong> 必须诚实地面对苏联的暴行，不能因为"反法西斯"的盟友身份就为其辩护。</p>
        `
    },
    "camus-albert": {
        "title": "1951：原则的绝对化",
        "subtitle": "加缪的反抗哲学",
        "content": `
            <p class="text-sm mb-2"><strong>人物/事件：</strong> 阿尔贝·加缪</p>
            <p class="text-sm mb-2"><strong>角色与定位：</strong> 反暴力的绝对主义者。 他出版《反抗者》，系统地提出：任何为了崇高目标而诉诸暴力的革命，其本身就包含了沦为新暴政的种子。他主张一种永恒的、非暴力的"反抗"，而非"革命"。</p>
            <p class="text-sm"><strong>关键论点：</strong> "我反抗，故我们存在。" 但这种反抗必须有节制，拒绝"为了历史终点而牺牲现在"的逻辑。这使他与萨特等支持革命的左派彻底决裂。</p>
        `
    },
    "russell": {
        "title": "1955：威胁的优先排序",
        "subtitle": "罗素的核裁军运动",
        "content": `
            <p class="text-sm mb-2"><strong>人物/事件：</strong> 伯特兰·罗素（Bertrand Russell）</p>
            <p class="text-sm mb-2"><strong>角色与定位：</strong> 核裁军的急先锋。 罗素与爱因斯坦共同发表《罗素-爱因斯坦宣言》，将全人类的生存置于意识形态争论之上。</p>
            <p class="text-sm"><strong>关键论点：</strong> 在核武器面前，"我们必须学会用一种新的方式思考"。与共产主义或资本主义的斗争相比，避免人类自我毁灭是压倒一切的优先事项。这在某种程度上要求对极权采取"缓和"而非"对抗"的策略。</p>
        `
    },
    "tripartite-split": {
        "title": "1958-1962：路线的决裂",
        "subtitle": "三方思想的最终分野",
        "content": `
            <p class="text-sm mb-2"><strong>人物/事件：</strong> 三方思想的最终分野</p>
            <p class="text-sm mb-2"><strong>加缪的立场：</strong> 坚守道德洁癖。反对一切暴力，包括阿尔及利亚独立战争中的暴力。在他看来，手段的肮脏必然污染目的的高尚。</p>
            <p class="text-sm mb-2"><strong>奥威尔的遗产：</strong> 反极权优先。他的追随者认为，加缪的立场在面对古拉格时显得天真，而罗素的立场则可能为了和平而绥靖暴政。首要任务永远是揭露和对抗极权。</p>
            <p class="text-sm"><strong>罗素的行动：</strong> 成立"核裁军运动"（CND），并因公民不服从而入狱。在他看来，加缪和奥威尔的争论在高尚但次要，因为如果核战爆发，一切道德和政治都将毫无意义。</p>
        `
    },
    // 精神分析时间轴
    "freud-1907": {
        "title": "1907：王国建立",
        "subtitle": "弗洛伊德与精神分析学派的崛起",
        "content": `
            <p class="text-sm mb-2"><strong>人物/事件：</strong> 西格蒙德·弗洛伊德（Sigmund Freud）</p>
            <p class="text-sm mb-2"><strong>角色与定位：</strong> 精神分析帝国的奠基人。弗洛伊德出版了《梦的解析》等一系列重要著作，并在1907年邀请卡尔·荣格加入他的团队，共同推动精神分析的发展。</p>
            <p class="text-sm"><strong>核心思想：</strong> 弗洛伊德提出了潜意识、本我、自我、超我的概念，以及俄狄浦斯情结等理论，为现代心理学奠定了重要基础。</p>
        `
    },
    "jung-rebellion": {
        "title": "1912：王储叛乱",
        "subtitle": "荣格与弗洛伊德的决裂",
        "content": `
            <p class="text-sm mb-2"><strong>人物/事件：</strong> 卡尔·荣格（Carl Jung）与弗洛伊德的分裂</p>
            <p class="text-sm mb-2"><strong>角色与定位：</strong> 精神分析帝国的分裂者。荣格因在"力比多"概念和宗教象征的解释上与弗洛伊德产生重大分歧，最终于1912年与弗洛伊德分道扬镳。</p>
            <p class="text-sm"><strong>决裂点：</strong> 荣格不认同弗洛伊德将性驱力视为心理活动唯一动力的观点，提出了更广泛的"集体无意识"概念，开创了分析心理学派。</p>
        `
    },
    "lacan-entrance": {
        "title": "1953：拉康登场",
        "subtitle": "雅克·拉康的结构主义转向",
        "content": `
            <p class="text-sm mb-2"><strong>人物/事件：</strong> 雅克·拉康（Jacques Lacan）</p>
            <p class="text-sm mb-2"><strong>角色与定位：</strong> 精神分析的革新者。拉康在1953年的"罗马演讲"中提出了"回到弗洛伊德"的口号，将结构语言学的概念引入精神分析，开创了精神分析的结构主义转向。</p>
            <p class="text-sm"><strong>核心主张：</strong> 拉康认为"无意识的结构像语言一样"，强调符号、能指与所指的关系在精神分析中的重要性，彻底改变了精神分析的理论和实践。</p>
        `
    },
    "lacan-ecrits": {
        "title": "1966：新王国法典",
        "subtitle": "《文集》出版与拉康学派的形成",
        "content": `
            <p class="text-sm mb-2"><strong>人物/事件：</strong> 拉康《文集》（Écrits）出版</p>
            <p class="text-sm mb-2"><strong>历史意义：</strong> 拉康的《文集》收集了他从1936年到1966年的重要论文，标志着拉康学派的正式形成。这部著作将精神分析、结构语言学、哲学和文学理论融为一体，影响深远。</p>
            <p class="text-sm"><strong>结果：</strong> 拉康的理论不仅在精神分析领域引发革命，还对结构主义、后结构主义、文学批评和文化研究产生了重大影响，成为20世纪最重要的思想成果之一。</p>
        `
    },
    // 现代人杂志时间轴
    "modern-1836": {
        "title": "1836：贵族的黄金时代",
        "subtitle": "为艺术，也为俄国",
        "content": `
            <p class="text-sm mb-2"><strong>事件：</strong> 普希金创办《现代人》，将其定位为俄国最高水平的文学季刊。</p>
            <p class="text-sm mb-2"><strong>核心理念：</strong> "文学的民族性与独立性"。此时的杂志是贵族知识分子的精神家园，追求的是艺术的纯粹性与思想的深刻性，旨在摆脱对西欧文学的模仿，发出俄国自己的声音。政治批判是含蓄的、沙龙式的。</p>
            <p class="text-sm"><strong>标志性人物：</strong> 普希金、果戈里。他们代表了杂志的创刊精神：艺术上追求完美，思想上关照现实，但与底层民众保持着优雅的距离。</p>
        `
    },
    "modern-1847": {
        "title": "1847：平民的\"自然派\"崛起",
        "subtitle": "我们都从《外套》下钻出来",
        "content": `
            <p class="text-sm mb-2"><strong>事件：</strong> 诗人涅克拉索夫与评论家别林斯基接手，将《现代人》改造为月刊，读者群开始向"杂阶层"知识分子倾斜。</p>
            <p class="text-sm mb-2"><strong>核心理念：</strong> "批判现实主义"与"自然派"。杂志的焦点从贵族生活转向了城市底层和"小人物"的命运。文学开始承担起"解剖社会"的功能。此时的共识是：文学必须诚实地揭露苦难。</p>
            <p class="text-sm"><strong>标志性人物：</strong> 屠格涅夫、早期的陀思妥耶夫斯基。他们是这个时代的中坚力量，以细腻的笔触描绘现实，充满了人道主义的同情。但他们的目标仍是"呈现"，而非"煽动"。</p>
        `
    },
    "modern-1855": {
        "title": "1855：激进派的夺权",
        "subtitle": "美，就是生活本身",
        "content": `
            <p class="text-sm mb-2"><strong>事件：</strong> 车尔尼雪夫斯基发表纲领性论文《艺术与现实的审美关系》。</p>
            <p class="text-sm mb-2"><strong>核心理念：</strong> "功利主义美学"。他石破天惊地提出："美就是生活"，"艺术源于现实，但必须低于现实"。这彻底颠覆了"为艺术而艺术"的传统。在他看来，文学的唯一价值，就是成为改造社会、推动革命的工具。</p>
            <p class="text-sm"><strong>标志性人物：</strong> 车尔尼雪夫斯基、杜勃罗留波夫。他们组成了强大的"激进派"核心，牢牢掌控了杂志的评论版，开始用"是否有利于人民"这把尺子来衡量一切文学作品。</p>
        `
    },
    "modern-1856-1860": {
        "title": "1856-1860：美学派的\"大出走\"",
        "subtitle": "我们不再是同志",
        "content": `
            <p class="text-sm mb-2"><strong>事件：</strong> 以屠格涅夫、托尔斯泰为首的"贵族作家"与车尔尼雪夫斯基的"激进派"爆发了公开论战并最终决裂。</p>
            <p class="text-sm mb-2"><strong>决裂的本质：</strong></p>
            <p class="text-sm mb-2">屠格涅夫方（美学派）：坚持认为文学有其独立的、永恒的艺术价值。将文学完全工具化，是对艺术的亵渎。他们可以同情革命，但绝不接受文学成为革命的喉舌。</p>
            <p class="text-sm mb-2">车尔尼雪夫斯基方（功利派）：认为在俄国残酷的现实面前，谈论纯粹的"美"是一种可耻的奢侈。任何不为革命服务的艺术，都是反动的。</p>
            <p class="text-sm"><strong>标志性事件：</strong> 屠格涅夫、托尔斯泰、德鲁日宁等人相继退出《现代人》，另立门户。杂志彻底完成了从"文学沙龙"到"革命党支部"的转变。</p>
        `
    },
    "modern-1866": {
        "title": "1866：帝国的封禁",
        "subtitle": "笔杆子最终输给了枪杆子",
        "content": `
            <p class="text-sm mb-2"><strong>事件：</strong> 在革命形势日益紧张的背景下，沙皇政府将《现代人》永久查封。</p>
            <p class="text-sm"><strong>历史回响：</strong> 《现代人》虽死，但它内部的分裂预示了整个俄国知识界的未来。车尔尼雪夫斯基的"功利主义"思想，通过《怎么办？》等作品，直接影响了包括列宁在内的整整一代革命者。杂志的内战，最终溢出纸面，成为了现实世界的历史。</p>
        `
    }
};

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取弹窗相关元素
    let modal = document.getElementById('timeline-modal');
    let modalContent = document.getElementById('modal-content');
    let closeModalBtn = document.getElementById('close-modal');
    
    // 如果弹窗不存在，创建一个统一的弹窗容器（现代杂志风格）
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'timeline-modal';
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 hidden items-center justify-center transition-opacity duration-300 ease-in-out';
        
        modal.innerHTML = `
            <div class="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4 transform transition-transform duration-300 ease-out scale-95 opacity-0" id="modal-inner">
                <div id="modal-content">
                    <!-- 弹窗内容将由JS填充 -->
                </div>
                <div class="mt-6 flex justify-end">
                    <button id="close-modal" class="px-4 py-2 bg-orange-100 text-orange-700 rounded-md hover:bg-orange-200 transition-colors font-medium shadow-sm">关闭</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // 更新弹窗元素引用
        modalContent = document.getElementById('modal-content');
        closeModalBtn = document.getElementById('close-modal');
        modalInner = document.getElementById('modal-inner');
    }
    
    // 关闭弹窗函数（带动画效果）
    function closeModalFunc() {
        // 添加退出动画
        if (modalInner) {
            modalInner.classList.remove('scale-100', 'opacity-100');
            modalInner.classList.add('scale-95', 'opacity-0');
        }
        
        // 延迟后隐藏弹窗
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }, 200);
    }
    
    // 添加关闭按钮事件
    closeModalBtn.addEventListener('click', closeModalFunc);
    
    // 点击弹窗外部关闭弹窗
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunc();
        }
    });
    
    // ESC键关闭弹窗
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModalFunc();
        }
    });
    
    // 获取所有时间轴项目
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // 为每个时间轴项目添加点击事件
    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            // 获取数据ID（支持data-person和data-event两种属性）
            let eventKey = this.getAttribute('data-event');
            const personId = this.getAttribute('data-person');
            
            // 确定使用哪个数据源
            let eventData = null;
            
            // 检查是否有直接匹配的eventKey
            if (eventKey) {
                // 首先检查直接匹配
                if (timelineData[eventKey]) {
                    eventData = timelineData[eventKey];
                } else {
                    // 尝试添加前缀以匹配可能的数据键名
                    const prefixes = ['freud-', 'jung-', 'lacan-', 'modern-'];
                    for (let prefix of prefixes) {
                        const prefixedKey = prefix + eventKey;
                        if (timelineData[prefixedKey]) {
                            eventData = timelineData[prefixedKey];
                            eventKey = prefixedKey;
                            break;
                        }
                    }
                    
                    // 特殊处理精神分析内战时间轴的特定键名
                    if (!eventData) {
                        const specialCases = {
                            '1912': 'jung-rebellion',
                            '1953': 'lacan-entrance',
                            '1966': 'lacan-ecrits'
                        };
                        if (specialCases[eventKey] && timelineData[specialCases[eventKey]]) {
                            eventData = timelineData[specialCases[eventKey]];
                            eventKey = specialCases[eventKey];
                        }
                    }
                }
            }
            
            // 如果eventKey没有匹配到，尝试使用personId
            if (!eventData && personId && timelineData[personId]) {
                eventData = timelineData[personId];
                eventKey = personId;
            }
            
            // 如果仍然没有找到数据，返回
            if (!eventData) {
                return;
            }
            
            // 设置弹窗内容，根据不同的谱系使用不同的颜色
            let factionColor = 'text-orange-600';
            let factionSubtitleColor = 'text-orange-500';
            
            // 获取父级元素确定谱系类型
            const parentDiv = this.closest('[data-faction]');
            if (parentDiv) {
                const faction = parentDiv.getAttribute('data-faction');
                switch(faction) {
                    case 'christian':
                        factionColor = 'text-green-600';
                        factionSubtitleColor = 'text-green-500';
                        break;
                    case 'rationalist':
                        factionColor = 'text-purple-600';
                        factionSubtitleColor = 'text-purple-500';
                        break;
                    case 'linguistics':
                        factionColor = 'text-indigo-600';
                        factionSubtitleColor = 'text-indigo-500';
                        break;
                    case 'psychology':
                        factionColor = 'text-blue-600';
                        factionSubtitleColor = 'text-blue-500';
                        break;
                    case 'nonviolent':
                        factionColor = 'text-amber-600';
                        factionSubtitleColor = 'text-amber-500';
                        break;
                    // 默认使用橙色（俄国文学谱系的颜色）
                    default:
                        factionColor = 'text-orange-600';
                        factionSubtitleColor = 'text-orange-500';
                }
            }
            
            // 填充弹窗内容
            modalContent.innerHTML = `
                <h3 class="text-xl font-bold ${factionColor} mb-2">${eventData.title}</h3>
                <p class="${factionSubtitleColor} italic text-sm mb-3">${eventData.subtitle || ''}</p>
                <div class="space-y-3 mt-4">
                    ${eventData.content}
                </div>
            `;
            
            // 显示弹窗并添加进入动画
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            
            // 触发重排以启用动画
            void modal.offsetWidth;
            
            // 添加进入动画
            if (modalInner) {
                modalInner.classList.remove('scale-95', 'opacity-0');
                modalInner.classList.add('scale-100', 'opacity-100');
            }
        });
    });
});