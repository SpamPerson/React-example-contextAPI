import { PrimaryButton, Stack } from "@fluentui/react";
import * as React from "react";
import { DataContext } from "../utilizeContext/dataContext";
import { PInfoStatus } from "../utilizeContext/type";

const UtilizeToolbar: React.FC = () => {
   const dataContext = React.useContext(DataContext);

   const onClickSetData = (id: string) => {
      let newData: PInfoStatus[] = [];
      dataContext.data.forEach((x) => {
         if (x.id === id) {
            newData.push({
               id: x.id,
               color: x.color,
               isView: !x.isView,
               kinds: x.kinds,
               name: x.name,
            });
         } else {
            newData.push({
               id: x.id,
               color: x.color,
               isView: x.isView,
               kinds: x.kinds,
               name: x.name,
            });
         }
      });
      dataContext.setData(newData);
   };

   return (
      <Stack
         horizontal
         tokens={{ childrenGap: 10, padding: 10 }}
         horizontalAlign="center"
         style={{ backgroundColor: "GrayText", height: "44px", marginTop: 10, width: "100%" }}
      >
         {dataContext.data.map((v) => (
            <Stack.Item key={v.id}>
               [ID:{v.id}, Name:{v.name}, isView:
               <PrimaryButton text={v.isView ? "Y" : "N"} style={{ backgroundColor: v.color }} onClick={() => onClickSetData(v.id!)} />]
            </Stack.Item>
         ))}
      </Stack>
   );
};

export default UtilizeToolbar;
