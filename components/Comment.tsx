import { giscusProps } from '@/lib/config'
import Giscus from '@giscus/react'
import React from 'react'
import styles from './giscus.module.css'
import { useDarkMode } from '@/lib/use-dark-mode'
import { cs } from 'react-notion-x'

export default function Comment() {
  const { isDarkMode } = useDarkMode()
  return (
    <div
      className={cs('comment-container', styles['giscus-comments-container'])}
    >
      <div className={styles['giscus-comments']}>
        <Giscus
          {...{
            ...giscusProps,
            theme: isDarkMode ? 'dark' : 'light'
          }}
        />
      </div>
    </div>
  )
}
