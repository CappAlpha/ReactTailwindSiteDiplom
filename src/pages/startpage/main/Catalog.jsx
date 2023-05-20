import styles from '../../../constants/style';
import { order } from '../../../constants';

const Catalog = () => {
  return (
    <section
      className={`flex justify-center items-center sm:flex-row flex-col flex-wrap my-6`}
    >
      <div className="flex justify-center items-center text-center w-full">
        <h2 className={`${styles.heading2}`}>Каталог</h2>
      </div>
      {order.map((orders) => (
        <div
          key={orders.id}
          className="bg-black-gradient-2 rounded-[20px] box-shadow px-4 py-6 mx-4 my-4"
        >
          <div key={orders.logo} className="bg-white border rounded-[5px]">
            <img
              src={orders.logo}
              className="w-[300px] h-[300px]"
              loading="eager"
            />
          </div>
          <div key={orders.title}>
            <p className="text-[24px] text-center text-white mt-4">
              {orders.title}
            </p>
          </div>
          <div key={orders.price}>
            <p className="text-[18px] text-center text-white mt-4">
              {orders.price}
            </p>
          </div>
        </div>
      ))}
      <div className="text-center w-full">
        <p className="text-dimWhite text-[18px] mt-4">
          -Цена указана примерно, может менятся в зависимости от задачи
        </p>
      </div>
    </section>
  );
};

export default Catalog;
