import { useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Web3 from "web3";

function App() {
    const [isConnected, setIsConnected] = useState(false);
    const [currentAccount, setCurrentAccount] = useState(null);


    const onLogin = async (provider) => {
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();
        if (accounts.length === 0) {
            console.log("Please connect to MetaMask!");
        } else if (accounts[0] !== currentAccount) {
            setCurrentAccount(accounts[0]);

            setIsConnected(true);
        }
    };

    const onLogout = () => {
        setIsConnected(false);
    };

    return (
        <div>
            <header className="main-header">
                <h1>REACT приложение работающее по web3.js</h1>
                <nav className="nav">
                    <ul>
                        <li>
                            <a>{currentAccount}</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                {!isConnected && <Login onLogin={onLogin} onLogout={onLogout} />}
                {isConnected && (
                    <Home currentAccount={currentAccount} />
                )}
            </main>
        </div>
    );
}

export default App;