"use client";
import { ApolloProvider as Provider } from "@apollo/client";
import client from "../config/apollo";

export default function ApolloProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <Provider client={client}>{children}</Provider>;
}
