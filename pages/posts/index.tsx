import { getSortedPostsInfo } from '../../lib/posts'
import Date from '../../components/Date'
import Link from 'next/link'

const Posts = ({ posts }) => (
  <main className='max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 divide-y divide-gray-200'>
    <ul className='divide-y divide-gray-200'>
      {posts.map(({ id, title, excerpt, date }) => (
        <li className='py-12' key={id}>
          <article
            className='
        space-y-2
        xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline
      '
          >
            <Date date={date} />
            <div className='space-y-5 xl:col-span-3'>
              <div className='space-y-6'>
                <h2 className='text-2xl leading-8 font-bold tracking-tight'>
                  <Link href={`posts/${id}`}>
                    <a className='text-gray-900'>{title}</a>
                  </Link>
                </h2>
                {excerpt && (
                  <div
                    className='prose max-w-none text-gray-500'
                    dangerouslySetInnerHTML={{ __html: excerpt }}
                  ></div>
                )}
              </div>
              <div className='text-base leading-6 font-medium'>
                <Link href={`posts/${id}`}>
                  <a className='link' aria-label='read more'>
                    Read more →
                  </a>
                </Link>
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  </main>
)

export async function getStaticProps() {
  const posts = getSortedPostsInfo()
  console.log(posts)

  return {
    props: {
      posts
    }
  }
}

export default Posts
