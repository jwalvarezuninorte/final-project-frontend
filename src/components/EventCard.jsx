import React from "react";
import { PrimaryButton } from "./base/PrimaryButton";

export const EventCard = ({ event }) => {
  let chipColor = event.available
    ? "bg-green-600 text-green-200"
    : "bg-red-600 text-red-200 ";

  let textColor = event.available ? "text-blue-600" : "text-red-500 ";

  let d = event.date.split("-").map((e) => parseInt(e));

  //   todo: figure out how this works
  const eventDate = new Date(Date.UTC(d[2], d[1] - 1, d[0] + 1));

  const day = eventDate.toLocaleString("es-ES", { weekday: "long" });
  const dayNumber = eventDate.toLocaleString("es-ES", { day: "2-digit" });
  const month = eventDate.toLocaleString("es-ES", { month: "long" });
  const year = eventDate.toLocaleString("es-ES", { year: "numeric" });

  return (
    <div className="bg-gray-100 sm:w-full xl:w-72 shadow-xl shadow-gray-300/10 rounded-[3px] border overflow-hidden">
      <div className="relative">
        <div
          className={"absolute px-2 py-1 left-4 top-4 rounded-lg " + chipColor}
        >
          <small>{event.available ? "Disponible" : "No disponible"}</small>
        </div>
        {/* img */}
        <img
          src={event.image}
          alt={"event-image-" + event.title}
          className="object-fit w-full h-40"
        />
      </div>

      <div className="p-6 flex flex-col">
        {/* title */}
        <h2 className="text-lg font-bold text-gray-500 uppercase mb-2 mx-auto">
          {event.title}
        </h2>

        <hr />
        {/* details */}
        <div className="flex justify-between items-center mt-3">
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-bold text-gray-500 uppercase">
              {day.substring(0, 3)}
            </h3>
            <h3 className={"font-bold text-3xl " + textColor}>{dayNumber}</h3>
            <h3 className="text-sm font-bold text-gray-500 uppercase">
              {month.substring(0, 3) + " " + year}
            </h3>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-gray-500">
              {event.location}
            </h3>
            <PrimaryButton
              label="Comprar Entrada"
              disabled={!event.available}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
