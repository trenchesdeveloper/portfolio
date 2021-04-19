import React from "react";
import { Data } from "../type";

const ServiceCard: React.FC<{
  service: Data;
}> = ({ service: { title, about, Icon } }) => {
  const createMarkup = () => {
    return { __html: about };
  };
  return (
    <div className="flex items-center p-2 pt-1 space-x-4">
      <Icon className="w-12 h-12 text-green" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()}/>
      </div>
    </div>
  );
};

export default ServiceCard;