interface Props {
  title: string;
  description: string;
}

const Component3 = ({title, description}: Props) => {
  return (
    <div id="component3" className="text-center">
      <div className="container">
        <div className="section-title">
        <h2>{title}</h2>
        <p>{description}</p>
        </div>
      </div>
      
      
    </div>
  )
}

export default Component3;