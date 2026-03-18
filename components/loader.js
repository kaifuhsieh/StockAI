document.addEventListener('DOMContentLoaded', () => {
    loadComponent('sidebar-placeholder', 'components/sidebar.html', () => {
        setupActiveNav();
        setupSidebarToggle();
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
    } catch (error) {
        console.error('Error loading component:', error);
    }
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
}
