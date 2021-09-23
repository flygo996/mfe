import { useState } from 'react';

/** 乾坤相关 */
export function useQiankunStateForSlave() {
  const [globalState, setGlobalState] = useState({ name: 'lily', count: 0 });

  return {
    globalState,
    setGlobalState,
  };
}
