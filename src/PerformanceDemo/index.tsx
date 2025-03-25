import { Fragment, lazy, Suspense } from "react"
import ImmerDemo from "./ImmerDemo"
import Memo1Demo from "./Memo1Demo"
import Memo2Demo from "./Memo2Demo"
import UseCallbackDemo from "./UseCallbackDemo"
const BigDatatable = lazy(() => import('./BigDatatable'))

export default function PerformanceDemo() { 
  return (
    <Fragment>
      {/* <ImmerDemo />
      <Memo1Demo />
      <Memo2Demo />
      <Suspense fallback={<div>Loading...</div>}>
        <BigDatatable />
      </Suspense> */}
      <UseCallbackDemo />
    </Fragment>
  )
}