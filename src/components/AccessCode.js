import React, { useEffect, useState } from "react";
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
            <p>Scan this QR code to access the place:</p>
            <QRCodeSVG value={token} size={256} />
            <p>{token}</p>
        </div>
    );
};

export default AccessCode;
