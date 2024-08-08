import React from 'react'

const QueryNotFound = ({ query }) => {
  return (
    <div className="flex flex-col items-center space-y-6 px-5 pb-10 pt-5 ">
      <div className="space-y-2 text-center text-neutral-500">
        <p>
          No result found about
          <span className="ml-1 mr-2 italic text-neutral-600 dark:text-neutral-400">
            `{query}`
          </span>
          in this website.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400">
          Ask my AI Assistant or find in Google instead?
        </p>
      </div>
      <p className="text-sm text-neutral-500">
        Press `ESC` to close this window
      </p>
    </div>
  )
}

export default QueryNotFound
