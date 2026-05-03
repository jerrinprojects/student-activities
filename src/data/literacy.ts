// ─────────────────────────────────────────────────────────────
//  LITERACY DATA
//  Each session has 3 activity SETS per student.
//  Each set = one printed page (Reading + Questions + Writing).
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
  'Jocasta',
] as const;

export type Student = (typeof STUDENTS)[number];

// ── Support structures ──────────────────────────────────────

export interface VocabItem {
  word: string;
  translation: string;
  language: string;
}

export interface WritingSupport {
  wordBank?: string[];
  vocabularyList?: VocabItem[];
  sentenceStarters?: string[];
}

export interface ActivitySet {
  reading: { title: string; passage: string };
  questions: string[];
  writing: { prompt: string; promptTranslation?: string; support?: WritingSupport };
}

export interface LiteracySession {
  date: string; // "YYYY-MM-DD"
  // Each student gets an array of ActivitySets (3 sets = 3 print pages)
  activities: Partial<Record<Student, ActivitySet[]>>;
}

// ── Sessions ────────────────────────────────────────────────
// ADD NEW SESSIONS AT THE TOP of this array.

export const LITERACY_SESSIONS: LiteracySession[] = [
  {
    date: '2026-05-04',
    activities: {

      // ────────────────────────────────────────────────────────
      //  PHARRELL — Level 7 (~5 yrs)
      //  Very short phonics-based texts. Word card support.
      // ────────────────────────────────────────────────────────
      Pharrell: [
        {
          reading: {
            title: 'My Pet Dog',
            passage:
              'I have a pet dog. His name is Rex. Rex has brown fur. He likes to run and jump. I feed Rex in the morning. He eats his food fast. We go for a walk every day. Rex wags his tail when he is happy. I love my dog.',
          },
          questions: [
            'What is the dog\'s name?',
            'What colour is his fur?',
            'When does the writer feed Rex?',
          ],
          writing: {
            prompt: 'Write about a pet you have or would like to have. What does it do?',
            support: {
              wordBank: ['dog', 'cat', 'pet', 'fur', 'run', 'eat', 'tail', 'jump', 'play', 'big', 'soft', 'love'],
            },
          },
        },
        {
          reading: {
            title: 'At the Park',
            passage:
              'I go to the park with Dad. There are swings and a slide. I go down the slide fast. Dad pushes me on the swing. I go up high. We see ducks by the pond. Dad gives me bread to feed the ducks. The ducks swim to get the bread. I like the park.',
          },
          questions: [
            'Who does the writer go to the park with?',
            'Name two things at the park.',
            'What do the ducks do when they get the bread?',
          ],
          writing: {
            prompt: 'Write about your favourite place to play outside. What do you do there?',
            support: {
              wordBank: ['park', 'swing', 'slide', 'duck', 'pond', 'run', 'jump', 'play', 'grass', 'fun', 'fast', 'high'],
            },
          },
        },
        {
          reading: {
            title: 'The Classroom',
            passage:
              'My classroom is big. There are lots of books on the shelf. My teacher writes on the board. We sit at tables with our friends. I like to draw and write. We read books every day. At mat time we listen to stories. I like my classroom.',
          },
          questions: [
            'What does the teacher do?',
            'Name two things the writer likes to do in class.',
            'When do they listen to stories?',
          ],
          writing: {
            prompt: 'Write about something you like to do at school.',
            support: {
              wordBank: ['school', 'read', 'write', 'draw', 'friend', 'learn', 'book', 'table', 'sit', 'listen', 'mat', 'class'],
            },
          },
        },
      ],

      // ────────────────────────────────────────────────────────
      //  JIERRY — Level 10, ESOL (Mandarin)
      //  Vocabulary list with Chinese translations.
      // ────────────────────────────────────────────────────────
      Jierry: [
        {
          reading: {
            title: 'The Market',
            passage:
              'On Saturday, my family went to the market. There were many stalls with fruit and vegetables. We bought apples, carrots and some fresh bread. The market was noisy and busy. A man was selling flowers with bright colours. I helped carry the bags home. Mum said the food from the market is fresher than the supermarket.',
          },
          questions: [
            'When did the family go to the market?',
            'Name three things they bought.',
            'What was the market like?',
            'Why does Mum prefer the market over the supermarket?',
          ],
          writing: {
            prompt: 'Write about a time you went shopping with your family. What did you see and buy?',
            promptTranslation: '写一写你和家人去购物的经历。你看到了什么？买了什么？',
            support: {
              vocabularyList: [
                { word: 'market', translation: '市场', language: 'Chinese' },
                { word: 'stall', translation: '摊位', language: 'Chinese' },
                { word: 'vegetables', translation: '蔬菜', language: 'Chinese' },
                { word: 'fruit', translation: '水果', language: 'Chinese' },
                { word: 'fresh', translation: '新鲜的', language: 'Chinese' },
                { word: 'noisy', translation: '嘈杂的', language: 'Chinese' },
                { word: 'carry', translation: '搬 / 拎', language: 'Chinese' },
                { word: 'supermarket', translation: '超市', language: 'Chinese' },
              ],
            },
          },
        },
        {
          reading: {
            title: 'My Birthday',
            passage:
              'Last week was my birthday. I turned nine years old. Mum made a chocolate cake with candles. My cousins came to our house for a party. We played games and ate lots of food. I got some presents — a book and a new pencil case. After the party, I helped clean up. It was a really happy day.',
          },
          questions: [
            'How old did the writer turn?',
            'Who came to the party?',
            'What presents did the writer get?',
            'What did the writer do after the party?',
          ],
          writing: {
            prompt: 'Write about your last birthday or a birthday you remember. What happened? How did it feel?',
            promptTranslation: '写一写你上次生日或你记得的一次生日。发生了什么？感觉怎么样？',
            support: {
              vocabularyList: [
                { word: 'birthday', translation: '生日', language: 'Chinese' },
                { word: 'cake', translation: '蛋糕', language: 'Chinese' },
                { word: 'candle', translation: '蜡烛', language: 'Chinese' },
                { word: 'present', translation: '礼物', language: 'Chinese' },
                { word: 'cousin', translation: '表弟/表妹', language: 'Chinese' },
                { word: 'party', translation: '聚会', language: 'Chinese' },
                { word: 'celebrate', translation: '庆祝', language: 'Chinese' },
                { word: 'happy', translation: '快乐的', language: 'Chinese' },
              ],
            },
          },
        },
        {
          reading: {
            title: 'By the River',
            passage:
              'Near our school there is a river. On Friday, our class walked down to look at it. The water was clear and cold. We saw small fish near the rocks. Our teacher told us that rivers are important for animals and people. We must not put rubbish in the river. I felt happy being close to the water.',
          },
          questions: [
            'Where is the river?',
            'What did the students see in the water?',
            'What did the teacher say about rivers?',
            'Why should people not put rubbish in the river?',
          ],
          writing: {
            prompt: 'Write about a time you visited a place in nature — a river, beach, or park. What did you notice?',
            promptTranslation: '写一写你去大自然的经历——河边、海滩或公园。你注意到了什么？',
            support: {
              vocabularyList: [
                { word: 'river', translation: '河流', language: 'Chinese' },
                { word: 'nature', translation: '自然', language: 'Chinese' },
                { word: 'clear', translation: '清澈的', language: 'Chinese' },
                { word: 'rubbish', translation: '垃圾', language: 'Chinese' },
                { word: 'important', translation: '重要的', language: 'Chinese' },
                { word: 'rocks', translation: '岩石', language: 'Chinese' },
                { word: 'protect', translation: '保护', language: 'Chinese' },
                { word: 'environment', translation: '环境', language: 'Chinese' },
              ],
            },
          },
        },
      ],

      // ────────────────────────────────────────────────────────
      //  BAO — Level 10, ESOL (Vietnamese)
      //  Vocabulary list with Vietnamese translations.
      // ────────────────────────────────────────────────────────
      Bao: [
        {
          reading: {
            title: 'The New Neighbour',
            passage:
              'A new family moved in next door last month. They have a girl my age named Linh. At first I was shy and did not talk to her. One afternoon, Linh came outside while I was playing in the front yard. She asked if she could play too. We kicked a ball and laughed a lot. Now we walk to school together every day. I am glad she moved in.',
          },
          questions: [
            'When did the new family move in?',
            'How did the writer feel at first?',
            'What did they do when they first played together?',
            'How do we know they became friends?',
          ],
          writing: {
            prompt: 'Write about making a new friend. How did you meet? What do you do together?',
            promptTranslation: 'Viết về việc kết bạn mới. Bạn gặp nhau như thế nào? Bạn làm gì cùng nhau?',
            support: {
              vocabularyList: [
                { word: 'neighbour', translation: 'hàng xóm', language: 'Vietnamese' },
                { word: 'shy', translation: 'nhút nhát', language: 'Vietnamese' },
                { word: 'friend', translation: 'bạn bè', language: 'Vietnamese' },
                { word: 'play', translation: 'chơi', language: 'Vietnamese' },
                { word: 'laugh', translation: 'cười', language: 'Vietnamese' },
                { word: 'together', translation: 'cùng nhau', language: 'Vietnamese' },
                { word: 'moved', translation: 'chuyển đến', language: 'Vietnamese' },
                { word: 'glad', translation: 'vui mừng', language: 'Vietnamese' },
              ],
            },
          },
        },
        {
          reading: {
            title: 'Sports Day',
            passage:
              'Last Tuesday was our school sports day. All the classes came outside to the field. I ran in the sprint race. My legs felt fast and my heart was beating hard. I came second and got a red ribbon. My friend Maya won first place. After the races, we played team games. I was tired but very happy at the end of the day.',
          },
          questions: [
            'When was sports day?',
            'What race did the writer run in?',
            'What did the writer win?',
            'How did the writer feel at the end of the day?',
          ],
          writing: {
            prompt: 'Write about a time you competed in a race or sport at school. How did you feel before, during and after?',
            promptTranslation: 'Viết về một lần bạn thi đấu ở trường. Bạn cảm thấy thế nào trước, trong và sau khi thi?',
            support: {
              vocabularyList: [
                { word: 'race', translation: 'cuộc đua', language: 'Vietnamese' },
                { word: 'run', translation: 'chạy', language: 'Vietnamese' },
                { word: 'win', translation: 'thắng', language: 'Vietnamese' },
                { word: 'ribbon', translation: 'dải ruy băng', language: 'Vietnamese' },
                { word: 'compete', translation: 'thi đấu', language: 'Vietnamese' },
                { word: 'nervous', translation: 'hồi hộp', language: 'Vietnamese' },
                { word: 'excited', translation: 'hào hứng', language: 'Vietnamese' },
                { word: 'proud', translation: 'tự hào', language: 'Vietnamese' },
              ],
            },
          },
        },
        {
          reading: {
            title: 'Helping at Home',
            passage:
              'In my family, everyone helps at home. My older sister washes the dishes after dinner. My brother takes out the rubbish. I help Mum fold the washing. Dad cooks on Fridays. We do not get paid, but Mum says working together keeps our family strong. Sometimes I do not feel like helping, but I always do it because I know it matters.',
          },
          questions: [
            'Name two chores that people in the family do.',
            'Who cooks on Fridays?',
            'What does Mum say about working together?',
            'Why does the writer help even when they do not feel like it?',
          ],
          writing: {
            prompt: 'Write about a job or chore you do at home. Why is it important?',
            promptTranslation: 'Viết về một công việc hoặc nhiệm vụ bạn làm ở nhà. Tại sao nó quan trọng?',
            support: {
              vocabularyList: [
                { word: 'chore', translation: 'việc nhà', language: 'Vietnamese' },
                { word: 'help', translation: 'giúp đỡ', language: 'Vietnamese' },
                { word: 'washing', translation: 'quần áo', language: 'Vietnamese' },
                { word: 'rubbish', translation: 'rác', language: 'Vietnamese' },
                { word: 'family', translation: 'gia đình', language: 'Vietnamese' },
                { word: 'responsible', translation: 'có trách nhiệm', language: 'Vietnamese' },
                { word: 'important', translation: 'quan trọng', language: 'Vietnamese' },
                { word: 'together', translation: 'cùng nhau', language: 'Vietnamese' },
              ],
            },
          },
        },
      ],

      // ────────────────────────────────────────────────────────
      //  MATT — Level 10
      //  Word bank support for writing.
      // ────────────────────────────────────────────────────────
      Matt: [
        {
          reading: {
            title: 'The Science Experiment',
            passage:
              'In class today we did a science experiment. We mixed baking soda and vinegar in a cup. The mixture started to fizz and bubble. Our teacher told us this is a chemical reaction. We wrote down what we saw and drew a diagram. Some cups fizzed more than others depending on how much we used. Science is one of my favourite subjects because you get to find things out.',
          },
          questions: [
            'What did the students mix together?',
            'What happened when the mixture was made?',
            'What is this called?',
            'Why does the writer like science?',
          ],
          writing: {
            prompt: 'Write about a science experiment or discovery you found interesting. What happened? What did you learn?',
            support: {
              wordBank: ['experiment', 'mix', 'fizz', 'bubble', 'react', 'result', 'discover', 'learn', 'test', 'observe', 'science', 'interesting'],
            },
          },
        },
        {
          reading: {
            title: 'The Lost Dog',
            passage:
              'On Sunday afternoon, our dog Biscuit ran out the gate while we were unloading the car. We looked everywhere in the neighbourhood. I put a post on our community Facebook page with a photo. By dinner time, a woman two streets away messaged us. Biscuit had been sitting at her front door. We drove straight there. He was wagging his tail like nothing had happened. Next time, we are double-checking the gate.',
          },
          questions: [
            'How did Biscuit escape?',
            'What did the writer do to find him?',
            'How did they find out where Biscuit was?',
            'What lesson did they learn?',
          ],
          writing: {
            prompt: 'Write about a time something was lost and then found. How did you feel? What did you do?',
            support: {
              wordBank: ['lost', 'found', 'search', 'worried', 'relieved', 'looked', 'called', 'message', 'safe', 'happy', 'lesson', 'careful'],
            },
          },
        },
        {
          reading: {
            title: 'The New Kid',
            passage:
              'A new boy called James started in our class on Monday. He sat by himself at lunch because he didn\'t know anyone. I remembered what it felt like when I was new at my old school. I went over and asked if he wanted to sit with us. He said yes. By the end of the week, he was playing basketball with us at break. Sometimes all it takes is one person to say hello.',
          },
          questions: [
            'Why did James sit by himself at lunch?',
            'Why did the writer decide to talk to James?',
            'What happened by the end of the week?',
            'What is the main message of this text?',
          ],
          writing: {
            prompt: 'Write about a time you were kind to someone or someone was kind to you. What happened? How did it make you feel?',
            support: {
              wordBank: ['kind', 'new', 'hello', 'alone', 'invite', 'include', 'welcome', 'friend', 'felt', 'remembered', 'brave', 'small'],
            },
          },
        },
      ],

      // ────────────────────────────────────────────────────────
      //  JOSHUA — Level 23 (~8.5 yrs)
      //  Inference and vocabulary questions. Word bank for writing.
      // ────────────────────────────────────────────────────────
      Joshua: [
        {
          reading: {
            title: 'The Last Train',
            passage:
              "The platform was empty except for one old man with a suitcase. The train was already three minutes late. He checked his watch, then looked up the track, then checked his watch again. When the train finally arrived, it was going the wrong direction. He stood still as it passed. Then he picked up his case, walked back to the bench, and sat down. He didn't look surprised. He opened a newspaper and began to read, as though he had expected this all along.",
          },
          questions: [
            'What details suggest the man had been waiting a long time?',
            'What does "going the wrong direction" suggest happened to his plans?',
            'What does his reaction — sitting back down and opening a newspaper — tell us about his character?',
            'What does "as though he had expected this all along" imply about the man?',
            'Write a possible backstory for this man. Why might he be at the station?',
          ],
          writing: {
            prompt: 'Write a short story told from the perspective of someone waiting — at a station, hospital, or airport. Use details to show how they are feeling without directly saying it.',
            support: {
              wordBank: ['waited', 'glanced', 'sighed', 'stood', 'quiet', 'platform', 'clock', 'late', 'still', 'turned', 'walked', 'returned'],
            },
          },
        },
        {
          reading: {
            title: 'The Notice Board',
            passage:
              "The notice had been up for three days before anyone said anything. In green marker on white paper: 'The big oak tree at the bottom of the school field will be removed on Friday to make way for a new car park.' By Wednesday, someone had written underneath in pencil: 'That tree is 70 years old.' By Thursday, there were thirty sticky notes on it. By Friday morning, the groundskeeper arrived to find forty students sitting under the tree. He phoned the principal. The principal phoned the council. The tree is still there.",
          },
          questions: [
            'Why do you think it took three days before anyone commented on the notice?',
            'What do the sticky notes suggest about how students felt about the tree?',
            'What is the significance of the fact that someone wrote the tree\'s age?',
            'What does the students sitting under the tree represent?',
            'What does this story suggest about collective action and communities?',
          ],
          writing: {
            prompt: 'Write about something in your community or school that you think is worth protecting or standing up for. Why does it matter?',
            support: {
              wordBank: ['community', 'protect', 'matter', 'voice', 'decision', 'together', 'change', 'believe', 'worth', 'action', 'stood', 'listened'],
            },
          },
        },
        {
          reading: {
            title: 'Night Sky',
            passage:
              "Theo's father woke him up at 2am. 'Come look at this,' he said. They stood outside in the dark in their socks, necks tilted back. The Milky Way stretched across the sky like spilled flour. Theo had seen pictures of it, but pictures were nothing like this. 'Did people always know those were stars?' he asked. 'They always looked up,' his father said. 'The questions changed.' On the drive back to the city the next morning, Theo kept looking out the window at the sky — pale and ordinary now — wondering what else he had been too busy to see.",
          },
          questions: [
            'Why do you think Theo\'s father woke him up at 2am rather than waiting until morning?',
            'What does the simile "like spilled flour" tell us about how the Milky Way looked?',
            'What does his father\'s reply — "The questions changed" — mean?',
            'What does Theo wonder on the drive back, and what does this suggest about him?',
            'What is the central idea this story is exploring?',
          ],
          writing: {
            prompt: 'Write about a moment when something ordinary suddenly seemed extraordinary. What changed the way you saw it?',
            support: {
              wordBank: ['noticed', 'looked', 'moment', 'ordinary', 'different', 'changed', 'sky', 'dark', 'quiet', 'wonder', 'realised', 'thought'],
            },
          },
        },
      ],

      // ────────────────────────────────────────────────────────
      //  MAVERICK — Level 23 (~8.5 yrs)
      //  Same level as Joshua, different texts and focus.
      // ────────────────────────────────────────────────────────
      Maverick: [
        {
          reading: {
            title: 'The Substitute Teacher',
            passage:
              "The substitute arrived ten minutes late carrying two bags, a coffee, and a pile of paper that slid off onto the floor in the doorway. Half the class laughed. He crouched down, picked everything up slowly, and then said, without looking up: 'Room 9, I presume.' Nobody laughed after that. By the end of the lesson, three students who usually said nothing had answered questions. He had a way of asking that made you feel like getting it wrong wasn't really the point.",
          },
          questions: [
            'Why did half the class laugh when the substitute arrived?',
            'What does "Nobody laughed after that" suggest about the moment he spoke?',
            'What does the detail about three quiet students answering questions tell us?',
            'What does the phrase "getting it wrong wasn\'t really the point" suggest about his teaching style?',
            'What qualities make a good teacher, based on what this text shows?',
          ],
          writing: {
            prompt: 'Write about a teacher or adult who changed the way you thought about something. What did they do or say? What effect did it have?',
            support: {
              wordBank: ['taught', 'changed', 'said', 'quiet', 'brave', 'answered', 'felt', 'different', 'moment', 'lesson', 'way', 'asked'],
            },
          },
        },
        {
          reading: {
            title: 'The Trophy',
            passage:
              "Luka had practised every day for six months. At the regional final, he came second. He stood on the podium and smiled for the photo while the winner held the cup. On the drive home, his dad said, 'You were the best one out there.' Luka looked out the window. He knew it wasn't true — and he knew his dad knew it too. They drove the rest of the way in silence. That night, Luka went back to the garage and practised for another hour. He didn't want to be told he was the best. He wanted to actually be it.",
          },
          questions: [
            'What does six months of daily practice tell us about Luka\'s character?',
            'Why do you think Luka\'s dad said "You were the best one out there" even though it wasn\'t true?',
            'How do you know Luka found the comment unhelpful rather than comforting?',
            'What does going back to practise that night tell us about Luka?',
            'Do you think it is better to be honest or encouraging when someone loses? Explain your view.',
          ],
          writing: {
            prompt: 'Write about a time you worked hard at something and it didn\'t go the way you hoped. What did you do next? What did it teach you?',
            support: {
              wordBank: ['practised', 'tried', 'failed', 'disappointed', 'decided', 'kept going', 'learned', 'improved', 'next time', 'honest', 'worth', 'effort'],
            },
          },
        },
        {
          reading: {
            title: 'The New Student',
            passage:
              "Nobody had told them she used a wheelchair. When Amara rolled into Room 6 on her first day, the room went quiet in that particular way rooms do when something unexpected happens. The teacher introduced her. Three students offered to move their bags. One boy asked if she wanted to sit next to him. By lunch, she had been to the library, the canteen, and the field — and she had noticed which doors didn't open automatically, which ramps were too steep, and which of her new classmates had stopped noticing her wheelchair entirely.",
          },
          questions: [
            'What does the phrase "that particular way rooms go quiet" suggest?',
            'How do the students\' actions show two different kinds of responses to Amara?',
            'What does Amara\'s observation about doors and ramps tell us about her experience?',
            'What is significant about the classmates who had "stopped noticing her wheelchair entirely"?',
            'What does this text suggest about inclusion and what it actually means in practice?',
          ],
          writing: {
            prompt: 'Write about what it means to truly include someone. Give a specific example — real or imagined — of what inclusion looks like in action.',
            support: {
              wordBank: ['include', 'welcome', 'notice', 'different', 'access', 'barrier', 'aware', 'accepted', 'ordinary', 'equal', 'effort', 'naturally'],
            },
          },
        },
      ],

      // ────────────────────────────────────────────────────────
      //  JOCASTA — Level 26 (~9.5–10 yrs)
      //  Needs sentence starters to begin writing.
      // ────────────────────────────────────────────────────────
      Jocasta: [
        {
          reading: {
            title: 'The Letter',
            passage:
              "The letter had been in the drawer for eleven years, still sealed. Her mother had never explained it, and after a while, Nina had stopped asking. The return address was a town three hours away — a place no one in the family had ever mentioned. Her mother died in March. In May, Nina opened the drawer for the last time before the house was sold. The letter was still there. She held it for a long time. She thought about all the things a sealed letter could mean: unfinished business, a secret kept out of love, or simply a letter that arrived too late and was never meant to be opened at all.",
          },
          questions: [
            'What details suggest the letter was significant, even before Nina opens it?',
            'Why do you think Nina\'s mother never explained or opened the letter?',
            'What does the timing — her mother\'s death in March, Nina opening the drawer in May — add to the emotional weight of the scene?',
            'What are the three possible meanings Nina imagines? What do these suggest about how she is processing her grief?',
            'This story ends without telling us whether Nina opens the letter. What effect does this create?',
          ],
          writing: {
            prompt: 'Write a piece about an object, place, or moment that holds an unanswered question. Don\'t resolve it — let the uncertainty be part of what you are exploring.',
            support: {
              wordBank: ['sealed', 'unknown', 'secret', 'held', 'never', 'wondered', 'before'],
              sentenceStarters: [
                'Nobody ever explained ...',
                'For years, the question sat there like ...',
                'There was always something about ... that made me ...',
                'I never found out ..., but I learned that ...',
                'Some things stay unanswered, and that ...',
              ],
            },
          },
        },
        {
          reading: {
            title: 'The Storm',
            passage:
              "The storm had been building since midday. By five o'clock, the sky had turned the colour of a bruise. Inside the house, the family had pulled the curtains and turned on all the lights, as though they could outvote the dark. The dog was under the bed. The youngest child was pretending to read. When the thunder came, it came without warning — not a distant rumble but a crack directly overhead, as though the sky had split. The power went out. In the silence that followed, the rain began. Not a shower. A erasure. Within minutes, the garden, the path, the road beyond — all gone under white noise and water.",
          },
          questions: [
            'How does the writer build tension before the storm arrives?',
            'What does "as though they could outvote the dark" suggest about the family\'s feelings?',
            'What effect does the detail about the dog and child create?',
            'How does the writer make the thunder feel sudden and shocking?',
            'Explain the effect of the final word — "erasure" — as a sentence on its own.',
          ],
          writing: {
            prompt: 'Write about a moment when nature felt powerful, overwhelming, or awe-inspiring. Focus on building atmosphere through specific sensory details.',
            support: {
              wordBank: ['dark', 'wind', 'quiet', 'still', 'suddenly', 'before', 'after', 'felt'],
              sentenceStarters: [
                'Before it arrived, there was ...',
                'The air felt different — as though ...',
                'Nobody spoke. The only sound was ...',
                'It wasn\'t the ... that frightened me; it was ...',
                'When it was finally over, everything looked ...',
              ],
            },
          },
        },
        {
          reading: {
            title: 'The Interview',
            passage:
              "The journalist had been interviewing survivors for three weeks. She had filled four notebooks. Every story was different, and every story was the same. She had learned to listen for the pauses — the places where people stopped before continuing — because that was often where the real story was. At night, in her motel room, she looked at her notebook and thought about what she would leave out. Not because it wasn't true, but because not all truths belonged in a newspaper. Some things were said to her in a particular way — quietly, facing away — that she understood were not for print. She closed the notebook. She wondered if she was getting it right.",
          },
          questions: [
            'What does "every story was different, and every story was the same" mean?',
            'What technique does the journalist use when interviewing, and why?',
            'What does "not all truths belonged in a newspaper" suggest about the difference between truth and public information?',
            'Why do you think the journalist closes the notebook wondering if she is "getting it right"?',
            'What ethical responsibilities does someone have when telling other people\'s stories? Use evidence from the text in your answer.',
          ],
          writing: {
            prompt: 'Write about the responsibility that comes with sharing someone else\'s story. What decisions have to be made? What can go wrong — and right?',
            support: {
              wordBank: ['truth', 'story', 'trust', 'decide', 'private', 'public', 'responsible', 'power'],
              sentenceStarters: [
                'When someone tells you something in confidence, ...',
                'The hardest part isn\'t collecting the story — it\'s deciding ...',
                'Not everything that is true should be ...',
                'A story told wrong can ...',
                'The person whose story it is ...',
              ],
            },
          },
        },
      ],
    },
  },
  {
    date: '2026-04-28',
    activities: {

      // ────────────────────────────────────────────────────────
      //  PHARRELL — Level 7 (~5 yrs)
      //  Very short phonics-based texts. Word card support.
      // ────────────────────────────────────────────────────────
      Pharrell: [
        {
          reading: {
            title: 'At the Beach',
            passage:
              'We go to the beach. The sand is hot. I dig in the sand. The water is cold and blue. I splash in the waves. Mum sits on a mat. We eat chips by the sea. I love the beach.',
          },
          questions: [
            'Where do they go?',
            'What does the writer dig in?',
            'What do they eat at the beach?',
          ],
          writing: {
            prompt: 'Write about going to the beach or a pool. What do you do there?',
            support: {
              wordBank: ['beach', 'sand', 'sea', 'wave', 'hot', 'cold', 'swim', 'dig', 'wet', 'fun', 'run', 'jump'],
            },
          },
        },
        {
          reading: {
            title: 'My Lunch Box',
            passage:
              'I have a blue lunch box. In my lunch box I have a sandwich. I have an apple too. I drink water from my bottle. I eat my lunch with my friends. Lunch time is fun.',
          },
          questions: [
            'What colour is the lunch box?',
            'Name two things in the lunch box.',
            'Who does the writer eat with?',
          ],
          writing: {
            prompt: 'Write about what is in your lunch box. What is your favourite lunch food?',
            support: {
              wordBank: ['sandwich', 'apple', 'water', 'eat', 'drink', 'lunch', 'yummy', 'box', 'bag', 'fruit', 'snack'],
            },
          },
        },
        {
          reading: {
            title: 'The Garden',
            passage:
              'We have a garden at home. Dad digs in the soil. Mum plants seeds. I water the plants. We grow tomatoes and beans. The sun helps them grow. We eat what we grow. I like our garden.',
          },
          questions: [
            'What does Dad do in the garden?',
            'What does the writer do to help?',
            'Name two things they grow.',
          ],
          writing: {
            prompt: 'Write about a plant or garden you know. What grows there? Who looks after it?',
            support: {
              wordBank: ['garden', 'plant', 'grow', 'water', 'sun', 'seeds', 'soil', 'dig', 'eat', 'green', 'big', 'small'],
            },
          },
        },
      ],

      // ────────────────────────────────────────────────────────
      //  JIERRY — Level 10, ESOL (Mandarin)
      //  Vocabulary list with Chinese translations.
      // ────────────────────────────────────────────────────────
      Jierry: [
        {
          reading: {
            title: 'The Library',
            passage:
              'The library is a quiet place. There are many books on the shelves. I can borrow a book to take home. The librarian helps me find books. I like reading stories about animals. I visit the library every week.',
          },
          questions: [
            'What kind of place is the library?',
            'Who helps you find books?',
            'What kind of stories does the writer like?',
            'Why do you think visiting the library every week is a good habit?',
          ],
          writing: {
            prompt: 'Write about your favourite book or story. What is it about? Why do you like it?',
            promptTranslation: '写一写你最喜欢的书或故事。它讲的是什么？你为什么喜欢它？',
            support: {
              vocabularyList: [
                { word: 'library', translation: '图书馆', language: 'Chinese' },
                { word: 'book', translation: '书', language: 'Chinese' },
                { word: 'borrow', translation: '借', language: 'Chinese' },
                { word: 'shelf', translation: '书架', language: 'Chinese' },
                { word: 'quiet', translation: '安静的', language: 'Chinese' },
                { word: 'story', translation: '故事', language: 'Chinese' },
                { word: 'librarian', translation: '图书管理员', language: 'Chinese' },
                { word: 'favourite', translation: '最喜欢的', language: 'Chinese' },
              ],
            },
          },
        },
        {
          reading: {
            title: 'My Weekend',
            passage:
              'On Saturday morning I woke up early. I helped Mum clean the house. After lunch, my cousin came to visit. We played games and watched a movie. On Sunday I did my homework. Then we had dinner as a family. I like the weekend.',
          },
          questions: [
            'What did the writer do on Saturday morning?',
            'Who came to visit on Saturday afternoon?',
            'What did they do together?',
            'What did the writer do on Sunday?',
          ],
          writing: {
            prompt: 'Write about what you did last weekend. What was your favourite part?',
            promptTranslation: '写一写你上个周末做了什么。你最喜欢哪一部分？',
            support: {
              vocabularyList: [
                { word: 'weekend', translation: '周末', language: 'Chinese' },
                { word: 'Saturday', translation: '星期六', language: 'Chinese' },
                { word: 'Sunday', translation: '星期天', language: 'Chinese' },
                { word: 'cousin', translation: '表弟/表妹', language: 'Chinese' },
                { word: 'movie', translation: '电影', language: 'Chinese' },
                { word: 'homework', translation: '家庭作业', language: 'Chinese' },
                { word: 'clean', translation: '打扫', language: 'Chinese' },
                { word: 'dinner', translation: '晚饭', language: 'Chinese' },
              ],
            },
          },
        },
        {
          reading: {
            title: 'At the Zoo',
            passage:
              'Last week my class went to the zoo. We saw many animals. The lions were sleeping in the sun. The monkeys were jumping and playing. We watched a keeper feed the giraffes. I took lots of photos. It was an exciting trip.',
          },
          questions: [
            'Where did the class go last week?',
            'What were the lions doing?',
            'What did the keeper do?',
            'What word tells us the writer enjoyed the trip?',
          ],
          writing: {
            prompt: 'Write about an animal you find interesting. What does it look like? What does it do?',
            promptTranslation: '写一种你觉得有趣的动物。它长什么样？它做什么？',
            support: {
              vocabularyList: [
                { word: 'zoo', translation: '动物园', language: 'Chinese' },
                { word: 'lion', translation: '狮子', language: 'Chinese' },
                { word: 'monkey', translation: '猴子', language: 'Chinese' },
                { word: 'giraffe', translation: '长颈鹿', language: 'Chinese' },
                { word: 'keeper', translation: '饲养员', language: 'Chinese' },
                { word: 'exciting', translation: '令人兴奋的', language: 'Chinese' },
                { word: 'jump', translation: '跳跃', language: 'Chinese' },
                { word: 'photo', translation: '照片', language: 'Chinese' },
              ],
            },
          },
        },
      ],

      // ────────────────────────────────────────────────────────
      //  BAO — Level 10, ESOL (Vietnamese)
      //  Vocabulary list with Vietnamese translations.
      // ────────────────────────────────────────────────────────
      Bao: [
        {
          reading: {
            title: 'Getting Ready for School',
            passage:
              'Every morning I wake up at seven o\'clock. I wash my face and brush my teeth. I eat breakfast with my family. I pack my bag and put on my shoes. Mum checks my lunch box. Then I walk to school with my brother. I am never late.',
          },
          questions: [
            'What time does the writer wake up?',
            'Name two things the writer does before breakfast.',
            'Who checks the lunch box?',
            'Who does the writer walk to school with?',
          ],
          writing: {
            prompt: 'Write about your morning routine. What do you do to get ready for school?',
            promptTranslation: 'Viết về buổi sáng của bạn. Bạn làm gì để chuẩn bị đi học?',
            support: {
              vocabularyList: [
                { word: 'morning', translation: 'buổi sáng', language: 'Vietnamese' },
                { word: 'wake up', translation: 'thức dậy', language: 'Vietnamese' },
                { word: 'breakfast', translation: 'bữa sáng', language: 'Vietnamese' },
                { word: 'brush', translation: 'đánh (răng)', language: 'Vietnamese' },
                { word: 'teeth', translation: 'răng', language: 'Vietnamese' },
                { word: 'bag', translation: 'cặp sách', language: 'Vietnamese' },
                { word: 'school', translation: 'trường học', language: 'Vietnamese' },
                { word: 'late', translation: 'muộn / trễ', language: 'Vietnamese' },
              ],
            },
          },
        },
        {
          reading: {
            title: 'A Rainy Day',
            passage:
              'Today it is raining. I cannot play outside. I stay inside and read a book. My little sister draws pictures at the table. Mum makes a warm soup for lunch. The rain taps on the window. I like rainy days because the house feels cosy.',
          },
          questions: [
            'Why can\'t the writer play outside?',
            'What does the little sister do?',
            'What does Mum make for lunch?',
            'Why does the writer like rainy days?',
          ],
          writing: {
            prompt: 'Write about what you like to do on a rainy day. Who are you with? What happens?',
            promptTranslation: 'Viết về những gì bạn thích làm vào ngày mưa. Bạn ở cùng ai? Chuyện gì xảy ra?',
            support: {
              vocabularyList: [
                { word: 'rain', translation: 'mưa', language: 'Vietnamese' },
                { word: 'inside', translation: 'trong nhà', language: 'Vietnamese' },
                { word: 'cosy', translation: 'ấm cúng', language: 'Vietnamese' },
                { word: 'soup', translation: 'súp / canh', language: 'Vietnamese' },
                { word: 'window', translation: 'cửa sổ', language: 'Vietnamese' },
                { word: 'draw', translation: 'vẽ', language: 'Vietnamese' },
                { word: 'read', translation: 'đọc', language: 'Vietnamese' },
                { word: 'warm', translation: 'ấm', language: 'Vietnamese' },
              ],
            },
          },
        },
        {
          reading: {
            title: 'The School Garden',
            passage:
              'Our school has a garden near the classroom. We planted tomatoes and herbs last term. Each week, students take turns watering the plants. The tomatoes are now turning red. Our teacher says we will pick them next week and eat them at school. I am excited to try them.',
          },
          questions: [
            'Where is the school garden?',
            'What did students plant last term?',
            'How do students help the garden each week?',
            'What will they do with the tomatoes next week?',
          ],
          writing: {
            prompt: 'Write about something you have grown or would like to grow. What do you need to help it grow?',
            promptTranslation: 'Viết về thứ bạn đã trồng hoặc muốn trồng. Bạn cần gì để giúp nó phát triển?',
            support: {
              vocabularyList: [
                { word: 'garden', translation: 'vườn', language: 'Vietnamese' },
                { word: 'plant', translation: 'trồng / cây', language: 'Vietnamese' },
                { word: 'tomato', translation: 'cà chua', language: 'Vietnamese' },
                { word: 'water', translation: 'tưới nước', language: 'Vietnamese' },
                { word: 'grow', translation: 'phát triển / mọc', language: 'Vietnamese' },
                { word: 'pick', translation: 'hái', language: 'Vietnamese' },
                { word: 'excited', translation: 'hào hứng', language: 'Vietnamese' },
                { word: 'term', translation: 'học kỳ', language: 'Vietnamese' },
              ],
            },
          },
        },
      ],

      // ────────────────────────────────────────────────────────
      //  MATT — Level 10
      //  Word bank support for writing.
      // ────────────────────────────────────────────────────────
      Matt: [
        {
          reading: {
            title: 'The Football Game',
            passage:
              'On Friday afternoon we had a football game against another school. The score was tied at half time. In the second half, our team played harder. With two minutes left, Sione kicked the ball into the goal. Everyone cheered. We won 2–1. It was the best game of the season.',
          },
          questions: [
            'When did the game take place?',
            'What was the score at half time?',
            'Who scored the winning goal?',
            'How did the team feel at the end?',
          ],
          writing: {
            prompt: 'Write about a sport or game you enjoy. What do you do? Why do you like it?',
            support: {
              wordBank: ['game', 'team', 'kick', 'run', 'score', 'win', 'cheer', 'play', 'ball', 'goal', 'fun', 'fast'],
            },
          },
        },
        {
          reading: {
            title: 'Cooking with Nana',
            passage:
              'On the weekend I went to Nana\'s house. We made chocolate chip cookies together. She let me measure the flour and stir the mixture. The kitchen smelled amazing. We put the cookies in the oven for fifteen minutes. When they came out, we waited for them to cool. They tasted delicious.',
          },
          questions: [
            'Where did the writer go on the weekend?',
            'What did they make together?',
            'What did the writer help with?',
            'How did the kitchen smell?',
          ],
          writing: {
            prompt: 'Write about a time you cooked or baked something. What did you make? Who helped you?',
            support: {
              wordBank: ['cook', 'bake', 'mix', 'stir', 'oven', 'smell', 'taste', 'warm', 'sweet', 'delicious', 'flour', 'wait'],
            },
          },
        },
        {
          reading: {
            title: 'The Camping Trip',
            passage:
              'Our family went camping at the lake. We set up our tent in the afternoon. At night, we sat around the fire and toasted marshmallows. Dad told us stories. I could see lots of stars in the sky. In the morning, we went fishing. I caught one small fish and put it back. It was a great trip.',
          },
          questions: [
            'Where did the family go camping?',
            'What did they do around the fire?',
            'What happened when the writer went fishing?',
            'What could you see in the sky at night?',
          ],
          writing: {
            prompt: 'Write about a trip or holiday you have been on. What did you do? What was your favourite moment?',
            support: {
              wordBank: ['tent', 'fire', 'stars', 'fish', 'night', 'camp', 'lake', 'sat', 'dark', 'fun', 'family', 'cook'],
            },
          },
        },
      ],

      // ────────────────────────────────────────────────────────
      //  JOSHUA — Level 23 (~8.5 yrs)
      //  Inference and vocabulary questions. Word bank for writing.
      // ────────────────────────────────────────────────────────
      Joshua: [
        {
          reading: {
            title: 'The Photograph',
            passage:
              'The photograph had been sitting in a shoebox under Gran\'s bed for forty years. When Lily found it, she saw a young woman standing in front of a house she didn\'t recognise, laughing at something off-camera. She turned it over. In faded pencil, someone had written: "Last summer before everything changed." Lily took the photo downstairs. Gran looked at it for a long time without speaking. Then she smiled — the kind of smile that holds both happiness and sadness at once.',
          },
          questions: [
            'Where had the photograph been kept, and for how long?',
            'What details on the photo suggest something important happened after it was taken?',
            'How do you know Gran had a strong reaction to the photo, even though she didn\'t speak?',
            'What does the phrase "the kind of smile that holds both happiness and sadness at once" suggest about Gran\'s feelings?',
            'Why do you think the writer kept the photograph in a shoebox under the bed?',
          ],
          writing: {
            prompt: 'Write about an old object or photograph that holds a memory. Who does it belong to? What story does it tell?',
            support: {
              wordBank: ['memory', 'old', 'found', 'held', 'remembered', 'sad', 'happy', 'quiet', 'long ago', 'smiled', 'looked', 'time'],
            },
          },
        },
        {
          reading: {
            title: 'The Empty Chair',
            passage:
              'Every morning at Room 8\'s group reading table, there were six chairs. But this Monday, one was empty. Mrs Taufa said nothing about it. The students looked at each other. At lunchtime, they found out: Hamish had moved to Christchurch over the weekend. No one had known. His pencil case was still in his tray. Someone had put a piece of paper on his chair. It said: "Good luck, Hamish." Nobody knew who had written it.',
          },
          questions: [
            'What detail at the start signals something is different about this Monday?',
            'Why do you think Mrs Taufa said nothing about the empty chair?',
            'What does the pencil case still being in the tray tell us about how sudden the move was?',
            'Why might no one have signed the note they left on Hamish\'s chair?',
            'What does this story suggest about how students feel when someone leaves suddenly?',
          ],
          writing: {
            prompt: 'Write about a time someone important left or moved away. How did it feel? What do you remember about them?',
            support: {
              wordBank: ['moved', 'missed', 'empty', 'quiet', 'surprised', 'friend', 'remembered', 'left', 'suddenly', 'note', 'seat', 'gone'],
            },
          },
        },
        {
          reading: {
            title: 'The Science Project',
            passage:
              'Aria had planned everything. For three weeks she had been building a working volcano for the science fair. The night before the fair, she tested it. The baking soda mixture fizzed weakly, then stopped. She tried again. Nothing. She sat on the kitchen floor and stared at it. At 9pm, her older brother came in, looked at the volcano, and said, "I think your vinegar\'s gone off." They drove to the petrol station and bought a new bottle. At the fair the next day, the volcano erupted perfectly. Aria said nothing about the night before.',
          },
          questions: [
            'How long had Aria been working on the project?',
            'What went wrong the night before the fair?',
            'What does "sitting on the kitchen floor and staring" tell us about how Aria felt?',
            'How did her brother help solve the problem?',
            'Why do you think Aria said nothing about the night before at the fair?',
          ],
          writing: {
            prompt: 'Write about a time a plan went wrong and you had to think of a solution. What did you do?',
            support: {
              wordBank: ['plan', 'wrong', 'problem', 'fix', 'tried', 'worked', 'solution', 'nervous', 'stayed calm', 'again', 'success', 'felt'],
            },
          },
        },
      ],

      // ────────────────────────────────────────────────────────
      //  MAVERICK — Level 23 (~8.5 yrs)
      //  Same level as Joshua, different texts and focus.
      // ────────────────────────────────────────────────────────
      Maverick: [
        {
          reading: {
            title: 'The Shortcut',
            passage:
              'Every afternoon, Riley took the long path home around the park. One day, a boy from his class said there was a faster way — through the old construction site. "The fence is broken," he said. "Everyone goes through." Riley looked at the gap in the fence. It would save ten minutes. He thought about Mum, who always knew exactly what time he got home. He picked up his bag and kept walking along the path.',
          },
          questions: [
            'What was the shortcut, and why might it be dangerous?',
            'Why did Riley hesitate before making his decision?',
            'What does thinking about his Mum suggest about why Riley made his choice?',
            'What does the phrase "Everyone goes through" suggest about peer pressure?',
            'Do you think Riley made the right decision? Explain your answer.',
          ],
          writing: {
            prompt: 'Write about a time you had to make a difficult choice. What did you decide? Do you think it was the right choice?',
            support: {
              wordBank: ['choice', 'decided', 'right', 'wrong', 'thought', 'safe', 'risk', 'pressure', 'rules', 'trusted', 'felt', 'walked'],
            },
          },
        },
        {
          reading: {
            title: 'The Team Captain',
            passage:
              'When Lena was voted team captain, she felt proud. Then she realised what it meant. At practice, she had to tell her best friend Emma that she wasn\'t in the starting line-up. Emma\'s face fell. Lena explained it was about the team, not about them. Emma nodded slowly and said she understood. But at lunch, Emma sat somewhere else. Lena ate alone, wondering if being captain was worth it.',
          },
          questions: [
            'Why did Lena feel proud at first?',
            'What was the difficult thing she had to do as captain?',
            'How do you know Emma was hurt by the decision?',
            'What does "wondering if being captain was worth it" tell us about how Lena felt?',
            'Do you think Lena made the right decision for the team? Was there a better way to handle it?',
          ],
          writing: {
            prompt: 'Write about a time you had to do something difficult because it was the right thing to do. How did it turn out?',
            support: {
              wordBank: ['captain', 'team', 'decided', 'fair', 'hard', 'friend', 'hurt', 'right', 'explained', 'felt', 'alone', 'worth it'],
            },
          },
        },
        {
          reading: {
            title: 'The Old Radio',
            passage:
              'Kai\'s grandfather kept an old wooden radio on the kitchen shelf. It didn\'t work anymore, but Grandad wouldn\'t let anyone throw it out. "That radio told us the war was over," he said one evening, without looking up from his newspaper. Kai looked at the radio differently after that. It was just a box of broken parts. But it had once made a whole family cry with relief in a small kitchen far away.',
          },
          questions: [
            'Why did Grandad keep the old radio even though it didn\'t work?',
            'Why do you think Grandad said this "without looking up from his newspaper"?',
            'What does "Kai looked at the radio differently after that" mean?',
            'What does the phrase "cry with relief" tell us about how people felt when the war ended?',
            'What does this story say about why objects can be important beyond their practical use?',
          ],
          writing: {
            prompt: 'Write about an object that is important to someone in your family. Why does it matter? What story does it have?',
            support: {
              wordBank: ['object', 'old', 'kept', 'memory', 'important', 'family', 'history', 'story', 'remember', 'special', 'broken', 'meant'],
            },
          },
        },
      ],

      // ────────────────────────────────────────────────────────
      //  JOCASTA — Level 26 (~9.5–10 yrs)
      //  Needs sentence starters to begin writing.
      // ────────────────────────────────────────────────────────
      Jocasta: [
        {
          reading: {
            title: 'The Waiting Room',
            passage:
              "The hospital waiting room smelled of disinfectant and instant coffee. Mara had been sitting on the plastic chair for two hours, watching the second hand on the wall clock. People came and went. A child across the room kept dropping a toy truck, and every time it clattered to the floor, Mara flinched. She had her phone, but she couldn't bring herself to look at it. Whatever the doctor said next would divide her life into before and after. So for a little longer, she sat in the before.",
          },
          questions: [
            'What sensory details does the writer use to set the atmosphere of the waiting room?',
            'Why do you think Mara couldn\'t bring herself to look at her phone?',
            'What does the repeated dropping of the toy truck show about Mara\'s state of mind?',
            'What does "divide her life into before and after" mean? What does it tell you about Mara\'s situation?',
            'How does the writer create tension without telling us directly what is happening?',
          ],
          writing: {
            prompt: 'Write about a moment of waiting — for news, a result, or something important. Focus on the feelings and details around you, not just what you are waiting for.',
            support: {
              wordBank: ['wait', 'quiet', 'tense', 'nervous', 'clock', 'noticed', 'felt', 'moment'],
              sentenceStarters: [
                'The room was ..., and all I could do was ...',
                'Every small sound made me ...',
                'I kept thinking about ...',
                'Time seemed to ...',
                'When it was finally over, I ...',
              ],
            },
          },
        },
        {
          reading: {
            title: 'The Garden Wall',
            passage:
              "For as long as anyone could remember, the old stone wall had divided the two gardens. On one side lived Mr Hamiora, who grew tomatoes and played the radio too loud. On the other side lived Mrs Chen, who grew roses and kept quiet hours. They had never spoken. One autumn, a branch from Mrs Chen's apple tree fell and flattened a section of the wall. The next morning, Mr Hamiora was in her garden with a wheelbarrow, clearing the rubble. She brought out two cups of tea. By the time the wall was rebuilt, it was six inches shorter than before.",
          },
          questions: [
            'What does the detail about the radio and "quiet hours" tell us about the two neighbours?',
            'How do we know the neighbours had never made an effort to know each other?',
            'What is the significance of Mr Hamiora helping without being asked?',
            'Why do you think the wall was rebuilt "six inches shorter than before"? What might this symbolise?',
            'What does this story suggest about how relationships between people can change?',
          ],
          writing: {
            prompt: 'Write about two people who seem different but find an unexpected connection. Use specific details to show — don\'t just tell — how their relationship changes.',
            support: {
              wordBank: ['different', 'silence', 'neighbour', 'surprised', 'connection', 'gesture', 'wall'],
              sentenceStarters: [
                'For years, they had ...',
                'Nobody expected that ...',
                'It started with something small — ...',
                'By the end, the two of them ...',
                'What had once seemed like a barrier was now ...',
              ],
            },
          },
        },
        {
          reading: {
            title: 'The Last Day',
            passage:
              "On the last day of primary school, the students in Room 7 were told to clean out their trays. Eleven years of memories — birthday cards, stickers, half-finished drawings — came out in handfuls. Most things went straight into the bin. Sophie saved a single drawing she had made in Year 2: a house with a crooked chimney and a sun with too many rays. She didn't know why. On the bus home, she held it carefully on her lap, like it might disappear if she folded it. Some things, she thought, you keep not because they're valuable — but because you were the person who made them.",
          },
          questions: [
            'What is the mood of the scene when students clean out their trays?',
            'Why does Sophie keep the drawing, even though it was made in Year 2?',
            'What does "like it might disappear if she folded it" tell us about how she felt about the drawing?',
            'Explain what Sophie\'s final thought means in your own words.',
            'What does this story say about why we hold onto things from our past?',
          ],
          writing: {
            prompt: 'Write about something from your past that you have kept or want to keep. It doesn\'t have to be valuable — write about why it matters to you.',
            support: {
              wordBank: ['kept', 'remember', 'old', 'past', 'reason', 'value', 'memory'],
              sentenceStarters: [
                'I still have ..., even though ...',
                'At the time, I didn\'t think it was important, but ...',
                'When I look at it now, I think about ...',
                'Some things are worth keeping not because they are worth money, but because ...',
                'It reminds me of the person I was when ...',
              ],
            },
          },
        },
      ],
    },
  },
  {
    date: '2026-04-19',
    activities: {

      // ────────────────────────────────────────────────────────
      //  PHARRELL — Level 7 (~5 yrs)
      //  Very short phonics-based texts. Word card support.
      // ────────────────────────────────────────────────────────
      Pharrell: [
        {
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
            prompt: 'Write about a pet you have or would like to have. What does it look like? What does it do?',
            support: {
              wordBank: ['dog', 'cat', 'big', 'small', 'fast', 'slow', 'brown', 'black', 'white', 'run', 'jump', 'sleep', 'wag', 'pat'],
            },
          },
        },
        {
          reading: {
            title: 'The Red Hat',
            passage:
              'I have a hat. It is red. The hat is on my head. I put it on in the morning. My hat keeps me warm. I wear it when it is cold. I love my red hat.',
          },
          questions: [
            'What colour is the hat?',
            'Where is the hat?',
            'When does the writer wear the hat?',
          ],
          writing: {
            prompt: 'Write about your favourite item of clothing. Describe it and explain why you like it.',
            support: {
              wordBank: ['hat', 'coat', 'red', 'blue', 'warm', 'cold', 'wear', 'put', 'on', 'head', 'love', 'like'],
            },
          },
        },
        {
          reading: {
            title: 'At the Farm',
            passage:
              'We go to the farm. I see a pig. The pig is pink. I see a cow. The cow is big. I see a hen. The hen has eggs. I like the farm.',
          },
          questions: [
            'Name two animals at the farm.',
            'What colour is the pig?',
            'What does the hen have?',
          ],
          writing: {
            prompt: 'Write about your favourite animal. What does it look like? Where does it live?',
            support: {
              wordBank: ['pig', 'cow', 'hen', 'farm', 'big', 'small', 'pink', 'brown', 'eggs', 'eat', 'run', 'see'],
            },
          },
        },
      ],

      // ────────────────────────────────────────────────────────
      //  JIERRY — Level 10, ESOL (Mandarin)
      //  Vocabulary list with Chinese translations.
      // ────────────────────────────────────────────────────────
      Jierry: [
        {
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
            promptTranslation: '写一个你喜欢去的地方。你在那里看到什么？你在那里做什么？',
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
              ],
            },
          },
        },
        {
          reading: {
            title: 'My Classroom',
            passage:
              'My classroom is big. There are twenty chairs and desks. We have colourful books on the shelves. My teacher writes on the whiteboard. I sit next to my friend. I like learning at school.',
          },
          questions: [
            'How many chairs and desks are in the classroom?',
            'Where are the books?',
            'Who does the writer sit next to?',
            'What does the teacher do?',
          ],
          writing: {
            prompt: 'Write about your classroom. What can you see? What do you do there?',
            promptTranslation: '写一写你的教室。你能看到什么？你在那里做什么？',
            support: {
              vocabularyList: [
                { word: 'classroom', translation: '教室', language: 'Chinese' },
                { word: 'chair', translation: '椅子', language: 'Chinese' },
                { word: 'desk', translation: '课桌', language: 'Chinese' },
                { word: 'book', translation: '书', language: 'Chinese' },
                { word: 'teacher', translation: '老师', language: 'Chinese' },
                { word: 'whiteboard', translation: '白板', language: 'Chinese' },
                { word: 'friend', translation: '朋友', language: 'Chinese' },
                { word: 'learn', translation: '学习', language: 'Chinese' },
              ],
            },
          },
        },
        {
          reading: {
            title: 'The Weather',
            passage:
              'Today is sunny. The sun is bright and warm. Yesterday it was raining. We stayed inside and read books. Tomorrow it might be cloudy. I like sunny days the best.',
          },
          questions: [
            'What is the weather like today?',
            'What did they do yesterday because of the rain?',
            'What might the weather be like tomorrow?',
            'What weather does the writer like best?',
          ],
          writing: {
            prompt: 'Write about your favourite kind of weather. What do you like to do on that day?',
            promptTranslation: '写一写你最喜欢的天气。你喜欢在那天做什么？',
            support: {
              vocabularyList: [
                { word: 'sunny', translation: '晴天', language: 'Chinese' },
                { word: 'rain', translation: '下雨', language: 'Chinese' },
                { word: 'cloud', translation: '云', language: 'Chinese' },
                { word: 'wind', translation: '风', language: 'Chinese' },
                { word: 'warm', translation: '温暖的', language: 'Chinese' },
                { word: 'cold', translation: '寒冷的', language: 'Chinese' },
                { word: 'inside', translation: '室内', language: 'Chinese' },
                { word: 'outside', translation: '室外', language: 'Chinese' },
              ],
            },
          },
        },
      ],

      // ────────────────────────────────────────────────────────
      //  BAO — Level 10, ESOL (Vietnamese)
      //  Vocabulary list with Vietnamese translations.
      // ────────────────────────────────────────────────────────
      Bao: [
        {
          reading: {
            title: 'The Market',
            passage:
              'My mum goes to the market every week. She buys fresh fruit and vegetables. There are apples, oranges, and bananas. She also buys rice and noodles. The market is busy and loud. I love going with her to help carry the bags.',
          },
          questions: [
            "Where does the writer's mum go every week?",
            'Name two fruits from the story.',
            'What else does she buy besides fruit and vegetables?',
            'How does the market feel? Find a word from the story.',
          ],
          writing: {
            prompt: 'Write about a place you go with your family. What do you see or buy there?',
            promptTranslation: 'Viết về một nơi bạn đi cùng gia đình. Bạn thấy gì hoặc mua gì ở đó?',
            support: {
              vocabularyList: [
                { word: 'market', translation: 'chợ', language: 'Vietnamese' },
                { word: 'fruit', translation: 'trái cây', language: 'Vietnamese' },
                { word: 'vegetable', translation: 'rau củ', language: 'Vietnamese' },
                { word: 'apple', translation: 'táo', language: 'Vietnamese' },
                { word: 'banana', translation: 'chuối', language: 'Vietnamese' },
                { word: 'rice', translation: 'gạo / cơm', language: 'Vietnamese' },
                { word: 'busy', translation: 'đông đúc', language: 'Vietnamese' },
                { word: 'carry', translation: 'mang / xách', language: 'Vietnamese' },
              ],
            },
          },
        },
        {
          reading: {
            title: 'My Family',
            passage:
              'I have a big family. I have a mum, a dad, and two sisters. We eat dinner together every night. My mum cooks rice and vegetables. My dad tells funny stories. I love my family very much.',
          },
          questions: [
            'How many sisters does the writer have?',
            'What do they do together every night?',
            'What does the mum cook?',
            'What does the dad do at dinner?',
          ],
          writing: {
            prompt: 'Write about your family. Who is in your family? What do you do together?',
            promptTranslation: 'Viết về gia đình bạn. Ai là thành viên trong gia đình bạn? Các bạn cùng nhau làm gì?',
            support: {
              vocabularyList: [
                { word: 'family', translation: 'gia đình', language: 'Vietnamese' },
                { word: 'mother', translation: 'mẹ', language: 'Vietnamese' },
                { word: 'father', translation: 'bố / ba', language: 'Vietnamese' },
                { word: 'sister', translation: 'chị / em gái', language: 'Vietnamese' },
                { word: 'brother', translation: 'anh / em trai', language: 'Vietnamese' },
                { word: 'dinner', translation: 'bữa tối', language: 'Vietnamese' },
                { word: 'cook', translation: 'nấu ăn', language: 'Vietnamese' },
                { word: 'together', translation: 'cùng nhau', language: 'Vietnamese' },
              ],
            },
          },
        },
        {
          reading: {
            title: 'After School',
            passage:
              'After school I go home. I put my bag down and have a snack. Sometimes I eat fruit. Then I do my homework at the table. After that, I play outside with my friends until dinner time.',
          },
          questions: [
            'What does the writer do first when they get home?',
            'What snack do they sometimes eat?',
            'Where do they do their homework?',
            'What do they do after homework?',
          ],
          writing: {
            prompt: 'Write about what you do after school. What is your favourite part of the afternoon?',
            promptTranslation: 'Viết về những gì bạn làm sau giờ học. Phần yêu thích của bạn vào buổi chiều là gì?',
            support: {
              vocabularyList: [
                { word: 'school', translation: 'trường học', language: 'Vietnamese' },
                { word: 'homework', translation: 'bài tập về nhà', language: 'Vietnamese' },
                { word: 'snack', translation: 'đồ ăn nhẹ', language: 'Vietnamese' },
                { word: 'play', translation: 'chơi', language: 'Vietnamese' },
                { word: 'outside', translation: 'bên ngoài', language: 'Vietnamese' },
                { word: 'friend', translation: 'bạn bè', language: 'Vietnamese' },
                { word: 'dinner', translation: 'bữa tối', language: 'Vietnamese' },
                { word: 'favourite', translation: 'yêu thích', language: 'Vietnamese' },
              ],
            },
          },
        },
      ],

      // ────────────────────────────────────────────────────────
      //  MATT — Level 10
      //  Word bank support for writing.
      // ────────────────────────────────────────────────────────
      Matt: [
        {
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
              wordBank: ['swim', 'water', 'jump', 'wet', 'fun', 'cool', 'hot', 'happy', 'played', 'ran', 'great', 'went'],
            },
          },
        },
        {
          reading: {
            title: "Jake's Birthday",
            passage:
              "It was Jake's birthday. All his friends came to the party. They played games in the garden. Jake blew out the candles on his cake. Everyone sang happy birthday. He got lots of presents. It was the best day ever.",
          },
          questions: [
            'Whose birthday was it?',
            'Where did they play games?',
            'What did Jake do with the candles?',
            'How did Jake feel about the day?',
          ],
          writing: {
            prompt: 'Write about a birthday party you have been to. What happened? What did you enjoy most?',
            support: {
              wordBank: ['cake', 'party', 'friends', 'gifts', 'sang', 'fun', 'games', 'ate', 'happy', 'best', 'blew', 'danced'],
            },
          },
        },
        {
          reading: {
            title: 'Lost in the Supermarket',
            passage:
              'One day, Tom got lost in the supermarket. He could not find his mum. He felt scared. He asked a kind lady for help. The lady took him to the front desk. His mum was looking for him. She gave him a big hug.',
          },
          questions: [
            'Where did Tom get lost?',
            'How did Tom feel when he was lost?',
            'Who did Tom ask for help?',
            'What did his mum do when she found him?',
          ],
          writing: {
            prompt: 'Write about a time you felt scared or lost. What happened? How did it end?',
            support: {
              wordBank: ['lost', 'scared', 'cried', 'looked', 'asked', 'help', 'found', 'safe', 'mum', 'hug', 'happy', 'home'],
            },
          },
        },
      ],

      // ────────────────────────────────────────────────────────
      //  JOSHUA — Level 23 (~8.5 yrs)
      //  Inference and vocabulary questions. Word bank for writing.
      // ────────────────────────────────────────────────────────
      Joshua: [
        {
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
            'Describe what happened at the end. How does the mood change?',
          ],
          writing: {
            prompt: 'Describe a time when the weather was extreme. Use descriptive language to help the reader feel like they were there.',
            support: {
              wordBank: ['dark', 'loud', 'rain', 'wind', 'thunder', 'lightning', 'cold', 'wet', 'scared', 'inside', 'sky', 'storm'],
            },
          },
        },
        {
          reading: {
            title: 'The Last Tree',
            passage:
              "At the edge of the school field stood an ancient oak tree. Its thick roots twisted into the ground like sleeping giants. For thirty years, students had carved their initials into its bark, sheltered from rain beneath its branches, and climbed its lowest limbs. When the groundskeeper posted a notice that it would be cut down to make way for a new car park, a group of students decided to take action.",
          },
          questions: [
            'How does the writer describe the tree\'s roots?',
            'How long had students been using the tree?',
            'Why was the tree going to be cut down?',
            'What does "take action" suggest the students will do?',
            'Why do you think the students cared so much about the tree?',
          ],
          writing: {
            prompt: 'Write about something in your community that is important to you. Why does it matter? What would happen if it was taken away?',
            support: {
              wordBank: ['tree', 'old', 'big', 'save', 'care', 'help', 'school', 'sad', 'important', 'together', 'cut', 'students'],
            },
          },
        },
        {
          reading: {
            title: 'The Record',
            passage:
              "Maya had been training for months. Every morning before school, she ran four laps of the oval. Her times had improved steadily, but the school record — set twelve years ago — still seemed out of reach. On the day of the athletics carnival, the rain had made the track slippery. Maya crouched at the starting blocks, blocking out the noise of the crowd. When the gun fired, she ran not for the record, but for herself.",
          },
          questions: [
            'How had Maya been preparing for the race?',
            'What challenge did the weather create on race day?',
            'What does "blocking out the noise" tell us about Maya\'s mindset?',
            'What does it mean that she ran "not for the record, but for herself"?',
            'What do you think makes a person a true competitor?',
          ],
          writing: {
            prompt: 'Write about a time you worked hard to achieve something. What kept you going when it was difficult?',
            support: {
              wordBank: ['practised', 'tried', 'hard', 'nervous', 'proud', 'goal', 'brave', 'race', 'ran', 'focused', 'kept going', 'felt'],
            },
          },
        },
      ],

      // ────────────────────────────────────────────────────────
      //  MAVERICK — Level 23 (~8.5 yrs)
      //  Same level as Joshua, different texts and focus.
      // ────────────────────────────────────────────────────────
      Maverick: [
        {
          reading: {
            title: 'The Lost Dog',
            passage:
              "On a cold Tuesday morning, Tane noticed the gate to the backyard was swinging open. His dog, Scout, was gone. He searched the street, calling Scout's name. Neighbours came outside to help. An hour later, a woman from the next street called — she had found Scout sitting on her porch, wagging his tail. Tane ran all the way there. He hugged Scout tight and promised to fix the gate that afternoon.",
          },
          questions: [
            'How did Tane first notice something was wrong?',
            'What did the neighbours do when they heard?',
            'How do you think Tane felt when he found Scout? Use the text.',
            'What does "swinging open" tell us about how the gate was left?',
            'What lesson do you think Tane learned from this experience?',
          ],
          writing: {
            prompt: 'Write about a time you lost something important, or imagine it. How did you feel? What did you do?',
            support: {
              wordBank: ['lost', 'scared', 'worried', 'looked', 'called', 'ran', 'found', 'safe', 'happy', 'finally', 'relieved', 'searched'],
            },
          },
        },
        {
          reading: {
            title: 'The New Kid',
            passage:
              "Caleb arrived at school on a Monday, three weeks into the term. He stood at the door of Room 12 clutching his lunch bag, scanning the room for a friendly face. Everyone already had their groups. At lunchtime, he sat under the tree near the library. A girl from his class appeared and sat beside him without a word. She pulled out her own book. After a while, she said, 'Good book?' Caleb smiled for the first time all day.",
          },
          questions: [
            'How did Caleb feel when he walked into the classroom? Use evidence.',
            'Where did Caleb eat his lunch, and why do you think he chose that spot?',
            'What did the girl do that showed she was kind, without saying anything first?',
            'What does Caleb\'s smile tell us about how the girl\'s actions affected him?',
            'Have you ever been in a situation like Caleb\'s? How did it feel?',
          ],
          writing: {
            prompt: 'Write about a time someone was kind to you, or a time you were kind to someone else. What happened? Why did it matter?',
            support: {
              wordBank: ['new', 'alone', 'nervous', 'kind', 'sat', 'smiled', 'talked', 'friend', 'happy', 'welcome', 'helped', 'nice'],
            },
          },
        },
        {
          reading: {
            title: 'Power Cut',
            passage:
              "The electricity went out at half past seven on a Thursday evening. At first, the family fumbled around looking for torches. Then, without screens or devices, something unexpected happened. Dad dragged out an old board game from the cupboard. Mum made hot chocolate on the gas stove. They sat together around the kitchen table for three hours, laughing and arguing over the rules. When the power finally returned, no one moved to turn the TV on.",
          },
          questions: [
            'What time did the power cut happen?',
            'What word tells us the family struggled to find their torches?',
            'What "unexpected" thing happened during the power cut?',
            'Why do you think no one turned the TV on when the power came back?',
            'What does this story suggest about screens and family time?',
          ],
          writing: {
            prompt: 'Write about a time something went wrong but turned out to be a good experience. What did you learn?',
            support: {
              wordBank: ['dark', 'candles', 'game', 'played', 'laughed', 'together', 'family', 'sat', 'fun', 'talked', 'no phone', 'enjoyed'],
            },
          },
        },
      ],

      // ────────────────────────────────────────────────────────
      //  JOCASTA — Level 26 (~9.5–10 yrs)
      //  Needs sentence starters to begin writing.
      // ────────────────────────────────────────────────────────
      Jocasta: [
        {
          reading: {
            title: 'The Old Lighthouse',
            passage:
              "For nearly a hundred years, the lighthouse at Cape Moody had guided ships safely through the rocky harbour. Old Thomas, the keeper, had lived there all his life. Every evening at dusk, he climbed the spiral staircase to light the lamp. He knew every rock, every current, every shadow on the water. When the council announced the lighthouse would be automated, Thomas sat quietly at his kitchen table for a long time. 'The sea won't know the difference,' he said finally. 'But I will.'",
          },
          questions: [
            'What was the lighthouse used for?',
            'What did Thomas do every evening at dusk?',
            'What does "automated" mean? How do you think Thomas felt when he heard?',
            "Why do you think Thomas said, 'The sea won't know the difference, but I will'?",
            'What does this story tell us about the relationship between Thomas and his work?',
          ],
          writing: {
            prompt: 'Write about someone who loves their job. How do they feel when things start to change?',
            support: {
              wordBank: ['lighthouse', 'sea', 'light', 'sad', 'change'],
              sentenceStarters: [
                'Every day, he would ...',
                'He loved his job because ...',
                'When he heard the news, he felt ...',
                'Even though things were changing, he ...',
                'In the end, ...',
              ],
            },
          },
        },
        {
          reading: {
            title: 'The Letter',
            passage:
              "Every year on her birthday, Nadia received a letter from her grandmother in Croatia. She would sit at the kitchen table with a dictionary, carefully translating each sentence. The letters described the village where her grandmother had grown up — the smell of bread baking at dawn, the sound of bells echoing from the church, the cold blue water of the Adriatic. Nadia had never been to Croatia. But through those letters, she felt she knew it by heart.",
          },
          questions: [
            'How often did Nadia receive letters, and from whom?',
            'Why did Nadia need a dictionary?',
            'Name two things the letters described about the grandmother\'s village.',
            'What does "knew it by heart" mean in this context?',
            'What does this story suggest about the power of words and stories?',
          ],
          writing: {
            prompt: 'Write about a place you would like to visit. What would you see and do there?',
            support: {
              wordBank: ['letter', 'family', 'place', 'language', 'memories'],
              sentenceStarters: [
                'I have never been to ..., but I know that ...',
                'My family told me that ...',
                'When I imagine this place, I can see ...',
                'One day, I hope to ...',
                'This place feels special to me because ...',
              ],
            },
          },
        },
        {
          reading: {
            title: 'First Place',
            passage:
              "Theo had practised the piano piece for four months. He could play it flawlessly alone in his bedroom, but in front of an audience, his hands seemed to forget everything they knew. At the school recital, he walked onto the stage and sat at the grand piano. The room was silent. He placed his fingers on the keys and looked at the far wall — not the audience. He breathed. Then he played. Not perfectly. But honestly. When it was over, his teacher came to him and said simply, 'That was yours.'",
          },
          questions: [
            'Why was performing difficult for Theo even though he practised?',
            'What technique did Theo use to manage his nerves on stage?',
            'What does it mean that he played "not perfectly, but honestly"?',
            "What do you think his teacher meant by saying, 'That was yours'?",
            'What does this story say about the difference between perfection and authenticity?',
          ],
          writing: {
            prompt: 'Write about a time you felt nervous but did it anyway. How did you feel after?',
            support: {
              wordBank: ['nervous', 'brave', 'stage', 'practised', 'proud'],
              sentenceStarters: [
                'Before it started, I felt ...',
                'I had practised a lot, but ...',
                'When it was my turn, I ...',
                'What helped me was ...',
                'Afterwards, I felt ...',
              ],
            },
          },
        },
      ],
    },
  },
];
