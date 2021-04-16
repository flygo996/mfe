import styles from './index.less'
import Logo from './umi.png'

export default function IndexPage() {
  console.log('process.env:', process.env)
  return (
    <div>
      <img src={Logo} alt="logo" />
      <h1 className={styles.title}>Page index</h1>
    </div>
  )
}
