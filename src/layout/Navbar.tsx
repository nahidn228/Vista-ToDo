import { Menu } from "lucide-react";
import vistaLogo from "@/assets/Vista SysTech-02 1.png";
import { Accordion } from "@/components/ui/accordion"; // Not used but kept for context
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "../components/mode-toggle";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Dispatch, SetStateAction } from "react";

// Define the types for the component's props
interface NavbarProps {
  setSearchTerm: Dispatch<SetStateAction<string>>;
  searchTerm: string;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

const Navbar = ({
  setSearchTerm,
  searchTerm,
  filter,
  setFilter,
}: NavbarProps) => {
  return (
    <section className=" border  rounded-2xl py-6 p-4 my-10">
      <div className="container mx-auto">
        {/* Desktop and Mobile Wrapper */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <img
              src={vistaLogo}
              className="max-h-8 dark:invert"
              alt="Vista SysTech Logo"
            />
          </div>

          {/* Desktop Controls */}
          <nav className="hidden lg:flex flex-grow items-center justify-end gap-4">
            <Input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-lg"
            />
            <div className="flex gap-2 items-center">
              <Select
                value={filter}
                onValueChange={(value) => setFilter(value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <ModeToggle />
            </div>
          </nav>

          {/* Mobile Controls */}
          <div className="block lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="flex gap-2">
                    <img
                      src={vistaLogo}
                      className="max-h-8 dark:invert"
                      alt="Vista SysTech Logo"
                    />
                    <ModeToggle />
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Input
                    type="text"
                    placeholder="Search tasks..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Select
                    value={filter}
                    onValueChange={(value) => setFilter(value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Filter by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All</SelectItem>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  ></Accordion>
                  <div className="flex flex-col gap-3"></div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
