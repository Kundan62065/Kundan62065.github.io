/**
 * Kundan Saw - Developer Portfolio Interactive Scripts
 * Inspired by Rana Poddar's portfolio (ranapoddar.me)
 */

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------------------------
  // 1. MOBILE NAVIGATION DRAWER TOGGLE
  // --------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });

    // Close mobile drawer when clicking any link inside
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.add('hidden');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 2. INTERACTIVE TERMINAL WINDOW (Tabs & Dynamic Simulation)
  // --------------------------------------------------------------------------
  const terminalTabs = document.querySelectorAll('.terminal-tab');
  const terminalScreen = document.getElementById('terminalScreen');

  const terminalData = {
    whoami: `
      <div class="space-y-3">
        <div class="flex items-center gap-2 text-slate-400">
          <span class="text-emerald-400">kundan@dev-workspace</span>:<span class="text-cyan-400">~</span>$ whoami
        </div>
        <div class="text-emerald-300 font-semibold text-sm">
          Kundan Saw (B.Tech Computer Engineering, NIAMT Ranchi)
        </div>
        <p class="text-slate-400 leading-relaxed text-xs">
          Software architect specializing in Web3 smart contract security, real-time distributed platforms, and enterprise Salesforce CRM automation.
        </p>
        <div class="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-white/5">
          <div><span class="text-slate-500">Degree:</span> B.Tech 2023-2027</div>
          <div><span class="text-slate-500">CGPA:</span> 8.65 / 10</div>
          <div><span class="text-slate-500">Institute:</span> NIAMT Ranchi</div>
          <div><span class="text-slate-500">Location:</span> Ranchi, India</div>
        </div>
        <div class="text-xs text-cyan-400/90 pt-1 flex items-center gap-1.5">
          <span class="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          Ready for technical engineering opportunities.
        </div>
      </div>
    `,
    skills: `
      <div class="space-y-3 font-mono text-xs">
        <div class="text-slate-400">
          <span class="text-emerald-400">kundan@dev-workspace</span>:<span class="text-cyan-400">~</span>$ ./list_skills.sh --all
        </div>
        <div class="space-y-1.5 text-slate-300">
          <div><span class="text-emerald-400">▶ Web3 & Security:</span> Solidity 0.8.20, Web3.js, CEI Pattern, Mutex Guards, STRIDE Modeling</div>
          <div><span class="text-cyan-400">▶ Salesforce:</span> Salesforce DX, Apex Triggers, Handler Pattern, Flows, SOQL, OWD</div>
          <div><span class="text-indigo-400">▶ Full Stack:</span> React 18, Node.js, Express.js, Socket.IO, MongoDB, Tailwind</div>
          <div><span class="text-amber-400">▶ Languages:</span> Java, C, C++, JavaScript (ES6+), Python, SQL</div>
          <div><span class="text-slate-400">▶ DevOps:</span> Git, GitHub Actions, Vercel, Render, Kali Linux, Postman</div>
        </div>
        <div class="text-slate-500 text-[11px] pt-1">
          Total verified skills: 20+ modules across enterprise & decentralization.
        </div>
      </div>
    `,
    audit: `
      <div class="space-y-2.5 font-mono text-xs">
        <div class="text-slate-400">
          <span class="text-emerald-400">kundan@dev-workspace</span>:<span class="text-cyan-400">~</span>$ npx hardhat test contracts/Crowdfunding.sol
        </div>
        <div class="text-slate-300 space-y-1 text-[11px]">
          <div class="text-emerald-400">✔ SWC-107: Reentrancy attack simulation reverted by nonReentrant mutex (42ms)</div>
          <div class="text-emerald-400">✔ SWC-105: Direct creator withdraw() blocked; milestone voting required (38ms)</div>
          <div class="text-emerald-400">✔ SWC-113: Pull payment claimRefund() executes in isolated gas context (19ms)</div>
          <div class="text-emerald-400">✔ CircuitBreaker: toggleEmergencyPause() halts untrusted state transitions (14ms)</div>
        </div>
        <div class="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px]">
          [AUDIT REPORT] 4 tests passed, 0 security vulnerabilities detected.
        </div>
      </div>
    `,
    railway: `
      <div class="space-y-2.5 font-mono text-xs">
        <div class="text-slate-400">
          <span class="text-emerald-400">kundan@dev-workspace</span>:<span class="text-cyan-400">~</span>$ node socket_alert_engine.js
        </div>
        <div class="text-slate-300 space-y-1 text-[11px]">
          <div class="text-cyan-400">[SOCKET.IO] Connected to Indian Railways Hatia Division Live Relay</div>
          <div>[CREW #4029] Shift duration: 07h 59m → Normal state</div>
          <div class="text-amber-400">[ALERT 8H] Threshold reached: Crew #4029 duty ping emitted</div>
          <div class="text-amber-400">[ALERT 9H] Fatigue warning generated; relief dispatch alerted</div>
          <div class="text-red-400">[CRITICAL 14H] Maximum permissible duty ceiling enforced</div>
        </div>
        <div class="p-2 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[11px]">
          [SYSTEM STATUS] Millisecond synchronization active for loco running staff.
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
  // 3. PROJECT FILTER TABS
  // --------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

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
  // 4. SECURITY AUDIT MODAL
  // --------------------------------------------------------------------------
  const openAuditModalBtn = document.querySelector('.open-audit-modal');
  const auditModal = document.getElementById('auditModal');
  const closeAuditModalBtn = document.getElementById('closeAuditModal');

  if (openAuditModalBtn && auditModal && closeAuditModalBtn) {
    openAuditModalBtn.addEventListener('click', () => {
      auditModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });

    closeAuditModalBtn.addEventListener('click', () => {
      auditModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    });

    auditModal.addEventListener('click', (e) => {
      if (e.target === auditModal) {
        auditModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !auditModal.classList.contains('hidden')) {
        auditModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }
    });
  }

  // --------------------------------------------------------------------------
  // 5. COPY TO CLIPBOARD & TOAST NOTIFICATION
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
    }, 2500);
  }

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied ${textToCopy} to clipboard!`);
          btn.textContent = 'Copied!';
          setTimeout(() => {
            btn.textContent = 'Copy';
          }, 2000);
        }).catch(err => {
          console.error('Clipboard copy failed:', err);
        });
      }
    });
  });

  // --------------------------------------------------------------------------
  // 6. CONTACT FORM HANDLING WITH MAILTO DISPATCH
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('senderName').value.trim();
      const email = document.getElementById('senderEmail').value.trim();
      const subject = document.getElementById('subject').value.trim() || 'Portfolio Inquiry';
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        if (formFeedback) {
          formFeedback.textContent = 'Please fill out all required fields.';
          formFeedback.className = 'text-amber-400 bg-amber-500/10 border border-amber-500/20 text-xs font-mono py-2 rounded-lg';
          formFeedback.classList.remove('hidden');
        }
        return;
      }

      // Generate direct mailto link to Kundan's email
      const mailtoUrl = `mailto:kundansawvks786@gmail.com?subject=${encodeURIComponent(subject + ' - from ' + name)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\nMessage:\n' + message)}`;

      // Open email client
      window.location.href = mailtoUrl;

      if (formFeedback) {
        formFeedback.textContent = 'Opening your email client to send dispatch... (or reach kundansawvks786@gmail.com directly)';
        formFeedback.className = 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono py-2 rounded-lg';
        formFeedback.classList.remove('hidden');
      }

      showToast('Opening email dispatch...');
    });
  }

  // Header scroll shadow toggle
  const mainHeader = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      mainHeader.classList.add('shadow-lg', 'bg-[#080b11]/95');
    } else {
      mainHeader.classList.remove('shadow-lg', 'bg-[#080b11]/95');
    }
  });

});
