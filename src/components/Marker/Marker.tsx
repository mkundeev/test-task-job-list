import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

interface IMarker {
  lat: number;
  lng: number;
}
export default function Marker(props: IMarker) {
  return <FaMapMarkerAlt className="text-white/[.67] h-8 w-auto" />;
}
