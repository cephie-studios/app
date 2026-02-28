import NextAuth, { type DefaultSession } from "next-auth"
import Discord from "next-auth/providers/discord"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      isAdmin: boolean
    } & DefaultSession["user"]
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  providers: [
    Discord({
      clientId: process.env.AUTH_DISCORD_CLIENT_ID,
      clientSecret: process.env.AUTH_DISCORD_CLIENT_SECRET,
      authorization: { params: { scope: "identify" } },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      const adminIds = (process.env.ADMIN_IDS || "").split(",").map(id => id.trim());
      if (user && account) {
        token.id = account.providerAccountId;
      }
      const idToCheck = token.id ?? token.sub;
      token.isAdmin = idToCheck ? adminIds.includes(String(idToCheck)) : false;
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = (token.id || token.sub) as string;
        session.user.isAdmin = !!token.isAdmin;
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      const adminIds = (process.env.ADMIN_IDS || "").split(",").map(id => id.trim());
      const discordId = account?.providerAccountId ?? (profile as { id?: string })?.id;
      const userId = discordId || user.id;

      console.log("SignIn Attempt:", {
        userId,
        discordId,
        isAdmin: userId ? adminIds.includes(String(userId)) : false,
        adminIds,
        provider: account?.provider,
      });

      if (userId && adminIds.includes(String(userId))) {
        return true;
      }
      return false;
    }
  },
})
