import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers:[GoogleProvider({
        //Estos 2 parametros se obtienen desde google
        clientId: process.env.GOOGLE_ClIENT_ID as string,
        clientSecret:process.env.GOOGLE_SECRET as string

    })]
})

export {handler as GET, handler as POST};