import axios from "axios";
import { useState } from "react";

export default function AddLocation({ addLocation }) {
  const [findLocation, setFindLocation] = useState([]);

  const searchLocation = async (e) => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/search.json",
      params: { q: e.target.value },
      headers: {
        "X-RapidAPI-Key": "f00cc991a8mshbeaea5037b220c2p144ed0jsnca18dfa3f601",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setFindLocation(response.data);
    } catch (error) {
      setFindLocation([]);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        name="location"
        id="location"
        className="py-3 px-4 w-full h-full mb-1 order-1 text-md text-slate-500 font-medium focus:border border-slate-400 outline-none rounded-md"
        onChange={searchLocation}
        placeholder="+ Add Location"
      />
      <div className="absolute w-full max-h-44 overflow-auto">
        <ul className="bg-white">
          {findLocation.map((el) => (
            <li
              key={Math.random()}
              onClick={() => {
                addLocation(el);
                setFindLocation([]);
                document.getElementById("location").value = "";
              }}
              className="px-4 py-2 mb-1 hover:bg-blue-600 hover:text-white">
              {el.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
