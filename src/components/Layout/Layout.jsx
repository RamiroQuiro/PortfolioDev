import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { climaSwitch } from "../../hooks/swichtDescripcion";
import {themes} from '../../contexts/themes';

export default function Layout() {
  const [localization, setLocalization] = useState({});
  const [clima, setClima] = useState({
      clima: "",
    temperatura: 0,
    descripcion: "",
    icono: "",
    himidity: 0,
    wind: 0,
    city: "",
    country: "",
  });
  const [fecha, setFecha] = useState({
    dia: "",
    mes: "",
    hora: "",
    minutos: "",
  });
  const datos = () => {
    const data = new Date();
    setFecha({
      dia: data.getDay(),
      mes: data.getMonth() + 1,
      anio: data.getFullYear(),
      hora: data.getHours(),
      minutos: data.getMinutes(),
    });
  };
  useEffect(() => {
    setInterval(datos, 1000);
    setInterval(
      navigator.geolocation.getCurrentPosition(function (position) {
        setLocalization({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      }),
      10000
    );
  }, []);

  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  /* conexion a API de tiempo/*/

  /* swicht de climas*/
  const getWeather = async (lat, lon) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=38c69f1ba50d4724adf361e122234af6&units=metric`
    );
    const data = await response.json();
    return data;
  };


  useEffect(() => {
    getWeather(localization.lat, localization.lon).then((data) => {
      setClima({
        clima: data.weather[0].main,
        temperatura: data?.main.temp,
        descripcion: data?.weather[0].description,
        icono: data?.weather[0].icon,
        himidity: data?.main.humidity,
        wind: data?.wind.speed,
        city: data?.name,
        country: data?.sys.country,
      });
    });
  }, [localization]);



  return (
    <div className={themes.light+"flex flex-col font-roboto md:flex transition-all ease-in-out relative "}>
      <nav className="flex md:flex-row flex-col w-full  md:w-full mx-auto items-end md:items-center  absolute
        justify-end  md:justify-between  py-8 px-1 md:px-20 font-medium uppercse text-sm ">
        <p className=" flex gap-5 cursor-pointer">
          {diasSemana[fecha.dia]} , {fecha.dia} de {meses[fecha.mes]}
        </p>
        <div className="flex gap-3 py-1">
          <p>
            {fecha.hora}:
            {fecha.minutos < 10 ? "0" + fecha.minutos : fecha.minutos}hs
          </p>
          <img
            className="bg-sky-800 bg-opacity-80 rounded-full -mt-5"
            src={`https://openweathermap.org/img/wn/${clima.icono}.png`}
            alt={clima.descripcion}
          />
          <p className="bg-opacity-50 rounded-xl text">
            {clima.temperatura.toFixed(1)}°C{" "}
            {climaSwitch(clima.clima,clima.descripcion)}
          </p>
        </div>
      </nav>
      <main  className="  ">
        <Outlet />
      </main>
    </div>
  );
}
