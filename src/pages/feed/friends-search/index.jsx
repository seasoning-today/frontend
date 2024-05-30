import SearchTemplate from '@components/templates/SearchTemplate';

import { SearchContext, useSearchContext } from '@contexts/SearchContext';

export default function SearchPage() {
  const searchContextValue = useSearchContext();

  return (
    <SearchContext.Provider value={searchContextValue}>
      <SearchTemplate />
    </SearchContext.Provider>
  );
}
