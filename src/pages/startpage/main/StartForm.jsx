import { useForm } from 'react-hook-form';
import styles, { layout } from '../../../constants/style';

const StartForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <section className={`flex flex-col ${styles.paddingY} justify-center`}>
      <h1 className="text-center font-poppins font-bold xs:text-[36px] text-[24px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        Заполните ваши контактные данные
      </h1>
      <form
        className="flex flex-col items-center border-solid"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="font-poppins font-normal xs:text-[26px] text-[20px] text-white">
          Почта:
          <input
            className="flex bg-white text-black w-[400px] pl-1 cursor-pointer"
            {...register('firstName', {
              required: true,
            })}
          />
        </label>

        <input
          className="font-poppins font-normal xs:text-[24px] text-[16px] text-white cursor-pointer"
          type="submit"
        />
      </form>
    </section>
  );
};

export default StartForm;
