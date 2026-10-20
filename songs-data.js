/**
 * SING ENGLISH HUB - DATASET
 * Bộ dữ liệu bài hát và bài học ngữ pháp dành riêng cho Mẹ học hát tiếng Anh
 * Được biên soạn song ngữ Anh - Việt với phiên âm hỗ trợ giọng hát và giải thích ngữ pháp dễ hiểu nhất.
 */

const SONGS_DATA = [
  {
    id: "top-of-the-world",
    title: "Top of the World",
    artist: "The Carpenters",
    year: 1972,
    difficulty: "Dễ (Mới bắt đầu)",
    level: "easy",
    tempo: "Vui tươi, rộn ràng (Nhịp vừa)",
    youtubeId: "3hyPKXXOTio",
    theme: "Tình yêu, niềm vui sống, ngập tràn hạnh phúc",
    description: "Bài hát kinh điển của ban nhạc The Carpenters với giọng hát trong trẻo của Karen Carpenter. Bài hát có ca từ cực kỳ rõ chữ, nhịp điệu tươi sáng, rất thích hợp để Mẹ luyện mở khẩu hình và phát âm các nguyên âm tròn vành.",
    grammarHighlights: [
      {
        title: "Thì Hiện tại Đơn (Present Simple) diễn tả cảm xúc",
        formula: "S + V(s/es) + O / S + is/am/are + Adj",
        explanation: "Bài hát dùng thì hiện tại đơn rất nhiều để thể hiện cảm giác hạnh phúc ngay lúc này: 'There is only one wish on my mind' (Chỉ có một ước nguyện trong tâm trí em), 'I'm on the top of the world' (Em đang ở đỉnh thế giới - nghĩa bóng là đang ngập tràn hạnh phúc).",
        singingExample: "I'm on the top of the world looking down on creation."
      },
      {
        title: "Cấu trúc 'Since' (Kể từ khi...)",
        formula: "Since + Mệnh đề quá khứ (S + V2/ed)",
        explanation: "Từ 'since' vừa có nghĩa là 'từ khi' vừa chỉ lý do. Khi hát, từ này thường nối liền cảm xúc với hành động phía sau.",
        singingExample: "Since you've been around (Kể từ khi có anh ở bên)."
      },
      {
        title: "Tính từ so sánh nhất với 'The most'",
        formula: "The most + tính từ dài",
        explanation: "Dùng để khen ngợi tuyệt đối. Trong bài: 'The most wonderful thing' = Điều tuyệt vời nhất trần đời.",
        singingExample: "Your love's put me at the top of the world."
      }
    ],
    vocalTips: [
      "Khẩu hình miệng cười: Bài hát này vui, Mẹ hãy vừa hát vừa hơi mỉm cười nhẹ. Điều này tự nhiên giúp các âm /iː/ (như trong 'see', 'pleased') sáng và thanh thoát hơn.",
      "Nối âm (Linking): 'put a smile' hát liền thành /pʊ-tə-smai-ồ/, không ngắt quãng giữa chữ 'put' và 'a'.",
      "Âm đuôi nhẹ nhàng: Âm /d/ trong 'world' và /nd/ trong 'around' chỉ cần chạm nhẹ đầu lưỡi lên vòm họng, không cần giật mạnh làm đứt mạch nhạc."
    ],
    vocab: [
      { word: "Creation", type: "noun", ipa: "/kriˈeɪ.ʃən/", vi: "Vạn vật, tạo hóa, muôn loài", tip: "Nhấn âm 2: cri-EI-shần" },
      { word: "Pleased", type: "adj", ipa: "/pliːzd/", vi: "Hài lòng, hoan hỉ", tip: "Kéo dài âm 'ee' và kết thúc nhẹ bằng âm 'z'" },
      { word: "Wish", type: "noun", ipa: "/wɪʃ/", vi: "Ước nguyện, điều mong ước", tip: "Tròn môi, chu nhẹ miệng ở âm đuôi 'sh' (/ʃ/)" },
      { word: "Top of the world", type: "idiom", ipa: "/tɒp əv ðə wɜːld/", vi: "Hạnh phúc tột cùng (như đứng trên đỉnh thế giới)", tip: "Hát nối 'top-pov the world'" }
    ],
    lyrics: [
      {
        en: "Such a feelin's comin' over me",
        phonetic: "Sắt-chờ phi-linh-z ca-minh âu-vơ mi",
        ipa: "/sʌtʃ ə ˈfiːlɪŋz ˈkʌmɪŋ ˈoʊvər miː/",
        vi: "Một cảm xúc dạt dào bỗng ùa về trong em",
        singingTip: "Nối âm: 'Such a' đọc liền thành 'Sắt-chờ'. 'feelin's' lướt nhẹ âm 'z'.",
        grammarNote: "Rút gọn 'feeling is coming' thành 'feelin's comin''. Trong lời hát người bản xứ hay bỏ chữ 'g' cuối để hát mềm hơn."
      },
      {
        en: "There is wonder in most everything I see",
        phonetic: "Đe-ri-z uân-đơ in mâu-st ê-v-ri-thinh ai xi",
        ipa: "/ðɛər ɪz ˈwʌndər ɪn moʊst ˈɛvriˌθɪŋ aɪ siː/",
        vi: "Vạn vật em nhìn thấy dường như đều ngập tràn điều kỳ diệu",
        singingTip: "Nối âm: 'There is' hát nối thành 'Đe-riz'. 'Everything' hát 3 âm tiết nhẹ: 'Év-ri-thing'.",
        grammarNote: "Cấu trúc 'There is + danh từ số ít' = Có một cái gì đó."
      },
      {
        en: "Not a cloud in the sky, got the sun in my eyes",
        phonetic: "No-tờ clao-đ in đờ s-cai, gót đờ săn in mai ai-z",
        ipa: "/nɑːt ə klaʊd ɪn ðə skaɪ, ɡɑːt ðə sʌn ɪn maɪ aɪz/",
        vi: "Không một gợn mây trên bầu trời, ánh nắng ấm áp rạng rỡ trong mắt em",
        singingTip: "'Not a' hát nối thành 'No-tờ' (theo giọng Mỹ nghe như 'Na-đờ'). Giữ nhịp rộn ràng.",
        grammarNote: "Rút gọn trong văn nói: '(There is) Not a cloud... (I have) got the sun...'"
      },
      {
        en: "And I won't be surprised if it's a dream",
        phonetic: "Èn đai uôn-t bi sơ-p-rai-z-đíp ít-sờ đ-rim",
        ipa: "/ænd aɪ woʊnt biː sərˈpraɪzd ɪf ɪts ə driːm/",
        vi: "Và em cũng chẳng hề ngạc nhiên nếu đây chỉ là một giấc mơ",
        singingTip: "Nối 'surprised if it's a' -> 'sơ-prai-z-đíp-ít-sờ'. Chữ 'dream' kéo dài ngân nga.",
        grammarNote: "Câu điều kiện loại 1: 'won't be surprised if...' (Sẽ không ngạc nhiên nếu...)."
      },
      {
        en: "Everything I want the world to be",
        phonetic: "Év-ri-thinh ai uon đờ uơn-đ tu bi",
        ipa: "/ˈɛvriˌθɪŋ aɪ wɑːnt ðə wɜːrld tuː biː/",
        vi: "Mọi điều em từng mong ước cho thế giới này",
        singingTip: "Hạ giọng dịu dàng ở câu này để chuẩn bị vút lên ở điệp khúc.",
        grammarNote: "Cấu trúc 'want someone/something to be...' (muốn ai/cái gì trở nên thế nào)."
      },
      {
        en: "Is now comin' true especially for me",
        phonetic: "Í-z nao ca-minh tru, ét-s-pe-sơ-li pho mi",
        ipa: "/ɪz naʊ ˈkʌmɪŋ truː, əˈspɛʃəli fɔːr miː/",
        vi: "Giờ đây đang dần thành hiện thực, dành riêng cho một mình em",
        singingTip: "Từ 'especially' đọc lướt: ét-spé-shơ-li. Nhấn nhẹ vào vần 2.",
        grammarNote: "'Come true' = Trở thành hiện thực (cụm từ rất quen thuộc)."
      },
      {
        en: "And the reason is clear, it's because you are here",
        phonetic: "Èn đờ ri-zơn ni-z clia, ít-s bi-co-z yu a hia",
        ipa: "/ænd ðə ˈriːzən ɪz klɪər, ɪts bɪˈkɔːz juː ɑːr hɪər/",
        vi: "Và lý do thật rõ ràng: ấy là vì đã có anh ở nơi này",
        singingTip: "Nối 'reason is' -> 'ri-zơn-niz'. Hai từ 'clear' và 'here' vần với nhau, hát tròn vành.",
        grammarNote: "Mệnh đề chỉ lý do: 'It is because + S + V' (Đó là bởi vì...)."
      },
      {
        en: "You're the nearest thing to Heaven that I've seen",
        phonetic: "Yu-ơ đờ nia-rơ-st thinh tu he-vừn đét đai-v sin",
        ipa: "/jʊər ðə ˈnɪərɪst θɪŋ tuː ˈhɛvən ðæt aɪv siːn/",
        vi: "Anh là điều gần gũi với Thiên đường nhất mà em từng thấy",
        singingTip: "'nearest' = nia-rớt-st. Chữ 'Heaven' nhẹ nhàng thở ra.",
        grammarNote: "Thì Hiện tại hoàn thành: 'that I have seen' (mà em từng nhìn thấy trong đời)."
      },
      {
        en: "I'm on the top of the world lookin' down on creation",
        phonetic: "Aim on đờ tóp-pơv đờ uơn-đ lú-kinh đao-n on cri-ei-shần",
        ipa: "/aɪm ɒn ðə tɒp əv ðə wɜːld ˈlʊkɪŋ daʊn ɒn kriˈeɪ.ʃən/",
        vi: "Em đang đứng trên đỉnh cao hạnh phúc ngắm nhìn thế gian tuyệt vời",
        singingTip: "ĐIỆP KHÚC VANG SÁNG: Mẹ hãy lấy hơi sâu từ bụng. Nối 'top of' -> 'tóp-pơv'.",
        grammarNote: "Cụm 'look down on' ở đây mang nghĩa tươi đẹp: đứng trên cao nhìn ngắm muôn loài."
      },
      {
        en: "And the only explanation I can find",
        phonetic: "Èn đi ôn-li ét-s-p-lơ-nei-shần nai cèn phai-n-đ",
        ipa: "/ænd ðiː ˈoʊnli ˌɛkspləˈneɪʃən aɪ kæn faɪnd/",
        vi: "Và lời giải thích duy nhất mà em có thể tìm thấy",
        singingTip: "Lưu ý chữ 'the' đứng trước nguyên âm 'only' đọc là 'đi' (/ðiː/).",
        grammarNote: "Quy tắc mạo từ: 'the' đọc là /ði/ trước các từ bắt đầu bằng nguyên âm U, E, O, A, I."
      },
      {
        en: "Is the love that I've found ever since you've been around",
        phonetic: "Í-z đờ lơ-v đét đai-v phao-n-đ, é-vơ sin-s yu-v bin ơ-rao-n-đ",
        ipa: "/ɪz ðə lʌv ðæt aɪv faʊnd, ˈɛvər sɪns juːv biːn əˈraʊnd/",
        vi: "Chính là tình yêu em tìm thấy từ ngày có anh bên cạnh",
        singingTip: "'found' và 'around' cùng vần /aʊnd/, ngân dài tròn trịa.",
        grammarNote: "Cụm 'ever since' = kể từ lúc đó trở đi. 'you've been around' = có anh kề bên."
      },
      {
        en: "Your love's put me at the top of the world",
        phonetic: "Yo lơ-v-z phút mi ét đờ tóp-pơv đờ uơn-đ",
        ipa: "/jɔːr lʌvz pʊt miː æt ðə tɒp əv ðə wɜːld/",
        vi: "Chính tình yêu của anh đã đưa em lên đỉnh cao của niềm hạnh phúc trọn vẹn!",
        singingTip: "Câu kết tươi vui, nụ cười rạng rỡ khi ngân dài nốt cuối cùng.",
        grammarNote: "'Your love's put' = rút gọn của 'Your love has put' (Hiện tại hoàn thành)."
      }
    ]
  },
  {
    id: "cant-help-falling-in-love",
    title: "Can't Help Falling in Love",
    artist: "Elvis Presley",
    year: 1961,
    difficulty: "Dễ (Rất chậm, tình cảm)",
    level: "easy",
    tempo: "Chậm, êm đềm, ngân nga (Slow 6/8 ballad)",
    youtubeId: "vGJTaP6anOU",
    theme: "Tình yêu say đắm, định mệnh, chân thành",
    description: "Bản tình ca bất hủ của 'Ông hoàng nhạc Rock' Elvis Presley. Tiết tấu bài hát chậm rãi, từng câu từ được nhả chữ khoan thai, ấm áp. Đây là bài hát hoàn hảo nhất để Mẹ tập kỹ thuật ngân dài nguyên âm và luyện lối hát mượt mà (legato).",
    grammarHighlights: [
      {
        title: "Cấu trúc kinh điển: Can't help + V-ing",
        formula: "S + cannot / can't help + V-ing",
        explanation: "Mang nghĩa: 'Không thể kìm lòng được, không thể cưỡng lại được'. Ví dụ: 'I can't help falling in love' = Em/Con không thể ngăn trái tim mình thôi yêu.",
        singingExample: "I can't help falling in love with you."
      },
      {
        title: "Động từ khiếm khuyết 'Shall' dùng để hỏi ý kiến lịch sự",
        formula: "Shall I + V (nguyên mẫu)?",
        explanation: "Cách nói cổ điển, lịch thiệp và tôn trọng: 'Shall I stay?' = Em liệu có nên ở lại bên người?",
        singingExample: "Shall I stay? Would it be a sin?"
      },
      {
        title: "Câu hỏi điều kiện với 'Would it be...?'",
        formula: "Would it be + Noun / Adj + if...?",
        explanation: "Dùng để ướm hỏi một giả định một cách nhẹ nhàng, e ấp.",
        singingExample: "Would it be a sin if I can't help falling in love?"
      }
    ],
    vocalTips: [
      "Hát liền mạch (Legato): Giữ dòng hơi liên tục, không ngắt hơi giữa các từ trong cùng một câu hát.",
      "Kéo dài nguyên âm /eɪ/ và /aɪ/: Trong các từ 'stay' (/steɪ/), 'say' (/seɪ/), 'I' (/aɪ/), hãy giữ nguyên khẩu hình nguyên âm và chỉ khép miệng lại ở khoảnh khắc cuối cùng.",
      "Lấy hơi sâu: Nhịp 6/8 đong đưa như sóng biển vỗ, Mẹ hãy hít thở nhẹ bằng cơ hoành (bụng phình nhẹ) trước mỗi câu."
    ],
    vocab: [
      { word: "Wise men", type: "noun phrase", ipa: "/waɪz mɛn/", vi: "Các bậc hiền triết, người thông thái", tip: "Âm 'z' rung nhẹ ở cổ họng" },
      { word: "Fool", type: "noun", ipa: "/fuːl/", vi: "Kẻ khờ dại, người ngây thơ", tip: "Tròn môi, chu nhẹ âm /uː/" },
      { word: "Rush in", type: "phrasal verb", ipa: "/rʌʃ ɪn/", vi: "Vội vã lao vào, hấp tấp", tip: "Nối âm: 'rơ-shin'" },
      { word: "Sin", type: "noun", ipa: "/sɪn/", vi: "Tội lỗi, điều sai trái", tip: "Âm /ɪ/ ngắn và gọn" }
    ],
    lyrics: [
      {
        en: "Wise men say",
        phonetic: "Ouai-z men sei",
        ipa: "/waɪz mɛn seɪ/",
        vi: "Người đời thông thái thường bảo rằng",
        singingTip: "Hát thật nhẹ, giọng trầm ấm, chậm rãi. Kéo dài chữ 'say'.",
        grammarNote: "Chủ ngữ số nhiều 'men' (số ít là 'man') đi với động từ nguyên mẫu 'say'."
      },
      {
        en: "Only fools rush in",
        phonetic: "Ôn-li phu-l-z rơ-shin",
        ipa: "/ˈoʊnli fuːlz rʌʃ ɪn/",
        vi: "Chỉ có những kẻ dại khờ mới vội vã đắm chìm vào yêu",
        singingTip: "Nối âm: 'rush in' hát thành 'rơ-shin'. Nhả chữ 'fools' mềm mại.",
        grammarNote: "Thành ngữ 'Fools rush in': ám chỉ hành động nông nổi, không toan tính."
      },
      {
        en: "But I can't help falling in love with you",
        phonetic: "Bắt đai can-t he-l-p pho-linh in lơ-v uýt-th yu",
        ipa: "/bʌt aɪ kænt hɛlp ˈfɔːlɪŋ ɪn lʌv wɪð juː/",
        vi: "Thế nhưng con tim em chẳng thể kìm lòng trao trọn tình yêu này cho anh",
        singingTip: "Nối âm: 'falling in' -> 'pho-linh-in'. Từ 'you' ngân dài, mở vòm họng.",
        grammarNote: "Cấu trúc bài học: 'can't help + V-ing' (Không thể cưỡng lại được)."
      },
      {
        en: "Shall I stay?",
        phonetic: "Seo lai s-tei?",
        ipa: "/ʃæl aɪ steɪ/",
        vi: "Liệu em có nên ở lại bên người?",
        singingTip: "Lên giọng nhẹ ở cuối câu như một câu hỏi thầm thì.",
        grammarNote: "'Shall I...?' là lời đề nghị hoặc tự vấn đầy trân trọng."
      },
      {
        en: "Would it be a sin?",
        phonetic: "Uút-đít bi ờ xin?",
        ipa: "/wʊd ɪt biː ə sɪn/",
        vi: "Liệu tình yêu này có phải là một điều lầm lỗi?",
        singingTip: "Nối âm: 'Would it be a' -> 'Uút-đít bi ờ'.",
        grammarNote: "Câu điều kiện dạng ẩn (Would it be...): liệu có phải là..."
      },
      {
        en: "If I can't help falling in love with you",
        phonetic: "Íp phai can-t he-l-p pho-linh in lơ-v uýt-th yu",
        ipa: "/ɪf aɪ kænt hɛlp ˈfɔːlɪŋ ɪn lʌv wɪð juː/",
        vi: "Nếu như em chẳng thể nào ngăn nổi mình yêu anh?",
        singingTip: "Nối 'If I' -> 'Íp-phai'. Hát thiết tha, chậm và đầy cảm xúc.",
        grammarNote: "Mệnh đề điều kiện bắt đầu bằng 'If' (Nếu như)."
      },
      {
        en: "Like a river flows surely to the sea",
        phonetic: "Lai-kờ ri-vơ ph-lâu-z sua-li tu đờ xi",
        ipa: "/laɪk ə ˈrɪvər floʊz ˈʃʊərli tuː ðə siː/",
        vi: "Như dòng sông êm đềm tất yếu sẽ xuôi về với biển khơi",
        singingTip: "Nối 'Like a' -> 'Lai-kờ'. Từ 'river flows' hát sóng sánh như dòng nước.",
        grammarNote: "'Like' ở đây là giới từ có nghĩa là 'Như là, giống như'."
      },
      {
        en: "Darling so it goes, some things are meant to be",
        phonetic: "Đa-linh sô ít gâu-z, săm thinh-z a men tu bi",
        ipa: "/ˈdɑːrlɪŋ soʊ ɪt ɡoʊz, sʌm θɪŋz ɑːr mɛnt tuː biː/",
        vi: "Anh dấu yêu hỡi, duyên phận là thế, có những điều sinh ra đã là định mệnh",
        singingTip: "'so it goes' nối thành 'sô-ít-gôuz'. 'meant to be' hát chắc chắn, dứt khoát.",
        grammarNote: "Cụm thành ngữ 'meant to be' = Được định đoạt từ trước, là ý trời."
      },
      {
        en: "Take my hand, take my whole life too",
        phonetic: "Teik mai hen-đ, teik mai hôu lai-ph tu",
        ipa: "/teɪk maɪ hænd, teɪk maɪ hoʊl laɪf tuː/",
        vi: "Hãy nắm lấy bàn tay em, và nhận lấy trọn vẹn cả cuộc đời em nữa",
        singingTip: "Mở rộng lồng ngực. Âm 'k' trong 'take' bật nhẹ ở cuối chữ.",
        grammarNote: "Câu mệnh lệnh cầu khiến nhẹ nhàng: 'Take...' (Hãy nhận lấy...)."
      },
      {
        en: "For I can't help falling in love with you",
        phonetic: "Pho rai can-t he-l-p pho-linh in lơ-v uýt-th yu",
        ipa: "/fɔːr aɪ kænt hɛlp ˈfɔːlɪŋ ɪn lʌv wɪð juː/",
        vi: "Bởi vì em thực sự chẳng thể nào ngăn nổi trái tim yêu anh!",
        singingTip: "Nối 'For I' -> 'Pho-rai'. Ngân dài nốt 'you' thật ngọt ngào đến hết hơi thở.",
        grammarNote: "'For' ở đầu câu đóng vai trò như liên từ 'Because' (Bởi vì) trong thơ ca kinh điển."
      }
    ]
  },
  {
    id: "yesterday",
    title: "Yesterday",
    artist: "The Beatles",
    year: 1965,
    difficulty: "Vừa phải (Nhiều từ vựng sâu sắc)",
    level: "medium",
    tempo: "Hoài niệm, lắng đọng (Acoustic ballad)",
    youtubeId: "NrgmdOz227I",
    theme: "Hoài niệm, tình yêu đã qua, sự tiếc nuối",
    description: "Tuyệt phẩm bất hủ được viết bởi Paul McCartney. Giai điệu mộc mạc trên tiếng đàn guitar acoustic, lời ca đẹp như một bài thơ. Đây là bài học tuyệt vời nhất để Mẹ làm quen với thì Quá khứ đơn (Past Simple) và đối chiếu với Hiện tại đơn.",
    grammarHighlights: [
      {
        title: "Đối chiếu Thì Quá Khứ Đơn (Past) và Hiện Tại Đơn (Present)",
        formula: "Quá khứ: S + V2/ed / Hiện tại: S + V(s/es)",
        explanation: "Bài hát là bức tranh tương phản giữa hôm qua ('all my troubles seemed so far away') và hôm nay ('now it looks as though they're here to stay').",
        singingExample: "Yesterday, all my troubles seemed so far away. Now it looks as though they're here to stay."
      },
      {
        title: "Cấu trúc giả định 'As though' (Như thể là...)",
        formula: "S + V + as though + Mệnh đề",
        explanation: "Đồng nghĩa với 'as if' (như thể là). Trong bài: 'as though they're here to stay' = như thể nỗi buồn đã đến và ở lại mãi.",
        singingExample: "Now it looks as though they're here to stay."
      },
      {
        title: "Động từ 'Used to' (Đã từng trong quá khứ)",
        formula: "S + used to + V (nguyên mẫu)",
        explanation: "Diễn tả thói quen hoặc trạng thái trong quá khứ nay không còn nữa: 'I'm not half the man I used to be' (Tôi chẳng còn được phân nửa con người tôi ngày trước).",
        singingExample: "I'm not half the man I used to be."
      }
    ],
    vocalTips: [
      "Ngắt chữ dứt khoát ở từ mở đầu: 'Yes-ter-day' hát rõ 3 âm tiết với sự bồi hồi lắng đọng.",
      "Âm đuôi /d/: Từ 'seemed', 'believed' có đuôi /d/, chỉ cần chạm nhẹ lưỡi không nhấn quá nặng.",
      "Thở nhẹ nhàng: Bài hát này cần sự tự sự như đang kể chuyện, Mẹ đừng gồng giọng mà hãy hát thủ thỉ, tâm tình."
    ],
    vocab: [
      { word: "Troubles", type: "noun", ipa: "/ˈtrʌb.əlz/", vi: "Những muộn phiền, rắc rối", tip: "Âm 'tr' bật nhẹ đầu môi: 'trơ-bồu-z'" },
      { word: "Shadow", type: "noun", ipa: "/ˈʃæd.oʊ/", vi: "Bóng râm, bóng đen u tối", tip: "Âm 'sh' mềm mại: 'shé-đâu'" },
      { word: "Suddenly", type: "adv", ipa: "/ˈsʌd.ən.li/", vi: "Bỗng nhiên, bất ngờ", tip: "Nhấn vần 1: 'SẮT-đừn-li'" },
      { word: "Long for", type: "verb", ipa: "/lɒŋ fɔːr/", vi: "Mong mỏi, ngóng trông tha thiết", tip: "Ngân dài âm 'o': 'long-pho'" }
    ],
    lyrics: [
      {
        en: "Yesterday, all my troubles seemed so far away",
        phonetic: "Yét-stơ-đei, ô-l mai trơ-bồu-z xim-đ sô pha ơ-uei",
        ipa: "/ˈjɛstərdeɪ, ɔːl maɪ ˈtrʌbəlz siːmd soʊ fɑːr əˈweɪ/",
        vi: "Ngày hôm qua, mọi muộn phiền dường như còn ở tít nơi xa",
        singingTip: "Nhả chữ 'Yesterday' thật tĩnh lặng, kéo dài chữ 'away' thật êm.",
        grammarNote: "Thì quá khứ đơn: 'seemed' (có vẻ như) là quá khứ của 'seem'."
      },
      {
        en: "Now it looks as though they're here to stay",
        phonetic: "Nao ít lú-k-s ét-z đâu đe hia tu s-tei",
        ipa: "/naʊ ɪt lʊks æz ðoʊ ðɛər hɪər tuː steɪ/",
        vi: "Nhưng giờ đây, dường như chúng đã đến và đóng chặt nơi này",
        singingTip: "'looks as though' lướt âm nhẹ nhàng. 'here to stay' là cụm từ liền mạch.",
        grammarNote: "Thì hiện tại: 'Now it looks' (Bây giờ trông có vẻ)."
      },
      {
        en: "Oh, I believe in yesterday",
        phonetic: "Ô, ai bi-li-v in yét-stơ-đei",
        ipa: "/oʊ, aɪ bɪˈliːv ɪn ˈjɛstərdeɪ/",
        vi: "Ôi, tôi vẫn hoài tin yêu vào những ngày hôm qua dấu yêu",
        singingTip: "Nối âm: 'believe in' -> 'bi-li-vin'. Chữ 'Oh' thở dài đầy lưu luyến.",
        grammarNote: "Cụm động từ: 'believe in' = tin tưởng vào điều gì."
      },
      {
        en: "Suddenly, I'm not half the man I used to be",
        phonetic: "Sắt-đừn-li, aim no-t hap-ph đờ men nai yut-st tu bi",
        ipa: "/ˈsʌdənli, aɪm nɑːt hæf ðə mæn aɪ juːst tuː biː/",
        vi: "Bất chợt, tôi nhận ra mình chẳng còn được một nửa con người mạnh mẽ khi xưa",
        singingTip: "Nối âm 'man I' -> 'men-nai'. 'used to be' đọc nối là 'yut-st tu bi'.",
        grammarNote: "Cấu trúc: 'used to be' = đã từng là (nay không còn như vậy nữa)."
      },
      {
        en: "There's a shadow hanging over me",
        phonetic: "Đe-zờ sé-đâu heng-inh âu-vơ mi",
        ipa: "/ðɛərz ə ˈʃædoʊ ˈhæŋɪŋ ˈoʊvər miː/",
        vi: "Có một bóng mây u buồn đang giăng lối trùm lên tôi",
        singingTip: "'There's a' -> 'Đe-zờ'. Hát trầm giọng để tạo cảm giác u tối của bóng mây.",
        grammarNote: "Cấu trúc miêu tả: 'hanging over me' (đang lơ lửng, bao phủ lấy tôi)."
      },
      {
        en: "Oh, yesterday came suddenly",
        phonetic: "Ô, yét-stơ-đei keim sắt-đừn-li",
        ipa: "/oʊ, ˈjɛstərdeɪ keɪm ˈsʌdənli/",
        vi: "Than ôi, hôm qua ơi sao trôi qua nhanh bất ngờ đến thế",
        singingTip: "Từ 'came' kéo dài nguyên âm /eɪ/ (ke-im) rồi nhẹ nhàng khép lại.",
        grammarNote: "'came' là dạng quá khứ bất quy tắc của 'come' (come -> came -> come)."
      },
      {
        en: "Why she had to go, I don't know, she wouldn't say",
        phonetic: "Ouai si hét tu gâu, ai đôn-t nâu, si uút-đừn-t sei",
        ipa: "/waɪ ʃiː hæd tuː ɡoʊ, aɪ doʊnt noʊ, ʃiː ˈwʊdənt seɪ/",
        vi: "Vì sao nàng phải cất bước ra đi, tôi chẳng thể hiểu, nàng cũng chẳng hé một lời",
        singingTip: "Câu hát cao trào của đoạn điệp khúc. Lấy hơi sâu, hát với nhịp điệu dồn dập hơn.",
        grammarNote: "'had to go' = đã buộc phải đi (quá khứ của 'have to')."
      },
      {
        en: "I said something wrong, now I long for yesterday",
        phonetic: "Ai sét săm-thinh rong, nao ai long pho yét-stơ-đei",
        ipa: "/aɪ sɛd ˈsʌmθɪŋ rɔːŋ, naʊ aɪ lɔːŋ fɔːr ˈjɛstərdeɪ/",
        vi: "Chắc hẳn tôi đã lỡ lời nói điều sai trái, giờ đây chỉ biết đau đáu nhớ về ngày hôm qua",
        singingTip: "'said' phát âm là /sɛd/ (sét), không đọc là 'xay'. 'long for' tha thiết.",
        grammarNote: "'said' là quá khứ của 'say'. 'long for' là cụm từ chỉ sự khao khát, mong mỏi khôn nguôi."
      }
    ]
  },
  {
    id: "you-raise-me-up",
    title: "You Raise Me Up",
    artist: "Josh Groban / Westlife",
    year: 2002,
    difficulty: "Vừa phải (Hào sảng, truyền cảm hứng)",
    level: "medium",
    tempo: "Chậm rồi hào hùng, nâng đỡ tinh thần (Inspiring anthem)",
    youtubeId: "aJxrX42WcjQ",
    theme: "Biết ơn, gia đình, nghị lực vượt qua thử thách",
    description: "Khúc thánh ca truyền cảm hứng nổi tiếng khắp thế giới. Bài hát là lời tri ân sâu sắc tới người thân, cha mẹ - những người luôn nâng đỡ và tiếp thêm sức mạnh cho ta. Rất hợp để Mẹ hát tặng gia đình hoặc biểu diễn trong các dịp sum vầy.",
    grammarHighlights: [
      {
        title: "Cấu trúc 'Raise someone up' và 'Lift someone up'",
        formula: "Raise + Tân ngữ (me/him/her) + Up",
        explanation: "'Raise up' mang nghĩa nâng đỡ ai đó đứng dậy cả về thể xác lẫn tinh thần khi họ gục ngã.",
        singingExample: "You raise me up, so I can stand on mountains."
      },
      {
        title: "Mệnh đề chỉ mục đích với 'So (that)'",
        formula: "S + V, so (that) + S + can + V",
        explanation: "Chỉ kết quả hoặc mục đích: 'You raise me up, so I can stand on mountains' (Người nâng con dậy, để con có thể đứng vững trên đỉnh non cao).",
        singingExample: "You raise me up, so I can stand on mountains."
      },
      {
        title: "Thì Hiện tại hoàn thành với 'Until'",
        formula: "Until + S + come / S + V",
        explanation: "Diễn tả hành động kéo dài đến một thời điểm: 'Until you come and sit a while with me' (Cho tới khi người đến và ngồi lại bên con một lúc).",
        singingExample: "Until you come and sit a while with me."
      }
    ],
    vocalTips: [
      "Hát to dần (Crescendo): Khổ đầu hát thủ thỉ trầm lắng, đến điệp khúc thì mở rộng lồng ngực và hát hào sảng, vang dội.",
      "Âm /eɪ/ trong 'raise': Miệng mở vừa phải, đưa âm thanh lên vùng xoang trán để nốt vang mà không bị nghẹn ở cổ.",
      "Luyện phát âm từ 'mountains': Đọc là /ˈmaʊn.tɪnz/ ('mao-n-từn-z'), không đọc là 'mông-ten'."
    ],
    vocab: [
      { word: "Weary", type: "adj", ipa: "/ˈwɪə.ri/", vi: "Mệt mỏi, kiệt sức", tip: "Đọc 2 âm tiết nhẹ: 'uía-ri'" },
      { word: "Burdened", type: "adj", ipa: "/ˈbɜː.dənd/", vi: "Nặng trĩu âu lo, trĩu nặng gánh nặng", tip: "Âm /ɜː/ uốn lưỡi nhẹ: 'bơ-đừn-d'" },
      { word: "Stormy seas", type: "noun phrase", ipa: "/ˈstɔːrmi siːz/", vi: "Biển động bão tố", tip: "Tròn vành rõ chữ, 'seas' kéo dài" },
      { word: "More than I can be", type: "phrase", ipa: "/mɔːr ðæn aɪ kæn biː/", vi: "Vượt qua giới hạn của chính mình", tip: "Hát đầy tự hào và tri ân" }
    ],
    lyrics: [
      {
        en: "When I am down, and, oh, my soul's so weary",
        phonetic: "Uen nai em đao-n, èn, ô, mai xâu-l-z sô uía-ri",
        ipa: "/wɛn aɪ æm daʊn, ænd, oʊ, maɪ soʊlz soʊ ˈwɪəri/",
        vi: "Khi lòng con chùn bước và tâm hồn thấy rã rời mỏi mệt",
        singingTip: "Hát thì thầm, sâu lắng. Nối 'When I am' -> 'Uen-nai-em'.",
        grammarNote: "'down' ở đây là tính từ chỉ tâm trạng buồn rầu, chán nản."
      },
      {
        en: "When troubles come, and my heart burdened be",
        phonetic: "Uen trơ-bồu-z căm, èn mai ha-t bơ-đừn-d bi",
        ipa: "/wɛn ˈtrʌbəlz kʌm, ænd maɪ hɑːrt ˈbɜːdənd biː/",
        vi: "Khi những phong ba ập đến, và trái tim trĩu nặng những âu lo",
        singingTip: "'heart' mở vòm miệng tròn chữ /hɑːt/. Không gắt giọng.",
        grammarNote: "Đảo ngữ trong thơ ca: 'burdened be' thay cho 'is burdened' để tạo vần điệu trang trọng."
      },
      {
        en: "Then, I am still and wait here in the silence",
        phonetic: "Đen, ai em s-tiu èn uêi-t hia rin đờ xai-lừn-s",
        ipa: "/ðɛn, aɪ æm stɪl ænd weɪt hɪər ɪn ðə ˈsaɪləns/",
        vi: "Con lại ngồi tĩnh lặng và chờ đợi người nơi tĩnh mịch này",
        singingTip: "Nối âm: 'here in' -> 'hia-rin'. 'silence' kết thúc bằng âm xì /s/ nhẹ.",
        grammarNote: "'still' là tính từ: đứng yên, tĩnh lặng, không dao động."
      },
      {
        en: "Until you come and sit a while with me",
        phonetic: "Ăn-tiu yu căm èn sít-tờ ouai-ồ uýt-th mi",
        ipa: "/ənˈtɪl juː kʌm ænd sɪt ə waɪl wɪð miː/",
        vi: "Cho đến khi người bước tới và ngồi kề bên con một lúc",
        singingTip: "Nối 'sit a while' -> 'sít-tờ ouai-ồ'. Ấm áp và bình yên.",
        grammarNote: "'a while' = một lát, một khoảng thời gian ngắn."
      },
      {
        en: "You raise me up, so I can stand on mountains",
        phonetic: "Yu rêi-z mi áp, sô ai cèn s-ten-đ on mao-n-từn-z",
        ipa: "/juː reɪz miː ʌp, soʊ aɪ kæn stænd ɒn ˈmaʊntɪnz/",
        vi: "Người nâng con đứng dậy, để con có thể vững vàng trên đỉnh núi cao",
        singingTip: "ĐIỆP KHÚC VANG: Đẩy hơi bụng, 'raise me up' hát mạnh mẽ và bay bổng.",
        grammarNote: "Cụm 'raise someone up' = tiếp thêm sức mạnh cho ai đó."
      },
      {
        en: "You raise me up, to walk on stormy seas",
        phonetic: "Yu rêi-z mi áp, tu uốc on s-to-mi xiz",
        ipa: "/juː reɪz miː ʌp, tuː wɔːk ɒn ˈstɔːrmi siːz/",
        vi: "Người nâng con bước đi, vững vàng băng qua cả biển gầm bão tố",
        singingTip: "Từ 'stormy seas' hát đầy hào sảng, ngân dài chữ 'seas'.",
        grammarNote: "Cấu trúc chỉ mục đích: 'to walk...' (để có thể dạo bước vượt qua...)."
      },
      {
        en: "I am strong, when I am on your shoulders",
        phonetic: "Ai em s-trong, uen nai em on yo sôu-l-đơ-z",
        ipa: "/aɪ æm strɒŋ, wɛn aɪ æm ɒn jɔːr ˈʃoʊldərz/",
        vi: "Con trở nên kiên cường khi được tựa trên đôi bờ vai của người",
        singingTip: "'strong' hát đầy nội lực. Nối 'when I am' -> 'uen-nai-em'.",
        grammarNote: "'on your shoulders' = đứng trên bờ vai người (nhờ sự che chở dìu dắt)."
      },
      {
        en: "You raise me up to more than I can be",
        phonetic: "Yu rêi-z mi áp tu mo đæn nai cèn bi",
        ipa: "/juː reɪz miː ʌp tuː mɔːr ðæn aɪ kæn biː/",
        vi: "Người đã nâng con dậy, để con vươn cao hơn cả những gì con từng mơ ước!",
        singingTip: "Nốt cao chót vót, giữ hơi ngân nga đầy cảm xúc và kết thúc viên mãn.",
        grammarNote: "So sánh hơn: 'more than I can be' (nhiều hơn con tưởng mình có thể đạt được)."
      }
    ]
  },
  {
    id: "proud-of-you",
    title: "Proud of You",
    artist: "Fiona Fung",
    year: 2003,
    difficulty: "Dễ (Rất quen thuộc, dễ phát âm)",
    level: "easy",
    tempo: "Ngọt ngào, êm dịu, ấm áp (Gentle pop)",
    youtubeId: "JbXQZk1uNqU",
    theme: "Tự tin, tình yêu thương, đôi cánh ước mơ",
    description: "Giai điệu trong sáng cực kỳ quen thuộc với mọi gia đình Việt Nam. Lời ca ngắn gọn, cấu trúc ngữ pháp cơ bản, âm điệu thánh thót. Đây là bài hát cực kỳ lý tưởng để Mẹ luyện tập phát âm chuẩn từng nguyên âm mà không lo bị ngợp.",
    grammarHighlights: [
      {
        title: "Cấu trúc 'Be proud of someone' (Tự hào về ai đó)",
        formula: "S + is/am/are + proud of + Person/Thing",
        explanation: "Thành ngữ biểu đạt tình cảm rất đẹp: 'Make you proud of me' (Làm cho người tự hào về con).",
        singingExample: "I can fly, I'm so proud to fly up high."
      },
      {
        title: "Động từ 'See' và 'Feel' đi với danh từ",
        formula: "See/Feel + the + Noun",
        explanation: "Các giác quan cảm nhận tình yêu: 'Love in your eyes' (Ánh nhìn chan chứa yêu thương), 'Sitting by my side' (Ngồi kề bên con).",
        singingExample: "Love in your eyes, sitting by my side."
      },
      {
        title: "Động từ khiếm khuyết 'Can' (Có thể)",
        formula: "S + can + V (nguyên mẫu)",
        explanation: "Chỉ khả năng tự tin: 'I can fly' (Con có thể bay cao), 'Nothing can stop me' (Chẳng điều gì ngăn nổi con).",
        singingExample: "I believe that I can fly."
      }
    ],
    vocalTips: [
      "Nguyên âm /aɪ/ trong 'fly' và 'high': Mở miệng to chữ 'a' rồi khép dần về chữ 'i', ngân dài thanh thoát.",
      "Luyện nối âm: 'Love in' -> /lơ-vin/, 'proud of' -> /prao-đơv/.",
      "Giữ giọng trong sáng: Hãy hát với tâm thế nhẹ nhàng như đang hát ru hoặc thủ thỉ với người thân yêu."
    ],
    vocab: [
      { word: "Wings", type: "noun", ipa: "/wɪŋz/", vi: "Đôi cánh", tip: "Tròn môi: 'uinh-z'" },
      { word: "Shine", type: "verb", ipa: "/ʃaɪn/", vi: "Tỏa sáng lấp lánh", tip: "Chu môi âm 'sh': 'shain'" },
      { word: "Proud", type: "adj", ipa: "/praʊd/", vi: "Tự hào, kiêu hãnh", tip: "Đọc 'prao-đ'" },
      { word: "Fly up high", type: "phrase", ipa: "/flaɪ ʌp haɪ/", vi: "Bay vút lên trời cao", tip: "Nối 'fly-yắp hai'" }
    ],
    lyrics: [
      {
        en: "Love in your eyes, sitting by my side",
        phonetic: "Lơ-v vin yo ai-z, xít-tinh bai mai xai-đ",
        ipa: "/lʌv ɪn jɔːr aɪz, ˈsɪtɪŋ baɪ maɪ saɪd/",
        vi: "Ánh yêu thương đong đầy trong mắt người, khi người ngồi kề bên con",
        singingTip: "Nối 'Love in' -> 'Lơ-vin'. Hai từ 'eyes' và 'side' vần với nhau rất êm.",
        grammarNote: "Rút gọn thi vị: '(I see the) Love in your eyes, (you are) sitting by my side'."
      },
      {
        en: "Going on, holding hands, walking through the nights",
        phonetic: "Gâu-inh on, hôu-l-đinh hen-z, uốc-kinh thru đờ nai-t-s",
        ipa: "/ˈɡoʊɪŋ ɒn, ˈhoʊldɪŋ hændz, ˈwɔːkɪŋ θruː ðə naɪts/",
        vi: "Cùng bước tiếp, siết chặt đôi bàn tay, dạo bước qua những màn đêm lạnh giá",
        singingTip: "Hát nhịp nhàng như nhịp chân bước: 3 động từ đuôi -ing nối tiếp nhau.",
        grammarNote: "Chuỗi phân từ hiện tại (V-ing) gợi sự chuyển động liên tục, đồng hành bền bỉ."
      },
      {
        en: "Hold me up, hold me tight, lift me up to touch the sky",
        phonetic: "Hôu-l-đ mi áp, hôu-l-đ mi tai-t, líp-ph mi áp tu tắt-ch đờ s-cai",
        ipa: "/hoʊld miː ʌp, hoʊld miː taɪt, lɪft miː ʌp tuː tʌtʃ ðə skaɪ/",
        vi: "Ôm con vào lòng, giữ chặt con, nâng con lên để với tới tận bầu trời",
        singingTip: "Nối 'lift me up' -> 'líp-ph-mi-áp'. Từ 'sky' ngân nga trong trẻo.",
        grammarNote: "Cụm từ chỉ mục đích: 'to touch the sky' (để chạm tới bầu trời)."
      },
      {
        en: "Teaching me to love with heart, helping me open my mind",
        phonetic: "Ti-chinh mi tu lơ-v uýt-th ha-t, hép-pinh mi ôu-pừn mai main-đ",
        ipa: "/ˈtiːtʃɪŋ miː tuː lʌv wɪð hɑːrt, ˈhɛlpɪŋ miː ˈoʊpən maɪ maɪnd/",
        vi: "Dạy con biết yêu thương bằng cả trái tim, giúp con mở rộng tấm lòng",
        singingTip: "Từ 'heart' và 'mind' phát âm rõ ràng, chứa đựng lòng biết ơn.",
        grammarNote: "Cấu trúc: 'teach someone to do something' (dạy ai làm gì)."
      },
      {
        en: "I can fly, I'm so proud to fly up high",
        phonetic: "Ai cèn ph-lai, aim sô prao-đ tu ph-lai yắp hai",
        ipa: "/aɪ kæn flaɪ, aɪm soʊ praʊd tuː flaɪ ʌp haɪ/",
        vi: "Con có thể cất cánh bay rồi, con tự hào xiết bao khi được bay vút lên trời cao",
        singingTip: "ĐIỆP KHÚC ĐẸP: Nối 'fly up' thành 'ph-lai-yắp'. Hát cao và bay bổng.",
        grammarNote: "Cấu trúc: 'so proud to + V' (quá đỗi tự hào khi được làm gì)."
      },
      {
        en: "To the sky, singing the song, singing the song in the blue sky",
        phonetic: "Tu đờ s-cai, xinh-inh đờ song, xinh-inh đờ song in đờ b-lu s-cai",
        ipa: "/tuː ðə skaɪ, ˈsɪŋɪŋ ðə sɒŋ, ˈsɪŋɪŋ ðə sɒŋ ɪn ðə bluː skaɪ/",
        vi: "Vút tới trời xanh, cất cao câu hát, hát vang bài ca giữa vòm trời biếc",
        singingTip: "Ngắt chữ 'song' tròn trịa, 'blue sky' ngân đều và sáng rực rỡ.",
        grammarNote: "Cụm danh từ: 'in the blue sky' (giới từ chỉ không gian 'in')."
      },
      {
        en: "I can fly, I'm so proud to fly up high",
        phonetic: "Ai cèn ph-lai, aim sô prao-đ tu ph-lai yắp hai",
        ipa: "/aɪ kæn flaɪ, aɪm soʊ praʊd tuː flaɪ ʌp haɪ/",
        vi: "Con có thể bay rồi, con ngập tràn tự hào khi được bay lượn trên cao",
        singingTip: "Lặp lại với cảm xúc tự tin và chan chứa niềm hân hoan hơn nữa.",
        grammarNote: "Sự lặp lại trong bài hát giúp ghi nhớ sâu cấu trúc 'can fly'."
      },
      {
        en: "I can make you believe in me",
        phonetic: "Ai cèn meik yu bi-li-v in mi",
        ipa: "/aɪ kæn meɪk juː bɪˈliːv ɪn miː/",
        vi: "Con nhất định sẽ khiến người thêm vững lòng tin yêu nơi con!",
        singingTip: "Câu kết chắc chắn, ấm áp. Nối 'believe in' -> 'bi-li-vin'.",
        grammarNote: "Cấu trúc cầu khiến: 'make someone + V nguyên thể' (khiến ai đó làm gì)."
      }
    ]
  },
  {
    id: "edelweiss",
    title: "Edelweiss",
    artist: "The Sound of Music",
    year: 1959,
    difficulty: "Rất dễ (Câu ngắn, thanh khiết)",
    level: "easy",
    tempo: "Nhẹ nhàng, thanh bình, chậm rãi (Waltz 3/4)",
    youtubeId: "8bL2BCiFkTk",
    theme: "Hoa cỏ, tình yêu quê hương, lời cầu chúc an lành",
    description: "Khúc ca thần tiên trong bộ phim huyền thoại 'Giai điệu hạnh phúc' (The Sound of Music). Bài hát tôn vinh loài hoa nhung tuyết trắng ngần mọc trên đỉnh núi Alps. Ca từ ngắn, câu cú giản dị, nhịp 3/4 đu đưa như điệu van, cực kỳ thích hợp để Mẹ khởi động giọng hát mỗi sáng.",
    grammarHighlights: [
      {
        title: "Tính từ miêu tả: Small and white, clean and bright",
        formula: "Adj and Adj",
        explanation: "Các cặp tính từ ngắn đối vần với nhau, giúp ghi nhớ từ vựng miêu tả màu sắc và hình dáng rất tự nhiên.",
        singingExample: "Small and white, clean and bright, you look happy to meet me."
      },
      {
        title: "Cấu trúc 'Look + Adj' (Trông có vẻ như...)",
        formula: "S + look(s) + Adj + to + V",
        explanation: "Chỉ vẻ bề ngoài: 'You look happy to meet me' (Trông bạn thật vui khi gặp lại tôi).",
        singingExample: "You look happy to meet me."
      },
      {
        title: "Câu cầu chúc với động từ 'May'",
        formula: "May + S + V (nguyên mẫu)!",
        explanation: "Cách chúc tụng trang trọng và ấm cúng: 'May you protect my homeland forever' (Cầu chúc người mãi chở che cho quê hương này).",
        singingExample: "May you protect my homeland forever."
      }
    ],
    vocalTips: [
      "Hát nhẹ như hoa tuyết rơi: Không dùng lực cổ họng, đẩy luồng hơi ấm và mảnh.",
      "Âm 'W' trong 'Edelweiss': Edelweiss đọc là /ˈeɪ.dəl.vaɪs/ hoặc /ˈeɪ.dəl.waɪs/, nhấn nhẹ vào âm đầu 'EI-dồu-vai-s'.",
      "Nhịp van 3/4: Đếm thầm '1-2-3, 1-2-3' trong đầu, nhún nhẹ người theo nhịp khi hát."
    ],
    vocab: [
      { word: "Blossom", type: "noun / verb", ipa: "/ˈblɒs.əm/", vi: "Đóa hoa tuyết / nở hoa rạng rỡ", tip: "Đọc 'b-lo-sừm'" },
      { word: "Homeland", type: "noun", ipa: "/ˈhoʊm.lænd/", vi: "Quê hương yêu dấu", tip: "Đọc 'hôm-len-đ'" },
      { word: "Greet", type: "verb", ipa: "/ɡriːt/", vi: "Chào đón, đón mừng", tip: "Kéo dài âm 'ee' sáng: 'grit'" },
      { word: "Forever", type: "adv", ipa: "/fəˈrɛv.ər/", vi: "Mãi mãi, muôn đời", tip: "Lướt nhẹ vần đầu: 'phơ-re-vơ'" }
    ],
    lyrics: [
      {
        en: "Edelweiss, Edelweiss",
        phonetic: "Ei-dồu-vai-s, Ei-dồu-vai-s",
        ipa: "/ˈeɪdəlvaɪs, ˈeɪdəlvaɪs/",
        vi: "Hỡi đóa hoa nhung tuyết, hỡi hoa nhung tuyết trắng",
        singingTip: "Hát êm như lời thủ thỉ với một bông hoa nhỏ trên sườn đồi tuyết.",
        grammarNote: "Tên loài hoa biểu tượng của vùng núi tuyết Alps nước Áo."
      },
      {
        en: "Every morning you greet me",
        phonetic: "Év-ri mo-ninh yu g-rit mi",
        ipa: "/ˈɛvri ˈmɔːrnɪŋ juː ɡriːt miː/",
        vi: "Mỗi sớm mai thức dậy, người lại tươi tắn đón chào tôi",
        singingTip: "Chữ 'greet' ngân nga với khẩu hình cười nhẹ.",
        grammarNote: "Thì Hiện tại đơn chỉ thói quen lặp lại hàng ngày: 'Every morning you greet me'."
      },
      {
        en: "Small and white, clean and bright",
        phonetic: "S-mo-l èn ouai-t, c-lin èn b-rai-t",
        ipa: "/smɔːl ænd waɪt, kliːn ænd braɪt/",
        vi: "Nhỏ xinh và trắng ngần, thuần khiết và bừng sáng",
        singingTip: "Hai cặp từ vần với nhau: 'white' vần với 'bright'. Hát ngắt nhịp thanh thoát.",
        grammarNote: "Cụm tính từ miêu tả đặc điểm thuần khiết của thiên nhiên."
      },
      {
        en: "You look happy to meet me",
        phonetic: "Yu lú-k hep-pi tu mít mi",
        ipa: "/juː lʊk ˈhæpi tuː miːt miː/",
        vi: "Trông bạn thật rạng rỡ và hân hoan khi gặp lại tôi",
        singingTip: "Nối âm nhẹ: 'look happy' -> 'lú-k-hep-pi'.",
        grammarNote: "Cấu trúc: 'look + tính từ + to V' = trông có vẻ vui mừng khi làm gì."
      },
      {
        en: "Blossom of snow may you bloom and grow",
        phonetic: "B-lo-sừm mơ-v s-nâu mei yu b-lum èn g-râu",
        ipa: "/ˈblɒsəm əv snoʊ meɪ juː bluːm ænd ɡroʊ/",
        vi: "Hỡi đóa hoa tuyết ngần, cầu mong người mãi khoe sắc và vươn lớn",
        singingTip: "Nối 'Blossom of' -> 'B-lo-sừm-mơv'. 'snow' và 'grow' cùng vần /oʊ/ đầm ấm.",
        grammarNote: "Lời cầu chúc: 'may you bloom and grow' (chúc bạn luôn nở hoa và lớn mạnh)."
      },
      {
        en: "Bloom and grow forever",
        phonetic: "B-lum èn g-râu pho-re-vơ",
        ipa: "/bluːm ænd ɡroʊ fərˈɛvər/",
        vi: "Mãi mãi xanh tươi và tỏa sắc qua muôn đời",
        singingTip: "Kéo dài chữ 'grow', rồi khép lại chữ 'forever' thật êm ái.",
        grammarNote: "Động từ ghép cặp: 'bloom and grow' (khoe sắc và đâm chồi)."
      },
      {
        en: "Edelweiss, Edelweiss",
        phonetic: "Ei-dồu-vai-s, Ei-dồu-vai-s",
        ipa: "/ˈeɪdəlvaɪs, ˈeɪdəlvaɪs/",
        vi: "Hỡi loài hoa tuyết trắng, hỡi hoa nhung tuyết diệu kỳ",
        singingTip: "Lặp lại tên hoa với cảm xúc tha thiết, dâng trào tình yêu thương.",
        grammarNote: "Điệp từ tạo tính thi ca sâu lắng."
      },
      {
        en: "Bless my homeland forever",
        phonetic: "B-le-s mai hôm-len-đ pho-re-vơ",
        ipa: "/blɛs maɪ ˈhoʊmlænd fərˈɛvər/",
        vi: "Cầu chúc cho quê hương tôi mãi mãi an lành và hạnh phúc!",
        singingTip: "Ngân dài nốt cuối cùng, mở rộng lồng ngực với niềm tự hào sâu sắc.",
        grammarNote: "Câu ước nguyện: '(May you) bless my homeland forever'."
      }
    ]
  }
];

// CẨM NANG NGỮ PHÁP TIẾNG ANH DÀNH CHO NGƯỜI HÁT
const GENERAL_GRAMMAR_GUIDE = [
  {
    topic: "Bí quyết nối âm (Linking Sounds) - Chìa khóa hát mượt như người bản xứ",
    desc: "Tại sao khi đọc từng từ thì ngắt quãng, nhưng khi ca sĩ hát thì giai điệu lại mềm mại trôi chảy? Đó là nhờ kỹ thuật NỐI ÂM.",
    points: [
      {
        title: "1. Nối Phụ âm với Nguyên âm (Consonant to Vowel)",
        rule: "Khi một từ kết thúc bằng phụ âm và từ kế tiếp bắt đầu bằng nguyên âm (u, e, o, a, i), ta nối phụ âm đó sang từ sau.",
        examples: [
          { en: "Put a smile", sing: "/pʊ-tə-smai-ồ/", vi: "Đọc nối thành 'phú-tờ smai-ồ', không đọc ngắt 'phút ... ờ'" },
          { en: "Rush in", sing: "/rʌ-ʃɪn/", vi: "Đọc nối thành 'rơ-shin'" },
          { en: "Top of the world", sing: "/tɒ-pəv ðə wɜːld/", vi: "Đọc nối 'tóp-pơv đờ uơn-đ'" },
          { en: "Falling in love", sing: "/ˈfɔː-lɪ-ŋɪn lʌv/", vi: "Đọc nối 'pho-linh-in lơ-v'" }
        ]
      },
      {
        title: "2. Nối Nguyên âm với Nguyên âm (Vowel to Vowel)",
        rule: "Khi từ trước kết thúc bằng nguyên âm và từ sau cũng mở đầu bằng nguyên âm, người ta thường chèn một âm gió nhẹ /w/ hoặc /j/ (như chữ 'y') vào giữa để giọng không bị giật.",
        examples: [
          { en: "Fly up", sing: "/flaɪ-(j)-ʌp/", vi: "Hát thành 'ph-lai-yắp', nghe rất mượt và bay bổng" },
          { en: "So I can", sing: "/soʊ-(w)-aɪ kæn/", vi: "Hát chèn âm 'w' nhẹ: 'sô-uai cèn'" }
        ]
      }
    ]
  },
  {
    topic: "Các từ viết tắt & rút gọn kinh điển trong bài hát (Song Slang & Contractions)",
    desc: "Trong âm nhạc, nhạc sĩ thường rút ngắn từ để khớp với nhịp điệu và nốt nhạc. Nắm được những từ này Mẹ sẽ hiểu ngay ý nghĩa!",
    points: [
      {
        title: "Gonna, Wanna, Gotta",
        rule: "Đây là 3 từ rút gọn phổ biến nhất trong nhạc Pop và Country:",
        examples: [
          { en: "Gonna = Going to", sing: "I'm gonna sing (Tôi chuẩn bị hát)", vi: "Chỉ tương lai gần" },
          { en: "Wanna = Want to", sing: "I wanna dance (Tôi muốn nhảy múa)", vi: "Chỉ ước muốn" },
          { en: "Gotta = Have got to", sing: "I gotta go (Tôi phải đi rồi)", vi: "Chỉ sự cần thiết/phải làm" }
        ]
      },
      {
        title: "'Cause, Ain't, Feelin', Ol'",
        rule: "Cách lược âm đuôi để câu hát mềm hơn:",
        examples: [
          { en: "'Cause = Because", sing: "'Cause you are here", vi: "Bởi vì" },
          { en: "Ain't = Am not / Is not / Are not", sing: "It ain't easy", vi: "Chẳng phải là (cách nói dân dã)" },
          { en: "Feelin' = Feeling, Comin' = Coming", sing: "Comin' over me", vi: "Bỏ âm 'g' cuối để hát thanh thoát hơn" },
          { en: "Ol' = Old", sing: "Good ol' days", vi: "Ngày xưa thân thương" }
        ]
      }
    ]
  },
  {
    topic: "Cách nhận biết 3 thì cơ bản nhất trong lời bài hát",
    desc: "Để hiểu trọn vẹn cảm xúc của nhạc sĩ, chỉ cần nắm vững 3 trục thời gian này:",
    points: [
      {
        title: "1. Thì Hiện tại đơn (Present Simple) - Cảm xúc đang hiện hữu",
        rule: "Dùng để bộc lộ tình yêu, tâm trạng, chân lý lúc đang hát.",
        examples: [
          { en: "I love you / You look happy", sing: "Động từ giữ nguyên hoặc thêm s/es", vi: "Thể hiện điều hiển nhiên, cảm xúc chân thành" }
        ]
      },
      {
        title: "2. Thì Quá khứ đơn (Past Simple) - Kỷ niệm và hoài niệm",
        rule: "Thường dùng trong các bản ballad nhớ về ngày xưa, người xưa.",
        examples: [
          { en: "Yesterday, came, said, seemed", sing: "Động từ thêm đuôi -ed hoặc biến đổi bất quy tắc", vi: "Gợi nhắc chuyện đã qua, kỷ niệm đẹp" }
        ]
      },
      {
        title: "3. Thì Tương lai đơn (Future with Will / Won't)",
        rule: "Dùng cho lời hứa hẹn son sắt hoặc sự tin tưởng mai sau.",
        examples: [
          { en: "I will always love you", sing: "S + will / won't + V nguyên mẫu", vi: "Lời thề nguyền bền chặt" }
        ]
      }
    ]
  }
];
