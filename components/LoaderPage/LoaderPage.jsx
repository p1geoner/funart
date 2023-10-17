import Loader from "./Loader/Loader";
import styles from "./LoaderPage.module.scss";

const LoaderPage = () => {
  const meta = {
    title: "Загрузка...",
  };

  return <Loader />;
};

export default LoaderPage;
