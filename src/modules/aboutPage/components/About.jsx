import {
  // HiOutlineAcademicCap as EducationIcon,
  HiOutlineBookmark as AboutIcon,
  // HiOutlineBriefcase as CareerIcon,
  // HiOutlineDocumentText as ResumeIcon
} from "react-icons/hi"

import { Tabs } from "@/common/components/elements/Tabs"

import Story from "./Story"

const About = () => {
  const TABS = [
    {
      label: (
        <TabLabel>
          <AboutIcon size={17} /> Intro
        </TabLabel>
      ),
      children: <Story />
    }
  ]
  return <Tabs tabs={TABS} />
}

export default About

const TabLabel = ({ children }) => (
  <div className="flex items-center justify-center gap-1.5">{children}</div>
)
