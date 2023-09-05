"use client";
import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import { Hotels } from "@/app/types/Hotel";
import { Places } from "@/app/types/Places";
import { Restaurants } from "@/app/types/Restaurants";
import Select from "../Select/Select";

type Props = {
  data: Hotels | Places | Restaurants;
  title: string;
  selectItems: string[];
};

const page = ({ title, data, selectItems }: Props) => {
  const [selectedItems, setSelectItems] = useState<string[]>([]);
  const [selectedData, setSelectData] = useState(data);

  useEffect(() => {
    if (selectedItems.length === 0) {
      setSelectData(data);
    } else {
      const newSelected: any = Object.fromEntries(
        Object.entries(data).filter(([key, value]) =>
          selectedItems.includes(value.city)
        )
      );
      setSelectData(newSelected);
    }
  }, [selectedItems]);
  return (
    <Layout title={title}>
      <Select
        data={selectItems}
        setData={setSelectItems}
        selectedData={selectedItems}
      />
      {Object.entries(selectedData).map(([key, value]) => (
        <Card
          title={key}
          imageUrl={value.imageUrl}
          city={value.city}
          information={value.about}
        />
      ))}
    </Layout>
  );
};

export default page;
