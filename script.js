/**
 * Kundan Saw - Developer Portfolio
 * Theme Toggle (Light/Dark), Sticky Header, and Interactive Project Filters
 */

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------------------------
  // 1. DAY / NIGHT (LIGHT / DARK) THEME SWITCHER
  // --------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');

  // Check saved theme or default to light
  const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
  
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      if (sunIcon) sunIcon.classList.remove('hidden');
      if (moonIcon) moonIcon.classList.add('hidden');
    } else {
      document.documentElement.classList.remove('dark');
      if (sunIcon) sunIcon.classList.add('hidden');
      if (moonIcon) moonIcon.classList.remove('hidden');
    }
  }

  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      const nextTheme = isDark ? 'light' : 'dark';
      applyTheme(nextTheme);
      localStorage.setItem('portfolio-theme', nextTheme);
    });
  }

  // --------------------------------------------------------------------------
  // 2. MOBILE NAVIGATION DRAWER
  // --------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.add('hidden');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 3. PROJECT FILTER TABS
  // --------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.tuddu-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 4. TERMINAL CLI TABS
  // --------------------------------------------------------------------------
  const terminalTabs = document.querySelectorAll('.terminal-tab');
  const terminalScreen = document.getElementById('terminalScreen');

  const terminalData = {
    whoami: `
      <div class="space-y-3 font-mono text-xs">
        <div class="text-slate-400">
          <span class="text-emerald-400">kundan@dev</span>:<span class="text-cyan-400">~</span>$ whoami
        </div>
        <div class="text-emerald-300 font-semibold text-sm">
          Kundan Saw — Computer Engineering student @ NIAMT Ranchi
        </div>
        <p class="text-slate-300 leading-relaxed text-xs">
          I build full-stack web applications, Salesforce solutions, and real-time platforms like DutyHours.in for Indian Railways.
        </p>
        <div class="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-slate-700 text-slate-300">
          <div><span class="text-slate-500">Degree:</span> B.Tech (2023-2027)</div>
          <div><span class="text-slate-500">CGPA:</span> 8.65 / 10</div>
          <div><span class="text-slate-500">College:</span> NIAMT Ranchi</div>
          <div><span class="text-slate-500">Location:</span> Ranchi, India</div>
        </div>
      </div>
    `,
    skills: `
      <div class="space-y-2 font-mono text-xs">
        <div class="text-slate-400">
          <span class="text-emerald-400">kundan@dev</span>:<span class="text-cyan-400">~</span>$ cat skills.txt
        </div>
        <div class="space-y-1.5 text-slate-300 text-[11px]">
          <div><strong class="text-cyan-400">Languages:</strong> Java, C, C++, JavaScript (ES6+), Python, Apex, SOQL, Solidity</div>
          <div><strong class="text-emerald-400">Full Stack:</strong> React.js, Node.js, Express, Socket.IO, MongoDB, Tailwind</div>
          <div><strong class="text-indigo-400">Salesforce:</strong> Salesforce DX, Triggers, Flows, OWD Security, Dashboards</div>
          <div><strong class="text-amber-400">Tools:</strong> Git, GitHub, Vercel, Render, Postman, Linux</div>
        </div>
      </div>
    `,
    audit: `
      <div class="space-y-2 font-mono text-xs">
        <div class="text-slate-400">
          <span class="text-emerald-400">kundan@dev</span>:<span class="text-cyan-400">~</span>$ hardhat test SentinelFund.sol
        </div>
        <div class="space-y-1 text-slate-300 text-[11px]">
          <div class="text-emerald-400">✔ Reentrancy protection (mutex lock verified)</div>
          <div class="text-emerald-400">✔ Milestone voting quorum (>50% contributors needed)</div>
          <div class="text-emerald-400">✔ Pull payment refund pattern enabled</div>
        </div>
      </div>
    `,
    railway: `
      <div class="space-y-2 font-mono text-xs">
        <div class="text-slate-400">
          <span class="text-emerald-400">kundan@dev</span>:<span class="text-cyan-400">~</span>$ node dutyhours_relay.js
        </div>
        <div class="space-y-1 text-slate-300 text-[11px]">
          <div class="text-cyan-400">[DutyHours.in] Connected to Indian Railways (Hatia Division)</div>
          <div>[Shift Monitor] Duty threshold pings: 8h, 9h, 11h, 14h alerts active.</div>
          <div class="text-emerald-400">[Socket.IO] Real-time fatigue monitoring operational.</div>
        </div>
      </div>
    `
  };

  terminalTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      terminalTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const tabKey = tab.getAttribute('data-tab');
      if (terminalData[tabKey]) {
        terminalScreen.innerHTML = terminalData[tabKey];
      }
    });
  });

  // --------------------------------------------------------------------------
  // 5. COPY BUTTONS & TOAST
  // --------------------------------------------------------------------------
  const copyButtons = document.querySelectorAll('.copy-btn');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');

  function showToast(msg) {
    if (!toast) return;
    toastMessage.textContent = msg;
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-20', 'opacity-0');
    }, 2000);
  }

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied ${textToCopy}`);
          btn.textContent = 'Copied!';
          setTimeout(() => { btn.textContent = 'Copy'; }, 1800);
        });
      }
    });
  });

  // --------------------------------------------------------------------------
  // 6. CONTACT FORM MAILTO
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName').value.trim();
      const email = document.getElementById('senderEmail').value.trim();
      const subject = document.getElementById('subject').value.trim() || 'Portfolio Inquiry';
      const message = document.getElementById('message').value.trim();

      const mailtoUrl = `mailto:kundansawvks786@gmail.com?subject=${encodeURIComponent(subject + ' - ' + name)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;
      window.location.href = mailtoUrl;
      showToast('Opening your mail client...');
    });
  }

});
