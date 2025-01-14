import React from "react";

const CustomOverviewCard = ({
  title,
  amount,
  Icon,
  index,
  note,
  sidebarToggleState,
}) => {
  return (
    <div
      key={index}
      className="flex justify-between items-center bg-zinc-50 dark:bg-zinc-950 p-4 rounded-lg"
    >
      <div className="flex flex-col">
        <div
          className={`${
            sidebarToggleState == "expanded" ? "text-xl" : "text-2xl"
          }  font-bold `}
        >
          {title}
        </div>
        {/* <p class="text-sm text-gray-600">{note}</p> */}
        <div className="text-5xl text-start">{amount}</div>
      </div>
      <div className="flex">
        <Icon size={30} />
      </div>
    </div>
  );
};

export default CustomOverviewCard;
