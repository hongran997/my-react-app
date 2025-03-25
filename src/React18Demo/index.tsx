// import { Suspense } from 'react';
import AutoBatchingDemo from './features/AutoBatchingDemo';
import TransitionDemo from './features/TransitionDemo';
// import SuspenseDemo from './features/SuspenseDemo';
import UseIdDemo from './features/UseIdDemo';
import UseDeferredValueDemo from './features/UseDeferredValueDemo';
import FlushSyncDemo from './features/FlushSyncDemo';
import ReturnNull from './features/ReturnNull';
import ReturnUndefined from './features/ReturnUndefined';
const React18Demo = () => { 
  return (
    <div>
      <section>
        <h3>1. 自动批处理(Automatic Batching)</h3>
        <AutoBatchingDemo />
      </section>  
      <section>
        <h3>2. Transitions API</h3>
        <TransitionDemo />
      </section>
      <section>
        <h3>3. Suspense 和 并发渲染</h3>
        {/* <Suspense fallback={<div>loading</div>}>
          <SuspenseDemo />
        </Suspense> */}
      </section>
      <section>
        <h3>4. 新的 Hooks: useId()</h3>
        <UseIdDemo />
      </section>
      <section>
        <h3>5. useDeferredValue</h3>
        <UseDeferredValueDemo />
      </section>
      <section>
        <h3>6. FlushSync</h3>
        <FlushSyncDemo />
      </section>
      <section>
        <h3>7. return null</h3>
        <ReturnNull />
      </section>
      <section>
        <h3>7. return undefined</h3>
        <ReturnUndefined />
      </section>
    </div >
  )
}

export default React18Demo; 