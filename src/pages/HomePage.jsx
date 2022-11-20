import { useState } from "react";
import { PrimaryButton } from "../components/base/PrimaryButton";
import { SecondaryButton } from "../components/base/SecondaryButton";
import { EventCard } from "../components/EventCard";

export default function HomePage() {
  let dataFromAPI = [
    {
      id: 1,
      title: "GUSI, EN CONCIERTO 1",
      date: "19-11-2022",
      day: "Sábado",
      image: "https://picsum.photos/200",
      location: "Teatro Cafam",
      available: true,
    },
    {
      id: 2,
      title: "CONCIERTO DE ROCK 2",
      date: "01-01-2023",
      day: "Sábado",
      image: "https://picsum.photos/200",
      location: "Teatro Cafam",
      available: false,
    },
    {
      id: 3,
      title: "CONCIERTO MORAT 3",
      date: "24-12-2022",
      day: "Sábado",
      image: "https://picsum.photos/200",
      location: "Teatro Cafam",
      available: true,
    },
    {
      id: 4,
      title: "CONCIERTO MORAT 4",
      date: "24-12-2022",
      day: "Sábado",
      image: "https://picsum.photos/200",
      location: "Teatro Cafam",
      available: true,
    },
    {
      id: 11,
      title: "GUSI, EN CONCIERTO 5",
      date: "19-11-2022",
      day: "Sábado",
      image: "https://picsum.photos/200",
      location: "Teatro Cafam",
      available: true,
    },
    {
      id: 22,
      title: "CONCIERTO DE ROCK 6",
      date: "01-01-2023",
      day: "Sábado",
      image: "https://picsum.photos/200",
      location: "Teatro Cafam",
      available: false,
    },
    {
      id: 33,
      title: "CONCIERTO MORAT 7",
      date: "24-12-2022",
      day: "Sábado",
      image: "https://picsum.photos/200",
      location: "Teatro Cafam",
      available: true,
    },
    {
      id: 44,
      title: "CONCIERTO MORAT 8",
      date: "24-12-2022",
      day: "Sábado",
      image: "https://picsum.photos/200",
      location: "Teatro Cafam",
      available: true,
    },

    {
      id: 45,
      title: "CONCIERTO MORAT 9",
      date: "24-12-2022",
      day: "Sábado",
      image: "https://picsum.photos/200",
      location: "Teatro Cafam",
      available: true,
    },
  ];

  let eventsData = dataFromAPI;

  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [page, setPage] = useState(1);
  const [events, setEvents] = useState(
    eventsData.slice(page * 4 - 4, page * 4)
  );

  const nextPage = () => {
    setPage(page + 1);
    setEvents(eventsData.slice(page * 4, page * 4 + 4));
  };

  // todo: Fix this function, the page is not updating correctly
  const previousPage = () => {
    setEvents(eventsData.slice((page - 1) * 4 - 4, (page - 1) * 4));
    setPage(page - 1);
  };

  return (
    <>
      {/* <div className="relative">
        <div className="absolute bg-black/60 w-full h-4"></div>
        <img
          src="https://tuboleta.com/imagenes/6378f394a3736.jpg"
          alt=""
          className="h-4 w-full object-cover"
        />
      </div> */}
      <header className="sticky top-0 z-10 flex justify-between items-center bg-black/80 w-full h-20 mb-10 px-[9%] backdrop-blur-xl">
        <h1 className="text-white text-4xl font-black uppercase sm:block hidden">
          Tu Boleta
        </h1>
        <div className="flex justify-between w-full sm:gap-x-4 sm:max-w-md h-10">
          {/* <PrimaryButton label="Crear una cuenta" /> */}
          <a
            href="#"
            className="px-6 py-2 rounded-lg bg-blue-600 text-white text-center"
          >
            Crear nueva cuenta
          </a>
          <SecondaryButton label="Iniciar sesión" />
        </div>
      </header>

      <div className="mx-[9%] mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-black text-gray-700">Eventos</h2>
          <div className="flex gap-x-2">
            <button
              onClick={() => previousPage()}
              disabled={page === 1}
              href="#"
              className={
                "inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg " +
                (page === 1
                  ? "opacity-50"
                  : "hover:bg-gray-100 hover:text-gray-700")
              }
            >
              Anterior
            </button>

            <span
              href="#"
              className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg "
            >
              {page}/{Math.ceil(eventsData.length / itemsPerPage)}
            </span>

            <button
              disabled={page * itemsPerPage >= eventsData.length}
              onClick={() => nextPage()}
              href="#"
              className={
                "inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg " +
                (page * itemsPerPage >= eventsData.length
                  ? "opacity-50"
                  : "hover:bg-gray-100 hover:text-gray-700")
              }
            >
              Siguiente
            </button>
          </div>
        </div>

        <hr />

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {events.map((event) => {
            return <EventCard key={event.id} event={event} />;
          })}
        </div>
      </div>
    </>
  );
}
