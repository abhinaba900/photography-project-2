import React, { useEffect } from "react";
import { datas } from "../../Functions/datas";
import PhotoSlider from "./PhotoSlider";

function BodySection({ BodySections }) {
  const [data, setData] = React.useState({ images: [] });

  useEffect(() => {
    if (BodySections === "See all") {
      const allImagesSet = new Set();
      datas.forEach((data) => {
        data.images.forEach((image) => {
          allImagesSet.add(image);
        });
      });
      const allImages = Array.from(allImagesSet);
      console.log(allImages);
      setData({ images: allImages });
    } else {
      const data = datas.find((data) => data.name === BodySections);
      setData(data || { images: [] });
    }
  }, [BodySections, datas]);

  return (
    <div >
      {BodySections === "See all" && (
        <PhotoSlider data={data.images} BodySections={BodySections} />
      )}
      {BodySections === "Wildlife" && (
        <PhotoSlider data={data.images} BodySections={BodySections} />
      )}
      {BodySections === "Travel" && (
        <PhotoSlider data={data.images} BodySections={BodySections} />
      )}
      {BodySections === "Still Life" && (
        <PhotoSlider data={data.images} BodySections={BodySections} />
      )}
      {BodySections === "Creative" && (
        <PhotoSlider data={data.images} BodySections={BodySections} />
      )}
      {BodySections === "Macro" && (
        <PhotoSlider data={data.images} BodySections={BodySections} />
      )}
      {BodySections === "Nature" && (
        <PhotoSlider data={data.images} BodySections={BodySections} />
      )}
      {BodySections === "People" && (
        <PhotoSlider data={data.images} BodySections={BodySections} />
      )}
    </div>
  );
}

export default BodySection;
