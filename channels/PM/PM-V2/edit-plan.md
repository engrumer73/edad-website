# Edit plan — PM-V2: How a Chatbot Actually Writes Its Answer

Channel: Plain Machine · Publish: Thu 3 Dec · Format: 1920x1080, 30 fps

**Channel rules:** friendly, sceptical, plain English; real screen recordings of tools (record them yourself); no financial, legal or medical advice; mark any reconstruction as "reconstruction."

**Music cue:** Audio Library → Electronic, Mood: Bright; light and clean.

> **Status: DRAFT.** Timings below are *estimated* from word count (608 words at ~150 wpm ≈ 4:17). Re-time every shot against the real voiceover.mp3 (word timestamps) before building. Sources in the log are planned categories; exact files, URLs and licences are filled in when visuals are downloaded.

> **Under 8:00 (est. 4:17).** Length note: none in pack — hold calm shots longer / add beats.

## Shot list

| # | In (est.) | Out (est.) | Shot / visual needed | Planned source | Narration starts |
|---|---|---|---|---|---|
| 1 | 0:00 | 0:08 | CUE: Cold open: screen recording of a chatbot answer appearing word by word. | Own screen recording (user records) | Watch a chatbot answer you. It doesn't appear all at once. It streams,… |
| 2 | 0:09 | 0:21 | B-roll for narration (no cue) — pick at build; hold 6–8 s per still | Own screen recording (user to record) or Video Hub UI mock marked 'reconstruction' | That's not just a visual effect. That's genuinely how it works. It's b… |
| 3 | 0:21 | 0:27 | B-roll for narration (no cue) — pick at build; hold 6–8 s per still | Own screen recording (user to record) or Video Hub UI mock marked 'reconstruction' | Once you understand tokens, a lot of strange AI behaviour suddenly mak… |
| 4 | 0:28 | 0:28 | CUE: Title card. | Video Hub text/section card (channel font + colours) | OpenAI describes tokens as the units its models use to process text. A… |
| 4 | 0:28 | 0:42 | CUE: Section card: "What a token is." | Video Hub text/section card (channel font + colours) | OpenAI describes tokens as the units its models use to process text. A… |
| 5 | 0:42 | 0:58 | CUE: Animation: the sentence "Chatbots are surprisingly predictable" splitting into coloured chunks; "surprisingly" splits into two. | Video Hub 2D motion graphic | Common short words are usually one token. Longer or rarer words get sp… |
| 6 | 0:58 | 1:13 | B-roll for narration (no cue) — pick at build; hold 6–8 s per still | Own screen recording (user to record) or Video Hub UI mock marked 'reconstruction' | The method most of these models use is called subword tokenization. Op… |
| 7 | 1:14 | 1:26 | CUE: Section card: "Rules of thumb." | Video Hub text/section card (channel font + colours) | How big is a token? For English, OpenAI's rough rules are: one token i… |
| 8 | 1:26 | 1:41 | CUE: On screen: "1 token ≈ 4 characters ≈ ¾ of a word"; "100 tokens ≈ 75 words." | Video Hub text/section card (channel font + colours) | Other languages split differently. OpenAI's own example: the Spanish p… |
| 9 | 1:41 | 1:50 | CUE: Section card: "Red vs red." | Video Hub text/section card (channel font + colours) | Here's a detail I find fascinating. To the model, the same word can be… |
| 10 | 1:50 | 2:08 | B-roll for narration (no cue) — pick at build; hold 6–8 s per still | Own screen recording (user to record) or Video Hub UI mock marked 'reconstruction' | In OpenAI's tokenizer, " Red" — with a space before it and a capital R… |
| 11 | 2:08 | 2:16 | CUE: Visual: two blocks, " Red" = 2296 and " red" = 2266, with a thin line between them. | Video Hub 2D motion graphic | So when you type, the model never sees letters the way you do. It sees… |
| 12 | 2:16 | 2:32 | CUE: Section card: "How the next token is chosen." | Video Hub text/section card (channel font + colours) | Now for the actual writing. OpenAI lays out three steps: your text is … |
| 13 | 2:32 | 2:49 | CUE: Animation: input text → numbers → a box labelled "model" → a ranked list of candidate next tokens → one gets picked and added → repeat. | Video Hub text/section card (channel font + colours) + Video Hub 2D motion graphic | That last step is the heart of it. At each step, the model predicts wh… |
| 14 | 2:50 | 3:01 | B-roll for narration (no cue) — pick at build; hold 6–8 s per still | Own screen recording (user to record) or Video Hub UI mock marked 'reconstruction' | It never plans the whole paragraph in advance the way you might. It's … |
| 15 | 3:01 | 3:03 | CUE: Section card: "Why tokens explain AI quirks." | Video Hub text/section card (channel font + colours) | This explains a lot.… |
| 16 | 3:03 | 3:13 | B-roll for narration (no cue) — pick at build; hold 6–8 s per still | Own screen recording (user to record) or Video Hub UI mock marked 'reconstruction' | It's why chatbots have length limits — they're measured in tokens, not… |
| 17 | 3:13 | 3:17 | B-roll for narration (no cue) — pick at build; hold 6–8 s per still | Own screen recording (user to record) or Video Hub UI mock marked 'reconstruction' | It's why AI pricing for developers is per token.… |
| 18 | 3:17 | 3:34 | B-roll for narration (no cue) — pick at build; hold 6–8 s per still | Own screen recording (user to record) or Video Hub UI mock marked 'reconstruction' | And it's a big part of why chatbots can be oddly bad at things that se… |
| 19 | 3:34 | 3:51 | B-roll for narration (no cue) — pick at build; hold 6–8 s per still | Own screen recording (user to record) or Video Hub UI mock marked 'reconstruction' | It also connects to Monday's video about AI making things up. If the m… |
| 20 | 3:52 | 4:02 | CUE: Outro: the streaming answer from the cold open, now with token blocks overlaid. | Video Hub 2D motion graphic | So the next time you watch an answer stream onto your screen, you'll k… |
| 21 | 4:03 | 4:11 | B-roll for narration (no cue) — pick at build; hold 6–8 s per still | Own screen recording (user to record) or Video Hub UI mock marked 'reconstruction' | Next time: why AI uses so much electricity, and where all that power g… |
| 22 | 4:12 | 4:17 | CUE: HANDS-ON SEGMENT (user records, adds ~1 min): Screen recording of OpenAI's free Tokenizer tool at platform.openai.com/tokenizer: paste a sentence, show the colour-coded tokens and count; then paste the same sentence in another language and compare. | Own screen recording (user records) | (outro)… |

## Shorts (cut from the long video)

| Short | Cut from | Hook text (first 2 s) | Title | Opening shot / text position / accent |
|---|---|---|---|---|
| PM-V2-S1 | Cold open | "It's not typing. It's predicting." | Why AI answers appear word by word | unique first frame; hook text top; accent #1 of channel palette |
| PM-V2-S2 | What a token is | "AI doesn't read words." | What is a token? | unique first frame; hook text centre; accent #2 of channel palette |
| PM-V2-S3 | Rules of thumb | "100 tokens is about 75 words." | How big is a token? | unique first frame; hook text bottom-third; accent #3 of channel palette |
| PM-V2-S4 | Red vs red | "To AI, 'Red' and 'red' are different." | The token trick nobody notices | unique first frame; hook text top-left; accent #4 of channel palette |
| PM-V2-S5 | How the next token is chosen | "It never plans the whole sentence." | How AI picks the next word | unique first frame; hook text centre; accent #5 of channel palette |
| PM-V2-S6 | Tokenizer demo | "Let's see how AI chops up a sentence." | Watch AI tokenize text | unique first frame; hook text top; accent #6 of channel palette |
| PM-V2-S7 | Why tokens explain quirks | "This is why AI can't count letters." | Tokens explain AI's weird mistakes | unique first frame; hook text bottom-third; accent #7 of channel palette |

## Asset & licence log

| Shot | File | Source URL | Creator | Licence | Credit needed? |
|---|---|---|---|---|---|
| — | (filled in during sourcing) | | | | |
