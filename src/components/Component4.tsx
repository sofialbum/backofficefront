interface Props {
  title: string;
  description: string;
}

const Component4 = ({ title, description }: Props) => {
  return (
    <div id="component4">
      <div className="container">
        <div className="section-title text-center">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Component4;