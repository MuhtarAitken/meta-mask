import { useState } from "react";
import classes from "./Login.module.css";


const Login = (props) => {
    const [isConnecting, setIsConnecting] = useState(false);

    const detectProvider = () => {
        let provider;
        if (window.ethereum) {
            provider = window.ethereum;
        } else if (window.web3) {
            provider = window.web3.currentProvider;
        } else {
            window.alert("No Ethereum browser detected! Check out MetaMask");
        }
        return provider;
    };

    const onLoginHandler = async () => {
        const provider = detectProvider();
        if (provider) {
            if (provider !== window.ethereum) {
                console.error(
                    "Not window.ethereum provider. Do you have multiple wallet installed ?"
                );
            }
            setIsConnecting(true);
            await provider.request({
                method: "eth_requestAccounts",
            });
            setIsConnecting(false);
        }
        props.onLogin(provider);
    };

    return (
        <div className={classes.login}>
            <h1>MetaMask is locked - please login</h1>
            <button onClick={onLoginHandler} className={classes.button} type="button">
                {!isConnecting && "Connect"}
                {isConnecting && "Loading..."}
            </button>
        </div>
    );
};

export default Login;