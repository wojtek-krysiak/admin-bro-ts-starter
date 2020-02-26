import React from 'react';
import {
  BasePropertyProps, Input, useRecord, BasePropertyComponent, ReduxState, Button, RecordJSON, useRecords, Box, Icon,
} from 'admin-bro';
import { useSelector } from 'react-redux';

const IssuesShow: React.FC<BasePropertyProps> = (props) => {
  const { record } = props;

  const projectId = record.id;

  const {
    record: issue, submit, handleChange, loading,
  } = useRecord({ params: { projectId } } as unknown as RecordJSON, 'Issue');

  const { resource: Issue, property: description } = useSelector((state: ReduxState) => {
    const resource = state.resources.find((r) => r.id === 'Issue');
    const property = resource.editProperties.find((p) => p.name === 'description');
    return {
      resource,
      property,
    };
  });

  const { records: issues, fetchData } = useRecords('Issue');

  const handleClick = () => {
    submit().then((data) => {
      if (data.data.record.id) {
        handleChange({ params: { projectId } });
      }
      fetchData();
    });
  };

  return (
    <div>
      {issues.map((i) => (
        <Box my="default">
          {i.params.description}
        </Box>
      ))}
      <BasePropertyComponent
        record={issue}
        where="edit"
        onChange={handleChange}
        property={description}
        resource={Issue}
      />
      <Button onClick={handleClick}>
        {loading ? (<Icon icon="Fade" spin />) : null}
        Add
      </Button>
    </div>
  );
};

export default IssuesShow;
