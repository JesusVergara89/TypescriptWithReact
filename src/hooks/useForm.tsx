import { ChangeEvent, useState } from "react"


export const useForm = <T extends Object>(initState: T) => {

    const [formular, setFormular] = useState(initState)

    const HandleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target
        setFormular({
            ...formular,
            [name]: value
        })
    }


    return {formular, HandleChange}
}
