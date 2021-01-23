import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const logPageview = (pageName) => ReactGA.pageview(pageName);

export const useAnalyticsTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_KEY);
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
};

export const usePageTracking = (pageName) => {
  useEffect(() => {
    logPageview(pageName);
  }, [pageName]);
};

export const trackUserEvent = (category, action) => {
  ReactGA.event({
    category: category,
    action: action
  });
};