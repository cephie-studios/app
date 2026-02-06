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
  providers: [
    Discord({
      clientId: process.env.AUTH_DISCORD_CLIENT_ID,
      clientSecret: process.env.AUTH_DISCORD_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
        
        const adminIds = (process.env.ADMIN_IDS || "").split(",").map(id => id.trim());
        session.user.isAdmin = adminIds.includes(token.sub);
      }
      return session
    },
    async signIn({ user, account, profile }) {
      const adminIds = (process.env.ADMIN_IDS || "").split(",").map(id => id.trim());
      const userId = account?.providerAccountId || user.id || (profile as { id?: string })?.id;
      
      console.log("SignIn Attempt:", { 
        userId, 
        adminIds, 
        provider: account?.provider,
        providerAccountId: account?.providerAccountId,
        userIdFromUser: user.id
      });

      if (userId && adminIds.includes(String(userId))) {
        return true;
      }
      return false;
    }
  },
})
