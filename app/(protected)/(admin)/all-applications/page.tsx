import Chart from '@/components/chart';
import BarExample from '@/components/chart';
import StatsCard from '@/components/stats-card';
import Widget from '@/components/widget';

const AllApplications = () => {
  return (
    <section className="p-4 bg-gray-50 h-full">
      <div className="container px-4 mx-auto">
        <div className="md:px-2 w-[95%] mx-auto ">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 py-5 ">
            <Widget type="aramco" />

            <Widget type="non-aramco" />
            <Widget type="das" />
          </div>

          <div className="my-5 bg-white py-3 shadow">
            <Chart />
          </div>

          <div className="grid grid-cols-4 gap-3">
            <StatsCard
              title="Completed"
              value={1220}
              progress={50}
              bgColor="bg-purple-500"
            />
            <StatsCard
              title="Uncompleted"
              value={800}
              progress={60}
              bgColor="bg-pink-500"
            />
            <StatsCard
              title="Paid"
              value={1000}
              progress={70}
              bgColor="bg-emerald-400"
            />
            <StatsCard
              title="Unpaid"
              value={300}
              progress={80}
              bgColor="bg-sky-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllApplications;
