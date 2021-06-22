import { Router } from "express";
import { Strategy } from "passport-github2";
import { PassportStatic } from "passport";
import fetchOauthClientInfo from "~/auth/util/fetchOauthClientInfo";

export const GithubOAuth = (passport: PassportStatic) => {
    const oauthInfo = fetchOauthClientInfo("github");

    passport.use(
        new Strategy(
            {
                clientID: oauthInfo.clientId as any,
                clientSecret: oauthInfo.clientSecret as any,
                callbackURL: oauthInfo.cbUrl as any,
            },
            async (
                accessToken: any,
                refreshToken: any,
                profile: any,
                done: any
            ) => {
                // handle user sign on here
                // const axiosRes = await axios({
                //     method: "POST",
                //     url: `${process.env.SERVER_URL}/graphql`,
                //     data: {
                //         query: `
                //             mutation {
                //                 userSignOn(input: { provider: "github", accessToken: "${accessToken}" }) {
                //                     id
                //                     createdAt
                //                     username
                //                     email
                //                     joinDate
                //                     hydra
                //                     profileId
                //                 }
                //             }
                //         `,
                //     },
                // });

                console.log("strategy", profile);

                return done(null, {
                    message: "lawl",
                });
            }
        )
    );

    const router = Router();

    router.get(
        "/github",
        passport.authenticate("github", {
            scope: ["user:email"],
            failureRedirect: `/auth/github`,
            session: false,
        })
    );

    router.get(
        "/github/cb",
        passport.authenticate("github", {
            failureRedirect: `/auth/github`,
            session: true,
        }),
        (_, res) => {
            // redirect to main site
            res.redirect("/");
        }
    );

    return router;
};
