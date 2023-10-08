import React from 'react'
import BLOG from '@/blog.config'
// import DarkModeButton from '@/components/DarkModeButton'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const copyrightDate = (function() {
    if (Number.isInteger(BLOG.SINCE) && BLOG.SINCE < currentYear) {
      return BLOG.SINCE + '-' + currentYear
    }
    return currentYear
  })()

  return (
    <>
        <footer
      className='relative z-10 dark:bg-black flex-shrink-0 bg-hexo-light-gray justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm p-6'
    >
      {/* <DarkModeButton/> */}

            
      <span className='pl-2 hidden busuanzi_container_site_uv'>
        {/* <i className='fas fa-users'/> <span className='px-1 busuanzi_value_site_uv'> </span> </span>
        <h1 className='text-xs pt-4 text-light-400 dark:text-gray-400'>{title} {BLOG.BIO && <>|</>} {BLOG.BIO}</h1> */}
        <p className='text-xs pt-2 text-light-500 dark:text-gray-500'>Powered by <a href='https://github.com/tangly1024/NotionNext' className='dark:text-gray-300'>NotionNext {BLOG.VERSION}</a>.</p></span><br/>
    </footer>
    </>

  )
}

export default Footer
