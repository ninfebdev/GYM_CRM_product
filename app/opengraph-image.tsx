import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site';

// Branded social share card, generated at build time (Vercel/Stripe-style).
export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background:
            'linear-gradient(135deg, #1c1917 0%, #292524 55%, #3b2a1a 100%)',
          color: '#fafaf9',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Brand row */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 64,
              height: 64,
              background: '#fbbf24',
              borderRadius: 12,
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1c1917"
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6.5 6.5v11M3.5 9v6M17.5 6.5v11M20.5 9v6M6.5 12h11" />
            </svg>
          </div>
          <span
            style={{
              marginLeft: 24,
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: -1,
            }}
          >
            {siteConfig.name}
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            Run Your Entire Gym From One Platform
          </span>
          <span
            style={{
              marginTop: 28,
              fontSize: 32,
              color: '#d6d3d1',
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            All-in-one gym management software — members, billing, analytics,
            workout plans, and your gym website.
          </span>
        </div>

        {/* Footer accent */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 64, height: 6, background: '#fbbf24', borderRadius: 3 }} />
          <span style={{ marginLeft: 24, fontSize: 26, color: '#a8a29e' }}>
            {siteConfig.url.replace(/^https?:\/\//, '')}
          </span>
        </div>
      </div>
    ),
    size,
  );
}
