import Header from "./Header";
import Body from "./Body";
import { useEffect, useState } from "react";

interface Props {
  id: string
}


const Widget = ({id}: Props) => {


  const [widgetName, setWidgetName] = useState<string>('')


  const widgets = {
    Header,
    Body
  }

  
  useEffect(() => {
    const fetchId = async () => {
      const res = await fetch(`http://localhost:3000/${id}`, {
      headers  : { "Content-Type": "application/json" },
      })
      const data = await res.json();
      setWidgetName(data.componentName)
      console.log(data.componentName)
    }
    fetchId()
  }, [id])
  
  // @ts-ignore
  const Component = Object.keys(widgets).includes(widgetName) ? widgets[widgetName] : null; 


  
  return (
    <>
      
      {
      widgetName && Component && 
        <Component />
      
      }
    </>
  );
}

export default Widget;