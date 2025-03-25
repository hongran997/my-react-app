import { Fragment, useState } from "react";
import { CSSTransition, SwitchTransition, TransitionGroup } from 'react-transition-group';

import './index.css';

export default function TransactionDemo() {
  const [isDisplay, setIsDisplay] = useState(true);

  return (
    <Fragment>
      <CSSTransition in={isDisplay} timeout={ 500} classNames={ 'fade'} >
        <div style={{width: '100px', height: '100px', border: '1px solid red', backgroundColor: 'red'}}></div>
      </CSSTransition>
      <button onClick={() => setIsDisplay((value => !value))}>toggle</button>
    </Fragment>
  )
}