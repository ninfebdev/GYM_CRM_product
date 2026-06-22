/**
 * Single source of truth for FAQ content. Consumed by the on-page FAQ
 * accordion AND the FAQPage JSON-LD structured data so the two never drift
 * out of sync. Answers are written to read naturally for humans while
 * surfacing high-intent keywords (gym CRM, gym software, fitness management
 * software, gym billing software, etc.).
 */
export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: 'What is GYM CRM?',
    answer:
      'GYM CRM is all-in-one gym management software that helps you manage members, payments, renewals, workout and diet plans, and business analytics. It also ships with a personalized gym website and a dedicated member app, so the whole fitness business runs from one platform.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes. Every gym gets a 1-month free trial to explore the gym CRM before subscribing — no credit card required.',
  },
  {
    question: "What's included in the ₹12,000 yearly plan?",
    answer:
      'Everything. Member management, gym billing software, trial and renewal tracking, gym analytics, workout and diet plan builders, trainer management, branded PDF templates, your personalized gym website, and the member web app are all included with no add-ons.',
  },
  {
    question: 'Is GYM CRM good for gyms and fitness studios in India?',
    answer:
      'Absolutely. GYM CRM is affordable gym software built with Indian gyms and fitness studios in mind — rupee billing, GST-ready invoices, and pricing that suits single locations as well as growing chains.',
  },
  {
    question: 'Does it include a gym website builder?',
    answer:
      'Yes. Every gym automatically gets a personalized website through the built-in gym website builder. Showcase facilities, gallery, testimonials, contact details, and working hours, and capture new leads — no developer required.',
  },
  {
    question: 'Do members get their own app?',
    answer:
      'Yes. Members receive a dedicated gym member app where they can view memberships, invoices, diet plans, workout plans, and use the exercise library and workout simulator anytime.',
  },
  {
    question: 'Can I track renewals, expenses, and payments?',
    answer:
      'Yes. GYM CRM combines gym renewal tracking software with revenue and expense analytics, so you never miss a renewal and always understand your gym’s profitability through one clear dashboard.',
  },
  {
    question: 'How is GYM CRM different from other gym management systems?',
    answer:
      'Most gyms juggle spreadsheets, a separate billing tool, and no member portal. GYM CRM replaces all of it with one fitness management software platform — CRM, billing, analytics, workout and diet plans, a member app, and a marketing website — for one flat yearly price.',
  },
];
