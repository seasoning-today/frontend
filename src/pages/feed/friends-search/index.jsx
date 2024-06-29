import SearchTemplate from '@components/templates/SearchTemplate';

import { SearchContext, createSearchContext } from '@contexts/SearchContext';

export default function SearchPage() {
  const searchContextValue = createSearchContext();

  return (
    <SearchContext.Provider value={searchContextValue}>
      <SearchTemplate />
    </SearchContext.Provider>
  );
}
