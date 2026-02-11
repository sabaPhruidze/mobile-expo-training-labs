import { View, Text } from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  fullName: z.string().min(3, "სახელი უნდა იყოს მინიმუმ 3 სიმბოლო"),
  email: z.email("არასწორი მეილის ფორმატი"),
  password: z.string().min(6, "პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო"),
});

type FormData = z.infer<typeof schema>;

const RegisterScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("ფორმის მონაცემები:", data);
  };

  return (
    <View>
      <Text>რეგისტრაცია</Text>
    </View>
  );
};

export default RegisterScreen;
