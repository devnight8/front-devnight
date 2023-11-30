"use client";

import {ThreeDots} from "react-loader-spinner";

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3B82F6"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}

export default Loading;
