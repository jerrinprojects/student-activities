# Oday · 10-Week Pre-Reader Programme

**Student:** Oday
**Age:** Year 7 (cognitively developed)
**Reading level:** Pre-reader / Emergent writer (Prep / Kindy)
**First language:** Arabic (but cannot read Arabic either — no L1 literacy)
**English:** Alphabet only, some sight words attempted (I, me, the, hi)

## Design principles

- **Not childish** — Year 7 self-image. Clean line drawings, not baby pastel cartoons.
- **Visual-first** — SVG icons for every word. Can be worked through with minimal teacher support once routine is understood.
- **Spiral curriculum** — new skill added each week, but previous weeks' content revisited daily.
- **60 minutes per day, 5 days per week** (Mon–Fri).
- **Arabic text removed** — student cannot read Arabic, only adds noise. Icons + English only.

## Daily 60-minute structure (7 activities)

| # | Activity | Time | Purpose |
|---|---|---|---|
| 1 | Warm-up trace | 5 min | Own name + focus letters (fine motor + identity) |
| 2 | Alphabet focus | 10 min | 3–4 letters, upper/lower match, letter-sound with SVG |
| 3 | Sight word trace + copy | 10 min | 1–3 sight words × 5 traces + 5 copies + circle-in-sentence |
| 4 | Picture-word match | 10 min | 8 SVG pictures ↔ words, then copy each word |
| 5 | CVC word build | 10 min | Picture + missing letter (c_t → a) or arrange letters |
| 6 | Colour & label | 10 min | Colour SVG line drawing, write the word |
| 7 | Sentence copy | 5 min | 1 simple sentence with picture, copy on lines below |

## 10-week curriculum overview

| Week | Alphabet | Sight Words | CVC / Pattern | Extra |
|---|---|---|---|---|
| **1** | A B C D E F G H | I, me, the | -at (cat, hat, bat, mat, rat) | Establish name: O-d-a-y |
| **2** | I J K L M N O P | am, we, is | -og (dog, log, fog, jog, hog) | Colours: red, blue, green |
| **3** | Q R S T U V W X Y Z | go, on, up | -un (sun, run, fun, bun, gun) | Numbers 1–5 |
| **4** | REVIEW A–Z | Review all prior | -ig (pig, big, dig, wig, fig) | Family: mum, dad, brother |
| **5** | Digraphs: sh, ch | this, that, and | -op (top, hop, mop, pop, cop) | Body: eye, ear, hand |
| **6** | Digraphs: th, wh | to, of, for, in | -ot (pot, hot, dot, cot, not) | Numbers 6–10 |
| **7** | Blends: bl, cl, fl | yes, no, can, see | -ed (bed, red, fed, led, wed) | Simple sentence reading: "I can see" |
| **8** | Blends: st, sp, sk | like, come, look, play | -en (hen, pen, ten, den, men) | Emotions: happy, sad |
| **9** | Long vowel: a_e | was, said, are, have | Double + y: happy, sunny, funny | 2-sentence stories |
| **10** | ASSESSMENT + Review | ALL sight words | Mixed CVC review | Independent read/write name + family |

## Weekly cadence rule

Each week has 5 days. Every day works on **that week's alphabet + sight words + CVC pattern**, but activities also cycle through content from earlier weeks to reinforce.

Example — a Week 3 day might feature:
- Alphabet focus on Q/R/S (new)
- Sight word "go" (new)
- Picture-word match includes items from Weeks 1–3 (spiral)
- CVC build on -un (new)
- Sentence copy uses only sight words already introduced

## Icon library requirements per week

Icons needed to build week's activities. Add to `src/icons/oday/` as they come up.

- **Week 1**: apple, ball, cat, dog, egg, fish, goat, hat, sun, bed, bag, pen, cup, bat, mat, rat, boy (for O), Oday (custom name)
- **Week 2**: ink, jam, kite, leaf, mouse, nut, orange, pig, log, fog (cloud), jog (runner), red/blue/green swatches
- **Week 3**: queen, rock, snake, tree, umbrella, van, whale, box (x), yak, zip, run, fun, bun, gun (avoid → use nun or spun); numbers 1–5
- **Week 4**: family portraits (mum, dad, brother, sister), pig, big, dig, wig, fig
- **Week 5**: ship, chip, chin, shop, top, hop, mop, pop, eye, ear, hand
- **Week 6**: think (SVG brain), whale, pot, hot pan, dot; numbers 6–10
- **Week 7**: black, block, clock, flag; bed, red apple, fed baby; "see" eyes
- **Week 8**: star, stop, spider, sport, skip, skate; hen, pen, ten fingers, den
- **Week 9**: cake, gate, plate; house, mouse; sunny sun, funny face, happy face
- **Week 10**: assessment charts + review icons

## Extras (add if time)

- **Teacher note** at bottom of each day: today's target skills + observation tips
- **Progress checklist page** (after Week 10) — tick off mastered letters/sight words/CVC families
- **Weekly free-draw page** — Friday afternoon: just draw something (relief from strict skill work)
- **Home takeaway card** — day's sight words + CVC family, given to family (someone at home may help sound out with student)

## Files

- Data: `src/data/oday.ts` — types + `ODAY_SESSIONS` array
- Icons: `src/icons/oday/index.tsx` — React SVG components, `OdayIcon({name})` lookup
- Pages: `src/pages/OdayHome.tsx` (list days), `src/pages/OdayPrintPage.tsx` (print one day)
- Routes: `/oday`, `/oday/print/:date`
- Home card: add "Oday · Pre-Reader" card

## Isolation rule

Oday's system is **completely separate** from the other 8 students' shared literacy system:
- Oday is NOT in the `STUDENTS` array in `literacy.ts`
- Oday does NOT appear in `LiteracyPage` / `StudentPage` / `SessionPage` / `PrintPage`
- Oday's activities do NOT use the `ActivitySet` type

Other students' code is untouched.

## Notes on tone

- Line drawings, 2px stroke, mostly black on white with occasional single accent colour
- Fonts: serif for read-out-loud text (helps letter shape recognition), sans-serif for UI
- No exclamation marks, no "Great job!", no baby-talk instructions
- Instruction style: direct verbs — "Trace.", "Copy.", "Circle.", "Match."
