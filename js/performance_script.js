document.addEventListener("DOMContentLoaded", () => {
    // Hide loading screen after data is loaded
    setTimeout(() => {
      const loadingOverlay = document.getElementById("loading-overlay");
      if (loadingOverlay) {
        loadingOverlay.classList.add("fade-out");
        setTimeout(() => {
          loadingOverlay.style.display = "none";
        }, 500);
      }
    }, 800);
  
    const gainerData = [
      { name: "十銓", code: "4967", buyPrice: 85.7, closingPrice: 246.5, change: 22.00, changePercent: 9.80, breakthrough: "O", volume: "-", kd: "80, 62", macd: "-", rsi: 76.01, eps: 1.12, yield: 4.45, sector: "半導體業", bias: "22.31%", roi: "187.63%", days: 129 },
      { name: "凌航", code: "3135", buyPrice: 53.5, closingPrice: 130, change: 11.50, changePercent: 9.70, breakthrough: "O", volume: "O", kd: "59, 41", macd: "-", rsi: 67.3, eps: "-", yield: 3.97, sector: "半導體業", bias: "11.51%", roi: "142.99%", days: 92 },
      { name: "華東", code: "8110", buyPrice: 34.85, closingPrice: 79.3, change: 0.20, changePercent: 0.25, breakthrough: "-", volume: "-", kd: "44, 50", macd: "-", rsi: 55.3, eps: -0.44, yield: 0.25, sector: "半導體業", bias: "1.39%", roi: "127.55%", days: 59 },
      { name: "科嶠", code: "4542", buyPrice: 68.5, closingPrice: 147, change: 13.00, changePercent: 9.70, breakthrough: "O", volume: "-", kd: "88, 81", macd: "-", rsi: 88.97, eps: 1.5, yield: 0.75, sector: "電子零組件業", bias: "36.35%", roi: "114.6%", days: 115 },
      { name: "華電網", code: "6163", buyPrice: 31.35, closingPrice: 64.8, change: -2.50, changePercent: 3.71, breakthrough: "-", volume: "-", kd: "21, 37", macd: "-", rsi: 48.67, eps: 0.3, yield: 0.67, sector: "通信網路業", bias: "0.37%", roi: "106.7%", days: 54 }
    ];
  
    const loserData = [
      { name: "中光電", code: "5371", buyPrice: 117.5, closingPrice: 94.1, change: -0.40, changePercent: 0.42, breakthrough: "-", volume: "-", kd: "45, 58", macd: "-", rsi: 50.39, eps: 3, yield: 1.59, sector: "光電業", bias: "2.85%", roi: "-19.91%", days: 108 },
      { name: "台灣虎航", code: "6757", buyPrice: 86.5, closingPrice: 71.6, change: 1.00, changePercent: 1.42, breakthrough: "O", volume: "-", kd: "84, 80", macd: "-", rsi: 82.26, eps: 3.26, yield: 8.57, sector: "航運業", bias: "7.49%", roi: "-17.23%", days: 100 },
      { name: "美琪瑪", code: "4721", buyPrice: 85.1, closingPrice: 71.2, change: -0.60, changePercent: 0.84, breakthrough: "-", volume: "-", kd: "16, 33", macd: "-", rsi: 26.66, eps: 1.1, yield: 1.81, sector: "化學工業", bias: "-10.5%", roi: "-16.33%", days: 8 },
      { name: "威盛", code: "2388", buyPrice: 62.5, closingPrice: 54.3, change: -2.40, changePercent: 4.23, breakthrough: "-", volume: "-", kd: "61, 65", macd: "死亡交叉", rsi: 51.1, eps: -1.14, yield: 0.35, sector: "半導體業", bias: "2.74%", roi: "-13.12%", days: 38 },
      { name: "海華", code: "3694", buyPrice: 97, closingPrice: 84.3, change: -0.60, changePercent: 0.71, breakthrough: "-", volume: "-", kd: "12, 17", macd: "-", rsi: 41.93, eps: 1.84, yield: 1.54, sector: "通信網路業", bias: "-8.51%", roi: "-13.09%", days: 19 }
    ];
  
    function renderTable(tableId, data) {
      const table = document.getElementById(tableId);
      // Clear all existing tbodies
      const existingTbodies = table.querySelectorAll('tbody');
      existingTbodies.forEach(tb => tb.remove());
  
      data.forEach((stock) => {
        const tbody = document.createElement("tbody");
        tbody.className = "stock-group";
        const row = document.createElement("tr");
        row.className = "stock-row";
  
        let changeClass = "neutral";
        if (stock.change > 0) changeClass = "up";
        else if (stock.change < 0) changeClass = "down";

        let changePrefix = "";
        if (stock.change > 0) changePrefix = "▲";
        else if (stock.change < 0) changePrefix = "▼";
  
        // ROI classes
        const roiValue = parseFloat(stock.roi);
        const roiClass = roiValue >= 0 ? "up" : "down";
  
        row.innerHTML = `
          <td class="sticky-col-1">
            <a href="https://www.wantgoo.com/stock/${stock.code}/technical-chart" target="_blank" class="stock-link">
              <span class="stock-name" style="color: var(--stock-name); font-weight: 700; display: block; margin-bottom: 2px;">${stock.name}</span>
              <span class="stock-code" style="font-size: 0.8rem; color: var(--text-muted);">${stock.code}</span>
            </a>
          </td>
          <td class="price-text lg-text text-center">${stock.buyPrice}</td>
          <td class="price-text lg-text text-center ${changeClass}">${stock.closingPrice}</td>
          <td class="${changeClass} text-center">${changePrefix}${Math.abs(stock.change).toFixed(2)}<br><small>${Math.abs(stock.changePercent).toFixed(2)}%</small></td>
          <td class="text-center">
            ${stock.breakthrough === "O" ? '<span class="status-circle-red"></span>' : '<span class="muted-icon">－</span>'}
          </td>
          <td class="text-center">
             ${stock.volume === "O" ? '<span class="status-circle-red"></span>' : '<span class="muted-icon">－</span>'}
          </td>
          <td class="text-center">
            <div class="kdj-cell-wrapper">
              <span class="signal-tag ${stock.kd.includes('80') || stock.kd.includes('88') ? 'up' : ''}">
                ${stock.kd.includes('80') || stock.kd.includes('88') ? '超買' : '－'}
              </span>
              <span class="kdj-values">${stock.kd}</span>
            </div>
          </td>
          <td class="text-center">
            <span class="${stock.macd === '死亡交叉' ? 'down' : (stock.macd === '金叉' ? 'up' : 'muted-icon')}">
              ${stock.macd}
            </span>
          </td>
          <td class="text-center ${stock.rsi > 70 ? 'up' : (stock.rsi < 30 ? 'down' : '')}">${stock.rsi}</td>
          <td class="text-center">${stock.eps}</td>
          <td class="text-center ${parseFloat(stock.yield) > 5 ? 'up' : ''}">${stock.yield}%</td>
          <td>${stock.sector}</td>
          <td class="text-center ${parseFloat(stock.bias) > 10 ? 'up' : (parseFloat(stock.bias) < -5 ? 'down' : '')}">${stock.bias}</td>
          <td class="text-center"><span class="price-text">${stock.days}</span><small class="unit-label">天</small></td>
          <td class="text-center ${roiClass}">
            <span class="roi-val font-bold" style="font-size: 1.125rem;">${stock.roi}</span>
          </td>
        `;
        tbody.appendChild(row);
        table.appendChild(tbody);
      });
  
      // Update update times
      const now = new Date();
      const dateStr = now.toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' });
      const timeStr = now.toLocaleTimeString('zh-TW', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
      
      const timeEl = document.getElementById(tableId.replace('-table', '-update-time'));
      if (timeEl) timeEl.textContent = `最後更新：${dateStr} ${timeStr}`;
    }
  
    renderTable("gainers-table", gainerData);
    renderTable("losers-table", loserData);
  
    // Update summary count
    document.getElementById('summary-total-count').textContent = "65";
    document.getElementById('perf-count').textContent = "65 筆";

    // Theme toggling (Mirroring script.js)
    const desktopThemeToggle = document.getElementById('desktop-theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    const body = document.body;
  
    function toggleTheme() {
      body.classList.toggle('dark-theme');
      const isDark = body.classList.contains('dark-theme');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      
      const icons = [desktopThemeToggle?.querySelector('.material-icons'), mobileThemeToggle?.querySelector('.material-icons')];
      icons.forEach(icon => {
        if (icon) icon.textContent = isDark ? 'light_mode' : 'dark_mode';
      });
    }
  
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark-theme');
      if (desktopThemeToggle) desktopThemeToggle.querySelector('.material-icons').textContent = 'light_mode';
      if (mobileThemeToggle) mobileThemeToggle.querySelector('.material-icons').textContent = 'light_mode';
    }
  
    if (desktopThemeToggle) desktopThemeToggle.addEventListener('click', toggleTheme);
    if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);
  
    // Sync refresh button
    document.getElementById('refresh-btn').addEventListener('click', () => {
        const loadingOverlay = document.getElementById("loading-overlay");
        loadingOverlay.style.display = "flex";
        loadingOverlay.classList.remove("fade-out");
        
        setTimeout(() => {
            renderTable("gainers-table", gainerData);
            renderTable("losers-table", loserData);
            
            loadingOverlay.classList.add("fade-out");
            setTimeout(() => {
                loadingOverlay.style.display = "none";
            }, 500);
        }, 1000);
    });
});
