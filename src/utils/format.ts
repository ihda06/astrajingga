import clsxLib, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjsPrimitive from "dayjs";
import CustomParseFormat from "dayjs/plugin/customParseFormat";
dayjsPrimitive.extend(CustomParseFormat);

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsxLib(inputs));
};

export const dayjs = dayjsPrimitive;
