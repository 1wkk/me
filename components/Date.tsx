import { t } from '../lib/date'

const Date = ({ date }) => (
  <dl>
    <dt className='sr-only'>Published on</dt>
    <dd className='text-base leading-6 font-medium text-gray-500'>
      <time dateTime={t(date)}>{date}</time>
    </dd>
  </dl>
)

export default Date
