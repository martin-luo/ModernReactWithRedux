import { useState, useEffect } from "react";

export const useLocation = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Get user's current location.
    window.navigator.geolocation.getCurrentPosition(
      ({ coords }) => setLat(coords.latitude),
      ({ message: errorMessage }) => setErrorMessage(errorMessage)
    );
  }, []);

  return [lat, errorMessage];
};
