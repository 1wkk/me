import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_TOKEN })

const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID

const Flomo = ({ propsResponses }) => {
  return (
    <div className='flex flex-col justify-center items-center space-y-10 px-72'>
      {propsResponses.map(response => (
        <div
          key={response.id}
          className='hover:shadow-lg prose w-auto h-auto rounded-lg p-8 mx-20 space-y-4 min-w-full'
          style={{
            borderRadius: '20px',
            background: '#fafafa',
            boxShadow: '20px 20px 60px #d5d5d5, -20px -20px 60px #ffffff'
          }}
        >
          <div className='text-xs opacity-50'>
            {new Date(response.created_time).toDateString()}
          </div>
          <div className=''>{response.content}</div>
        </div>
      ))}
    </div>
  )
}

export const getServerSideProps = async () => {
  const responses = await notion.databases.query({
    database_id: NOTION_DATABASE_ID
  })

  const propsResponses = responses.results.map(response => ({
    id: response['id'],
    created_time: response['created_time'],
    content: response['properties']['Content']['rich_text'][0]['plain_text']
  }))

  return {
    props: {
      propsResponses
    }
  }
}

export default Flomo
