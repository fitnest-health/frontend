import { z } from "zod";

export const contactFormSchema = z.object({
  fullname: z.string()
    .min(2, { message: "Ad soyad ən azı 2 simvol olmalıdır" })
    .max(50, { message: "Ad soyad ən çox 50 simvol olmalıdır" }),
  phone: z.string()
    .min(6, { message: "Telefon nömrəsi ən azı 6 simvol olmalıdır" })
    .max(20, { message: "Telefon nömrəsi ən çox 20 simvol olmalıdır" }),
  email: z.string()
    .min(1, { message: "Email ünvanı tələb olunur" })
    .email({ message: "Düzgün email ünvanı daxil edin" }),
  message: z.string()
    .min(2, { message: "Mesaj ən azı 2 simvol olmalıdır" })
    .max(500, { message: "Mesaj ən çox 500 simvol olmalıdır" }),
});