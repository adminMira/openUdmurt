import SelectPage from "../components/SelectPage/SelectPage";
import hotels from "../db/Hotels.json";

const cities = ["Ижевск", "Глазов", "Воткинск", "Сарапул", "Алнашский район"];
const title = "Где остановиться";

const page = () => {
  return <SelectPage selectItems={cities} title={title} data={hotels}/>;
};

export default page;
