import Article from '../../components/Article'

import { getAllPostsIds, getPostInfo } from '../../lib/posts'

const Post = ({ frontmatter, html }) => (
  <main className='max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
    <Article
      frontmatter={frontmatter}
      html={html}
      nextPost={undefined}
      prevPost={undefined}
    ></Article>
  </main>
)

export const getStaticPaths = async () => {
  const paths = getAllPostsIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postInfo = getPostInfo(params.id)

  return {
    props: {
      ...postInfo
    }
  }
}

export default Post
