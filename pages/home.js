
const DATABASE_KEY = "restart-data-v1";

const DESTINATIONS = [
    {
        id: "study",
        icon: "◷",
        className: "study",
        en: "Study Room",
        vi: "Phòng học tập",
        subEn: "Focus sessions and study time",
        subVi: "Phiên tập trung và thời gian học"
    },
    {
        id: "sleep",
        icon: "☾",
        className: "sleep",
        en: "Sleep Tracker",
        vi: "Theo dõi giấc ngủ",
        subEn: "Your rest and sleep rhythm",
        subVi: "Theo dõi nhịp nghỉ ngơi"
    },
    {
        id: "journal",
        icon: "✎",
        className: "journal",
        en: "Daily Journal",
        vi: "Nhật ký hằng ngày",
        subEn: "A place for daily check-ins",
        subVi: "Ghi lại điều đang diễn ra"
    },
    {
        id: "academic",
        icon: "▤",
        className: "academic",
        en: "Academic Assistant",
        vi: "Trợ lý học tập",
        subEn: "Assignments, exams and goals",
        subVi: "Bài tập, kỳ thi và mục tiêu"
    },
    {
        id: "insights",
        icon: "✧",
        className: "insights",
        en: "AI Insights",
        vi: "Phân tích thông minh",
        subEn: "Patterns across your records",
        subVi: "Khám phá dữ liệu của bạn"
    },
    {
        id: "sync",
        icon: "☁",
        className: "sync",
        en: "Cloud Sync",
        vi: "Đồng bộ đám mây",
        subEn: "Keep your devices in sync",
        subVi: "Đồng bộ giữa các thiết bị"
    },
    {
        id: "analytics",
        icon: "▥",
        className: "analytics",
        en: "Analytics",
        vi: "Phân tích dữ liệu",
        subEn: "See your progress over time",
        subVi: "Theo dõi tiến trình theo thời gian"
    },
    {
        id: "calendar",
        icon: "▦",
        className: "calendar",
        en: "Calendar",
        vi: "Lịch",
        subEn: "Activities and milestones",
        subVi: "Hoạt động và cột mốc"
    },
    {
        id: "settings",
        icon: "⚙",
        className: "settings",
        en: "Settings",
        vi: "Cài đặt",
        subEn: "Make RE:START yours",
        subVi: "Tùy chỉnh RE:START"
    }
];

// ==========================================
// LANGUAGE
// ==========================================

function getLanguage() {
    try {
        const data = JSON.parse(
            localStorage.getItem(DATABASE_KEY) || "{}"
        );

        return ["en", "vi", "bi"].includes(
            data?.settings?.language
        )
            ? data.settings.language
            : "en";

    } catch {
        return "en";
    }
}

function t(en, vi, language = getLanguage()) {
    if (language === "vi") return vi;
    if (language === "bi") return `${en} · ${vi}`;

    return en;
}

// ==========================================
// RENDER NAVIGATION NODE
// ==========================================

function renderNode(item, index, language) {
    return `
        <a
            class="home-orbit-node home-node--${item.className}"
            href="#/${item.id}"
            style="--node-index:${index}"
            aria-label="${t(item.en, item.vi, language)}"
            title="${t(item.en, item.vi, language)}"
        >

            <span class="home-node-icon" aria-hidden="true">
                ${item.icon}
            </span>

            <span class="home-node-title">
                ${t(item.en, item.vi, language)}
            </span>

            <span class="home-node-description">
                ${t(item.subEn, item.subVi, language)}
            </span>

            <span class="home-node-arrow" aria-hidden="true">
                ↗
            </span>

        </a>
    `;
}

// ==========================================
// HOME PAGE
// ==========================================

export function renderHomePage() {
    const language = getLanguage();

    const nodes = DESTINATIONS
        .map((item, index) =>
            renderNode(item, index, language)
        )
        .join("");

    return `
        <section id="restart-home-page">

            <header class="home-page-heading home-desktop-heading">

                <div>
                    <h1>
                        ${t(
                            "Everything starts here.",
                            "Mọi thứ bắt đầu từ đây.",
                            language
                        )}
                    </h1>

                    <p>
                        ${t(
                            "Choose a space and pick up where you left off.",
                            "Chọn một khu vực và tiếp tục hành trình của bạn.",
                            language
                        )}
                    </p>
                </div>

                <div class="home-page-count">
                    <strong>09</strong>

                    <span>
                        ${t("WORKSPACES", "KHU VỰC", language)}
                    </span>
                </div>

            </header>

            <div class="home-orbit-wrap home-desktop-orbit">

                <div class="home-orbit-stage">

                    <div
                        class="home-orbit-track home-orbit-track-outer"
                        aria-hidden="true"
                    ></div>

                    <div
                        class="home-orbit-track home-orbit-track-inner"
                        aria-hidden="true"
                    ></div>

                    <div
                        class="home-orbit-glow home-orbit-glow-one"
                        aria-hidden="true"
                    ></div>

                    <div
                        class="home-orbit-glow home-orbit-glow-two"
                        aria-hidden="true"
                    ></div>

                    <div class="home-orbit-center">

                        <div
                            class="home-center-halo"
                            aria-hidden="true"
                        ></div>

                        <div class="home-center-mark">
                            <span>R</span>
                        </div>

                        <strong>RE:START</strong>

                        <span class="home-center-caption">
                            ${t(
                                "STUDY · LIFE · GROWTH",
                                "HỌC TẬP · CUỘC SỐNG · PHÁT TRIỂN",
                                language
                            )}
                        </span>

                        <span class="home-center-status">
                            <i aria-hidden="true"></i>

                            ${t(
                                "YOUR SPACE IS READY",
                                "KHÔNG GIAN ĐÃ SẴN SÀNG",
                                language
                            )}
                        </span>

                    </div>

                    ${nodes}

                    <div
                        class="home-orbit-caption"
                        aria-hidden="true"
                    >
                        <span></span>

                        ${t(
                            "A connected space for your everyday progress",
                            "Một không gian kết nối hành trình mỗi ngày",
                            language
                        )}

                        <span></span>
                    </div>

                </div>

            </div>

            <footer class="home-page-footer home-desktop-footer">

                <span>
                    ${t(
                        "Select any circle to open a workspace.",
                        "Chọn một vòng tròn để mở khu vực tương ứng.",
                        language
                    )}
                </span>

                <span class="home-footer-hint">
                    RE:START · ${t(
                        "YOUR PACE, YOUR SPACE",
                        "NHỊP ĐIỆU CỦA RIÊNG BẠN",
                        language
                    )}
                </span>

            </footer>

            <div class="home-mobile-layout">
                <header class="home-mobile-hero">
                    <div class="home-mobile-brand">
                        <span class="home-mobile-mark">R</span>
                        <span class="home-mobile-brand-name">RE:START</span>
                        <span class="home-mobile-brand-line"></span>
                        <span class="home-mobile-version">01 / 09</span>
                    </div>

                    <h1>${t("Everything starts here.", "Mọi thứ bắt đầu từ đây.", language)}</h1>
                    <p>${t("Choose a space and pick up where you left off.", "Chọn một khu vực và tiếp tục hành trình của bạn.", language)}</p>

                    <div class="home-mobile-orbit-decoration" aria-hidden="true">
                        <span class="home-mobile-orbit orbit-a"></span>
                        <span class="home-mobile-orbit orbit-b"></span>
                        <span class="home-mobile-orbit-core">R</span>
                        <i class="home-mobile-orbit-dot dot-a"></i>
                        <i class="home-mobile-orbit-dot dot-b"></i>
                    </div>
                </header>

                <div class="home-mobile-section-heading">
                    <div>
                        <span>${t("YOUR MODULES", "CÁC KHU VỰC", language)}</span>
                        <h2>${t("Explore RE:START", "Khám phá RE:START", language)}</h2>
                    </div>
                    <span class="home-mobile-module-count">09 ${t("MODULES", "MỤC", language)}</span>
                </div>

                <nav class="home-mobile-grid" aria-label="${t("RE:START sections", "Các khu vực RE:START", language)}">
                    ${DESTINATIONS.map((item, index) => `
                        <a class="home-mobile-card home-mobile-card--${item.className}" href="#/${item.id}" style="--mobile-index:${index}">
                            <span class="home-mobile-card-top">
                                <span class="home-mobile-card-icon" aria-hidden="true">${item.icon}</span>
                                <span class="home-mobile-card-index">${String(index + 1).padStart(2, "0")}</span>
                            </span>
                            <strong>${t(item.en, item.vi, language)}</strong>
                            <span class="home-mobile-card-description">${t(item.subEn, item.subVi, language)}</span>
                            <span class="home-mobile-card-arrow" aria-hidden="true">↗</span>
                        </a>
                    `).join("")}
                </nav>

                <footer class="home-mobile-footer">
                    <span class="home-mobile-footer-line"></span>
                    <span>RE:START · ${t("YOUR PACE, YOUR SPACE", "NHỊP ĐIỆU CỦA RIÊNG BẠN", language)}</span>
                    <span class="home-mobile-footer-line"></span>
                </footer>
            </div>

        </section>
    `;
}
