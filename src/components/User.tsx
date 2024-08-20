import { useState } from "react"

interface User {
    uid: string,
    name: string,
}

export const User = () => {

    const [user, setUser] = useState<User>()

    const login = () => {
        setUser({
            uid: "1234",
            name: "jesus",
        })
    }
    return (
        <div>
            <h3>This is user</h3>
            <button onClick={login} className="btn btn-outline-primary mt-2">
                Login
            </button>

            <pre>{JSON.stringify(user)}</pre>
        </div>
    )
}
