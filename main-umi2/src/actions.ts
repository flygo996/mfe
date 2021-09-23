/*
 * @Author: flygo
 * @Date: 2021-09-06 11:17:47
 * @LastEditTime: 2021-09-06 19:54:41
 * @LastEditors: flygo
 * @Description: 一些描述文字
 * @FilePath: \bsp-user-front\src\hooks\actions.ts
 */
import { initGlobalState, MicroAppStateActions } from 'qiankun';

type Project = {
  id: string;
  name: string;
};
export type InitialStateType = {
  name: string;
  count: number;
  project: Project | null;
};

export const initialState: InitialStateType = {
  // 这里写初始化数据
  name: 'bzl',
  count: 0,
  project: null,
};
// type MicroAppStateActions = {
//   onGlobalStateChange: (callback: OnGlobalStateChangeCallback, fireImmediately?: boolean) => void;
//   setGlobalState: (state: Record<string, any>) => boolean;
//   offGlobalStateChange: () => boolean;
// };
// 初始化 state
const actions: SelfMicroAppStateActions = initGlobalState(initialState);
type SelfMicroAppStateActions = {
  setGlobalState: (state: Partial<InitialStateType>) => boolean;
} & MicroAppStateActions;

export default actions;
