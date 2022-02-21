import { getIndexInfo } from '../lib/posts'

const Index = ({ frontmatter, html }) => {
  return (
    <article className='xl:divide-y xl:divide-gray-200 w-full'>
      <header className='pt-6 xl:pb-10 space-y-1 text-center'>
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
      <div className='divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2 flex items-center justify-center'>
        <div
          className='prose pt-10 pb-8 max-w-screen-md'
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </article>
  )
}

export async function getStaticProps() {
  const indexInfo = getIndexInfo()

  return {
    props: {
      ...indexInfo
    }
  }
}

export default Index
