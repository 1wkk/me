import Link from 'next/link'
import Author from './Author'
import Date from './Date'

const Article = ({ frontmatter, html, nextPost, prevPost }) => {
  return (
    <article className='xl:divide-y xl:divide-gray-200'>
      <header className='pt-6 xl:pb-10 space-y-1 text-center'>
        {/* <Date date='date' /> */}
        <h1
          className='
        text-3xl
        leading-9
        font-extrabold
        text-gray-900
        tracking-tight
        sm:text-4xl sm:leading-10
        md:text-5xl md:leading-14
      '
        >
          {frontmatter.title}
        </h1>
      </header>

      <div
        className='
      divide-y
      xl:divide-y-0
      divide-gray-200
      xl:grid xl:grid-cols-4 xl:gap-x-10
      pb-16
      xl:pb-20
    '
        style={{ gridTemplateRows: 'auto 1fr' }}
      >
        <Author />
        <div className='divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2'>
          <div
            className='prose max-w-none pt-10 pb-8'
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
          {/* <Content className="prose max-w-none pt-10 pb-8" /> */}
        </div>

        <footer
          className='
        text-sm
        font-medium
        leading-5
        divide-y divide-gray-200
        xl:col-start-1 xl:row-start-2
      '
        >
          {nextPost && (
            <div className='py-8'>
              <h2 className='text-xs tracking-wide uppercase text-gray-500'>
                Next Article
              </h2>
              <div className='link'>
                <a href='nextPost.href'>{nextPost.title}</a>
              </div>
            </div>
          )}
          {prevPost && (
            <div className='py-8'>
              <h2 className='text-xs tracking-wide uppercase text-gray-500'>
                Previous Article
              </h2>
              <div className='link'>
                <a href='prevPost.href'>{prevPost.title}</a>
              </div>
            </div>
          )}
          <div className='pt-8'>
            <Link href='/'>
              <a className='link'>← Back to the blog</a>
            </Link>
          </div>
        </footer>
      </div>
    </article>
  )
}

export default Article
