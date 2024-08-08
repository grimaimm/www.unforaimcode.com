import * as React from "react"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { BsArrowRightShort as ExternalLinkIcon } from "react-icons/bs"

const MenuItem = ({
  title,
  href,
  icon,
  onClick,
  className = "",
  children,
  hideIcon = false
}) => {
  const [isHovered, setIsHovered] = React.useState(false)
  const isExternalUrl = href?.includes("http")
  const isHashLink = href === "#"
  const router = useRouter()

  const activeClasses = `flex items-center gap-2 py-2 pl-4 pr-2.5 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 hover:dark:text-zinc-300 rounded-lg group ${
    router.pathname === href
      ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:!text-zinc-200"
      : "hover:dark:lg:bg-zinc-800 hover:dark:!text-zinc-300 hover:lg:bg-zinc-200 hover:lg:rounded-lg lg:transition-all lg:duration-300"
  }`

  const handleClick = () => {
    if (onClick) onClick()
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const elementProps = {
    className: `${activeClasses} ${className}`,
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }

  const isActiveRoute = router.pathname === href

  const itemComponent = () => {
    return (
      <div {...elementProps}>
        {!hideIcon && (
          <div
            className={clsx(
              "transition-all duration-300 group-hover:-rotate-12",
              isActiveRoute && "animate-pulse -rotate-12"
            )}
          >
            {icon}
          </div>
        )}
        <div className="ml-0.5 flex-grow">{title}</div>
        {children && <>{children}</>}
        {isActiveRoute && (
          <ExternalLinkIcon size={22} className="animate-pulse text-gray-500" />
        )}
        {isExternalUrl && isHovered && (
          <ExternalLinkIcon
            size={22}
            className="-rotate-45 text-gray-500 lg:transition-all lg:duration-300"
          />
        )}
      </div>
    )
  }

  return isHashLink ? (
    <div className="cursor-pointer">{itemComponent()}</div>
  ) : (
    <Link
      href={href}
      target={isExternalUrl ? "_blank" : ""}
      onClick={handleClick}
    >
      {itemComponent()}
    </Link>
  )
}

export default MenuItem
