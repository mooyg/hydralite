import { Router } from "express";
import { Strategy } from "passport-github2";
import { PassportStatic } from "passport";
import fetchOauthClientInfo from "~/util/fetchOauthClientInfo";

export const GithubOAuth = (passport: PassportStatic) => {
    const oauthInfo = fetchOauthClientInfo("github");

    passport.use(
        new Strategy(
            {
                clientID: oauthInfo.clientId!,
                clientSecret: oauthInfo.clientSecret!,
                callbackURL: oauthInfo.cbUrl,
            },
            async (
                accessToken: any,
                refreshToken: any,
                profile: any,
                done: any
            ) => {
                // handle user sign on here
                console.log("Authenticated");
            }
        )
    );

    const router = Router();

    router.get(
        "/auth/github",
        passport.authenticate("github", {
            scope: ["user:email"],
            failureRedirect: `/auth/github`,
            session: false,
        })
    );

    router.get(
        "/auth/github/cb",
        passport.authenticate("github", {
            failureRedirect: `/auth/github`,
            session: false,
        }),
        (req, res) => {
            // redirect to main site
        }
    );

    return router;
};
