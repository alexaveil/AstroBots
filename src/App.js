import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { ScrollToTop, Loading } from "./components";
import * as keys from "./utils/keys";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3043E9",
    },
  },
});

const LazyHome = lazy(() => import("./pages/Home"));
const LazyChat = lazy(() => import("./pages/Chat"));

const PublicRoute = ({ component, ...rest }) => {
  return <Route {...rest} component={component} />;
};

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Suspense fallback={<Loading />}>
          <ScrollToTop />
          <Switch>
            <PublicRoute exact path={keys.HOME} component={LazyHome} />
            <PublicRoute path={keys.CHAT} component={LazyChat} />
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
