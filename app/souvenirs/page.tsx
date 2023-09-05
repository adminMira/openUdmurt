import Card from "../components/Card/Card";
import Layout from "../components/Layout/Layout";
import souvenits from '../db/Souvenirs.json'

const page = () => {
  return (
    <Layout
      title="Сувенирная продукция
    "
    >
      {Object.entries(souvenits).map(([key, value]) => (
        <Card
          isBorder={true}
          title={key}
          imageUrl={value.imageUrl}
          address={value.address}
          phone={value.phone}
          site={value.site}
          hover={true}
          information={value.about}
        />
      ))}
    </Layout>
  );
};

export default page;
