import React from "react";
import Layout from "../components/Layout/Layout";
import Card from "../components/Card/Card";
import tourOperators from "../db/TourOperators.json";


const page = () => {
  return (
    <Layout title="Туроператоры">
      {Object.entries(tourOperators).map(([key, value]) => (
        <Card
          isBorder={true}
          title={key}
          imageUrl={value.imageUrl}
          address={value.address}
          phone={value.phone}
          site={value.site}
          hover={true}
        />
      ))}
    </Layout>
  );
};

export default page;
