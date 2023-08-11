import { giscusProps } from '@/lib/config'
import Giscus from '@giscus/react'
import React from 'react'
import styles from './styles.module.css'

export default function Comment() {
  return (
    <div className={styles['giscus-comments']}>
      <Giscus {...giscusProps} />
    </div>
  )
}
