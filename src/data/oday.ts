// Oday — Pre-Reader / Emergent Writer programme.
// Separate from the shared STUDENTS system.
// See docs/oday-10-week-plan.md for the 10-week curriculum.

export interface WarmupTraceActivity {
  type: 'warmup-trace';
  title: string;
  instr: string;
  words: string[]; // words/letters to trace
}

export interface AlphabetFocusActivity {
  type: 'alphabet-focus';
  title: string;
  instr: string;
  letters: {
    letter: string; // uppercase
    iconKey: string;
    word: string;
  }[];
}

export interface SightWordActivity {
  type: 'sight-word';
  title: string;
  instr: string;
  words: string[];
  circleSentences?: string[];
}

export interface PictureWordMatchActivity {
  type: 'picture-word-match';
  title: string;
  instr: string;
  pairs: { iconKey: string; word: string }[];
}

export interface CVCBuildActivity {
  type: 'cvc-build';
  title: string;
  instr: string;
  items: {
    iconKey: string;
    word: string;
    missing: number; // index of the letter to fill in
  }[];
}

export interface ColourLabelActivity {
  type: 'colour-label';
  title: string;
  instr: string;
  items: { iconKey: string; word: string }[];
}

export interface SentenceCopyActivity {
  type: 'sentence-copy';
  title: string;
  instr: string;
  sentences: { iconKey: string; sentence: string }[];
}

export type OdayActivity =
  | WarmupTraceActivity
  | AlphabetFocusActivity
  | SightWordActivity
  | PictureWordMatchActivity
  | CVCBuildActivity
  | ColourLabelActivity
  | SentenceCopyActivity;

export interface OdayDay {
  date: string; // YYYY-MM-DD
  week: number;
  day: number; // 1–5 (Mon–Fri)
  focus: string;
  activities: OdayActivity[];
  teacherNote?: string;
}

// ── WEEK 1 · Letters A–H · Sight words: I, me, the · CVC: -at ────
// Day 1 of programme is a Monday.

const w1d1: OdayDay = {
  date: '2026-07-20',
  week: 1,
  day: 1,
  focus: 'Letters A–C · Sight word "I" · CVC: cat, hat, bat',
  activities: [
    {
      type: 'warmup-trace',
      title: 'Warm-up · Trace',
      instr: 'Trace over each shape three times. Say the letter as you write.',
      words: ['Oday', 'A', 'B', 'C'],
    },
    {
      type: 'alphabet-focus',
      title: 'Letters Today · A B C',
      instr: 'Trace the letter. Say the sound. Look at the picture.',
      letters: [
        { letter: 'A', iconKey: 'apple', word: 'apple' },
        { letter: 'B', iconKey: 'ball', word: 'ball' },
        { letter: 'C', iconKey: 'cat', word: 'cat' },
      ],
    },
    {
      type: 'sight-word',
      title: 'Sight Word · I',
      instr: 'Trace five times. Copy five times. Then circle the word I in each sentence.',
      words: ['I'],
      circleSentences: ['I am here.', 'See I go up.', 'I like tea.'],
    },
    {
      type: 'picture-word-match',
      title: 'Match Picture to Word',
      instr: 'Draw a line from each picture to the correct word. Then copy each word on the line.',
      pairs: [
        { iconKey: 'cat', word: 'cat' },
        { iconKey: 'dog', word: 'dog' },
        { iconKey: 'sun', word: 'sun' },
        { iconKey: 'hat', word: 'hat' },
        { iconKey: 'cup', word: 'cup' },
        { iconKey: 'bed', word: 'bed' },
        { iconKey: 'bag', word: 'bag' },
        { iconKey: 'pen', word: 'pen' },
      ],
    },
    {
      type: 'cvc-build',
      title: 'Build the Word · -at family',
      instr: 'Look at the picture. Write the missing letter to finish the word.',
      items: [
        { iconKey: 'cat', word: 'cat', missing: 1 },
        { iconKey: 'hat', word: 'hat', missing: 1 },
        { iconKey: 'bat', word: 'bat', missing: 1 },
      ],
    },
    {
      type: 'colour-label',
      title: 'Colour and Label',
      instr: 'Colour the picture. Then write the word on the line.',
      items: [{ iconKey: 'apple', word: 'apple' }],
    },
    {
      type: 'sentence-copy',
      title: 'Copy the Sentence',
      instr: 'Read the sentence with your teacher. Copy it on the line below.',
      sentences: [{ iconKey: 'cat', sentence: 'I see a cat.' }],
    },
  ],
  teacherNote:
    'Focus: letter recognition A/B/C and the sight word "I". Watch for correct pencil grip and letter formation direction. Sound each CVC word out slowly together.',
};

const w1d2: OdayDay = {
  date: '2026-07-21',
  week: 1,
  day: 2,
  focus: 'Letters D–E · Sight word "me" · CVC: mat, rat',
  activities: [
    {
      type: 'warmup-trace',
      title: 'Warm-up · Trace',
      instr: 'Trace over each shape three times. Say the letter as you write.',
      words: ['Oday', 'D', 'E'],
    },
    {
      type: 'alphabet-focus',
      title: 'Letters Today · D E',
      instr: 'Trace the letter. Say the sound. Look at the picture.',
      letters: [
        { letter: 'D', iconKey: 'dog', word: 'dog' },
        { letter: 'E', iconKey: 'egg', word: 'egg' },
      ],
    },
    {
      type: 'sight-word',
      title: 'Sight Word · me',
      instr: 'Trace five times. Copy five times. Then circle the word me in each sentence.',
      words: ['me'],
      circleSentences: ['See me go.', 'The dog and me.', 'Help me up.'],
    },
    {
      type: 'picture-word-match',
      title: 'Match Picture to Word',
      instr: 'Draw a line from each picture to the correct word. Then copy each word.',
      pairs: [
        { iconKey: 'dog', word: 'dog' },
        { iconKey: 'egg', word: 'egg' },
        { iconKey: 'cat', word: 'cat' },
        { iconKey: 'apple', word: 'apple' },
        { iconKey: 'ball', word: 'ball' },
        { iconKey: 'sun', word: 'sun' },
        { iconKey: 'bed', word: 'bed' },
        { iconKey: 'pen', word: 'pen' },
      ],
    },
    {
      type: 'cvc-build',
      title: 'Build the Word · -at family',
      instr: 'Look at the picture. Write the missing letter to finish the word.',
      items: [
        { iconKey: 'mat', word: 'mat', missing: 1 },
        { iconKey: 'rat', word: 'rat', missing: 1 },
        { iconKey: 'bat', word: 'bat', missing: 2 },
      ],
    },
    {
      type: 'colour-label',
      title: 'Colour and Label',
      instr: 'Colour the picture. Then write the word on the line.',
      items: [{ iconKey: 'dog', word: 'dog' }],
    },
    {
      type: 'sentence-copy',
      title: 'Copy the Sentence',
      instr: 'Read the sentence with your teacher. Copy it on the line below.',
      sentences: [{ iconKey: 'dog', sentence: 'I see me and the dog.' }],
    },
  ],
  teacherNote:
    'Focus: letters D and E, and the sight word "me". Reinforce "I" from yesterday. Keep letter names and sounds separate — say the sound first.',
};

const w1d3: OdayDay = {
  date: '2026-07-22',
  week: 1,
  day: 3,
  focus: 'Letter F · Sight word "the" · CVC: -at review',
  activities: [
    {
      type: 'warmup-trace',
      title: 'Warm-up · Trace',
      instr: 'Trace over each shape three times. Say the letter as you write.',
      words: ['Oday', 'F', 'f'],
    },
    {
      type: 'alphabet-focus',
      title: 'Letter Today · F',
      instr: 'Trace the letter. Say the sound. Look at the picture.',
      letters: [{ letter: 'F', iconKey: 'fish', word: 'fish' }],
    },
    {
      type: 'sight-word',
      title: 'Sight Word · the',
      instr: 'Trace five times. Copy five times. Then circle the word the in each sentence.',
      words: ['the'],
      circleSentences: ['I see the cat.', 'The dog is here.', 'Get the bag.'],
    },
    {
      type: 'picture-word-match',
      title: 'Match Picture to Word',
      instr: 'Draw a line from each picture to the correct word. Then copy each word.',
      pairs: [
        { iconKey: 'fish', word: 'fish' },
        { iconKey: 'cat', word: 'cat' },
        { iconKey: 'dog', word: 'dog' },
        { iconKey: 'hat', word: 'hat' },
        { iconKey: 'mat', word: 'mat' },
        { iconKey: 'sun', word: 'sun' },
        { iconKey: 'cup', word: 'cup' },
        { iconKey: 'egg', word: 'egg' },
      ],
    },
    {
      type: 'cvc-build',
      title: 'Build the Word · -at family',
      instr: 'Look at the picture. Write the missing letter to finish the word.',
      items: [
        { iconKey: 'cat', word: 'cat', missing: 0 },
        { iconKey: 'hat', word: 'hat', missing: 0 },
        { iconKey: 'rat', word: 'rat', missing: 0 },
      ],
    },
    {
      type: 'colour-label',
      title: 'Colour and Label',
      instr: 'Colour the picture. Then write the word on the line.',
      items: [{ iconKey: 'fish', word: 'fish' }],
    },
    {
      type: 'sentence-copy',
      title: 'Copy the Sentence',
      instr: 'Read the sentence with your teacher. Copy it on the line below.',
      sentences: [{ iconKey: 'fish', sentence: 'I see the fish.' }],
    },
  ],
  teacherNote:
    'Focus: letter F and "the" (tricky — silent H sound). Two sight words now (I, me, the) — quick oral review at start.',
};

const w1d4: OdayDay = {
  date: '2026-07-23',
  week: 1,
  day: 4,
  focus: 'Letters G–H · All week 1 sight words · CVC review + write',
  activities: [
    {
      type: 'warmup-trace',
      title: 'Warm-up · Trace',
      instr: 'Trace over each shape three times. Say the letter as you write.',
      words: ['Oday', 'G', 'H'],
    },
    {
      type: 'alphabet-focus',
      title: 'Letters Today · G H',
      instr: 'Trace the letter. Say the sound. Look at the picture.',
      letters: [
        { letter: 'G', iconKey: 'goat', word: 'goat' },
        { letter: 'H', iconKey: 'hat', word: 'hat' },
      ],
    },
    {
      type: 'sight-word',
      title: 'Sight Words · I · me · the',
      instr: 'Trace each word three times. Then circle the sight word in each sentence.',
      words: ['I', 'me', 'the'],
      circleSentences: ['I see the cat.', 'The dog and me.', 'Help me get the ball.'],
    },
    {
      type: 'picture-word-match',
      title: 'Match Picture to Word',
      instr: 'Draw a line from each picture to the correct word. Then copy each word.',
      pairs: [
        { iconKey: 'goat', word: 'goat' },
        { iconKey: 'hat', word: 'hat' },
        { iconKey: 'apple', word: 'apple' },
        { iconKey: 'ball', word: 'ball' },
        { iconKey: 'cat', word: 'cat' },
        { iconKey: 'dog', word: 'dog' },
        { iconKey: 'egg', word: 'egg' },
        { iconKey: 'fish', word: 'fish' },
      ],
    },
    {
      type: 'cvc-build',
      title: 'Build the Word · Write the whole word',
      instr: 'Look at the picture. Write the whole word underneath.',
      items: [
        { iconKey: 'cat', word: 'cat', missing: -1 },
        { iconKey: 'hat', word: 'hat', missing: -1 },
        { iconKey: 'bat', word: 'bat', missing: -1 },
      ],
    },
    {
      type: 'colour-label',
      title: 'Colour and Label',
      instr: 'Colour the picture. Then write the word on the line.',
      items: [{ iconKey: 'goat', word: 'goat' }],
    },
    {
      type: 'sentence-copy',
      title: 'Copy the Sentence',
      instr: 'Read the sentence with your teacher. Copy it on the line below.',
      sentences: [{ iconKey: 'hat', sentence: 'The hat is on the mat.' }],
    },
  ],
  teacherNote:
    'Focus: G and H, and consolidating this week\'s three sight words. CVC now requires the whole word (missing: -1 means blank line, no letter shown).',
};

const w1d5: OdayDay = {
  date: '2026-07-24',
  week: 1,
  day: 5,
  focus: 'Friday review · A–H · I/me/the · -at family · Free draw',
  activities: [
    {
      type: 'warmup-trace',
      title: 'Warm-up · My name',
      instr: 'Trace your name three times. Then write your name on the last line by yourself.',
      words: ['Oday'],
    },
    {
      type: 'alphabet-focus',
      title: 'Letter Review · A B C D E F G H',
      instr: 'Trace each letter. Say the sound and the word. Circle the letters you know well.',
      letters: [
        { letter: 'A', iconKey: 'apple', word: 'apple' },
        { letter: 'B', iconKey: 'ball', word: 'ball' },
        { letter: 'C', iconKey: 'cat', word: 'cat' },
        { letter: 'D', iconKey: 'dog', word: 'dog' },
        { letter: 'E', iconKey: 'egg', word: 'egg' },
        { letter: 'F', iconKey: 'fish', word: 'fish' },
        { letter: 'G', iconKey: 'goat', word: 'goat' },
        { letter: 'H', iconKey: 'hat', word: 'hat' },
      ],
    },
    {
      type: 'sight-word',
      title: 'Sight Word Review · I · me · the',
      instr: 'Write each word three times without tracing.',
      words: ['I', 'me', 'the'],
    },
    {
      type: 'picture-word-match',
      title: 'Match Picture to Word',
      instr: 'Draw a line from each picture to the correct word. Then copy each word.',
      pairs: [
        { iconKey: 'cat', word: 'cat' },
        { iconKey: 'hat', word: 'hat' },
        { iconKey: 'bat', word: 'bat' },
        { iconKey: 'mat', word: 'mat' },
        { iconKey: 'rat', word: 'rat' },
        { iconKey: 'apple', word: 'apple' },
        { iconKey: 'ball', word: 'ball' },
        { iconKey: 'sun', word: 'sun' },
      ],
    },
    {
      type: 'cvc-build',
      title: 'Build the Word · -at family review',
      instr: 'Look at the picture. Write the whole word.',
      items: [
        { iconKey: 'cat', word: 'cat', missing: -1 },
        { iconKey: 'hat', word: 'hat', missing: -1 },
        { iconKey: 'mat', word: 'mat', missing: -1 },
        { iconKey: 'rat', word: 'rat', missing: -1 },
        { iconKey: 'bat', word: 'bat', missing: -1 },
      ],
    },
    {
      type: 'colour-label',
      title: 'Free Colour',
      instr: 'Choose one picture. Colour it. Then write the word.',
      items: [
        { iconKey: 'cat', word: 'cat' },
        { iconKey: 'dog', word: 'dog' },
        { iconKey: 'sun', word: 'sun' },
      ],
    },
    {
      type: 'sentence-copy',
      title: 'Copy the Sentence',
      instr: 'Read the sentence with your teacher. Copy it on the line below.',
      sentences: [{ iconKey: 'cat', sentence: 'I see the cat and the hat.' }],
    },
  ],
  teacherNote:
    'Friday review. Loosen tracing — ask student to write letters and words unaided where possible. Note which letters/words needed prompting.',
};

// ── EXPORT ────────────────────────────────────────────────────────

export const ODAY_SESSIONS: OdayDay[] = [w1d1, w1d2, w1d3, w1d4, w1d5];

export function findOdayDay(date: string): OdayDay | undefined {
  return ODAY_SESSIONS.find((d) => d.date === date);
}
