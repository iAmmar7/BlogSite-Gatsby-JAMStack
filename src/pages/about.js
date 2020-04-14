import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Title from '../components/title'

export default () => (
  <Layout>
    <Title text="About Me" />
    <div>
      <Link
        to="/"
        style={{ color: '#0984e3', marginRight: '8px', textDecoration: 'none' }}
      >
        Home
      </Link>
      |
      <Link
        to="/about"
        style={{ color: '#0984e3', marginLeft: '8px', textDecoration: 'none' }}
      >
        About
      </Link>
    </div>
    <p
      style={{
        marginBottom: '30px',
        fontSize: '18px',
        lineHeight: '30px',
        textAlign: 'justify',
      }}
    >
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
      praesentium voluptatum deleniti atque corrupti quos dolores et quas
      molestias excepturi sint occaecati cupiditate non provident, similique
      sunt in culpa qui officia deserunt mollitia animi, id est laborum et
      dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
      impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
      assumenda est, omnis dolor repellendus.
    </p>
  </Layout>
)
