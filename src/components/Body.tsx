interface Props {
  children: React.FC;
}

const Body = ({ children }: Props) => {
  return (
    <>
      <h1>Body</h1>
      {children}
    </>
  );
};

export default Body;
