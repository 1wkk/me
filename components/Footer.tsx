import { year } from '../lib/date'
import { footer } from '../theme.config'

const Footer = () => (
  <div id='footer' className='m-auto opacity-50 text-sm text-center prose'>
    <a
      target='_blank'
      href='https://creativecommons.org/licenses/by-nc-sa/4.0/'
      rel='noreferrer'
    >
      CC BY-NC-SA 4.0
    </a>{' '}
    {year()} © {footer.name}
  </div>
)

export default Footer
