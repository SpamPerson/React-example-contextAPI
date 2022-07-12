import * as React from "react";
import { DataContext, datas } from "../utilizeContext/dataContext";
import { PInfoStatus } from "../utilizeContext/type";
import Wrapper from "./Wrapper";

const Utilize: React.FC = () => {
   const [data, setData] = React.useState<PInfoStatus[]>(datas);

   return (
      <DataContext.Provider value={{ data, setData }}>
         <Wrapper />
      </DataContext.Provider>
   );
};

export default Utilize;
