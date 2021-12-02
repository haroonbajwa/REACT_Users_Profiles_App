import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function UsersPagination({ pageNumber, setPageNumber, totalPages }) {

  // const pageCount = Math.ceil()

  return (
    <div style={{justifyContent: 'center', display: 'flex'}}>
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={pageNumber}
          color="primary"
          onChange={(event, num) => setPageNumber(num) }
        />
      </Stack>
    </div>
  );
}
