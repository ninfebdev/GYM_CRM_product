'use client';

import { useId, useState } from 'react';
import { Plus } from './icons';
import { Reveal } from './reveal';
import { SectionLabel } from './section-label';

const faqs = [
  {
    question: 'What is GYM CRM?',
    answer:
      'GYM CRM is an all-in-one platform for gyms that helps manage members, payments, workout plans, analytics, and even provides a personalized website and member app.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes. Every gym gets a 1-month free trial to explore the platform before subscribing.',
  },
  {
    question: "What's included in the ₹12,000 yearly plan?",
    answer:
      'Everything. Member management, analytics, trial tracking, workout and diet plans, trainer management, PDF templates, personalized gym website, and the member web app are all included.',
  },
  {
    question: 'Will my gym get its own website?',
    answer:
      'Yes. Every gym receives a personalized website where you can showcase facilities, gallery, testimonials, contact details, and attract new members.',
  },
  {
    question: 'Do members get their own app?',
    answer:
      'Yes. Members receive access to their own web app where they can view memberships, invoices, diet plans, workout plans, and use the exercise library and workout simulator.',
  },
  {
    question: 'Can I manage trainers, expenses, and payments?',
    answer:
      'Absolutely. GYM CRM helps you manage staff, track expenses and revenue, monitor renewals, and understand your business through powerful analytics.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="relative w-full my-28 sm:my-40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header — left aligned */}
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>FAQs</SectionLabel>
          </Reveal>
          <Reveal delay={80} className="mt-5">
            <h2 className="text-balance font-caprasimo text-[2rem] leading-[1.12] text-stone-900 sm:text-4xl md:text-[3rem]">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 text-pretty text-base leading-relaxed text-stone-500 sm:text-lg">
              Everything you need to know about GYM CRM.
            </p>
          </Reveal>
        </div>

        {/* Accordion */}
        <Reveal delay={120} className="mt-12 border-t border-stone-200/70 sm:mt-16">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const triggerId = `${baseId}-trigger-${i}`;
            const panelId = `${baseId}-panel-${i}`;

            return (
              <div key={faq.question} className="border-b border-stone-200/70">
                <h3>
                  <button
                    type="button"
                    id={triggerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-lg font-geom tracking-tight text-stone-900 sm:text-xl">
                      {faq.question}
                    </span>
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full border bg-accent text-stone-700 transition-all duration-300 ${
                        isOpen
                          ? 'rotate-45 border-orange-500/40 text-stone-700'
                          : 'border-orange-500/40 group-hover:border-orange-500/40 group-hover:text-stone-700'
                      }`}
                    >
                      <Plus className="text-[16px]" />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 pr-10 text-base leading-relaxed text-stone-500">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
