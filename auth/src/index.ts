import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { projectName } from "./constants";

async function main() {
    // initialize dontenv
    dotenv.config();

    // Create Express Server
    const expressServer = express();

    // Express Middleware
    expressServer.use(
        cors({
            origin: process.env.CLIENT_URL,
            credentials: true,
        })
    );

    // routes
    expressServer.get("/", (req, res) => {
        return res.json({
            message: `Welcome to the ${projectName} authentication server!`,
        });
    });

    // Start Server
    const port = process.env.PORT || 8000;
    expressServer.listen({ port }, () => {
        console.log(`Navigate to http://localhost:${port}/`);
    });
}

main().catch((err) => console.error(err));
