import styles from '../../../constants/style';
import { order } from '../../../constants';

const Catalog = () => {
  return (
    <section className={`flex justify-center items-center flex-row my-12`}>
      {order.map((orders) => (
        <div key={orders.id} className="mx-4 my-4">
          <img src={orders.logo} className="flex justify-center items-center" />
          <p className="flex justify-center items-center text-white mt-4">
            {orders.price}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Catalog;
