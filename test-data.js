const IMG = "assets/test7-images/";
const TOTAL_POINTS = 60;

const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1 });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image, points: 1 });
const paired = (id, prompt, parts, image = "") => ({ id, type: "paired", prompt, points: parts.length, parts, image });

const sections = [
  { key: "A", label: "A", title: "Listen and write the letter.", note: "Listen carefully and choose a, b, or c.", points: 4, audio: "assets/audio-a.mp3", questions: [
    choice("A1", "1.", ["a. the Web", "b. social network", "c. newsreels"], "a. the Web", "The recording describes the Web, so the correct letter is a."),
    choice("A2", "2.", ["a. magazine", "b. journalist", "c. publisher"], "c. publisher", "The recording describes a publisher, so the correct letter is c."),
    choice("A3", "3.", ["a. blog", "b. mass media", "c. newspaper"], "b. mass media", "The recording describes mass media, so the correct letter is b."),
    choice("A4", "4.", ["a. social network", "b. printing press", "c. radio station"], "a. social network", "The recording describes a social network, so the correct letter is a.")
  ]},
  { key: "B", label: "B", title: "Unscramble the words.", note: "Use every letter to make one Unit 13 word.", points: 4, questions: [
    input("B1", "1. s p r n a w e p e", ["newspaper"], "The letters form newspaper, a printed publication containing news and articles."),
    input("B2", "2. d w n e l k o g e", ["knowledge"], "The letters form knowledge, meaning information and understanding gained through learning or experience."),
    input("B3", "3. t g d a i e v i s n r", ["advertising"], "The letters form advertising, the activity of promoting products or services."),
    input("B4", "4. s r o b a t a d c", ["broadcast"], "The letters form broadcast, a radio or television program or the act of transmitting it.")
  ]},
  { key: "C", label: "C", title: "Complete the sentences with the correct words. Then match them to the pictures.", note: "Write the missing word, then choose picture a, b, c, or d. The labels are below the clean original illustrations.", points: 8, sectionImage: IMG + "c-picture-strip.png", questions: [
    paired("C1", "1. I give a lot of information about my family on my ___.", [
      { key: "word", label: "Missing word", type: "input", answers: ["blog"], explanation: "A blog is a regularly updated website where someone shares information or opinions." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["d"], explanation: "Picture d shows a personal blog page on a computer." }
    ]),
    paired("C2", "2. I buy my favourite ___ at the supermarket every month.", [
      { key: "word", label: "Missing word", type: "input", answers: ["magazine"], explanation: "A magazine is a periodical publication with articles and pictures." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["c"], explanation: "Picture c shows magazines." }
    ]),
    paired("C3", "3. I read books, watch movies, and play games on my ___.", [
      { key: "word", label: "Missing word", type: "input", answers: ["smartphone"], explanation: "A smartphone can run apps for reading, watching videos, and playing games." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["b"], explanation: "Picture b shows a smartphone." }
    ]),
    paired("C4", "4. I want to be a ___ and write about what is happening in the world.", [
      { key: "word", label: "Missing word", type: "input", answers: ["journalist"], explanation: "A journalist researches and reports news for the public." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["a"], explanation: "Picture a shows a journalist holding a microphone and notes." }
    ])
  ]},
  { key: "D", label: "D", title: "Circle the correct words.", note: "Choose the form that expresses necessity, lack of necessity, or prohibition.", points: 4, questions: [
    choice("D1", "1. Hurry! We ___ be at the airport in an hour.", ["have to", "mustn't"], "have to", "The deadline creates a necessity, so use have to."),
    choice("D2", "2. Shh! Be quiet! You ___ wake the baby.", ["don't have to", "mustn't"], "mustn't", "Mustn't expresses prohibition: waking the baby is not allowed."),
    choice("D3", "3. You ___ remember to call your mother.", ["must", "don't have to"], "must", "Must expresses a strong obligation to remember."),
    choice("D4", "4. I ___ study today because the test was cancelled.", ["don't have to", "mustn't"], "don't have to", "The cancelled test removes the necessity to study; it does not prohibit studying.")
  ]},
  { key: "E", label: "E", title: "Complete the sentences. Write have to or don't have to.", note: "Use have to for necessity and don't have to when something is not necessary.", points: 4, questions: [
    input("E1", "1. I ___ go to school tomorrow. It's Sunday.", ["don't have to", "do not have to", "dont have to"], "Sunday removes the necessity to go to school, so use don't have to."),
    input("E2", "2. We don't have any milk. I ___ go to the supermarket.", ["have to"], "There is no milk, so going to the supermarket is necessary."),
    input("E3", "3. I broke my smartphone. I ___ get a new one.", ["have to"], "The broken phone creates a practical necessity, so use have to."),
    input("E4", "4. I have money for lunch. You ___ give me any more.", ["don't have to", "do not have to", "dont have to"], "Because the speaker already has money, giving more is unnecessary.")
  ]},
  { key: "F", label: "F", title: "Write the words in the correct order. Then match them to the pictures.", note: "Write the complete sentence, then choose picture a, b, or c.", points: 6, sectionImage: IMG + "f-picture-strip.png", questions: [
    paired("F1", "1. mustn't / loudly / here / talk / You", [
      { key: "sentence", label: "Sentence", type: "input", answers: ["You mustn't talk loudly here", "You must not talk loudly here"], explanation: "Use subject + mustn't + base verb + adverb + place." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c"], answers: ["c"], explanation: "Picture c shows a library, where people must not talk loudly." }
    ]),
    paired("F2", "2. computer / must / a / buy / new / I", [
      { key: "sentence", label: "Sentence", type: "input", answers: ["I must buy a new computer"], explanation: "Use subject + must + base verb + object." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c"], answers: ["b"], explanation: "Picture b shows a damaged computer that needs replacing." }
    ]),
    paired("F3", "3. wash / I / don't / the / to / dishes / have", [
      { key: "sentence", label: "Sentence", type: "input", answers: ["I don't have to wash the dishes", "I do not have to wash the dishes"], explanation: "Use subject + don't have to + base verb + object." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c"], answers: ["a"], explanation: "Picture a shows clean dishes, so washing them is unnecessary." }
    ])
  ]},
  { key: "G", label: "G", title: "Listen and circle the correct answer.", note: "Listen to each statement and choose True or False.", points: 4, audio: "assets/audio-g.mp3", questions: [
    choice("G1", "1.", ["T", "F"], "F", "Statement 1 is false according to the recording."),
    choice("G2", "2.", ["T", "F"], "T", "Statement 2 is true according to the recording."),
    choice("G3", "3.", ["T", "F"], "T", "Statement 3 is true according to the recording."),
    choice("G4", "4.", ["T", "F"], "F", "Statement 4 is false according to the recording.")
  ]},
  { key: "H", label: "H", title: "Look and complete the sentences.", note: "Study each clean original illustration and write the media word that completes the sentence.", points: 4, questions: [
    input("H1", "1. I often ___ the library for new and interesting books.", ["search"], "Search means to look carefully for something.", IMG + "h1.png"),
    input("H2", "2. I watched the TV ___ with my favorite singer.", ["interview"], "An interview is a conversation in which someone asks another person questions.", IMG + "h2.png"),
    input("H3", "3. The police will ___ the robbery at the museum.", ["investigate"], "Investigate means to examine an event carefully in order to discover the facts.", IMG + "h3.png"),
    input("H4", "4. The newspaper ___ asked the president many questions.", ["reporter"], "A reporter gathers information and presents news to the public.", IMG + "h4.png")
  ]},
  { key: "I", label: "I", title: "Unscramble and match.", note: "Unscramble each word, then choose its correct definition.", points: 8, questions: [
    paired("I1", "1. k i m s a t e s", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["mistakes"], explanation: "The letters form mistakes." },
      { key: "match", label: "Definition", type: "choice", options: ["a. to choose between one thing and another thing", "b. to give something as a gift to help people or a company", "c. very bad or awful", "d. these are not correct"], answers: ["d. these are not correct"], explanation: "Mistakes are things that are not correct, so the word matches d." }
    ]),
    paired("I2", "2. c i d e d e", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["decide"], explanation: "The letters form decide." },
      { key: "match", label: "Definition", type: "choice", options: ["a. to choose between one thing and another thing", "b. to give something as a gift to help people or a company", "c. very bad or awful", "d. these are not correct"], answers: ["a. to choose between one thing and another thing"], explanation: "Decide means to make a choice, so it matches a." }
    ]),
    paired("I3", "3. e r t b i r e l", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["terrible"], explanation: "The letters form terrible." },
      { key: "match", label: "Definition", type: "choice", options: ["a. to choose between one thing and another thing", "b. to give something as a gift to help people or a company", "c. very bad or awful", "d. these are not correct"], answers: ["c. very bad or awful"], explanation: "Terrible means very bad or awful, so it matches c." }
    ]),
    paired("I4", "4. n d t e o a d", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["donated"], explanation: "The letters form donated." },
      { key: "match", label: "Definition", type: "choice", options: ["a. to choose between one thing and another thing", "b. to give something as a gift to help people or a company", "c. very bad or awful", "d. these are not correct"], answers: ["b. to give something as a gift to help people or a company"], explanation: "Donated means gave something to help a person or organization, so it matches b." }
    ])
  ]},
  { key: "J", label: "J", title: "Write the words in the correct order to make sentences.", note: "Use the present perfect and correct punctuation.", points: 4, questions: [
    input("J1", "1. headline / written / the / editor / hasn't / The", ["The editor hasn't written the headline", "The editor has not written the headline"], "Use subject + hasn't + past participle + object."),
    input("J2", "2. have / I / test / finished / the", ["I have finished the test"], "Use subject + have + past participle + object."),
    input("J3", "3. the / We / problem / discussed / have", ["We have discussed the problem"], "Use subject + have + past participle + object."),
    input("J4", "4. store / hasn't / She / the / gone / to", ["She hasn't gone to the store", "She has not gone to the store"], "Gone is the past participle of go, used after hasn't.")
  ]},
  { key: "K", label: "K", title: "Complete the sentences. Write have, has, haven't, or hasn't.", note: "Choose the correct present-perfect auxiliary for the subject and meaning.", points: 4, questions: [
    input("K1", "1. I ___ read the article about the old house. Is it interesting?", ["haven't", "have not", "havent"], "The question Is it interesting? shows that the speaker has not read the article, so use haven't."),
    input("K2", "2. ___ she told you about the party?", ["has"], "She is third-person singular, so a present-perfect question begins with Has."),
    input("K3", "3. We ___ been to that restaurant. It's good!", ["have", "'ve", "ve"], "We takes have, and the positive comment suggests prior experience."),
    input("K4", "4. The hero from the accident ___ written a book. He'll do it next year.", ["hasn't", "has not", "hasnt"], "He will do it next year, so the book has not been written yet.")
  ]},
  { key: "L", label: "L", title: "Circle the correct main verb. Then write the correct form of have.", note: "Choose the past participle and add have or has to make the present perfect.", points: 6, questions: [
    paired("L1", "1. She ___ ___ dinner.", [
      { key: "auxiliary", label: "Form of have", type: "input", answers: ["has", "'s", "s"], explanation: "She is third-person singular, so use has." },
      { key: "verb", label: "Main verb", type: "choice", options: ["ate", "eaten"], answers: ["eaten"], explanation: "The present perfect requires the past participle eaten, not the simple past ate." }
    ], IMG + "l1.png"),
    paired("L2", "2. They ___ ___ the movie.", [
      { key: "auxiliary", label: "Form of have", type: "input", answers: ["have", "'ve", "ve"], explanation: "They takes have." },
      { key: "verb", label: "Main verb", type: "choice", options: ["seen", "saw"], answers: ["seen"], explanation: "The present perfect requires the past participle seen, not the simple past saw." }
    ], IMG + "l2.png"),
    paired("L3", "3. I ___ ___ an article before.", [
      { key: "auxiliary", label: "Form of have", type: "input", answers: ["have", "'ve", "ve"], explanation: "I takes have." },
      { key: "verb", label: "Main verb", type: "choice", options: ["wrote", "written"], answers: ["written"], explanation: "The present perfect requires the past participle written, not the simple past wrote." }
    ], IMG + "l3.png")
  ]}
];
