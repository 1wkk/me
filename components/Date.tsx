const Date = ({ date }) => (
  <dl>
    <dt className='sr-only'>Published on</dt>
    <dd className='text-base leading-6 font-medium text-gray-500'>
      <time dateTime={new date(date.time).toISOString()}>{date.string}</time>
    </dd>
  </dl>
)

export default Date
