import React, { Dispatch, SetStateAction } from 'react';
import TitleRow from './UserHeaderFilters';

interface TTableHead {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const TableHead: React.FC<TTableHead> = ({ setIsLoading }) => {
  return (
    <thead>
      <TitleRow setIsLoading={setIsLoading} />
    </thead>
  );
};

export default TableHead;
