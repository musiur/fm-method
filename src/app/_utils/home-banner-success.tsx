import { ArrowUp, Briefcase, Users } from 'lucide-react';

const statsData = [
  {
    icon: <ArrowUp className="w-6 h-6" />,
    value: '১৫,৫৪৮',
    label: 'মোট শিক্ষার্থী',
    alt: 'Total'
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    value: '৯,৫৪৮+',
    label: 'চাকরিপ্রাপ্ত শিক্ষার্থী',
    alt: 'Admitted'
  },
  {
    icon: <Users className="w-6 h-6" />,
    value: '৩৪',
    label: 'টপ ১০০-তে চাকরিপ্রাপ্ত শিক্ষার্থী',
    alt: 'Top'
  }
];

const HomeBannerSuccess = () => {
  return (
    <section className="bg-primary section">
      <div className="container mx-auto px-4">
        <div className="text-center text-white mb-8">
          <p className="mb-2">তোমাদের সাফল্যই আমাদের অনুপ্রেরণা</p>
          <h2 className="text-2xl font-bold">২০২২-২৩ শিক্ষাবর্ষে FM Method এর এডমিশন সাফল্য</h2>
        </div>

        <div className="bg-white rounded-[20px] md:rounded-[40px] py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center [&>svg]:w-6 [&>svg]:h-6 text-primary">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBannerSuccess;
