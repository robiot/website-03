import { setCookie } from "cookies-next";
import { NextApiHandler } from "next";

const Handler: NextApiHandler = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed." });
    }

    const { notDefault } = req.body;

    if (notDefault == undefined || typeof notDefault !== "boolean") {
        return res.status(400).json({ message: "Bad request." });
    }

    if (notDefault) {
        setCookie("not-default-theme", "true", {
            req,
            res,
            maxAge: 2_147_483_647,
        });
    } else {
        setCookie("not-default-theme", "false", {
            req,
            res,
            maxAge: 2_147_483_647,
        });
    }

    return res.status(200).json({ message: "ok" });
};

export default Handler;
