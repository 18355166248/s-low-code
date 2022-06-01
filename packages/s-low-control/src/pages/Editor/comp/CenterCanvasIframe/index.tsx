import PhoneContainer from "@/components/PhoneContainer";
import React from "react";

function CenterCanvasIframe() {
  return (
    <div className="flex-1 p-4 overflow-y-scroll bg-indigo-50">
      <PhoneContainer>
        <iframe src="http://localhost:3900/"></iframe>
      </PhoneContainer>
    </div>
  );
}

export default CenterCanvasIframe;
