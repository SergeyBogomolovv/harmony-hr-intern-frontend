"use client";
import { REFRESH_TOKEN_KEY } from "@/shared/constants";
import { LoginDocument } from "@/shared/graphql/graphql";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginInput, LoginSchema } from "../model/login-schema";
import { useRouter } from "next/navigation";
import { useUser } from "@/entities/user";

export const useLogin = () => {
  const router = useRouter();
  const login = useUser((state) => state.login);

  const form = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: "", password: "" },
  });

  const [mutate, options] = useMutation(LoginDocument, {
    onCompleted: async ({ login: data }) => {
      localStorage.setItem(REFRESH_TOKEN_KEY, data.refresh_token);
      await login(data.access_token);
      router.push("/my-info/time-off");
    },
    onError: () => {
      form.setError("root", {
        type: "custom",
        message: "Invalid email or password",
      });
    },
  });

  return {
    ...options,
    form,
    onSubmit: form.handleSubmit((data) => {
      mutate({ variables: data });
    }),
  };
};
