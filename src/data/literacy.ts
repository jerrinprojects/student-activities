// ─────────────────────────────────────────────────────────────
//  LITERACY DATA
//  To add a new session: copy the block below and fill it in.
//  The most recent date (first in the array) is used for printing.
// ─────────────────────────────────────────────────────────────

export const STUDENTS = ['Pharrell', 'Jierry', 'Bao', 'Matt', 'Joshua'] as const;
export type Student = typeof STUDENTS[number];

export interface LiteracySession {
  date: string; // "YYYY-MM-DD"
  reading: {
    title: string;
    passage: string;
  };
  questions: string[];
  writing: {
    prompt: string;
  };
}

export const LITERACY_SESSIONS: LiteracySession[] = [
  // ── ADD NEW SESSIONS AT THE TOP ──────────────────────────────
  {
    date: '2026-04-16',
    reading: {
      title: 'Tom and His Cat',
      passage:
        'Tom has a big cat. The cat is orange and white. Its name is Sunny. Sunny likes to sleep in the sun. Every morning, Tom gives Sunny a bowl of milk. Sunny purrs and rubs Tom\'s leg. Tom loves his cat very much.',
    },
    questions: [
      'What is the cat\'s name?',
      'What colour is the cat?',
      'What does Tom give Sunny every morning?',
      'How does Sunny show that it is happy?',
      'Why do you think the cat is called Sunny?',
    ],
    writing: {
      prompt: 'Write about your favourite animal. What does it look like? What does it eat? Why do you like it?',
    },
  },
];
