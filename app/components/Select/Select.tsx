import style from "./Select.module.css";
type Props = {
  data: string[];
  setData: any;
  selectedData: string[];
};

const Select = ({ data, setData, selectedData }: Props) => {
  const selectData = (el: string) => {
    if (selectedData.includes(el)) {
      const newSelected = selectedData.filter((e) => e !== el);
      setData(newSelected);
    } else {
      setData([...selectedData, el]);
    }
  };
  return (
    <ul className={style.ul}>
      {data.map((e) => (
        <li
          className={`${style.li} ${
            selectedData.includes(e) ? style.active : style.inactive
          }`}
          onClick={() => selectData(e)}
        >
          {e}
        </li>
      ))}
    </ul>
  );
};

export default Select;
