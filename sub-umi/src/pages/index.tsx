import styles from './index.less'
import Logo from './umi.png'

export default function IndexPage() {
  console.log(process.env, window.__POWERED_BY_QIANKUN__)
  return (
    <div>
      <img src={Logo} alt="logo" />
      <h1 className={styles.title}>Page index</h1>
    </div>
  )
}
