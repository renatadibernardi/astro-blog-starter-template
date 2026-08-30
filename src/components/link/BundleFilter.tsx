import { For, createSignal } from 'solid-js';
import type { BundleFilterValue } from './App';
import { NO_BUNDLE } from './App';

interface Props {
  bundles: string[];
  selectedBundle: BundleFilterValue;
  bundleExclude: boolean;
  onSelectBundle: (bundle: BundleFilterValue) => void;
  onSetInclude: (bundle: BundleFilterValue) => void;
  onSetExclude: (bundle: BundleFilterValue) => void;
}

function CopyLinkButton(props: { bundle: string }) {
  const [copied, setCopied] = createSignal(false);

  const handleCopy = (e: MouseEvent) => {
    e.stopPropagation();
    const url = new URL(window.location.href);
    url.search = '';
    url.searchParams.set('bundle', props.bundle);
    navigator.clipboard.writeText(url.toString()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <button
      onClick={handleCopy}
      title="Copiar link do bundle"
      class="w-5 h-5 flex items-center justify-center rounded text-[10px] transition-colors shrink-0"
      classList={{
        'text-hermes-teal-bright': copied(),
        'text-verde-belic-400/60 dark:text-hermes-cream/30 hover:text-verde-belic-600 dark:hover:text-hermes-cream/60': !copied(),
      }}
    >
      {copied()
        ? <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
        : <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>
      }
    </button>
  );
}

export default function BundleFilter(props: Props) {
  return (
    <div>
      <div class="flex items-center gap-1.5 mb-2">
        <svg class="w-3.5 h-3.5 text-hermes-teal-bright dark:text-hermes-teal-bright" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
        </svg>
        <h2 class="text-xs font-semibold text-verde-belic-600 dark:text-hermes-teal-bright uppercase tracking-wide">
          Bundles
        </h2>
      </div>
      <div class="flex flex-col gap-1">
        <button
          onClick={() => props.onSelectBundle(null)}
          class="text-left px-2 py-1 text-xs rounded-md border transition-colors flex items-center gap-1.5"
          classList={{
            'bg-hermes-teal border-hermes-teal text-hermes-cream dark:bg-hermes-teal dark:border-hermes-teal': !props.selectedBundle,
            'border-verde-belic-200 text-verde-belic-700 hover:bg-verde-belic-50 dark:border-white/15 dark:text-hermes-cream/70 dark:hover:bg-hermes-teal/10': !!props.selectedBundle,
          }}
        >
          Todos
        </button>
        <For each={props.bundles}>
          {(bundle) => {
            const isSelected = () => props.selectedBundle === bundle;
            return (
              <span class="flex items-center gap-0.5">
                <button
                  onClick={() => props.onSelectBundle(bundle)}
                  class="text-left px-2 py-1 text-xs rounded-md border transition-colors flex items-center gap-1.5 flex-1"
                  classList={{
                    'bg-hermes-teal border-hermes-teal text-hermes-cream dark:bg-hermes-teal dark:border-hermes-teal': isSelected(),
                    'border-verde-belic-200 text-verde-belic-700 hover:bg-verde-belic-50 dark:border-white/15 dark:text-hermes-cream/70 dark:hover:bg-hermes-teal/10': !isSelected(),
                  }}
                >
                  <svg class="w-3 h-3 shrink-0 opacity-60" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                  </svg>
                  {bundle}
                </button>
                <CopyLinkButton bundle={bundle} />
                <button
                  onClick={() => props.onSetInclude(bundle)}
                  title="Incluir"
                  class="w-5 h-5 flex items-center justify-center rounded text-[10px] font-medium transition-colors shrink-0"
                  classList={{
                    'bg-verde-belic-100 text-verde-belic-700 dark:bg-verde-belic-900/40 dark:text-verde-belic-400': isSelected() && !props.bundleExclude,
                    'text-verde-belic-600/70 dark:text-verde-belic-500/60 hover:bg-verde-belic-50 dark:hover:bg-verde-belic-950/50': !isSelected() || props.bundleExclude,
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => props.onSetExclude(bundle)}
                  title="Excluir"
                  class="w-5 h-5 flex items-center justify-center rounded text-[10px] font-medium transition-colors shrink-0"
                  classList={{
                    'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-400': isSelected() && props.bundleExclude,
                    'text-rose-600/70 dark:text-rose-500/60 hover:bg-rose-50 dark:hover:bg-rose-950/50': !isSelected() || !props.bundleExclude,
                  }}
                >
                  −
                </button>
              </span>
            );
          }}
        </For>
        <span class="flex items-center gap-0.5">
          <button
            onClick={() => props.onSelectBundle(NO_BUNDLE)}
            class="text-left px-2 py-1 text-xs rounded-md border transition-colors flex items-center gap-1.5 flex-1"
            classList={{
              'bg-hermes-teal border-hermes-teal text-hermes-cream dark:bg-hermes-teal dark:border-hermes-teal': props.selectedBundle === NO_BUNDLE,
              'border-verde-belic-200 text-verde-belic-700 hover:bg-verde-belic-50 dark:border-white/15 dark:text-hermes-cream/70 dark:hover:bg-hermes-teal/10': props.selectedBundle !== NO_BUNDLE,
            }}
          >
            <svg class="w-3 h-3 shrink-0 opacity-60" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
            Sem bundle
          </button>
          <button
            onClick={() => props.onSetInclude(NO_BUNDLE)}
            title="Incluir"
            class="w-5 h-5 flex items-center justify-center rounded text-[10px] font-medium transition-colors shrink-0"
            classList={{
              'bg-verde-belic-100 text-verde-belic-700 dark:bg-verde-belic-900/40 dark:text-verde-belic-400': props.selectedBundle === NO_BUNDLE && !props.bundleExclude,
              'text-verde-belic-600/70 dark:text-verde-belic-500/60 hover:bg-verde-belic-50 dark:hover:bg-verde-belic-950/50': props.selectedBundle !== NO_BUNDLE || props.bundleExclude,
            }}
          >
            +
          </button>
          <button
            onClick={() => props.onSetExclude(NO_BUNDLE)}
            title="Excluir"
            class="w-5 h-5 flex items-center justify-center rounded text-[10px] font-medium transition-colors shrink-0"
            classList={{
              'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-400': props.selectedBundle === NO_BUNDLE && props.bundleExclude,
              'text-rose-600/70 dark:text-rose-500/60 hover:bg-rose-50 dark:hover:bg-rose-950/50': props.selectedBundle !== NO_BUNDLE || !props.bundleExclude,
            }}
          >
            −
          </button>
        </span>
      </div>
    </div>
  );
}
