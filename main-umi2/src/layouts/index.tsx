import { NavLink } from 'umi';

export default (props: any) => {
  return (
    <section style={{ textAlign: 'center' }}>
      <h2>main-umi2 项目</h2>
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
    </section>
  );
};
