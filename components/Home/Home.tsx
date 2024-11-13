"use server";

import CategorySlider from "../Global/Sliders/CategorySlider";
import SwipperPage from "../Global/Sliders/SwipperPage";
import Offers from "./Offers/Offers";

export default async function Home() {
  return (
    <div>
      <SwipperPage />
      {/* <SimpleSlider /> */}
      <CategorySlider />
      <Offers />
    </div>
  );
}
