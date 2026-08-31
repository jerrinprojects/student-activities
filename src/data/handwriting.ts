// Handwriting — print script practice.
//
// These sheets are NOT tied to the eight literacy students. They are generic:
// a name line at the top, no student names anywhere, so the teacher can print
// as many copies of any sheet as needed and give it to whoever needs it.
//
// One sheet = one week = two pages (Mon/Tue/Wed on the front, Thu/Fri plus a
// self-check on the back), so a duplex print of N copies gives N sheets.
//
// Letters are grouped by the hand movement that makes them, not alphabetically,
// because that is what actually corrects formation:
//   c a d g q o e s   anticlockwise curve
//   b h k m n p r     straight down, then retrace up and over
//   i l t u v w x y z straight and diagonal
//   f j               the two that do not fit either group
// Four weeks covers the lot, then the cycle repeats.

export type HandwritingLevel = 1 | 2 | 3;

export interface HandwritingDay {
  day: string; // Monday ... Friday
  focus: string[]; // letters (or, at level 3, nothing — the passage is the work)
  warmUp: string; // pattern to repeat along the first line
  words: string[];
  sentence: string;
  note?: string; // one short reminder printed under the day
}

export interface HandwritingSheet {
  id: string; // used in the URL
  level: HandwritingLevel;
  week: number;
  title: string;
  focusSummary: string;
  lineHeight: 'large' | 'medium' | 'small';
  timed?: boolean; // level 3: the sentence line is written against the clock
  days: HandwritingDay[];
}

export const LEVELS: { level: HandwritingLevel; name: string; forWho: string }[] = [
  {
    level: 1,
    name: 'Level 1 · Forming the letters',
    forWho: 'Still working out how a letter is made. Large lines, three letters a day.',
  },
  {
    level: 2,
    name: 'Level 2 · Size and spacing',
    forWho: 'Letters are mostly right but sit at different heights or run together.',
  },
  {
    level: 3,
    name: 'Level 3 · Speed and consistency',
    forWho: 'Letters are fine. The work is keeping them legible at speed.',
  },
];

// ── LEVEL 1 · Forming the letters ─────────────────────────────────
// Three letters a day, large ruling, and the note names the movement.

const l1w1: HandwritingSheet = {
  id: 'l1-w1',
  level: 1,
  week: 1,
  title: 'Curved letters',
  focusSummary: 'c a d g q o e s',
  lineHeight: 'large',
  days: [
    {
      day: 'Monday',
      focus: ['c', 'o'],
      warmUp: 'c c c c c c c c c c',
      words: ['cot', 'cup', 'on', 'off'],
      sentence: 'The cup is on the cot.',
      note: 'Both start at two o\'clock and go back over the top.',
    },
    {
      day: 'Tuesday',
      focus: ['a', 'd'],
      warmUp: 'a a a a a a a a a a',
      words: ['and', 'add', 'dad', 'sad'],
      sentence: 'Dad had a sad day.',
      note: 'Make the c shape first, then the straight line down.',
    },
    {
      day: 'Wednesday',
      focus: ['g', 'q'],
      warmUp: 'g g g g q q q q g g',
      words: ['got', 'dog', 'egg', 'quit'],
      sentence: 'The dog got an egg.',
      note: 'Both drop below the line. g hooks back, q does not.',
    },
    {
      day: 'Thursday',
      focus: ['e', 's'],
      warmUp: 'e e e e s s s s e e',
      words: ['see', 'sea', 'less', 'said'],
      sentence: 'She said she can see the sea.',
      note: 'e starts in the middle and goes up first.',
    },
    {
      day: 'Friday',
      focus: ['c', 'a', 'd', 'g', 'o', 's'],
      warmUp: 'c a d g o s c a d g',
      words: ['dogs', 'goes', 'cards', 'across'],
      sentence: 'The dogs go across the sand.',
      note: 'All of this week\'s letters. Circle your best one.',
    },
  ],
};

const l1w2: HandwritingSheet = {
  id: 'l1-w2',
  level: 1,
  week: 2,
  title: 'Down and over',
  focusSummary: 'b h k m n p r',
  lineHeight: 'large',
  days: [
    {
      day: 'Monday',
      focus: ['n', 'm'],
      warmUp: 'n n n n m m m m n n',
      words: ['man', 'men', 'nine', 'moon'],
      sentence: 'The man ran to the moon.',
      note: 'Down, back up the same line, then over.',
    },
    {
      day: 'Tuesday',
      focus: ['h', 'b'],
      warmUp: 'h h h h b b b b h h',
      words: ['his', 'hot', 'bin', 'big'],
      sentence: 'He hid the big bin.',
      note: 'Tall letters go all the way up to the top line.',
    },
    {
      day: 'Wednesday',
      focus: ['r', 'p'],
      warmUp: 'r r r r p p p p r r',
      words: ['run', 'red', 'pen', 'pot'],
      sentence: 'The red pen ran out.',
      note: 'p drops below the line. r stops in the middle.',
    },
    {
      day: 'Thursday',
      focus: ['k'],
      warmUp: 'k k k k k k k k k k',
      words: ['kit', 'kind', 'like', 'milk'],
      sentence: 'I like the kind man.',
      note: 'One tall line, then two short arms from the middle.',
    },
    {
      day: 'Friday',
      focus: ['b', 'h', 'm', 'n', 'p', 'r'],
      warmUp: 'b h m n p r b h m n',
      words: ['number', 'bump', 'harm', 'proper'],
      sentence: 'Number the bumps on the ramp.',
      note: 'All of this week\'s letters. Circle your best one.',
    },
  ],
};

const l1w3: HandwritingSheet = {
  id: 'l1-w3',
  level: 1,
  week: 3,
  title: 'Straight and diagonal',
  focusSummary: 'i l t u v w x y z',
  lineHeight: 'large',
  days: [
    {
      day: 'Monday',
      focus: ['i', 'l', 't'],
      warmUp: 'i l t i l t i l t i',
      words: ['it', 'lit', 'till', 'little'],
      sentence: 'It is a little light.',
      note: 'l and t are tall. i is short, with the dot last.',
    },
    {
      day: 'Tuesday',
      focus: ['u', 'y'],
      warmUp: 'u u u u y y y y u u',
      words: ['up', 'us', 'yes', 'yet'],
      sentence: 'Yes, you can come up.',
      note: 'u sits on the line. y drops below it.',
    },
    {
      day: 'Wednesday',
      focus: ['v', 'w'],
      warmUp: 'v v v v w w w w v v',
      words: ['van', 'vet', 'win', 'wet'],
      sentence: 'The van went west.',
      note: 'Sharp points at the bottom, not curves.',
    },
    {
      day: 'Thursday',
      focus: ['x', 'z'],
      warmUp: 'x x x x z z z z x x',
      words: ['box', 'six', 'zip', 'buzz'],
      sentence: 'Six boxes and one zip.',
      note: 'Two crossing lines for x. Three straight lines for z.',
    },
    {
      day: 'Friday',
      focus: ['i', 'l', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
      warmUp: 'i l t u v w x y z i',
      words: ['quilt', 'twelve', 'lazy', 'yellow'],
      sentence: 'Twelve lazy yellow vans.',
      note: 'All of this week\'s letters. Circle your best one.',
    },
  ],
};

const l1w4: HandwritingSheet = {
  id: 'l1-w4',
  level: 1,
  week: 4,
  title: 'The last two, and a mix',
  focusSummary: 'f j + all groups',
  lineHeight: 'large',
  days: [
    {
      day: 'Monday',
      focus: ['f', 'j'],
      warmUp: 'f f f f j j j j f f',
      words: ['for', 'fun', 'jam', 'job'],
      sentence: 'The job was fun for me.',
      note: 'Both go above and below. j has the dot on top.',
    },
    {
      day: 'Tuesday',
      focus: ['a', 'n', 't'],
      warmUp: 'a n t a n t a n t a',
      words: ['ant', 'tan', 'want', 'plant'],
      sentence: 'An ant sat on the plant.',
      note: 'One curved, one down-and-over, one straight.',
    },
    {
      day: 'Wednesday',
      focus: ['o', 'm', 'y'],
      warmUp: 'o m y o m y o m y o',
      words: ['my', 'money', 'many', 'yes'],
      sentence: 'My money is in many bags.',
      note: 'Watch that y drops below the line every time.',
    },
    {
      day: 'Thursday',
      focus: ['s', 'h', 'i'],
      warmUp: 's h i s h i s h i s',
      words: ['his', 'ship', 'fish', 'wish'],
      sentence: 'I wish the ship was his.',
      note: 'sh together: short, tall, short.',
    },
    {
      day: 'Friday',
      focus: ['a', 'b', 'c', 'd', 'e'],
      warmUp: 'a b c d e a b c d e',
      words: ['because', 'candle', 'decide', 'bread'],
      sentence: 'I decided because of the bread.',
      note: 'End of the cycle. Compare Friday with Monday.',
    },
  ],
};

// ── LEVEL 2 · Size and spacing ────────────────────────────────────
// The letters are mostly formed. The work is height, sitting on the line,
// and leaving a finger space between words.

const l2w1: HandwritingSheet = {
  id: 'l2-w1',
  level: 2,
  week: 1,
  title: 'Tall, short and tail letters',
  focusSummary: 'b d h k l t · a c e m n o · g j p q y',
  lineHeight: 'medium',
  days: [
    {
      day: 'Monday',
      focus: ['b', 'd', 'h', 'k', 'l', 't'],
      warmUp: 'b d h k l t b d h k',
      words: ['bath', 'block', 'held', 'talk'],
      sentence: 'The tall block held the light.',
      note: 'Every one of these reaches the top line. No half-height tall letters.',
    },
    {
      day: 'Tuesday',
      focus: ['a', 'c', 'e', 'm', 'n', 'o'],
      warmUp: 'a c e m n o a c e m',
      words: ['come', 'once', 'name', 'moon'],
      sentence: 'Come and name the moon.',
      note: 'These all stop at the dotted line. Same height as each other.',
    },
    {
      day: 'Wednesday',
      focus: ['g', 'j', 'p', 'q', 'y'],
      warmUp: 'g j p q y g j p q y',
      words: ['jump', 'happy', 'quickly', 'garden'],
      sentence: 'Jump quickly into the garden.',
      note: 'Tails hang below the baseline. They do not sit on it.',
    },
    {
      day: 'Thursday',
      focus: [],
      warmUp: 'll tt hh bb kk ll tt',
      words: ['bottle', 'little', 'kettle', 'hall'],
      sentence: 'The little kettle sat in the hall.',
      note: 'Double letters: both the same height as each other.',
    },
    {
      day: 'Friday',
      focus: [],
      warmUp: 'one two three four five',
      words: ['the', 'and', 'said', 'because'],
      sentence: 'She said the box was under the bed.',
      note: 'One finger space between words. Check every gap.',
    },
  ],
};

const l2w2: HandwritingSheet = {
  id: 'l2-w2',
  level: 2,
  week: 2,
  title: 'Spacing and joins',
  focusSummary: 'word spacing · letter spacing',
  lineHeight: 'medium',
  days: [
    {
      day: 'Monday',
      focus: [],
      warmUp: 'in on at it is up',
      words: ['in the', 'on the', 'at the', 'to the'],
      sentence: 'The cat is in the box on the mat.',
      note: 'Small words still get a full space around them.',
    },
    {
      day: 'Tuesday',
      focus: [],
      warmUp: 'mmm nnn uuu www',
      words: ['minimum', 'summer', 'winner', 'running'],
      sentence: 'The winner ran all summer.',
      note: 'Letters inside a word stay the same distance apart.',
    },
    {
      day: 'Wednesday',
      focus: [],
      warmUp: 'A B C D E F G H',
      words: ['Monday', 'August', 'New Zealand', 'Mrs Patel'],
      sentence: 'On Monday Mrs Patel came to New Zealand.',
      note: 'Capitals are tall, but not taller than a tall letter.',
    },
    {
      day: 'Thursday',
      focus: [],
      warmUp: '. , ? ! . , ? !',
      words: ['Wait.', 'Stop!', 'Why?', 'yes, and'],
      sentence: 'Wait! Why did you stop?',
      note: 'A full stop sits on the line. It is not a circle.',
    },
    {
      day: 'Friday',
      focus: [],
      warmUp: 'the and said because',
      words: ['there', 'their', 'where', 'were'],
      sentence: 'They were there before we were.',
      note: 'End of week. Compare this line with Monday.',
    },
  ],
};

const l2w3: HandwritingSheet = {
  id: 'l2-w3',
  level: 2,
  week: 3,
  title: 'The letters that get muddled',
  focusSummary: 'b d · p q · n u · m w',
  lineHeight: 'medium',
  days: [
    {
      day: 'Monday',
      focus: ['b', 'd'],
      warmUp: 'b d b d b d b d b d',
      words: ['bed', 'bad', 'dab', 'bird'],
      sentence: 'The bird had a bed.',
      note: 'b: line first, then the belly. d: belly first, then the line.',
    },
    {
      day: 'Tuesday',
      focus: ['p', 'q'],
      warmUp: 'p q p q p q p q p q',
      words: ['pin', 'quiz', 'quick', 'pump'],
      sentence: 'The quick quiz had a pin in it.',
      note: 'Same rule as b and d, but both drop below the line.',
    },
    {
      day: 'Wednesday',
      focus: ['n', 'u'],
      warmUp: 'n u n u n u n u n u',
      words: ['nut', 'run', 'under', 'unit'],
      sentence: 'The nut ran under the van.',
      note: 'n is an arch over the top. u is a bowl at the bottom.',
    },
    {
      day: 'Thursday',
      focus: ['m', 'w'],
      warmUp: 'm w m w m w m w m w',
      words: ['warm', 'swim', 'mow', 'was'],
      sentence: 'We swim when it is warm.',
      note: 'm is round on top. w is pointed at the bottom.',
    },
    {
      day: 'Friday',
      focus: ['b', 'd', 'p', 'q', 'n', 'u', 'm', 'w'],
      warmUp: 'b d p q n u m w b d',
      words: ['bundle', 'dumped', 'window', 'quiet'],
      sentence: 'He dumped the bundle by the quiet window.',
      note: 'All eight. Read your own sentence back before you finish.',
    },
  ],
};

const l2w4: HandwritingSheet = {
  id: 'l2-w4',
  level: 2,
  week: 4,
  title: 'Writing it for real',
  focusSummary: 'keeping it neat over a whole sentence',
  lineHeight: 'medium',
  days: [
    {
      day: 'Monday',
      focus: [],
      warmUp: 'the of and to in is',
      words: ['answer', 'question', 'because', 'people'],
      sentence: 'Most people cannot answer that question.',
      note: 'Longer words. Keep the last letter as neat as the first.',
    },
    {
      day: 'Tuesday',
      focus: [],
      warmUp: '1 2 3 4 5 6 7 8 9 0',
      words: ['12 August', '3 metres', '40 minutes', '2026'],
      sentence: 'We waited 40 minutes for the 3 o\'clock bus.',
      note: 'Numbers are the same height as tall letters.',
    },
    {
      day: 'Wednesday',
      focus: [],
      warmUp: 'today I will write',
      words: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      sentence: 'On Wednesday I will finish the whole page.',
      note: 'Days of the week. Capital at the start every time.',
    },
    {
      day: 'Thursday',
      focus: [],
      warmUp: 'my name is my name',
      words: ['name', 'class', 'school', 'address'],
      sentence: 'Write your name and your class at the top.',
      note: 'Your own name should be the neatest thing you write.',
    },
    {
      day: 'Friday',
      focus: [],
      warmUp: 'the quick brown fox',
      words: ['jumps', 'over', 'lazy', 'dog'],
      sentence: 'The quick brown fox jumps over the lazy dog.',
      note: 'Every letter of the alphabet is in that sentence.',
    },
  ],
};

// ── LEVEL 3 · Speed and consistency ───────────────────────────────
// For children whose letters are already fine. Smaller ruling, a longer
// sentence, and the last line of each day is written against the clock.

const l3w1: HandwritingSheet = {
  id: 'l3-w1',
  level: 3,
  week: 1,
  title: 'Same shape at speed',
  focusSummary: 'staying legible when you hurry',
  lineHeight: 'small',
  timed: true,
  days: [
    {
      day: 'Monday',
      focus: [],
      warmUp: 'the and of to in is it for',
      words: ['common', 'letter', 'writing', 'quickly'],
      sentence: 'Writing quickly is not the same as writing badly.',
      note: 'One minute. Count how many words you finished, and write the number.',
    },
    {
      day: 'Tuesday',
      focus: [],
      warmUp: 'ing ing ing tion tion',
      words: ['running', 'question', 'attention', 'position'],
      sentence: 'Pay attention to the ending of every word.',
      note: 'Word endings collapse first when you speed up. Watch them.',
    },
    {
      day: 'Wednesday',
      focus: [],
      warmUp: 'that this then there they',
      words: ['whether', 'through', 'thought', 'together'],
      sentence: 'They thought about it together, and then they wrote.',
      note: 'One minute again. Try to beat Monday without losing the shape.',
    },
    {
      day: 'Thursday',
      focus: [],
      warmUp: 'a e i o u a e i o u',
      words: ['already', 'anything', 'everyone', 'usually'],
      sentence: 'Everyone usually writes worse at the end of a page.',
      note: 'Check the last line against the first. Are they the same size?',
    },
    {
      day: 'Friday',
      focus: [],
      warmUp: 'my best writing today',
      words: ['finished', 'careful', 'steady', 'legible'],
      sentence: 'Steady and legible beats fast and unreadable.',
      note: 'No clock today. Write the sentence as well as you can.',
    },
  ],
};

const l3w2: HandwritingSheet = {
  id: 'l3-w2',
  level: 3,
  week: 2,
  title: 'Holding it over a paragraph',
  focusSummary: 'not fading over three lines',
  lineHeight: 'small',
  timed: true,
  days: [
    {
      day: 'Monday',
      focus: [],
      warmUp: 'first next then after that',
      words: ['before', 'during', 'after', 'finally'],
      sentence: 'First I read it, then I wrote it, and finally I checked it.',
      note: 'One minute. Write the number of words you finished.',
    },
    {
      day: 'Tuesday',
      focus: [],
      warmUp: 'because so but although',
      words: ['however', 'instead', 'although', 'therefore'],
      sentence: 'It rained all week; however, the game was still played.',
      note: 'Long words at speed. Keep the tall letters tall.',
    },
    {
      day: 'Wednesday',
      focus: [],
      warmUp: 'Mr Mrs Ms Dr St Rd',
      words: ['Auckland', 'Thursday', 'September', 'Pukekohe'],
      sentence: 'On Thursday Mrs Reid drove to Pukekohe and back.',
      note: 'Capital letters at speed are the first thing to go.',
    },
    {
      day: 'Thursday',
      focus: [],
      warmUp: 'one line then the next',
      words: ['margin', 'spacing', 'baseline', 'slant'],
      sentence: 'Keep the same slant on every letter, all the way down.',
      note: 'Slant is personal, but it has to be the same slant each time.',
    },
    {
      day: 'Friday',
      focus: [],
      warmUp: 'compare monday and friday',
      words: ['improved', 'steady', 'neater', 'faster'],
      sentence: 'Compare this line with Monday and say what changed.',
      note: 'No clock. Then answer the question at the bottom of the page.',
    },
  ],
};

const l3w3: HandwritingSheet = {
  id: 'l3-w3',
  level: 3,
  week: 3,
  title: 'Writing while thinking',
  focusSummary: 'staying neat when the words are your own',
  lineHeight: 'small',
  timed: true,
  days: [
    {
      day: 'Monday',
      focus: [],
      warmUp: 'I think that I think',
      words: ['reason', 'example', 'opinion', 'evidence'],
      sentence: 'Give one reason and one example for what you think.',
      note: 'Copy the sentence, then write one of your own underneath.',
    },
    {
      day: 'Tuesday',
      focus: [],
      warmUp: 'in my view I would say',
      words: ['believe', 'suppose', 'certain', 'perhaps',],
      sentence: 'I am certain about the first part and not the second.',
      note: 'Your own sentence underneath. It should look like the copy.',
    },
    {
      day: 'Wednesday',
      focus: [],
      warmUp: 'notes are still writing',
      words: ['quickly', 'roughly', 'shorten', 'abbreviate'],
      sentence: 'Notes are only useful if you can read them next week.',
      note: 'One minute of your own notes about anything. Then read it back.',
    },
    {
      day: 'Thursday',
      focus: [],
      warmUp: 'a list: one two three',
      words: ['finally', 'secondly', 'lastly', 'therefore'],
      sentence: 'Firstly the soil, secondly the water, lastly the light.',
      note: 'Lists slide downhill. Keep every item on the line.',
    },
    {
      day: 'Friday',
      focus: [],
      warmUp: 'my writing this week',
      words: ['legible', 'consistent', 'controlled', 'finished'],
      sentence: 'Consistent writing is worth more than beautiful writing.',
      note: 'No clock. Best effort, then the self-check on this page.',
    },
  ],
};

const l3w4: HandwritingSheet = {
  id: 'l3-w4',
  level: 3,
  week: 4,
  title: 'Under exam conditions',
  focusSummary: 'legible at the end of a long piece',
  lineHeight: 'small',
  timed: true,
  days: [
    {
      day: 'Monday',
      focus: [],
      warmUp: 'answer the question asked',
      words: ['explain', 'describe', 'compare', 'discuss'],
      sentence: 'Explain what happened and then describe why it mattered.',
      note: 'One minute. These four words start most test questions.',
    },
    {
      day: 'Tuesday',
      focus: [],
      warmUp: 'plan first then write',
      words: ['introduction', 'paragraph', 'conclusion', 'sentence'],
      sentence: 'A paragraph is one idea, not one page.',
      note: 'Long words under time pressure. Do not let them shrink.',
    },
    {
      day: 'Wednesday',
      focus: [],
      warmUp: 'three lines without stopping',
      words: ['continue', 'without', 'stopping', 'keeping'],
      sentence: 'Keep going for three lines without lifting your eyes.',
      note: 'Three full lines, no pause. Then look at line three.',
    },
    {
      day: 'Thursday',
      focus: [],
      warmUp: 'check it before you hand it in',
      words: ['reread', 'correct', 'neatly', 'crossed out'],
      sentence: 'One neat line through a mistake is enough.',
      note: 'Crossing out neatly is part of handwriting.',
    },
    {
      day: 'Friday',
      focus: [],
      warmUp: 'the last page of the cycle',
      words: ['improved', 'compare', 'progress', 'again'],
      sentence: 'Put this page next to week one and look at the difference.',
      note: 'End of the four-week cycle. Then start again at week one.',
    },
  ],
};

export const HANDWRITING_SHEETS: HandwritingSheet[] = [
  l1w1, l1w2, l1w3, l1w4,
  l2w1, l2w2, l2w3, l2w4,
  l3w1, l3w2, l3w3, l3w4,
];

export function findSheet(id: string): HandwritingSheet | undefined {
  return HANDWRITING_SHEETS.find((s) => s.id === id);
}
