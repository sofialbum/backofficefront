interface Props {
  title: string;
  description: string;
}

const Component1 = ({title, description}: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Component1;