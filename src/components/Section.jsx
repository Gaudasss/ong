function Section({ id, alt = false, className = "", children }) {
  return (
    <section id={id} className={alt ? "section section-alt" : "section"}>
      <div className={`container ${className}`.trim()}>{children}</div>
    </section>
  );
}

export default Section;
