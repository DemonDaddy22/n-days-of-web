(function () {
  const WEATHER_BASE_URI = "https://api.open-meteo.com/v1/forecast";

  const WEATHER_KEY_MAP = Object.freeze({
    apparent_temperature: {
      key: 'apparent_temperature',
      title: 'Apparent Temperature',
    },
    rain: {
      key: 'rain',
      title: 'Rain',
    },
    snowfall: {
      key: 'snowfall',
      title: 'Snowfall',
    },
    relative_humidity_2m: {
      key: 'relative_humidity_2m',
      title: 'Relative Humidity',
    },
    surface_pressure: {
      key: 'surface_pressure',
      title: 'Surface Pressure',
    },
    time: {
      key: 'time',
      title: 'Date',
    },
    wind_direction_10m: {
      key: 'wind_direction_10m',
      title: 'Wind Direction',
    },
    wind_speed_10m: {
      key: 'wind_speed_10m',
      title: 'Wind Speed',
    },
  });

  let watchId;
  let lat;
  let long;
  let created = false;

  const button = document.querySelector("button");
  const section = document.querySelector("section");
  const status = document.getElementById("status");
  const body = document.body;

  const createElementWithClass = (elm = 'div', classes = []) => {
    const element = document.createElement(elm);
    element.classList.add(...classes);
    return element;
  };

  const createDetailElement = (data, units, key) => {
    const detail = createElementWithClass('div', ['detail']);
    const fragment = document.createDocumentFragment();
    const header = createElementWithClass('h4', ['detailHeader']);
    const content = createElementWithClass('p', ['detailContent']);

    header.textContent = WEATHER_KEY_MAP[key].title;
    content.textContent = key === WEATHER_KEY_MAP.time.key ? `${new Date(data[key]).toLocaleDateString()}` : `${data[key]} ${units[key]}`;

    fragment.appendChild(header);
    fragment.appendChild(content);
    detail.appendChild(fragment);

    return detail;
  };

  const createDetailsElement = (data, units) => {
    const details = createElementWithClass('div', ['details']);
    const fragment = document.createDocumentFragment();

    for (let key of Object.keys(data)) {
      if (key in WEATHER_KEY_MAP) {
        const detail = createDetailElement(data, units, key);
        fragment.appendChild(detail);
      }
    }

    details.appendChild(fragment);

    return details;
  };

  const getWeatherDetails = async (lat, long) => {
    return fetch(`${WEATHER_BASE_URI}?latitude=${lat}&longitude=${long}&current=temperature_2m,wind_speed_10m,wind_direction_10m,rain,precipitation,snowfall,surface_pressure,relative_humidity_2m,apparent_temperature,is_day,cloud_cover`).then((res) => res.json());
  };

  const handleLocationSuccess = async (pos) => {
    const { latitude, longitude } = pos?.coords ?? {};

    if (!latitude || !longitude) {
      return;
    }

    if (lat === latitude && long === longitude) {
      navigator.geolocation.clearWatch(watchId);
      return;
    } else {
      lat = latitude;
      long = longitude;
    }

    try {
      const weather = await getWeatherDetails(latitude, longitude);
      const { current, current_units } = weather || {};

      if (!current || !current_units) {
        throw 'invalid data';
      }

      if (weather?.current?.is_day) {
        body.classList.remove('night');
        body.classList.add('day');
      } else {
        body.classList.remove('day');
        body.classList.add('night');
      }

      const details = createDetailsElement(current, current_units);
      section.childNodes.forEach((node) => node.remove());
      section.appendChild(details);
      created = true;
    } catch (err) {
      if (!created) {
        status.textContent = "Unable to fetch weather details.";
      }
    }
  };

  const handleLocationFailure = () => {
    status.textContent = "Unable to fetch location information.";
  };

  const handleButtonClick = () => {
    if (!navigator.geolocation) {
      status.textContent = "Geolocation is not supported in this browser.";
    } else {
      navigator.geolocation.getCurrentPosition(handleLocationSuccess, handleLocationFailure, { enableHighAccuracy: true, maximumAge: 60000 });
    }
  };

  button.addEventListener("click", handleButtonClick);

  watchId = navigator.geolocation.watchPosition(async () => {
    created && handleLocationSuccess();
  }, async () => {
    created && handleLocationFailure();
  }, { enableHighAccuracy: true, maximumAge: 60000 });
}());