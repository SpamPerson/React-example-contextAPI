import * as React from "react";

import { DefaultButton } from "@fluentui/react/lib/Button";
import { Stack } from "@fluentui/react/lib/Stack";
import { SwatchColorPicker } from "@fluentui/react/lib/SwatchColorPicker";
import { TextField } from "@fluentui/react/lib/TextField";

import { DataContext } from "../../utilizeContext/dataContext";
import { PInfoStatus } from "../../utilizeContext/type";

const colorExample = [
   { id: "a", label: "red", color: "#a4262c" },
   { id: "b", label: "orange", color: "#ca5010" },
   { id: "c", label: "orangeYellow", color: "#986f0b" },
   { id: "d", label: "yellowGreen", color: "#8cbd18" },
   { id: "e", label: "green", color: "#0b6a0b" },
   { id: "f", label: "cyan", color: "#038387" },
   { id: "g", label: "cyanBlue", color: "#004e8c" },
   { id: "h", label: "magenta", color: "#881798" },
   { id: "i", label: "magentaPink", color: "#9b0062" },
   { id: "j", label: "black", color: "#000000" },
   { id: "k", label: "gray", color: "#7a7574" },
   { id: "l", label: "gray20", color: "#69797e" },
];

const Nav: React.FC = () => {
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

   const onChangeColor = (event: React.FormEvent<HTMLElement>, colorId: string | undefined, color: string | undefined, id: string) => {
      let newData: PInfoStatus[] = [];
      dataContext.data.forEach((x) => {
         if (x.id === id) {
            newData.push({
               id: x.id,
               color: color,
               isView: x.isView,
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

   const onChangeName = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined, id?: string) => {
      let newData: PInfoStatus[] = [];
      dataContext.data.forEach((x) => {
         if (x.id === id) {
            newData.push({
               id: x.id,
               color: x.color,
               isView: x.isView,
               kinds: x.kinds,
               name: newValue,
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
      <Stack>
         <Stack.Item style={{ fontSize: "30px", textAlign: "center" }}>
            <h1>Nav</h1>
         </Stack.Item>
         {dataContext.data.map((v) => (
            <Stack
               tokens={{ childrenGap: 5 }}
               key={v.id}
               style={{ padding: "10px", marginTop: 5, width: "100%", border: `1px solid ${v.color}` }}
            >
               <span style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}>Name : {v.name}</span>
               <DefaultButton key={v.id} text={v.color} style={{ color: v.color }} />
               <DefaultButton text={v.isView ? "Y" : "N"} onClick={() => onClickSetData(v.id!)} />
               <SwatchColorPicker
                  colorCells={colorExample}
                  cellShape={"circle"}
                  columnCount={12}
                  cellBorderWidth={5}
                  onChange={(e, i, c) => onChangeColor(e, i, c, v.id!)}
               />
               <TextField placeholder="Name Change" onChange={(e, n) => onChangeName(e, n, v.id!)} />
            </Stack>
         ))}
      </Stack>
   );
};

export default Nav;
