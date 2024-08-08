import AnimateCounter from "@/common/components/elements/AnimateCounter"
import Card from "@/common/components/elements/Card"

const OverviewItem = ({ label, value, unit = "" }) => (
  <Card className="flex flex-col self-center rounded-xl px-4 py-3 border border-zinc-200 bg-gradient-to-br from-white to-zinc-100 dark:border-zinc-700 dark:from-zinc-800 dark:to-zinc-900/50">
    <span className="text-sm dark:text-zinc-400">{label}</span>
    <div>
      <AnimateCounter
        className="text-xl font-medium text-indigo-400 lg:text-2xl"
        total={value}
      />
      {unit && <span className="text-sm dark:text-zinc-400"> {unit}</span>}
    </div>
  </Card>
)

export default OverviewItem
