(function () {
  "use strict";

  if (window.PencilMascot) {
    window.PencilMascot.renderAll();
    window.PencilMascot.initEyeTracking();
  }

  // 1. Simulador interativo do Gate 1 (chips de sentimento atualizam DESIGN_SPEC)
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

  // 2. Botão de rasura no comparativo Antes vs Depois
  const strikeBtn = document.getElementById("strike-slop-btn");
  const slopCard = document.getElementById("slop-card");

  if (strikeBtn && slopCard) {
    strikeBtn.addEventListener("click", () => {
      const struck = slopCard.classList.toggle("is-struck");
      strikeBtn.setAttribute("aria-pressed", String(struck));
      strikeBtn.textContent = struck ? "Remover rasura" : "Rasurar AI Slop";
    });
  }

  // 3. Botões de cópia para comandos CLI e JSON
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

  // 4. Ponteiro lápis discreto (desktop apenas, com toggle de preferência)
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
