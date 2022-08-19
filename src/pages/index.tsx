import type { NextPage } from "next";

const Home: NextPage = () => {
  return <></>;
};

export default Home;

export const getServerSideProps = () => {
  return {
    redirect: {
      destination: "/about",
    },
  };
};
