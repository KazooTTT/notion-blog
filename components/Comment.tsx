import React from 'react'

import Giscus from '@giscus/react'
import { cs } from 'react-notion-x'

import { giscusProps } from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './giscus.module.css'

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
