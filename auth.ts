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
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      const adminIds = (process.env.ADMIN_IDS || "").split(",").map(id => id.trim());
      
      if (user) {
        token.id = user.id;
        token.isAdmin = adminIds.includes(String(user.id));
      } else if (token.sub) {
        token.isAdmin = adminIds.includes(String(token.sub));
      }
      
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
      const userId = account?.providerAccountId || user.id || (profile as { id?: string })?.id;
      
      console.log("SignIn Attempt:", { 
        userId, 
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
