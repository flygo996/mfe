import React, { useEffect, useState } from 'react'
import { Link, useModel } from 'umi'
import { Button } from 'antd'

export default (props: any) => {
  return (
    <section>
      <div className="left">
        <Link to="/react#/">react </Link> {'|'}
        <Link to="/react/about">react about </Link> {'|'}
        <Link to="/react/abc">react abc</Link> {'|'}
        <br />
        <Link to="/umi/">umi </Link> {'|'}
        <Link to="/umi/login">umi login</Link> {'|'}
        <br />
        <Link to="/vue/">vue </Link> {'|'}
        <Link to="/vue/about">vue about</Link> {'|'}
        <Link to="/vue/abc">vue abc</Link> {'|'}
        <br />
        <Link to="/vue2/">vue </Link> {'|'}
        <Link to="/vue2/about">vue about</Link> {'|'}
        <Link to="/vue2/abc">vue abc</Link> {'|'}
      </div>
      <div className="content">{props.children}</div>
    </section>
  )
}
