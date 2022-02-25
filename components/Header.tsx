import Link from 'next/link'
import { header } from '../theme.config'

const Header = () => (
  <div id='header'>
    <nav className='flex justify-between items-center py-10 font-bold'>
      <Link href='/'>
        <a className='text-3xl' aria-label={header.site}>
          <span className='inline'>{header.site}</span>
        </a>
      </Link>

      <div className='text-sm text-gray-500 leading-5'>
        {[
          { text: 'Posts', href: '/posts' },
          { text: 'Flomo', href: '/flomo' },
          { text: 'Motto', href: '/motto' }
        ].map(({ text, href }) => (
          <span key={text}>
            <Link href={href} key={text}>
              <a className='hover:text-gray-700'>
                <span className='inline'>{text}</span>
              </a>
            </Link>
            <span className='mr-2 ml-2'>·</span>
          </span>
        ))}

        {header.github && (
          <>
            <a
              className='hover:text-gray-700'
              href={`https://github.com/${header.github}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='hidden sm:inline'>GitHub</span>
            </a>
            <span className='mr-2 ml-2'>·</span>
          </>
        )}

        <Link href='/feed.rss'>
          <a className='hover:text-gray-700'>
            RSS<span className='hidden sm:inline'> Feed</span>
          </a>
        </Link>
      </div>
    </nav>
  </div>
)

export default Header
