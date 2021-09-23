import { useState } from 'react';

/** 乾坤相关 */
export function useQiankunStateForSlave() {
  const [masterState, setMasterState] = useState({ name: 'lily', count: 0 });

  return {
    masterState,
    setMasterState,
  };
}
