import { stats } from '../constants';
const Stats = () => (
  <section className="flex flex-row justify-between flex-wrap sm:mb-20 mb-6">
    {stats.map((stat) => (
      <div
        key={stat.id}
        className="flex-1 flex sm:justify-center justify-start items-center flex-row m-3"
      >
        <h4 className="font-poppins font-bold xs:text-[38px] text-[26px] xs:leading-[53px] leading-[43px] text-white">
          {stat.value}
        </h4>

        <p className="font-poppins font-normal xs:text-[24px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase sm:ml-3 ml-2">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;