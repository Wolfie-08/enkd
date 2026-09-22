<!--
Medium setup
SEO title: What is an AI agent for a business, and what does it cost?
SEO description: How a business AI agent answers questions over live company data, why it needs approval gates, timeline and how pricing works, from an engineer in Tashkent.
Tags: AI Agents, Artificial Intelligence, LLM, Automation, Uzbekistan
-->

# What is an AI agent for a business, and what does it cost?

*How it differs from ChatGPT, how it stays safe with your data, how long it takes, and what you pay.*

**By Diyorbek Komilov** · AI Systems Engineer · Automation · Hardware, Tashkent
**Last updated: 23 September 2026**

---

An AI agent for a business is an assistant that answers questions and does tasks using your company's own live data, not the internet. The price is agreed on a short call, and full implementation takes **2–3 weeks** when clean company data already exists. Below: what it can do, how it is kept safe, and where the cost comes from.

## What is an AI agent?

An AI agent is a language model connected to tools: your database, your ERP, your calendar, your Telegram. You ask "Which clients owe us more than 50 million sum for over 60 days?" and it looks the answer up in your real data instead of guessing.

The difference from ChatGPT is access. ChatGPT knows the internet up to a date. An agent knows your sales, your stock and your debts as of this minute, and nothing it is not given access to.

## How does it work?

It works in four parts:

1. **Data it can read.** Usually a PostgreSQL warehouse that already holds clean company data. If you do not have one yet, building it comes first (see my article on AI automation).
2. **Tools it can call.** Each tool does one narrow thing: "get receivables by client", "get sales for a period", "draft a message". The agent can only do what a tool allows.
3. **An approval gate.** Anything that writes, sends or spends waits for a person to press Approve, Edit or Reject, for example in Telegram. Reading is automatic; acting is not.
4. **A model.** A cloud model such as Claude or GPT, or a local model running on your own server where it is good enough. A routing layer can fall back from one to another.

I am building this now for Supply Group: an LLM financial assistant that answers natural-language questions against the group's live data warehouse. It is **in development**, and the design rule is the one above: read freely, write only with approval.

## What can an agent do safely?

An agent can safely do anything read-only, and anything else behind an approval step.

- **Safe to automate:** answering questions about sales, stock, debts and cash; writing daily summaries; finding anomalies; drafting replies.
- **Needs approval:** sending messages to clients, creating orders, changing prices, booking calendar slots, anything that moves money.
- **Should not be given to an agent:** decisions that must be exactly right with no human check.

## How long does it take?

Full implementation takes **2–3 weeks**, if clean company data already exists.

- **Week 1:** pick the 5–10 questions your team asks most often.
- **Weeks 2–3:** tools for those questions, tested against answers your team already knows.
- **After that:** new tools added one at a time, based on what people actually ask.

If the data is still spread across spreadsheets, add the time to build the warehouse first.

## How much does it cost?

The price is agreed on a call, after I understand the scope. What moves it:

- **Whether a data warehouse exists.** This is the biggest factor.
- **Number of tools.** Each one needs its own tests.
- **Write actions.** Anything behind an approval gate needs more care than read-only answers.
- **Cloud or local model.** A local model costs more to set up and less to run.

After launch, the running cost is mostly model usage. Moving routine questions to a local model can cut the API bill sharply; on my own Enkd OS project, the target is roughly an order of magnitude lower monthly spend.

## FAQ

### Is my company data sent to OpenAI or other providers?

Only if you choose a cloud model, and then only the data needed for each question. Where a local model is good enough, it runs on your server and nothing leaves it.

### Can the agent make mistakes?

Yes. Language models can be wrong. That is why numbers come from SQL tools rather than the model's memory, and why every action waits for approval.

### Does it understand Uzbek and Russian?

Yes. Current cloud models handle Uzbek, Russian and English questions well. Local models are weaker in Uzbek, so the choice of model depends on your language mix.

### Where does it run?

The agent runs on your server or one set up for you, with Telegram or a web dashboard as the interface.

### Is an agent the same as a chatbot?

No. A chatbot talks to your customers. An agent works for your team, over your internal data.

---

**About the author.** I'm Diyorbek Komilov, an AI Systems Engineer in Tashkent, working across automation and hardware. I build and run the software behind Supply Group LLC, and I take AI automation, AI agent, Telegram chatbot and website projects through Enkd. More work and contact: [www.enkd.uz](https://www.enkd.uz). I reply within 24 hours.

[**Request a solution →**](https://www.enkd.uz/contact?need=agent)
