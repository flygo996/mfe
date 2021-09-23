import actions from './actions';
import { useEffect, useState } from 'react';
import { initialState, InitialStateType } from './actions';

/** 乾坤相关 */
export function useQiankunStateForSlave() {
  const [masterState, setMasterState] = useState<InitialStateType>(
    initialState,
  );

  useEffect(() => {
    console.log('把状态从 masterState 设置到 actions');
    actions.setGlobalState(masterState);
  }, [masterState]);

  return {
    masterState,
    setMasterState,
  };
}
