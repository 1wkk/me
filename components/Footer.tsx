import { year } from '../lib/date'
import { footer } from '../theme.config'

const Footer = () => (
  <div className='mt-10 mb-6 prose m-auto opacity-50 flex text-center'>
    <span className='text-sm text-center'>
      <a
        target='_blank'
        href='https://creativecommons.org/licenses/by-nc-sa/4.0/'
        rel='noreferrer'
      >
        CC BY-NC-SA 4.0
      </a>{' '}
      {year()} © {footer.name}
    </span>
    <div className='flex-auto'></div>
  </div>
)

export default Footer
