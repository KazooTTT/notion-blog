import { getSiteConfig } from '@/lib/get-config-value'
import GitHubCalendar from 'react-github-calendar'
import { GitHubIcon } from './GithubIcon'
import Link from 'next/link'
import { useDarkMode } from '@/lib/use-dark-mode'
import { cn } from '@/lib/classNames'

export const GithubCard = () => {
  const githubUserName = getSiteConfig('github') as string
  const { isDarkMode } = useDarkMode()

  return githubUserName ? (
    <Link
      className={cn(
        `flex flex-col p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 justify-center items-center`,
        isDarkMode && `bg-gray-800 border-gray-700 hover:bg-gray-700`
      )}
      href={`https://github.com/${githubUserName}`}
    >
      <GitHubIcon className='h-8 w-8 mb-2' />
      <GitHubCalendar
        username={githubUserName}
        weekStart={1}
        hideColorLegend
        hideTotalCount
        colorScheme={isDarkMode ? 'dark' : 'light'}
      />
    </Link>
  ) : (
    <></>
  )
}
