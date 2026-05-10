export function ProductHuntSection() {
  return (
    <section
      className="section product-hunt-section"
      aria-labelledby="product-hunt-title"
    >
      <div className="shell product-hunt-shell">
        <header className="section-header product-hunt-header">
          <h2 id="product-hunt-title">See Aira on Product Hunt</h2>
          <p>
            Aira is live on Product Hunt. Take a look, join the conversation,
            and share it with Mac creators who need a calmer way to present.
          </p>
        </header>

        <a
          className="product-hunt-badge"
          href="https://www.producthunt.com/products/aira-7?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-aira-8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="Aira - A Mac teleprompter that stays out of view | Product Hunt"
            width="250"
            height="54"
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1143215&theme=neutral&t=1778436380044"
          />
        </a>
      </div>
    </section>
  );
}
