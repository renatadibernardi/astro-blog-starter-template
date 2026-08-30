import { onMount } from 'solid-js';

function applyTheme() {
  document.documentElement.className = 'light-linux';
  localStorage.setItem('theme', 'light-linux');
}

export default function DarkModeToggle() {
  onMount(() => {
    applyTheme();
  });

  return (
    <button
      type="button"
      onClick={applyTheme}
      class="inline-flex min-h-10 items-center gap-2 rounded-full border border-[var(--theme-border)] bg-[var(--theme-bg-card)] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--theme-accent)] transition-colors hover:border-[var(--theme-border-strong)] hover:bg-[var(--theme-bg-panel)]"
      title="Tema Di Bernardi"
    >
      <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      <span>Di Bernardi</span>
    </button>
  );
}
