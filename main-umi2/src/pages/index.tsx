import { useModel } from 'umi';
import styles from './index.less';

export default function IndexPage() {
  const { globalState } = useModel('global');
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <p>{JSON.stringify(globalState)}</p>
    </div>
  );
}
