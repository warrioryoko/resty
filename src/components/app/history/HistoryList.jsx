import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const HistoryList = ({ poorlyNamedHistoryAggregate }) => {
  const historyElements = poorlyNamedHistoryAggregate.map(history => (
    <li key={`${history.method}+${history.url}`} >
      <HistoryItem method={history.method} url={history.url} body={history.body} />
    </li>
  ));

  return (
    <ul>
      <li>Request History</li>
      {historyElements}
    </ul>
  );
};

// Again, body may or may not have anything depending on whether it's a GET, POST, etc
HistoryList.propTypes = {
  poorlyNamedHistoryAggregate: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    body: PropTypes.string,
    method: PropTypes.string.isRequired
  })).isRequired
};

export default HistoryList;