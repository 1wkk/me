import mdit from 'markdown-it'
import anchor from 'markdown-it-anchor'
import toc from 'markdown-it-table-of-contents'
import prism from 'markdown-it-prism'

export const easyRenderer = mdit()

export const fullRenderer = easyRenderer.use(anchor).use(toc).use(prism)
