import React from "react";
import Marker from "../Marker/Marker";
import { FaMapMarkerAlt } from "react-icons/fa";
import GoogleMapReact from "google-map-react";

interface IProps {
  data: {
    name: string;
    address: string;
    phone: string;
    email: string;
    location: { long: number; lat: number };
  };
}
export default function Contacts({ data }: IProps) {
  const { name, address, phone, email, location } = data;
  return (
    <div className="rounded-lg bg-bgContacts overflow-hidden">
      <div className="px-16 py-8 text-textContacts text-base">
        <p>{name}</p>
        <div className="flex items-center mt-4">
          <FaMapMarkerAlt className="text-white/[.67]" />
          <p className="text-base ml-2">{address}</p>
        </div>
        <p className="mt-1.5 text-white/[.67]">{phone}</p>
        <p className="text-white/[.67]">{email}</p>
      </div>
      <div className="h-[220px] w-full">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={{
            lat: location.lat,
            lng: location.long,
          }}
          defaultZoom={11}
          yesIWantToUseGoogleMapApiInternals
        >
          <Marker lat={location.lat} lng={location.long} />
        </GoogleMapReact>
      </div>
    </div>
  );
}
