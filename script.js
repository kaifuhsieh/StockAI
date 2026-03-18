const stockData = [
  {
    id: "2376",
    name: "技嘉",
    score: 95,
    roi: "14.5%",
    price: 248.5,
    change: 15.5,
    percent: "6.65%",
    break5: "O",
    volume: "O",
    kdj: "超買 74, 58, 105",
    macd: "-",
    rsi: "68.79",
    eps: "9.2",
    yield: "4.23%",
    industry: "電腦及週邊設備業",
    bias: "9.06%",
    gain10: "8.52%",
    isNew: true,
  },
  {
    id: "8936",
    name: "國統",
    score: 88,
    roi: "45.2%",
    price: 54.6,
    change: 0.9,
    percent: "1.68%",
    break5: "O",
    volume: "O",
    kdj: "超買 73, 59, 101",
    macd: "-",
    rsi: "64.87",
    eps: "3",
    yield: "5.69%",
    industry: "其他",
    bias: "5.02%",
    gain10: "5.61%",
    isNew: true,
  },
  {
    id: "2347",
    name: "聯強",
    score: 92,
    roi: "12.2%",
    price: 78,
    change: 7.8,
    percent: "11.11%",
    break5: "O",
    volume: "O",
    kdj: "-",
    macd: "-",
    rsi: "79.32",
    eps: "1.88",
    yield: "5.44%",
    industry: "電子通路業",
    bias: "12.39%",
    gain10: "12.23%",
    isNew: true,
  },
  {
    id: "6438",
    name: "迅得",
    score: 92,
    roi: "12.2%",
    price: 159.5,
    change: 11.5,
    percent: "7.77%",
    break5: "O",
    volume: "O",
    kdj: "金叉 62, 53, 82",
    macd: "金叉",
    rsi: "62.99",
    eps: "3.28",
    yield: "3.4%",
    industry: "其他電子業",
    bias: "6.51%",
    gain10: "3.91%",
  },
  {
    id: "6509",
    name: "聚和",
    score: 85,
    roi: "10.8%",
    price: 45.3,
    change: 5.2,
    percent: "12.97%",
    break5: "O",
    volume: "O",
    kdj: "金叉 64, 57, 79",
    macd: "金叉",
    rsi: "74.84",
    eps: "1.4",
    yield: "3.37%",
    industry: "化學工業",
    bias: "16.18%",
    gain10: "12.41%",
  },
  {
    id: "2855",
    name: "統一證",
    score: 76,
    roi: "9.5%",
    price: 32.05,
    change: 1.8,
    percent: "5.95%",
    break5: "O",
    volume: "O",
    kdj: "-",
    macd: "金叉",
    rsi: "66.45",
    eps: "-0.05",
    yield: "6.86%",
    industry: "金融保險業",
    bias: "6.2%",
    gain10: "3.39%",
  },
  {
    id: "3010",
    name: "華立",
    score: 82,
    roi: "7.2%",
    price: 139,
    change: 8.5,
    percent: "6.51%",
    break5: "O",
    volume: "O",
    kdj: "超買 76, 63, 104",
    macd: "-",
    rsi: "73.33",
    eps: "3.59",
    yield: "3.96%",
    industry: "電子通路業",
    bias: "5.02%",
    gain10: "5.61%",
  },
  {
    id: "3028",
    name: "增你強",
    score: 78,
    roi: "6.5%",
    price: 56.6,
    change: 6.0,
    percent: "11.86%",
    break5: "O",
    volume: "-",
    kdj: "金叉 55, 44, 78",
    macd: "金叉",
    rsi: "66.81",
    eps: "1.21",
    yield: "4.08%",
    industry: "電子通路業",
    bias: "6.51%",
    gain10: "3.91%",
  },
  {
    id: "4938",
    name: "和碩",
    score: 78,
    roi: "6.5%",
    price: 78.1,
    change: 2.3,
    percent: "3.03%",
    break5: "O",
    volume: "-",
    kdj: "超買 72, 57, 101",
    macd: "-",
    rsi: "71.51",
    eps: "1.72",
    yield: "5.19%",
    industry: "電腦及週邊設備業",
    bias: "12.39%",
    gain10: "12.23%",
  },
  {
    id: "6147",
    name: "頎邦",
    score: 75,
    roi: "5.8%",
    price: 65.4,
    change: 6.6,
    percent: "11.22%",
    break5: "O",
    volume: "O",
    kdj: "超買 77, 60, 111",
    macd: "-",
    rsi: "74.51",
    eps: "2.8",
    yield: "4.71%",
    industry: "半導體業",
    bias: "19.26%",
    gain10: "23.63%",
  },
  {
    id: "2603",
    name: "長榮",
    score: 70,
    roi: "4.2%",
    price: 217,
    change: 9.5,
    percent: "4.58%",
    break5: "O",
    volume: "-",
    kdj: "-",
    macd: "-",
    rsi: "68.64",
    eps: "17.7",
    yield: "14.87%",
    industry: "航運業",
    bias: "9.06%",
    gain10: "8.52%",
  },
  {
    id: "2436",
    name: "偉詮電",
    score: 70,
    roi: "4.2%",
    price: 63.1,
    change: 2.3,
    percent: "3.78%",
    break5: "O",
    volume: "-",
    kdj: "超買 67, 50, 102",
    macd: "-",
    rsi: "66.13",
    eps: "0.29",
    yield: "3.17%",
    industry: "半導體業",
    bias: "5.02%",
    gain10: "5.61%",
  },
  {
    id: "3596",
    name: "智易",
    score: 70,
    roi: "4.2%",
    price: 210,
    change: 0.0,
    percent: "0.00%",
    break5: "-",
    volume: "-",
    kdj: "-",
    macd: "-",
    rsi: "71.84",
    eps: "6.1",
    yield: "4.32%",
    industry: "通信網路業",
    bias: "6.51%",
    gain10: "3.91%",
  },
  {
    id: "1582",
    name: "信錦",
    score: 65,
    roi: "2.1%",
    price: 94,
    change: 3.70,
    percent: "4.10%",
    break5: "O",
    volume: "-",
    kdj: "- 87, 83, 95",
    macd: "-",
    rsi: "80.5",
    eps: "1.89",
    yield: "3.46%",
    industry: "電子零組件業",
    bias: "6.2%",
    gain10: "3.39%",
  },
  {
    id: "3702",
    name: "大聯大",
    score: 60,
    roi: "1.5%",
    price: 90,
    change: 15.50,
    percent: "20.81%",
    break5: "O",
    volume: "O",
    kdj: "超買 93, 87, 105",
    macd: "-",
    rsi: "90.8",
    eps: "2.18",
    yield: "3.91%",
    industry: "電子通路業",
    bias: "29.8%",
    gain10: "33.33%",
  },
  {
    id: "2393",
    name: "億光",
    score: 55,
    roi: "0.8%",
    price: 67,
    change: 2.60,
    percent: "4.04%",
    break5: "O",
    volume: "-",
    kdj: "超買 86, 77, 106",
    macd: "-",
    rsi: "80.81",
    eps: "2.05",
    yield: "6.78%",
    industry: "光電業",
    bias: "9.06%",
    gain10: "8.52%",
  },
  {
    id: "2615",
    name: "萬海",
    score: 50,
    roi: "-2.5%",
    price: 79,
    change: 0.30,
    percent: "0.38%",
    break5: "-",
    volume: "-",
    kdj: "- 19, 26, 5",
    macd: "-",
    rsi: "51.27",
    eps: "3.5",
    yield: "3.8%",
    industry: "航運業",
    bias: "12.39%",
    gain10: "12.23%",
  },
  {
    id: "2412",
    name: "中華電",
    score: 50,
    roi: "-2.5%",
    price: 136,
    change: 0.00,
    percent: "0.00%",
    break5: "-",
    volume: "-",
    kdj: "- 46, 50, 39",
    macd: "-",
    rsi: "54.49",
    eps: "2.57",
    yield: "3.81%",
    industry: "通信網路業",
    bias: "7.49%",
    gain10: "2.1%",
  },
  {
    id: "3005",
    name: "神基",
    score: 50,
    roi: "-2.5%",
    price: 135.5,
    change: -0.50,
    percent: "0.37%",
    break5: "-",
    volume: "-",
    kdj: "- 88, 85, 93",
    macd: "-",
    rsi: "82.43",
    eps: "4.24",
    yield: "5.01%",
    industry: "電腦及週邊設備業",
    bias: "12.31%",
    gain10: "10.16%",
    dividendInfo: "8 天後除息",
    dividendAmount: "6.79元",
  },
  {
    id: "3231",
    name: "緯創",
    score: 50,
    roi: "-2.5%",
    price: 133.5,
    change: -0.50,
    percent: "0.37%",
    break5: "-",
    volume: "-",
    kdj: "- 65, 54, 87",
    macd: "-",
    rsi: "54.65",
    eps: "4.06",
    yield: "4.07%",
    industry: "電腦及週邊設備業",
    bias: "6.51%",
    gain10: "3.91%",
  },
  {
    id: "1722",
    name: "台肥",
    score: 45,
    roi: "-5.2%",
    price: 47.2,
    change: -0.30,
    percent: "0.63%",
    break5: "-",
    volume: "-",
    kdj: "- 30, 34, 21",
    macd: "-",
    rsi: "53.59",
    eps: "0.54",
    yield: "4.16%",
    industry: "化學工業",
    bias: "5.02%",
    gain10: "5.61%",
  },
  {
    id: "2006",
    name: "東和鋼鐵",
    score: 45,
    roi: "-5.2%",
    price: 76.7,
    change: -1.00,
    percent: "1.29%",
    break5: "-",
    volume: "-",
    kdj: "超買 43, 68, -8",
    macd: "-",
    rsi: "46.42",
    eps: "3.01",
    yield: "5.64%",
    industry: "鋼鐵工業",
    bias: "9.06%",
    gain10: "8.52%",
    dividendInfo: "3 天後除息",
    dividendAmount: "4.30元",
  },
  {
    id: "5371",
    name: "中光電",
    score: 30,
    roi: "-19.91%",
    price: 94.1,
    change: -0.4,
    percent: "0.42%",
    break5: "-",
    volume: "-",
    kdj: "45, 58",
    macd: "-",
    rsi: "50.39",
    eps: "3",
    yield: "1.59",
    industry: "光電業",
    bias: "12.39%",
    gain10: "12.23%",
  },
  {
    id: "6757",
    name: "台灣虎航",
    score: 35,
    roi: "-17.23%",
    price: 71.6,
    change: 1.0,
    percent: "1.42%",
    break5: "O",
    volume: "-",
    kdj: "84, 80",
    macd: "-",
    rsi: "82.26",
    eps: "3.26",
    yield: "8.57",
    industry: "航運業",
    bias: "7.49%",
    gain10: "2.1%",
  },
  {
    id: "4721",
    name: "美琪瑪",
    score: 40,
    roi: "-16.33%",
    price: 71.2,
    change: -0.6,
    percent: "0.84%",
    break5: "-",
    volume: "-",
    kdj: "16, 33",
    macd: "-",
    rsi: "26.66",
    eps: "1.1",
    yield: "1.81",
    industry: "化學工業",
    bias: "6.51%",
    gain10: "3.91%",
  },
  {
    id: "0000",
    name: "測試零%股",
    score: 0,
    roi: "0.0%",
    price: 100,
    change: 0,
    percent: "0.00%",
    break5: "-",
    volume: "-",
    kdj: "-",
    macd: "-",
    rsi: "50",
    eps: "1.5",
    yield: "3.5%",
    industry: "測試業",
    bias: "0%",
    gain10: "0%",
  },
  {
    id: "2489",
    name: "瑞軒",
    score: 28,
    price: 39.5,
    change: -0.4,
    percent: "1.00%",
    break5: "-",
    volume: "O",
    kdj: "死亡交叉 44, 44, 43",
    macd: "-",
    rsi: "57.55",
    eps: "0.32",
    yield: "3.01%",
    industry: "光電業",
    bias: "6.9%",
    gain10: "-9.09%",
  },
  {
    id: "2421",
    name: "建準",
    score: 25,
    price: 150,
    change: -5.5,
    percent: "3.54%",
    break5: "-",
    volume: "-",
    kdj: "69, 57, 92",
    macd: "-",
    rsi: "57.05",
    eps: "3.1",
    yield: "3.54%",
    industry: "電子零組件業",
    bias: "4.23%",
    gain10: "6.76%",
  },
  {
    id: "3005",
    name: "神基",
    score: 18,
    price: 137.5,
    change: -0.5,
    percent: "0.36%",
    break5: "-",
    volume: "-",
    kdj: "92, 89, 97",
    macd: "-",
    rsi: "82.29",
    eps: "4.24",
    yield: "4.92%",
    dividendAmount: "6.79元",
    dividendInfo: "7 天後除權息",
    industry: "電腦及週邊設備業",
    bias: "11.61%",
    gain10: "11.34%",
  },
  {
    id: "6197",
    name: "佳必琪",
    score: 17,
    price: 195,
    change: 3.5,
    percent: "1.83%",
    break5: "O",
    volume: "-",
    kdj: "超買 91, 82, 108",
    macd: "-",
    rsi: "84.53",
    eps: "3.72",
    yield: "3.66%",
    industry: "電子零組件業",
    bias: "23.59%",
    gain10: "28.71%",
  },
  {
    id: "3209",
    name: "全科",
    score: 14,
    price: 44.65,
    change: -0.15,
    percent: "0.33%",
    break5: "-",
    volume: "-",
    kdj: "超買 86, 75, 107",
    macd: "-",
    rsi: "83.68",
    eps: "0.3",
    yield: "5.58%",
    industry: "電子通路業",
    bias: "19.39%",
    gain10: "26.49%",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("stock-data-body");
  const stockCount = document.getElementById("stock-count");
  const desktopThemeToggle = document.getElementById('desktop-theme-toggle');
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
  const historyTracker = document.getElementById('history-tracker');
  const loadingOverlay = document.getElementById('loading-overlay');

  const hideLoader = () => {
    if (loadingOverlay) {
      loadingOverlay.classList.add('fade-out');
      setTimeout(() => {
        loadingOverlay.style.display = 'none';
      }, 500);
    }
  };

  const showLoader = () => {
    if (loadingOverlay) {
      loadingOverlay.style.display = 'flex';
      loadingOverlay.classList.remove('fade-out');
    }
  };

  // Generate 30-day history (With Swiper integration)
  const generateHistoryItems = () => {
    historyTracker.innerHTML = "";
    const today = new Date();
    const dayNames = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    
    // Update title
    document.querySelector('.calendar-nav-title').textContent = "策略歷史紀錄";

    for (let i = 13; i >= 0; i--) {
      const d = new Date();
      d.setDate(today.getDate() - i);
      
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      
      const dayWrapper = document.createElement('div');
      dayWrapper.className = `history-day ${i === 0 ? 'active' : ''}`;
      
      const name = document.createElement('span');
      name.className = 'day-name';
      name.textContent = dayNames[d.getDay()];
      
      const date = document.createElement('span');
      date.className = 'day-date';
      date.textContent = `${d.getMonth() + 1}/${d.getDate()}`;
      
      dayWrapper.appendChild(name);
      dayWrapper.appendChild(date);
      slide.appendChild(dayWrapper);
      
      dayWrapper.addEventListener('click', () => {
        document.querySelectorAll('.history-day').forEach(el => el.classList.remove('active'));
        dayWrapper.classList.add('active');
        // Update table section title date
        const tableTitleDate = document.getElementById('table-title-date');
        if (tableTitleDate) {
          tableTitleDate.textContent = d.toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
        }
        
        renderTable(displayData);
      });

      historyTracker.appendChild(slide);
    }

    // Initialize Swiper
    window.historySwiper = new Swiper('.calendar-container', {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      grabCursor: true,
      initialSlide: 13, // Start at today
      slideToClickedSlide: true,
    });

    // Forced scroll to end on init to be sure
    setTimeout(() => {
        if (window.historySwiper) window.historySwiper.slideTo(13, 300);
        
        // Dynamically update the main header and subtitle to today's date on load
        const todayStr = new Date().toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
        const mainHeader = document.querySelector('.title-area h2');
        if (mainHeader) {
          mainHeader.innerHTML = `<span class="title-emoji">📊</span> 每日策略選股`;
        }
        const tableTitleDate = document.getElementById('table-title-date');
        if (tableTitleDate) {
          tableTitleDate.textContent = todayStr;
        }
        renderTable(displayData);
        hideLoader(); // Hide loader after initial content is ready
    }, 1000);
  };

  generateHistoryItems();

  // Refresh Button Logic
  const refreshBtn = document.getElementById('refresh-btn');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      // Move swiper to end
      if (window.historySwiper) {
        window.historySwiper.slideTo(13, 400);
      }
      
      // Show loader effect
      showLoader();
      setTimeout(() => {
        renderTable(displayData);
        hideLoader();
      }, 1000);
    });
  }

  // Theme Management
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    updateToggleIcons('dark_mode');
  } else {
    document.body.classList.remove('dark-theme');
    updateToggleIcons('light_mode');
  }

  function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    updateToggleIcons(theme === 'light' ? 'light_mode' : 'dark_mode');
  }

  function updateToggleIcons(iconName) {
    if (desktopThemeToggle) desktopThemeToggle.innerHTML = `<span class="material-icons">${iconName}</span>`;
    if (mobileThemeToggle) mobileThemeToggle.innerHTML = `<span class="material-icons">${iconName}</span>`;
  }

  if (desktopThemeToggle) desktopThemeToggle.addEventListener('click', toggleTheme);
  if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);

  // Initial render handled by generator
  // renderTable(displayData); 

  let currentSort = {
    column: 'score',
    direction: 'desc'
  };

  const originalData = [...stockData];
  
  // Enhanced numeric parsing helper
  const parseVal = (v) => {
    if (typeof v === 'number') return v;
    if (typeof v === 'string') {
      const matched = v.match(/-?\d+(\.\d+)?/);
      return matched ? parseFloat(matched[0]) : 0;
    }
    return 0;
  };

  // Initial sort by score desc
  let displayData = [...stockData].sort((a, b) => parseVal(b.score) - parseVal(a.score));

  // Update initial UI for sorting
  const initialHeader = document.querySelector('th[data-sort="score"]');
  if (initialHeader) {
    initialHeader.classList.add('sort-desc');
    const icon = initialHeader.querySelector('.sort-icon');
    if (icon) icon.textContent = 'arrow_downward';
  }

  renderTable(displayData);

  // Sorting Logic
  document.querySelectorAll('th.sortable').forEach(header => {
    header.addEventListener('click', () => {
      const column = header.getAttribute('data-sort');
      
      // Cycle: default -> desc -> asc -> default
      if (currentSort.column !== column) {
        currentSort.column = column;
        currentSort.direction = 'desc';
      } else {
        if (currentSort.direction === 'desc') currentSort.direction = 'asc';
        else if (currentSort.direction === 'asc') currentSort.direction = 'default';
        else currentSort.direction = 'desc';
      }

      // Update UI Header classes
      document.querySelectorAll('th.sortable').forEach(h => {
        h.classList.remove('sort-asc', 'sort-desc');
        const icon = h.querySelector('.sort-icon');
        if (icon) icon.textContent = 'sort';
      });

      if (currentSort.direction !== 'default') {
        if (header) {
          header.classList.add(currentSort.direction === 'asc' ? 'sort-asc' : 'sort-desc');
          const icon = header.querySelector('.sort-icon');
          if (icon) icon.textContent = currentSort.direction === 'asc' ? 'arrow_upward' : 'arrow_downward';
        }
        
        displayData = [...stockData].sort((a, b) => {
          let valA = a[column];
          let valB = b[column];

          const numA = parseVal(valA);
          const numB = parseVal(valB);

          if (currentSort.direction === 'asc') return numA - numB;
          return numB - numA;
        });
      } else {
        displayData = [...originalData];
      }

      renderTable(displayData);
    });
  });

  function renderTable(data) {
    const table = document.getElementById("stock-table");
    // Clear all existing tbodies
    const existingTbodies = table.querySelectorAll('tbody');
    existingTbodies.forEach(tb => tb.remove());
    
    // Update count labels based on data length
    const tableCount = document.getElementById('table-stock-count');
    if (tableCount) {
      tableCount.textContent = data.length;
    }

    // Update Last Update Time
    const lastUpdateEl = document.getElementById('last-update-time');
    if (lastUpdateEl) {
      const now = new Date();
      const dateStr = now.toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' });
      const timeStr = now.toLocaleTimeString('zh-TW', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
      lastUpdateEl.textContent = `最後更新：${dateStr} ${timeStr}`;
    }

    data.forEach((stock) => {
      const tbody = document.createElement("tbody");
      tbody.className = "stock-group";
      const tr = document.createElement("tr");
      tr.className = "stock-row";

      // Format Change and Percentage
      let changeClass = "neutral";
      let changePrefix = "";
      if (stock.change > 0) {
        changeClass = "up";
        changePrefix = "▲ ";
      } else if (stock.change < 0) {
        changeClass = "down";
        changePrefix = "▼ ";
      }

      // Custom indicators styling - Removed badge-red to follow the "no other colors" rule
      // KDJ highlighting logic: Signal tags above values
      const kdjSignals = stock.kdj.match(/超買|金叉|死叉|死亡交叉|超賣/g) || [];
      const kdjValuesOnly = stock.kdj.replace(/超買|金叉|死叉|死亡交叉|超賣/g, "").trim();
      
      let kdjHtmlSnippet = "";
      if (kdjSignals.length > 0) {
        kdjHtmlSnippet += `<div class="kdj-container">`;
        kdjSignals.forEach(sig => {
           const sigClass = (sig.includes("死") || sig.includes("超賣")) ? "down" : "up";
           kdjHtmlSnippet += `<span class="${sigClass} signal-tag">${sig}</span>`;
        });
        kdjHtmlSnippet += `</div>`;
      }
      
      // Values below with existing logic (red >80, green <20)
      let valuesPart = kdjValuesOnly.replace(/-?\d+(\.\d+)?/g, (match) => {
        const val = parseFloat(match);
        if (val >= 80) return `<span class="up">${match}</span>`;
        if (val <= 20) return `<span class="down">${match}</span>`;
        return match;
      });
      
      const kdjHtml = `<div class="kdj-cell-wrapper">${kdjHtmlSnippet}<div class="kdj-values">${valuesPart}</div></div>`;

      // MACD highlighting logic: "金叉" red, "死叉"/"死亡交叉" green, numeric values <= 20 green
      let macdHtmlSnippet = stock.macd
        .replace("金叉", '<span class="up">金叉</span>')
        .replace("死亡交叉", '<span class="down">死亡交叉</span>')
        .replace("死叉", '<span class="down">死叉</span>');
      macdHtmlSnippet = macdHtmlSnippet.replace(/-?\d+(\.\d+)?/g, (match) => {
        return parseFloat(match) <= 20 ? `<span class="down">${match}</span>` : match;
      });
      const macdHtml = macdHtmlSnippet;

      const break5Html =
        stock.break5 === "O" ? `<span class="status-circle-red"></span>` : '<span class="muted-icon">－</span>';
      const volumeHtml =
        stock.volume === "O" ? `<span class="status-circle-red"></span>` : '<span class="muted-icon">－</span>';

      tr.innerHTML = `
                <td class="sticky-col-1">
                    <a href="https://www.wantgoo.com/stock/${stock.id}/technical-chart" target="_blank" class="stock-link">
                        <span class="stock-name">
                            ${stock.name}
                        </span>
                        <span class="stock-id">${stock.id}</span>
                    </a>
                    ${stock.dividendInfo ? `<div class="dividend-tag">${stock.dividendInfo}</div>` : ""}
                </td>
                <td class="text-center"><span class="confidence-score ${stock.score >= 75 ? 'up' : ''}">${stock.score}</span></td>
                <td class="price-text lg-text text-center ${changeClass}">${stock.price}</td>
                <td class="${changeClass} lg-text text-center">${changePrefix}${Math.abs(stock.change).toFixed(2)}<br><small>${stock.percent}</small></td>
                <td class="text-center">${break5Html}</td>
                <td class="text-center">${volumeHtml}</td>
                <td class="text-center">${kdjHtml}</td>
                <td class="text-center">${macdHtml}</td>
                <td class="text-center"><span class="${parseFloat(stock.rsi) >= 80 ? 'up' : (parseFloat(stock.rsi) <= 20 ? 'down' : '')}">${stock.rsi}</span></td>
                <td class="text-center">${stock.eps}</td>
                <td class="text-center">
                    <span class="${parseFloat(stock.yield) >= 5 ? "up" : ""}">${stock.yield}</span>
                    ${stock.dividendAmount ? `<br><small class="dividend-amount">${stock.dividendAmount}</small>` : ""}
                </td>
                <td><small>${stock.industry}</small></td>
                <td class="text-center"><span class="${parseFloat(stock.bias) >= 10 ? 'down' : ''}">${stock.bias}</span></td>
                <td class="${parseFloat(stock.gain10) >= 0 ? "up" : "down"} text-center">${stock.gain10}<br><small>10天</small></td>
                <td class="text-center">
                    <button class="add-btn">+</button>
                </td>
            `;
      tbody.appendChild(tr);
      table.appendChild(tbody);
    });
  }


  // Scroll Shadow Logic
  const scrollWrapper = document.querySelector('.scroll-wrapper');
  if (scrollWrapper) {
    scrollWrapper.addEventListener('scroll', () => {
      if (scrollWrapper.scrollLeft > 0) {
        scrollWrapper.classList.add('is-scrolled');
      } else {
        scrollWrapper.classList.remove('is-scrolled');
      }
    });
  }
});
