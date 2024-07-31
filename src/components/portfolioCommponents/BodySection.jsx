import React, { useEffect } from "react";
import { datas } from "../../Functions/datas";
import PhotoSlider from "./PhotoSlider";

function BodySection({ BodySections }) {
  const [data, setData] = React.useState({});

  useEffect(() => {
    const data = datas.find((data) => data.name === BodySections);
    console.log(data);
    setData(data);
  }, [BodySections]);

  return (
    <div>
      <PhotoSlider data={data?.images} BodySections={BodySections} />
    </div>
  );
}

export default BodySection;
