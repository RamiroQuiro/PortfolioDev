export const climaSwitch = (clima, descripcion) => {
    switch (clima) {
      case "Clouds":
        switch (descripcion) {
          case "few clouds":
            return "Poco nuboso";
            break;
          case "scattered clouds":
            return "Nubes Dispersas";
            break;
          case "broken clouds":
            return "Algo Nublado";
            break;
          case "overcast clouds":
            return "Bastante Nublado pa";
            break;
          default:
           return  "Nublado";
        }
        break;
      case "Clear":
        switch (descripcion) {
          case "clear sky":
            return "Despejado";
            break;
          default:
           return  "Despejado";
            break;
        }
        break;
      case "Rain":
        switch (descripcion) {
          case "light rain":
            return "Lluvia Ligera";
            break;
          case "moderate rain":
            return "Lluvia Moderada";
            break;
          case "heavy intensity rain":
            return "Lluvia Intensa";
            break;
          case "very heavy rain":
            return "Lluvia Muy Intensa";
            break;
          case "extreme rain":
            return "Lluvia Extremadamente Intensa";
            break;
          case "freezing rain":
            return "Lluvia Congelante";
            break;
          case "light intensity shower rain":
            return "Lluvia Ligera";
            break;
          case "shower rain":
            return "Lluvia";
            break;
          case "heavy intensity shower rain":
            return "Lluvia Intensa";
            break;
          case "ragged shower rain":
            return "Lluvia Dispersa";
            break;
          default:
           return  "Lluvia";
        }
        break;
      case "Snow":
        switch (descripcion) {
          case "light snow":
            return "Nieve Ligera";
            break;
          case "snow":
            return "Nieve";
            break;
          case "heavy snow":
            return "Nieve Intensa";
            break;
          case "sleet":
            return "Nieve";
            break;
          case "shower sleet":
            return "Nieve";
            break;
          case "light rain and snow":
            return "Nieve Ligera";
            break;
          case "rain and snow":
            return "Nieve";
            break;
          case "light shower snow":
            return "Nieve Ligera";
            break;
          case "shower snow":
            return "Nieve";
            break;
          case "heavy shower snow":
            return "Nieve Intensa";
            break;
          default:
           return  "Nieve";
        }
        break;
      case "Drizzle":
        switch (descripcion) {
          case "light intensity drizzle":
            return "Lluvia Ligera";
            break;
          case "drizzle":
            return "Lluvia";
            break;
          case "heavy intensity drizzle":
            return "Lluvia Intensa";
            break;
          case "light intensity drizzle rain":
            return "Lluvia Ligera";
            break;
          case "drizzle rain":
            return "Lluvia";
            break;
          case "heavy intensity drizzle rain":
            return "Lluvia Intensa";
            break;
          case "shower rain and drizzle":
            return "Lluvia";
            break;
          case "heavy shower rain and drizzle":
            return "Lluvia Intensa";
            break;
          case "shower drizzle":
            return "Lluvia";
            break;
          default:
           return  "Lluvia";
        }
        break;
      case "Thumerstorm":
        switch (descripcion) {
          case "thunderstorm with light rain":
            return "Tormenta con Lluvia Ligera";
            break;
          case "thunderstorm with rain":
            return "Tormenta con Lluvia";
            break;
          case "thunderstorm with heavy rain":
            return "Tormenta con Lluvia Intensa";
            break;
          case "light thunderstorm":
            return "Tormenta con Lluvia Ligera";
            break;
          case "thunderstorm":
            return "Tormenta con Lluvia";
            break;
          case "heavy thunderstorm":
            return "Tormenta con Lluvia Intensa";
            break;
          case "ragged thunderstorm":
            return "Tormenta con Lluvia Dispersa";
            break;
          case "thunderstorm with light drizzle":
            return "Tormenta con Lluvia Ligera";
            break;
          case "thunderstorm with drizzle":
            return "Tormenta con Lluvia";
            break;
          case "thunderstorm with heavy drizzle":
            return "Tormenta con Lluvia Intensa";
            break;
          default:
            return "Tormenta con Lluvia";
        }
        break;
      case "Mist":
        return "Neblina";
        break;
      case "Smoke":
        return "Humo";
        break;
      case "Haze":
        return "Bruma";
        break;
      case "Dust":
        return "Polvo";
        break;
      case "Fog":
        return "Niebla";
        break;
      case "Sand":
        return "Arena";
        break;
      case "Ash":
        return "Ceniza";
        break;
      case "Squall":
        return "Tormenta";
        break;
      case "Tornado":
        return "Tornado";
        break;

      default:
        return "Despejado"
    }
  };
