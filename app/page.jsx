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
          {/* HEADING */}
          <div className='mb-10 text-center'>
            <h2 className='section-heading'>Commercial LPG Options</h2>
            <p className='max-w-2xl mx-auto section-subtitle'>
              Choose the right cylinder capacity or bulk LPG line depending on
              your cooking load, commercial size, and safety compliance.
            </p>
          </div>

          {/* CARD GRID */}
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {[
              {
                title: '19 KG Commercial Cylinder',
                icon: '🧯',
                tag: 'Restaurants • Cafes • Small Hotels',
                points: [
                  'Suited for regular commercial kitchens',
                  'Easy handling, compact storage',
                  'Flexible daily / weekly supply',
                ],
              },
              {
                title: '35 KG Commercial Cylinder',
                icon: '🔥',
                tag: 'Large Kitchens • Canteens • Food Courts',
                points: [
                  'Best for high-consumption kitchens',
                  'Less frequent cylinder changes',
                  'Continuous heavy-duty operations',
                ],
              },
              {
                title: 'Bulk LPG / Pipeline Solutions',
                icon: '🏭',
                tag: 'Hotels • Industries • Central Kitchens',
                points: [
                  'Bulk tank installation options',
                  'Customised pipeline & safety audit',
                  'Ideal for large scale operations',
                ],
              },
            ].map((card) => (
              <div
                key={card.title}
                className='flex flex-col justify-between p-6 transition duration-200 bg-white border shadow-sm rounded-2xl hover:shadow-xl hover:border-red-200'
              >
                {/* TOP ICON */}
                <div className='flex items-center justify-center w-12 h-12 mb-4 text-2xl text-red-600 rounded-xl bg-red-50'>
                  {card.icon}
                </div>

                {/* TITLE + TAG */}
                <div>
                  <h3 className='text-lg font-semibold text-slate-900'>
                    {card.title}
                  </h3>
                  <p className='mt-1 text-xs font-medium text-red-600'>
                    {card.tag}
                  </p>

                  {/* BULLET POINTS */}
                  <ul className='mt-4 space-y-2 text-sm text-slate-700'>
                    {card.points.map((p) => (
                      <li key={p} className='flex items-start gap-2'>
                        <span className='text-base leading-none text-red-500'>
                          •
                        </span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BUTTON */}
                <div className='mt-6'>
                  <a
                    href='#cta'
                    className='block w-full text-center bg-red-600 hover:bg-red-700 text-white font-semibold text-sm py-2.5 rounded-lg transition'
                  >
                    Request Best Commercial Rates
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SAFETY & COMPLIANCE */}
      <section className='bg-white border-t border-b section border-slate-200'>
        <div className='grid items-start max-w-6xl grid-cols-1 gap-10 px-4 mx-auto md:grid-cols-2 md:px-6 lg:px-8'>
          {/* LEFT SIDE TEXT */}
          <div>
            <h2 className='section-heading text-slate-900'>
              Safety & Compliance First
            </h2>
            <p className='section-subtitle text-slate-600'>
              Safety is not optional—it's our principle. Every cylinder,
              installation and delivery meets strict commercial LPG protocols to
              protect your business and people.
            </p>

            <ul className='mt-6 space-y-2 text-sm md:text-base text-slate-700'>
              {[
                'Regular leak checks during delivery',
                'Certified regulators, valves & hose inspection',
                'Guidance on ventilation and LPG storage layout',
                'Staff training for emergency handling',
                'Documentation support for audits & inspections',
              ].map((item) => (
                <li key={item} className='flex items-start gap-2'>
                  <span className='h-2 w-2 mt-[6px] rounded-full bg-red-600'></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CHECKLIST CARD */}
          <div className='p-6 bg-white border shadow-sm border-slate-200 rounded-xl'>
            <h3 className='pb-1 pl-3 text-base font-semibold border-l-4 border-red-600 md:text-lg text-slate-900'>
              Kitchen Safety Checklist
            </h3>

            <div className='grid grid-cols-1 gap-3 mt-4 text-sm sm:grid-cols-2 text-slate-700'>
              {[
                'Cylinders stored upright & secured',
                'No flames near cylinder storage',
                'Adequate ventilation installed',
                'Fire extinguishers accessible',
              ].map((check) => (
                <div
                  key={check}
                  className='p-3 transition border rounded-lg bg-slate-50 border-slate-200 hover:border-red-500'
                >
                  {check}
                </div>
              ))}
            </div>

            <p className='text-[12px] text-slate-500 mt-4 border-t pt-2'>
              *A complimentary safety check is offered during onboarding.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className='bg-white border-t border-b section border-slate-200'>
        <div className='max-w-6xl px-4 mx-auto md:px-6 lg:px-8'>
          {/* Heading */}
          <div className='max-w-2xl mx-auto mb-10 text-center'>
            <h2 className='section-heading'>What Our Clients Say</h2>
            <p className='section-subtitle text-slate-600'>
              We proudly serve restaurants, hotels, bakeries & industries across
              Hyderabad, ensuring safe and uninterrupted LPG supply.
            </p>
          </div>

          {/* Testimonials */}
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {[
              {
                name: 'Rajesh Kumar',
                role: 'Owner, Family Restaurant',
                text: 'On-time deliveries, even during peak hours. Never faced any shortage. Very reliable and professional.',
              },
              {
                name: 'Sneha Reddy',
                role: 'Cloud Kitchen Operator',
                text: 'Transparent pricing and helpful support team. They helped streamline our LPG usage and save cost.',
              },
              {
                name: 'Ahmed Ali',
                role: 'Hotel Manager, Hyderabad',
                text: 'Knowledgeable team with strong focus on safety norms. Pipeline installation was hassle-free.',
              },
            ].map((t) => (
              <div
                key={t.name}
                className='p-5 transition border shadow-sm bg-slate-50 border-slate-200 rounded-xl hover:shadow-md'
              >
                <p className='pl-3 text-sm leading-relaxed border-l-4 border-red-600 text-slate-700'>
                  “{t.text}”
                </p>
                <div className='mt-4'>
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
      <section
        id='cta'
        className='text-white section bg-gradient-to-r from-red-700 via-red-600 to-red-700'
      >
        <div className='max-w-6xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 items-center'>
          {/* LEFT CONTENT */}
          <div>
            <div className='pl-3 border-l-4 border-yellow-300'>
              <h2 className='text-3xl font-extrabold leading-tight md:text-4xl'>
                Start or Switch Your Commercial LPG Supplier
              </h2>
            </div>

            <p className='max-w-xl mt-3 text-sm text-red-100 md:text-base'>
              Share your requirements for commercial LPG supply in Hyderabad.
              Our team will suggest the most cost-effective and reliable plan
              based on your monthly usage.
            </p>

            {/* TRUST ICONS */}
            <div className='flex flex-wrap gap-4 mt-5 text-xs md:text-sm'>
              <span className='bg-white/10 border border-white/20 px-3 py-1.5 rounded-full'>
                🕑 Priority Delivery
              </span>
              <span className='bg-white/10 border border-white/20 px-3 py-1.5 rounded-full'>
                🛡 Certified Safety Support
              </span>
              <span className='bg-white/10 border border-white/20 px-3 py-1.5 rounded-full'>
                📃 Compliance Assistance
              </span>
            </div>

            {/* ACTION BUTTONS */}
            <div className='flex flex-wrap gap-3 mt-6'>
              <a
                href='tel:+919876543210'
                className='px-6 py-2.5 bg-yellow-400 text-slate-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition'
              >
                Call Now: +91-98765-43210
              </a>
              <a
                href='https://wa.me/919876543210?text=I%20need%20commercial%20LPG%20for%20my%20business'
                target='_blank'
                className='px-6 py-2.5 font-semibold bg-white text-red-700 rounded-lg shadow-md hover:bg-red-50 transition'
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>

          {/* FORM CARD */}
          <div className='p-6 shadow-sm transitionborder rounded-2xl border-slate-200 hover:shadow-md md:p-7'>
            <h3 className='text-lg font-semibold text-white md:text-xl'>
              Quick Enquiry Form
            </h3>
            <p className='mt-1 mb-4 text-xs md:text-sm text-slate-900'>
              Our commercial LPG expert will contact you shortly.
            </p>

            <div className='pt-1'>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className='pt-10 pb-6 bg-slate-900 text-slate-300'>
        <div className='grid max-w-6xl grid-cols-1 gap-8 px-4 mx-auto text-sm md:px-6 lg:px-8 md:grid-cols-3'>
          {/* About */}
          <div>
            <h3 className='mb-2 text-base font-semibold text-white'>
              Commercial LPG Agency – Hyderabad
            </h3>
            <p className='leading-relaxed text-slate-400'>
              Reliable commercial LPG supply for restaurants, hotels, cloud
              kitchens, canteens and industrial kitchens across Hyderabad.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className='mb-2 font-semibold text-white'>Contact</h4>
            <p>
              <span className='text-slate-400'>Phone:</span> +91-9876543210
            </p>
            <p>
              <span className='text-slate-400'>City:</span> Hyderabad
            </p>
            <p>
              <span className='text-slate-400'>Hours:</span> 9:00 AM – 8:00 PM
            </p>
          </div>

          {/* Areas */}
          <div>
            <h4 className='mb-2 font-semibold text-white'>Service Areas</h4>
            <p className='leading-relaxed text-slate-400'>
              Banjara Hills, Jubilee Hills, Gachibowli, HITEC City, Kukatpally,
              Secunderabad, Madhapur, Somajiguda, Begumpet & nearby commercial
              zones.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-4 mt-8 text-xs text-center border-t border-slate-800 text-slate-500'>
          <p>
            © {new Date().getFullYear()} Commercial LPG Agency, Hyderabad. All
            rights reserved.
          </p>

          <p className='mt-1'>
            Designed & Developed by{' '}
            <a
              href='https://www.broaddcast.com'
              target='_blank'
              className='font-medium text-yellow-400 transition hover:text-yellow-300'
            >
              Broaddcast Business Solutions
            </a>
          </p>
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
