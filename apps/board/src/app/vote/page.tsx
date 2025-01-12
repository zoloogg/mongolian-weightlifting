
import { FC, Suspense } from "react"
import { VotePage } from "../../../lib"

const Page: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VotePage />
    </Suspense>
  )
}

export default Page
