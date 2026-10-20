/**
 * HỌC HÁT TIẾNG ANH CÙNG MẸ - APP JAVASCRIPT
 * Xử lý tương tác, phát âm giọng chuẩn bản xứ, thu âm giọng hát và hiển thị bài học.
 */

// STATE QUẢN LÝ ỨNG DỤNG
const appState = {
  currentSongId: SONGS_DATA[0].id,
  currentCategory: 'all',
  searchQuery: '',
  fontSize: 'normal',
  speechRate: 1.0,
  activeNav: 'library',
  activeSongTab: 'lyrics',
  isRecording: false,
  mediaRecorder: null,
  audioChunks: [],
  recordInterval: null,
  recordSeconds: 0
};

// KHỞI CHẠY ỨNG DỤNG KHI TẢI TRANG
document.addEventListener('DOMContentLoaded', () => {
  loadSavedSettings();
  renderSongLibrary();
  renderCurrentSong();
  renderGeneralGrammar();
  setupTextSelectionHelper();
});

/* ==========================================================================
   1. CÀI ĐẶT & LƯU TRỮ TRẠNG THÁI (LOCAL STORAGE)
   ========================================================================== */
function loadSavedSettings() {
  const savedFontSize = localStorage.getItem('singMom_fontSize');
  if (savedFontSize) {
    setFontSize(savedFontSize, false);
  }

  const savedSpeed = localStorage.getItem('singMom_speechSpeed');
  if (savedSpeed) {
    setSpeechSpeed(parseFloat(savedSpeed), false);
  }

  const savedSongId = localStorage.getItem('singMom_lastSongId');
  if (savedSongId && SONGS_DATA.some(s => s.id === savedSongId)) {
    appState.currentSongId = savedSongId;
  }
}

// Chỉnh cỡ chữ to rõ cho Mẹ
function setFontSize(size, save = true) {
  appState.fontSize = size;
  document.body.classList.remove('font-normal', 'font-large', 'font-xlarge');
  document.body.classList.add(`font-${size}`);

  document.querySelectorAll('.font-size-group .ctrl-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  const activeBtn = document.getElementById(`btn-font-${size}`);
  if (activeBtn) activeBtn.classList.add('active');

  if (save) {
    localStorage.setItem('singMom_fontSize', size);
  }
}

// Chỉnh tốc độ phát âm mẫu
function setSpeechSpeed(speed, save = true) {
  appState.speechRate = speed;

  document.querySelectorAll('.speed-group .ctrl-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  if (speed < 0.9) {
    document.getElementById('btn-speed-slow')?.classList.add('active');
  } else {
    document.getElementById('btn-speed-normal')?.classList.add('active');
  }

  if (save) {
    localStorage.setItem('singMom_speechSpeed', speed.toString());
  }
}

/* ==========================================================================
   2. ĐIỀU HƯỚNG MÀN HÌNH (NAVIGATION)
   ========================================================================== */
function switchNav(navKey) {
  appState.activeNav = navKey;

  // Cập nhật tab trên Header
  document.querySelectorAll('.main-nav .nav-item').forEach(el => el.classList.remove('active'));
  document.getElementById(`nav-${navKey}`)?.classList.add('active');

  // Chuyển view panel
  document.querySelectorAll('.view-panel').forEach(panel => panel.classList.remove('active'));
  document.getElementById(`view-${navKey}`)?.classList.add('active');

  // Cuộn mượt lên đầu trang
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchSongTab(tabKey) {
  appState.activeSongTab = tabKey;

  document.querySelectorAll('.song-subnav .subnav-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`tab-${tabKey}`)?.classList.add('active');

  document.querySelectorAll('.song-tab-panel').forEach(panel => panel.classList.remove('active'));
  document.getElementById(`song-panel-${tabKey}`)?.classList.add('active');
}

/* ==========================================================================
   3. PHÁT ÂM TIẾNG ANH BẢN XỨ (WEB SPEECH SYNTHESIS)
   ========================================================================== */
function speakText(text) {
  if (!('speechSynthesis' in window)) {
    alert('Trình duyệt của Mẹ chưa hỗ trợ tính năng phát âm. Mẹ hãy dùng Chrome hoặc Safari nhé!');
    return;
  }

  // Dừng âm thanh đang đọc dở nếu có
  window.speechSynthesis.cancel();

  // Làm sạch chuỗi trước khi đọc (bỏ ký tự lạ, giữ nguyên từ tiếng Anh)
  const cleanText = text.replace(/[/\\#,+()$~%.'":*?<>{}]/g, ' ').trim();
  const utterance = new SpeechSynthesisUtterance(cleanText);

  utterance.lang = 'en-US';
  utterance.rate = appState.speechRate; // 0.75x hoặc 1.0x
  utterance.pitch = 1.0;

  // Ưu tiên chọn giọng đọc tiếng Anh tự nhiên nhất
  const voices = window.speechSynthesis.getVoices();
  const preferredVoice = voices.find(v => (v.lang === 'en-US' || v.lang === 'en_US') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha')));
  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }

  window.speechSynthesis.speak(utterance);
}

// Bấm vào từ bất kỳ trên trang để nghe đọc
function setupTextSelectionHelper() {
  const quickPill = document.getElementById('quick-speak-pill');

  document.addEventListener('selectionchange', () => {
    const selection = window.getSelection().toString().trim();
    if (selection.length > 1 && selection.length < 60 && /^[a-zA-Z\s'-]+$/.test(selection)) {
      quickPill.style.display = 'flex';
      quickPill.dataset.text = selection;
    } else {
      quickPill.style.display = 'none';
    }
  });
}

function speakSelectedText() {
  const quickPill = document.getElementById('quick-speak-pill');
  const text = quickPill.dataset.text;
  if (text) {
    speakText(text);
  }
}

/* ==========================================================================
   4. RENDER THƯ VIỆN BÀI HÁT (SONG LIBRARY)
   ========================================================================== */
function renderSongLibrary() {
  const grid = document.getElementById('songs-grid');
  if (!grid) return;

  const filtered = SONGS_DATA.filter(song => {
    const matchesCategory = appState.currentCategory === 'all' || song.level === appState.currentCategory;
    const query = appState.searchQuery.toLowerCase();
    const matchesSearch = !query ||
      song.title.toLowerCase().includes(query) ||
      song.artist.toLowerCase().includes(query) ||
      song.theme.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; background: #fff; border-radius: 20px;">
        <p style="font-size: 20px; color: var(--color-text-muted);">Không tìm thấy bài hát nào phù hợp với từ khóa "${appState.searchQuery}".</p>
        <button class="btn-secondary" style="margin-top: 15px;" onclick="resetSearch()">Xem tất cả bài hát</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(song => `
    <article class="song-card">
      <div class="song-card-header">
        <div class="song-badge-row">
          <span class="difficulty-badge ${song.level === 'medium' ? 'medium' : ''}">${song.difficulty}</span>
          <span class="song-year">Năm ${song.year}</span>
        </div>
        <h3 class="song-card-title">${song.title}</h3>
        <p class="song-card-artist">${song.artist}</p>
      </div>
      <div class="song-card-body">
        <p class="song-card-desc">${song.description}</p>
        <div class="song-card-meta">
          <div><strong>🎼 Giai điệu:</strong> ${song.tempo}</div>
          <div><strong>🌸 Chủ đề:</strong> ${song.theme}</div>
        </div>
        <button class="song-card-btn" onclick="selectAndPracticeSong('${song.id}')">
          <span>🎤</span> Bấm Vào Học Hát Bài Này
        </button>
      </div>
    </article>
  `).join('');
}

function filterSongs(category, btnElement) {
  appState.currentCategory = category;
  document.querySelectorAll('.filter-tabs .filter-btn').forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  renderSongLibrary();
}

function handleSearch(query) {
  appState.searchQuery = query.trim();
  renderSongLibrary();
}

function resetSearch() {
  appState.searchQuery = '';
  const input = document.getElementById('song-search-input');
  if (input) input.value = '';
  filterSongs('all', document.querySelector('.filter-tabs .filter-btn'));
}

/* ==========================================================================
   5. RENDER BÀI HÁT CHI TIẾT (SONG PRACTICE STUDIO)
   ========================================================================== */
function selectAndPracticeSong(songId) {
  appState.currentSongId = songId;
  localStorage.setItem('singMom_lastSongId', songId);
  renderCurrentSong();
  switchNav('practice');
  switchSongTab('lyrics');
}

function renderCurrentSong() {
  const song = SONGS_DATA.find(s => s.id === appState.currentSongId) || SONGS_DATA[0];

  // 1. Header bài hát
  const headerContainer = document.getElementById('current-song-header');
  if (headerContainer) {
    headerContainer.innerHTML = `
      <div class="header-top-row">
        <div class="song-titles">
          <h2>${song.title}</h2>
          <div class="song-artist-tag">Ca sĩ: ${song.artist} (${song.year})</div>
        </div>
        <div class="header-action-group">
          <button class="btn-secondary" onclick="toggleYouTubeVideo()">
            <span id="yt-toggle-icon">▶️</span> <span id="yt-toggle-text">Xem MV Hát Mẫu</span>
          </button>
          <button class="btn-secondary" onclick="switchNav('library')">
            <span>📚</span> Chọn Bài Khác
          </button>
        </div>
      </div>

      <div class="song-info-pills">
        <div class="info-pill"><strong>Độ khó:</strong> ${song.difficulty}</div>
        <div class="info-pill"><strong>Nhịp điệu:</strong> ${song.tempo}</div>
        <div class="info-pill"><strong>Cảm xúc:</strong> ${song.theme}</div>
      </div>

      <!-- Container video YouTube ẩn hiện linh hoạt -->
      <div id="youtube-embed-box" class="youtube-box" style="display: none;">
        <iframe id="yt-iframe" src="" title="${song.title} - ${song.artist}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    `;
  }

  // 2. Render Tab Lời bài hát & Phiên âm
  const lyricsContainer = document.getElementById('lyrics-container');
  if (lyricsContainer) {
    lyricsContainer.innerHTML = song.lyrics.map((line, index) => `
      <div class="lyric-card" id="lyric-line-${index}">
        <div class="lyric-top-bar">
          <span class="line-number">Câu ${index + 1}</span>
          <button class="speak-line-btn" onclick="speakLine(${index}, '${escapeSingleQuotes(line.en)}')">
            <span>🔊</span> Nghe Đọc Mẫu
          </button>
        </div>

        <!-- Lời tiếng Anh -->
        <div class="lyric-english">${line.en}</div>

        <!-- Phiên âm trợ âm tiếng Việt và IPA -->
        <div class="lyric-phonetic-row">
          <span class="phonetic-guide">Trợ âm hát: <strong>${line.phonetic}</strong></span>
          <span class="ipa-text">${line.ipa}</span>
        </div>

        <!-- Bản dịch nghĩa tiếng Việt -->
        <div class="lyric-vietnamese">🌸 Nghĩa: ${line.vi}</div>

        <!-- Mẹo hát và nối âm -->
        ${line.singingTip ? `
          <div class="lyric-tips-box">
            <span>💡</span>
            <div><strong>Mẹo nối âm & nhả chữ:</strong> ${line.singingTip}</div>
          </div>
        ` : ''}

        <!-- Ghi chú ngữ pháp nhanh -->
        ${line.grammarNote ? `
          <div class="lyric-grammar-box">
            <span>📖</span>
            <div><strong>Ngữ pháp câu này:</strong> ${line.grammarNote}</div>
          </div>
        ` : ''}
      </div>
    `).join('');
  }

  // 3. Render Tab Ngữ pháp trong bài hát
  const grammarContainer = document.getElementById('song-grammar-container');
  if (grammarContainer) {
    grammarContainer.innerHTML = song.grammarHighlights.map(item => `
      <div class="grammar-highlight-card">
        <h4>${item.title}</h4>
        <div class="grammar-formula-badge">${item.formula}</div>
        <p class="grammar-explanation">${item.explanation}</p>
        <div class="grammar-example-box">
          <strong>Câu hát trong bài:</strong> "${item.singingExample}"
        </div>
      </div>
    `).join('');
  }

  // 4. Render Tab Từ vựng hát hay
  const vocabContainer = document.getElementById('song-vocab-container');
  if (vocabContainer) {
    vocabContainer.innerHTML = song.vocab.map(v => `
      <div class="vocab-card">
        <div>
          <div class="vocab-word-row">
            <span class="vocab-word">${v.word}</span>
            <span class="vocab-type">(${v.type})</span>
          </div>
          <div class="vocab-ipa">${v.ipa}</div>
          <div class="vocab-vi">${v.vi}</div>
        </div>
        <div class="vocab-tip">💡 <strong>Mẹo phát âm:</strong> ${v.tip}</div>
      </div>
    `).join('');
  }

  // 5. Render Tab Mẹo hát & Khẩu hình
  const tipsContainer = document.getElementById('song-tips-container');
  if (tipsContainer) {
    tipsContainer.innerHTML = `
      <ul>
        ${song.vocalTips.map(tip => `<li>🌸 ${tip}</li>`).join('')}
      </ul>
    `;
  }
}

// Bật / Tắt Video YouTube
function toggleYouTubeVideo() {
  const box = document.getElementById('youtube-embed-box');
  const iframe = document.getElementById('yt-iframe');
  const icon = document.getElementById('yt-toggle-icon');
  const text = document.getElementById('yt-toggle-text');
  const song = SONGS_DATA.find(s => s.id === appState.currentSongId);

  if (!box || !song) return;

  if (box.style.display === 'none' || !box.style.display) {
    box.style.display = 'block';
    iframe.src = `https://www.youtube-nocookie.com/embed/${song.youtubeId}?autoplay=1`;
    icon.textContent = '⏹️';
    text.textContent = 'Thu Gọn Video';
  } else {
    box.style.display = 'none';
    iframe.src = '';
    icon.textContent = '▶️';
    text.textContent = 'Xem MV Hát Mẫu';
  }
}

function speakLine(lineIndex, text) {
  // Highlight dòng đang phát
  document.querySelectorAll('.lyric-card').forEach(c => c.classList.remove('highlighted'));
  const card = document.getElementById(`lyric-line-${lineIndex}`);
  if (card) card.classList.add('highlighted');

  speakText(text);
}

function escapeSingleQuotes(str) {
  return str.replace(/'/g, "\\'");
}

/* ==========================================================================
   6. RENDER CẨM NANG NGỮ PHÁP CHUNG (GRAMMAR HUB)
   ========================================================================== */
function renderGeneralGrammar() {
  const container = document.getElementById('general-grammar-container');
  if (!container) return;

  container.innerHTML = GENERAL_GRAMMAR_GUIDE.map(item => `
    <article class="general-grammar-card">
      <h3>${item.topic}</h3>
      <p class="general-grammar-desc">${item.desc}</p>

      <div class="sub-points-list">
        ${item.points.map(point => `
          <div class="sub-point-item">
            <h4>${point.title}</h4>
            <p class="sub-point-rule">${point.rule}</p>
            <div class="sub-point-examples">
              ${point.examples.map(ex => `
                <div class="example-mini-card">
                  <div class="example-en">"${ex.en}"</div>
                  <div class="example-sing">🎤 Hát: ${ex.sing}</div>
                  <div class="example-vi">🌸 Nghĩa: ${ex.vi}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </article>
  `).join('');
}

/* ==========================================================================
   7. PHÒNG THU ÂM CỦA MẸ (VOICE RECORDER)
   ========================================================================== */
async function startRecording() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert('Trình duyệt chưa cho phép ghi âm. Mẹ vui lòng mở trang trên trình duyệt Google Chrome hoặc Safari nhé!');
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    appState.mediaRecorder = new MediaRecorder(stream);
    appState.audioChunks = [];

    appState.mediaRecorder.ondataavailable = e => {
      if (e.data.size > 0) {
        appState.audioChunks.push(e.data);
      }
    };

    appState.mediaRecorder.onstop = () => {
      const audioBlob = new Blob(appState.audioChunks, { type: 'audio/webm' });
      const audioUrl = URL.createObjectURL(audioBlob);
      const audioPlayback = document.getElementById('audio-playback');
      if (audioPlayback) {
        audioPlayback.src = audioUrl;
        audioPlayback.style.display = 'block';
      }

      // Giải phóng microphone
      stream.getTracks().forEach(track => track.stop());

      document.getElementById('btn-play-record').disabled = false;
      document.getElementById('record-status').textContent = 'Đã ghi âm xong! Mẹ hãy bấm "Nghe Lại Giọng Mẹ" bên dưới nhé 💖';
    };

    appState.mediaRecorder.start();
    appState.isRecording = true;

    // Cập nhật giao diện khi đang ghi âm
    document.getElementById('mic-circle').classList.add('recording');
    document.getElementById('record-status').textContent = 'Đang ghi âm giọng hát của Mẹ... Mẹ hãy hát thật tự tin nhé!';
    document.getElementById('btn-start-record').disabled = true;
    document.getElementById('btn-stop-record').disabled = false;
    document.getElementById('btn-play-record').disabled = true;

    // Đếm giờ
    appState.recordSeconds = 0;
    updateTimerDisplay();
    appState.recordInterval = setInterval(() => {
      appState.recordSeconds++;
      updateTimerDisplay();
    }, 1000);

  } catch (err) {
    console.error('Lỗi khi mở microphone:', err);
    alert('Không thể mở micro: Mẹ hãy kiểm tra xem trình duyệt đã được cấp quyền sử dụng Micro chưa nhé!');
  }
}

function stopRecording() {
  if (appState.mediaRecorder && appState.isRecording) {
    appState.mediaRecorder.stop();
    appState.isRecording = false;

    clearInterval(appState.recordInterval);
    document.getElementById('mic-circle').classList.remove('recording');
    document.getElementById('btn-start-record').disabled = false;
    document.getElementById('btn-stop-record').disabled = true;
  }
}

function playRecording() {
  const audioPlayback = document.getElementById('audio-playback');
  if (audioPlayback && audioPlayback.src) {
    audioPlayback.play();
  }
}

function updateTimerDisplay() {
  const timerEl = document.getElementById('record-timer');
  if (!timerEl) return;
  const mins = Math.floor(appState.recordSeconds / 60).toString().padStart(2, '0');
  const secs = (appState.recordSeconds % 60).toString().padStart(2, '0');
  timerEl.textContent = `${mins}:${secs}`;
}
