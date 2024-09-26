import { useEffect, useState } from "react";
import AddLocation from "./AddLocation";

export default function Locations({ getTemperature }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [locations, setLocations] = useState([
    { coord: "28.6,77.2", name: "Madurai" },
  ]);

  useEffect(() => {
    getTemperature("28.6,77.2");
  }, []);

  const locationHandler = (coord, index) => {
    getTemperature(coord);
    setActiveIndex(index);
  };

  const addLocationHandler = (el) => {
    setLocations((prevLocation) => {
      return [
        ...prevLocation,
        { name: el.name, coord: `${el.lat}, ${el.lon}` },
      ];
    });
  };

  return (
    <ul className="flex flex-col">
      <div className="locations overflow-auto max-h-80">
        {locations.map((el, index) => (
          <li
            key={index}
            onClick={() => locationHandler(el.coord, index)}
            className={`py-3 px-4 mb-1 font-medium text-slate-900 rounded-md hover:text-blue-600 hover:bg-slate-300 cursor-pointer ${
              activeIndex === index ? "active" : ""
            }`}>
            {el.name}
          </li>
        ))}
      </div>
      <AddLocation addLocation={addLocationHandler} />
    </ul>
  );
}
