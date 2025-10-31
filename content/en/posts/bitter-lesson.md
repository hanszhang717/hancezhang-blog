---
title: "Bitter Lesson, End-to-end Coding, Creator Economy"
date: "2025-08-01"
draft: false
summary: "The Bitter Lesson is true for research, but product development requires working with the model's grain, not against it."
categories: ["AI"]
slug: "bitter-lesson"
---


### The Misreading of Bitter Lesson

It’s become a kind of mantra in AI circles: **“The Bitter Lesson.”**

The idea, from researcher Rich Sutton, is that trying to bake human knowledge into models is a short-term crutch. History shows the biggest gains come from applying massive computation to general-purpose methods.

Many industry leaders now champion this take. They suggest the purest path is to let the LLM figure things out for itself. The more your product does this, the more “agentic” it’s considered to be.

But my experience building products tells a different story. **The Bitter Lesson is true for pure research, but building a product requires a more dialectical view.**

### Principle: Work *With* the Model, Not Against It

Giving an LLM too much external knowledge can be a disaster. I call the correct approach **"going with the grain."**

An LLM has a natural inclination, like the grain in wood. It already possesses vast prior knowledge of coding patterns and architectures. **If you align your requests with its existing knowledge, you maximize effectiveness and minimize hallucinations.**

Attempting to force an LLM to learn a completely foreign architecture is a recipe for failure. It not only performs poorly but also consumes the model's finite context—its most precious resource. We should measure a model not just by its context window size, but by its **"in-context capability":** the complexity of logic it can reliably execute.

This is where a purely dogmatic view of the Bitter Lesson falls apart. The most pragmatic and effective tools, like **Base44**, are fast and reliable precisely because they rely heavily on pre-built templates where the LLM’s job is simply to "fill in the blanks." In contrast, the more dogmatic approach of relying on an LLM to generate a production-ready app from scratch usually produces terrible results, a core problem for many AI coding products today.

Base44's approach has trade-offs—its quality drops dramatically on requests outside its templates—but it proves a crucial point. In product development, **the window of opportunity is what matters.** It's okay to build transitional products that the next model wave might render obsolete. **If adding human heuristics solves a user's problem now, it's the right choice.** Technology is a means, not an end.

### How AI Coding is Evolving: The Four Stages

The AI coding game is unfolding in four stages, with stages 2 and 3 happening concurrently.

**1. AI-Assisted Coding**
This is the earliest stage, represented by tab-to-complete features in early versions of tools like Cursor.

**2. AI Pair Coding**
This stage includes more agentic tools like Cursor Composer. The experience is like the invention of the **manual transmission**: powerful, but still requiring significant skill. It's best used by experienced developers who can get a massive productivity boost, but you still need to understand the fundamentals to use it effectively.

**3. Vibe Coding 1.0**
This stage, represented by products like Lovable and Bolt.new, aims to help non-developers build software. It's like the invention of the **automatic transmission**, dramatically lowering the barrier to entry, even if some fine-grained control is lost. However, it still requires huge enthusiasm and patience. The interaction is often a "say one thing, do one thing" process, and its adopters are not yet the mass market, but rather **AI enthusiasts and tech-savvy professionals** like designers and PMs.

Most of these tools are also "front-end only" and rely on platforms like Supabase. This means users still face a steep learning curve: they need to learn about prompting, databases, CDNs, and component variables—concepts an AI can't easily guess for them.

A product called **Trickle AI** is particularly impressive here. It uses a canvas to visualize development essentials (database, assets, version control) and has put real thought into intuitive visual edits and deployment. It’s like a top-of-the-line automatic car where the ride, comfort, and dashboard are all maxed out.

**A Personal Aside on Vibe Coding and the Future of Websites:**
I'm personally avoiding the frenzy to compete on front-end generation. Building a good UI is hard because visual taste is subjective, making it difficult for an AI to satisfy a human in one shot. The amount of work for a complete, visually appealing webpage is immense.

More importantly, **I question the long-term value of webpages in an agentic future.** For 20 years, websites have been key carriers of information and GUIs. But agents are now automating information retrieval and service calls. Information is being covered by products like Deep Research, and GUI operations will likely be handled by an agent's computer-use capabilities. We already see this with ChatGPT changing how we use browsers. I worry we're building a future with a flood of tools to create websites that only other agents will ever visit.

**4. Fully Autonomous Coding**
This is where I believe the future is headed, expanding the market to a much broader audience. The vision is for an AI to complete coding tasks end-to-end from a simple, high-level request, much like Deep Research does for information retrieval. The AI would infer your underlying intent and build a ready-to-use application, with subsequent edits focused on functional improvements.

While this is still a future paradigm, we can achieve a constrained version of it now. The challenge with building a *full web app* end-to-end is immense due to the complexity of GUIs, cloud deployment, visual adjustments, and databases—not to mention token costs. But what if we **betray the Bitter Lesson and use a pre-filled, template-based approach?** We could constrain the UI to its simplest, most essential forms: a few buttons, using natural language to call a backend, or a simple H5 app with pre-set GUI templates. This lands squarely in the comfort zone of current AI.

This approach has a clear trade-off. It's like **Waymo achieving self-driving, but only in San Francisco:** a powerful but geographically limited solution. Anything outside the pre-defined scope is impossible. Perhaps a "Tesla-level" product will make this obsolete in two years. But in an AI startup, you can't wait for a lasting moat. In the face of absolute intelligence, moats are fleeting. **If you can build a product that works for a year, focus on that year.** Don't make too many predictions.

### Why Democratized Coding Won't Kill the Market

Think about the magic behind taking a photo with your phone. To a modern user, the process feels instantaneous and intuitive. But this simplicity hides immense underlying complexity, a technological marvel that evolved over decades.

**The Hidden Complexity of a Smartphone Photo:**
When you press the shutter, a multi-stage process executes in milliseconds:

1. **Light Capture:** Light passes through lenses, is focused, and hits a CMOS sensor, which converts photons into a raw digital signal.
2. **Image Processing:** An Image Signal Processor (ISP) "fills in" color for each pixel, reduces noise, corrects white balance, and merges multiple exposures for HDR.
3. **Final Touches:** The processor maps colors to the sRGB space, sharpens edges for clarity, and finally compresses a 12 MB data stream into a 2 MB JPEG or HEIF file.

This entire pipeline is the magic that creates the "point-and-shoot" experience. I still remember when photography required a darkroom to develop film—a long, tedious, and professional process. It took years of iteration to achieve the universal access we have today, which in turn gave birth to new markets and products like Instagram.

But even today, **the convenience of smartphone cameras hasn't eliminated professional photographers,** hobbyists, or the market for professional cameras. As the cost and complexity of a technology drop, the new market size becomes unimaginable. The smartphone expanded the photography market a hundredfold without destroying the professional niche.

I believe the same will be true for software. **AI will one day make software creation feel as simple, as instinctive, and as self-evident as taking a picture with our phones today.**

### The Future of the Creator Economy: From Ads to APIs

The rise of agents leads to a deep concern for the creator economy. Many creators, like podcasters, currently survive on ad revenue. But **AI is fundamentally changing consumption habits and threatening this model.** Users now feed podcast audio into tools like NotebookLM to generate personalized, ad-free summaries. This behavior is becoming an expectation; you can already find comments on podcasts saying, "No AI summary? I'm not listening to this episode."

This is part of a larger, inevitable shift: **the entry point for information, content, and services is moving from platforms to personal agents.** This will force a massive transformation in advertising, just as SEO is now adapting to AI search. The old logic of capturing user attention on a specific page is ending. In the future, user attention will be held by their personal agent.

For creators, the best path forward is to **charge for their content, functions, or information directly.** They can expose their services as an API that agents call, charging on a per-use basis. I believe this is a more rational and sustainable model than advertising. In productivity scenarios, the "browse and discover" model of app stores will be replaced by agent-led recommendations and search. Entertainment and e-commerce will be trickier, as users often enjoy the process of browsing itself.