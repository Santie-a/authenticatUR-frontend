import React, { useEffect, useState } from "react";
import Countdown from "./Countdown";
import { generateCode } from "../api/access";
import { QRCodeSVG } from "qrcode.react";

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
            <h2>Access Code</h2>
            <QRCodeSVG value={token} size={256} />
            <Countdown expiryTimestamp={5} />
        </div>
    );
};

export default AccessCode;
