import React from 'react'

import styles from './layout.module.scss'
import Header from './header'
import Footer from './footer'

export default ({ children }) => {
  const currentYear = new Date().getFullYear()
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer>
        My new Gatsby Blog &copy;
        <span style={{ marginLeft: '6px' }}>{currentYear}</span>
      </Footer>
    </div>
  )
}
