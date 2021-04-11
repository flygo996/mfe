import { NavLink, MicroApp } from 'umi';
import styles from './index.less';

export default (props: any) => {
  const { children } = props;

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
      <br />
      子应用
      <p>
        qiankun插件的模式进来后，子应用路由不能有被包含的关系，会导致路由失败。比如'/vue','/vue2'，由
        /vue进入/vue2，导航栏会变成 /vue/2。BUG
      </p>
      <p>
        qiankun插件模式进来后，路由只要包含数字，都有一定概率出现bug，比如'/vue1'会变成'/vue/1'
      </p>
      <p>
        直接用qiankun不会出现上面2种情况，未了同时避免他们，作如下调整：1、子应用路由不会相互覆盖，2、把/vue改为/vue1之后，子应用的router
        base也要响应改变。（hash模式是否需要变动还没测试）
      </p>
      <h3>
        <NavLink
          to="/vue1/#"
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
          to="/vue1/#/about"
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
          to="/vue1/#/login"
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          Vue Login
        </NavLink>
      </h3>
      <h3>
        <NavLink
          to="/vue2/#"
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
          to="/vue2/#/about"
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
          to="/vue2/#/login"
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          Vue2 Login
        </NavLink>
      </h3>
      <h3>
        <NavLink
          to="/umi1"
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          Umi Home
        </NavLink>
        {' | '}
        <NavLink
          to="/umi1/a"
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          Umi AAA
        </NavLink>
        {' | '}
        <NavLink
          to="/umi1/b"
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          Umi BBB
        </NavLink>
      </h3>
      <h3>
        <NavLink
          to="/umi2"
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          Umi2 Home
        </NavLink>
        {' | '}
        <NavLink
          to="/umi2/a"
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          Umi2 AAA
        </NavLink>
        {' | '}
        <NavLink
          to="/umi2/b"
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          Umi2 BBB
        </NavLink>
      </h3>
      <div className={styles.content}>{children}</div>
      <br />
      <br />
      <h3>MicroApp 形式引入(base可以按自己需求任意填写)</h3>
      <div className={styles.content}>
        <MicroApp name="sub-umi2" base="/umi2umi2#/" />
      </div>
    </section>
  );
};
