import React, { useState, useEffect } from "react";
import "../css/timer.css";

export default function Timer() {
  const startDate = new Date("2017-05-21T00:00:00");

  const [elapsedTime, setElapsedTime] = useState({
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diffInSeconds = Math.floor((now - startDate) / 1000);

      const seconds = diffInSeconds % 60;
      const minutes = Math.floor(diffInSeconds / 60) % 60;
      const hours = Math.floor(diffInSeconds / 3600) % 24;
      const daysTotal = Math.floor(diffInSeconds / 86400);
      const weeks = Math.floor(daysTotal / 7);
      const days = daysTotal % 7;

      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      if (months < 0) {
        years--;
        months += 12;
      }

      setElapsedTime({ years, months, weeks, days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">
      <h4>E o nosso Amor continua a crescer segundo a segundo!!!</h4>
      <p>
        {elapsedTime.years} anos, {elapsedTime.months}
        {elapsedTime.months === 1 ? " mês" : " meses"}, {elapsedTime.days}
        {elapsedTime.days === 1 ? " dia" : " dias"}, {elapsedTime.hours}
        {elapsedTime.hours === 1 ? " hora" : " horas"}, {elapsedTime.minutes}
        {elapsedTime.minutes === 1 ? " minuto" : " minutos"},{" "}
        {elapsedTime.seconds}
        {elapsedTime.seconds === 1 ? " segundo" : " segundos"}
      </p>
    </div>
  );
}
