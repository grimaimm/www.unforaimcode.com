import Link from "next/link"
import { BsGithub as GithubIcon } from "react-icons/bs"
import useSWR from "swr"
import { SectionHeading, SectionSubHeading } from "@/common/components/elements/SectionTitle"
import { fetcher } from "@/services/fetcher"

import Calendar from "./Calender"
import Overview from "./Overview"

const Contributions = ({ username, endpoint }) => {
  const { data } = useSWR(endpoint, fetcher)

  const contributionCalendar =
    data?.contributionsCollection?.contributionCalendar

  return (
    <section className="flex flex-col gap-y-2">
      <SectionHeading
        title="Contributions"
        icon={<GithubIcon className="mr-1" />}
      />
      <SectionSubHeading>
        <p className="dark:text-zinc-400">
          My contributions from last year on github.
        </p>
        <Link
          href={`https://github.com/${username}`}
          target="_blank"
          passHref
          className="font-code text-sm text-zinc-400 hover:text-zinc-700 dark:text-zinc-500 hover:dark:text-zinc-400 "
        >
          @{username}
        </Link>
      </SectionSubHeading>

      {!data && <div className="dark:text-zinc-400">No Data</div>}

      {data && (
        <div className="space-y-3">
          <Overview data={contributionCalendar} />
          <Calendar data={contributionCalendar} />
        </div>
      )}
    </section>
  )
}

export default Contributions;
