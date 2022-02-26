import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_TOKEN })

const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID

const Flomo = ({ propsResponses }) => {
  return (
    <div
      className='grid px-20'
      style={{
        gridTemplateColumns:
          'minmax(min-content,1fr) minmax(min-content,1fr) minmax(min-content,1fr)',
        gridGap: '30px'
      }}
    >
      {propsResponses.map(response => (
        <div
          key={response.id}
          className='hover:shadow-lg prose rounded-lg p-8 space-y-4 h-min'
          style={{
            borderRadius: '20px',
            background: '#fafafa',
            boxShadow: '20px 20px 60px #d5d5d5, -20px -20px 60px #ffffff',
            gridRow: 'auto'
            // gridColumn: 'auto'
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
