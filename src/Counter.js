import React, { useState } from 'react'
import Form from './Form'

const Counter = () => {
    const [signedIn, setSignedIn] = useState(false)

    const handleSignIn = () => {
        setSignedIn(true)
    }

    const handleSignOut = () => {
        setSignedIn(false)
    }

    const [count, setCount] = useState(0)

    const increamentCounter = () => {
        setCount(count + 1)
    }

    return (
        <div>
            { signedIn ? (
                <div>
                    <button type='button' onClick={handleSignOut}> Sign Out </button>
                    <p>Welcome Back!</p>

                    <button type='button' onClick={increamentCounter}> You clicked {count} times.</button>

                    <Form/>

                </div>) : (
                    <div>
                        <button type='button' onClick={handleSignIn}> Sign In </button>
                        <p>Please Sign In!</p>
                    </div>
                )
            }
        </div>
    )
}

export default Counter;