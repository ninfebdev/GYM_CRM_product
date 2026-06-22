export function VideoShowcase() {
  return (
    <section id="product" className="relative mt-14 w-full sm:mt-20">
      <div className="ld-fade-up" style={{ animationDelay: '0.1s' }}>
        <video
          className="block w-full border-y border-stone-200/70 bg-stone-100 object-cover shadow-[0_40px_120px_-40px_rgb(28_25_23_/0.4)]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="GYM CRM product walkthrough"
        >
          <source src="/VIDs/video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
