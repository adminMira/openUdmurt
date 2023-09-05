import restaurants from "../db/Restaurants.json";
import SelectPage from "../components/SelectPage/SelectPage";

const cities = ["Ижевск", "Глазов", "Воткинск", "Сарапул", "Ува"];
const title = "Где поесть";

const page = () => {
  return <SelectPage title={title} selectItems={cities} data={restaurants}/>;
};

export default page;
