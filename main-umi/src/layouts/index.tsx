import { NavLink } from 'umi'

export default (props: any) => {
  return (
    <section style={{ textAlign: 'center' }}>
      <h2>main-umi 项目</h2>
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
      <div className="content">{props.children}</div>
      <br />
      <h2>
        <NavLink
          to="/vue"
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          Vue Home
        </NavLink>
        {' | '}
        <NavLink
          to="/vue/about"
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          Vue About
        </NavLink>
        {' | '}
        <NavLink
          to="/vue/login"
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          Vue Login
        </NavLink>
      </h2>
      <h2>
        <NavLink
          to="/vue2"
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          Vue2 Home
        </NavLink>
        {' | '}
        <NavLink
          to="/vue2/about"
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          Vue2 About
        </NavLink>
        {' | '}
        <NavLink
          to="/vue2/login"
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          Vue2 Login
        </NavLink>
      </h2>
      <div id="mfeContainer">子应用容器</div>
    </section>
  )
}
