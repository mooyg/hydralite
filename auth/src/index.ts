import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import passport from "passport";
import { projectName } from "./constants";
import { GithubOAuth } from "./auth/GithubOAuth";
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
    expressServer.get("/", (_, res) => {
        return res.json({
            message: `Welcome to the ${projectName} authentication server!`,
        });
    });

    // passport
    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser<Express.User>((user, done) => done(null, user));

    // auth services
    expressServer.use(GithubOAuth(passport));

    // Start Server
    const port = process.env.PORT || 8000;
    expressServer.listen({ port }, () => {
        console.log(`Navigate to http://localhost:${port}/`);
    });
}

main().catch((err) => console.error(err));
