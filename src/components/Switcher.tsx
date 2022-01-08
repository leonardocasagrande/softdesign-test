import loadable from '@loadable/component';
import routes from 'config/routes';
import withErrorAlert from 'components/HOCs/withErrorAlert';
import withLoading from 'components/HOCs/withLoading';
import NotFound from 'pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IRoute } from 'types';
import withSuccessAlert from './HOCs/withSuccessAlert';

const Switcher = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route: IRoute) => {
          const allowed =
            (!route.secure && !localStorage.getItem('username')) ||
            (route.secure && !!localStorage.getItem('username'));
          const componentRoute = !allowed ? 'NotAllowed' : route.component;
          const Component = loadable(() => import(`pages/${componentRoute}`));
          const EnhancedComponent = withSuccessAlert(
            withErrorAlert(withLoading(Component))
          );
          return (
            <>
              <Route
                key={route.name}
                path={route.path}
                element={<EnhancedComponent />}
              />
            </>
          );
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Switcher;
