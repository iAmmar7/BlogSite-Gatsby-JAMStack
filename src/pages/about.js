import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Title from '../components/title'

export default () => (
  <Layout>
    <Title text="About Me" />
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </div>
    <p>
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
