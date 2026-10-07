const viewMeta = {
  today: { eyebrow: "10 月 7 日，星期三", title: "今天也要好好长大" },
  growth: { eyebrow: "成长记录", title: "团子的成长时间线" },
  health: { eyebrow: "健康档案", title: "重要健康节点，清楚掌握" },
  friends: { eyebrow: "同城宠友", title: "发现附近的散步搭子" },
  community: { eyebrow: "宠物社区", title: "看看附近宠友的新鲜事" },
};

const recordConfig = {
  weight: {
    kicker: "健康记录",
    title: "记录体重",
    fields: `
      <div class="dynamic-grid">
        <label>
          <span class="field-label">体重（kg）</span>
          <input name="weight" type="number" min="0.1" max="120" step="0.1" value="11.8" required />
        </label>
        <label>
          <span class="field-label">测量时间</span>
          <input name="date" type="date" value="2026-10-07" required />
        </label>
      </div>
      <p class="dynamic-note">建议在每天相近时间、相同状态下测量，曲线会更容易比较。</p>
    `,
  },
  vaccine: {
    kicker: "健康记录",
    title: "添加疫苗记录",
    fields: `
      <div class="dynamic-grid">
        <label>
          <span class="field-label">疫苗类型</span>
          <input name="vaccine" value="狂犬疫苗" required />
        </label>
        <label>
          <span class="field-label">接种日期</span>
          <input name="date" type="date" value="2026-10-07" required />
        </label>
        <label>
          <span class="field-label">接种医院</span>
          <input name="hospital" placeholder="例如：上海市宠物中心医院" />
        </label>
        <label>
          <span class="field-label">下一针日期</span>
          <input name="nextDate" type="date" value="2027-10-07" />
        </label>
      </div>
    `,
  },
  deworm: {
    kicker: "健康记录",
    title: "记录驱虫",
    fields: `
      <div class="dynamic-grid">
        <label>
          <span class="field-label">驱虫类型</span>
          <select name="dewormType">
            <option>体内外同驱</option>
            <option>体内驱虫</option>
            <option>体外驱虫</option>
          </select>
        </label>
        <label>
          <span class="field-label">完成日期</span>
          <input name="date" type="date" value="2026-10-07" required />
        </label>
        <label>
          <span class="field-label">使用产品</span>
          <input name="product" placeholder="请输入产品名称" />
        </label>
        <label>
          <span class="field-label">下次提醒</span>
          <input name="nextDate" type="date" value="2027-01-07" />
        </label>
      </div>
    `,
  },
  diary: {
    kicker: "成长记录",
    title: "写一篇成长日记",
    fields: `
      <label>
        <span class="field-label">这一刻的标题</span>
        <input name="title" placeholder="例如：第一次去海边" required />
      </label>
      <div class="dynamic-grid">
        <label>
          <span class="field-label">日期</span>
          <input name="date" type="date" value="2026-10-07" required />
        </label>
        <label>
          <span class="field-label">记录分类</span>
          <select name="category">
            <option>日常</option>
            <option>户外</option>
            <option>技能</option>
            <option>饮食</option>
            <option>健康</option>
          </select>
        </label>
      </div>
    `,
  },
  vet: {
    kicker: "健康档案",
    title: "添加就诊记录",
    fields: `
      <label>
        <span class="field-label">就诊原因</span>
        <input name="reason" placeholder="例如：年度体检" required />
      </label>
      <div class="dynamic-grid">
        <label>
          <span class="field-label">医院</span>
          <input name="hospital" placeholder="医院名称" required />
        </label>
        <label>
          <span class="field-label">就诊日期</span>
          <input name="date" type="date" value="2026-10-07" required />
        </label>
      </div>
    `,
  },
  meetup: {
    kicker: "同城宠友",
    title: "发布散步邀约",
    fields: `
      <div class="dynamic-grid">
        <label>
          <span class="field-label">活动日期</span>
          <input name="date" type="date" value="2026-10-11" required />
        </label>
        <label>
          <span class="field-label">时间</span>
          <input name="time" type="time" value="18:30" required />
        </label>
        <label>
          <span class="field-label">集合区域</span>
          <input name="area" value="徐家汇公园 3 号门" required />
        </label>
        <label>
          <span class="field-label">适合宠友</span>
          <select name="petType">
            <option>中小型犬</option>
            <option>所有犬种</option>
            <option>猫咪线下交流</option>
          </select>
        </label>
      </div>
      <p class="dynamic-note">邀约发布后，只会向同城匹配宠友展示 500 米模糊位置。</p>
    `,
  },
};

const weightData = {
  30: {
    values: [11.3, 11.4, 11.5, 11.6, 11.5, 11.7, 11.8],
    labels: ["9/8", "9/13", "9/18", "9/23", "9/28", "10/3", "10/7"],
  },
  90: {
    values: [10.4, 10.6, 10.5, 10.9, 11.1, 10.9, 11.3, 11.5, 11.4, 11.6, 11.7, 11.8],
    labels: ["7/10", "7/18", "7/26", "8/3", "8/11", "8/19", "8/27", "9/4", "9/12", "9/20", "9/28", "10/7"],
  },
  365: {
    values: [8.2, 8.8, 9.1, 9.6, 10.1, 10.6, 10.9, 11.1, 11.3, 11.5, 11.7, 11.8],
    labels: ["11月", "12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月"],
  },
};

const storedMessages = {
  weight: "体重记录已保存，趋势曲线已更新",
  vaccine: "疫苗记录已保存，下一针提醒已创建",
  deworm: "驱虫记录已保存，下次提醒已设置",
  diary: "成长日记已放入时间线",
  vet: "就诊记录已加入健康档案",
  meetup: "散步邀约已发布，正在匹配附近宠友",
};

const els = {
  pageEyebrow: document.querySelector("#pageEyebrow"),
  pageTitle: document.querySelector("#pageTitle"),
  globalSearch: document.querySelector("#globalSearch"),
  recordDialog: document.querySelector("#recordDialog"),
  recordForm: document.querySelector("#recordForm"),
  recordKicker: document.querySelector("#recordKicker"),
  recordTitle: document.querySelector("#recordTitle"),
  recordType: document.querySelector("#recordType"),
  dynamicFields: document.querySelector("#dynamicFields"),
  postDialog: document.querySelector("#postDialog"),
  postForm: document.querySelector("#postForm"),
  petDialog: document.querySelector("#petDialog"),
  petForm: document.querySelector("#petForm"),
  communityFeed: document.querySelector("#communityFeed"),
  homePostGrid: document.querySelector("#homePostGrid"),
  toast: document.querySelector("#toast"),
  chart: document.querySelector("#weightChart"),
  tooltip: document.querySelector("#chartTooltip"),
  weightCurrent: document.querySelector("#weightCurrent"),
};

let activeView = "today";
let activeRange = 90;
let toastTimer;

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons({
      attrs: {
        "aria-hidden": "true",
      },
    });
  }
}

function setView(view) {
  if (!viewMeta[view]) return;
  activeView = view;
  document.querySelectorAll(".view").forEach((page) => {
    page.classList.toggle("active", page.dataset.page === view);
  });
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view && !button.classList.contains("text-btn"));
  });
  els.pageEyebrow.textContent = viewMeta[view].eyebrow;
  els.pageTitle.textContent = viewMeta[view].title;

  if (view === "today") {
    renderChart(activeRange);
  }

  const isMobile = window.matchMedia("(max-width: 820px)").matches;
  if (!isMobile) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
}

function renderWeeklyDays() {
  const holder = document.querySelector("#weeklyDays");
  if (!holder) return;
  const completed = [true, true, true, true, true, true, false];
  holder.innerHTML = completed.map((done) => `<span class="${done ? "done" : ""}"></span>`).join("");
}

function renderChart(range = 90) {
  const data = weightData[range];
  if (!data || !els.chart) return;

  const width = 720;
  const height = 220;
  const padX = 18;
  const padTop = 24;
  const padBottom = 18;
  const min = Math.min(...data.values) - 0.25;
  const max = Math.max(...data.values) + 0.25;
  const points = data.values.map((value, index) => {
    const x = padX + (index / (data.values.length - 1)) * (width - padX * 2);
    const y = padTop + ((max - value) / (max - min)) * (height - padTop - padBottom);
    return { x, y, value, label: data.labels[index] };
  });

  const linePath = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
    .join(" ");
  const areaPath = `${linePath} L ${points.at(-1).x.toFixed(1)} ${height - padBottom} L ${points[0].x.toFixed(1)} ${
    height - padBottom
  } Z`;
  const grid = [0, 1, 2, 3]
    .map((index) => {
      const y = padTop + (index / 3) * (height - padTop - padBottom);
      return `<line x1="${padX}" y1="${y}" x2="${width - padX}" y2="${y}" stroke="#e6eae5" stroke-width="1" stroke-dasharray="4 7" />`;
    })
    .join("");
  const dots = points
    .map(
      (point, index) => `
        <circle class="chart-dot" cx="${point.x}" cy="${point.y}" r="${index === points.length - 1 ? 6 : 4}"
          fill="${index === points.length - 1 ? "#f16752" : "#fff"}"
          stroke="${index === points.length - 1 ? "#f16752" : "#2f6d4f"}"
          stroke-width="3"
          data-x="${point.x}"
          data-y="${point.y}"
          data-label="${point.label}"
          data-value="${point.value}" />
      `,
    )
    .join("");

  els.chart.innerHTML = `
    <defs>
      <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#2f6d4f" stop-opacity="0.23" />
        <stop offset="100%" stop-color="#2f6d4f" stop-opacity="0" />
      </linearGradient>
    </defs>
    ${grid}
    <path d="${areaPath}" fill="url(#areaFill)" />
    <path d="${linePath}" fill="none" stroke="#2f6d4f" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    ${dots}
  `;

  els.chart.querySelectorAll(".chart-dot").forEach((dot) => {
    dot.addEventListener("mouseenter", () => showChartTip(dot));
    dot.addEventListener("mouseleave", hideChartTip);
    dot.addEventListener("focus", () => showChartTip(dot));
    dot.addEventListener("blur", hideChartTip);
  });

  const currentValue = data.values.at(-1);
  els.weightCurrent.textContent = currentValue.toFixed(1);
}

function showChartTip(dot) {
  const wrap = els.chart.parentElement;
  const rect = wrap.getBoundingClientRect();
  const x = (Number(dot.dataset.x) / 720) * rect.width;
  const y = (Number(dot.dataset.y) / 220) * rect.height;
  els.tooltip.hidden = false;
  els.tooltip.textContent = `${dot.dataset.label} · ${dot.dataset.value} kg`;
  els.tooltip.style.left = `${x}px`;
  els.tooltip.style.top = `${y}px`;
}

function hideChartTip() {
  els.tooltip.hidden = true;
}

function openRecordDialog(type) {
  const config = recordConfig[type] || recordConfig.diary;
  els.recordType.value = type;
  els.recordKicker.textContent = config.kicker;
  els.recordTitle.textContent = config.title;
  els.dynamicFields.innerHTML = config.fields;
  document.querySelector("#recordNote").value = "";
  els.recordDialog.showModal();
  window.setTimeout(() => {
    els.recordDialog.querySelector("input, select, textarea")?.focus();
  }, 50);
}

function closeDialog(dialog) {
  if (dialog?.open) dialog.close();
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  els.toast.textContent = message;
  els.toast.classList.add("show");
  toastTimer = window.setTimeout(() => els.toast.classList.remove("show"), 2800);
}

function weightBadge(value) {
  return Number(value).toFixed(1);
}

function updateWeightSummary(weight) {
  if (!Number.isFinite(Number(weight))) return;
  const current = Number(weight);
  weightData[30].values[weightData[30].values.length - 1] = current;
  weightData[90].values[weightData[90].values.length - 1] = current;
  weightData[365].values[weightData[365].values.length - 1] = current;
  els.weightCurrent.textContent = weightBadge(current);
  document.querySelector(".pet-meta span:nth-child(2)").textContent = `${weightBadge(current)} kg`;
  renderChart(activeRange);
}

function createDiaryItem(formData) {
  const title = formData.get("title") || "今天的新记录";
  const date = formData.get("date") || "2026-10-07";
  const category = formData.get("category") || "日常";
  const note = formData.get("note") || "这一天的细节被好好保存下来了。";
  const dateObj = new Date(`${date}T12:00:00`);
  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = dateObj.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const article = document.createElement("article");
  article.className = "timeline-item";
  article.innerHTML = `
    <div class="timeline-date"><strong>${day}</strong><span>${month}</span></div>
    <div class="timeline-photo soft"><span class="memory-emoji" aria-hidden="true">🐾</span></div>
    <div class="timeline-copy">
      <span class="tag green">${category}</span>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(note)}</p>
      <small>刚刚添加 · 团子的成长时间线</small>
    </div>
  `;
  document.querySelector("#homeTimeline")?.prepend(article);
  document.querySelector("#growthTimeline")?.prepend(article.cloneNode(true));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function createCommunityPost(formData) {
  const title = escapeHtml(formData.get("title"));
  const content = escapeHtml(formData.get("content"));
  const topic = escapeHtml(formData.get("topic") || "# 日常");
  const post = document.createElement("article");
  post.className = "feed-post";
  post.innerHTML = `
    <div class="feed-author">
      <span class="avatar avatar-user">雨</span>
      <span><strong>小雨和团子</strong><small>上海徐汇 · 刚刚发布</small></span>
      <button class="quiet-btn" type="button" aria-label="更多操作"><i data-lucide="ellipsis" aria-hidden="true"></i></button>
    </div>
    <div class="feed-copy">
      <span class="tag green">${topic}</span>
      <h3>${title}</h3>
      <p>${content}</p>
    </div>
    <div class="post-actions roomy">
      <button class="like-btn" type="button"><i data-lucide="heart" aria-hidden="true"></i><span>0</span></button>
      <button class="quiet-btn" type="button"><i data-lucide="message-circle" aria-hidden="true"></i><span>0</span></button>
      <button class="quiet-btn" type="button"><i data-lucide="send" aria-hidden="true"></i><span>分享</span></button>
      <button class="quiet-btn bookmark-action" type="button" aria-label="收藏"><i data-lucide="bookmark" aria-hidden="true"></i></button>
    </div>
  `;
  els.communityFeed.prepend(post);
  refreshIcons();
  bindPostActions(els.communityFeed);
}

function bindPostActions(scope = document) {
  scope.querySelectorAll(".like-btn").forEach((button) => {
    if (button.dataset.bound) return;
    button.dataset.bound = "true";
    button.addEventListener("click", () => {
      const count = button.querySelector("span");
      const liked = button.classList.toggle("liked");
      if (count) count.textContent = Math.max(0, Number(count.textContent || 0) + (liked ? 1 : -1));
    });
  });

  scope.querySelectorAll(".bookmark-action").forEach((button) => {
    if (button.dataset.bound) return;
    button.dataset.bound = "true";
    button.addEventListener("click", () => {
      const active = button.classList.toggle("active");
      showToast(active ? "已收藏这条内容" : "已取消收藏");
    });
  });
}

function applyStoredPet() {
  try {
    const pet = JSON.parse(localStorage.getItem("pawprint-pet") || "null");
    if (!pet) return;
    if (pet.petName) {
      document.querySelector(".pet-title-row h2").childNodes[0].textContent = `${pet.petName} `;
    }
    if (pet.breed) {
      document.querySelector(".pet-meta span:nth-child(1)").textContent = pet.breed;
    }
    if (pet.weight) updateWeightSummary(pet.weight);
  } catch {
    localStorage.removeItem("pawprint-pet");
  }
}

function bindEvents() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  document.querySelectorAll("[data-record]").forEach((button) => {
    button.addEventListener("click", () => openRecordDialog(button.dataset.record));
  });

  document.querySelectorAll("[data-open-post]").forEach((button) => {
    button.addEventListener("click", () => els.postDialog.showModal());
  });

  document.querySelectorAll("[data-open-pet]").forEach((button) => {
    button.addEventListener("click", () => els.petDialog.showModal());
  });

  document.querySelectorAll("[data-close-dialog]").forEach((button) => {
    button.addEventListener("click", () => closeDialog(button.closest("dialog")));
  });

  document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeDialog(dialog);
    });
  });

  document.querySelectorAll("[data-range]").forEach((button) => {
    button.addEventListener("click", () => {
      activeRange = Number(button.dataset.range);
      document.querySelectorAll("[data-range]").forEach((item) => item.classList.toggle("active", item === button));
      renderChart(activeRange);
    });
  });

  document.querySelectorAll(".filter-chip").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-chip").forEach((item) => item.classList.toggle("active", item === button));
    });
  });

  document.querySelectorAll(".feed-tabs button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".feed-tabs button").forEach((item) => item.classList.toggle("active", item === button));
      showToast(`已切换到「${button.textContent.trim()}」内容`);
    });
  });

  els.recordForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(els.recordForm);
    const type = formData.get("type");
    if (type === "weight") updateWeightSummary(formData.get("weight"));
    if (type === "diary") createDiaryItem(formData);
    closeDialog(els.recordDialog);
    showToast(storedMessages[type] || "记录已保存");
    els.recordForm.reset();
  });

  els.postForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(els.postForm);
    createCommunityPost(formData);
    closeDialog(els.postDialog);
    els.postForm.reset();
    setView("community");
    showToast("已发布到宠物社区");
  });

  els.petForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(els.petForm);
    const pet = Object.fromEntries(formData.entries());
    localStorage.setItem("pawprint-pet", JSON.stringify(pet));
    applyStoredPet();
    closeDialog(els.petDialog);
    showToast("团子的资料已更新");
  });

  document.querySelectorAll(".upload-placeholder").forEach((upload) => {
    upload.addEventListener("click", () => showToast("照片上传将在正式版本接入相册"));
  });

  document.querySelectorAll(".reminder-options button").forEach((button) => {
    button.addEventListener("click", () => showToast("提醒设置已打开"));
  });

  document.querySelector("#notifyBtn")?.addEventListener("click", () => showToast("有 2 条健康提醒需要关注"));

  els.globalSearch.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || !els.globalSearch.value.trim()) return;
    const query = els.globalSearch.value.trim();
    const target = query.includes("宠友") || query.includes("附近") ? "friends" : query.includes("健康") || query.includes("疫苗") ? "health" : "community";
    setView(target);
    const card = document.querySelector(`[data-page="${target}"] .card, [data-page="${target}"] .feed-post`);
    if (card) {
      card.classList.add("search-highlight");
      window.setTimeout(() => card.classList.remove("search-highlight"), 1400);
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });

  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      els.globalSearch.focus();
    }
  });

  bindPostActions();
}

function init() {
  renderWeeklyDays();
  renderChart(activeRange);
  applyStoredPet();
  bindEvents();
  refreshIcons();
}

init();
