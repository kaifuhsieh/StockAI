const stockData = [
  {
    id: "6438",
    name: "迅得",
    score: 100,
    roi: "14.5%",
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
    stars: 5,
    reason: "迅得剛完成箱型整理後放量突破，收盤價接近當日最高點，量價齊揚，MA5/MA10/MA20發生黃金交叉且均線多頭排列。MACD、KD同步黃金交叉，RSI回升至 60-70區間，處於剛啟動階段，具備短線續攻潛力。"
  },
  {
    id: "6509",
    name: "聚和",
    score: 92,
    roi: "12.8%",
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
    stars: 5,
    reason: "聚和於近期呈現平台整理突破，量價齊揚。日K棒強勢收高，成交量爆量，並創5日新高。均線多頭排列與MA5/MA10/MA20齊聚黃金交叉，MACD與KD均見黃金交叉，觀察短線動能明顯；RSI進入70以上但尚未大幅背離，投機氣象濃厚，屬於起漲強勢型態。"
  },
  {
    id: "2855",
    name: "統一證",
    score: 90,
    roi: "10.5%",
    price: 32.05,
    change: 1.8,
    percent: "5.95%",
    break5: "O",
    volume: "O",
    kdj: "66, 52, 92",
    macd: "金叉",
    rsi: "66.45",
    eps: "-0.05",
    yield: "6.86%",
    industry: "金融保險業",
    bias: "6.2%",
    gain10: "3.39%",
    stars: 4,
    reason: "統一證短線平台壓力突破，帶量長紅，MA5/MA10/MA20均線糾結後上升，MACD、RSI齊升，MACD發黃金交叉。量能連續放大但未爆天量，屬主力吸籌+投機攻勢，尚處低檔起漲狀態。"
  },
  {
    id: "3010",
    name: "華立",
    score: 88,
    roi: "8.2%",
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
    bias: "12.28%",
    gain10: "15.35%",
    stars: 4,
    reason: "華立突破前高平台後連續強勢長紅，日K棒量價齊揚，屬多頭主力拉抬。MACD、KD逐步向上已進入超買但仍有進攻力，均線糾結後強勢揚升。融資預期增溫，投機氛圍濃厚，短線顯現軋空效應。"
  },
  {
    id: "3028",
    name: "增你強",
    score: 85,
    roi: "6.7%",
    price: 56.6,
    change: 6.0,
    percent: "11.86%",
    break5: "O",
    volume: "-",
    kdj: "金叉 55, 44, 77",
    macd: "金叉",
    rsi: "66.81",
    eps: "1.21",
    yield: "4.08%",
    industry: "電子通路業",
    bias: "6.51%",
    gain10: "3.91%",
    stars: 4,
    reason: "增你強剛完成低檔整理後放量突破，收盤價持穩，量能溫和放大。均線黃金交叉向上，MACD、KD亦顯露轉強訊號，整體架構偏向多方，適合波段持有。"
  },
  {
    id: "5371",
    name: "中光電",
    score: 45,
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
    bias: "2.85%",
    gain10: "-5.2%",
    stars: 3,
    reason: "中光電目前處於整理區間，短期動能較弱，ROI顯示持有天數較長。需觀察成交量是否放大以帶動波段漲勢，現階段建議保守看待。"
  },
  {
    id: "6757",
    name: "台灣虎航",
    score: 48,
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
    stars: 4,
    reason: "虎航雖然ROI為負，但近期收盤價有回升跡象，RSI進入超買區顯示短線動能。量價配合良好，且有突破5日高點表現，可關注後續反彈力道。"
  },
  {
    id: "4721",
    name: "美琪瑪",
    score: 50,
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
    stars: 3,
    reason: "美琪瑪近期修正壓力較大，RSI處於低檔區，雖然價格略有震盪，但整體趨勢尚未見明顯反轉訊號，建議待止跌回穩後再行評估。"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("stock-data-body");
  const stockCount = document.getElementById("stock-count");
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
          mainHeader.innerHTML = `<span class="title-emoji">📈</span> AI分析個股`;
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


  // Initial render handled by generator
  // renderTable(displayData); 

  // Initial render handled by generator
  // renderTable(displayData); 
  
  // Initial UI sorting
  const initialHeader = document.querySelector('th[data-sort="score"]');
  if (initialHeader) {
    initialHeader.classList.add('sort-desc');
    const icon = initialHeader.querySelector('.sort-icon');
    if (icon) icon.textContent = 'arrow_downward';
  }

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

      // KDJ highlighting logic
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

      // Stars logic
      let starsHtml = "";
      for (let i = 1; i <= 5; i++) {
        if (i <= stock.stars) {
          starsHtml += `<span class="material-icons">star</span>`;
        } else {
          starsHtml += `<span class="material-icons muted-star">star</span>`;
        }
      }

      tr.innerHTML = `
                <td rowspan="2" class="sticky-col-1">
                    <a href="https://www.wantgoo.com/stock/${stock.id}/technical-chart" target="_blank" class="stock-link">
                        <span class="stock-name">${stock.name}</span>
                        <span class="stock-id">${stock.id}</span>
                    </a>
                </td>
                <td class="text-center">
                    <span class="confidence-score ${stock.score >= 75 ? 'up' : ''}">${stock.score}</span>
                </td>
                <td class="price-text lg-text text-center ${changeClass}">${stock.price}</td>
                <td class="${changeClass} text-center">${changePrefix}${Math.abs(stock.change).toFixed(2)}<br><small>${stock.percent}</small></td>
                <td class="text-center">${break5Html}</td>
                <td class="text-center">${volumeHtml}</td>
                <td class="text-center">${kdjHtml}</td>
                <td class="text-center">${macdHtmlSnippet}</td>
                <td class="text-center"><span class="${parseFloat(stock.rsi) >= 80 ? 'up' : (parseFloat(stock.rsi) <= 20 ? 'down' : '')}">${stock.rsi}</span></td>
                <td class="text-center">${stock.eps}</td>
                <td class="text-center">${stock.yield}</td>
                <td><small>${stock.industry}</small></td>
                <td class="text-center"><span>${stock.bias}</span></td>
                <td class="${parseFloat(stock.gain10) >= 0 ? "up" : "down"} text-center">${stock.gain10}</td>
                <td class="text-center">
                    <button class="add-btn" data-id="${stock.id}" data-name="${stock.name}">+</button>
                </td>
            `;
      tbody.appendChild(tr);

      // Analysis Reason Row
      const analysisTr = document.createElement("tr");
      analysisTr.className = "analysis-row";
      analysisTr.innerHTML = `
                <td colspan="14" style="border-top: 1px solid var(--table-border);">
                    <div class="analysis-text" style="text-align:left;">
                        <div style="display:flex; align-items:center; gap:0.4rem; margin-bottom:4px;">
                            <strong>AI分析指數：</strong>
                            <div class="star-rating">${starsHtml}</div>
                        </div>
                        <span>${stock.reason}</span>
                    </div>
                </td>
            `;
      tbody.appendChild(analysisTr);
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

  // Favorite Modal Logic
  const favoriteModal = document.getElementById('favorite-modal');
  const modalMessage = document.getElementById('modal-message');
  const modalCancel = document.getElementById('modal-cancel');
  const modalConfirm = document.getElementById('modal-confirm');

  // We use event delegation for the add-btn clicks
  document.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('add-btn')) {
      const stockId = e.target.getAttribute('data-id');
      const stockName = e.target.getAttribute('data-name');
      
      modalMessage.innerHTML = `確定將 <a href="https://www.wantgoo.com/stock/${stockId}/technical-chart" target="_blank" class="modal-stock-link">${stockName}(${stockId})</a> 加入到我的自選個股？`;
      favoriteModal.classList.add('active');
    }
  });

  if (modalCancel) {
    modalCancel.addEventListener('click', () => {
      favoriteModal.classList.remove('active');
    });
  }

  if (modalConfirm) {
    modalConfirm.addEventListener('click', () => {
      favoriteModal.classList.remove('active');
      alert('已成功加入自選個股！');
    });
  }

  // Click outside to close
  favoriteModal.addEventListener('click', (e) => {
    if (e.target === favoriteModal) {
      favoriteModal.classList.remove('active');
    }
  });
});
