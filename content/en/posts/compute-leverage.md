---
title: "Compute Is the New Leverage (and Probably the Best One)"
date: 2025-08-08
draft: false
summary: "Rich consensus is no longer necessary as compute outperforms labor as leverage"
categories: ["Mindsets"]
slug: "compute-leverage"
---

Naval Ravikant famously outlined a hierarchy of leverage. The oldest is **labor**, or the people who work for you. It’s powerful but messy. Managing people is hard because aligning them is hard, and the communication overhead grows faster than the team size. These systems, built to optimize for stability and consensus, are necessary for managing labor. In most parts of society—governments, large corporations, even social circles—being contrarian and right doesn’t reward you. It often gets you into trouble.

But the worlds of startups and investing are different. They are two of the few places where being contrarian and right is not just tolerated, but is the very source of outsized returns. You don't need rich consensus to buy a stock or start a company. In fact, consensus is often a sign that the opportunity is gone. This works because these fields have started to move beyond labor as their primary lever, relying instead on **capital** and **code**. Code is a fantastic form of leverage: write it once, and it can be run a million times for nearly zero marginal cost. It’s permissionless and scalable.

This fundamental insight explains why I’ve always done my best work either alone or in very small teams. The need for rich consensus—that fragile, expensive state of agreement among many people—is a tax on every new idea. For years, I thought this was just a personal quirk, but I’ve come to realize it’s a core principle of how value is created.

And as technology shifts the dominant form of leverage again, the importance of that consensus is starting to fade. I believe we are now in the early days of a new, even more powerful form of leverage: **compute**.

In fields dense with information that can be automated, compute is becoming a more efficient and scalable lever than labor, code, or capital. AI is the key that has unlocked this. It has lowered the barrier to orchestrating vast amounts of computational power from an expert-level engineering task to something a single creator can do. This shift is poised to fundamentally change how we build teams, design organizations, and distribute rewards.

### **From Coordinating People to Orchestrating Compute**

The core task of building something is changing. It used to be about finding the right people and coordinating their efforts. Now, it's increasingly about defining a problem clearly and directing computational resources to solve it. AI allows us to "outsource" tasks not to other people, but to models and agents. A single person can now translate an idea into a product, a piece of research, or a creative work with far less human coordination.

We can describe this with a simple model. Think of the total work required to achieve a goal as a constant. This work is a function of the number of people, the compute they can wield, and some external factors.

A simplified equation might look like this:

**Work \= N × Cᵖ × f(Data, Clarity, Distribution)**

Let’s break this down:

* **N** is the number of people (headcount).  
* **C** is the compute per person—the amount of computational power an individual can effectively manage.  
* **p** is the efficiency exponent of that compute. If p \= 1, every unit of compute is perfectly productive. In reality, p \< 1 because there are orchestration overheads.  
* **f(...)** is a multiplier for external constraints, like the availability of good data, the clarity of the problem, and the ability to distribute the final product.

For a fixed amount of **Work**, if **C** (compute per person) goes up, and better tools make it easier to manage that compute (pushing **p** closer to 1), then the optimal number of people, **N**, must go down.

This isn't a brand-new phenomenon. The rise of cloud computing and CI/CD pipelines already proved this model on a smaller scale. But AI has increased the slope of this curve by an order of magnitude.

Of course, this model has limits. You can hit **orchestration saturation**, where you have more compute than one person can effectively manage, causing your efficiency (p) to drop. Or you can be bottlenecked by the external factors (f). If you don't have good data or a clear problem, all the compute in the world will just spin its wheels. And if you can't reach users, your brilliant, compute-generated product will go nowhere.

Let's make this concrete with an example.

### **The S-Curve of AI Coding**

Look at software development. The amount of compute available to each engineer (**C**) is steadily rising, thanks to AI coding assistants. As these tools get better, a small team—or even a single developer—can achieve the same output (**Work**) that once required a larger team. The number of people (**N**) required is going down.

We can already see the metrics changing. Imagine a team's goal is to ship 10 new features per quarter. In the past, an eight-person team might get bogged down for days by a backlog of code reviews (PRs). Now, a four-person team, armed with a powerful AI assistant, can automatically generate boilerplate code, unit tests, and even refactoring suggestions, cutting review time down to hours. They still ship the 10 features, but with half the people and dramatically lower coordination costs.

The debate isn't about *whether* AI improves productivity; it's about recognizing that the *shape* of productivity is changing. It's becoming less about the number of engineers and more about the thickness of the compute layer supporting each one.

This leads to a new kind of organization: a **thin core** with **thick compute**. The core team is small, focused on strategy and defining clear objectives. The execution is handled by a vast periphery of AI agents and automated workflows. A company like Midjourney is a perfect example. Its core team is tiny, focused on research, product vision, and model tuning. Its "workforce" is an infinitely scalable layer of compute that serves millions of users. They don't hire hundreds of artists; they orchestrate GPUs. This is the "thin core, thick compute" model in action. In this model, the rewards for being "contrarian and right" are more direct. You don't need to convince a committee. You just need to convince the market, and the market rewards results, not alignment.

### **Will Compute Become the New Land?**

If compute is a new factor of production, we have to ask about its distribution. Like land, compute requires capital to acquire (GPUs, cloud credits, energy). It is rivalrous and has economies of scale.

This leads to the "compute landlord" hypothesis. Will a few cloud providers and chip manufacturers become oligarchs, extracting rent from everyone else who becomes a "compute tenant"? It's possible.

But there are powerful counter-forces. Open-source models are democratizing access. Community-driven projects are pooling GPU resources. National industrial policies are trying to prevent monopolies. And as new chips are released, older, less powerful ones will flood the market, making a certain baseline of compute accessible to almost everyone. Look at the open-source communities around models like Llama or Stable Diffusion. Many individual developers are running and fine-tuning these models on consumer-grade GPUs (like an RTX 4090). This is like digital-age subsistence farming; while it can't compete with industrial-scale "compute landlords" like AWS or Google Cloud, it ensures the means of production are not entirely monopolized.

The long-term trend for compute prices is down, and access is broadening, following a version of Wright's Law. However, the cutting edge of high-performance compute will likely remain a gated resource for some time, creating a new kind of inequality.

### **Where This Model Breaks**

Compute is not a silver bullet. It is the best form of leverage only under certain conditions.

It works best when a problem can be formally defined, when data is abundant, and when distribution is a solvable problem. If your challenge is building a brand, navigating a complex regulatory environment, or managing a physical supply chain, then other forms of leverage—like capital, media, or even old-fashioned labor—may still be superior. For example, consider building a new hospital. You can use compute to design the building and optimize patient flow (handling the "bits"). But you still need to deal with zoning laws, get permits, manage construction crews, and build trust with the local community. These are problems of the "human" world, where relationships, trust, and navigating bureaucracy—the traditional levers of labor and social capital—are far more important than raw compute.

Large companies won't disappear. They can still win on their existing moats: distribution channels, proprietary data, and compliance machinery. Compute is an accelerator, not the moat itself.

Furthermore, the price of compute isn't guaranteed to fall smoothly. Energy costs, chip shortages, and geopolitics can all raise the price of 'C', slowing down the S-curve of adoption.