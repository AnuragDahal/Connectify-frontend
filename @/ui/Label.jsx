import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { twMerge as cn } from "tailwind-merge";

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
