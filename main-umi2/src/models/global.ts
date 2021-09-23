import { useState, useEffect } from 'react';
import { useModel } from 'umi';
import actions, { initialState, InitialStateType } from '@/actions';

const useGlobal = () => {
  const [globalState, setGlobalState] = useState<InitialStateType>(
    initialState,
  );
  useEffect(() => {
    actions.onGlobalStateChange((state: any, prev: any) => {
      console.log(
        '把状态从 actions 设置到 globalState，但没能设到masterState里',
      );
      setGlobalState(state);
    });
  }, []);

  useEffect(() => {
    console.log('global---globalState:', globalState);
    // setMasterState(globalState);
  }, [globalState]);

  return { globalState, setGlobalState };
};
export default useGlobal;
