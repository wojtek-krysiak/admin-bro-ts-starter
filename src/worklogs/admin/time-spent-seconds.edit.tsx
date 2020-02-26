import React from 'react';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import {
  BasePropertyProps, FormGroup, Label, Input, FormMessage,
} from 'admin-bro';


const dhmRegex = /(?<day>\d+d)?\s*(?<hour>\d+h)?\s*(?<minute>\d+m)?/;

const parseInput = (event) => {
  const { groups } = event.target.value.match(dhmRegex);
  const d = groups.day ? Number.parseInt(groups.day, 10) : 0;
  const h = groups.hour ? Number.parseInt(groups.hour, 10) : 0;
  const m = groups.minute ? Number.parseInt(groups.minute, 10) : 0;

  return m * 60 + h * 60 * 60 + d * 8 * 60 * 60;
};

const TimeSpentSecondsList: React.FC<BasePropertyProps> = (props) => {
  const { property, record, onChange } = props;
  const value = record.params[property.name];

  const handleChange = (event) => {
    onChange(property.name, event);
    onChange('billableSeconds', parseInput(event));
  };
  return (
    <FormGroup>
      <Label>Time spent</Label>
      <Input value={value} onChange={handleChange} />
      <FormMessage />
    </FormGroup>
  );
};
export default TimeSpentSecondsList;
