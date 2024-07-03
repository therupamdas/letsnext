import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import User from '@/models/User';
import connectDB from '@/db/connectDb';



export const aoptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github"||"google") {
        await connectDB();
        const currentUser = await User.findOne({ email: user.email })
        if (!currentUser) {
          const newUser = await User.create({
            email: user.email,
            username: user.email.split("@")[0],
            name: user.name,
            image: user.image,
            coverimage: user.image,
            phonenumber: user.phone,
          })
        }
        return true;
      }
    },
    async session({ session, user, token }) {
      const dbUser = await User.findOne({ email: session.user.email });
      // console.log("dbuser");
      // console.log(dbUser);
      session.user.username = dbUser.username;
      return session;
    },

  }

})
export { aoptions as GET, aoptions as POST };