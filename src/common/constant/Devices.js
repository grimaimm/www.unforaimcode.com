import * as React from "react";
import { BsLaptop, BsPhone } from "react-icons/bs";

const iconProps = {
  className: "w-auto text-neutral-700 dark:text-neutral-300",
  size: 24,
};

export const PAIR_DEVICES = {
  Computer: {
    icon: <BsLaptop {...iconProps} />,
    model: "HP Pavilion Gaming",
    id: "aiiimmmm-laptop",
  },
  Smartphone: {
    icon: <BsPhone {...iconProps} />,
    model: "POCO F5",
    id: "aiiimmmm-iphone",
  },
};
