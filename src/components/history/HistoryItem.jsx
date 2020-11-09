import React from 'react';
import PropTypes from 'prop-types';

// This component is displaying the hsitory of methods sent against an API URL
// It shows the HTTP method, and the URL queried

const HistoryItem = ({ url, method, body }) => (
  <>
    <h2>{method}</h2>
    <p>{url}</p>
    <p>{body}</p>
  </>
);

// There might be nothing in the body
HistoryItem.propTypes = {
  url: PropTypes.string.isRequired,
  body: PropTypes.string,
  method: PropTypes.string.isRequired
};

export default HistoryItem;