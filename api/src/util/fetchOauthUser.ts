import axios from "axios";
import DiscordUser from "~/types/DiscordUser.type";

export async function fetchDiscordUser(token: string): Promise<DiscordUser> {
  return (
    await axios({
      method: "GET",
      url: "https://discordapp.com/api/users/@me",
      headers: {
        Authorization: `${token}`,
      },
    })
  ).data;
}
