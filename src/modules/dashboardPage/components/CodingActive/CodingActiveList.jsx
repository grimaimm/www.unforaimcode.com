import clsx from "clsx"

import Progress from "./Progress"

const sumTotalFromArray = (data, key) => {
  return (
    data.reduce(
      (previousValue, currentValue) => previousValue + currentValue[key],
      0
    ) ?? 0
  )
}

const CodingActiveList = ({ data }) => {
  const getLanguagesTotalHours = sumTotalFromArray(
    data?.languages || [],
    "hours"
  )
  const getLanguagesTotalMinutes = sumTotalFromArray(
    data?.languages || [],
    "minutes"
  )
  const getLanguagesTotalTimeDisplay = `${Math.floor(
    (getLanguagesTotalMinutes % 3600) / 60
  ) + getLanguagesTotalHours} hrs ${getLanguagesTotalMinutes} mins`

  const getEditorTotalHours = sumTotalFromArray(data?.categories || [], "hours")
  const getEditorTotalMinutes = sumTotalFromArray(
    data?.categories || [],
    "minutes"
  )
  const getEditorTotalTimeDisplay = `${Math.floor(
    (getEditorTotalMinutes % 3600) / 60
  ) + getEditorTotalHours} hrs ${getEditorTotalMinutes} mins`

  const actives = [
    {
      title: "Languages",
      total: getLanguagesTotalTimeDisplay,
      data: data?.languages,
      styles: {
        bg: "bg-gradient-to-r from-indigo-400 to-purple-400"
      }
    },
    {
      title: "Categories",
      total: getEditorTotalTimeDisplay,
      data: data?.categories,
      styles: {
        bg: "bg-gradient-to-r from-indigo-400 to-purple-400"
      }
    }
  ]

  if (!data) {
    return null
  }

  return (
    <div className="mt-2 flex flex-col gap-6 sm:flex-row sm:gap-4">
      {actives.map(item => (
        <div
          key={item?.title}
          className={clsx(
            item?.styles?.bg,
            "relative flex flex-1 flex-col gap-2 rounded-lg p-[2px]"
          )}
        >
          <div className="h-full w-full rounded-lg bg-zinc-50 p-2 dark:bg-zinc-950">
            <p className="absolute -top-3 left-3 bg-zinc-50 px-2 dark:bg-zinc-950">
              {item?.title}
            </p>

            <ul className="flex flex-col gap-1 px-4 py-3">
              {item?.data?.map(subItem => (
                <li key={subItem?.name}>
                  <Progress data={subItem} className={item?.styles?.bg} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CodingActiveList
