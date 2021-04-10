import styles from './index.less'
import Layout from '@/layouts/index'

export default function IndexPage() {
  return (
    <Layout>
      <div>
        <h1 className={styles.title}>Page index</h1>
      </div>
    </Layout>
  )
}
