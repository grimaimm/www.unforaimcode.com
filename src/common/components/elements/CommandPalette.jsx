import * as React from "react"
import { Dialog, Transition, DialogBackdrop } from "@headlessui/react"
import { useRouter } from "next/router"
import { BiSearch as SearchIcon } from "react-icons/bi"
import { HiOutlineChat as AiIcon } from "react-icons/hi"
import clsx from "clsx"
import useDebounce from "@/common/hooks/useDebounce"

import { EXTERNAL_LINKS, MENU_ITEMS } from "@/common/constant/Menu"
import { SOCIAL_MEDIA } from "@/common/constant/SocialMedia"
import { CommandPaletteContext } from "@/common/context/CommandPaletteContext"

const CommandPalette = () => {
  const { isOpen, setIsOpen } = React.useContext(CommandPaletteContext)
  const [query, setQuery] = React.useState("")
  const [askAssistantClicked ] = React.useState(false)
  const router = useRouter()

  const debouncedQuery = useDebounce(query, 300) // Apply debounce to the query

  const placeholders = [
    "Search or Ask anything..."
  ]

  const placeholder = placeholders[0]

  const menuOptions = [
    {
      title: "PAGES",
      children: MENU_ITEMS?.map(menu => ({
        ...menu,
        closeOnSelect: true
      }))
    },
    {
      title: "SOCIALS",
      children: SOCIAL_MEDIA?.map(menu => ({
        ...menu,
        closeOnSelect: true
      }))
    },
    {
      title: "EXTERNAL LINKS",
      children: EXTERNAL_LINKS?.map(menu => ({
        ...menu,
        closeOnSelect: true
      }))
    }
  ]

  const filteredMenuOptions = debouncedQuery
    ? menuOptions.map(menu => ({
        ...menu,
        children: menu.children.filter(item =>
          item.title.toLowerCase().includes(debouncedQuery.toLowerCase())
        )
      }))
    : menuOptions

  const isActiveRoute = href => router.pathname === href

  const handleSelect = menu => {
    setQuery("")

    if (menu.closeOnSelect) setIsOpen(false)

    menu.click?.()

    if (menu.isExternal) {
      window.open(menu.href, "_blank")
    } else {
      router.push(menu?.href)
    }
  }

  const handleSearch = ({ target: { value } }) => setQuery(value)

  const isEmptyState = filteredMenuOptions.every(menu => menu.children.length === 0)

  React.useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        setIsOpen(!isOpen)
      } else if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, setIsOpen])

  return (
    <Transition.Root show={isOpen} as={React.Fragment}>
      <Dialog
        onClose={setIsOpen}
        className="fixed inset-0 z-[999] overflow-y-auto p-4 pt-[25vh]"
      >
        <Transition.Child
          as={React.Fragment}
          enter="transition-opacity duration-200 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-100 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogBackdrop className="fixed inset-0 bg-zinc-600/90 dark:bg-zinc-900/90" />
        </Transition.Child>

        <Dialog.Panel>
          <Transition.Child
            as={React.Fragment}
            enter="transition-transform duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition-transform duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className="shadow-3xl relative mx-auto max-w-xl overflow-hidden rounded-xl border-2 border-zinc-100 bg-white ring-1 ring-black/5 backdrop-blur dark:divide-zinc-600 dark:border-zinc-800 dark:bg-[#1b1b1b80]"
            >
              <div className="flex items-center gap-3 border-b border-zinc-300 px-4 dark:border-zinc-800">
                {askAssistantClicked ? (
                  <AiIcon size={22} />
                ) : (
                  <SearchIcon size={22} />
                )}
                <input
                  onChange={handleSearch}
                  className="h-14 w-full border-0 bg-transparent text-zinc-800 placeholder-zinc-500 focus:outline-none focus:ring-0 dark:text-zinc-200"
                  placeholder={placeholder}
                />
              </div>
              <div
                className={clsx(
                  "max-h-80 overflow-y-auto px-1 py-2",
                  isEmptyState && "!py-0"
                )}
              >
                {filteredMenuOptions.map(menu => (
                  <div
                    key={menu.title}
                    className={clsx(
                      menu?.children?.length === 0 && "hidden",
                      "py-1"
                    )}
                  >
                    <div className="my-2 px-5 text-xs font-medium text-zinc-500">
                      {menu?.title}
                    </div>
                    <div className="space-y-1">
                      {menu?.children?.map((child, index) => (
                        <div
                          key={index.toString()}
                          onClick={() => handleSelect(child)}
                          className={clsx(
                            "group mx-2 flex cursor-pointer items-center justify-between gap-3 rounded-md px-4 py-2",
                            "dark:hover:bg-[#ffffff14]",
                            isActiveRoute(child?.href)
                              ? "bg-zinc-200 text-zinc-600 dark:bg-zinc-700/60 dark:text-white"
                              : "text-zinc-600 dark:text-zinc-300"
                          )}
                        >
                          <div className="flex items-center gap-5">
                            {child?.icon && (
                              <div
                                className={clsx(
                                  "transition-all duration-300 group-hover:-rotate-12",
                                  isActiveRoute(child?.href) && "-rotate-12"
                                )}
                              >
                                {child?.icon}
                              </div>
                            )}
                            <span>{child?.title}</span>
                          </div>
                          {isActiveRoute(child?.href) ? (
                            <span className="animate-pulse text-xs text-zinc-500">
                              You are here
                            </span>
                          ) : (
                            child?.type && (
                              <div className="rounded-md border border-zinc-400 px-1.5 py-0.5 text-xs text-zinc-500 dark:border-zinc-500">
                                {child?.type}
                              </div>
                            )
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                {isEmptyState && (
                  <div className="text-center py-4 text-zinc-500">
                    No results found
                  </div>
                )}
              </div>
            </div>
          </Transition.Child>
        </Dialog.Panel>
      </Dialog>
    </Transition.Root>
  )
}

export default CommandPalette
