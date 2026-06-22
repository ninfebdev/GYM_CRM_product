/**
 * Renders a JSON-LD structured-data block. Server component — the script is
 * emitted in the initial HTML so crawlers see it without executing JS.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is a trusted, server-built object — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
