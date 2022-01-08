import ErrorDialog from 'components/dialogs/ErrorDialog';
import { useApp } from 'contexts/AppContext';
import React from 'react';

const withErrorAlert = (Component: React.ComponentType) => ({ ...props }) => {
  const { errorMessage, setErrorMessage } = useApp();
  return (
    <>
      <Component {...props} />
      {!!errorMessage && (
        <ErrorDialog
          open
          title={errorMessage}
          description="Tente novamente mais tarde"
          onClose={() => setErrorMessage(null)}
        />
      )}
    </>
  );
};

export default withErrorAlert;
