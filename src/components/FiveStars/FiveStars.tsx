import React from "react";
import { AiFillStar } from "react-icons/ai";
interface IProps {
  className?: string;
}
export default function FiveStars({ className }: IProps) {
  return (
    <div className={"flex " + className}>
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
    </div>
  );
}
