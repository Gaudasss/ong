function SectionHeader({ eyebrow, title, lead }) {
  return (
    <>
      <span className="tag">{eyebrow}</span>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </>
  );
}

export default SectionHeader;
