interface Props {
  title: string;
  description: string;
}

const Component5 = ({title, description}: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Component5;