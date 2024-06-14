interface Props {
  children: React.FC;
}

const Body = ({ children }: Props) => {
  return (
    <>
      <div id="body" className="text-center">
          <div className="section-title">
            <h2>Body</h2>
          </div>
        </div>
      
      {children}
    </>
  );
};

export default Body;
