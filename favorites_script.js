const stockData = [
  {
    id: "2376",
    name: "技嘉",
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
    addedDays: 1,
    isNew: true,
  },
  {
    id: "8936",
    name: "國統",
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
    addedDays: 3,
    isNew: true,
  },
  {
    id: "2347",
    name: "聯強",
    roi: "12.8%",
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
    addedDays: 5,
    isNew: true,
  },
  {
    id: "5371",
    name: "中光電",
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
    addedDays: 5,
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("stock-data-body");
  const desktopThemeToggle = document.getElementById('desktop-theme-toggle');
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
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

  // Initial render for favorites page
  setTimeout(() => {
    renderTable(displayData);
    hideLoader();
  }, 1000);

  // Refresh Button Logic
  const refreshBtn = document.getElementById('refresh-btn');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
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

  let currentSort = {
    column: 'roi',
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

  // Initial sort by roi desc
  let displayData = [...stockData].sort((a, b) => parseVal(b.roi) - parseVal(a.roi));

  // Update initial UI for sorting
  const initialHeader = document.querySelector('th[data-sort="roi"]');
  if (initialHeader) {
    initialHeader.classList.add('sort-desc');
    const icon = initialHeader.querySelector('.sort-icon');
    if (icon) icon.textContent = 'arrow_downward';
  }

  // Final render handles initialization elsewhere? No, need to render here or wait for DOM.
  // The original has a setTimeout at line 98. I should update that or just render here.
  // Let's keep the renderTable call within the DOMContentLoaded but use displayData.

  // Sorting Logic
  document.querySelectorAll('th.sortable').forEach(header => {
    header.addEventListener('click', () => {
      const column = header.getAttribute('data-sort');
      
      if (currentSort.column !== column) {
        currentSort.column = column;
        currentSort.direction = 'desc';
      } else {
        if (currentSort.direction === 'desc') currentSort.direction = 'asc';
        else if (currentSort.direction === 'asc') currentSort.direction = 'default';
        else currentSort.direction = 'desc';
      }

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
    const existingTbodies = table.querySelectorAll('tbody');
    existingTbodies.forEach(tb => tb.remove());
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

      let changeClass = "neutral";
      let changePrefix = "";
      if (stock.change > 0) {
        changeClass = "up";
        changePrefix = "▲ ";
      } else if (stock.change < 0) {
        changeClass = "down";
        changePrefix = "▼ ";
      }

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

      const break5Html = stock.break5 === "O" ? `<span class="status-circle-red"></span>` : '<span class="muted-icon">－</span>';
      const volumeHtml = stock.volume === "O" ? `<span class="status-circle-red"></span>` : '<span class="muted-icon">－</span>';

      let roiVal = parseFloat(stock.roi);
      let roiClass = "neutral-roi";
      if (roiVal > 0) roiClass = "up";
      else if (roiVal < 0) roiClass = "down";

      tr.innerHTML = `
                <td class="sticky-col-1">
                    <a href="https://www.wantgoo.com/stock/${stock.id}/technical-chart" target="_blank" class="stock-link">
                        <span class="stock-name">${stock.name}</span>
                        <span class="stock-id">${stock.id}</span>
                    </a>
                </td>
                <td class="price-text lg-text text-center ${changeClass}">${stock.price}</td>
                <td class="${changeClass} lg-text text-center">${changePrefix}${Math.abs(stock.change).toFixed(2)}<br><small>${stock.percent}</small></td>
                <td class="text-center">${break5Html}</td>
                <td class="text-center">${volumeHtml}</td>
                <td class="text-center">${kdjHtml}</td>
                <td class="text-center">${macdHtmlSnippet}</td>
                <td class="text-center"><span class="${parseFloat(stock.rsi) >= 80 ? 'up' : (parseFloat(stock.rsi) <= 20 ? 'down' : '')}">${stock.rsi}</span></td>
                <td class="text-center">${stock.eps}</td>
                <td class="text-center">${stock.yield}</td>
                <td><small>${stock.industry}</small></td>
                <td class="text-center"><span class="price-text">${stock.addedDays}</span><small class="unit-label">天</small></td>
                <td class="text-center"><span class="price-text lg-text ${roiClass}">${stock.roi}</span></td>
                <td class="text-center">
                    <button class="add-btn delete-btn">
                      <span class="material-icons">delete</span>
                    </button>
                </td>
            `;
      tbody.appendChild(tr);
      table.appendChild(tbody);
    });
  }

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
