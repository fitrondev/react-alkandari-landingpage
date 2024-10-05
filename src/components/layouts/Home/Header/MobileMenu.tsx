import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Nav from "./Nav";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <AlignJustify className="size-6" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="hidden">
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>

        <div className="h-full flex flex-col justify-center gap-4">
          <Nav directionCls="space-y-4" linkCls="text-2xl font-semibold" />
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;
