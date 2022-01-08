import { render, RenderOptions } from '@testing-library/react';
import { AppContextProvider } from 'contexts/AppContext';
import { AuthContextProvider } from 'contexts/AuthContext';
import { FC, ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AllTheProviders: FC = ({ children }) => {
  return (
    <AuthContextProvider>
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={children} />
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </AuthContextProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
