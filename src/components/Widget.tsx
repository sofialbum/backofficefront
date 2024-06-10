import Header from "./Header";
import Body from "./Body";
import BodyChild1 from "./BodyChild1";
import { useEffect, useState } from "react";
import BodyChild2 from "./BodyChild2";

interface Props {
  id: string;
}

interface Module {
  componentName: string;
  children: string[];
}

const Widget = ({ id }: Props) => {
  const [data, setData] = useState<Module | null>(null);

  const widgets = {
    Header,
    Body,
    BodyChild1,
    BodyChild2
  };

  useEffect(() => {
    const fetchId = async () => {
      const res = await fetch(`http://localhost:3000/${id}`, {
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setData(data);
    };
    fetchId();
  }, [id]);

  const widgetName = data?.componentName;

  // @ts-ignore
  const Component = Object.keys(widgets).includes(widgetName)
    ? // @ts-ignore
      widgets[widgetName]
    : null;

    if(data?.children.length) {
      return (
      <Component>
          {
          data.children.map((childrenId, i) => {
            return <Widget id={childrenId} key={i} />;
          })
          }
  
      </Component>
      )

    }
      

  return <>{widgetName && Component && <Component />}</>;
};

export default Widget;

/*
   <Widget id={"02"} />

    <Body>
      <>
        <Widget id={"0201"} />
        <Widget id={"0202"} />
      </>
    </Body>

    <Body>
      <>
        <BodyChild1 />
        <BodyChild2 />
      </>
    </Body>
*/