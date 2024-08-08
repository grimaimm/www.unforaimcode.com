import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"

export const Tab = ({ children }) => {
  return <>{children}</>
}

export const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = React.useState(0)

  const handleTabClick = index => {
    setActiveTab(index)
  }

  return (
    <div className="rounded border-x border-b dark:border-zinc-800">
      <div className="flex flex-col gap-1.5 sm:flex-row md:gap-1">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex-1 px-4 py-2 text-center font-medium ${
              activeTab === index
                ? "bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                : "bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 hover:dark:text-zinc-200"
            } ${
              index === 0
                ? "md:rounded-t"
                : index === tabs.length - 1
                ? "md:rounded-tr"
                : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="px-4 py-8 sm:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            {tabs[activeTab].children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
