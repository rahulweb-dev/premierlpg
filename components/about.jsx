import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className='text-slate-800'>
      {/* HERO BANNER */}
      <section className='relative h-[320px] md:h-[420px] text-white bg-slate-900'>
        <Image
          src='/images/image-2.jpg'
          alt='Commercial LPG Supply'
          fill
          className='object-cover opacity-60'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-900/20'></div>

        <div className='relative flex flex-col justify-center h-full max-w-6xl px-4 mx-auto md:px-6 lg:px-8'>
          <h1 className='text-4xl font-bold leading-tight md:text-6xl'>
            Trusted <span className='text-yellow-400'>LPG Partner</span> for
            Commercial Kitchens
          </h1>
          <p className='max-w-2xl mt-3 text-sm md:text-lg text-slate-200'>
            Delivering safe, reliable and government-approved LPG solutions
            across Hyderabad.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className='max-w-6xl px-4 mx-auto md:px-6 lg:px-8 py-14'>
        <div className='grid grid-cols-1 md:grid-cols-[1fr_0.9fr] gap-12 items-center'>
          {/* TEXT CONTENT */}
          <div>
            <h2 className='text-3xl font-bold leading-tight text-slate-900'>
              Excellence in Commercial{' '}
              <span className='text-red-600'>LPG Supply</span>
            </h2>
            <p className='mt-4 text-sm leading-relaxed text-slate-600 md:text-base'>
              We supply commercial LPG cylinders for restaurants, hotels, cloud
              kitchens, canteens, bakeries and industrial kitchens. We guarantee
              compliant, safe and timely LPG delivery ensuring your business
              never stops due to gas shortage.
            </p>

            {/* STATS */}
            <div className='grid grid-cols-3 gap-3 mt-6 text-center'>
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '2500+', label: 'Monthly Deliveries' },
                { value: '1000+', label: 'Happy Businesses' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className='p-4 border shadow-sm bg-slate-50 border-slate-200 rounded-xl'
                >
                  <p className='text-xl font-extrabold text-red-600 md:text-2xl'>
                    {stat.value}
                  </p>
                  <p className='text-[11px] md:text-xs text-slate-600'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* BADGES */}
            <div className='flex flex-wrap gap-2 mt-6 text-xs md:text-sm'>
              <span className='px-4 py-1.5 rounded-full bg-red-100 text-red-700 font-medium'>
                Govt. Authorized Distributor
              </span>
              <span className='px-4 py-1.5 rounded-full bg-green-100 text-green-700 font-medium'>
                Safety Certified Delivery
              </span>
              <span className='px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-800 font-medium'>
                Priority 24/7 Support
              </span>
            </div>
          </div>

          {/* IMAGE */}
          <div className='relative rounded-2xl overflow-hidden border border-slate-200 shadow-[0_4px_18px_rgba(0,0,0,0.15)]'>
            <Image
              src='/images/image-2.jpg'
              alt='Commercial Kitchen LPG'
              width={650}
              height={450}
              className='object-cover w-full h-full'
            />
          </div>
        </div>
      </section>

      {/* TIMELINE - OUR JOURNEY */}
      <section className='py-14 bg-slate-50 border-y border-slate-200'>
        <div className='max-w-6xl px-4 mx-auto md:px-6 lg:px-8'>
          <h2 className='mb-12 text-3xl font-bold text-center text-slate-900'>
            Our Journey of Trust & Service
          </h2>
          <div className='pl-6 space-y-8 border-l-4 border-red-600'>
            {[
              {
                year: '2015',
                text: 'Started commercial LPG operations in Hyderabad.',
              },
              {
                year: '2017',
                text: 'Expanded to serve cloud kitchens and bakeries.',
              },
              {
                year: '2020',
                text: 'Introduced bulk LPG pipeline services for industries.',
              },
              {
                year: '2023',
                text: 'Achieved 1000+ recurring commercial clients.',
              },
            ].map((item) => (
              <div key={item.year} className='relative'>
                <div className='absolute -left-[34px] top-1 h-5 w-5 rounded-full border-[4px] border-red-600 bg-white'></div>
                <h3 className='text-lg font-bold text-red-600 md:text-xl'>
                  {item.year}
                </h3>
                <p className='text-sm md:text-base text-slate-600'>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA
      <section className='text-center text-white bg-red-600 py-14'>
        <h2 className='mb-3 text-3xl font-bold md:text-4xl'>
          Looking for a Reliable LPG Supplier?
        </h2>
        <p className='mb-6 text-sm text-red-100 md:text-lg'>
          Get priority delivery, safety guidance, and cost-effective commercial
          LPG plans.
        </p>
        <Link
          href='tel:+919876543210'
          className='px-8 py-3 text-sm font-semibold transition bg-yellow-400 rounded-lg shadow-md md:text-base text-slate-900 hover:bg-yellow-500'
        >
          📞 Call Now: +91 98765 43210
        </Link>
      </section> */}
    </main>
  );
}
