document.addEventListener('DOMContentLoaded', () => {
    setupThemePersistence(); // Run early for static header buttons
    loadComponent('sidebar-placeholder', 'components/sidebar.html', () => {
        setupActiveNav();
        setupSidebarToggle();
        setupThemePersistence(); // Run again for dynamically loaded sidebar buttons
    });
});

async function loadComponent(id, file, callback) {
    const element = document.getElementById(id);
    if (!element) return;
    
    try {
        const response = await fetch(file);
        const html = await response.text();
        element.innerHTML = html;
        if (callback) callback();
        setupThemePersistence();
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

function setupThemePersistence() {
    const desktopThemeToggle = document.getElementById('desktop-theme-toggle');
    const mobileThemeToggle  = document.getElementById('mobile-theme-toggle');
    const sidebarThemeToggle = document.getElementById('sidebar-theme-toggle');

    const updateToggleIcons = (mode) => {
        const emoji = mode === 'dark' ? '🌙' : '☀️';
        const iconName = mode === 'dark' ? 'light_mode' : 'dark_mode'; // Material icon name
        
        if (desktopThemeToggle) desktopThemeToggle.textContent = emoji;
        if (mobileThemeToggle) mobileThemeToggle.textContent = emoji;
        if (sidebarThemeToggle) {
            const icon = sidebarThemeToggle.querySelector('.material-icons');
            const text = sidebarThemeToggle.querySelector('span:not(.material-icons)');
            if (icon) icon.textContent = iconName;
            if (text) text.textContent = mode === 'dark' ? '切換明亮模式' : '切換深色模式';
        }
    };

    const toggleTheme = () => {
        document.body.classList.toggle('dark-theme');
        const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        updateToggleIcons(theme);
    };

    // Initial state
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        updateToggleIcons('dark');
    } else {
        document.body.classList.remove('dark-theme');
        updateToggleIcons('light');
    }

    if (desktopThemeToggle) desktopThemeToggle.addEventListener('click', toggleTheme);
    if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);
    if (sidebarThemeToggle) sidebarThemeToggle.addEventListener('click', toggleTheme);
}


function setupActiveNav() {
    const path = window.location.pathname;
    const page = path.split("/").pop().split(".")[0] || 'index';
    
    document.querySelectorAll('[data-page]').forEach(item => {
        if (item.getAttribute('data-page') === page) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function setupSidebarToggle() {
    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebarToggle) {
        // Initial state from localStorage
        const isSidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
        if (isSidebarCollapsed) {
            document.body.classList.add('sidebar-collapsed');
        }

        sidebarToggle.addEventListener('click', () => {
            document.body.classList.toggle('sidebar-collapsed');
            localStorage.setItem('sidebarCollapsed', document.body.classList.contains('sidebar-collapsed'));
        });
    }

    // Mobile Sidebar Toggle
    const setupMobileToggle = () => {
        const mobileHamburger = document.getElementById('mobile-hamburger');
        const mobileClose = document.getElementById('mobile-sidebar-close');
        
        if (mobileHamburger) {
            mobileHamburger.addEventListener('click', () => {
                document.body.classList.add('mobile-sidebar-active');
            });
        }
        
        if (mobileClose) {
            mobileClose.addEventListener('click', () => {
                document.body.classList.remove('mobile-sidebar-active');
            });
        }

        // Close when clicking nav items on mobile
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth <= 767) {
                    document.body.classList.remove('mobile-sidebar-active');
                }
            });
        });
    };

    setupMobileToggle();
    
    // Close sidebar when clicking outside (on the overlay)
    document.addEventListener('click', (e) => {
        if (document.body.classList.contains('mobile-sidebar-active')) {
            const sidebar = document.getElementById('sidebar');
            const hamburger = document.getElementById('mobile-hamburger');
            if (sidebar && !sidebar.contains(e.target) && hamburger && !hamburger.contains(e.target)) {
                document.body.classList.remove('mobile-sidebar-active');
            }
        }
    });
}
