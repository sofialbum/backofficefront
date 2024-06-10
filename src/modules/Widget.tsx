import Header from "./Header";
import Body from "./Body";
import BodyChild1 from "./BodyChild1";
import BodyChild2 from "./BodyChild2";
import Component1 from "../components/Component1";
import Component2 from "../components/Component2";
import Component3 from "../components/Component3";
import Component4 from "../components/Component4";
import Component5 from "../components/Component5";

import { useEffect, useState } from "react";
import DefaultComponent from "../components/DefaultComponent";

interface Props {
  id: string;
}

interface Module {
  componentName: string;
  children: string[];
  title?: string;
  description?: string;
  isWithinHours: boolean;
  active: boolean
}

const Widget = ({ id }: Props) => {
  const [data, setData] = useState<Module | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const widgets = {
    Header,
    Body,
    BodyChild1,
    BodyChild2,
    Component1,
    Component2,
    Component3,
    Component4,
    Component5
  };

  useEffect(() => {
    const fetchId = async () => {
      const res = await fetch(`http://localhost:3000/${id}`, {
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    };
    fetchId();
  }, [id]);

  if (isLoading) {
    return <p></p>;
  }

  const widgetName = data?.componentName;

  if(!data?.isWithinHours || !data?.active) {
    return <DefaultComponent />
  }

  // @ts-ignore
  const Component = Object.keys(widgets).includes(widgetName)
    ? // @ts-ignore
      widgets[widgetName]
    : DefaultComponent;


    return (
      <>
          <Component title={data?.title} description={data?.description}>
            {data?.children && data?.children.length > 0 ? (
              data.children.map((childId, i) => (
                <Widget id={childId} key={i} />
              ))
            ) : <DefaultComponent />}
          </Component>
      </>
    )
};  

export default Widget;
