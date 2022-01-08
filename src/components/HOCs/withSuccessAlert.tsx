import SuccessSnackbar from 'components/SuccessSnackbar';
import { useApp } from 'contexts/AppContext';
import React from 'react';

const withSuccessAlert = (Component: React.ComponentType) => ({ ...props }) => {
  const { successMessage, setSuccessMessage } = useApp();
  return (
    <>
      <Component {...props} />
      {!!successMessage && (
        <SuccessSnackbar
          title={successMessage}
          onClose={() => setSuccessMessage(null)}
        />
      )}
    </>
  );
};

export default withSuccessAlert;
