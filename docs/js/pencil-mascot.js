/**
 * Mascote Lápis em traço de nanquim e vinheta circular (inspiração Nietzsche Family Circus).
 * Possui 5 estados correspondentes aos 5 Gates da skill human-craft-frontend.
 */
(function (global) {
  const STATES = {
    "gate-1": {
      label: "Gate 1: pensando no sentimento",
      speech: "Calma. Antes do primeiro div, qual é a temperatura desse papel?",
      tilt: -8,
      prop: `
        <path d="M168 52 C175 43 185 45 182 54 C179 62 171 62 172 68" fill="none" stroke="#A64B3C" stroke-width="2.4" stroke-linecap="round"/>
        <circle cx="172" cy="75" r="2" fill="#A64B3C"/>
      `,
      arms: `
        <path d="M-16 -2 C-30 6 -28 18 -10 10" fill="none" stroke="#292821" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 0 C28 8 28 22 17 26" fill="none" stroke="#292821" stroke-width="2.4" stroke-linecap="round"/>
      `,
      mouth: `<path d="M-5 -4 Q1 -2 6 -6" fill="none" stroke="#292821" stroke-width="2" stroke-linecap="round"/>`,
      brows: `
        <path d="M-12 -25 Q-6 -28 -1 -24" fill="none" stroke="#292821" stroke-width="2" stroke-linecap="round"/>
        <path d="M2 -27 Q8 -31 13 -26" fill="none" stroke="#292821" stroke-width="2" stroke-linecap="round"/>
      `
    },
    "gate-2": {
      label: "Gate 2: caçando referências reais",
      speech: "Sem referências de verdade no are.na ou godly, o layout nasce genérico.",
      tilt: 5,
      prop: `
        <g transform="translate(168, 72) rotate(12)">
          <circle cx="0" cy="0" r="15" fill="#F2EBDD" fill-opacity="0.7" stroke="#292821" stroke-width="2.4"/>
          <path d="M-7 -4 Q-2 -9 4 -6" fill="none" stroke="#68765B" stroke-width="1.6" stroke-linecap="round"/>
          <line x1="11" y1="11" x2="23" y2="23" stroke="#292821" stroke-width="3.2" stroke-linecap="round"/>
        </g>
      `,
      arms: `
        <path d="M-16 2 C-28 12 -22 25 -14 22" fill="none" stroke="#292821" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M16 -4 C30 -10 36 -26 42 -36" fill="none" stroke="#292821" stroke-width="2.4" stroke-linecap="round"/>
      `,
      mouth: `<ellipse cx="1" cy="-4" rx="3" ry="2.2" fill="none" stroke="#292821" stroke-width="1.8"/>`,
      brows: `
        <path d="M-12 -24 L-1 -23" fill="none" stroke="#292821" stroke-width="2.1" stroke-linecap="round"/>
        <path d="M2 -27 Q8 -31 13 -25" fill="none" stroke="#292821" stroke-width="2.1" stroke-linecap="round"/>
      `
    },
    "gate-3": {
      label: "Gate 3: rabiscando o mapa do layout",
      speech: "Esboço na mão primeiro. Só depois a gente encosta no código.",
      tilt: -14,
      prop: `
        <g transform="translate(46, 150) rotate(-6)">
          <rect x="0" y="0" width="44" height="32" fill="#F2EBDD" stroke="#292821" stroke-width="1.8" stroke-dasharray="4 2"/>
          <line x1="6" y1="9" x2="36" y2="9" stroke="#A64B3C" stroke-width="1.8" stroke-linecap="round"/>
          <line x1="6" y1="18" x2="24" y2="18" stroke="#292821" stroke-width="1.4" stroke-linecap="round"/>
          <rect x="28" y="15" width="10" height="10" fill="none" stroke="#68765B" stroke-width="1.4"/>
        </g>
      `,
      arms: `
        <path d="M-16 4 C-28 14 -34 28 -26 36" fill="none" stroke="#292821" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M16 2 C28 10 24 24 14 26" fill="none" stroke="#292821" stroke-width="2.4" stroke-linecap="round"/>
      `,
      mouth: `<path d="M-5 -5 Q0 -1 6 -5" fill="none" stroke="#292821" stroke-width="2" stroke-linecap="round"/>`,
      brows: `
        <path d="M-11 -25 L-2 -22" fill="none" stroke="#292821" stroke-width="2" stroke-linecap="round"/>
        <path d="M3 -22 L12 -25" fill="none" stroke="#292821" stroke-width="2" stroke-linecap="round"/>
      `
    },
    "gate-4": {
      label: "Gate 4: aquarela e movimento",
      speech: "Ícone genérico não entra. Aqui vai nanquim, p5.brush e Lottie vivo.",
      tilt: 6,
      prop: `
        <path d="M166 138 C178 124 192 132 184 146 C177 156 164 150 166 138 Z" fill="#A64B3C" opacity="0.85"/>
        <circle cx="188" cy="122" r="3" fill="#68765B"/>
        <circle cx="195" cy="134" r="2" fill="#A64B3C"/>
      `,
      arms: `
        <path d="M-16 0 C-28 -8 -30 -20 -20 -24" fill="none" stroke="#292821" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M16 4 C28 8 36 16 44 10" fill="none" stroke="#292821" stroke-width="2.4" stroke-linecap="round"/>
      `,
      mouth: `<path d="M-5 -6 Q0 0 7 -6" fill="none" stroke="#292821" stroke-width="2" stroke-linecap="round"/>`,
      brows: `
        <path d="M-12 -27 Q-6 -31 -1 -26" fill="none" stroke="#292821" stroke-width="2" stroke-linecap="round"/>
        <path d="M2 -26 Q8 -31 13 -27" fill="none" stroke="#292821" stroke-width="2" stroke-linecap="round"/>
      `
    },
    "gate-5": {
      label: "Gate 5: riscando AI slop",
      speech: "Gradiente roxo e card idêntico? Risca em vermelho e começa direito.",
      tilt: -4,
      prop: `
        <path d="M46 66 L82 46 M48 48 L80 68" stroke="#A64B3C" stroke-width="3.2" stroke-linecap="round"/>
        <rect x="44" y="42" width="40" height="30" fill="none" stroke="#292821" stroke-width="1.4" opacity="0.6"/>
      `,
      arms: `
        <path d="M-16 0 C-30 -6 -36 -18 -40 -26" fill="none" stroke="#292821" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M16 2 C26 12 24 26 14 26" fill="none" stroke="#292821" stroke-width="2.4" stroke-linecap="round"/>
      `,
      mouth: `<path d="M-6 -3 L6 -5" fill="none" stroke="#292821" stroke-width="2.1" stroke-linecap="round"/>`,
      brows: `
        <path d="M-12 -26 L-1 -21" fill="none" stroke="#292821" stroke-width="2.3" stroke-linecap="round"/>
        <path d="M2 -21 L13 -26" fill="none" stroke="#292821" stroke-width="2.3" stroke-linecap="round"/>
      `
    }
  };

  function buildSvg(stateKey) {
    const cfg = STATES[stateKey] || STATES["gate-1"];
    return `
      <svg viewBox="0 0 240 240" role="img" aria-label="${cfg.label}" data-mascot-svg>
        <circle cx="120" cy="120" r="106" fill="#F2EBDD" />
        <path d="M44 176 Q120 198 196 176" fill="none" stroke="#D8CBB3" stroke-width="2" stroke-linecap="round"/>
        <path d="M58 184 Q120 202 182 184" fill="none" stroke="#292821" stroke-width="1.1" stroke-dasharray="3 4" opacity="0.5"/>
        <path d="M75 192 Q120 205 165 192" fill="none" stroke="#292821" stroke-width="1" stroke-dasharray="2 5" opacity="0.45"/>

        <path d="M120 14 C178 13 224 58 225 119 C226 179 180 226 119 225 C59 224 14 179 15 120 C16 59 61 15 120 14 Z" fill="none" stroke="#292821" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M123 18 C176 19 220 62 221 118 C222 175 178 220 121 221" fill="none" stroke="#292821" stroke-width="1" stroke-linecap="round" opacity="0.55"/>

        ${cfg.prop}

        <g transform="translate(120, 126) rotate(${cfg.tilt})">
          <path d="M-16 -72 C-16 -84 16 -84 16 -72 L16 -60 L-16 -60 Z" fill="#A64B3C" stroke="#292821" stroke-width="2.5" stroke-linejoin="round"/>
          <path d="M-11 -76 Q0 -79 10 -74" fill="none" stroke="#F2EBDD" stroke-width="1.3" opacity="0.5" stroke-linecap="round"/>

          <rect x="-16" y="-60" width="32" height="14" fill="#D8CBB3" stroke="#292821" stroke-width="2.4" stroke-linejoin="round"/>
          <line x1="-16" y1="-55" x2="16" y2="-55" stroke="#292821" stroke-width="1.2"/>
          <line x1="-16" y1="-50" x2="16" y2="-50" stroke="#292821" stroke-width="1.2"/>
          <path d="M-10 -60 L-10 -46 M0 -60 L0 -46 M10 -60 L10 -46" stroke="#292821" stroke-width="1" opacity="0.5"/>

          <path d="M-16 -46 L16 -46 L17 42 L-17 42 Z" fill="#68765B" stroke="#292821" stroke-width="2.6" stroke-linejoin="round"/>
          <line x1="-6" y1="-46" x2="-6" y2="42" stroke="#292821" stroke-width="1.4" opacity="0.65"/>
          <line x1="6" y1="-46" x2="6" y2="42" stroke="#292821" stroke-width="1.4" opacity="0.65"/>
          <path d="M-15 -38 L-9 -35 M-15 -30 L-9 -27 M-15 -22 L-9 -19 M-15 18 L-9 21 M-15 26 L-9 29 M-15 34 L-9 37" stroke="#292821" stroke-width="1.1" opacity="0.55" stroke-linecap="round"/>

          <ellipse cx="-6" cy="-16" rx="4.5" ry="5.5" fill="#F2EBDD" stroke="#292821" stroke-width="2"/>
          <ellipse cx="7" cy="-16" rx="4.5" ry="5.5" fill="#F2EBDD" stroke="#292821" stroke-width="2"/>
          <circle class="mascot-pupil" cx="-5" cy="-16" r="2.1" fill="#292821" data-base-x="-5" data-base-y="-16"/>
          <circle class="mascot-pupil" cx="8" cy="-16" r="2.1" fill="#292821" data-base-x="8" data-base-y="-16"/>

          ${cfg.brows}
          ${cfg.mouth}
          ${cfg.arms}

          <path d="M-17 42 Q-9 39 0 43 Q9 39 17 42 L0 80 Z" fill="#D8CBB3" stroke="#292821" stroke-width="2.5" stroke-linejoin="round"/>
          <path d="M-8 43 L-2 64 M4 43 L1 62" stroke="#292821" stroke-width="1" opacity="0.45"/>
          <path d="M-5.5 66 L5.5 66 L0 80 Z" fill="#292821" stroke="#292821" stroke-width="1.5" stroke-linejoin="round"/>
        </g>

        <path d="M88 202 Q108 197 125 203 T156 199" fill="none" stroke="#292821" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    `;
  }

  function renderMascot(container, stateKey) {
    if (!container) return;
    container.innerHTML = buildSvg(stateKey);
    const speechEl = container.parentElement?.querySelector("[data-mascot-speech]");
    if (speechEl && STATES[stateKey]) {
      speechEl.textContent = `"${STATES[stateKey].speech}"`;
    }
  }

  function initEyeTracking() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.addEventListener("mousemove", function (e) {
      const svgs = document.querySelectorAll("[data-mascot-svg]");
      svgs.forEach((svg) => {
        const rect = svg.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = Math.max(-1.6, Math.min(1.6, (e.clientX - cx) / 140));
        const dy = Math.max(-1.8, Math.min(1.8, (e.clientY - cy) / 140));
        svg.querySelectorAll(".mascot-pupil").forEach((pupil) => {
          const bx = parseFloat(pupil.getAttribute("data-base-x") || "0");
          const by = parseFloat(pupil.getAttribute("data-base-y") || "0");
          pupil.setAttribute("cx", (bx + dx).toFixed(2));
          pupil.setAttribute("cy", (by + dy).toFixed(2));
        });
      });
    });
  }

  global.PencilMascot = {
    STATES,
    render: renderMascot,
    initEyeTracking
  };
})(window);
