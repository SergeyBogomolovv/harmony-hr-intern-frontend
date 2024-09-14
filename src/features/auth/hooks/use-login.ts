"use client";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/shared/constants";
import { LoginDocument } from "@/shared/graphql/graphql";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginInput, LoginSchema } from "../model/login-schema";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();

  const form = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: "", password: "" },
  });

  const [login, options] = useMutation(LoginDocument, {
    onCompleted: ({ login }) => {
      localStorage.setItem(ACCESS_TOKEN_KEY, login.access_token);
      localStorage.setItem(REFRESH_TOKEN_KEY, login.refresh_token);
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
      login({ variables: data }).then((res) => console.log(res));
    }),
  };
};
