import AboutPage from '@/components/about';
import LeadForm from '@/components/LeadForm';

export default function Page() {
  return (
    <main className='font-sans'>
      {/* HERO SECTION */}
      <section className='relative text-white bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800'>
        <div className='absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_top,_#f97316,_transparent_60%),_radial-gradient(circle_at_bottom,_#ef4444,_transparent_60%)]' />

        <div className='relative max-w-6xl px-4 py-16 mx-auto md:px-6 lg:px-8 md:py-20'>
          <div className='grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-10 items-center'>
            {/* Left */}
            <div>
              <span className='mb-4 badge-pill'>
                <span className='text-lg'>🔥</span> Commercial LPG Supply in
                Hyderabad
              </span>

              <h1 className='text-3xl font-extrabold leading-tight md:text-5xl'>
                Reliable Commercial LPG for{' '}
                <span className='text-yellow-400'>
                  Restaurants, Hotels & Industries
                </span>
              </h1>

              <p className='max-w-xl mt-4 text-sm md:text-base text-slate-200'>
                On-time cylinder delivery, bulk LPG supply and pipeline
                solutions for commercial kitchens and industries across
                Hyderabad. Safety-compliant, hassle-free and cost-efficient.
              </p>

              <div className='flex flex-wrap items-center gap-3 mt-5 text-xs md:text-sm'>
                <div className='flex items-center gap-2'>
                  <span className='w-2 h-2 bg-green-400 rounded-full'></span>
                  <span>Govt. approved commercial LPG agency</span>
                </div>
                <div className='flex items-center gap-2'>
                  <span className='w-2 h-2 bg-yellow-400 rounded-full'></span>
                  <span>Same/next day delivery in most areas</span>
                </div>
              </div>

              <div className='flex flex-wrap items-center gap-3 mt-6'>
                <a
                  href='tel:+919876543210'
                  className='bg-yellow-400 btn-primary text-slate-900 hover:bg-yellow-500'
                >
                  📞 Call: +91-9876543210
                </a>
                <a
                  href='https://wa.me/919876543210?text=I%20need%20commercial%20LPG%20for%20my%20business'
                  target='_blank'
                  className='bg-green-500 btn-primary hover:bg-green-600'
                >
                  💬 WhatsApp Us
                </a>
              </div>

              <p className='mt-3 text-[11px] text-slate-300'>
                Serving restaurants, hotels, cloud kitchens, canteens, bakeries
                and industrial units in and around Hyderabad.
              </p>
            </div>

            {/* Right - Lead Form */}
            <LeadForm />
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className='bg-white section'>
        <div className='max-w-6xl px-4 mx-auto md:px-6 lg:px-8'>
          <div className='flex flex-col gap-3 mb-6 md:flex-row md:items-end md:justify-between'>
            <div>
              <h2 className='section-heading'>Industries we serve</h2>
              <p className='section-subtitle'>
                Our commercial LPG solutions are tailored for a wide range of
                businesses in Hyderabad.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6'>
            {[
              'Restaurants & Cafes',
              'Hotels & Resorts',
              'Cloud Kitchens',
              'Canteens & Mess',
              'Bakeries & Sweet Shops',
              'Industries & Factories',
            ].map((label) => (
              <div
                key={label}
                className='bg-slate-50 border border-slate-100 rounded-xl p-3 text-center text-xs md:text-sm font-medium text-slate-800 flex flex-col items-center justify-center min-h-[80px]'
              >
                <span className='mb-2 text-2xl'>🍽️</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS / TRUST BAR */}
      <section className='bg-white border-b border-slate-100'>
        <div className='flex flex-wrap items-center justify-between max-w-6xl gap-4 px-4 py-4 mx-auto text-xs md:px-6 lg:px-8 md:text-sm text-slate-600'>
          <div className='flex items-center gap-2'>
            <span className='text-lg'>✅</span> Govt. Approved LPG Distributor
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-lg'>🛡️</span> Safety-compliant installations &
            trained staff
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-lg'>⏱️</span> Priority delivery for
            high-volume customers
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className='section bg-slate-50'>
        <div className='max-w-6xl px-4 mx-auto md:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 items-start'>
            <div>
              <h2 className='section-heading'>
                Why businesses in Hyderabad trust our commercial LPG service
              </h2>
              <p className='section-subtitle'>
                We understand that your kitchen or plant cannot stop. That’s why
                we focus on reliable delivery, transparent pricing and
                uncompromised safety.
              </p>

              <div className='grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2'>
                {[
                  {
                    title: 'On-time delivery',
                    desc: 'Scheduled routes & priority support for peak hours.',
                  },
                  {
                    title: 'Bulk & flexible plans',
                    desc: '19 kg, 35 kg cylinders & bulk options for industries.',
                  },
                  {
                    title: 'Safety-first operations',
                    desc: 'Leak checks, proper sealing and on-site safety guidance.',
                  },
                  {
                    title: 'Dedicated relationship manager',
                    desc: 'Single point of contact for billing, delivery & support.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className='flex flex-col gap-1 p-4 bg-white border rounded-xl border-slate-100'
                  >
                    <h3 className='text-sm font-semibold text-slate-900'>
                      {item.title}
                    </h3>
                    <p className='text-xs text-slate-600'>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='p-4 bg-white border shadow-sm rounded-2xl border-slate-100 md:p-5'>
              <h3 className='text-sm font-semibold text-slate-900'>
                Service Highlights
              </h3>
              <ul className='mt-3 space-y-2 text-xs text-slate-700'>
                <li>• Commercial LPG supply across major zones of Hyderabad</li>
                <li>• Options for daily, alternate-day and weekly delivery</li>
                <li>
                  • Support for new commercial LPG connections & transfers
                </li>
                <li>• Guidance for LPG room layout and storage compliance</li>
                <li>• Emergency support for leak or cylinder issues</li>
              </ul>

              <a href='#cta' className='w-full mt-4 btn-primary'>
                Talk to our commercial LPG expert →
              </a>
            </div>
          </div>
        </div>
      </section>
      <AboutPage />

      {/* PRODUCTS / CYLINDER OPTIONS */}
      <section className='section bg-slate-50'>
        <div className='max-w-6xl px-4 mx-auto md:px-6 lg:px-8'>
          <div className='flex flex-col gap-3 mb-6 md:flex-row md:items-end md:justify-between'>
            <div>
              <h2 className='section-heading'>Commercial LPG options</h2>
              <p className='section-subtitle'>
                Choose the right cylinder size or bulk LPG solution based on
                your kitchen or industrial load.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            {[
              {
                title: '19 KG Commercial Cylinder',
                tag: 'Restaurants • Cafes • Small Hotels',
                points: [
                  'Ideal for regular commercial kitchens',
                  'Easy to handle and store',
                  'Flexible daily or weekly supply',
                ],
              },
              {
                title: '35 KG Commercial Cylinder',
                tag: 'Large Kitchens • Canteens • Food Courts',
                points: [
                  'Recommended for high-consumption kitchens',
                  'Reduces frequent cylinder changes',
                  'Best for continuous operations',
                ],
              },
              {
                title: 'Bulk LPG / Pipeline Solutions',
                tag: 'Hotels • Industries • Central Kitchens',
                points: [
                  'Bulk LPG storage & reticulated pipeline',
                  'Customised installation & safety audit',
                  'Ideal for large scale operations',
                ],
              },
            ].map((card) => (
              <div
                key={card.title}
                className='flex flex-col justify-between p-4 bg-white border shadow-sm rounded-2xl border-slate-100'
              >
                <div>
                  <h3 className='text-sm font-semibold md:text-base text-slate-900'>
                    {card.title}
                  </h3>
                  <p className='text-[11px] text-red-600 mt-1'>{card.tag}</p>
                  <ul className='mt-3 space-y-1.5 text-xs text-slate-700'>
                    {card.points.map((p) => (
                      <li key={p}>• {p}</li>
                    ))}
                  </ul>
                </div>
                <div className='mt-4'>
                  <a href='#cta' className='w-full text-center btn-primary'>
                    Request best commercial rates
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY & COMPLIANCE */}
      <section className='bg-white section'>
        <div className='grid items-center max-w-6xl grid-cols-1 gap-8 px-4 mx-auto md:px-6 lg:px-8 md:grid-cols-2'>
          <div>
            <h2 className='section-heading'>Safety & compliance first</h2>
            <p className='section-subtitle'>
              We strictly follow safety guidelines for commercial LPG storage,
              handling and installation to protect your staff, customers and
              property.
            </p>

            <ul className='mt-5 space-y-2 text-xs md:text-sm text-slate-700'>
              <li>• Regular leak checks during cylinder delivery</li>
              <li>• Proper regulator and hose inspection</li>
              <li>
                • Guidance on LPG storage room, ventilation & emergency exits
              </li>
              <li>• Staff awareness on emergency handling</li>
              <li>• Documentation support for inspections and audits</li>
            </ul>
          </div>

          <div className='p-4 border bg-slate-50 rounded-2xl border-slate-100 md:p-6'>
            <h3 className='mb-3 text-sm font-semibold text-slate-900'>
              Safety checklist for your commercial kitchen
            </h3>
            <div className='grid grid-cols-1 gap-3 text-xs sm:grid-cols-2 text-slate-700'>
              <div className='p-3 bg-white border rounded-xl border-slate-100'>
                ✅ Cylinders stored upright & secured
              </div>
              <div className='p-3 bg-white border rounded-xl border-slate-100'>
                ✅ No open flames near cylinder storage
              </div>
              <div className='p-3 bg-white border rounded-xl border-slate-100'>
                ✅ Exhaust and ventilation maintained
              </div>
              <div className='p-3 bg-white border rounded-xl border-slate-100'>
                ✅ Fire extinguishers available & checked
              </div>
            </div>
            <p className='text-[11px] text-slate-500 mt-3'>
              We can help you with a basic LPG safety check for your premises
              during initial onboarding.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className='section bg-slate-50'>
        <div className='max-w-6xl px-4 mx-auto md:px-6 lg:px-8'>
          <h2 className='section-heading'>What our clients say</h2>
          <p className='section-subtitle'>
            A quick look at how we help Hyderabad-based businesses run their
            kitchens smoothly.
          </p>

          <div className='grid grid-cols-1 gap-4 mt-6 md:grid-cols-3'>
            {[
              {
                name: 'Rajesh Kumar',
                role: 'Owner, Family Restaurant',
                text: 'They have been consistently on time with deliveries. We have never faced a gas shortage during peak hours.',
              },
              {
                name: 'Sneha Reddy',
                role: 'Cloud Kitchen Operator',
                text: 'Pricing is transparent and support is responsive. They helped us plan our LPG usage better.',
              },
              {
                name: 'Ahmed Ali',
                role: 'Hotel Manager, Hyderabad',
                text: 'Professional team with good understanding of safety norms. Pipeline setup and support were smooth.',
              },
            ].map((t) => (
              <div
                key={t.name}
                className='flex flex-col justify-between p-4 bg-white border shadow-sm rounded-2xl border-slate-100'
              >
                <p className='mb-3 text-xs text-slate-700'>“{t.text}”</p>
                <div>
                  <p className='text-sm font-semibold text-slate-900'>
                    {t.name}
                  </p>
                  <p className='text-[11px] text-slate-500'>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id='cta' className='text-white bg-red-600 section'>
        <div className='max-w-6xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 items-center'>
          <div>
            <h2 className='text-2xl font-bold md:text-3xl'>
              Ready to start or switch your commercial LPG supplier?
            </h2>
            <p className='mt-3 text-sm md:text-base text-red-50'>
              Share your requirements for commercial LPG supply in Hyderabad.
              We’ll analyse your usage and suggest the most cost-effective,
              reliable plan for your business.
            </p>

            <div className='flex flex-wrap gap-3 mt-5'>
              <a
                href='tel:+919876543210'
                className='bg-yellow-400 btn-primary text-slate-900 hover:bg-yellow-500'
              >
                📞 Call: +91-9876543210
              </a>
              <a
                href='https://wa.me/919876543210?text=I%20need%20commercial%20LPG%20for%20my%20business'
                target='_blank'
                className='text-red-600 bg-white btn-primary hover:bg-red-50'
              >
                💬 WhatsApp Enquiry
              </a>
            </div>
          </div>

          <div className='p-4 bg-white shadow-lg text-slate-900 rounded-2xl md:p-5'>
            <h3 className='mb-2 text-sm font-semibold md:text-base'>
              Quick enquiry form
            </h3>
            <p className='mb-3 text-xs text-slate-600'>
              Our team will reach out within a short time during working hours.
            </p>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className='py-8 bg-slate-900 text-slate-300'>
        <div className='grid max-w-6xl grid-cols-1 gap-6 px-4 mx-auto text-xs md:px-6 lg:px-8 md:grid-cols-3 md:text-sm'>
          <div>
            <h3 className='mb-2 text-sm font-semibold text-white md:text-base'>
              Commercial LPG Agency – Hyderabad
            </h3>
            <p>
              Reliable commercial LPG supply for restaurants, hotels, cloud
              kitchens, canteens and industries across Hyderabad.
            </p>
          </div>
          <div>
            <h4 className='mb-2 font-semibold text-white'>Contact</h4>
            <p>Phone: +91-9876543210</p>
            <p>City: Hyderabad</p>
            <p>Working hours: 9:00 AM – 8:00 PM</p>
          </div>
          <div>
            <h4 className='mb-2 font-semibold text-white'>Service Areas</h4>
            <p>
              Major commercial zones in Hyderabad including Banjara Hills,
              Jubilee Hills, Gachibowli, HITEC City, Kukatpally, Secunderabad
              and surrounding areas.
            </p>
          </div>
        </div>
        <div className='mt-6 text-[10px] text-center text-slate-500'>
          © {new Date().getFullYear()} Commercial LPG Agency, Hyderabad. All
          rights reserved.
        </div>
      </footer>

      {/* FLOATING CALL & WHATSAPP BUTTONS */}
      <div className='floating-buttons'>
        <a href='tel:+919876543210' className='floating-btn floating-btn-call'>
          📞 Call Now
        </a>
        <a
          href='https://wa.me/919876543210?text=I%20need%20commercial%20LPG%20for%20my%20business'
          target='_blank'
          className='floating-btn floating-btn-wa'
        >
          💬 WhatsApp
        </a>
      </div>
    </main>
  );
}
