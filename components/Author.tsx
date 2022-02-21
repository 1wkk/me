import Image from 'next/image'
import { author } from '../theme.config'

const Author = () => (
  <dl className='pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200'>
    <dt className='sr-only'>Authors</dt>
    <dd>
      <ul
        className='
      flex
      justify-center
      xl:block
      space-x-8
      sm:space-x-12
      xl:space-x-0 xl:space-y-8
    '
      >
        <li className='flex items-center space-x-2'>
          {author.avatar && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`https://avatars.githubusercontent.com/${author.avatar}`}
              alt='author image'
              className='w-10 h-10 rounded-full'
            />
          )}
          <dl className='text-sm font-medium leading-5 whitespace-nowrap'>
            <dt className='sr-only'>Name</dt>
            <dd className='text-gray-900'>{author.author}</dd>
            {author.twitter && (
              <>
                <dt className='sr-only'>Twitter</dt>
                <dd>
                  <a
                    href={`https://twitter.com/${author.twitter}`}
                    target='_blank'
                    rel='noopnener noreferrer'
                    className='link'
                  >
                    {author.twitter}
                  </a>
                </dd>
              </>
            )}
          </dl>
        </li>
      </ul>
    </dd>
  </dl>
)

export default Author
