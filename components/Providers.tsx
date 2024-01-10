"use client";
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const Providers = ({ children }: { children: any }) => {
	const client = new ApolloClient({
		uri: `${process.env.NEXTAUTH_URL}/api/graphql`,
		cache: new InMemoryCache(),
	});
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};