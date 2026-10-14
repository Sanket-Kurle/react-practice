import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import ErrorPage from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
       const places = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const sortedPlaces = sortPlacesByDistance(
              resData.places,
              position.coords.latitude,
              position.coords.longitude,
            );
            setAvailablePlaces(sortedPlaces);
            setIsFetching(false);
          },
          (geolocationError) => {
            console.error("Could not get location:", geolocationError.message);

            // Display places without distance sorting
            setAvailablePlaces(places);
            setIsFetching(false);
          },
          {
            timeout: 10000,
          },
        );
        if (!navigator.geolocation) {
          setAvailablePlaces(resData.places);
          setIsFetching(false);
        }
      } catch (error) {
        setError({
          message:
            error.message ||
            "Could not fetch Places Data, please try again later!!!",
        });
        setIsFetching(false);
      }
    }
    fetchPlaces();
  }, []);

  if (error) {
    return (
      <ErrorPage title={"Error Occured!!!!!😜😜😜"} message={error.message} />
    );
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="fetchig Places Data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
