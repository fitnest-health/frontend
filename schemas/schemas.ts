import { z } from "zod";

export const contactFormSchema = z.object({
  fullname: z
    .string()
    .min(2, { message: "Ad soyad ən azı 2 simvol olmalıdır" })
    .max(50, { message: "Ad soyad ən çox 50 simvol olmalıdır" }),
  phone: z
    .string()
    .min(6, { message: "Telefon nömrəsi ən azı 6 simvol olmalıdır" })
    .max(20, { message: "Telefon nömrəsi ən çox 20 simvol olmalıdır" }),
  email: z
    .string()
    .min(1, { message: "Email ünvanı tələb olunur" })
    .email({ message: "Düzgün email ünvanı daxil edin" }),
  message: z
    .string()
    .min(2, { message: "Mesaj ən azı 2 simvol olmalıdır" })
    .max(500, { message: "Mesaj ən çox 500 simvol olmalıdır" }),
});

export const feedbackSchema = z.object({
  fullname: z
    .string()
    .min(2, { message: "Ad soyad ən azı 2 simvol olmalıdır" })
    .max(50, { message: "Ad soyad ən çox 50 simvol olmalıdır" }),
  email: z
    .string()
    .min(1, { message: "Email ünvanı tələb olunur" })
    .email({ message: "Düzgün email ünvanı daxil edin" }),
  type: z.string().min(1, { message: "Feedback növü tələb olunur" }),
  message: z
    .string()
    .min(2, { message: "Mesaj ən azı 2 simvol olmalıdır" })
    .max(500, { message: "Mesaj ən çox 500 simvol olmalıdır" }),
});

export const LoginSchema = z.object({
  email: z.email({ message: "Düzgün email ünvanı daxil edin" }),
  password: z.string({ message: "Şifrə tələb olunur" }),
});

export const ForgetPassSchema = z.object({
  email: z.email({ message: "Düzgün email ünvanı daxil edin" }),
});

export const ResetPassSchema = z
  .object({
    email: z.email({ message: "Düzgün email ünvanı daxil edin" }),
    password: z
      .string()
      .min(8, { message: "Şifrə ən azı 8 simvol olmalıdır" })
      .max(20, { message: "Şifrə ən çox 20 simvol olmalıdır" })
      .regex(/[A-Z]/, { message: "Şifrə ən azı 1 böyük hərf olmalıdır" })
      .regex(/[0-9]/, { message: "Şifrə ən azı 1 rəqəm olmalıdır" }),
    passwordRepeat: z.string(),
  })
  .refine((data) => data.password === data.passwordRepeat, {
    message: "Şifrələr eyni deyil",
    path: ["passwordRepeat"],
  });

export const SignupSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Ad ən azı 2 simvol olmalıdır" })
      .max(50, { message: "Ad ən çox 50 simvol olmalıdır" })
      .regex(/^[a-zA-ZəğüşıöçƏĞÜŞİÖÇ\s]+$/, {
        message: "Ad yalnız hərflərdən ibarət olmalıdır",
      }),
    surname: z
      .string()
      .min(2, { message: "Soyad ən azı 2 simvol olmalıdır" })
      .max(50, { message: "Soyad ən çox 50 simvol olmalıdır" })
      .regex(/^[a-zA-ZəğüşıöçƏĞÜŞİÖÇ\s]+$/, {
        message: "Soyad yalnız hərflərdən ibarət olmalıdır",
      }),
    email: z.string().email({ message: "Düzgün email ünvanı daxil edin" }),
    password: z
      .string()
      .min(8, { message: "Şifrə ən azı 8 simvol olmalıdır" })
      .max(20, { message: "Şifrə ən çox 20 simvol olmalıdır" })
      .regex(/[A-Z]/, { message: "Şifrə ən azı 1 böyük hərf olmalıdır" })
      .regex(/[0-9]/, { message: "Şifrə ən azı 1 rəqəm olmalıdır" }),
    passwordRepeat: z.string(),
  })
  .refine((data) => data.password === data.passwordRepeat, {
    message: "Şifrələr eyni deyil",
    path: ["passwordRepeat"],
  });
