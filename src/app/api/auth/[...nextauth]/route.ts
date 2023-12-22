import { userProps } from '@/@types'
import axios from 'axios'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const nextAuthOption: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const loginUrl = process.env.NEXT_PUBLIC_URL_LOGIN || ''

        const res = await axios.post(loginUrl, {
          email: credentials?.email,
          password: credentials?.password,
        })

        if (res.status !== 200) return null

        const user = await res.data

        if (user && res.status === 200) return user

        return null
      },
    }),
  ],

  pages: {
    signIn: '/login',
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user
      }

      return token
    },

    async session({ session, token }) {
      session.user = token.user as userProps
      session = { ...session, ...session.user }
      return session
    },
  },

  session: { strategy: 'jwt' },

  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(nextAuthOption)

export { handler as GET, handler as POST, nextAuthOption }
