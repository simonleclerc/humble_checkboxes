import React, { FunctionComponent } from "react";

const DEFAULT_PRESENTER = (props: any, _context: any) => props;

export const withPresenter = (
  Inner: FunctionComponent,
  presenter = DEFAULT_PRESENTER
) => (props: any, context: any) => <Inner {...presenter(props, context)} />;
