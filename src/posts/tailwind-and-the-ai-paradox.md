So I was reading about what happened at Tailwind Labs recently, and honestly? I find it quite concerning.

Adam Wathan (the creator of Tailwind CSS) announced that they laid off 75% of their engineering team. But the reason behind it is what got me thinking: the _"brutal impact AI has had on our business."_

Here's the thing that's wild: Tailwind CSS is more popular than ever. It's used by 51% of developers according to the 2025 State of CSS survey. Usage is growing faster than it ever has. But revenue? Down by almost 80%. 

Why? Because AI tools are answering developer questions directly now. Traffic to Tailwind's documentation site has dropped by 40% in just two years. That documentation site is where people discover Tailwind's commercial products: the component packages and subscriptions that actually fund the framework's development. No one visits the docs anymore because they just ask ChatGPT, Cursor, or Copilot instead. No docs visits = no revenue discovery = no money to pay engineers.

The whole thing came to a head when someone opened a PR to make the Tailwind docs more "AI-friendly", basically compiling everything into a single file optimized for feeding to LLMs. Wathan declined it, and his response was pretty eye-opening ([reference](https://github.com/tailwindlabs/tailwindcss.com/pull/2388#issuecomment-3717222957)).

![A screenshot from a GitHub pull request in the Tailwind Labs CSS documentation repository, where the creator Adam Wathan discusses the impact that AI has had on their business](/images/tailwind-layoffs-ai.png)

> "Right now there's just no correlation between making Tailwind easier to use and making development of the framework more sustainable."

And honestly? That hits different when you think about what's actually happening here.

## The Spiral

This is what I can't stop thinking about: AI models are fundamentally dependent on open-source code. They're trained on GitHub, Stack Overflow, documentation sites, blog posts, all the public knowledge that developers have created over years. But AI is simultaneously destroying the economic models that make that open-source software sustainable.

Let me break down what it seems is happening:

1. AI models train on all this open-source code and documentation
2. Those AI models get so good at answering questions that developers stop visiting docs sites, stop contributing to Stack Overflow, stop discovering commercial open-source products
3. Open-source maintainers lose revenue streams (docs traffic, component sales, sponsorships) and can't pay engineers
4. Fewer maintainers means less high-quality open-source code being created
5. AI models have less fresh, quality code to train on
6. But by the time that matters, the damage is already done

The irony is pretty brutal: the technology that learned from open-source software is making it economically unsustainable to maintain that same software.

## Why I'm Actually Worried

I don't know if I'm being dramatic here. Open-source software isn't just nice to have. It's basically the foundation of everything we build. Linux, Kubernetes, React, Node.js, Docker, PostgreSQL... most of the infrastructure powering the internet runs on open-source software.

If AI makes it impossible for open-source companies to sustain themselves, what happens? Fewer new projects. More abandoned projects. Slower bug fixes. Less innovation. And eventually, AI models will feel it too: stale training data, outdated patterns, code based on information from years ago.

We're already seeing early signs. Tailwind Labs is one example. Stack Overflow traffic has plummeted. But the full impact might not be visible for years, because AI models can keep generating responses from their training data even after the source projects are abandoned.

## I Don't Have the Answers

Here's the thing: I don't know how to fix this. It's a genuinely hard problem. 

AI companies could implement attribution systems or revenue-sharing models, but that feels like wishful thinking. Open-source maintainers could rethink monetization strategies, but that's easier said than done when your product is suddenly commoditized by AI. Developers could choose to support projects directly (and we should!), but that's not going to scale.

Maybe we need something like a "knowledge economy" where AI companies pay royalties to the open-source projects their models are trained on, similar to how music streaming works? I don't know.

## The Uncomfortable Truth

The uncomfortable truth is we're in uncharted territory. AI is reshaping how we build software, and I don't think we fully understand the second-order effects yet. The Tailwind Labs situation feels like a canary in the coal mine: a warning that we need to figure out how to make AI and open-source software coexist sustainably.

Because if we don't solve this, we might end up in a future where AI has consumed so much of the open-source ecosystem that it can't learn from fresh, innovative code anymore. And by then, it might be too late.

The open-source community has faced challenges before: licensing debates, contributor burnout, corporate takeovers. But this feels different. This isn't a conflict within the open-source world. It's an external force that's fundamentally changing the economics without offering a sustainable alternative.

I don't know if this is an overreaction or if we're seeing the early stages of a real crisis. But it's something that I've been thinking about...

*— Michael*