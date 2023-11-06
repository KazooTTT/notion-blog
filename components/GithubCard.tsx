import { getSiteConfig } from '@/lib/get-config-value'
import GitHubCalendar from 'react-github-calendar'
import { GitHubIcon } from './GithubIcon'
import Link from 'next/link'

export const GithubCard = () => {
  const githubUserName = getSiteConfig('github') as string
  return githubUserName ? (
    <Link
      className='flex flex-col p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 justify-center items-center'
      href={`https://github.com/${githubUserName}`}
    >
      <GitHubIcon className='h-8 w-8 mb-2' />
      <GitHubCalendar
        username={githubUserName}
        weekStart={1}
        hideColorLegend
        hideTotalCount
      />
    </Link>
  ) : (
    <></>
  )
}
