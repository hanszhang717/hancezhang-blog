---
title: "The Bitter Lesson vs. The Product Reality"
date: "2025-08-01"
draft: false
summary: "In research, bet on compute. In product, bet on the user."
categories: ["AI"]
slug: "bitter-lesson"
---

### The Misreading of the Scripture

In AI circles, Rich Sutton’s **"The Bitter Lesson"** has become scripture.

The core tenet: trying to bake human knowledge into models is a short-term crutch. Historically, the only thing that matters is scaling computation on general methods.

This has led to a dogma in the industry: **Let the model do everything.** The more "agentic" your product, the purer it is.

But in the trenches of product building, the story changes. **The Bitter Lesson is true for research, but product development requires a pragmatic betrayal.**

### Don't Fight the Grain

Giving an LLM too much open-ended freedom is often a disaster. I call the correct approach **"Going with the Grain."**

An LLM has a natural texture, like wood. It knows certain patterns deeply. **If you align your requests with its existing grain, you get magic. If you fight it, you get hallucinations.**

Forcing an LLM to learn a completely foreign architecture in-context is a suicide mission for your context window. We should measure models not just by context size, but by **"in-context capability"**—the complexity of logic they can reliably execute before falling apart.

This is where the "Pure AI" dogma fails. The most effective tools today (like **Base44**) work because they **cheat**. They rely heavily on pre-built human templates. The LLM just fills in the blanks.

Is this "unpure"? Yes. Does it work? Yes.

In product, **the window of opportunity is the only metric.** It is perfectly fine to build a product that will be obsolete in 18 months. **If adding a human heuristic solves a user's problem today, do it.** Technology is a means, not a religion.

### The Four Stages of AI Coding

**1. AI-Assisted Coding (The Bicycle)**
Tab-complete. Copilot. Simple, additive, low-risk.

**2. AI Pair Coding (The Manual Transmission)**
Cursor Composer, Windsurf. Powerful, but you need to know how to drive. You still need to understand the code to steer the ship.

**3. Vibe Coding (The Automatic Transmission)**
Tools like Lovable and Bolt.new. This is the democratization layer. It lowers the floor, allowing non-coders to build.
But it’s frustrating. It’s often a game of "Simon Says" with a robot that doesn't quite get it. The users here aren't yet "everyone"—they are **AI enthusiasts and tech-savvy PMs**.

**4. The End Game: Autonomy**
This is the future. You give a high-level intent, and the AI builds the whole thing, end-to-end. No code review, no "accepting changes." Just a working app.

### The Jevons Paradox of Software

Some worry that if AI can write code, software engineers are doomed.

I disagree. Look at photography.
Taking a photo used to require a darkroom, chemicals, and hours of labor. Now, it takes milliseconds.
A smartphone camera runs a complex pipeline of photon capture, ISP processing, and compression that would have seemed like magic 50 years ago.

**Did the smartphone kill photography? No. It exploded the market.**
It created Instagram, TikTok, and an entire visual economy.

AI will do the same for software. **When software becomes as cheap as a JPEG, we won't build less of it. We will build a million times more.**

### From Ads to APIs: The Creator Economy Shift

The rise of agents is an existential threat to the ad-supported creator economy.
If users use AI to summarize podcasts and browse the web, **nobody sees the ads.**

The old model (Attention -> Ads) is dying.
The new model is **Service -> API**.

Creators shouldn't optimize for eyeballs; they should optimize for **being called by an agent.** Charge for your content, your data, or your logic as an API. That is the only sustainable future in an agentic world.
