(function () {
  "use strict";

  const heroMascotEl = document.getElementById("hero-mascot");
  const stageMascotEl = document.getElementById("stage-mascot");

  if (window.PencilMascot) {
    window.PencilMascot.render(heroMascotEl, "gate-1");
    window.PencilMascot.render(stageMascotEl, "gate-1");
    window.PencilMascot.initEyeTracking();
  }

  // 1. Navegação por abas dos 5 Gates (com suporte completo a teclado)
  const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
  const panels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

  function activateTab(tab) {
    const targetId = tab.getAttribute("aria-controls");
    const gateState = tab.getAttribute("data-gate-state") || "gate-1";

    tabs.forEach((t) => {
      const isSelected = t === tab;
      t.setAttribute("aria-selected", String(isSelected));
      t.setAttribute("tabindex", isSelected ? "0" : "-1");
    });

    panels.forEach((p) => {
      p.hidden = p.id !== targetId;
    });

    if (window.PencilMascot && stageMascotEl) {
      window.PencilMascot.render(stageMascotEl, gateState);
    }
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateTab(tab));

    tab.addEventListener("keydown", (e) => {
      let nextIndex = null;
      if (e.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
      if (e.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (e.key === "Home") nextIndex = 0;
      if (e.key === "End") nextIndex = tabs.length - 1;

      if (nextIndex !== null) {
        e.preventDefault();
        tabs[nextIndex].focus();
        activateTab(tabs[nextIndex]);
      }
    });
  });

  // 2. Simulador interativo do Gate 1 (chips de sentimento atualizam DESIGN_SPEC)
  const moodChips = Array.from(document.querySelectorAll(".mood-chip"));
  const specPreview = document.getElementById("spec-preview");

  function updateSpecPreview() {
    if (!specPreview) return;
    const active = moodChips
      .filter((c) => c.getAttribute("aria-pressed") === "true")
      .map((c) => c.getAttribute("data-spec"));
    specPreview.textContent =
      active.length > 0
        ? `DESIGN_SPEC: ${active.join(" + ")}`
        : "DESIGN_SPEC: selecione ao menos 1 direção acima.";
  }

  moodChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const pressed = chip.getAttribute("aria-pressed") === "true";
      chip.setAttribute("aria-pressed", String(!pressed));
      updateSpecPreview();
    });
  });

  // 3. Botão de rasura no comparativo Antes vs Depois
  const strikeBtn = document.getElementById("strike-slop-btn");
  const slopCard = document.getElementById("slop-card");

  if (strikeBtn && slopCard) {
    strikeBtn.addEventListener("click", () => {
      const struck = slopCard.classList.toggle("is-struck");
      strikeBtn.setAttribute("aria-pressed", String(struck));
      strikeBtn.textContent = struck ? "Remover rasura" : "Rasurar AI Slop";
    });
  }

  // 4. Botões de cópia para comandos CLI e JSON
  const copyButtons = Array.from(document.querySelectorAll("[data-copy-target]"));

  copyButtons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const targetId = btn.getAttribute("data-copy-target");
      const sourceEl = targetId ? document.getElementById(targetId) : null;
      if (!sourceEl) return;

      const text = sourceEl.textContent.trim();
      const originalLabel = btn.textContent;

      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = "Copiado";
      } catch (_err) {
        const range = document.createRange();
        range.selectNodeContents(sourceEl);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
        btn.textContent = "Selecionado";
      }

      setTimeout(() => {
        btn.textContent = originalLabel;
      }, 1800);
    });
  });

  // 5. Ponteiro lápis discreto (desktop apenas, com toggle de preferência)
  const follower = document.getElementById("pencil-follower");
  const cursorToggleBtn = document.getElementById("cursor-toggle-btn");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  let cursorEnabled = finePointer && !reducedMotion;
  let targetX = -100;
  let targetY = -100;
  let currentX = -100;
  let currentY = -100;
  let rafId = null;

  function updateFollowerLoop() {
    if (!cursorEnabled || !follower) {
      rafId = null;
      return;
    }
    currentX += (targetX - currentX) * 0.22;
    currentY += (targetY - currentY) * 0.22;
    const tilt = Math.max(-18, Math.min(18, (targetX - currentX) * 0.6));
    follower.style.transform = `translate3d(${currentX + 10}px, ${currentY + 10}px, 0) rotate(${tilt}deg)`;
    rafId = requestAnimationFrame(updateFollowerLoop);
  }

  if (follower && finePointer && !reducedMotion) {
    document.addEventListener("mousemove", (e) => {
      if (!cursorEnabled) return;
      targetX = e.clientX;
      targetY = e.clientY;
      if (!follower.classList.contains("is-visible")) {
        follower.classList.add("is-visible");
      }
      if (!rafId) {
        rafId = requestAnimationFrame(updateFollowerLoop);
      }
    });

    document.addEventListener("mouseleave", () => {
      follower.classList.remove("is-visible");
    });
  }

  if (cursorToggleBtn) {
    cursorToggleBtn.addEventListener("click", () => {
      cursorEnabled = !cursorEnabled;
      cursorToggleBtn.setAttribute("aria-pressed", String(cursorEnabled));
      cursorToggleBtn.textContent = cursorEnabled ? "Ponteiro: Lápis" : "Ponteiro: Padrão";
      if (!cursorEnabled && follower) {
        follower.classList.remove("is-visible");
      }
    });
  }
})();
