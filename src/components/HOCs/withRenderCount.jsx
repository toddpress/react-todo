import React, { useEffect, useRef } from 'react';

export function withRenderCount(WrappedComponent) {
  return function WithRenderCount(props) {
    const renderCountRef = useRef(0);

    useEffect(() => {
      renderCountRef.current += 1;
      console.log(`Rendered ${WrappedComponent.name} ${renderCountRef.current} times`);
    });

    return <WrappedComponent {...props} />;
  };
}

export default withRenderCount;