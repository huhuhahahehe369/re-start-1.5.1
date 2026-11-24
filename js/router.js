// ==========================================
// RE:START ROUTER
// ==========================================

const pages = {
    home: {
        title: "Home",
        subtitle: "Everything starts here.",
        icon: "⌂"
    },

    study: {
        title: "Study Room",
        subtitle: "Make today count. One session at a time.",
        icon: "◷"
    },

    sleep: {
        title: "Sleep Tracker",
        subtitle: "Understand your sleep rhythm.",
        icon: "☾"
    },

    journal: {
        title: "Daily Journal",
        subtitle: "Check in with yourself today.",
        icon: "✎"
    },

    academic: {
        title: "Academic Assistant",
        subtitle: "Organize assignments, exams and study priorities.",
        icon: "▤"
    },

    insights: {
        title: "AI Insights",
        subtitle: "Discover patterns across study, sleep and daily progress.",
        icon: "✧"
    },

    sync: {
        title: "Cloud Sync",
        subtitle: "Keep your data in sync and install RE:START as an app.",
        icon: "☁"
    },

    analytics: {
        title: "Analytics",
        subtitle: "See your progress over time.",
        icon: "▥"
    },

    calendar: {
        title: "Calendar",
        subtitle: "Your activities, all in one place.",
        icon: "▦"
    },

    settings: {
        title: "Settings",
        subtitle: "Make RE:START work your way.",
        icon: "⚙"
    }
};

// ==========================================
// GET CURRENT PAGE
// ==========================================

export function getCurrentPage() {
    const hash = window.location.hash;

    // Remove #/ from URL
    const page = hash.replace(/^#\/?/, "").trim();

    // Default page: Home
    if (!page) {
        return "home";
    }

    // Only accept registered pages
    if (Object.prototype.hasOwnProperty.call(pages, page)) {
        return page;
    }

    // Fallback to Home when route is invalid
    return "home";
}

// ==========================================
// GET PAGE INFORMATION
// ==========================================

export function getPageInfo(page) {
    return pages[page] || pages.home;
}

// ==========================================
// GET ALL PAGES
// ==========================================

export function getAllPages() {
    return pages;
}