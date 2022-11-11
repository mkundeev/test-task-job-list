import React from "react";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { IStyles } from "../../models";

export default function GoBackBtn({ styles }: IStyles) {
  return (
    <Link
      to="/"
      className={
        "inline-block px-4 h-12 rounded-lg bg-bgGrey flex items-center text-textColorDGrey text-base hover:shadow " +
        styles
      }
    >
      <MdArrowBackIos />
      <p className="ml-4">Return to job board</p>
    </Link>
  );
}
