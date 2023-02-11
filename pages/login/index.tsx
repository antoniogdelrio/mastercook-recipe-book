import { useRouter } from "next/router"
import { useContext, useRef } from "react"
import Button from "../../src/components/atoms/Button/Button"
import Logo from "../../src/components/atoms/Logo/Logo"
import TextInput from "../../src/components/atoms/TextInput/TextInput"
import { AuthContext } from "../../src/contexts/AuthContext"
import { GeneralContext } from "../../src/contexts/GeneralContext"
import styles from "./Login.module.scss"

export default function Login () {
    const { login } = useContext(AuthContext)
    const { showSnack } = useContext(GeneralContext)

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const doLogin = async () => {
        const isLoginSuccessfull = await login(emailRef.current?.value || '', passwordRef.current?.value || '')

        if (!isLoginSuccessfull) {
            showSnack({
                title: 'Login failed',
                description: 'Your credentials are incorrect. Please try again.',
                color: 'error'
            })
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <Logo />
                <div className={styles.inputs}>
                    <TextInput
                        alt="Email"
                        ariaLabel="Email"
                        placeholder="Email"
                        ref={emailRef}
                    />
                    <TextInput
                        alt="Password"
                        ariaLabel="Password"
                        placeholder="Password"
                        type="password"
                        ref={passwordRef}
                    />
                </div>
                <Button
                    onClick={doLogin}
                >
                    Sign in
                </Button>
            </div>
        </div>
    )
}
