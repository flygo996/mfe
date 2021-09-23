import { useEffect } from 'react'
import { NavLink, useModel } from 'umi'

export default (props: any) => {
  const { children } = props
  const masterProps = useModel('@@qiankunStateFromMaster')
  console.log(masterProps)
  const { masterState, setMasterState } = masterProps
  useEffect(() => {
    console.log('子应用-useEffect 的 globalState-->', masterState)
  }, [masterState])

  return (
    <section style={{ textAlign: 'center' }}>
      <h2>sub-umi2 项目</h2>
      <button
        onClick={() => {
          setMasterState({
            ...masterState, // 不能去掉，否则就没有了
            count: masterState.count + 1,
          })
        }}
      >
        count add 1
      </button>
      {/* <button
        onClick={() => {
          setGlobalState({
            name: 'lalalal',
            count: -1,
          })
        }}
      >
        setGlobalState
      </button> */}
      <div>{JSON.stringify(Object.keys(masterProps))}</div>
      <div>{JSON.stringify(masterProps)}</div>
      <h2>
        <NavLink
          to="/"
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          Home
        </NavLink>
        {' | '}
        <NavLink
          to="/a"
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          AAA
        </NavLink>
        {' | '}
        <NavLink
          to="/b"
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          BBB
        </NavLink>
      </h2>
      <div className="content">{children}</div>
    </section>
  )
}
