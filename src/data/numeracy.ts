export interface Problem {
  a: number;
  b: number;
  op: '+' | '-';
}

export interface ProblemSet {
  id: string;
  label: string;
  description: string;
  problems: Problem[];
}

export interface NumeracySession {
  date: string;
  addSubSets: ProblemSet[];
}

// ── Sessions — most recent first ────────────────────────────────

export const NUMERACY_SESSIONS: NumeracySession[] = [
  {
    date: '2026-04-30',
    addSubSets: [
      {
        id: 'add-no-rename',
        label: 'Addition — No Renaming',
        description: '1-digit + 1-digit (answer ≤ 9)',
        problems: [
          { a: 3, b: 1, op: '+' },
          { a: 4, b: 2, op: '+' },
          { a: 5, b: 2, op: '+' },
          { a: 3, b: 2, op: '+' },
          { a: 6, b: 1, op: '+' },
          { a: 4, b: 3, op: '+' },
          { a: 5, b: 3, op: '+' },
          { a: 7, b: 1, op: '+' },
          { a: 6, b: 2, op: '+' },
          { a: 8, b: 1, op: '+' },
          { a: 6, b: 3, op: '+' },
          { a: 7, b: 2, op: '+' },
          { a: 5, b: 4, op: '+' },
          { a: 3, b: 6, op: '+' },
          { a: 2, b: 7, op: '+' },
        ],
      },
      {
        id: 'sub-no-rename',
        label: 'Subtraction — No Renaming',
        description: '1-digit − 1-digit (no borrowing)',
        problems: [
          { a: 6, b: 1, op: '-' },
          { a: 8, b: 2, op: '-' },
          { a: 7, b: 2, op: '-' },
          { a: 9, b: 3, op: '-' },
          { a: 4, b: 2, op: '-' },
          { a: 9, b: 2, op: '-' },
          { a: 7, b: 1, op: '-' },
          { a: 8, b: 3, op: '-' },
          { a: 8, b: 4, op: '-' },
          { a: 9, b: 1, op: '-' },
          { a: 5, b: 4, op: '-' },
          { a: 6, b: 4, op: '-' },
          { a: 9, b: 6, op: '-' },
          { a: 7, b: 3, op: '-' },
          { a: 8, b: 5, op: '-' },
        ],
      },
      {
        id: 'add-rename',
        label: 'Addition — With Renaming',
        description: '1-digit + 1-digit (answer > 9)',
        problems: [
          { a: 4, b: 8, op: '+' },
          { a: 3, b: 9, op: '+' },
          { a: 5, b: 6, op: '+' },
          { a: 4, b: 7, op: '+' },
          { a: 3, b: 8, op: '+' },
          { a: 5, b: 7, op: '+' },
          { a: 6, b: 8, op: '+' },
          { a: 4, b: 9, op: '+' },
          { a: 5, b: 9, op: '+' },
          { a: 6, b: 9, op: '+' },
          { a: 7, b: 8, op: '+' },
          { a: 8, b: 8, op: '+' },
          { a: 7, b: 9, op: '+' },
          { a: 8, b: 9, op: '+' },
          { a: 9, b: 9, op: '+' },
        ],
      },
      {
        id: 'sub-2digit-rename',
        label: 'Subtraction — With Renaming',
        description: 'teens − 1-digit (with borrowing, ≤ 19)',
        problems: [
          { a: 15, b: 8, op: '-' },
          { a: 14, b: 8, op: '-' },
          { a: 13, b: 8, op: '-' },
          { a: 12, b: 8, op: '-' },
          { a: 11, b: 8, op: '-' },
          { a: 16, b: 9, op: '-' },
          { a: 15, b: 9, op: '-' },
          { a: 14, b: 9, op: '-' },
          { a: 13, b: 9, op: '-' },
          { a: 12, b: 9, op: '-' },
          { a: 11, b: 9, op: '-' },
          { a: 17, b: 8, op: '-' },
          { a: 17, b: 9, op: '-' },
          { a: 16, b: 7, op: '-' },
          { a: 15, b: 6, op: '-' },
        ],
      },
    ],
  },
  {
    date: '2026-04-29',
    addSubSets: [
      {
        id: 'add-no-rename',
        label: 'Addition — No Renaming',
        description: '1-digit + 1-digit (answer ≤ 9)',
        problems: [
          { a: 1, b: 2, op: '+' },
          { a: 2, b: 3, op: '+' },
          { a: 3, b: 4, op: '+' },
          { a: 4, b: 5, op: '+' },
          { a: 1, b: 5, op: '+' },
          { a: 2, b: 4, op: '+' },
          { a: 3, b: 3, op: '+' },
          { a: 1, b: 6, op: '+' },
          { a: 2, b: 5, op: '+' },
          { a: 4, b: 4, op: '+' },
          { a: 1, b: 7, op: '+' },
          { a: 2, b: 6, op: '+' },
          { a: 3, b: 5, op: '+' },
          { a: 1, b: 8, op: '+' },
          { a: 4, b: 3, op: '+' },
        ],
      },
      {
        id: 'sub-no-rename',
        label: 'Subtraction — No Renaming',
        description: '1-digit − 1-digit (no borrowing)',
        problems: [
          { a: 5, b: 2, op: '-' },
          { a: 7, b: 3, op: '-' },
          { a: 6, b: 4, op: '-' },
          { a: 8, b: 5, op: '-' },
          { a: 9, b: 6, op: '-' },
          { a: 4, b: 1, op: '-' },
          { a: 8, b: 3, op: '-' },
          { a: 7, b: 4, op: '-' },
          { a: 6, b: 2, op: '-' },
          { a: 9, b: 4, op: '-' },
          { a: 5, b: 3, op: '-' },
          { a: 8, b: 6, op: '-' },
          { a: 7, b: 5, op: '-' },
          { a: 9, b: 7, op: '-' },
          { a: 6, b: 3, op: '-' },
        ],
      },
      {
        id: 'add-rename',
        label: 'Addition — With Renaming',
        description: '1-digit + 1-digit (answer > 9)',
        problems: [
          { a: 7, b: 4, op: '+' },
          { a: 8, b: 3, op: '+' },
          { a: 9, b: 2, op: '+' },
          { a: 6, b: 5, op: '+' },
          { a: 7, b: 5, op: '+' },
          { a: 8, b: 4, op: '+' },
          { a: 9, b: 3, op: '+' },
          { a: 6, b: 6, op: '+' },
          { a: 7, b: 6, op: '+' },
          { a: 8, b: 5, op: '+' },
          { a: 9, b: 4, op: '+' },
          { a: 6, b: 7, op: '+' },
          { a: 7, b: 7, op: '+' },
          { a: 8, b: 6, op: '+' },
          { a: 9, b: 5, op: '+' },
        ],
      },
      {
        id: 'sub-2digit-rename',
        label: 'Subtraction — With Renaming',
        description: 'teens − 1-digit (with borrowing, ≤ 19)',
        problems: [
          { a: 11, b: 2, op: '-' },
          { a: 13, b: 5, op: '-' },
          { a: 12, b: 4, op: '-' },
          { a: 15, b: 7, op: '-' },
          { a: 14, b: 6, op: '-' },
          { a: 16, b: 8, op: '-' },
          { a: 11, b: 4, op: '-' },
          { a: 12, b: 5, op: '-' },
          { a: 13, b: 6, op: '-' },
          { a: 14, b: 7, op: '-' },
          { a: 11, b: 5, op: '-' },
          { a: 12, b: 6, op: '-' },
          { a: 13, b: 7, op: '-' },
          { a: 11, b: 6, op: '-' },
          { a: 12, b: 7, op: '-' },
        ],
      },
    ],
  },
];

// Convenience export for legacy use
export const ADD_SUB_SETS = NUMERACY_SESSIONS[0].addSubSets;
