# EcoPulse - Carbon Footprint Awareness Platform

### Live Demo Link
👉 https://ecopulse-rust.vercel.app

---

## 🌟 Chosen Vertical & Persona
* **Vertical:** [Challenge 3] Carbon Footprint Awareness Platform
* **Philosophy:** Frictionless tracking and gamified, atomic micro-actions to combat form fatigue.

## 💡 System Logic & Approach
Traditional environmental logging apps alienate users with exhaustive multi-page questionnaires. EcoPulse solves this behavioral friction by introducing a client-side **Natural Language Action Console**. Users log their daily routines in natural, conversational English sentence strings. 

The application utilizes an instantaneous regex parsing architecture that extracts semantic markers sequentially to compute environmental impacts locally using linear metrics.

### Technical Formula Alignments:
- **Total Footprint Calculation:** $$Total\ Footprint = E_{transport} + E_{diet} + E_{energy}$$
- **Transport Coefficients:** Driving = $0.20\ \text{kg } CO_2/\text{km} $ | Public Transit = $0.04\ \text{kg } CO_2/\text{km} $
- **Dietary Coefficients:** Meat Meals = $+3.0\ \text{kg } CO_2 $ | Plant-Based Meals = $+0.5\ \text{kg } CO_2 $

## 🚀 How It Works
1. **Dashboard Tab:** Displays a clean visual representation of the user's daily budget balance, interactive category breakdowns, and a responsive custom SVG bar chart tracing a 7-day trend history.
2. **Log Action Tab:** Features a conversational command text console matching inputs to local datasets without requiring external network APIs. Includes an incremental history stream with delete accessibility.
3. **Daily Quests Tab:** Integrates atomic habit gamification strategies inspired by Duolingo. Completing localized tasks awards immediate algorithmic XP progression and simulates functional carbon offset balances. Reaching 500 XP fires a multi-instance canvas animation engine showering custom diamond confetti shapes.

## 🧠 Assumptions Made
- Baseline optimal daily target caps are evaluated at a fixed $12.0\ \text{kg of } CO_2$ benchmark standard.
- Unspecified granular distance factors within raw transport strings default to a linear standard baseline of $10\text{km}$.
- State processing assumes persistent continuity via localized browser `localStorage` variables to maintain runtime structure without server databases.
