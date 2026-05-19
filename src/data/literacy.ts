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
  'Cody',
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

export interface SentenceStructure {
  subjects: string[];
  verbs: string[];
  translations?: Record<string, string>; // word → native-language translation
  lines?: number; // number of writing lines (defaults to 8)
}

export interface ActivitySet {
  reading: { title: string; passage: string };
  questions: string[];
  sentenceStructure?: SentenceStructure;
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
    date: '2026-05-20',
    activities: {

      // ────────────────────────────────────────────────────────
      //  PHARRELL — Level 7 (~5 yrs)
      //  Very short phonics-based texts. Word card support.
      // ────────────────────────────────────────────────────────
      Pharrell: [
        {
          reading: {
            title: 'My New Shoes',
            passage:
              'Dad took me to buy new shoes. I tried on many pairs. I chose red ones with lights on the side. When I walk, the lights flash. My friends at school liked them too. I wore them to PE. They are my favourite shoes.',
          },
          questions: [
            'Where did Dad take the writer?',
            'What do the new shoes have on the side?',
            'When do the lights flash?',
          ],
          sentenceStructure: {
            subjects: ['I', 'Dad', 'My shoes', 'My friends', 'We'],
            verbs: ['chose', 'tried', 'liked', 'wore', 'walked'],
          },
          writing: {
            prompt: 'Write about a piece of clothing or shoes that you love. What do they look like? When do you wear them?',
            support: {
              wordBank: ['shoes', 'new', 'red', 'lights', 'flash', 'try', 'chose', 'feet', 'wear', 'school', 'PE', 'favourite'],
            },
          },
        },
        {
          reading: {
            title: 'The Supermarket',
            passage:
              'On Friday Mum and I go to the supermarket. We take a trolley. Mum reads from her list. I help put things in the trolley. I pick the bread and the apples. At the end, Mum lets me choose a treat. I choose chocolate. We pack the bags in the car. I like helping Mum shop.',
          },
          questions: [
            'What does Mum read at the supermarket?',
            'What does the writer put in the trolley?',
            'What treat does the writer choose?',
          ],
          sentenceStructure: {
            subjects: ['I', 'Mum', 'We', 'The trolley', 'My sister'],
            verbs: ['choose', 'pack', 'push', 'help', 'buy'],
          },
          writing: {
            prompt: 'Write about going to the supermarket. What do you help with? What do you like to choose?',
            support: {
              wordBank: ['supermarket', 'trolley', 'list', 'bread', 'apples', 'choose', 'help', 'pack', 'bag', 'treat', 'shop', 'buy'],
            },
          },
        },
        {
          reading: {
            title: 'My Baby Sister',
            passage:
              'My baby sister was born in March. Her name is Lily. She has big brown eyes. She cannot walk yet but she can sit up. She smiles when she sees me. I read to her at night. Mum says Lily needs a lot of sleep. I love my baby sister.',
          },
          questions: [
            'What is the baby\'s name?',
            'What can Lily do?',
            'What does the writer do for Lily at night?',
          ],
          sentenceStructure: {
            subjects: ['I', 'Lily', 'Mum', 'My sister', 'She'],
            verbs: ['read', 'sits', 'smiles', 'sleeps', 'loves'],
          },
          writing: {
            prompt: 'Write about a baby or young child you know. What are they like? What do you do together?',
            support: {
              wordBank: ['baby', 'sister', 'born', 'eyes', 'sit', 'smile', 'read', 'sleep', 'love', 'tiny', 'soft', 'name'],
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
            title: 'A Phone Call Home',
            passage:
              'Every Sunday my family calls Grandpa and Grandma in China. We use video chat on the tablet. Grandma always asks if I am eating enough and doing well at school. I show her my room and my books. Last Sunday I read her a poem I wrote in English. She said she was proud of me. I miss them, but seeing their faces helps.',
          },
          questions: [
            'When do they call Grandpa and Grandma?',
            'What does Grandma always ask about?',
            'What did the writer read to Grandma?',
            'Why does the writer say "seeing their faces helps"?',
          ],
          sentenceStructure: {
            subjects: ['My family', 'I', 'We', 'Grandma', 'My parents'],
            verbs: ['called', 'showed', 'read', 'missed', 'talked'],
            translations: { 'My family': '我的家人', 'I': '我', 'We': '我们', 'Grandma': '奶奶', 'My parents': '我的父母', 'called': '打了电话', 'showed': '展示了', 'read': '朗读了', 'missed': '想念', 'talked': '聊了' },
          },
          writing: {
            prompt: 'Write about keeping in touch with someone who lives far away. What do you talk about? How does it feel?',
            promptTranslation: '写一写你如何与住在远处的人保持联系。你们聊什么？感觉如何？',
            support: {
              vocabularyList: [
                { word: 'video call', translation: '视频通话', language: 'Chinese' },
                { word: 'grandparents', translation: '祖父母', language: 'Chinese' },
                { word: 'proud', translation: '自豪的', language: 'Chinese' },
                { word: 'miss', translation: '想念', language: 'Chinese' },
                { word: 'tablet', translation: '平板电脑', language: 'Chinese' },
                { word: 'poem', translation: '诗', language: 'Chinese' },
                { word: 'faces', translation: '面孔', language: 'Chinese' },
                { word: 'family', translation: '家人', language: 'Chinese' },
              ],
            },
          },
        },
        {
          reading: {
            title: 'My School Project',
            passage:
              'This term our class is doing a project on New Zealand animals. I chose the kiwi. I found information in the library and on the internet. I drew a picture and wrote five facts. My favourite fact is that the kiwi cannot fly. I worked on it with my friend James. We presented it to the class on Friday. The teacher said it was excellent.',
          },
          questions: [
            'What is the class project about?',
            'What animal did the writer choose?',
            'Who did the writer work with?',
            'What was the writer\'s favourite fact?',
          ],
          sentenceStructure: {
            subjects: ['I', 'My friend James', 'We', 'The teacher', 'Our class'],
            verbs: ['chose', 'found', 'drew', 'presented', 'said'],
            translations: { 'I': '我', 'My friend James': '我的朋友James', 'We': '我们', 'The teacher': '老师', 'Our class': '我们班', 'chose': '选了', 'found': '找到了', 'drew': '画了', 'presented': '展示了', 'said': '说' },
          },
          writing: {
            prompt: 'Write about a project or research topic you have worked on. What did you find out? What was the most interesting fact?',
            promptTranslation: '写一写你做过的一个项目或研究主题。你发现了什么？最有趣的事实是什么？',
            support: {
              vocabularyList: [
                { word: 'project', translation: '项目', language: 'Chinese' },
                { word: 'research', translation: '研究', language: 'Chinese' },
                { word: 'present', translation: '展示', language: 'Chinese' },
                { word: 'facts', translation: '事实', language: 'Chinese' },
                { word: 'information', translation: '信息', language: 'Chinese' },
                { word: 'excellent', translation: '优秀的', language: 'Chinese' },
                { word: 'library', translation: '图书馆', language: 'Chinese' },
                { word: 'interesting', translation: '有趣的', language: 'Chinese' },
              ],
            },
          },
        },
        {
          reading: {
            title: 'Saturday Morning',
            passage:
              'On Saturday morning I wake up late because there is no school. I help Dad make breakfast. We make eggs and toast. After breakfast I watch cartoons for one hour. Then Mum says I must go outside. I ride my bike around the block three times. When I come home, I feel hungry again. Saturday mornings are my favourite part of the week.',
          },
          questions: [
            'Why does the writer wake up late on Saturday?',
            'What do they make for breakfast?',
            'What does Mum say after cartoons?',
            'Why does the writer feel hungry when they get home?',
          ],
          sentenceStructure: {
            subjects: ['I', 'Dad', 'Mum', 'We', 'My family'],
            verbs: ['wake', 'make', 'watch', 'ride', 'feel'],
            translations: { 'I': '我', 'Dad': '爸爸', 'Mum': '妈妈', 'We': '我们', 'My family': '我的家人', 'wake': '醒来', 'make': '做', 'watch': '看', 'ride': '骑', 'feel': '感觉' },
          },
          writing: {
            prompt: 'Write about your favourite morning of the week. What do you do? What makes it special?',
            promptTranslation: '写一写你最喜欢的一个早晨。你做什么？是什么让它特别？',
            support: {
              vocabularyList: [
                { word: 'Saturday', translation: '星期六', language: 'Chinese' },
                { word: 'breakfast', translation: '早餐', language: 'Chinese' },
                { word: 'cartoon', translation: '动画片', language: 'Chinese' },
                { word: 'outside', translation: '外面', language: 'Chinese' },
                { word: 'ride', translation: '骑', language: 'Chinese' },
                { word: 'hungry', translation: '饥饿的', language: 'Chinese' },
                { word: 'favourite', translation: '最喜欢的', language: 'Chinese' },
                { word: 'morning', translation: '早上', language: 'Chinese' },
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
            title: 'The School Uniform',
            passage:
              'At my school everyone wears a uniform. We have a white shirt, dark blue shorts or a skirt, and black shoes. In winter we wear a jersey too. I like the uniform because I do not have to think about what to wear. My mum says it is easier to wash too. Some of my friends in Vietnam did not wear a uniform. I think uniforms make everyone look the same, and that feels fair.',
          },
          questions: [
            'What does the school uniform include?',
            'What do students wear in winter?',
            'Why does the writer like the uniform?',
            'What does the writer think uniforms do?',
          ],
          sentenceStructure: {
            subjects: ['I', 'We', 'Mum', 'Everyone', 'My friends'],
            verbs: ['wear', 'like', 'think', 'said', 'chose'],
            translations: { 'I': 'Tôi', 'We': 'Chúng tôi', 'Mum': 'Mẹ', 'Everyone': 'Mọi người', 'My friends': 'Bạn bè tôi', 'wear': 'mặc', 'like': 'thích', 'think': 'nghĩ', 'said': 'đã nói', 'chose': 'đã chọn' },
          },
          writing: {
            prompt: 'Write about school uniforms. Do you think they are a good idea? Give reasons for your opinion.',
            promptTranslation: 'Viết về đồng phục học sinh. Bạn có nghĩ đó là ý kiến hay không? Hãy đưa ra lý do cho ý kiến của bạn.',
            support: {
              vocabularyList: [
                { word: 'uniform', translation: 'đồng phục', language: 'Vietnamese' },
                { word: 'shirt', translation: 'áo sơ mi', language: 'Vietnamese' },
                { word: 'skirt', translation: 'váy', language: 'Vietnamese' },
                { word: 'jersey', translation: 'áo len', language: 'Vietnamese' },
                { word: 'fair', translation: 'công bằng', language: 'Vietnamese' },
                { word: 'easier', translation: 'dễ hơn', language: 'Vietnamese' },
                { word: 'same', translation: 'giống nhau', language: 'Vietnamese' },
                { word: 'opinion', translation: 'ý kiến', language: 'Vietnamese' },
              ],
            },
          },
        },
        {
          reading: {
            title: 'The Bus Ride',
            passage:
              'I take the bus to school every morning. The bus stop is two minutes from my house. I wait with my neighbour Amara. We talk on the bus. The ride is twenty minutes. I look out the window and watch the streets go past. Sometimes we pass the market where my mum buys vegetables. When I see the school gate, I know we are nearly there. I like the bus because I always see the same people.',
          },
          questions: [
            'How far is the bus stop from the writer\'s house?',
            'Who does the writer wait with?',
            'How long is the bus ride?',
            'Why does the writer like the bus?',
          ],
          sentenceStructure: {
            subjects: ['I', 'We', 'Amara', 'The bus', 'Mum'],
            verbs: ['take', 'wait', 'talk', 'watch', 'pass'],
            translations: { 'I': 'Tôi', 'We': 'Chúng tôi', 'Amara': 'Amara', 'The bus': 'Xe buýt', 'Mum': 'Mẹ', 'take': 'đi', 'wait': 'đợi', 'talk': 'nói chuyện', 'watch': 'nhìn', 'pass': 'đi qua' },
          },
          writing: {
            prompt: 'Write about how you get to school. What do you see or do on the way?',
            promptTranslation: 'Viết về cách bạn đến trường. Bạn nhìn thấy hoặc làm gì trên đường đi?',
            support: {
              vocabularyList: [
                { word: 'bus stop', translation: 'trạm xe buýt', language: 'Vietnamese' },
                { word: 'neighbour', translation: 'hàng xóm', language: 'Vietnamese' },
                { word: 'market', translation: 'chợ', language: 'Vietnamese' },
                { word: 'gate', translation: 'cổng', language: 'Vietnamese' },
                { word: 'ride', translation: 'chuyến đi', language: 'Vietnamese' },
                { word: 'watch', translation: 'nhìn', language: 'Vietnamese' },
                { word: 'street', translation: 'đường phố', language: 'Vietnamese' },
                { word: 'morning', translation: 'buổi sáng', language: 'Vietnamese' },
              ],
            },
          },
        },
        {
          reading: {
            title: 'My Favourite Sport',
            passage:
              'My favourite sport is badminton. I play it with my dad at the park on Sunday afternoons. We have two rackets and a shuttlecock. Dad taught me how to serve and how to move my feet. I am getting better each week. Sometimes Mum comes to watch and she cheers. I want to join the school badminton team next year. Badminton is a sport that everyone in my family plays back in Vietnam.',
          },
          questions: [
            'What is the writer\'s favourite sport?',
            'Who does the writer play with, and where?',
            'What has Dad taught the writer?',
            'What does the writer want to do next year?',
          ],
          sentenceStructure: {
            subjects: ['I', 'Dad', 'Mum', 'My family', 'We'],
            verbs: ['play', 'taught', 'cheered', 'improved', 'joined'],
            translations: { 'I': 'Tôi', 'Dad': 'Bố', 'Mum': 'Mẹ', 'My family': 'Gia đình tôi', 'We': 'Chúng tôi', 'play': 'chơi', 'taught': 'đã dạy', 'cheered': 'đã cổ vũ', 'improved': 'đã tiến bộ', 'joined': 'đã tham gia' },
          },
          writing: {
            prompt: 'Write about a sport or activity you enjoy. Who do you do it with? How did you learn?',
            promptTranslation: 'Viết về một môn thể thao hoặc hoạt động bạn thích. Bạn làm với ai? Bạn đã học như thế nào?',
            support: {
              vocabularyList: [
                { word: 'badminton', translation: 'cầu lông', language: 'Vietnamese' },
                { word: 'racket', translation: 'vợt', language: 'Vietnamese' },
                { word: 'shuttlecock', translation: 'cầu', language: 'Vietnamese' },
                { word: 'serve', translation: 'giao bóng', language: 'Vietnamese' },
                { word: 'improve', translation: 'tiến bộ', language: 'Vietnamese' },
                { word: 'join', translation: 'tham gia', language: 'Vietnamese' },
                { word: 'team', translation: 'đội', language: 'Vietnamese' },
                { word: 'sport', translation: 'môn thể thao', language: 'Vietnamese' },
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
            title: 'The Sleepover',
            passage:
              "On Friday night I stayed at my friend Connor's house for the first time. We stayed up until midnight playing video games. Connor's mum made pizza for dinner. In the morning we had cereal and watched cartoons. I forgot to bring my toothbrush so I had to use Connor's spare one. His dog slept on the bed between us all night, which neither of us had planned. I want to do it again.",
          },
          questions: [
            'How late did the boys stay up?',
            'What did Connor\'s mum make for dinner?',
            'What did the writer forget to bring?',
            'What happened with the dog that neither of them had planned?',
          ],
          sentenceStructure: {
            subjects: ['Connor', 'I', 'We', 'The dog', 'His mum'],
            verbs: ['stayed', 'played', 'slept', 'forgot', 'made'],
          },
          writing: {
            prompt: 'Write about staying at someone else\'s house, or having someone stay at yours. What happened? What was different or fun about it?',
            support: {
              wordBank: ['sleepover', 'midnight', 'pizza', 'cereal', 'forgot', 'toothbrush', 'dog', 'planned', 'fun', 'tired', 'again', 'stayed'],
            },
          },
        },
        {
          reading: {
            title: 'The Art Project',
            passage:
              "For the last three weeks in class we have been making papier-mâché sculptures. I am making a dolphin. You put strips of wet paper over a balloon and wait for it to dry. Then you pop the balloon and paint the outside. Mine keeps going lopsided no matter what I do. Hana's looks perfect. Mr Davidson said the important thing is the process, not the product. I'm not sure I agree, but I kept going anyway.",
          },
          questions: [
            'What is the class making?',
            'What is the writer making?',
            'What does Mr Davidson say about the project?',
            'Does the writer agree? How do we know?',
          ],
          sentenceStructure: {
            subjects: ['I', 'Hana', 'Mr Davidson', 'The balloon', 'We'],
            verbs: ['made', 'painted', 'dried', 'kept', 'said'],
          },
          writing: {
            prompt: 'Write about a creative project that didn\'t go as planned. What happened? What did you learn from it?',
            support: {
              wordBank: ['papier-mâché', 'balloon', 'sculpture', 'paint', 'process', 'lopsided', 'project', 'dried', 'kept', 'tried', 'finished', 'agreed'],
            },
          },
        },
        {
          reading: {
            title: 'The Thunderstorm',
            passage:
              "Last Monday there was a thunderstorm while we were in class. The sky went dark during maths. Then the rain started — not drops but walls of water. Lightning flashed twice, very close. Mr Davidson told everyone to move away from the windows. The power flickered but didn't go out. Some people were scared. I wasn't scared exactly, but I wasn't not scared either. After about twenty minutes, it stopped as suddenly as it had started. The playground was completely flooded.",
          },
          questions: [
            'What happened to the sky during maths?',
            'What did Mr Davidson tell the class to do?',
            'What does "I wasn\'t scared exactly, but I wasn\'t not scared either" mean?',
            'What did the playground look like after the storm?',
          ],
          sentenceStructure: {
            subjects: ['The storm', 'Mr Davidson', 'The lightning', 'We', 'The rain'],
            verbs: ['came', 'flashed', 'moved', 'stopped', 'flooded'],
          },
          writing: {
            prompt: 'Write about a time when sudden weather affected what you were doing. What happened? How did it feel?',
            support: {
              wordBank: ['thunder', 'lightning', 'storm', 'windows', 'flash', 'dark', 'flooded', 'scared', 'suddenly', 'power', 'walls', 'close'],
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
            title: 'The Key',
            passage:
              "The key was in an envelope at the back of the drawer, beneath a layer of other things that had been there long enough to seem permanent. She didn't know what it unlocked. She tried it on the locks she could think of: the old cabinet in the hallway, the letterbox, the tool shed her husband had stopped using years before his death. None of them. She kept the key in her cardigan pocket for a week, taking it out sometimes to look at it. It was small and old and ordinary. Eventually she put it on her keyring, beside the others. She thought it belonged somewhere useful.",
          },
          questions: [
            'What does "things that had been there long enough to seem permanent" suggest about this drawer?',
            'Why does the writer list the specific locks she tried? What does this reveal about her?',
            'What does carrying the key in her pocket for a week tell us about how she relates to unsolved questions?',
            'What does the decision to put it "on her keyring, beside the others" suggest about how she resolves uncertainty?',
            'What might the key represent as a symbol beyond just a key?',
          ],
          sentenceStructure: {
            subjects: ['She', 'The key', 'Her husband', 'The drawer', 'The lock'],
            verbs: ['found', 'tried', 'kept', 'placed', 'searched'],
            lines: 4,
          },
          writing: {
            prompt: 'Write about an object that raises more questions than it answers. What is it? What might it mean?',
            support: {
              wordBank: ['key', 'unknown', 'drawer', 'pocket', 'tried', 'eventually', 'ordinary', 'unlock', 'keyring', 'belonged', 'quiet', 'hold'],
            },
          },
        },
        {
          reading: {
            title: 'The Handshake',
            passage:
              "The two men had not spoken in eleven years. They met by accident in the car park of a hardware store on a Tuesday morning — of all places. Each recognised the other immediately. There was no question of pretending not to. The older man put out his hand first. The younger man shook it. Both held on a fraction longer than necessary. Nothing was said. They went their separate ways. The older man sat in his car for ten minutes before starting the engine. The younger one was already on the motorway.",
          },
          questions: [
            'Why does the writer specify "the car park of a hardware store on a Tuesday morning"? What does this ordinary setting contribute?',
            'What does "there was no question of pretending not to" suggest about their shared history?',
            'What does "held on a fraction longer than necessary" reveal about both men?',
            'What does the contrast — one man sitting still, the other already on the motorway — tell us about each?',
            'The story contains no dialogue. What effect does this silence create?',
          ],
          sentenceStructure: {
            subjects: ['The older man', 'The younger man', 'They', 'The silence', 'The handshake'],
            verbs: ['met', 'shook', 'held', 'sat', 'drove'],
            lines: 4,
          },
          writing: {
            prompt: 'Write about an unexpected encounter — meeting someone from the past by accident. What happened? What was not said?',
            support: {
              wordBank: ['silence', 'recognised', 'held', 'motorway', 'fraction', 'separate', 'ordinary', 'sat', 'engine', 'eleven years', 'ways', 'accident'],
            },
          },
        },
        {
          reading: {
            title: 'The Empty Stage',
            passage:
              "The audience had gone. The technicians were wrapping cables. A cleaner moved a mop across the front of the stage in slow arcs. The actor sat in the third row and looked at the place where, an hour ago, she had been someone else. She did this after every show. It was a way of returning to herself — or so she told people when they asked. The truth was closer to the reverse: she sat because she wasn't sure, yet, who she was returning to. The mop reached the corner. The lights began to dim.",
          },
          questions: [
            'Why does the writer describe the ordinary activities of technicians and a cleaner in detail after the show?',
            'What does "the place where, an hour ago, she had been someone else" suggest about performance and identity?',
            'What is the difference between what she tells people and what she actually feels?',
            'What does "she wasn\'t sure, yet, who she was returning to" suggest about her sense of self?',
            'What is the significance of "the lights began to dim" as the final image?',
          ],
          sentenceStructure: {
            subjects: ['The actor', 'She', 'The audience', 'The lights', 'The stage'],
            verbs: ['sat', 'watched', 'dimmed', 'returned', 'performed'],
            lines: 4,
          },
          writing: {
            prompt: 'Write about the feeling after something significant ends — a performance, a game, an event. What does it feel like when it\'s over?',
            support: {
              wordBank: ['stage', 'audience', 'lights', 'returning', 'dimmed', 'performance', 'self', 'empty', 'waited', 'truth', 'technicians', 'identity'],
            },
          },
        },
      ],

      // ────────────────────────────────────────────────────────
      //  MAVERICK — Level 23 (~8.5 yrs)
      //  Sentence structure reduced to 4 lines to fit one page.
      // ────────────────────────────────────────────────────────
      Maverick: [
        {
          reading: {
            title: 'The Negotiation',
            passage:
              "They had been arguing over the same piece of land for thirty years. The solicitor had arranged a meeting — neutral ground, a conference room with no windows. Mr Hemi arrived first and sat with his back to the door. His nephew sat beside him and said nothing. Mrs Pearce arrived with her daughter and a folder. For the first twenty minutes, no one spoke directly to anyone else — only to the solicitor, as though he were a translator. Then Mr Hemi said, without looking up: 'My grandfather planted those trees.' Mrs Pearce said: 'I know.' After that, something changed.",
          },
          questions: [
            'What does "no windows" contribute to the atmosphere of the meeting room?',
            'Why do both parties speak only to the solicitor for the first twenty minutes?',
            'What does Mr Hemi\'s statement — "My grandfather planted those trees" — do that thirty years of legal argument has not?',
            'What does Mrs Pearce\'s reply — "I know" — reveal about her?',
            'Why does the writer end with "something changed" rather than describing what changed?',
          ],
          sentenceStructure: {
            subjects: ['Mr Hemi', 'Mrs Pearce', 'They', 'The solicitor', 'Something'],
            verbs: ['arrived', 'sat', 'said', 'changed', 'spoke'],
            lines: 4,
          },
          writing: {
            prompt: 'Write about a disagreement that shifted when someone said something unexpected. What changed, and why?',
            support: {
              wordBank: ['land', 'dispute', 'trees', 'planted', 'changed', 'silent', 'neutral', 'directly', 'resolved', 'know', 'thirty years', 'said'],
            },
          },
        },
        {
          reading: {
            title: 'The Last Shift',
            passage:
              "It was Derek's last shift after twenty-two years. The café had changed completely in that time — different owners, different menus, a full renovation in 2019 — but he had stayed. His colleagues had organised a small cake. They sang. He smiled at the right times. At the end, after the customers had gone and the chairs were on the tables, he stood at the counter for a moment longer than necessary. The night manager asked if he needed anything. He said no. He untied his apron. He folded it instead of throwing it in the basket, which he had never done before.",
          },
          questions: [
            'What does the detail that the café "had changed completely" but Derek "had stayed" reveal about his character?',
            'Why does the writer say he "smiled at the right times" rather than just "smiled"?',
            'What does standing at the counter "a moment longer than necessary" tell us about what he is doing?',
            'What does folding the apron — "which he had never done before" — mean as a final action?',
            'What does this story suggest about the significance of rituals and small gestures at endings?',
          ],
          sentenceStructure: {
            subjects: ['Derek', 'His colleagues', 'He', 'The café', 'The manager'],
            verbs: ['stayed', 'smiled', 'stood', 'folded', 'asked'],
            lines: 4,
          },
          writing: {
            prompt: 'Write about the last time you did something — a final game, a last day, a goodbye. What small action made it feel final?',
            support: {
              wordBank: ['last', 'stayed', 'apron', 'folded', 'moment', 'ritual', 'final', 'colleagues', 'changed', 'smiled', 'twenty-two years', 'never'],
            },
          },
        },
        {
          reading: {
            title: 'The Morning After',
            passage:
              "The day after the election results, the town felt different. People were at the same shops, the same cafes, the same bus stops. But conversations were shorter. Some people didn't make eye contact. At the community library, Gail noticed that two women she had known for years walked past each other without acknowledging. She made two cups of tea and placed one near each of them without a word. One woman picked it up. Then, after a moment, the other did too. Gail didn't say anything. She went back to her desk.",
          },
          questions: [
            'What does "conversations were shorter" and "some people didn\'t make eye contact" suggest about how the results affected the community?',
            'Why does the writer specify that these were women Gail "had known for years"?',
            'What does Gail\'s act — placing tea without a word — represent?',
            'What is the significance of the second woman picking up the tea "after a moment"?',
            'What does Gail returning to her desk without saying anything suggest about the kind of action this is?',
          ],
          sentenceStructure: {
            subjects: ['Gail', 'The two women', 'People', 'The town', 'She'],
            verbs: ['noticed', 'placed', 'walked', 'picked up', 'returned'],
            lines: 4,
          },
          writing: {
            prompt: 'Write about a small act of connection or kindness during a moment of tension. What happened? Why did it matter?',
            support: {
              wordBank: ['division', 'tension', 'silence', 'noticed', 'placed', 'community', 'gesture', 'kindness', 'moment', 'picked up', 'returned', 'acknowledged'],
            },
          },
        },
      ],

      // ────────────────────────────────────────────────────────
      //  JOCASTA — High level (literary analysis, Year 9+)
      //  Sentence structure reduced to 3 lines / 4 words to fit one page.
      // ────────────────────────────────────────────────────────
      Jocasta: [
        {
          reading: {
            title: 'The Interruption',
            passage:
              "She had been writing the same chapter for eleven months. It wasn't that she lacked ideas — she had too many, which was its own kind of blockage. The chapter ended mid-sentence on page one hundred and twelve, where it had ended since the previous October. On a Tuesday in March, her niece came to stay for a week. She was eight years old and had never been told to be quiet at the right moments. She asked questions constantly. By Thursday, the chapter had moved. By Friday, it was finished. Her niece had no idea. She never told her.",
          },
          questions: [
            'What does "she had too many ideas, which was its own kind of blockage" suggest about creativity and how abundance can become an obstacle?',
            'What does the precision of "page one hundred and twelve" and "since the previous October" add to our understanding of the writer\'s paralysis?',
            'What is ironic about the niece\'s constant interruptions enabling the breakthrough?',
            'Why do you think she "never told her"? What does this suggest about her relationship to her own creative process?',
            'What does this story suggest about the relationship between creativity and control?',
          ],
          sentenceStructure: {
            subjects: ['She', 'Her niece', 'The chapter', 'The question'],
            verbs: ['finished', 'asked', 'moved', 'interrupted'],
            lines: 3,
          },
          writing: {
            prompt: 'Write about being unexpectedly helped by something — or someone — you did not expect to help. What broke through the block?',
            support: {
              wordBank: ['block', 'chapter', 'ideas', 'interrupted', 'finished', 'never', 'unexpected', 'moved', 'ordinary', 'through', 'constant', 'help'],
              sentenceStarters: [
                'I didn\'t know I was stuck until ...',
                'The interruption that changed everything was ...',
              ],
            },
          },
        },
        {
          reading: {
            title: 'The Permission',
            passage:
              "The letter from the university arrived when she was sixty-one years old. She had applied on an impulse in September, not thinking she would get in. She was the oldest person in the department by thirty years. On her first day, a younger student asked if she was someone's parent. She said no. The weeks that followed were difficult in the ways she had expected: long readings, dense theory, the exhaustion of not knowing things you were supposed to know. They were also difficult in ways she hadn't: the discovery that it was never too late to feel, again, like a complete beginner.",
          },
          questions: [
            'What does applying "on an impulse" and "not thinking she would get in" suggest about her relationship to this decision?',
            'What does the student\'s question — whether she was "someone\'s parent" — reveal about assumptions and belonging?',
            'What is the difference between the difficulties she "expected" and the ones she "hadn\'t"?',
            'What does "the discovery that it was never too late to feel, again, like a complete beginner" suggest about learning and age?',
            'What does this story suggest about the relationship between permission, age, and starting something new?',
          ],
          sentenceStructure: {
            subjects: ['She', 'The student', 'The university', 'The weeks'],
            verbs: ['applied', 'arrived', 'asked', 'discovered'],
            lines: 3,
          },
          writing: {
            prompt: 'Write about starting something when it felt too late — or about the fear of starting because of what others might think.',
            support: {
              wordBank: ['permission', 'late', 'start', 'beginner', 'expected', 'discovered', 'oldest', 'impulse', 'difficult', 'arrived', 'university', 'belonging'],
              sentenceStarters: [
                'I had always told myself it was too late to ...',
                'On the first day, I felt ...',
              ],
            },
          },
        },
        {
          reading: {
            title: 'The Habit',
            passage:
              "He had walked to the post office every morning for forty years, whether he had anything to post or not. His wife had thought it was eccentric until she understood that it was a structure — not a purpose, but a shape the day took because of it. When she died, he kept walking. When the post office closed and became a clothing shop, he kept walking. When someone finally asked him why, he considered the question seriously. He said: 'I don't know anymore. But stopping would require a reason.' Nobody had a good answer to that.",
          },
          questions: [
            'What is the difference between a "purpose" and a "structure"? How does this distinction illuminate his habit?',
            'What does continuing to walk after his wife\'s death, and after the post office closed, suggest about the function of the habit?',
            'What does "he considered the question seriously" reveal about his relationship to self-knowledge?',
            'What does "stopping would require a reason" mean? Why is it significant that continuing requires none?',
            'What does this story suggest about how habits shape — or sustain — identity?',
          ],
          sentenceStructure: {
            subjects: ['He', 'His wife', 'The habit', 'The question'],
            verbs: ['walked', 'continued', 'stopped', 'understood'],
            lines: 3,
          },
          writing: {
            prompt: 'Write about a habit — yours or someone else\'s — that does more than it appears to. What does the habit actually do?',
            support: {
              wordBank: ['habit', 'structure', 'purpose', 'routine', 'continued', 'stopped', 'walking', 'required', 'reason', 'shape', 'sustain', 'day'],
              sentenceStarters: [
                'Every morning, without fail, I ...',
                'At first it seemed like ..., but what it really was ...',
              ],
            },
          },
        },
      ],

      // ────────────────────────────────────────────────────────
      //  CODY — High level (similar to Jocasta)
      //  Sentence structure reduced to 3 lines / 4 words to fit one page.
      // ────────────────────────────────────────────────────────
      Cody: [
        {
          reading: {
            title: 'The Request',
            passage:
              "She called him on a Thursday evening and asked him to do something he had never been asked to do before. He said yes before she had finished asking. He knew he would — he had known before he answered — but he let her finish anyway, because the ask deserved to be made in full. He drove to her house the following afternoon. What she had asked for was small and specific, and he completed it in about forty minutes. He didn't ask why. She didn't explain. On the way home, he tried to think of the last time someone had trusted him with something that didn't need explanation. He couldn't remember.",
          },
          questions: [
            'Why does the writer not tell us what the request was? What effect does this create?',
            'What does "he said yes before she had finished asking" reveal about their relationship?',
            'What does "the ask deserved to be made in full" suggest about his values?',
            'What does the silence — "she didn\'t explain. He didn\'t ask why" — suggest about the trust between them?',
            'What does his inability to remember the last time someone trusted him without explanation reveal about him?',
          ],
          sentenceStructure: {
            subjects: ['He', 'She', 'The request', 'The trust'],
            verbs: ['asked', 'answered', 'drove', 'completed'],
            lines: 3,
          },
          writing: {
            prompt: 'Write about a moment of trust — being trusted or trusting someone else — where no explanation was needed. What made it feel significant?',
            support: {
              wordBank: ['trust', 'asked', 'yes', 'explained', 'finished', 'small', 'completed', 'drove', 'never', 'remember', 'deserved', 'full'],
              sentenceStarters: [
                'She didn\'t explain, and I didn\'t ask, because ...',
                'The strange thing about trust is that it ...',
              ],
            },
          },
        },
        {
          reading: {
            title: 'The Signal',
            passage:
              "For eighteen months, every time she passed the house, she checked the upstairs window. They had agreed on a signal: a yellow lamp meant she was all right. The lamp had been there every time. This morning the lamp was not there. She stood on the pavement. She looked for other explanations: the bulb had gone, it had been moved, the old woman was simply sleeping. She called twice. She rang the bell. She waited four minutes. She was about to call a third time when the curtain moved and the lamp came back on. She breathed. She kept walking. She did not look back.",
          },
          questions: [
            'What does checking the window "every time she passed" for eighteen months suggest about their relationship?',
            'What does the list of explanations she runs through suggest about her state of mind?',
            'Why does the writer count the minutes and the calls so precisely?',
            'What is the effect of "she breathed" as a sentence on its own?',
            'What does "she did not look back" suggest about how she processes the relief?',
          ],
          sentenceStructure: {
            subjects: ['She', 'The lamp', 'The old woman', 'The curtain'],
            verbs: ['checked', 'stood', 'called', 'breathed'],
            lines: 3,
          },
          writing: {
            prompt: 'Write about watching out for someone — or someone watching out for you — in a small, regular, unspoken way. What does this kind of care look like?',
            support: {
              wordBank: ['signal', 'lamp', 'checked', 'pavement', 'called', 'window', 'breathed', 'explanations', 'care', 'eighteen months', 'back', 'relief'],
              sentenceStarters: [
                'Every time I passed, I ...',
                'We had never talked about it — it was just understood that ...',
              ],
            },
          },
        },
        {
          reading: {
            title: 'The Last Page',
            passage:
              "He had been reading the same novel for six years. Not because it was long — it was less than three hundred pages — but because he had decided, at some point he could no longer precisely identify, that finishing it would mean something he wasn't ready for. He had started it the week his father was diagnosed. His father had been dead for four years. He kept the book on his bedside table. He never put it away. On a Tuesday in April he read the final thirty pages in one sitting, without having planned to. He closed it. He held it. He put it face-down on the table, as though it might still be in progress.",
          },
          questions: [
            'What does keeping a short book unfinished for six years suggest about how we use objects to hold onto emotional states?',
            'What does being unable to "precisely identify" when the decision was made reveal about how such decisions happen?',
            'What is the significance of "he never put it away"?',
            'Why does he put the book face-down — "as though it might still be in progress"?',
            'What does this story suggest about the relationship between finishing something and grief?',
          ],
          sentenceStructure: {
            subjects: ['He', 'The book', 'His father', 'The table'],
            verbs: ['read', 'finished', 'kept', 'held'],
            lines: 3,
          },
          writing: {
            prompt: 'Write about something you have been putting off finishing — because finishing it means something. What are you protecting by not finishing it?',
            support: {
              wordBank: ['finished', 'kept', 'bedside', 'face-down', 'grief', 'held', 'progress', 'six years', 'planned', 'diagnosis', 'closed', 'protecting'],
              sentenceStarters: [
                'I had been putting it off not because ..., but because ...',
                'Finishing it would mean ...',
              ],
            },
          },
        },
      ],
    },
  },
  {
    date: '2026-05-18',
    activities: {

      // ────────────────────────────────────────────────────────
      //  PHARRELL — Level 7 (~5 yrs)
      //  Very short phonics-based texts. Word card support.
      // ────────────────────────────────────────────────────────
      Pharrell: [
        {
          reading: {
            title: 'My Toy Box',
            passage:
              'I have a toy box in my room. It is red and blue. Inside there are blocks, a car, and a teddy bear. I like to tip it all out on the floor. Then I build things with the blocks. My teddy sits on my bed. Mum says I must put the toys back. I put them back before bed.',
          },
          questions: [
            'What colour is the toy box?',
            'Name three things inside the toy box.',
            'What does the writer do with the blocks?',
          ],
          sentenceStructure: {
            subjects: ['I', 'Mum', 'My teddy', 'The car', 'We'],
            verbs: ['sit', 'build', 'play', 'tip', 'put'],
          },
          writing: {
            prompt: 'Write about your favourite toy. What is it? What do you do with it?',
            support: {
              wordBank: ['toy', 'box', 'blocks', 'car', 'teddy', 'build', 'play', 'fun', 'big', 'soft', 'red', 'blue'],
            },
          },
        },
        {
          reading: {
            title: 'The Puddle',
            passage:
              'After the rain there is a big puddle in the park. I put on my gumboots. I jump in the puddle. Splash! The water goes up high. My dog runs in the puddle too. We are both wet. Mum shakes her head but she smiles. We walk home together.',
          },
          questions: [
            'Where is the puddle?',
            'What does the writer put on before going outside?',
            'How does Mum feel about the splashing?',
          ],
          sentenceStructure: {
            subjects: ['I', 'My dog', 'Mum', 'We', 'The puddle'],
            verbs: ['jump', 'run', 'splash', 'walk', 'smile'],
          },
          writing: {
            prompt: 'Write about playing outside after the rain. What do you do? What do you wear?',
            support: {
              wordBank: ['puddle', 'jump', 'splash', 'wet', 'boots', 'rain', 'park', 'dog', 'mud', 'fun', 'cold', 'play'],
            },
          },
        },
        {
          reading: {
            title: 'Helping Mum',
            passage:
              'On Saturday I help Mum clean the house. I wipe the table. I pick up my toys and put them away. Mum mops the floor. We wash the windows together. Then we sit down for a snack. Mum says thank you. I feel proud when I help.',
          },
          questions: [
            'What does the writer wipe?',
            'What does Mum do to the floor?',
            'How does the writer feel after helping?',
          ],
          sentenceStructure: {
            subjects: ['I', 'Mum', 'We', 'My sister', 'Dad'],
            verbs: ['help', 'wipe', 'mop', 'wash', 'feel'],
          },
          writing: {
            prompt: 'Write about a time you helped someone. What did you do? How did it feel?',
            support: {
              wordBank: ['help', 'clean', 'wipe', 'mop', 'proud', 'table', 'floor', 'window', 'tidy', 'together', 'smile', 'good'],
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
            title: 'The School Concert',
            passage:
              'Last week our school held a concert. Every class performed something. My class sang three songs. I was nervous before we went on stage. When the music started, I forgot about being nervous. The audience clapped loudly. After the concert, my mum said she was proud of me. I felt happy and relieved.',
          },
          questions: [
            'What did each class do at the concert?',
            'How did the writer feel before going on stage?',
            'What happened when the music started?',
            'What did Mum say after the concert?',
          ],
          sentenceStructure: {
            subjects: ['My class', 'I', 'We', 'The audience', 'Mum'],
            verbs: ['sang', 'performed', 'clapped', 'felt', 'forgot'],
            translations: { 'My class': '我们班', 'I': '我', 'We': '我们', 'The audience': '观众', 'Mum': '妈妈', 'sang': '唱了', 'performed': '表演了', 'clapped': '鼓掌了', 'felt': '感觉', 'forgot': '忘记了' },
          },
          writing: {
            prompt: 'Write about a time you performed or presented in front of people. How did you feel? What happened?',
            promptTranslation: '写一写你在别人面前表演或展示的一次经历。你感觉怎么样？发生了什么？',
            support: {
              vocabularyList: [
                { word: 'concert', translation: '音乐会', language: 'Chinese' },
                { word: 'perform', translation: '表演', language: 'Chinese' },
                { word: 'nervous', translation: '紧张的', language: 'Chinese' },
                { word: 'stage', translation: '舞台', language: 'Chinese' },
                { word: 'audience', translation: '观众', language: 'Chinese' },
                { word: 'proud', translation: '自豪的', language: 'Chinese' },
                { word: 'clap', translation: '鼓掌', language: 'Chinese' },
                { word: 'relieved', translation: '如释重负', language: 'Chinese' },
              ],
            },
          },
        },
        {
          reading: {
            title: 'A Visit to the Doctor',
            passage:
              'Last month I had a sore throat and a high fever. Mum took me to the doctor. The doctor looked in my ears and throat. She said I had an infection. She gave Mum a prescription for medicine. I had to stay home from school for three days. Mum made soup and I slept a lot. When I felt better, I was happy to go back to school.',
          },
          questions: [
            'Why did the writer go to the doctor?',
            'What did the doctor find?',
            'What did Mum do to help at home?',
            'How do we know the writer likes school?',
          ],
          sentenceStructure: {
            subjects: ['I', 'Mum', 'The doctor', 'The medicine', 'We'],
            verbs: ['visited', 'examined', 'said', 'felt', 'stayed'],
            translations: { 'I': '我', 'Mum': '妈妈', 'The doctor': '医生', 'The medicine': '药', 'We': '我们', 'visited': '去看了', 'examined': '检查了', 'said': '说', 'felt': '感觉', 'stayed': '待在家' },
          },
          writing: {
            prompt: 'Write about a time you were sick and someone helped you get better. What happened? How did it feel when you recovered?',
            promptTranslation: '写一写你生病的一次经历，有人帮助你康复。发生了什么？康复后你感觉如何？',
            support: {
              vocabularyList: [
                { word: 'doctor', translation: '医生', language: 'Chinese' },
                { word: 'fever', translation: '发烧', language: 'Chinese' },
                { word: 'throat', translation: '喉咙', language: 'Chinese' },
                { word: 'medicine', translation: '药', language: 'Chinese' },
                { word: 'infection', translation: '感染', language: 'Chinese' },
                { word: 'recover', translation: '康复', language: 'Chinese' },
                { word: 'prescription', translation: '处方', language: 'Chinese' },
                { word: 'healthy', translation: '健康的', language: 'Chinese' },
              ],
            },
          },
        },
        {
          reading: {
            title: 'Chinese New Year',
            passage:
              'Chinese New Year is my favourite celebration. This year it was in February. My family cleaned the house before the holiday to bring good luck. We wore new clothes on the first day. Grandma cooked a big meal with dumplings and fish. We lit fireworks at midnight. I got a red envelope with money inside. I love this time of year.',
          },
          questions: [
            'When was Chinese New Year this year?',
            'Why did the family clean the house?',
            'What did Grandma cook?',
            'What did the writer receive?',
          ],
          sentenceStructure: {
            subjects: ['My family', 'Grandma', 'We', 'I', 'The fireworks'],
            verbs: ['cleaned', 'cooked', 'wore', 'celebrated', 'received'],
            translations: { 'My family': '我的家人', 'Grandma': '奶奶', 'We': '我们', 'I': '我', 'The fireworks': '烟花', 'cleaned': '打扫了', 'cooked': '做了', 'wore': '穿了', 'celebrated': '庆祝了', 'received': '收到了' },
          },
          writing: {
            prompt: 'Write about a celebration or festival that is important to your family. What do you do? Why does it matter to you?',
            promptTranslation: '写一写对你的家庭重要的庆典或节日。你们做什么？它为什么对你重要？',
            support: {
              vocabularyList: [
                { word: 'celebration', translation: '庆典', language: 'Chinese' },
                { word: 'festival', translation: '节日', language: 'Chinese' },
                { word: 'dumplings', translation: '饺子', language: 'Chinese' },
                { word: 'fireworks', translation: '烟花', language: 'Chinese' },
                { word: 'red envelope', translation: '红包', language: 'Chinese' },
                { word: 'tradition', translation: '传统', language: 'Chinese' },
                { word: 'luck', translation: '运气', language: 'Chinese' },
                { word: 'together', translation: '一起', language: 'Chinese' },
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
            title: 'The Class Garden',
            passage:
              'Our class has a garden outside our classroom. We planted seeds six weeks ago. Now there are tomatoes, beans, and sunflowers growing. We take turns to water the plants each morning. Last week I was the first to find a ripe tomato. Mr Kim let me take it home for my family. Mum put it in a salad. I felt proud that I helped grow something.',
          },
          questions: [
            'What is growing in the class garden?',
            'How long ago did the class plant the seeds?',
            'What did the writer find last week?',
            'What did Mum do with the tomato?',
          ],
          sentenceStructure: {
            subjects: ['We', 'I', 'Mr Kim', 'Mum', 'The plants'],
            verbs: ['planted', 'found', 'watered', 'grew', 'felt'],
            translations: { 'We': 'Chúng tôi', 'I': 'Tôi', 'Mr Kim': 'Thầy Kim', 'Mum': 'Mẹ', 'The plants': 'Cây trồng', 'planted': 'đã trồng', 'found': 'đã tìm thấy', 'watered': 'đã tưới', 'grew': 'đã lớn lên', 'felt': 'cảm thấy' },
          },
          writing: {
            prompt: 'Write about growing something or taking care of a plant. What did you do? What happened?',
            promptTranslation: 'Viết về việc trồng cây hoặc chăm sóc một cây. Bạn đã làm gì? Điều gì đã xảy ra?',
            support: {
              vocabularyList: [
                { word: 'garden', translation: 'vườn', language: 'Vietnamese' },
                { word: 'seed', translation: 'hạt giống', language: 'Vietnamese' },
                { word: 'plant', translation: 'cây', language: 'Vietnamese' },
                { word: 'water', translation: 'tưới nước', language: 'Vietnamese' },
                { word: 'ripe', translation: 'chín', language: 'Vietnamese' },
                { word: 'tomato', translation: 'cà chua', language: 'Vietnamese' },
                { word: 'proud', translation: 'tự hào', language: 'Vietnamese' },
                { word: 'grow', translation: 'trồng / lớn lên', language: 'Vietnamese' },
              ],
            },
          },
        },
        {
          reading: {
            title: 'A Rainy Afternoon',
            passage:
              'Last Thursday it rained all afternoon. My friends and I stayed inside at lunch. We played cards at a table near the window. I taught my friend how to play a card game my cousin had shown me. The rain hit the windows loudly. We laughed a lot. I like rainy days at school because we get to do different things together.',
          },
          questions: [
            'Why did the friends stay inside at lunch?',
            'What did they do at the table near the window?',
            'Where did the writer learn the card game?',
            'How does the writer feel about rainy days at school?',
          ],
          sentenceStructure: {
            subjects: ['I', 'We', 'My friend', 'The rain', 'Everyone'],
            verbs: ['played', 'taught', 'laughed', 'stayed', 'listened'],
            translations: { 'I': 'Tôi', 'We': 'Chúng tôi', 'My friend': 'Bạn tôi', 'The rain': 'Mưa', 'Everyone': 'Mọi người', 'played': 'đã chơi', 'taught': 'đã dạy', 'laughed': 'đã cười', 'stayed': 'đã ở lại', 'listened': 'đã lắng nghe' },
          },
          writing: {
            prompt: 'Write about a time you played or spent time with friends when you were inside. What did you do? What made it fun?',
            promptTranslation: 'Viết về một lần bạn chơi hoặc dành thời gian với bạn bè khi ở trong nhà. Bạn đã làm gì? Điều gì làm cho nó vui?',
            support: {
              vocabularyList: [
                { word: 'rain', translation: 'mưa', language: 'Vietnamese' },
                { word: 'inside', translation: 'bên trong', language: 'Vietnamese' },
                { word: 'card game', translation: 'trò chơi bài', language: 'Vietnamese' },
                { word: 'laugh', translation: 'cười', language: 'Vietnamese' },
                { word: 'window', translation: 'cửa sổ', language: 'Vietnamese' },
                { word: 'teach', translation: 'dạy', language: 'Vietnamese' },
                { word: 'afternoon', translation: 'buổi chiều', language: 'Vietnamese' },
                { word: 'together', translation: 'cùng nhau', language: 'Vietnamese' },
              ],
            },
          },
        },
        {
          reading: {
            title: 'My Best Friend',
            passage:
              'My best friend is Priya. We have been friends since the first week of school. She always shares her lunch with me and I share mine with her. We like the same music and the same kind of stories. When I was new to New Zealand, Priya helped me learn the names of things. She never laughed at my English. I am glad she was in my class.',
          },
          questions: [
            'How long have the writer and Priya been friends?',
            'What do they share with each other?',
            'How did Priya help the writer when they were new?',
            'Why is the writer glad Priya was in the same class?',
          ],
          sentenceStructure: {
            subjects: ['Priya', 'I', 'We', 'My friend', 'She'],
            verbs: ['shared', 'helped', 'laughed', 'learned', 'stayed'],
            translations: { 'Priya': 'Priya', 'I': 'Tôi', 'We': 'Chúng tôi', 'My friend': 'Bạn tôi', 'She': 'Cô ấy', 'shared': 'đã chia sẻ', 'helped': 'đã giúp', 'laughed': 'đã cười', 'learned': 'đã học', 'stayed': 'đã ở lại' },
          },
          writing: {
            prompt: 'Write about a good friend and what makes them special to you. How did you become friends?',
            promptTranslation: 'Viết về một người bạn tốt và điều gì làm cho họ đặc biệt với bạn. Bạn đã trở thành bạn bè như thế nào?',
            support: {
              vocabularyList: [
                { word: 'friend', translation: 'bạn bè', language: 'Vietnamese' },
                { word: 'share', translation: 'chia sẻ', language: 'Vietnamese' },
                { word: 'trust', translation: 'tin tưởng', language: 'Vietnamese' },
                { word: 'kind', translation: 'tốt bụng', language: 'Vietnamese' },
                { word: 'together', translation: 'cùng nhau', language: 'Vietnamese' },
                { word: 'help', translation: 'giúp đỡ', language: 'Vietnamese' },
                { word: 'lucky', translation: 'may mắn', language: 'Vietnamese' },
                { word: 'since', translation: 'kể từ', language: 'Vietnamese' },
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
              "On Saturday our team played in the semi-final. It was the biggest game of the season. We were behind by two goals at half time. Our coach gave us a team talk and told us to keep going. In the second half, our striker scored two goals in ten minutes. With one minute left, I headed the ball into the net. We won 3–2. The whole team piled onto the field.",
          },
          questions: [
            'What game were they playing, and how big was it?',
            'How were they doing at half time?',
            'How did the writer score the winning goal?',
            'What does the team\'s reaction tell us about how much the game meant to them?',
          ],
          sentenceStructure: {
            subjects: ['Our team', 'I', 'The coach', 'Our striker', 'We'],
            verbs: ['scored', 'headed', 'won', 'played', 'cheered'],
          },
          writing: {
            prompt: 'Write about a game or competition where the result was uncertain until the very end. How did you feel? What happened?',
            support: {
              wordBank: ['goal', 'team', 'score', 'final', 'second half', 'winning', 'behind', 'cheered', 'celebrate', 'coach', 'nervous', 'relief'],
            },
          },
        },
        {
          reading: {
            title: 'Moving House',
            passage:
              "In January, my family moved to a new house in a different suburb. I had to leave the neighbours and the friends I had walked to school with for three years. The new house is bigger and has a garden, but at first I didn't care about that. I started at my new school feeling like a stranger. By the end of term one, though, I had made two close friends and found a route to walk each morning. It still feels different — but different isn't always bad.",
          },
          questions: [
            'What was difficult about moving for the writer at first?',
            'What was good about the new house?',
            'How did the writer feel at the new school?',
            'What changed by the end of term one?',
          ],
          sentenceStructure: {
            subjects: ['My family', 'I', 'The new school', 'My friends', 'We'],
            verbs: ['moved', 'left', 'felt', 'found', 'changed'],
          },
          writing: {
            prompt: 'Write about a time you had to start something new — a school, a team, a class. How did it feel at first? What helped you settle in?',
            support: {
              wordBank: ['moved', 'new', 'left', 'stranger', 'different', 'settled', 'friends', 'suburb', 'miss', 'better', 'change', 'still'],
            },
          },
        },
        {
          reading: {
            title: 'The Bystander',
            passage:
              "For three weeks, a Year 7 boy kept taking Aiden's lunch from his bag when Aiden wasn't looking. Aiden didn't want to tell a teacher — he was embarrassed. I saw it happen and wasn't sure what to do. Eventually I told my form teacher quietly after class. The teacher spoke to the other student. It stopped. Aiden said thanks, but I could tell he was a little embarrassed that I'd seen it too. Being a bystander is more complicated than it sounds.",
          },
          questions: [
            'Why didn\'t Aiden tell a teacher himself?',
            'What did the writer decide to do?',
            'What happened after the teacher got involved?',
            'What does "being a bystander is more complicated than it sounds" mean?',
          ],
          sentenceStructure: {
            subjects: ['Aiden', 'I', 'The teacher', 'We', 'The bully'],
            verbs: ['told', 'saw', 'spoke', 'decided', 'stopped'],
          },
          writing: {
            prompt: 'Write about a time you had to decide whether to speak up about something. What did you choose? What happened?',
            support: {
              wordBank: ['bystander', 'embarrassed', 'quietly', 'decided', 'brave', 'told', 'stopped', 'watched', 'helped', 'right', 'complicated', 'spoke'],
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
            title: 'The Farewell',
            passage:
              "The party was described as a farewell, but nobody used that word on the night. People said 'bon voyage' and 'we'll miss you' and 'keep in touch', which meant the same thing but felt softer. The guest of honour smiled through all of it. He had lived in this city for thirty-one years. Photographs were being taken constantly — as though something might be preserved that way. Near the end of the evening, he stood alone in the garden for about ten minutes. His wife came out to find him. He told her he needed to memorise it: the garden, the light, the way the noise from inside came muffled through the glass.",
          },
          questions: [
            'Why do you think nobody used the word "farewell" on the night?',
            'What does "photographs were being taken constantly — as though something might be preserved that way" suggest about what photographs can and cannot do?',
            'What does it mean to "memorise" a garden? What is he really doing in that moment?',
            'What does his wife\'s action — coming outside to find him — reveal about their relationship?',
            'What does this story suggest about the relationship between leaving and belonging?',
          ],
          sentenceStructure: {
            subjects: ['He', 'His wife', 'The guests', 'The garden', 'The noise'],
            verbs: ['stood', 'came', 'smiled', 'photographed', 'memorised'],
          },
          writing: {
            prompt: 'Write about a leaving — a farewell, a last day, an ending — told through the small details of the moment rather than the big feelings.',
            support: {
              wordBank: ['last', 'stood', 'memorised', 'light', 'noise', 'glass', 'soft', 'smiled', 'quiet', 'garden', 'preserved', 'leaving'],
            },
          },
        },
        {
          reading: {
            title: 'The Visitor',
            passage:
              "The woman arrived on a Tuesday with one bag and no explanation. She was Grandma's sister — or had been, before what happened in 1979. Nobody discussed what happened in 1979. Mia was eleven and had not known this woman existed. For the first three days, the two old women sat in separate rooms. On the fourth day, Mia came home to find them in the kitchen. She stood in the doorway for a moment without them noticing. They were talking quietly about someone Mia didn't know. They were laughing. She backed away and left them to it.",
          },
          questions: [
            'What does "or had been, before what happened in 1979" suggest about their relationship?',
            'Why does the writer repeat "Nobody discussed what happened in 1979"? What effect does leaving it unexplained create?',
            'What is the significance of Mia standing in the doorway "without them noticing"?',
            'What does the fact that they were laughing — after three days in separate rooms — suggest?',
            'What does Mia\'s decision to "back away and leave them to it" tell us about her?',
          ],
          sentenceStructure: {
            subjects: ['The woman', 'Grandma', 'Mia', 'They', 'Nobody'],
            verbs: ['arrived', 'sat', 'laughed', 'noticed', 'backed'],
          },
          writing: {
            prompt: 'Write about a moment when you witnessed something not meant for you — overheard a conversation, saw a private moment. What did you do with what you saw?',
            support: {
              wordBank: ['doorway', 'noticed', 'laughing', 'quietly', 'backed away', 'separate', 'watched', 'private', 'belonged', 'left', 'stood', 'heard'],
            },
          },
        },
        {
          reading: {
            title: 'The Club',
            passage:
              "The sign on the door said 'Members Only — Est. 1924'. Tom had walked past it twice a week for eight years without stopping. One afternoon, the door was propped open and an elderly man in a white shirt was mopping the floor just inside. He looked up and said: 'You're not a member.' Tom said: 'No.' The man said: 'You could be.' Tom said: 'I don't know how to play.' The old man said: 'Nobody did, until they did.' Tom stood in the doorway for a moment. Then he stepped inside.",
          },
          questions: [
            'What does "walked past it twice a week for eight years without stopping" suggest about Tom\'s relationship to routine and opportunity?',
            'Why does the writer give the exchange in short separate lines? What does this structure do?',
            'What does "Nobody did, until they did" mean? What kind of reply is it?',
            'What is the significance of Tom standing in the doorway before stepping inside?',
            'What does this story suggest about the relationship between fear, habit, and starting something new?',
          ],
          sentenceStructure: {
            subjects: ['Tom', 'The old man', 'He', 'Nobody', 'The door'],
            verbs: ['walked', 'stopped', 'stepped', 'asked', 'said'],
          },
          writing: {
            prompt: 'Write about a door — real or metaphorical — that you stood in front of before deciding to step through. What made you hesitate? What made you go?',
            support: {
              wordBank: ['doorway', 'hesitated', 'stepped', 'decided', 'habit', 'routine', 'never', 'until', 'began', 'stopped', 'outside', 'inside'],
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
            title: 'The Coach',
            passage:
              "Coach Tane never raised his voice. This was unusual enough in junior rugby that the players didn't know what to make of it at first. He also never told them when they'd played well — he asked: 'What did you do that worked?' In the beginning this irritated them. They wanted to be told. By the end of the season — after the loss in the final, which was unexpected — they understood why he had done it. They had been learning to answer their own questions. The loss didn't change that. In some ways it sharpened it.",
          },
          questions: [
            'Why do you think the players found Coach Tane\'s style unusual and irritating at first?',
            'What is the difference between being told you played well and being asked what worked?',
            'Why does the writer include the loss in the final? What does it add?',
            'What does "the loss didn\'t change that — in some ways it sharpened it" mean?',
            'What does this story suggest about what good coaching — or good teaching — actually involves?',
          ],
          sentenceStructure: {
            subjects: ['Coach Tane', 'The players', 'They', 'The team', 'The season'],
            verbs: ['coached', 'asked', 'learned', 'lost', 'understood'],
          },
          writing: {
            prompt: 'Write about someone who taught you something by asking questions rather than giving answers. What was the effect?',
            support: {
              wordBank: ['asked', 'answered', 'learned', 'irritated', 'understood', 'realised', 'voice', 'quiet', 'worked', 'season', 'sharpened', 'question'],
            },
          },
        },
        {
          reading: {
            title: 'The Apology',
            passage:
              "The letter arrived three years after the incident. Daniel hadn't expected it and didn't recognise the name on the envelope. The apology was two paragraphs long. The second paragraph gave reasons — not excuses, the writer was careful to say, just context. Daniel read it three times. He did not know what he had been carrying until he felt some of it lift. He thought about writing back. He started twice. He didn't finish either attempt. He kept the letter in his desk drawer, which seemed like a decision — though he would have had difficulty explaining exactly what decision it was.",
          },
          questions: [
            'Why do you think the apology came three years later, and what effect does this timing have?',
            'What is the difference between "reasons" and "excuses"? Why does the writer make this distinction?',
            'What does "he did not know what he had been carrying until he felt some of it lift" mean?',
            'Why do you think Daniel didn\'t finish either attempt at writing back?',
            'What does keeping the letter in the drawer suggest about how he feels about the apology?',
          ],
          sentenceStructure: {
            subjects: ['Daniel', 'The letter', 'He', 'The writer', 'The apology'],
            verbs: ['received', 'read', 'felt', 'kept', 'started'],
          },
          writing: {
            prompt: 'Write about giving or receiving an apology — either one that happened, or one that never came. What was the effect of the apology or its absence?',
            support: {
              wordBank: ['apology', 'reasons', 'excuses', 'carrying', 'lifted', 'kept', 'letter', 'wrote', 'never', 'sent', 'drawer', 'decision'],
            },
          },
        },
        {
          reading: {
            title: 'The Detour',
            passage:
              "The road closure wasn't on the map app. Carla had to drive through a town she had never been to: a main street, a war memorial, a dairy with a handwritten sign in the window. She stopped for petrol. The man behind the counter asked where she was headed. When she told him, he said there was a better way back than retracing her route. He drew it on a piece of paper. She followed it. The detour took twenty minutes longer. The view — a valley she would not otherwise have seen — was extraordinary. She thought about this later, in the context of other things.",
          },
          questions: [
            'What does the list — "a main street, a war memorial, a dairy with a handwritten sign" — suggest about the town?',
            'Why is it significant that the man drew the directions by hand rather than giving a digital address?',
            'What does "she thought about this later, in the context of other things" suggest?',
            'What might the "detour" be a metaphor for in a broader sense?',
            'How does the writer use a small physical journey to suggest something larger about how we move through life?',
          ],
          sentenceStructure: {
            subjects: ['Carla', 'The man', 'The detour', 'She', 'The view'],
            verbs: ['drove', 'stopped', 'followed', 'found', 'thought'],
          },
          writing: {
            prompt: 'Write about an unexpected detour — in a journey, a plan, or your life — that led somewhere you wouldn\'t have found otherwise.',
            support: {
              wordBank: ['detour', 'unexpected', 'found', 'followed', 'longer', 'extraordinary', 'map', 'route', 'discovered', 'thought', 'later', 'worth'],
            },
          },
        },
      ],

      // ────────────────────────────────────────────────────────
      //  JOCASTA — High level (literary analysis, Year 9+)
      //  Needs sentence starters to begin writing.
      // ────────────────────────────────────────────────────────
      Jocasta: [
        {
          reading: {
            title: 'The Inheritance',
            passage:
              "The house had been in the family for four generations when she finally had to sell it. Her sister had argued against it, then argued for it, then stopped arguing altogether — which was its own kind of answer. The solicitor's office smelled of carpet and formality. She signed the documents without reading them, which surprised her — she was a person who always read everything. On the drive home, she thought about what her grandmother had said once: that a house was not a place but a habit. She had not understood it at the time. She was beginning to now.",
          },
          questions: [
            'What does her sister\'s sequence — arguing against, then for, then stopping — suggest about how she arrived at the same conclusion?',
            'Why is it significant that someone who "always read everything" signed without reading? What does this moment reveal?',
            'What does "the solicitor\'s office smelled of carpet and formality" contribute to the emotional register of the scene?',
            'What does her grandmother mean when she says "a house was not a place but a habit"?',
            'What does "she had not understood it at the time — she was beginning to now" suggest about how grief and understanding develop?',
          ],
          sentenceStructure: {
            subjects: ['She', 'Her sister', 'The house', 'Her grandmother', 'The family'],
            verbs: ['sold', 'signed', 'argued', 'remembered', 'understood'],
            lines: 5,
          },
          writing: {
            prompt: 'Write about losing something that was tied to memory — a place, a tradition, an object. What gets lost when a physical thing is gone? What, if anything, remains?',
            support: {
              wordBank: ['habit', 'memory', 'generation', 'sold', 'signed', 'understood', 'remained', 'house', 'loss', 'family'],
              sentenceStarters: [
                'A house is not just a place — it is also ...',
                'What I hadn\'t realised until it was gone was ...',
                'My grandmother used to say ..., and I never understood it until ...',
                'The hardest part wasn\'t the decision — it was ...',
                'Some losses don\'t arrive all at once; they arrive as ...',
              ],
            },
          },
        },
        {
          reading: {
            title: 'The Neighbour',
            passage:
              "For fourteen years, he had been the kind of neighbour she barely noticed: a wave over the fence, a parcel taken in when she was away, a lawn mowed on a schedule she could have predicted. When she heard he was ill, she brought a meal over and left it on the step — which was the kind of gesture she was comfortable with. She did not go in. A month later, when he died, she felt an unexpected weight of grief. Not exactly for him — she had barely known him — but for the years of parallel living, the ordinary proximity, the quiet accumulation of a presence she had taken entirely for granted.",
          },
          questions: [
            'What does "the kind of neighbour she barely noticed" suggest about how we relate to the people most consistent in our lives?',
            'What does "the kind of gesture she was comfortable with" tell us about her as a person? What is she avoiding?',
            'What does "parallel living" mean? What kind of relationship does it describe?',
            'Why does the writer distinguish between grief "for him" and grief for "the quiet accumulation of a presence"?',
            'What does this story suggest about what we value — or fail to value — until it is gone?',
          ],
          sentenceStructure: {
            subjects: ['She', 'Her neighbour', 'The grief', 'The years', 'His presence'],
            verbs: ['noticed', 'brought', 'felt', 'missed', 'realised'],
            lines: 5,
          },
          writing: {
            prompt: 'Write about someone whose presence in your life you took for granted — and what you understood only when that presence changed or disappeared.',
            support: {
              wordBank: ['parallel', 'presence', 'noticed', 'taken', 'granted', 'grief', 'ordinary', 'accumulated', 'comfortable', 'missed', 'realised', 'barely'],
              sentenceStarters: [
                'I hadn\'t thought much about ... until ...',
                'It wasn\'t grief exactly — it was more like ...',
                'The thing about ordinary presence is that it ...',
                'I realised afterward that I had never once ...',
                'What I missed wasn\'t the person themselves, but ...',
              ],
            },
          },
        },
        {
          reading: {
            title: 'The Note',
            passage:
              "She found the note tucked inside a book she had not opened in ten years. It was in her own handwriting — she was certain of that — but she had no memory of writing it. Three sentences: 'Stop waiting for things to be different. You have what you need. Start now.' The date at the bottom was from when she was twenty-two. She read it sitting at her desk, which was covered with work she had been putting off for weeks. The window was open. Outside, the same street. She sat there for a long time.",
          },
          questions: [
            'What is the effect of discovering a message in your own handwriting that you have no memory of writing?',
            'What do the three sentences suggest about the state of mind of her twenty-two-year-old self?',
            'Why does the writer describe the desk as "covered with work she had been putting off for weeks"? What does this detail add?',
            'What does "outside, the same street" contribute to the emotional weight of the moment?',
            'What does the story suggest about the relationship between past and present selves — and about advice that travels through time?',
          ],
          sentenceStructure: {
            subjects: ['She', 'The note', 'Her younger self', 'The desk', 'The window'],
            verbs: ['found', 'read', 'wrote', 'sat', 'remembered'],
            lines: 5,
          },
          writing: {
            prompt: 'Write a note to your future self — or from your future self to you now. What would you most need to hear? What would be hardest to say?',
            support: {
              wordBank: ['waiting', 'start', 'need', 'enough', 'note', 'past', 'future', 'self', 'found', 'remember', 'written', 'different'],
              sentenceStarters: [
                'Stop waiting for ...',
                'What you have right now is ...',
                'You will not always ..., but right now ...',
                'The thing I wish someone had told me was ...',
                'By the time you read this, you will already ...',
              ],
            },
          },
        },
      ],

      // ────────────────────────────────────────────────────────
      //  CODY — High level (similar to Jocasta)
      //  Sophisticated literary analysis. Sentence starters.
      // ────────────────────────────────────────────────────────
      Cody: [
        {
          reading: {
            title: 'The Witness',
            passage:
              "She had seen the accident from the window of her third-floor office. It happened very quickly — a matter of seconds — and then the street looked almost normal again, except for a car at an odd angle and two people standing very still on the pavement. She was the only one who had seen it from where she was. The police asked her later what she had noticed. She gave a careful account. What she did not say — what she could not say, because it was not the kind of thing that belonged in a statement — was that in the moment it happened, she had not felt shock. She had felt something else: a strange clarity, as though for one second everything had been made visible.",
          },
          questions: [
            'What does "the street looked almost normal again, except for" suggest about how quickly life absorbs disruption?',
            'Why is it significant that she was "the only one who had seen it from where she was"?',
            'What does "not the kind of thing that belonged in a statement" suggest about the gap between official accounts and actual experience?',
            'What does the "strange clarity" she felt instead of shock tell us about extreme moments?',
            'What is this story really about — the accident, or something about consciousness and attention?',
          ],
          sentenceStructure: {
            subjects: ['She', 'The police', 'The street', 'The moment', 'The account'],
            verbs: ['saw', 'noticed', 'felt', 'gave', 'understood'],
            lines: 5,
          },
          writing: {
            prompt: 'Write about a moment of unexpected clarity — when something happened and instead of feeling the expected emotion, you felt something stranger and more precise. What was it? What did it reveal?',
            support: {
              wordBank: ['clarity', 'shock', 'visible', 'strange', 'noticed', 'moment', 'instead', 'account', 'saw', 'felt', 'normal', 'expected'],
              sentenceStarters: [
                'I had always imagined I would feel ... in that moment, but instead ...',
                'Everything became very clear, as though ...',
                'The strange thing wasn\'t what happened — it was ...',
                'There are moments when everything else ...',
                'I couldn\'t have explained it in a statement, but ...',
              ],
            },
          },
        },
        {
          reading: {
            title: 'The Archive',
            passage:
              "The newspaper archive went back to 1897. He had been given access for a research project and had underestimated how long it would take. He was looking for one specific report from the 1950s but kept stopping. A headline about a drought. An advertisement for a product that no longer existed. A death notice for someone born in the same year as his grandfather. The archive was not organised by importance. It simply recorded what had happened, day after day after day. He thought about all the things considered newsworthy that were now completely forgotten. He thought about all the things that had never been recorded at all.",
          },
          questions: [
            'What does the detail about the death notice for someone born the same year as his grandfather suggest about how archives make time personal?',
            'What does "the archive was not organised by importance — it simply recorded what had happened" reveal about the nature of historical record?',
            'What is the effect of "day after day after day"? Why three times?',
            'What does thinking about "all the things that had never been recorded at all" suggest about the limits of the archive?',
            'What does this story suggest about what history is — and what it leaves out?',
          ],
          sentenceStructure: {
            subjects: ['He', 'The archive', 'The headlines', 'History', 'The record'],
            verbs: ['searched', 'stopped', 'found', 'thought', 'recorded'],
            lines: 5,
          },
          writing: {
            prompt: 'Write about something that has not been recorded — a story, a moment, a person — that deserves to be. What is lost when things go unrecorded?',
            support: {
              wordBank: ['archive', 'record', 'forgotten', 'history', 'newsworthy', 'personal', 'left out', 'noticed', 'preserved', 'disappeared', 'day after day', 'mattered'],
              sentenceStarters: [
                'There are things that happened that nobody wrote down, like ...',
                'The archive kept record of ..., but never of ...',
                'What gets preserved and what gets forgotten is not a matter of ...',
                'Someone should have written down ...',
                'If I could add one thing to the record, it would be ...',
              ],
            },
          },
        },
        {
          reading: {
            title: 'The First Morning',
            passage:
              "The first morning in the new country, she woke up and didn't know for a moment where she was. The light was different. The traffic sound was different. The silence between the traffic was a different kind of silence. She lay still and made a list in her head of everything she recognised: the smell of her own pillow, the weight of the duvet, the sound of her own breathing. It was a smaller list than she had expected. She got up. She made tea in an unfamiliar kitchen. She stood at the window and watched the street below — a street she had never been on before in her life — and thought: this is where I live now. It did not feel real. She suspected it would, eventually.",
          },
          questions: [
            'What does "the silence between the traffic was a different kind of silence" suggest about the subtle ways place reveals itself?',
            'Why does she make a list of things she recognises? What is she doing emotionally in this act?',
            'What does "it was a smaller list than she had expected" reveal about the nature of belonging?',
            'What is the effect of the short, simple sentence — "She got up" — after the lying still?',
            'What does "she suspected it would, eventually" suggest about her relationship to hope and uncertainty?',
          ],
          sentenceStructure: {
            subjects: ['She', 'The light', 'The silence', 'The street', 'Everything'],
            verbs: ['woke', 'recognised', 'stood', 'watched', 'suspected'],
            lines: 5,
          },
          writing: {
            prompt: 'Write about arriving somewhere new — a country, a school, a home — and the experience of the first morning. What felt strange? What anchored you?',
            support: {
              wordBank: ['strange', 'familiar', 'recognised', 'silence', 'different', 'anchored', 'list', 'eventually', 'morning', 'new', 'pillow', 'suspected'],
              sentenceStarters: [
                'The first thing I noticed was ...',
                'I made a list of everything that was the same: ...',
                'What surprised me most was the ...',
                'It did not feel real, but I thought ...',
                'Eventually, I knew, it would ...',
              ],
            },
          },
        },
      ],
    },
  },
  {
    date: '2026-05-11',
    activities: {

      // ────────────────────────────────────────────────────────
      //  PHARRELL — Level 7 (~5 yrs)
      //  Very short phonics-based texts. Word card support.
      // ────────────────────────────────────────────────────────
      Pharrell: [
        {
          reading: {
            title: 'A Rainy Day',
            passage:
              'Today it is raining. I cannot play outside. Mum gives me paper and crayons. I draw a big rainbow. Dad makes hot soup for lunch. I read a book under a blanket. I like rainy days at home.',
          },
          questions: [
            'What does the writer do when it rains?',
            'What does Dad make for lunch?',
            'Do you think the writer likes rainy days? Why?',
          ],
          sentenceStructure: {
            subjects: ['I', 'Mum', 'Dad', 'We', 'The rain'],
            verbs: ['draw', 'makes', 'reads', 'plays', 'falls'],
          },
          writing: {
            prompt: 'Write about what you like to do on a rainy day. What is your favourite inside activity?',
            support: {
              wordBank: ['rain', 'inside', 'draw', 'read', 'blanket', 'warm', 'book', 'cosy', 'quiet', 'soup', 'art', 'play'],
            },
          },
        },
        {
          reading: {
            title: 'At the Farm',
            passage:
              'We visit a farm on the weekend. There are cows, sheep, and hens. I feed the hens some corn. A big cow comes to the fence. I pat its nose. It feels soft and warm. We buy fresh eggs to take home. I want to go back to the farm.',
          },
          questions: [
            'Name three animals at the farm.',
            'What does the writer feed the hens?',
            'What do they buy to take home?',
          ],
          sentenceStructure: {
            subjects: ['I', 'We', 'The cow', 'The hens', 'Dad'],
            verbs: ['feed', 'pat', 'visit', 'buy', 'run'],
          },
          writing: {
            prompt: 'Write about a farm or a place with animals. What animals did you see? What did you do?',
            support: {
              wordBank: ['farm', 'cow', 'sheep', 'hen', 'feed', 'pat', 'soft', 'eggs', 'animal', 'big', 'small', 'run'],
            },
          },
        },
        {
          reading: {
            title: 'Getting Ready for School',
            passage:
              'I wake up at seven. I brush my teeth and wash my face. I eat toast for breakfast. I put my books and pencil case in my bag. Mum does my hair. I say goodbye to my dog. I walk to the bus stop. I am ready for school.',
          },
          questions: [
            'What does the writer eat for breakfast?',
            'What does the writer put in the bag?',
            'Who does the writer say goodbye to?',
          ],
          sentenceStructure: {
            subjects: ['I', 'Mum', 'Rex', 'My bag', 'We'],
            verbs: ['wake', 'eat', 'pack', 'walk', 'brush'],
          },
          writing: {
            prompt: 'Write about your morning routine. What do you do to get ready for school?',
            support: {
              wordBank: ['wake', 'brush', 'eat', 'pack', 'ready', 'walk', 'school', 'bag', 'toast', 'morning', 'dress', 'hurry'],
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
            title: 'The Science Fair',
            passage:
              'Last week our school held a science fair. Every class made a project. My group made a volcano from paper and baking soda. When we poured in the vinegar, it fizzed and bubbled. People came to look at it and asked us questions. Our teacher said we explained it very well. I felt proud of our work. I want to do more science experiments.',
          },
          questions: [
            'What did the writer\'s group make for the science fair?',
            'What happened when the vinegar was poured in?',
            'What did the teacher say?',
            'Why do you think the writer wants to do more experiments?',
          ],
          sentenceStructure: {
            subjects: ['My group', 'We', 'I', 'The teacher', 'Our class'],
            verbs: ['made', 'poured', 'explained', 'felt', 'won'],
            translations: { 'My group': '我们小组', 'We': '我们', 'I': '我', 'The teacher': '老师', 'Our class': '我们班', 'made': '做了', 'poured': '倒了', 'explained': '解释了', 'felt': '感觉', 'won': '赢了' },
          },
          writing: {
            prompt: 'Write about a science experiment or project you found interesting. What happened? What did you learn?',
            promptTranslation: '写一写你觉得有趣的科学实验或项目。发生了什么？你学到了什么？',
            support: {
              vocabularyList: [
                { word: 'experiment', translation: '实验', language: 'Chinese' },
                { word: 'project', translation: '项目', language: 'Chinese' },
                { word: 'volcano', translation: '火山', language: 'Chinese' },
                { word: 'fizz', translation: '冒泡', language: 'Chinese' },
                { word: 'explain', translation: '解释', language: 'Chinese' },
                { word: 'proud', translation: '自豪的', language: 'Chinese' },
                { word: 'result', translation: '结果', language: 'Chinese' },
                { word: 'discover', translation: '发现', language: 'Chinese' },
              ],
            },
          },
        },
        {
          reading: {
            title: 'My Favourite Season',
            passage:
              'My favourite season is summer. In summer the days are long and warm. We go swimming at the pool after school. I eat ice cream with my friends. The sky stays light until late. Mum hangs the washing outside and it dries fast. In summer I feel free and happy. I wish summer could last all year.',
          },
          questions: [
            'What is the writer\'s favourite season?',
            'What do they do after school in summer?',
            'What does Mum do with the washing?',
            'Why do you think summer makes the writer feel free and happy?',
          ],
          sentenceStructure: {
            subjects: ['I', 'We', 'The sun', 'Summer', 'My family'],
            verbs: ['love', 'swim', 'enjoy', 'play', 'feel'],
            translations: { 'I': '我', 'We': '我们', 'The sun': '太阳', 'Summer': '夏天', 'My family': '我的家人', 'love': '爱', 'swim': '游泳', 'enjoy': '享受', 'play': '玩', 'feel': '感觉' },
          },
          writing: {
            prompt: 'Write about your favourite season. What do you like about it? What do you do?',
            promptTranslation: '写一写你最喜欢的季节。你喜欢它什么？你会做什么？',
            support: {
              vocabularyList: [
                { word: 'summer', translation: '夏天', language: 'Chinese' },
                { word: 'winter', translation: '冬天', language: 'Chinese' },
                { word: 'warm', translation: '温暖的', language: 'Chinese' },
                { word: 'cool', translation: '凉爽的', language: 'Chinese' },
                { word: 'season', translation: '季节', language: 'Chinese' },
                { word: 'weather', translation: '天气', language: 'Chinese' },
                { word: 'sunshine', translation: '阳光', language: 'Chinese' },
                { word: 'favourite', translation: '最喜欢的', language: 'Chinese' },
              ],
            },
          },
        },
        {
          reading: {
            title: 'The Museum Trip',
            passage:
              'Last Friday our class went on a trip to the museum. We saw dinosaur fossils and a space exhibit. My favourite part was the model of the solar system. I learned that Jupiter is the biggest planet. We had lunch in the park outside. Our teacher said we could come back with our families. The trip was interesting and I want to learn more about space.',
          },
          questions: [
            'What did the class see at the museum?',
            'What was the writer\'s favourite part?',
            'What fact did the writer learn?',
            'What would the writer like to do after this trip?',
          ],
          sentenceStructure: {
            subjects: ['Our class', 'We', 'I', 'The teacher', 'My friends'],
            verbs: ['visited', 'saw', 'learned', 'walked', 'enjoyed'],
            translations: { 'Our class': '我们班', 'We': '我们', 'I': '我', 'The teacher': '老师', 'My friends': '我的朋友们', 'visited': '参观了', 'saw': '看到了', 'learned': '学到了', 'walked': '走了', 'enjoyed': '享受了' },
          },
          writing: {
            prompt: 'Write about a place you visited on a school trip or with your family. What did you see? What did you learn?',
            promptTranslation: '写一写你在学校旅行或和家人一起去过的地方。你看到了什么？你学到了什么？',
            support: {
              vocabularyList: [
                { word: 'museum', translation: '博物馆', language: 'Chinese' },
                { word: 'fossil', translation: '化石', language: 'Chinese' },
                { word: 'planet', translation: '行星', language: 'Chinese' },
                { word: 'exhibit', translation: '展览', language: 'Chinese' },
                { word: 'interesting', translation: '有趣的', language: 'Chinese' },
                { word: 'discover', translation: '发现', language: 'Chinese' },
                { word: 'trip', translation: '旅行', language: 'Chinese' },
                { word: 'learn', translation: '学习', language: 'Chinese' },
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
            title: 'The School Fair',
            passage:
              'Last Saturday was the school fair. There were games, food stalls, and a bouncy castle. I played the ring toss and won a small prize. Mum bought food from one of the stalls. My little brother went on the bouncy castle many times. It was very busy and noisy. I helped at the cake stall for one hour. We came home tired but very happy.',
          },
          questions: [
            'What was at the school fair?',
            'What did the writer win?',
            'How did the writer help at the fair?',
            'How did the family feel when they went home?',
          ],
          sentenceStructure: {
            subjects: ['I', 'We', 'Mum', 'My brother', 'My family'],
            verbs: ['played', 'won', 'bought', 'helped', 'came'],
            translations: { 'I': 'Tôi', 'We': 'Chúng tôi', 'Mum': 'Mẹ', 'My brother': 'Em trai tôi', 'My family': 'Gia đình tôi', 'played': 'đã chơi', 'won': 'đã thắng', 'bought': 'đã mua', 'helped': 'đã giúp', 'came': 'đã đến' },
          },
          writing: {
            prompt: 'Write about a fair, market, or community event you have been to. What happened? What did you enjoy most?',
            promptTranslation: 'Viết về một hội chợ, chợ hoặc sự kiện cộng đồng bạn đã tham dự. Chuyện gì đã xảy ra? Bạn thích nhất điều gì?',
            support: {
              vocabularyList: [
                { word: 'fair', translation: 'hội chợ', language: 'Vietnamese' },
                { word: 'stall', translation: 'quầy hàng', language: 'Vietnamese' },
                { word: 'prize', translation: 'giải thưởng', language: 'Vietnamese' },
                { word: 'busy', translation: 'đông đúc', language: 'Vietnamese' },
                { word: 'noisy', translation: 'ồn ào', language: 'Vietnamese' },
                { word: 'help', translation: 'giúp đỡ', language: 'Vietnamese' },
                { word: 'enjoy', translation: 'thích thú', language: 'Vietnamese' },
                { word: 'tired', translation: 'mệt mỏi', language: 'Vietnamese' },
              ],
            },
          },
        },
        {
          reading: {
            title: 'Cooking with Grandma',
            passage:
              'Every Sunday I cook with my grandmother. She teaches me Vietnamese dishes. This week we made chicken soup with noodles. First we cooked the chicken in a big pot with spices. The smell filled the whole house. Then we added noodles and fresh herbs. Grandma let me pour the broth into the bowls. It tasted wonderful. I want to learn all of her recipes.',
          },
          questions: [
            'What do the writer and grandmother do every Sunday?',
            'What dish did they make this week?',
            'What did the writer pour into the bowls?',
            'Why do you think the writer wants to learn all of Grandma\'s recipes?',
          ],
          sentenceStructure: {
            subjects: ['I', 'Grandma', 'We', 'The soup', 'Mum'],
            verbs: ['cooked', 'taught', 'added', 'tasted', 'made'],
            translations: { 'I': 'Tôi', 'Grandma': 'Bà nội', 'We': 'Chúng tôi', 'The soup': 'Nồi súp', 'Mum': 'Mẹ', 'cooked': 'đã nấu', 'taught': 'đã dạy', 'added': 'đã thêm', 'tasted': 'đã nếm', 'made': 'đã làm' },
          },
          writing: {
            prompt: 'Write about a food or dish that is special to your family. How is it made? Why is it important to you?',
            promptTranslation: 'Viết về một món ăn đặc biệt của gia đình bạn. Nó được làm như thế nào? Tại sao nó quan trọng với bạn?',
            support: {
              vocabularyList: [
                { word: 'recipe', translation: 'công thức nấu ăn', language: 'Vietnamese' },
                { word: 'cook', translation: 'nấu ăn', language: 'Vietnamese' },
                { word: 'spice', translation: 'gia vị', language: 'Vietnamese' },
                { word: 'noodle', translation: 'mì', language: 'Vietnamese' },
                { word: 'smell', translation: 'mùi hương', language: 'Vietnamese' },
                { word: 'taste', translation: 'mùi vị', language: 'Vietnamese' },
                { word: 'tradition', translation: 'truyền thống', language: 'Vietnamese' },
                { word: 'memory', translation: 'ký ức', language: 'Vietnamese' },
              ],
            },
          },
        },
        {
          reading: {
            title: 'A Letter to My Cousin',
            passage:
              'My cousin Minh still lives in Vietnam. We write letters to each other. In my last letter I told him about my new school. I wrote about the big playground and my teacher, Mr Kim. He wrote back and told me about the Tết festival. He said there were fireworks and a lot of food. I miss Minh very much. One day I hope he can visit New Zealand.',
          },
          questions: [
            'Where does Minh live?',
            'What did the writer tell Minh about in the letter?',
            'What did Minh write about?',
            'How do we know the writer misses Minh?',
          ],
          sentenceStructure: {
            subjects: ['I', 'My cousin Minh', 'We', 'He', 'The letter'],
            verbs: ['wrote', 'told', 'missed', 'sent', 'received'],
            translations: { 'I': 'Tôi', 'My cousin Minh': 'Anh họ Minh', 'We': 'Chúng tôi', 'He': 'Anh ấy', 'The letter': 'Lá thư', 'wrote': 'đã viết', 'told': 'đã kể', 'missed': 'nhớ', 'sent': 'đã gửi', 'received': 'đã nhận' },
          },
          writing: {
            prompt: 'Write about someone you miss or someone who lives far away. What would you tell them about your life here?',
            promptTranslation: 'Viết về một người bạn nhớ hoặc một người sống xa. Bạn sẽ kể gì cho họ về cuộc sống của bạn ở đây?',
            support: {
              vocabularyList: [
                { word: 'letter', translation: 'thư', language: 'Vietnamese' },
                { word: 'miss', translation: 'nhớ', language: 'Vietnamese' },
                { word: 'cousin', translation: 'anh/chị/em họ', language: 'Vietnamese' },
                { word: 'festival', translation: 'lễ hội', language: 'Vietnamese' },
                { word: 'visit', translation: 'thăm', language: 'Vietnamese' },
                { word: 'far away', translation: 'ở xa', language: 'Vietnamese' },
                { word: 'write', translation: 'viết', language: 'Vietnamese' },
                { word: 'remember', translation: 'nhớ lại', language: 'Vietnamese' },
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
            title: 'The Power Cut',
            passage:
              "Last Tuesday, the power went out at our house at dinner time. Dad had to finish cooking on the barbecue outside. We ate by candlelight at the kitchen table. Mum found a board game in the back of the cupboard that we hadn't played in years. We played for three hours. My sister won twice. When the power finally came back on, everyone agreed they didn't really want to stop. We kept playing until ten o'clock.",
          },
          questions: [
            'Why did Dad have to cook on the barbecue?',
            'Where did Mum find the board game?',
            'What did the family do when the power came back on?',
            'What does this story suggest about how the family usually spends their evenings?',
          ],
          sentenceStructure: {
            subjects: ['Dad', 'Mum', 'We', 'My sister', 'The power'],
            verbs: ['cooked', 'found', 'played', 'ate', 'came'],
          },
          writing: {
            prompt: 'Write about a time when something went wrong at home, but it ended up being better than expected. What happened?',
            support: {
              wordBank: ['power', 'candle', 'dark', 'board game', 'family', 'together', 'unexpected', 'fun', 'better', 'laugh', 'decided', 'stayed'],
            },
          },
        },
        {
          reading: {
            title: 'The Camping Trip',
            passage:
              "In the holidays our family drove four hours to a campsite near a lake. We set up the tent before dark. On the first morning, Dad and I went fishing. I caught a small trout and threw it back. At night we cooked sausages on a fire and told stories. One night it rained heavily and water came into the tent. Dad spent an hour fixing it with tape. He said it was character building. I mostly thought it was just cold and wet.",
          },
          questions: [
            'Where did the family go for their holiday?',
            'What happened to the fish the writer caught?',
            'What went wrong one night?',
            'What does Dad mean when he says it was "character building"?',
          ],
          sentenceStructure: {
            subjects: ['Dad', 'I', 'We', 'The tent', 'The rain'],
            verbs: ['drove', 'fished', 'cooked', 'caught', 'fixed'],
          },
          writing: {
            prompt: 'Write about a holiday or trip that didn\'t go perfectly. What happened? What did you learn from it?',
            support: {
              wordBank: ['camping', 'tent', 'fire', 'rain', 'lake', 'caught', 'fixed', 'cold', 'wet', 'laughed', 'together', 'adventure'],
            },
          },
        },
        {
          reading: {
            title: 'The Old Photograph',
            passage:
              "I found an old photograph in a box at my grandad's house. It showed a young man standing in front of a car I didn't recognise, somewhere with mountains behind. On the back, in faded handwriting: 'Stanley, 1968.' Grandad came in and saw me holding it. He went quiet for a moment. 'That's your great-uncle,' he said. 'He died two years after that photo was taken.' I looked at the young man again. He was smiling, squinting into the sun. He had no idea.",
          },
          questions: [
            'What was written on the back of the photograph?',
            'How did Grandad react when he saw the photograph?',
            'What do we learn about the young man in the photo?',
            'What does "he had no idea" mean in the context of this story?',
          ],
          sentenceStructure: {
            subjects: ['I', 'Grandad', 'Stanley', 'The young man', 'The photograph'],
            verbs: ['found', 'came', 'smiled', 'looked', 'died'],
          },
          writing: {
            prompt: 'Write about an object that holds a story or a memory. What is it? What does it mean to the person who has it?',
            support: {
              wordBank: ['photograph', 'memory', 'story', 'old', 'faded', 'found', 'quiet', 'held', 'past', 'remembered', 'young', 'moment'],
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
            title: 'The Appointment',
            passage:
              "The doctor called her name and she stood up. She had been sitting in the waiting room for forty minutes, and in that time she had read the same magazine article three times without taking in a single word. The room had that particular stillness that waiting rooms have — everyone present, nobody looking at each other. In the corridor, walking toward the room, she noticed she had left her coat behind. She decided not to go back for it. Later, she would not remember the coat at all. She would only remember the word the doctor said, and the two seconds of silence before he said anything else.",
          },
          questions: [
            'What does rereading the same article three times without taking in a word tell us about her state of mind?',
            'What does "everyone present, nobody looking at each other" suggest about the atmosphere of a waiting room?',
            'Why do you think she decides not to go back for her coat?',
            'What does "the two seconds of silence before he said anything else" suggest to the reader?',
            'How does the writer build tension in this passage? Identify at least two techniques.',
          ],
          sentenceStructure: {
            subjects: ['She', 'The doctor', 'The waiting room', 'The corridor', 'Her coat'],
            verbs: ['waited', 'called', 'stood', 'walked', 'remembered'],
          },
          writing: {
            prompt: 'Write a short scene set in a waiting room. Use specific details to show how a character is feeling without directly telling the reader.',
            support: {
              wordBank: ['waited', 'glanced', 'silent', 'room', 'clock', 'still', 'noticed', 'turned', 'held', 'moved', 'finally', 'heard'],
            },
          },
        },
        {
          reading: {
            title: 'The Border',
            passage:
              "They had been in the queue for six hours. The children were asleep in the back seat. Every twenty minutes or so, the line moved forward by one car. The woman in the passenger seat had stopped checking her phone — there was no signal this close to the crossing. Her husband hadn't spoken for an hour. When they finally reached the booth, the officer looked at their documents for a long time. He looked at the children. He looked at the documents again. He stamped the pages and handed them back without a word. They drove through. On the other side, nothing looked different. But it was.",
          },
          questions: [
            'What do the details — the sleeping children, no phone signal, the husband\'s silence — collectively suggest about this journey?',
            'Why does the writer repeat "He looked at..." three times? What effect does this create?',
            'What does the officer\'s silence when he hands back the documents suggest?',
            'What is the significance of "nothing looked different. But it was."?',
            'What larger human experience do you think this story is representing?',
          ],
          sentenceStructure: {
            subjects: ['They', 'The officer', 'The children', 'The woman', 'The car'],
            verbs: ['waited', 'looked', 'crossed', 'drove', 'slept'],
          },
          writing: {
            prompt: 'Write about a journey or crossing that changed something — even if on the outside, everything looked the same as before.',
            support: {
              wordBank: ['crossed', 'waited', 'silence', 'document', 'different', 'changed', 'finally', 'side', 'moment', 'still', 'together', 'arrived'],
            },
          },
        },
        {
          reading: {
            title: 'The Shortcut',
            passage:
              "The shortcut saved about eight minutes on the walk home. Ellie had taken it every day for two years. It ran behind the old factory, along a fence that had started to lean, through a gap in a hedge, and out on to Vine Street. She had never thought about it much. One rainy Wednesday she noticed for the first time that the factory was empty — had been for a while, by the look of it. The windows were boarded. The loading dock was padlocked. She walked a little faster. On the other side of the hedge, a man she didn't recognise was standing near the corner, watching her. He raised one hand in a wave. She waved back and kept walking. She would take a different route on Thursday.",
          },
          questions: [
            'What details suggest the factory had been empty for a long time?',
            'Why do you think Ellie had "never thought about it much" before? What does this suggest about habit?',
            'How does the writer create a shift in atmosphere in the middle of the passage?',
            'What does Ellie\'s decision to take a different route on Thursday tell us about her?',
            'Is this story more about the factory, the man, or something else entirely? Explain your answer.',
          ],
          sentenceStructure: {
            subjects: ['Ellie', 'The factory', 'She', 'The man', 'The route'],
            verbs: ['walked', 'noticed', 'watched', 'decided', 'changed'],
          },
          writing: {
            prompt: 'Write about something familiar that you suddenly see differently. What made you notice it for the first time? What changed?',
            support: {
              wordBank: ['noticed', 'familiar', 'different', 'routine', 'quiet', 'changed', 'never', 'realised', 'ordinary', 'stopped', 'felt', 'always'],
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
            title: 'The Understudy',
            passage:
              "The lead actor broke his ankle on Tuesday — three days before opening night. The director called everyone to the stage. There was a silence. Then Marcus stepped forward. Nobody had known Marcus could sing. He had been playing the part of a porter with two lines. He had been at every rehearsal, every morning call, every notes session. He knew every word of every character. When he walked through the full show on Wednesday, the cast stood without moving at the end. The director said nothing for a long time. Then he said: 'Why didn't you tell me you could do this?' Marcus shrugged. 'You didn't ask.'",
          },
          questions: [
            'What does the detail about Marcus attending every rehearsal suggest about his character?',
            'Why do you think nobody had known Marcus could sing?',
            'What does the cast\'s silence at the end of the run-through suggest about Marcus\'s performance?',
            'What is the significance of Marcus\'s reply — "You didn\'t ask"?',
            'What does this story suggest about how talent and preparation are recognised — or overlooked?',
          ],
          sentenceStructure: {
            subjects: ['Marcus', 'The director', 'The cast', 'The lead actor', 'Nobody'],
            verbs: ['stepped', 'watched', 'performed', 'asked', 'knew'],
          },
          writing: {
            prompt: 'Write about someone who was overlooked or underestimated, but proved their abilities when it mattered. What happened? What did this reveal?',
            support: {
              wordBank: ['overlooked', 'ready', 'prepared', 'stepped', 'silent', 'proved', 'talent', 'moment', 'surprised', 'waiting', 'knew', 'asked'],
            },
          },
        },
        {
          reading: {
            title: 'The Midnight Message',
            passage:
              "The message came through at 12:17am. Ben was awake — he was always awake at that hour — but he wasn't expecting this. It was from a number he didn't recognise. Eight words: 'I know what happened at the lake house.' He stared at it. His first response was to delete it. His second was to put the phone face-down on the nightstand. His third was to pick it back up again. He had never told anyone about the lake house. He had never written it down. He typed: 'Who is this?' The message was delivered. It was read. No reply came.",
          },
          questions: [
            'Why do you think the writer tells us how many words the message contained?',
            'What does Ben\'s sequence of responses — delete, put down, pick back up — reveal about him?',
            'What does "I had never written it down" suggest about how Ben has treated this memory?',
            'What effect does "No reply came" create as an ending?',
            'What questions does this story deliberately leave unanswered, and why might the writer have chosen to do this?',
          ],
          sentenceStructure: {
            subjects: ['Ben', 'The message', 'He', 'The number', 'The reply'],
            verbs: ['received', 'stared', 'typed', 'deleted', 'waited'],
          },
          writing: {
            prompt: 'Write a short story in which a character receives unexpected news — through a message, letter, or phone call. Focus on how they react, not just what the news says.',
            support: {
              wordBank: ['message', 'unexpected', 'silence', 'stared', 'deleted', 'typed', 'replied', 'waited', 'never', 'always', 'read', 'delivered'],
            },
          },
        },
        {
          reading: {
            title: 'The Spare Key',
            passage:
              "Her neighbour had held the spare key for eleven years. They had an arrangement: once a year they checked that it still fit. It had always felt like something that would outlast them both. The neighbour moved away in November. She returned the key without saying much. The new people moved in before Christmas. Friendly enough. She thought about asking them. She didn't. For the first time in eleven years, the only copy of her key was on her own keyring. It should have felt like independence. It felt like something else entirely.",
          },
          questions: [
            'What does the arrangement of checking the key once a year suggest about their relationship?',
            'Why do you think the writer says it "felt like something that would outlast them both"?',
            'What does the neighbour returning the key "without saying much" suggest about the end of that arrangement?',
            'Why do you think she decided not to ask the new neighbours?',
            'What does "it should have felt like independence" tell us about what she actually feels?',
          ],
          sentenceStructure: {
            subjects: ['She', 'Her neighbour', 'The new people', 'The key', 'The arrangement'],
            verbs: ['held', 'moved', 'returned', 'asked', 'felt'],
          },
          writing: {
            prompt: 'Write about a small, everyday thing that turns out to mean more than you expected. What was it? Why did it matter?',
            support: {
              wordBank: ['small', 'ordinary', 'meant', 'realised', 'expected', 'changed', 'kept', 'gave', 'held', 'missed', 'arrangement', 'trust'],
            },
          },
        },
      ],

      // ────────────────────────────────────────────────────────
      //  JOCASTA — High level (literary analysis, Year 9+)
      //  Needs sentence starters to begin writing.
      // ────────────────────────────────────────────────────────
      Jocasta: [
        {
          reading: {
            title: 'The Photograph Album',
            passage:
              "The album had been on the bottom shelf behind the cookbooks for so long it had become nearly invisible. Her daughter found it while looking for something else and brought it to the table. They sat together. The early pages showed a house she recognised — smaller than she remembered it. The middle pages showed people she had known as old people when they were young: her mother in a dress she had never seen, laughing at something off-frame. The last section was empty. Several pages of blank acetate, stiff and yellowing, waiting. She couldn't decide if that felt sad or like an invitation.",
          },
          questions: [
            'What does "nearly invisible" suggest about how familiar objects can be both present and unnoticed in our lives?',
            'Why does the writer choose to describe the mother "laughing at something off-frame"? What does the off-frame detail add?',
            'What is the difference between seeing someone as they are now versus seeing them as they were? What does the album make visible?',
            'How does the description of the last pages — "stiff and yellowing, waiting" — function emotionally in the passage?',
            'What does "she couldn\'t decide if that felt sad or like an invitation" suggest about her relationship with time and memory?',
          ],
          sentenceStructure: {
            subjects: ['She', 'Her daughter', 'The album', 'The pages', 'Her mother'],
            verbs: ['found', 'sat', 'recognised', 'turned', 'waited'],
            lines: 5,
          },
          writing: {
            prompt: 'Write about an object — a photograph, a piece of clothing, a letter — that holds a story you only partly know. What does it reveal? What does it leave unanswered?',
            support: {
              wordBank: ['object', 'held', 'story', 'recognised', 'unknown', 'found', 'kept', 'faded', 'remained', 'before'],
              sentenceStarters: [
                'I only know part of the story behind ...',
                'There are things an object can tell you that a person never ...',
                'When I looked at it closely, I noticed ...',
                'The part I couldn\'t explain was ...',
                'It felt like something between grief and ...',
              ],
            },
          },
        },
        {
          reading: {
            title: 'The Return',
            passage:
              "She came back to the town after twenty years. The main street was shorter than she remembered — which was one of those things people always said about returning somewhere, and she had always assumed it was a cliché, until it happened to her. The bakery was a pharmacy now. The school had a new front building that made the old part look apologetic behind it. She walked to the house she had grown up in. Someone else's name on the letterbox. Someone else's curtains in the window. A bicycle leaning against the fence that was not hers. Standing there, she understood something: she had not come back to see what had changed. She had come back to say goodbye to something she hadn't known she needed to say goodbye to.",
          },
          questions: [
            'What does the writer mean by saying she "always assumed it was a cliché, until it happened to her"? Why is this an important observation?',
            'What does "the old part look apologetic" suggest about progress and the erasure of the past?',
            'Why does the writer list "someone else\'s name", "someone else\'s curtains", "a bicycle" separately? What is the effect of this accumulation?',
            'What does she mean by "say goodbye to something she hadn\'t known she needed to say goodbye to"?',
            'What does this story suggest about the relationship between place and identity?',
          ],
          sentenceStructure: {
            subjects: ['She', 'The town', 'The bakery', 'The house', 'Something'],
            verbs: ['returned', 'changed', 'recognised', 'walked', 'understood'],
            lines: 5,
          },
          writing: {
            prompt: 'Write about returning to a place — or a person, or a version of yourself — and finding that things have changed in ways you didn\'t expect. What did you feel? What did you have to let go of?',
            support: {
              wordBank: ['returned', 'changed', 'recognised', 'different', 'smaller', 'understood', 'expected', 'goodbye', 'left', 'before'],
              sentenceStarters: [
                'I had imagined it exactly as it was, but ...',
                'What surprised me most wasn\'t the things that had changed — it was ...',
                'I realised then that I hadn\'t come back to find ..., I had come back to ...',
                'There is a kind of grief for ...',
                'The hardest part of returning is ...',
              ],
            },
          },
        },
        {
          reading: {
            title: 'The Waiting List',
            passage:
              "She had been on the waiting list for eighteen months when the letter arrived. It was in a standard envelope — the kind that could have been anything. She recognised the return address before she could stop herself from hoping. She sat down with it unopened for four minutes. She had promised herself she wouldn't do this: the sitting, the drawing it out, the ceremony of waiting. But she did it anyway. When she finally opened it, the words were clear. She read them three times. Then she folded the letter back along its creases, replaced it in the envelope, and put it in the drawer. She did not tell anyone for three days. Not because the news was bad. Because it was hers.",
          },
          questions: [
            'What does "she recognised the return address before she could stop herself from hoping" reveal about the psychology of waiting?',
            'Why does she wait four minutes before opening the letter? What does the ritual of waiting suggest?',
            'What does the phrase "the ceremony of waiting" mean, and why might someone engage in something they promised they wouldn\'t?',
            'What does her decision not to tell anyone for three days — "because it was hers" — suggest about privacy and ownership of significant moments?',
            'How does the writer use the physical act of folding and replacing the letter to convey her emotional state?',
          ],
          sentenceStructure: {
            subjects: ['She', 'The letter', 'The news', 'The envelope', 'The waiting'],
            verbs: ['waited', 'opened', 'read', 'folded', 'held'],
            lines: 5,
          },
          writing: {
            prompt: 'Write about a moment of significant news — good or bad — and how you held it privately before sharing it. What made it yours, before it became anyone else\'s?',
            support: {
              wordBank: ['waited', 'opened', 'held', 'private', 'ceremony', 'news', 'read', 'before', 'knowing', 'moment', 'mine', 'kept'],
              sentenceStarters: [
                'Before I told anyone, I needed to ...',
                'There is a particular feeling in the moment just before you ...',
                'I read it more than once because ...',
                'Keeping it to myself for those first hours meant ...',
                'Some news changes everything, but first it just ...',
              ],
            },
          },
        },
      ],

      // ────────────────────────────────────────────────────────
      //  CODY — High level (similar to Jocasta)
      //  Sophisticated literary analysis. Sentence starters.
      // ────────────────────────────────────────────────────────
      Cody: [
        {
          reading: {
            title: 'The Verdict',
            passage:
              "The jury returned after four hours. In the gallery, two families sat on opposite sides of the aisle. The woman in the second row had not looked at the man in the dock since the trial began. Her sister had told her she didn't have to come. She had come anyway. When the foreman stood, there was the kind of silence that has weight. She heard the word. She felt the wrong thing — not relief, not grief, but something she had no name for yet. Afterward, in the car park, the defence barrister walked past her without looking. She drove home a different way and could not, later, explain why.",
          },
          questions: [
            'What does "the kind of silence that has weight" suggest about the atmosphere in the courtroom?',
            'Why does the writer say she felt "the wrong thing"? What does this tell us about the complexity of justice?',
            'What is the significance of the detail that her sister told her she didn\'t have to come, but she came anyway?',
            'Why does the barrister walk past "without looking"? What might this gesture mean?',
            'What does driving home "a different way" and being unable to explain why suggest about her state of mind?',
          ],
          sentenceStructure: {
            subjects: ['She', 'The jury', 'The barrister', 'The foreman', 'The silence'],
            verbs: ['returned', 'heard', 'felt', 'drove', 'waited'],
            lines: 5,
          },
          writing: {
            prompt: 'Write about a moment when you expected to feel one thing, but felt something entirely different. What did that gap between expectation and reality reveal?',
            support: {
              wordBank: ['expected', 'instead', 'felt', 'silence', 'wrong', 'name', 'weight', 'different', 'walked', 'understood', 'later', 'came'],
              sentenceStarters: [
                'I had told myself I would feel ..., but when it came to it ...',
                'There is no word for the feeling when ...',
                'The strange part wasn\'t the news itself — it was ...',
                'I drove a different way home without ...',
                'Some emotions don\'t have names yet, like ...',
              ],
            },
          },
        },
        {
          reading: {
            title: 'The Empty House',
            passage:
              "He went back to the house once, about a year after. He told himself it was practical — there might be something he had left behind. There wasn't. The rooms were exactly as they had been, but emptied. The spaces where things had been were somehow more present than the things themselves. He stood in the kitchen. The light came in the same way it always had at this hour. He remembered that light. He had stood in it ten thousand times without ever noticing it. He understood then what he had actually come back for — not to collect anything, but to prove that he could stand in it and be all right. He was mostly all right.",
          },
          questions: [
            'Why does he tell himself the visit is "practical"? What does this suggest about how he is managing his emotions?',
            'What does "the spaces where things had been were somehow more present than the things themselves" mean? How is this possible?',
            'What is significant about him noticing the light for the first time?',
            'What does "he understood then what he had actually come back for" suggest about the gap between stated reasons and real reasons?',
            'What is the effect of the final sentence — "He was mostly all right"? Why "mostly"?',
          ],
          sentenceStructure: {
            subjects: ['He', 'The house', 'The rooms', 'The light', 'The spaces'],
            verbs: ['returned', 'stood', 'noticed', 'understood', 'remembered'],
            lines: 5,
          },
          writing: {
            prompt: 'Write about returning to a place — physical or emotional — and noticing something for the first time that was always there. What had changed: the place, or you?',
            support: {
              wordBank: ['returned', 'empty', 'noticed', 'light', 'stood', 'understood', 'always', 'mostly', 'spaces', 'prove', 'back', 'practical'],
              sentenceStarters: [
                'I told myself I was going back for ..., but really ...',
                'It was the same as before, except ...',
                'I had never noticed ... until everything else was gone.',
                'There is something about an empty room that ...',
                'The question wasn\'t whether the place had changed — it was ...',
              ],
            },
          },
        },
        {
          reading: {
            title: 'The Draft',
            passage:
              "She had been writing the same letter for six months. Not the same words — the drafts were completely different — but the same letter. She had three documents on her laptop, each titled with a date. The earliest was the most honest. The most recent was the most polished. The most honest one was also the one she would never send. This was the problem: everything that made a thing true also made it unsendable. The version she eventually sent said half of what she meant, in language that left room for the other person to hear something softer. She did not know whether this was cowardice or kindness. She suspected it was both.",
          },
          questions: [
            'What does "the same letter" mean if the words were completely different? How is this possible?',
            'What does the contrast between "most honest" and "most polished" suggest about the relationship between truth and communication?',
            'What does "everything that made a thing true also made it unsendable" reveal about the difficulty of expressing genuine feeling?',
            'What does "left room for the other person to hear something softer" suggest about how we manage others\' feelings at the cost of our own honesty?',
            'Why does she conclude it might be "both" cowardice and kindness? Can the same action be both at once?',
          ],
          sentenceStructure: {
            subjects: ['She', 'The letter', 'The draft', 'The words', 'The truth'],
            verbs: ['wrote', 'sent', 'deleted', 'kept', 'decided'],
            lines: 5,
          },
          writing: {
            prompt: 'Write about the gap between what you wanted to say and what you actually said. What made it so difficult to be fully honest? What did you choose instead, and why?',
            support: {
              wordBank: ['honest', 'draft', 'polished', 'sent', 'true', 'softer', 'cowardice', 'kindness', 'meant', 'chose', 'words', 'version'],
              sentenceStarters: [
                'What I wanted to say was ..., but what I said was ...',
                'I had written it a hundred ways before I ...',
                'The honest version was the one I ...',
                'There is a difference between being unkind and being ...',
                'In the end, what I sent was ..., because ...',
              ],
            },
          },
        },
      ],
    },
  },
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
          sentenceStructure: {
            subjects: ['Rex', 'I', 'We', 'Mum', 'The cat'],
            verbs: ['runs', 'eats', 'jumps', 'wags', 'plays'],
          },
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
          sentenceStructure: {
            subjects: ['I', 'Dad', 'The ducks', 'We', 'The boy'],
            verbs: ['slides', 'pushes', 'swims', 'feeds', 'runs'],
          },
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
          sentenceStructure: {
            subjects: ['I', 'My teacher', 'We', 'My friend', 'The students'],
            verbs: ['reads', 'writes', 'draws', 'listens', 'sits'],
          },
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
          sentenceStructure: {
            subjects: ['My family', 'We', 'A man', 'Mum', 'The flowers'],
            verbs: ['went', 'bought', 'carried', 'sold', 'helped'],
            translations: { 'My family': '我的家人', 'We': '我们', 'A man': '一个男人', 'Mum': '妈妈', 'The flowers': '花', 'went': '去了', 'bought': '买了', 'carried': '提', 'sold': '卖', 'helped': '帮了' },
          },
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
          sentenceStructure: {
            subjects: ['I', 'Mum', 'My cousins', 'Dad', 'We'],
            verbs: ['turned', 'made', 'came', 'played', 'helped'],
            translations: { 'I': '我', 'Mum': '妈妈', 'My cousins': '我的表弟表妹', 'Dad': '爸爸', 'We': '我们', 'turned': '变成', 'made': '做了', 'came': '来了', 'played': '玩', 'helped': '帮了' },
          },
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
          sentenceStructure: {
            subjects: ['Our class', 'We', 'The teacher', 'The fish', 'I'],
            verbs: ['walked', 'saw', 'told', 'felt', 'swam'],
            translations: { 'Our class': '我们班', 'We': '我们', 'The teacher': '老师', 'The fish': '鱼', 'I': '我', 'walked': '走了', 'saw': '看见', 'told': '告诉', 'felt': '感觉', 'swam': '游' },
          },
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
          sentenceStructure: {
            subjects: ['Linh', 'I', 'We', 'The family', 'She'],
            verbs: ['moved', 'played', 'laughed', 'asked', 'kicked'],
            translations: { 'Linh': 'Linh', 'I': 'Tôi', 'We': 'Chúng tôi', 'The family': 'Gia đình', 'She': 'Cô ấy', 'moved': 'chuyển đến', 'played': 'chơi', 'laughed': 'cười', 'asked': 'hỏi', 'kicked': 'đá' },
          },
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
          sentenceStructure: {
            subjects: ['I', 'My friend Maya', 'We', 'The teacher', 'The class'],
            verbs: ['ran', 'won', 'played', 'felt', 'cheered'],
            translations: { 'I': 'Tôi', 'My friend Maya': 'Bạn tôi Maya', 'We': 'Chúng tôi', 'The teacher': 'Giáo viên', 'The class': 'Cả lớp', 'ran': 'chạy', 'won': 'thắng', 'played': 'chơi', 'felt': 'cảm thấy', 'cheered': 'cổ vũ' },
          },
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
          sentenceStructure: {
            subjects: ['My sister', 'My brother', 'Dad', 'Mum', 'I'],
            verbs: ['washes', 'cooks', 'folds', 'helps', 'cleaned'],
            translations: { 'My sister': 'Chị/Em gái', 'My brother': 'Anh/Em trai', 'Dad': 'Bố', 'Mum': 'Mẹ', 'I': 'Tôi', 'washes': 'rửa', 'cooks': 'nấu ăn', 'folds': 'gấp', 'helps': 'giúp đỡ', 'cleaned': 'dọn dẹp' },
          },
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
          sentenceStructure: {
            subjects: ['We', 'The mixture', 'Our teacher', 'The cup', 'I'],
            verbs: ['mixed', 'fizzed', 'wrote', 'told', 'observed'],
          },
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
          sentenceStructure: {
            subjects: ['Biscuit', 'We', 'A woman', 'The neighbour', 'I'],
            verbs: ['ran', 'looked', 'messaged', 'drove', 'called'],
          },
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
          sentenceStructure: {
            subjects: ['James', 'I', 'He', 'We', 'The class'],
            verbs: ['sat', 'asked', 'played', 'joined', 'smiled'],
          },
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
          sentenceStructure: {
            subjects: ['The old man', 'The train', 'He', 'The platform', 'The newspaper'],
            verbs: ['waited', 'arrived', 'stood', 'opened', 'checked'],
          },
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
          sentenceStructure: {
            subjects: ['Someone', 'The students', 'The principal', 'The groundskeeper', 'The tree'],
            verbs: ['wrote', 'sat', 'phoned', 'arrived', 'called'],
          },
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
          sentenceStructure: {
            subjects: ['Theo', 'His father', 'They', 'The Milky Way', 'The sky'],
            verbs: ['looked', 'woke', 'stood', 'wondered', 'drove'],
          },
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
          sentenceStructure: {
            subjects: ['The substitute', 'Half the class', 'Three students', 'Nobody', 'The lesson'],
            verbs: ['arrived', 'laughed', 'answered', 'asked', 'crouched'],
          },
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
          sentenceStructure: {
            subjects: ['Luka', 'His dad', 'He', 'The winner', 'The team'],
            verbs: ['practised', 'stood', 'smiled', 'returned', 'drove'],
          },
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
          sentenceStructure: {
            subjects: ['Amara', 'Three students', 'One boy', 'The teacher', 'The class'],
            verbs: ['rolled', 'offered', 'asked', 'noticed', 'moved'],
          },
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
          sentenceStructure: {
            subjects: ['Nina', 'Her mother', 'The letter', 'The drawer', 'The house'],
            verbs: ['opened', 'held', 'wondered', 'explained', 'thought'],
            lines: 5,
          },
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
          sentenceStructure: {
            subjects: ['The storm', 'The dog', 'The child', 'The family', 'The thunder'],
            verbs: ['built', 'hid', 'pretended', 'came', 'arrived'],
            lines: 5,
          },
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
          sentenceStructure: {
            subjects: ['The journalist', 'She', 'The survivors', 'The notebook', 'The story'],
            verbs: ['interviewed', 'listened', 'filled', 'closed', 'wrote'],
            lines: 5,
          },
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

      // ────────────────────────────────────────────────────────
      //  CODY — High level (similar to Jocasta)
      //  Sophisticated literary analysis. Sentence starters.
      // ────────────────────────────────────────────────────────
      Cody: [
        {
          reading: {
            title: 'The Swimmer',
            passage:
              "She had been training for this race for two years. Every morning at five, before the sky had lightened, she was in the pool. Her coach said she was the most technically precise swimmer he had ever worked with. What he did not say — and what she suspected — was that precision alone would not be enough today. The girl in lane four had something she didn't have a name for yet. The starter's pistol fired. For the first fifty metres, she was ahead. Then, in the turn, she felt it: the other swimmer was not trying to catch her. She was simply running her own race. When they touched the wall, it was over in an instant. She looked at the scoreboard. Second. She sat in the water for a long time before she got out.",
          },
          questions: [
            'What does "precision alone would not be enough today" suggest about the limitations of technical skill?',
            'What does "the other swimmer was not trying to catch her — she was simply running her own race" reveal about the difference between the two competitors?',
            'Why does the writer describe what the other swimmer had as "something she didn\'t have a name for yet"?',
            'What does sitting in the water "for a long time before she got out" suggest about her emotional state?',
            'What idea is this story exploring about competition, identity, and what it means to lose?',
          ],
          sentenceStructure: {
            subjects: ['She', 'The coach', 'The swimmer', 'Her rival', 'The race'],
            verbs: ['trained', 'watched', 'touched', 'turned', 'waited'],
            lines: 5,
          },
          writing: {
            prompt: 'Write about a moment when you worked hard for something but it didn\'t turn out as you hoped. What did you discover about yourself in that moment?',
            support: {
              wordBank: ['effort', 'second', 'expected', 'silent', 'trained', 'discovered', 'enough', 'loss', 'learned', 'question'],
              sentenceStarters: [
                'I had done everything right, and yet ...',
                'The hardest part wasn\'t the result — it was ...',
                'For a long time afterward, I kept thinking about ...',
                'What I didn\'t understand then was ...',
                'Losing taught me something that winning never could: ...',
              ],
            },
          },
        },
        {
          reading: {
            title: 'The Last Lesson',
            passage:
              "It was only after Mrs Hargreaves retired that the students realised they hadn't been learning history — they had been learning how to think. Nobody had told them that at the time. She had never once said 'here is how to construct an argument.' She had asked questions. She had waited. She had a way of sitting with a silence that made you feel the question wasn't finished yet. On her last day, she handed back a set of essays unmarked. 'I decided not to mark them,' she said. 'I don't want the last thing I give you to be a grade.' She walked out at 3:05. The essays sat on the desks. Nobody moved for a while.",
          },
          questions: [
            'What is the difference between "learning history" and "learning how to think"? Why does this distinction matter?',
            'What does "a way of sitting with a silence that made you feel the question wasn\'t finished yet" reveal about her teaching?',
            'Why do you think she chose not to mark the final essays?',
            'What does "Nobody moved for a while" suggest about the students\' response to her leaving?',
            'What does this story suggest about what education is — or should be — for?',
          ],
          sentenceStructure: {
            subjects: ['Mrs Hargreaves', 'The students', 'She', 'The class', 'Nobody'],
            verbs: ['retired', 'realised', 'asked', 'waited', 'handed'],
            lines: 5,
          },
          writing: {
            prompt: 'Write about a teacher, coach, or adult who shaped the way you think — perhaps without you realising it at the time. What did they give you that couldn\'t be graded?',
            support: {
              wordBank: ['taught', 'question', 'silence', 'understand', 'realised', 'changed', 'mattered', 'later', 'without', 'noticed'],
              sentenceStarters: [
                'I didn\'t understand it until much later, but ...',
                'She never said it directly — she would just ...',
                'Looking back, what I remember most isn\'t ..., it\'s ...',
                'The lesson wasn\'t in what she taught — it was in how ...',
                'Some things you can\'t be graded on, like ...',
              ],
            },
          },
        },
        {
          reading: {
            title: 'The Sealed Room',
            passage:
              "They had been pulling apart the old house for three weeks when they found it — a room behind a wall, the brickwork clearly added later. Inside: wallpaper with small blue boats, a wooden toy box, a window that had been bricked over from the outside. Nothing had been touched, or perhaps nothing had been able to be touched. The owner — an elderly woman who had bought the house in 1962 — was called in. She stood in the doorway for a long time. Then she said, quietly: 'I didn't know this was here.' It was impossible to know if she was telling the truth. Some rooms are sealed not because of what happened in them, but because of what was left unfinished.",
          },
          questions: [
            'What details in the room suggest that something was left unfinished?',
            'Why does the writer make it "impossible to know" whether the woman is telling the truth? What does this ambiguity add to the story?',
            'What does "the brickwork clearly added later" imply about someone\'s intentions?',
            'How does the final line — "sealed not because of what happened in them, but because of what was left unfinished" — work as a conclusion?',
            'What might the sealed room be a metaphor for? What kinds of things do people "seal off" in their lives?',
          ],
          sentenceStructure: {
            subjects: ['The workers', 'The owner', 'She', 'The room', 'The window'],
            verbs: ['found', 'stood', 'entered', 'sealed', 'opened'],
            lines: 5,
          },
          writing: {
            prompt: 'Write about something that was left unfinished — a conversation, a place, a relationship, a plan. What does it feel like to encounter the unfinished?',
            support: {
              wordBank: ['unfinished', 'sealed', 'left', 'found', 'silent', 'behind', 'remained', 'closed', 'forgotten', 'returned', 'question'],
              sentenceStarters: [
                'There are things that get left ...',
                'I never knew how to finish ..., so I ...',
                'The hardest part of leaving something unfinished is ...',
                'When I came back to it years later, it felt ...',
                'Some things are not meant to be finished — they are meant to be ...',
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
