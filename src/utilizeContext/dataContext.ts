import { createContext } from "react";
import { PInfoStatus } from "./type";

export let datas:PInfoStatus[] = [
    {
        id:'01',
        name:'one',
        color:'#ca5010',
        isView:true,
        kinds:'personal'
    },
    {
        id:'02',
        name:'two',
        color:'#a4262c',
        isView:false,
        kinds:'personal'
    },
    {
        id:'03',
        name:'three',
        color:'#881798',
        isView:false,
        kinds:'team'
    }
]

export const DataContext = createContext({
    data: datas,
    setData: (data:PInfoStatus[]) => {}
})