interface Props {
  value: string;
  onSearch: (query: string) => void;
  onClear: () => void;
}

export default function SearchBar(props: Props) {
  let debounceTimer: ReturnType<typeof setTimeout>;

  const handleInput = (e: InputEvent) => {
    const value = (e.target as HTMLInputElement).value;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      props.onSearch(value);
    }, 200);
  };

  const handleClear = () => {
    props.onClear();
  };

  return (
    <div class="relative" role="search">
      <svg
        class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        aria-label="Buscar bookmarks"
        placeholder="Buscar bookmarks..."
        value={props.value}
        onInput={handleInput}
        class="hermes-input pl-10 pr-10"
      />
      {props.value && (
        <button
          onClick={handleClear}
          aria-label="Limpar busca"
          class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <svg class="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
