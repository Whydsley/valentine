import React, { useState, useEffect } from "react";
import "../css/acumulated.css";

export default function TimerAcumulativo() {
  const startDate = new Date("2017-05-21T00:00:00");

  const [elapsed, setElapsed] = useState({
    years: 0,
    totalMonths: 0,
    totalWeeks: 0,
    totalDays: 0,
    totalHours: 0,
    totalMinutes: 0,
    totalSeconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diffInMs = now - startDate;

      const totalSeconds = Math.floor(diffInMs / 1000);
      const totalMinutes = Math.floor(diffInMs / 60000);
      const totalHours = Math.floor(diffInMs / 3600000);
      const totalDays = Math.floor(diffInMs / 86400000);
      const totalWeeks = Math.floor(totalDays / 7);

      // Cálculo de anos e meses acumulativos
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      if (now.getDate() < startDate.getDate()) {
        months--; // ainda não completou o mês atual
      }
      if (months < 0) {
        years--;
        months += 12;
      }
      const totalMonths = years * 12 + months;

      setElapsed({
        years,
        totalMonths,
        totalWeeks,
        totalDays,
        totalHours,
        totalMinutes,
        totalSeconds,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time-acumulated">
      <h4>Whydsley & Letícia desde 21/05/2017!</h4>
      <ul>
        <li>
          São <b>{elapsed.years}</b> anos de muito Amor!
        </li>
        <li>
          São <b>{elapsed.totalMonths}</b> meses de muita paixão!{" "}
        </li>
        <li>
          São <b>{elapsed.totalWeeks}</b> semanas de companheirismo!
        </li>
        <li>
          São <b>{elapsed.totalDays}</b> dias de carinho!
        </li>
        <li>
          São <b>{elapsed.totalHours}</b> horas de momentos e memórias!
        </li>
        <li>
          São <b>{elapsed.totalMinutes}</b> minutos de alegria e felicidade!
        </li>
        <li>
          São <b>{elapsed.totalSeconds}</b> segundos de certeza que quero viver
          ao seu lado!
        </li>
      </ul>
    </div>
  );
}
