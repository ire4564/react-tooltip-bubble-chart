const BubbleTooltip = (props: {
  hoverValue: { name: string };
  scales: { x: number; y: number };
}) => {
  const styles = {
    left: `${props.scales.x + 10}px`,
    top: `${props.scales.y + 10}px`,
  };

  return (
    <div className="keyword-tooltip" style={styles}>
      <p>{props.hoverValue.name}</p>
    </div>
  );
};

export default BubbleTooltip;
