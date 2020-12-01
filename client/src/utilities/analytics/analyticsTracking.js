import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

export const trackUserNavigation = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_KEY);
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
};

export const trackUserEvent = (category, action) => {
  ReactGA.event({
    category: category,
    action: action,
  });
};