import React from 'react';

type PassThroughPropsType = <Props>(
  Component: React.ComponentType<Props>,
) => (props: Props) => JSX.Element;

export const passThroughProps: PassThroughPropsType = (Component) => (props) => (
  <Component {...props} />
);
