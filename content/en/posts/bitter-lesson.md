---
title: "Bitter Lesson, End-to-end Coding, Creator Economy"
date: "2025-08-01"
draft: false
summary: "The Bitter Lesson is true for research, but product development requires working with the model's grain."
categories: ["AI"]
slug: "bitter-lesson"
---

It’s become a kind of mantra in AI circles: “The Bitter Lesson.” The idea, from researcher Rich Sutton, is that trying to bake human knowledge into models is a short-term crutch. History shows the biggest gains come from applying massive computation to general-purpose methods.

Many industry leaders now champion this take. They suggest the purest path is to let the LLM figure things out for itself, and the more your product does this, the more “agentic” it’s considered to be. But from my experience building products, it isn't that simple. The Bitter Lesson is true for research, but on the product side you need a more dialectical view of it.

Giving an LLM too much external knowledge can be a disaster. I call the right approach "going with the grain." An LLM has a natural inclination, like the grain in wood, and it already has vast prior knowledge of coding patterns and architectures. If you align your requests with what it already knows, you get the most out of it and keep the damage from hallucinations to a minimum.

Forcing an LLM to learn a completely foreign architecture is a recipe for failure. It performs poorly, and it also uses up the model's limited context, which is its most precious resource. When we measure a model, the size of its context window matters less than its "in-context capability," the complexity of logic it can reliably execute.

This is where a purely dogmatic view of the Bitter Lesson falls apart. The most pragmatic and effective tools, like Base44, are fast and reliable precisely because they rely heavily on pre-built templates, and the LLM’s job is simply to "fill in the blanks." The more dogmatic route is to rely on the LLM to generate a production-ready app from scratch, which usually produces terrible results. That is a core problem for many AI coding products today.

Base44's approach has a cost (once a user's request goes beyond its templates, quality drops sharply), but it shows that in product development, the window of opportunity is what matters. It's perfectly fine to build a transitional product that the next wave of models might make obsolete. If adding human heuristics helps you solve users' problems and create business value within the current window, it's a good technical choice.

## The Four Stages of AI Coding

The AI coding game is unfolding in four stages, with stages 2 and 3 happening concurrently. The first stage is AI-Assisted Coding, represented by tab-to-complete in early versions of tools like Cursor.

The second stage is AI Pair Coding, with more agentic tools like Cursor Composer and Windsurf Cascade. It's best for experienced developers, who get a massive productivity boost from it, but you still need to understand the basics to use it well. The experience is like the invention of the manual transmission: you still have to learn the clutch, and even roughly understand how a car is built, before you can drive. But because it's the first time many people get to drive such an advanced vehicle, the aha moment is very strong, and it's a lot like the driving feel many people still chase today.

The third stage is Vibe Coding 1.0, represented by products like Lovable and Bolt.new, which aim to help non-developers build software. Still, it requires huge enthusiasm and patience. The interaction is often a "say one thing, do one thing" process, and the people using it are mostly AI enthusiasts and tech-savvy professionals (designers and PMs, for example), still far from the mass market.

Most of these tools are also "front-end only" and rely on platforms like Supabase, so users still face a steep learning curve: they need to learn about prompting, databases, CDNs, and component variables, concepts an AI can't easily guess for them. To continue the driving analogy, this is a bit like the invention of the automatic transmission. The barrier to learning to drive dropped sharply, and although some of the fine-grained feel of driving was lost, many people who never had the skill to learn a manual car got to drive.

One product that really impressed me recently is Trickle AI. It uses a canvas to visualize all the essentials of website development (database, assets, version control), has put real thought into deployment, including SEO, and makes visual edits much more intuitive. I think it's probably the best interaction vibe coding 1.0 has achieved so far, like a top-of-the-line automatic car where the ride, comfort, and dashboard are all maxed out.

As a small aside, many vibe coding 1.0 tools are now obsessed with competing on front-end page generation and deployment. Personally, I don't want to get dragged into that frenzy. Building a good UI is hard because visual taste is subjective, so it's difficult for an AI to satisfy a user in one shot. A complete, visually appealing webpage takes an immense amount of work, like changing the corner radius of cards, the overall color scheme, adding a top navigation bar, and adapting the page for mobile.

More importantly, in an increasingly agentic future, I question whether webpages will keep the value they've had for the past 20 years. For 20 years, websites have been key carriers of information and GUIs. But agents are now automating information retrieval and back-end service calls. Information is being covered by products like Deep Research, and GUI operations will likely be handled by an agent's computer-use capabilities. We already see this with ChatGPT changing how we use browsers. My worry is that there will be a flood of tools making a flood of webpages that only agents will ever visit.

The fourth stage is Fully Autonomous Coding, which is where I believe the future is headed. It won't conflict with the earlier products and markets; it will expand to a much broader audience. AI can complete coding tasks end-to-end and fully on its own, the way Deep Research does for information retrieval today. You only need to give it a request, and it doesn't even have to be very detailed. The AI infers the thinking behind the request and what you want to achieve, and builds the whole thing end-to-end, ready to use. Later edits should then go into new features, not into fiddling with visuals or fixing bugs. Clearly this is still a future paradigm, and companies like Devin are going into enterprise-level codebases to solve exactly this problem.

Still, we think there may be an opportunity here. Building a full web app end-to-end is immensely hard because of GUIs, cloud deployment, visual adjustments, and databases, not to mention token costs. But if we betray the Bitter Lesson and use a pre-filled, template-based approach, we can constrain the UI to its simplest, most essential forms: a few buttons, a natural-language box that calls a backend, or a simple H5 app with preset GUI templates. This lands squarely in the comfort zone of current AI. Of course there is a trade-off: anything outside that range of interaction, anything that needs complex dashboards or fancy visual pages, can't be generated at all. But at least we can try to make fully end-to-end work in a small scope, and the value there already seems large enough.

It's like Waymo achieving fully driverless cars in only a handful of cities, with HD maps and LiDAR: a powerful but geographically limited solution. Perhaps in two years a "Tesla-level" product will come along and run us over. But in an AI startup, you can't count on a lasting moat; in the face of absolute intelligence, moats are fleeting. If you can build a product that works for a year, focus on that year. Don't make too many predictions.

## Why Democratized Coding Won't Kill the Professional Market

Take photography as an example. To people born in the 21st century, it seems perfectly reasonable and intuitive that you open your phone, tap the camera, press the shutter and get exactly what you see, as if cameras were simply meant to work this way. But camera and imaging technology took countless years to get to today's millisecond shots, so fast that you don't even notice the huge amount of underlying work.

When you press the shutter, a multi-stage process finishes in milliseconds. Light passes through the lenses, is focused onto a CMOS sensor, and the photons are converted into a raw digital signal. Then an Image Signal Processor (ISP) "fills in" color for each pixel, reduces noise, corrects white balance, and merges multiple exposures for HDR. Finally, the processor maps the colors to the sRGB space, sharpens edges for clarity, and compresses a 12 MB data stream into a 2 MB JPEG or HEIF file.

This entire pipeline is the magic that creates the "point-and-shoot" experience. I still remember when photography required a darkroom to develop film, a long, tedious, and professional process. It took years of iteration to achieve the universal access we have today, which in turn gave birth to new markets and products like Instagram.

But even today, the convenience of smartphone cameras hasn't eliminated professional photographers, hobbyists, or the market for professional cameras. As the cost and complexity of a technology drop, the new market grows beyond imagination: the smartphone expanded the photography market a hundredfold. I believe the same will be true for software. One day, with AI, creating software will feel as simple and self-evident as taking a picture with our phones today.

## From Ads to APIs

The rise of agents makes me deeply worried about the future of the creator economy. Many creators, like podcasters, currently live on ad revenue. But AI has already changed how many people listen to podcasts. Either an AI pulls the podcast's content and writes a text summary, or people throw a pile of audio into a product like NotebookLM and get back a more complete podcast, more to their personal taste and with no ads at all. On some podcasts you can already find comments saying, "No AI summary? I'm not listening to this episode." More and more of the entry points to information, content, and services will be taken over by agents, and that is almost certain to happen. So in that situation, where does the creator economy go?

As the entry point moves from platforms to personal agents, advertising will be forced to change massively, just as SEO is now adapting to AI search. The old logic of capturing user attention on a specific page is ending; in the future, user attention will be held by each user's personal agent.

For creators, the best path forward is to charge directly for their content, functions, or information. They can expose their services as an API that agents call, charging on a per-use basis. I believe this is a more rational and sustainable model than advertising. In productivity scenarios, the "browse and discover" model of app stores will be replaced by agent-led recommendations and search. Entertainment and e-commerce will be trickier, as users often enjoy the process of browsing itself.
