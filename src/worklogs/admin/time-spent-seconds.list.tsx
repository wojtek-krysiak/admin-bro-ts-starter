import React from 'react';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';

const TimeSpentSecondsList: React.FC<BasePropertyProps> = (props) => {
  const { property, record } = props;
  const value = record.params[property.name];
  return (
    <div>{formatDistanceStrict(0, 1000 * +value)}</div>
  );
};
export default TimeSpentSecondsList;
