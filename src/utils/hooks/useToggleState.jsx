import { useState } from 'react';

export default function useToggleState(initialValue) {
  const [state, setState] = useState(initialValue);

  const toggleState = () => setState((state) => !state);

  return [state, toggleState];
}
