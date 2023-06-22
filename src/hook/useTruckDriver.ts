import { useState } from "react";

export type driverProps = {
    name?: string,
    color?: string,
    legajo?: number
}

const useTruckDriver = () =>{
    const [driver, setDriver] = useState<driverProps[]>([
        {
            name: 'Diego',
            color: 'red',
            legajo: 1,
        },
        {
            name: 'Fernando',
            color: 'blue',
            legajo: 2,
        },
        {
            name: 'Alberto',
            color: 'green',
            legajo: 3,
        },
        {
            name: 'Jesus',
            color: 'orange',
            legajo: 4,
        },
        {
            name: 'Samuel',
            color: 'violet',
            legajo: 5,
        }
    ])


    return {driver};
}

export default useTruckDriver;