---
title: "Compute Is the New Leverage (and Probably the Best One)"
date: 2025-08-08
draft: false
summary: "Rich consensus is no longer necessary as compute outperforms labor as a leverage"
categories: ["AI"]
featured: true
slug: "compute-leverage"
---

Naval Ravikant has talked about a hierarchy of leverage, and the oldest kind is labor, the people who work for you. Labor is powerful but messy. Managing people is hard because getting a group of people aligned is hard, and communication overhead grows faster than the team does, so managing labor depends on systems built for stability and consensus. In most parts of society (governments, large corporations, even social circles), being "contrarian and right" doesn't get you rewarded. More often it gets you into trouble.

Startups and investing are different. In these two fields, being "contrarian and right" is the source of outsized returns, and there aren't many places like that. You don't need rich consensus to buy a stock or start a company. In fact, once a consensus forms, the opportunity is often gone. This works because the main lever in these two fields has shifted from labor to capital and code. Code is a wonderful lever: write it once and it can run a million times at almost zero marginal cost, and it needs nobody's permission and scales easily.

This also explains why my best work has always been done alone or in very small teams. Rich consensus (that fragile, expensive agreement among many people) is a tax on every new idea. For years I thought this was just a personal quirk. Later I realized it's a core principle of how value is created.

Now technology is shifting the dominant form of leverage again, and rich consensus is starting to matter less. I believe we're in the early days of a new and even more powerful kind of leverage, and that is compute. In fields that are dense with information and can be automated, compute is becoming a more efficient and more scalable lever than labor, code, or capital. AI is what made this possible: orchestrating huge amounts of computing power used to be an expert-level engineering job, and now one person can do it. This shift will change how we build teams, design organizations, and distribute rewards.

## From Coordinating People to Orchestrating Compute

The core work of getting something built is changing. It used to be mostly about finding the right people and coordinating their efforts, along with their responsibilities, authority, and rewards. Now it's more and more about defining the problem clearly and directing compute to solve it. AI lets us "outsource" tasks to models and agents, and one person can turn an idea into a product, a piece of research, or a creative work with far less coordination between people.

I use a simple model to describe this. Treat the total work needed to reach a goal (Work) as a constant. It depends on the number of people, the compute those people can wield, and some external factors. Simplified, it can be written roughly as:

Work \= N × Cᵖ × f(Data, Clarity, Distribution)

Here N is the number of people (headcount). C is compute per person, the computing power one person can effectively direct and manage. p is the efficiency exponent of that compute: p = 1 means every unit of compute is fully productive, but in reality orchestration has overhead, so p is less than 1. f(...) is a multiplier for external constraints, such as whether you have good data, whether the problem is clear, and whether what you make can be distributed.

If Work is fixed, C is rising, and better tools make compute easier to manage (pushing p toward 1), then the optimal number of people, N, has to go down. This isn't an entirely new phenomenon. When cloud computing and CI/CD pipelines took off, they already proved this model on a smaller scale, and AI has increased the slope of the curve by an order of magnitude.

Of course, the model has its limits. When one person has more compute than they can manage, you hit "orchestration saturation," and efficiency (p) drops. The external factors (f) can also hold you back. Without good data, or without a clear problem, all the compute in the world just spins its wheels; and if you can't reach users, a product made with compute, however brilliant, won't get used.

Take software development. With AI coding assistants, the compute available to each engineer (C) is rising steadily. As the tools improve, a small team, or even a single developer, can produce the output (Work) that used to take a bigger team, and the number of people needed (N) is going down. Suppose, for the sake of argument, that a team's goal is to ship 10 new features a quarter. In the past, an eight-person team might be held up for days by a backlog of code reviews (PRs). Now a four-person team with a good AI assistant can generate boilerplate code, unit tests, and even refactoring suggestions automatically, and review time drops to a few hours. The 10 features still ship, with half the people and much lower coordination costs.

The shape of productivity is changing: it depends more and more on how thick the layer of compute behind each engineer is, and the number of engineers matters less. This gives rise to a new kind of organization: "thin core, thick compute." The core team is small and focuses on strategy and on defining clear goals, while execution is handed to a large periphery of AI agents and automated workflows. Midjourney is a company like this. Its core team is tiny, focused on research, product vision, and model tuning, and its "workforce" is an infinitely scalable layer of compute serving millions of users. They haven't hired hundreds of artists; they orchestrate GPUs. In this model, the rewards for being "contrarian and right" come more directly. You don't need to convince a committee, only the market, and the market cares about results, not about whether you went along with the crowd.

## Will Compute Become the New Means of Production?

If compute is a new means of production, the question of how it gets distributed can't be avoided. Like land, compute takes capital to acquire (GPUs, cloud credits, energy). Compute that one person is using can't be used by anyone else, and the bigger the scale, the better the economics. This leads to the "compute landlord" hypothesis: a few cloud providers and chipmakers may become oligarchs, collecting rent from everyone else, who become "compute tenants."

But there are strong counter-forces. Open-source models are putting compute within reach of more people, community projects are pooling scattered GPUs, and national industrial policies are trying to prevent monopolies. Also, as new chips are released, older, weaker chips will flood the market, so almost everyone can get a baseline amount of compute. Look at the open-source communities around models like Llama and Stable Diffusion: many individual developers run and fine-tune these models on consumer-grade GPUs (an RTX 4090, for example). It's a bit like subsistence farming in the digital age. It can't compete with industrial-scale "compute landlords" like AWS or Google Cloud, but it keeps the means of production from being completely monopolized.

Over the long run, compute prices are falling and more and more people can get access to compute, which in a sense follows Wright's Law. Still, cutting-edge, high-performance compute will probably remain something only a few can get for some time, and that will create a new kind of inequality.

## Where This Model Breaks

Compute is the best lever only under certain conditions: the problem can be formally defined, data is abundant, and distribution is a problem that can be solved. If what you need to do is build a brand, deal with a complex regulatory environment, or manage a physical supply chain, then capital, media, or even old-fashioned labor may still be the better lever. Take building a new hospital. You can use compute to design the building and optimize how patients move through it (handling the "bits"), but you still have to deal with zoning laws, get permits, manage construction crews, and build trust with the local community. These are problems of the human world, where relationships, trust, and the skill of working your way through bureaucracy (the traditional levers of labor and social capital) matter far more than raw compute.

Large companies won't disappear either. They can still win with the moats they already have, such as distribution channels, proprietary data, and compliance machinery. Compute is an accelerator; it doesn't make a moat on its own. Also, the price of compute isn't guaranteed to fall smoothly. Energy costs, chip shortages, and geopolitics can all push up the price of C and slow down the S-curve of adoption.
