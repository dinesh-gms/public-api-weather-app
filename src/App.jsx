import axios from "axios";
import React, { useState } from "react";
import Locations from "./components/Locations";
import Layout from "./components/Layout";
import Temperature from "./components/Temperature";

const App = () => {
  const [data, setData] = useState({
    temp: 0,
    time: "0000-00-00, 0: 00am",
  });

  const getTemperature = async (coord) => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: coord },
      headers: {
        "X-RapidAPI-Key": "f00cc991a8mshbeaea5037b220c2p144ed0jsnca18dfa3f601",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };
    const res = await axios.request(options);
    setData({
      temp: res.data.current.temp_c,
      time: res.data.location.localtime,
    });
  };

  const locationEl = document.querySelectorAll(".locations li");
  for (let i = 0; i < locationEl.length; i++) {
    locationEl[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace("active", "");
      }
      this.classList.toggle("active");
    });
  }

  return (
    <Layout>
      <div className="w-3/6 px-8 border-r border-slate-400">
        <Locations getTemperature={getTemperature} />
      </div>
      <div className="w-full flex flex-col items-center">
        <Temperature data={data} />
      </div>
    </Layout>
  );
};

export default App;
