---
title: "Bitter Lesson, 端到端 Coding, 创作者经济的未来"
date: "2025-08-01"
draft: false
summary: "Bitter Lesson 在研究领域是正确的，但产品开发需要顺着模型的纹理，而非逆向而行。"
categories: ["Mindsets"]
slug: "bitter-lesson"
---


### 对 Bitter Lesson 的误读

在 AI 圈里，**“The Bitter Lesson” (苦涩的教训)** 已经成了一种口头禅。

这个由研究员 Rich Sutton 提出的观点是，试图将人类知识融入模型是一种短期的拐杖。历史表明，最大的进步来自于将海量计算应用于通用方法。

许多行业领袖现在都支持这一观点。他们认为，最纯粹的路径是让 LLM 自己解决问题。你的产品越是这样做，就被认为越“agentic”。

但我在构建产品时的经验却讲述了一个不同的故事。**The Bitter Lesson 在研究领域是正确的，但在产品侧，你需要辩证地看待它。**

### 原则：顺势而为，而非逆流而上

给 LLM 灌输太多外部知识可能是一场灾难。我称正确的做法为**顺毛驴理论**。

LLM 如同木材的纹理，有其自然的倾向。它已经拥有大量关于 coding 模式和 architecture 的先验知识。**如果你顺着它的知识体系（顺着毛驴的毛）来提要求，就能最大限度地发挥其效能，并最小化幻觉带来的损害。**

强迫 LLM 学习一个完全陌生的 architecture 是一定会失败的。它不仅表现糟糕，还会消耗模型有限的 context——这是它最宝贵的资源。我们衡量一个模型，不应只看其 context window 的大小，更要看它的 **"in-context capability"**：即它能可靠执行的逻辑复杂度。

正是在这一点上，对 Bitter Lesson 的教条式看法分崩离析了。最务实、最有效的工具，比如 **Base44**，之所以快速又可靠，恰恰因为它严重依赖预制模板，而 LLM 的工作只是“填空”。相比之下，更教条主义的路线——即完全依赖 LLM 从零开始生成一个生产级的应用——通常结果很糟糕，这也是今天许多 AI coding 产品的核心问题。

Base44 的方法有其代价——一旦用户请求超出其模板范围，产出质量就会急剧下降——但它证明了关键的一点。在产品开发中，**时间窗口最重要。** 做一个可能会被下一波模型浪潮淘汰的过渡性产品是完全可以接受的。**如果加入人类的 heuristics 能帮助你在当前的时间窗口内解决用户问题、创造商业价值，那它就是好的技术选择。** 技术是手段，不是目的。

### AI Coding 的演进：四个阶段

AI coding 的游戏正在四个阶段中展开，其中第二和第三阶段正在并行发生。

**1. AI-Assisted Coding**
这是最早的阶段，代表是早期 Cursor 等工具中的 tab 代码补全功能。

**2. AI Pair Coding**
这个阶段包含了更 agentic 的工具，如 Cursor Composer/ Windsurf Cascade。它最适合能获得巨大生产力提升的经验丰富的开发者，但你仍需了解底层原理才能有效使用它。这种体验就像是**手动挡汽车**的发明：你还需要学离合，甚至大概了解汽车的基本构造才可以开车，不过由于是很多人类第一次驾驶高等级交通工具，这里面的aha moment 感觉非常强，这也和现在很多人追求的驾驶感很像。

**3. Vibe Coding 1.0**
这个阶段以 Lovable、Bolt.new 等产品为代表，旨在帮助非开发者构建软件。它就像是**自动挡汽车**的发明，极大地降低了入门门槛，即便牺牲了一些精细的“驾驶感”。然而，它仍然需要用户巨大的热情和耐心。交互模式常常是“说一件事情做一件事情”，其使用者还远非大众市场，而是**AI 爱好者和略懂技术的专业人士**，比如设计师和产品经理。

这些工具大多还“只做前端”，并依赖于 Supabase 这样的平台。这意味着用户仍面临着陡峭的学习曲线：他们需要学习 prompting、database、CDN 和组件变量——这些概念 AI 很难替你猜好。继续用自动驾驶做类比，有点像自动档被发明出来。 开车的学习门槛被大幅降低了，虽然“精细驾驶感”有所丧失，但是这让很多由于专业能力学不会手动档的人开上了车。

最近有个产品非常惊艳，叫**Trickle AI**, 用Canvas的形式把网站开发需要的必备要素全部可视化出来 （比如database, assets, version control)， 在网站部署上也下了心思，做了SEO ， 也让视觉编辑（visual edits) 变得直觉了很多。我认为这很可能是vibe coding 1.0 目前达到的最好的交互效果，类似最顶级的自动挡车型，驾驶感，舒适度，仪表盘都拉满了

**关于 Vibe Coding 和网站未来的个人思考：** 稍微岔开一点话题， 现在大量的vibe coding 1.0 工具都在痴迷于卷前端网页生成和部署。我个人是不想牵扯到这个疯狂的竞争中来的。做好一个 UI 很难，因为视觉品味是主观的，AI 很难一次就让用户满意。一个完整、视觉效果好的网页需要巨大的工作量。比如更改卡片圆角、整体配色、增加顶部导航以及为网页增加移动端适配等等。

更重要的是，**在一个日益 agentic 的未来，我质疑网页是否还拥有过去20年的价值。** 过去20年，网站是信息和 GUI 的关键载体。但现在，agent 正在自动化信息检索和后端服务调用。信息正被 Deep Research 这样的产品覆盖，而 GUI 操作很可能会被 agent 的 computer-use 能力处理掉。我们已经看到 ChatGPT 改变了我们使用浏览器的方式。我担心我们正在创造一个未来，那里有大量的工具在制造大量的、只有 agent 会访问的网页。

**4. Fully Autonomous Coding** 这是我认为未来发展的方向，他并不会和前面的产品和市场冲突，而是会拓展到更广阔的受众范围和人群。 AI 可以以完全自主的形式，端到端地完成coding 任务，就像现在deep research 对于信息检索一样。 你只需要给一个需求，甚至都不需要描绘的非常详细， AI 会揣测你这个需求背后的想法和想实现的东西，完全端到端的搭建出来，直接可用，后续的修改也应聚焦于新功能开发，而不是视觉雕花或者修bug。 显然这还是一个未来的范式，像比如Devin 这样的公司正在跑到enterprise级的codebase里面去解决这样的问题。

不过，我们觉得这里可能有一些机会。端到端地构建一个*完整的 web app* 挑战巨大，因为它涉及 GUI、云部署、视觉调整和数据库，更不用说 token 成本。但如果我们**背叛 Bitter Lesson，采用一种预填充的、基于模板的方法呢？** 我们可以将 UI 限制在最简单、最核心的交互上：几个按钮、一个调用后端的自然语言对话框，或者一个带有预设 GUI 模板的简单 H5 应用。这恰好落在了当前 AI 能力的舒适区。当然这也一定有取舍，任何超出这样交互范围，需要复杂看板，fancy 视觉页面的生成一概做不了。不过至少我们可以尝试在小范围实现完全的端到端。这里的价值似乎已经足够大了。

它就像**Waymo 通过高精地图和 LiDAR 在仅旧金山市区实现全自动无人驾驶**：一个强大但有地理限制的解决方案。任何超出预设范围的东西都无法实现。也许两年后，一个“特斯拉级别”的产品会出现，将我们碾压过去。但在 AI 创业中，你不能指望一个持久的护城河。在绝对的智能面前，护城河是短暂的。**能做好一年的产品，就先做一年。** 不要作太多预测。

### 为什么完全自动化编程的普及不会扼杀专业市场

用拍照这个事情举例子。21世纪出生的现代人觉得手机打开，点开camera，点击拍摄，所见即所得似乎非常合理并且符合直觉，似乎摄像机天然就应该是这样的。但是摄像和成像这样的技术也是演进了无数年才到今日的毫秒级出片，速度快到你甚至都意识不到这里面有大量underlying work。

**一张手机照片背后的复杂流程：**
当你按下快门，一个多阶段的过程在毫秒内完成：

1. **光线捕捉:** 光线穿过镜头，聚焦后落在 `CMOS` 传感器上，将光子转化为原始数字信号。
2. **图像处理:** 图像信号处理器 (`ISP`) 为每个像素“补色”，降噪，校正白平衡，并融合多次曝光以实现 `HDR`。
3. **最终润色:** 处理器将颜色映射到 `sRGB` 空间，锐化边缘以增强清晰度，最后将一个 12MB 的数据流压缩成一个 2MB 的 `JPEG` 或 `HEIF` 文件。

这整个流程才是“按下快门即出片”体验背后的魔法。我仍记得以前摄影需要暗房来冲洗胶卷——一个漫长、繁琐且需要专业技能的过程。正是经过了多年的技术迭代，才实现了我们今天人人享有的拍照自由，并催生了像 Instagram 这样的新市场和产品。

但即使在今天，**智能手机摄影的便捷也并未消灭专业摄影师、** 爱好者或专业相机市场。当一项技术的成本和复杂性下降时，新的市场规模将变得超乎想象。智能手机将摄影市场扩大了百倍，但并未摧毁专业领域。

我相信软件行业也会如此。**在 AI 的加持下，终有一天，创造软件会感觉像我们今天用手机拍照一样简单、本能和理所当然。**

### 创作者经济的未来：从广告到 API

Agent 的崛起让我对创作者经济的未来深感担忧。许多创作者，比如Podcast 主播，目前依赖广告收入为生。但是AI的出现已经让很多人听播客的渠道变了，要么是AI 直接抓取博客内容做文字总结，要么是把一堆音频丢给NotebookLM 之类的产品然后生成一个更全面更符合用户个人口味，绝对无广的podcast。甚至在有些podcast 评论区已经能看到比如“没有AI总结内容，这期我不看了” 的评论。未来越来越多的信息，内容，和服务调用的入口会被Agent 取代，这是几乎一定会发生的事情。 那在这样的情况下，创作者经济该何去何从？

这是一个更大、不可避免的转变的一部分：**信息、内容和服务的入口正在从平台转向个人 agent。** 这将迫使广告业发生巨大变革，就像 `SEO` 正在适应 AI 搜索一样。过去那种在特定页面上捕获用户注意力的旧逻辑正在终结。未来，用户的注意力将被他们自己的个人 agent 所掌握。

对于创作者来说，最好的出路是**为自己的内容、功能或信息直接收费。** 他们可以将自己的服务作为 `API` 暴露出来，让 agent 调用，并按次收费。我认为这是一种比广告更理性、更可持续的模式。在生产力场景下，应用商店的“浏览-发现”模式将被 agent 主导的推荐和搜索所取代。娱乐和电商领域会更微妙，因为用户常常享受挑选过程本身。