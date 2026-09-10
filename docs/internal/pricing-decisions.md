# Pricing decision registry

Internal notes for Forxia service pricing. Not customer-facing.

**How to use:** Read this before changing a published price, proposing a quote, or adding a package. After a pricing decision, append a dated entry. Do not rewrite earlier entries; add a new one if the decision changes.

Published numbers live in `src/lib/services.ts`. This file stores the rationale.

## Rate model

- Currency: CAD, plus tax. Travel and on-site expenses are extra unless an entry says otherwise.
- Principal day rate used for packaging: **CA $3,000/day**, published as Delivery Immersion Day. Originally inferred from the withdrawn Growth Consulting Retainer at CA $4,500/month.
- Lead-gen exception: the 30-minute consultation at **CA $150** is an entry conversation, not the day-rate benchmark.
- High-ticket diagnostics, workshops, day-rate work, and multi-day work use **Get in touch** (invoice / short SOW), not Stripe Pay now. Stripe stays for the consultation.
- Catalog fit: an entry product should not undercut the published day rate. A cheap diagnostic makes CA $3,000/day and the CA $18,000 assessment look expensive.

## Decisions

### 2026-09-03 — Organizational Assessment

- **Offer:** Organizational Assessment (`organizational-assessment`)
- **List price:** CA $18,000 plus tax; travel extra
- **CTA:** contact / invoice, not Stripe
- **Replaces:** Foundation Assessment at CA $2,500 (ops/growth diagnostic; wrong product and wrong band)

**Delivery (standard package):**

- One day of 45-minute 1:1 interviews with selected staff supplied by the client (morning set, lunch, afternoon set; cap **up to 8 interviews**)
- Survey for invited staff who are not interviewed
- One half-day workshop, **up to 16 people**: Competing Values Framework (current vs. preferred), weighted SWOT, and a management exploration exercise
- One written report: where the organization is, where people want it to go, what is working and what could be different, mapped to CVF, with **assets and contradictions** (a strength unused, overdone, or in tension with objectives)

**Effort model:** about **6–7 days** once instruments are reusable (intake and protocol, interview day, interview synthesis, survey analysis, workshop prep, workshop delivery, workshop capture, report). The report is the high-value product, not the calendar time in the room.

**Rate check:** 6.5 days × CA $3,000 ≈ CA $19,500. List at **CA $18,000** as a clean package price in that band.

**Market bands considered:**

- CA $1,800–$5,000: pulse survey and light interviews, no workshop of this depth
- CA $13,500–$27,000: combined assessment + workshop + report at boutique firms
- Standalone culture workshops often already CA $3,500–$4,000 before interviews or a report

**Rejected:**

- CA $2,500 — pulse-checkup band; does not cover an interview day, half-day workshop, and synthesis report
- CA $12,000 — underprices the report
- CA $25,000 — expanded / multi-day / multi-site; keep as an add-on band, not the list price

**Add-ons (quote separately):** extra interview day; second workshop or larger group; on-site travel; live leadership debrief if not already included in the engagement.

**Scope protection:** hold CA $18,000 with the caps above. Extra interviews, extra workshops, or travel expand the quote rather than the list price.

### 2026-09-03 — Delivery Immersion Day

- **Offer:** Delivery Immersion Day (`delivery-immersion`)
- **List price:** CA $3,000 plus tax; travel extra
- **CTA:** contact / invoice, not Stripe
- **Replaces:** Growth Consulting Retainer at CA $4,500/month (Stripe; “Most popular”)

**Why this product:** a bookable day that matches taking time from a full-time role. Observation and tune-up of a Scrum or Kanban team — including after certified Scrum Master or Product Owner training — from an agile coaching stance. Not a monthly availability retainer.

**Delivery (standard package):**

- One day with **one team** using Scrum or Kanban
- Observe planning, stand-up, review, or the flow of work
- Short conversations with the team and product owner
- End-of-day debrief with the sponsoring leader
- Written notes: friction, assets, and one or two changes worth trying (a recap, not an assessment report)

**Effort model:** about **1 day** in the room, plus a short intake to know which events to attend and an evening recap. Hold the list price at one day; the Organizational Assessment remains the report-heavy product.

**Rate check:** 1 day × CA $3,000 = CA $3,000. List at **CA $3,000**.

**Market bands considered:**

- CA $800–$1,600/day: contractor / staff-aug agile coach
- CA $1,500–$2,500/day: independent senior coach
- CA $2,500–$4,500/day: boutique principal advisory day
- CA $3,500–$8,500/day: named workshop with heavy prep

**Rejected:**

- CA $4,500/month retainer — ongoing availability; does not fit a full-time role
- Contractor day rates (~CA $1,300) — undercuts the assessment and signals staff aug
- Stripe Pay now — needs a date, an agenda, and often travel
- “Most popular” highlight — these are distinct offers, not competing plans

**Add-ons (quote separately):** extra team; extra day; on-site travel.

**Scope protection:** hold CA $3,000 at one team, one day. Extra teams or days expand the quote.

**Deferred (not withdrawn):** open working day, named ways-of-working workshop, and private training day may be added later as separate cards.

### 2026-09-03 — Travel disclosure on the card

Public card for Organizational Assessment shows a quiet `priceNote`: “Plus tax. Travel extra if delivered on-site.” Fees are the work only. Travel (flights, hotel, ground, meals) is quoted once the city is known, preferably as actuals with a not-to-exceed, or client-booked. Contract/SOW carries the full terms; the website only signals the split.

### 2026-09-03 — Delivery Immersion Day recap wording

Public feature line changed from “Written notes: friction, assets, and one or two changes worth trying” to **“Written recap with recommended next actions.”** “Worth trying” reads as an experiment; vice presidents buy recommendations they can put in place. “Recap” keeps the deliverable smaller than the Organizational Assessment report. Scope of the write-up is unchanged: findings from the day plus recommended next actions, not a full diagnostic report.

### 2026-09-03 — Pause Enterprise Strategy and Product Office Build-out

- **Removed from the public catalog:** Enterprise Strategy (`enterprise-strategy`) and Product Office Build-out (`product-office-buildout`)
- **Reason:** both are multi-week / high-ticket transformation work, not 1–3 day engagements. Current catalog is assessment, immersion day, leadership-team coaching, and workshops.
- **Not withdrawn as capabilities:** can return as quote-only cards when there is capacity for longer work.

### 2026-09-03 — 1:1 Coaching

- **Offer:** 1:1 Coaching (`individual-coaching`)
- **List price:** CA $6,600 plus tax
- **CTA:** contact / invoice, not Stripe
- **Does not replace:** 1:1 Executive & Leadership Coaching (`executive-leadership-coaching`) remains in the catalog for a later refactor

**Why this product:** a general individual coaching package, not an executive-only or day-rate offer. Internal rate is **CA $550/hour**, the senior PCC / 15–20-year organizational coaching band. Session price plus typical 30–40% prep lands near the CA $3,000/day model (~CA $390–$420 effective).

**Delivery (standard package):**

- **Twelve 60-minute** confidential sessions over **six months**
- Light intake to set goals and cadence
- Flexible scheduling (typically biweekly)
- ICF Professional Certified Coach

**Effort model:** 12 session hours plus intake and 30–40% between-session prep. Hold the list price at twelve hours; do not publish the hourly rate on the card.

**Rate check:** 12 × CA $550 = CA $6,600. List at **CA $6,600**.

**Market bands considered:**

- USD $300–$600/hour: typical ICF PCC
- USD $450–$900/hour: corporate-sponsored senior 1:1
- CA $350–$650/hour: Canadian published executive band
- CA $6,600 for 12 sessions sits in the PCC 6–12 month package range (about USD $7,500–$18,000) without looking cheap next to CA $3,000/day

**Rejected:**

- Publishing CA $550/hour on the card — invites a 6-session sprint at CA $3,300, which sits next to Delivery Immersion Day
- A 6-session public list price — undercuts the day rate
- Stripe Pay now — needs a coaching agreement, cadence, and intake
- CA $400/hour — ACC / contractor band; underprices 20 years of organizational coaching

**Add-ons (quote separately):** extra sessions; 90-minute sessions; 360 or stakeholder interviews; sponsor reports; on-site delivery and travel.

**Scope protection:** hold CA $6,600 at twelve 60-minute sessions and a light intake. Assessments, stakeholder work, and extra sessions expand the quote.

### 2026-09-03 — 1:1 Coaching (hourly list, packages by arrangement)

- **Offer:** 1:1 Coaching (`individual-coaching`)
- **List price:** CA $550 per 60-minute session, plus tax
- **CTA:** contact / invoice, not Stripe
- **Supersedes:** the same-day 12-session / CA $6,600 list on this card. Twelve sessions is longer than a typical conversation; keep packages possible without publishing a 12-session commitment.

**Why this change:** long-term 1:1 work usually caps at **three or four sessions** for one conversation. A new thread can open later. Packages remain available — for one person or for an organization buying a block — but the public price is the hour.

**Delivery (standard session):**

- One 60-minute confidential session
- ICF Professional Certified Coach
- Video or in person
- Typical conversation: 3–4 sessions; continue only if the client opens another thread

**Effort model:** session plus 30–40% prep. CA $550 plus prep still lands near the CA $3,000/day model.

**Rate check:** list **CA $550/hour**. Do not publish a session-count package price on the card.

**Packages (quote, not a second list price):** a defined set of sessions, a longer arc, or a reserved block for one person or several. Internal quotes may land below the hourly list when the commitment is a block. Public copy never says discount, bulk, or cheaper — frame as shaping a package or reserving a block.

**Rejected:**

- Twelve-session public package — longer than how the work actually runs
- “Call for a bulk discount” — cheapens the hour
- Stripe Pay now — still needs a coaching agreement and scheduling
- A second published package price on the card — would re-lock the session count

**Add-ons (quote separately):** 90-minute sessions; 360 or stakeholder interviews; sponsor reports; on-site travel.

**Scope protection:** the published number is the hour. Session count, multi-person blocks, and any package rate are quote-only.

### 2026-09-03 — Leadership Agility 360

- **Offer:** Leadership Agility 360 (`leadership-agility-360`)
- **List price:** CA $5,500 plus tax; travel extra if delivered on-site
- **CTA:** contact / invoice, not Stripe
- **Replaces:** 1:1 Executive & Leadership Coaching (`executive-leadership-coaching`)
- **Does not replace:** 1:1 Coaching (`individual-coaching`) remains the hourly card. Extra sessions after the included hour stay there.

**Why this product:** a named, certified 360 for one leader — intake, licensed instrument, survey-window support, a two-hour debrief that narrows ~48 elements to six focus areas, and one coaching session to open one of the six. Not a full coaching arc and not ChangeWise’s Development Planner action-plan step.

**Delivery (standard package):**

- One intake / orientation: how the 360 works and who to invite
- One licensed Leadership Agility 360 (instrument included)
- Assessor setup, launch, and completion support during a **three-week** survey window (status on who has not responded; the client chases)
- One **2-hour** debrief: make sense of the feedback and choose **six** focus areas
- One **60-minute** coaching session on **one** of the six

**Effort model:** about **8.5–10 hours** (intake and prep, setup and report handling, intermittent completion support, debrief prep and delivery, one coaching session plus prep) plus the instrument at about **CA $350** (USD $250). Do not publish the instrument cost or the hourly rate.

**Rate check:** 9–10 hours × CA $550 ≈ CA $4,950–$5,500, plus the instrument. List at **CA $5,500** so a messy completion cycle still holds the CA $550 model and the package sits above the day rate.

**Market bands considered:**

- USD $250: instrument only (ChangeWise to certified coaches)
- CA $2,000–$2,500: indie 360 + short debrief, little admin, no coaching session
- USD $2,500–$5,000: certified 360 + orientation + debrief
- USD $4,000–$8,000: 360 + debrief + 2–4 coaching sessions
- CA $5,500 ≈ USD $4,000: certified 360, long debrief, and one coaching session for a director/VP

**Rejected:**

- CA $2,000–$2,500 — pulse/360-only band; undercuts the day rate
- CA $3,000 — looks like one Delivery Immersion Day; after COGS and chase time, below CA $550/hour
- CA $4,500 — workable if every run is clean; thin when raters need chasing
- CA $6,600+ — reads as the withdrawn 12-session coaching package
- Stripe Pay now — needs an agreement, assessor emails, a three-week window, and a debrief date
- Publishing USD $250 COGS or CA $550/hour on the card — invites unbundling

**Add-ons (quote separately):** extra coaching sessions via 1:1 Coaching; extra debrief time; a second leader / second instrument; sponsor readout or written summary beyond sending the report; re-opening the survey past the window; on-site travel.

**Scope protection:** hold CA $5,500 at one leader, one instrument, three-week status support, one 2-hour debrief (48→6), and one 60-minute coaching session. Extra sessions, a second leader, or travel expand the quote.

### 2026-09-03 — Agile Scrum Master and Product Owner Training

- **Offers:** Agile Scrum Master Training (`agile-scrum-master-training`), Agile Product Owner Training (`agile-product-owner-training`)
- **List price:** CA $550 per person, two-day online, plus tax; travel extra if delivered on-site
- **CTA:** contact / invoice, not Stripe
- **Replaces:** Leadership Skills Intensive (`leadership-skills-intensive`)
- **Does not replace:** Team Facilitation & Working Agreements; Executive Leadership Workshop Series

**Why this product:** two public-course cards for the roles Forxia actually teaches. Not Scrum Alliance CSM or CSPO. On completion, participants are accredited for Scrum Master or Product Owner skills through the Agile Coaches Alliance.

**Delivery (standard public seat):**

- Two live online days, one role per card
- Applied exercises, not a slide deck
- Agile Coaches Alliance accreditation for that role’s skills on completion
- No public calendar yet — get in touch to join a cohort or request a date

**Effort model:** a per-person public-course rate, not the CA $3,000 day-rate benchmark (same exception pattern as the CA $150 consult). Keep `priceLabel` as **per person · two-day online** so CA $550 does not read as the 1:1 coaching hour.

**Rate check:** IncrementOne online CSPO lists about CA $499 early bird / CA $599 regular **with** Scrum Alliance certification. List at **CA $550** in that online band without claiming their mark.

**Market bands considered:**

- CA $399 and under: self-paced video / unbranded intro
- CA $499–$599: two-day live online competitor seat (IncrementOne CSPO)
- CA $1,200–$2,000: in-person CSM / CSPO band Forxia is not in

**Rejected:**

- Stripe Pay now — no scheduled dates or course checkout yet
- CA $399 — undercuts the live online band and looks like video
- CA $1,200+ — in-person Scrum Alliance band; we cannot offer that certification
- CSM, CSPO, Certified Scrum Master, Certified Scrum Product Owner, or Scrum Alliance certification on the card
- A second published private-class price — corporate online or on-site is quote-only

**Add-ons (quote separately):** private online class for an organization; on-site corporate delivery and travel. Internal floor for a closed two-day class remains the day-rate band (about 2 × CA $3,000) unless a later entry says otherwise.

**Scope protection:** hold CA $550 at one public seat, one role, two live online days, and ACA skill accreditation on completion. Private classes, extra days, and travel expand the quote.

### 2026-09-03 — Pause organization coaching and learning cards

- **Removed from the public catalog:** Leadership Team Coaching (`leadership-team-coaching`) and Executive Leadership Workshop Series (`executive-leadership-workshops`)
- **Reason:** neither is commercialized yet. Organizations page should only list bookable products: Organizational Assessment and Delivery Immersion Day.
- **Not withdrawn as capabilities:** can return as new cards when the offers are scoped and priced. Do not revive these placeholder cards as-is.

### 2026-09-03 — Team Facilitation & Working Agreements

- **Offer:** Team Facilitation & Working Agreements (`team-facilitation-workshops`)
- **List price:** CA $6,000 plus tax; travel extra
- **CTA:** contact / invoice, not Stripe
- **Replaces:** the unpriced “Contact for quote” placeholder on this card
- **Does not replace:** Delivery Immersion Day; Agile Scrum Master Training; Agile Product Owner Training; Team Topology & Flow Assessment; Agile Team Coaching

**Why this product:** a named ways-of-working workshop for one intact team. Closed and customized — not a public per-person course and not an observation day.

**Delivery (standard package):**

- Short intake with the sponsor / Scrum Master / Product Owner so the day matches how this team actually works
- One full day with **one team, up to 10 people**
- Facilitation practice, working agreements, and conflict/feedback exercises
- Written working agreements and a takeaway toolkit (a recap the team can use, not an assessment report)

**Effort model:** about **2 days** once the exercise set is reusable (intake and design, full-day delivery, capture of agreements and toolkit). The day in the room is one day; prep and write-up are the second.

**Rate check:** 2 days × CA $3,000 = CA $6,000. List at **CA $6,000**.

**Market bands considered:**

- CA $3,000: Delivery Immersion Day — observe, debrief, recap; no designed workshop or team artifact
- CA $3,500–$4,000: standalone culture workshop with little prep or write-up
- CA $3,500–$8,500/day: named workshop with heavy prep
- CA $550/person × two online days: public Scrum Master / Product Owner seats — different product

**Rejected:**

- CA $3,000 — same as Immersion Day; underprices design and capture
- CA $4,000–$4,500 — looks like a light workshop; after prep it falls below the day rate
- CA $7,500+ — 2.5-day effort; too high for one day in the room unless the write-up becomes a report
- Per-person list price — a 7-person team would look cheaper than a 10-person team and invites adding seats
- Stripe Pay now — needs a date, a roster, and often travel

**Add-ons (quote separately):** extra people above 10; a second team or second day; on-site travel.

**Scope protection:** hold CA $6,000 at one team, up to 10 people, one full day, short intake, and written agreements plus toolkit. Extra people, extra days, or travel expand the quote.

### 2026-09-09 — Coaching Program Session

- **Offer:** Coaching Program Session (`coaching-program-session`)
- **List price:** CA $150 plus tax, one-time 60 minutes
- **CTA:** contact / invoice, not Stripe
- **Does not replace:** General 30 min Consultation Call (`general-consultation`); 1:1 Coaching (`individual-coaching`)

**Why this product:** a gated, one-time ICF coaching hour for people already in a coaching program, or preparing to join one, who need to experience professional coaching as a program requirement. Not an entry consult and not the published 1:1 hour.

**Delivery (standard session):**

- One 60-minute confidential session
- ICF Professional Certified Coach
- Video or in person
- One session only — not a package

**Eligibility:** stated on the card. No document upload. When they get in touch, they name the program and its coaching requirement; confirm before booking.

**Effort model:** one session plus light intake to confirm eligibility. This is a program-requirement SKU, not the senior PCC hour.

**Rate check:** list **CA $150**. Keep the label **one-time · 60 minutes** so it does not read as the CA $550 1:1 hour.

**Rejected:**

- Stripe Pay now — eligibility needs a conversation before booking
- Publishing this as a cheap 1:1 alternative — the $550 hour remains the default coaching offer
- A package or session pack — this is a one-time program requirement

**Scope protection:** hold CA $150 at one 60-minute session for someone in, or joining, a program that requires this coaching. Ongoing 1:1 work stays on the CA $550 card.
