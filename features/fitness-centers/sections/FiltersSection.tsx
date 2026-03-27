import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RefreshCw } from "lucide-react";
import { getMessages } from "@/lib/i18n/server";

const FiltersSection = async () => {
  const { messages } = await getMessages();
  const controlClass =
    "w-full rounded-full border border-[#373A41] bg-[#123B554D] text-neutral-50 py-0 h-12 data-[size=default]:h-12 data-[placeholder]:text-[#797980] data-[placeholder]:font-bold text-base";

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-12 xl:gap-5">
      <div className="md:col-span-2 xl:col-span-4">
        <Input
          placeholder={messages.centers.searchPlace}
          leftIcon="/icons/search.svg"
          className="h-full px-3 text-base text-neutral-50 placeholder:text-[#797980] placeholder:font-bold"
          wrapperClassName="h-12 border-[#373A41] bg-[#123B554D] px-4"
        />
      </div>
      <div className="xl:col-span-2">
        <Select defaultValue="rayon">
          <SelectTrigger className={controlClass}>
            <SelectValue placeholder={messages.centers.cityDistrict} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{messages.centers.cityDistrict}</SelectLabel>
              <SelectItem value="rayon">{messages.centers.cityDistrict}</SelectItem>
              <SelectItem value="nizami">Nizami</SelectItem>
              <SelectItem value="nesimi">Nəsimi</SelectItem>
              <SelectItem value="yasamal">Yasamal</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="xl:col-span-2">
        <Select defaultValue="mesq">
          <SelectTrigger className={controlClass}>
            <SelectValue placeholder={messages.centers.trainingTypes} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{messages.centers.trainingTypes}</SelectLabel>
              <SelectItem value="mesq">{messages.centers.trainingTypes}</SelectItem>
              <SelectItem value="cardio">Cardio</SelectItem>
              <SelectItem value="weights">Ağırlıq</SelectItem>
              <SelectItem value="crossfit">Crossfit</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="xl:col-span-2">
        <Select defaultValue="abunelik">
          <SelectTrigger className={controlClass}>
            <SelectValue placeholder={messages.centers.membership} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{messages.centers.membership}</SelectLabel>
              <SelectItem value="abunelik">{messages.centers.membership}</SelectItem>
              <SelectItem value="bronze">Bronze</SelectItem>
              <SelectItem value="silver">Silver</SelectItem>
              <SelectItem value="gold">Gold</SelectItem>
              <SelectItem value="platinum">Platinum</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button
        variant="outline"
        className="h-12 w-full rounded-full border-[#373A41] bg-[#123B554D] text-base font-bold text-[#797980] hover:bg-[#123B554D] hover:text-[#797980] xl:col-span-2"
      >
        <RefreshCw className="h-5 w-5" />
        {messages.centers.reset}
      </Button>
    </div>
  );
};

export default FiltersSection;
