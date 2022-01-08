import loadable from '@loadable/component';
import withErrorAlert from 'components/HOCs/withErrorAlert';
import withLoading from 'components/HOCs/withLoading';
import routes from 'config/routes';
import { useAuth } from 'contexts/AuthContext';
import NotFound from 'pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IRoute } from 'types';
import withSuccessAlert from './HOCs/withSuccessAlert';

const Switcher = () => {
  const { username } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route: IRoute) => {
          const allowed =
            (!route.secure && !username) || (route.secure && !!username);
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
