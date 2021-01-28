import React from 'react';
import PropTypes from 'prop-types';
import Rollbar from 'rollbar';

import { coreEvents } from '@folio/stripes/core';
import { errorLogging } from 'stripes-config';

/**
 * Log ERROR events to Rollbar.
 * @see https://rollbar.com
 * @see https://docs.rollbar.com/docs/react
 *
 */
export default class RollbarLogger extends React.Component {
  // eventHandler
  static eventHandler(event) {
    if (event === coreEvents.ERROR) {
      const rollbar = new Rollbar({ ...errorLogging.rollbar });
      return (error, info) => {
        rollbar.error(error, info);
      };
    }

    return null;
  }

  render() {
    return <></>;
  }
}
