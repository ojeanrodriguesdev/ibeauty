import React from 'react';
import { useIntl } from 'react-intl';

const SafeFormattedMessage = ({ id, values, ...props }) => {
  const intl = useIntl();
  const message = intl.formatMessage({ id }, values);

  return (
    <span
      {...props}
      dangerouslySetInnerHTML={{ __html: message }}
    />
  );
};

export default SafeFormattedMessage;
