import React, { useEffect, useState } from "react";
import Countdown from "./Countdown";
import { generateCode } from "../api/access";
import { QRCodeSVG } from "qrcode.react";
import "../styles/components/AccessCode.css"

const AccessCode = () => {
    const [token, setToken] = useState("");

    useEffect(() => {
        const fetchCode = async () => {
            const newToken = await generateCode();
            setToken(newToken);
        };
        fetchCode();
    }, []);

    if (!token) return <p></p>;

    return (
        <div>
            <QRCodeSVG className={"access-code"} value={token} size={256} />
            <Countdown expiryTimestamp={5} />
        </div>
    );
};

export default AccessCode;
