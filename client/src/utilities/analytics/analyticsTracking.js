import { useEffect } from "react";
import ReactGA from "react-ga";

const logPageview = (pageName) => ReactGA.pageview(pageName);

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