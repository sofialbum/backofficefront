interface Props {
  children: React.FC;
}

const Body = ({ children }: Props) => {
  return (
    <>
      <div id="body" className="text-center">
        <div className="container">
          <div className="col-md-10 offset-md-1 section-title">
            <h2>Body</h2>
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default Body;
