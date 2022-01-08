import LoaderBackdrop from 'components/LoaderBackdrop';
import { useApp } from 'contexts/AppContext';
import React from 'react';

const withLoading = (Component: React.ComponentType) => ({ ...props }) => {
  const { loading } = useApp();
  return (
    <>
      <Component {...props} />
      <LoaderBackdrop open={loading} />
    </>
  );
};

export default withLoading;
