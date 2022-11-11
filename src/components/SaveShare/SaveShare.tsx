import React from "react";
import { AiOutlineStar, AiOutlineShareAlt } from "react-icons/ai";
import { IStyles } from "../../models";
export default function SaveShare({ styles }: IStyles) {
  return (
    <div className={styles}>
      <div className="flex items-center">
        <AiOutlineStar className="text-textDetailPage" />
        <p className="ml-3">Save to my list</p>
      </div>
      <div className="flex items-center ml-9">
        <AiOutlineShareAlt className="text-textDetailPage" />
        <p className="ml-3">Share</p>
      </div>
    </div>
  );
}
