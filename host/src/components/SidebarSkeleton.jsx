import React from "react";
import { Skeleton } from "@mui/material";

const SidebarSkeleton = () => {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="relative flex flex-col items-center justify-center p-4 pb-[14px] shadow-0">
        <div className="mb-6 flex items-center justify-center">
          <div className="h-24 w-24 font-bold">
            <Skeleton
              variant="circular"
              animation="wave"
              width={96}
              height={96}
              sx={{ bgcolor: "grey.700" }}
            />
          </div>
        </div>
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={80}
          height={17}
          className="mb-1"
          sx={{ bgcolor: "grey.700" }}
        />
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={140}
          height={15}
          sx={{ bgcolor: "grey.700" }}
        />
      </div>
      <ul className="whitespace-nowrap px-3 py-0 flex-1">
        {Array.from({ length: 3 }).map((value, index) => (
          <Skeleton
            key={index}
            animation="wave"
            variant="rectangular"
            sx={{
              bgcolor: "grey.700",
              width: "100%",
              minHeight: "44px",
            }}
            className="rounded-md mb-1"
          />
        ))}
      </ul>
    </div>
  );
};

export default SidebarSkeleton;
