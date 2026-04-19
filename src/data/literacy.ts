// ─────────────────────────────────────────────────────────────
//  LITERACY DATA
//  Each session has INDIVIDUAL activities per student.
//  To add a new session: copy a session block and fill it in.
//  Most recent date goes FIRST in the array.
// ─────────────────────────────────────────────────────────────

export const STUDENTS = [
  'Pharrell',
  'Jierry',
  'Bao',
  'Matt',
  'Joshua',
  'Maverick',
] as const;

export type Student = (typeof STUDENTS)[number];

// ── Support structures ─────────────────────────────────────────

export interface VocabItem {
  word: string;
  translation: string;
  language: string; // e.g. "Chinese" | "Vietnamese"
}

export interface WritingSupport {
  wordBank?: string[];
  vocabularyList?: VocabItem[];
  sentenceStarters?: string[];
}

export interface StudentActivity {
  reading: {
    title: string;
    passage: string;
  };
  questions: string[];
  writing: {
    prompt: string;
    support?: WritingSupport;
  };
}

export interface LiteracySession {
  date: string; // "YYYY-MM-DD"
  activities: Partial<Record<Student, StudentActivity>>;
}

// ── Sessions ───────────────────────────────────────────────────
// ADD NEW SESSIONS AT THE TOP of this array.

export const LITERACY_SESSIONS: LiteracySession[] = [
  {
    date: '2026-04-19',
    activities: {

      // ── Pharrell — Level 7 (~5 yrs) ──────────────────────────
      // Very simple phonics-based text. Short sentences. Word card support.
      Pharrell: {
        reading: {
          title: 'My Dog Sam',
          passage:
            'I have a dog. His name is Sam. Sam is big. Sam is brown. Sam can run fast. I pat Sam on the head. Sam wags his tail. I like Sam. Sam likes me too.',
        },
        questions: [
          "What is the dog's name?",
          'What colour is Sam?',
          'What does Sam do when you pat him?',
        ],
        writing: {
          prompt: 'Draw a pet you like. Write 2 sentences about your pet.',
          support: {
            wordBank: [
              'dog', 'cat', 'big', 'small', 'fast', 'slow',
              'brown', 'black', 'white', 'run', 'jump', 'sleep', 'wag', 'pat',
            ],
          },
        },
      },

      // ── Jierry — Level 10, ESOL (Mandarin) ───────────────────
      // Simple text, key vocab with Chinese translations.
      Jierry: {
        reading: {
          title: 'The Park',
          passage:
            'The park is a fun place. There are big trees and colourful flowers. Children can play on the swings. You can run on the grass. Birds fly in the sky. I like going to the park with my family.',
        },
        questions: [
          'What can children play on at the park?',
          'Name two things you can see at the park.',
          'Who does the writer go to the park with?',
          'Why do you think the park is a fun place?',
        ],
        writing: {
          prompt: 'Write about a place you like to go. What do you see there? What do you do?',
          support: {
            vocabularyList: [
              { word: 'park', translation: '公园', language: 'Chinese' },
              { word: 'tree', translation: '树', language: 'Chinese' },
              { word: 'flower', translation: '花', language: 'Chinese' },
              { word: 'swing', translation: '秋千', language: 'Chinese' },
              { word: 'grass', translation: '草地', language: 'Chinese' },
              { word: 'bird', translation: '鸟', language: 'Chinese' },
              { word: 'fun', translation: '有趣的', language: 'Chinese' },
              { word: 'family', translation: '家人', language: 'Chinese' },
              { word: 'children', translation: '孩子们', language: 'Chinese' },
              { word: 'play', translation: '玩', language: 'Chinese' },
            ],
          },
        },
      },

      // ── Bao — Level 10, ESOL (Vietnamese) ────────────────────
      // Simple text, key vocab with Vietnamese translations.
      Bao: {
        reading: {
          title: 'The Market',
          passage:
            'My mum goes to the market every week. She buys fresh fruit and vegetables. There are apples, oranges, and bananas. She also buys rice and noodles. The market is busy and loud. I love going with her to help carry the bags.',
        },
        questions: [
          'Where does the writer\'s mum go every week?',
          'Name two fruits from the story.',
          'What else does she buy besides fruit and vegetables?',
          'How does the market feel? Find a word from the story.',
        ],
        writing: {
          prompt: 'Write about a place you go with your family. What do you see or buy there?',
          support: {
            vocabularyList: [
              { word: 'market', translation: 'chợ', language: 'Vietnamese' },
              { word: 'fruit', translation: 'trái cây', language: 'Vietnamese' },
              { word: 'vegetable', translation: 'rau củ', language: 'Vietnamese' },
              { word: 'apple', translation: 'táo', language: 'Vietnamese' },
              { word: 'orange', translation: 'cam', language: 'Vietnamese' },
              { word: 'banana', translation: 'chuối', language: 'Vietnamese' },
              { word: 'rice', translation: 'cơm / gạo', language: 'Vietnamese' },
              { word: 'busy', translation: 'đông đúc', language: 'Vietnamese' },
              { word: 'family', translation: 'gia đình', language: 'Vietnamese' },
              { word: 'carry', translation: 'mang / xách', language: 'Vietnamese' },
            ],
          },
        },
      },

      // ── Matt — Level 10 (~6 yrs) ──────────────────────────────
      // Level-matched text. Word bank to support writing accuracy.
      Matt: {
        reading: {
          title: 'Saturday at the Pool',
          passage:
            'On Saturday, we went to the swimming pool. The water was cool and blue. My sister jumped in first. I held my nose and jumped in too. We splashed each other and played games. It was a hot day and the pool felt great. We stayed for two hours.',
        },
        questions: [
          'When did they go to the pool?',
          'What was the water like?',
          'What did they do at the pool?',
          'How long did they stay?',
        ],
        writing: {
          prompt: 'Write about a time you went somewhere fun. What did you do? How did it feel?',
          support: {
            wordBank: [
              'pool', 'swim', 'splash', 'jump', 'cool', 'fun', 'hot',
              'day', 'water', 'great', 'played', 'went', 'stayed', 'together',
              'excited', 'happy', 'cold', 'laughed',
            ],
          },
        },
      },

      // ── Joshua — Level 23 (~8.5 yrs) ─────────────────────────
      // Complex text. Inference and vocabulary questions. Word bank for writing.
      Joshua: {
        reading: {
          title: 'The Storm',
          passage:
            'Dark clouds rolled in from the west just after lunch. The wind picked up, bending the tall trees along the street. Rain began hammering the windows. Mum told us to stay inside. Lightning lit up the sky, followed by a loud crack of thunder. The power flickered and went out. We sat together in the dark, listening to the storm rage outside. By evening, the sky had cleared and a rainbow stretched across the hills.',
        },
        questions: [
          'What happened to the trees when the wind picked up?',
          'What two things happened to the power during the storm?',
          'How do you think the family felt during the storm? Use evidence from the text.',
          'What does the word "flickered" mean? Use the sentence to help you.',
          'Describe what happened at the end of the story. How does the mood change?',
        ],
        writing: {
          prompt:
            'Describe a time when the weather was extreme — stormy, very hot, or very cold. Use descriptive language to help the reader feel like they were there.',
          support: {
            wordBank: [
              'howling', 'crashed', 'poured', 'trembling', 'drenched',
              'shelter', 'fierce', 'thunder', 'lightning', 'rumbled',
              'dramatic', 'powerful', 'suddenly', 'eventually', 'despite',
            ],
          },
        },
      },

      // ── Maverick — Level 23 (~8.5 yrs) ───────────────────────
      // Similar level to Joshua. Different text and focus.
      Maverick: {
        reading: {
          title: 'The Lost Dog',
          passage:
            'On a cold Tuesday morning, Tane noticed the gate to the backyard was swinging open. His dog, Scout, was gone. He searched the street, calling Scout\'s name. Neighbours came outside to help. An hour later, a woman from the next street called — she had found Scout sitting on her porch, wagging his tail. Tane ran all the way there. He hugged Scout tight and promised to fix the gate that afternoon.',
        },
        questions: [
          'How did Tane first notice something was wrong?',
          'What did the neighbours do when they heard?',
          'How do you think Tane felt when he found Scout? Use the text to support your answer.',
          'What does the word "swinging" tell us about how the gate was left?',
          'What lesson do you think Tane learned from this experience?',
        ],
        writing: {
          prompt:
            'Write about a time you lost something important, or imagine that you did. How did you feel? What did you do to find it?',
          support: {
            wordBank: [
              'searched', 'panicked', 'relieved', 'desperate', 'worried',
              'discovered', 'finally', 'thankfully', 'meanwhile', 'eventually',
              'exhausted', 'hopeful', 'frantically', 'carefully', 'luckily',
            ],
          },
        },
      },
    },
  },
];
