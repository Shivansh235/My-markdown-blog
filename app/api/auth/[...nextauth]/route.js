import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from 'next-auth/providers/facebook'
import TwitterProvider from "next-auth/providers/twitter";

const handler =  NextAuth({
  providers: [
    GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
      }),

      FacebookProvider({
        clientId: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET
      }),

      TwitterProvider({
        clientId: process.env.TWITTER_CLIENT_ID,
        clientSecret: process.env.TWITTER_CLIENT_SECRET
      }),

    ]
})

export {handler as GET, handler as POST}