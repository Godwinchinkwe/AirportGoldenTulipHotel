import RoomDetails from "@/components/RoomDetails/RoomDetails";
import { rooms } from "@/data/rooms";

import "./RoomDetails.css"

export async function generateMetadata({
  params,
}) {
  const room = rooms[params.roomType];

  if (!room) {
    return {
      title: "Room Not Found",
    };
  }

  return {
    title: `${room.title} | Airport Golden Tulip Hotel Lagos`,

    description: `${room.description}. Book directly online for the best available rates.`,

    alternates: {
      canonical: `https://www.airportgoldentuliphotel.com/rooms/${params.roomType}`,
    },

    openGraph: {
      title: `${room.title} | Airport Golden Tulip Hotel Lagos`,
      description: room.description,
      url: `https://www.airportgoldentuliphotel.com/rooms/${params.roomType}`,
      type: "website",
    },
  };
}

export default function Page() {
  return <RoomDetails />;
}