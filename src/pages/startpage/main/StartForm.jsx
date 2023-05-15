import { useForm } from 'react-hook-form';
import styles from '../../../constants/style';

const StartForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <section className={`flex justify-center items-center py-6`}>
      <div className="py-6 px-4 bg-black-gradient-2 rounded-[20px] box-shadow">
        <h1 className="text-center font-poppins font-bold xs:text-[36px] text-[26px] text-white xs:leading-[76.8px] leading-[46.8px] w-full mb-4 z-[5]">
          Заполните ваши контактные данные
        </h1>
        <form
          className="flex flex-col items-center border-solid min-w-[150px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="font-poppins font-normal xs:text-[22px] text-[20px] text-white z-[5]">
            <p className="mb-2">Почта</p>
            <input
              placeholder="ivan@mail.ru"
              type="email"
              className="flex bg-white text-black sm:w-[400px] w-[270px] h-10 pl-2 cursor-pointer z-[5]"
              {...register('email', {
                required: {
                  value: true,
                  message: 'Поле обязательно к заполнению',
                },
                minLength: {
                  value: 5,
                  message: 'Минимум 5 символов',
                },
              })}
            />
          </label>
          <div className="flex items-center sm:w-[400px] w-[270px] h-[30px]">
            {errors?.email?.type === 'minLength' && (
              <p className="font-poppins text-[16px] text-red-500">
                {errors?.email?.message || 'Error!'}
              </p>
            )}
            {errors?.email?.type === 'required' && (
              <p className="font-poppins text-[16px] text-red-500">
                {errors?.email?.message || 'Error!'}
              </p>
            )}
          </div>

          <label className="font-poppins font-normal xs:text-[22px] text-[20px] text-white z-[5]">
            <p className="mb-2">Инициалы</p>
            <input
              placeholder="Иванов Иван Иванович"
              type="text"
              className="flex bg-white text-black sm:w-[400px] w-[270px]  h-10 pl-2 cursor-pointer z-[5]"
              {...register('FirstNameLastNamePatronymic', {
                required: {
                  value: true,
                  message: 'Поле обязательно к заполнению',
                },
                minLength: {
                  value: 2,
                  message: 'Минимум 2 символа',
                },
              })}
            />
          </label>
          <div className="flex items-center sm:w-[400px] w-[270px] h-[30px] ">
            {errors?.FirstNameLastNamePatronymic?.type === 'minLength' && (
              <p className="font-poppins text-[16px] text-red-500">
                {errors?.FirstNameLastNamePatronymic?.message || 'Error!'}
              </p>
            )}
            {errors?.FirstNameLastNamePatronymic?.type === 'required' && (
              <p className="font-poppins text-[16px] text-red-500">
                {errors?.FirstNameLastNamePatronymic?.message || 'Error!'}
              </p>
            )}
          </div>

          <label className="font-poppins font-normal xs:text-[22px] text-[20px] text-white z-[5]">
            <p className="mb-2">Мобильный номер</p>
            <input
              placeholder="+7 ... .. .."
              type="tel"
              className="flex bg-white text-black sm:w-[400px] w-[270px] h-10 pl-2 cursor-pointer z-[5]"
              {...register('mobileNumber', {
                required: {
                  value: true,
                  message: 'Поле обязательно к заполнению',
                },
                minLength: {
                  value: 11,
                  message: 'Минимум 11 символов',
                },
              })}
            />
          </label>
          <div className="flex items-center sm:w-[400px] w-[270px] h-[30px]">
            {errors?.mobileNumber?.type === 'minLength' && (
              <p className="font-poppins text-[16px] text-red-500">
                {errors?.mobileNumber?.message || 'Error!'}
              </p>
            )}
            {errors?.mobileNumber?.type === 'required' && (
              <p className="font-poppins text-[16px] text-red-500">
                {errors?.mobileNumber?.message || 'Error!'}
              </p>
            )}
          </div>

          <input
            className={`mt-4 py-4 px-[140px] sm:w-[400px] w-[270px] bg-blue-gradient font-poppins font-normal xs:text-[24px] text-[16px] text-primary flex justify-center outline-none shadow-lg rounded-[20px] hover:drop-shadow-[0px_10px_10px_rgba(0,255,255,0.2)] active:opacity-70 cursor-pointer z-[5]`}
            type="submit"
            disabled={!isValid}
          />
        </form>

        <div className="absolute z-[1] w-[20%] h-[30%] rounded-full bottom-20 white__gradient" />
        <div className="absolute z-[0] w-[60%] h-[60%] rounded-full right-20 bottom-60 blue__gradient opacity-30" />
      </div>
    </section>
  );
};

export default StartForm;
