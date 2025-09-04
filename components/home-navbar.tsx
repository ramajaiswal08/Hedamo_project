"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  Home,
  Grid3X3,
  LifeBuoy,
  User,
  Settings,
  ChevronLeft,
  Menu,
} from "lucide-react";

export function HomeNavBar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              aria-label="Open menu"
              className="border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200 bg-transparent"
            >
              <Menu className="mr-2 h-4 w-4" />
              Menu
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetHeader>
              <SheetTitle>Navigate</SheetTitle>
            </SheetHeader>
            <nav className="mt-4 grid gap-2">
              <Link
                href="/"
                className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted"
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link
                href="#categories"
                className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted"
              >
                <Grid3X3 className="h-4 w-4" />
                <span>Categories</span>
              </Link>
              <Link
                href="#service"
                className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted"
              >
                <Grid3X3 className="h-4 w-4" />
                <span>Services</span>
              </Link>
              <Link
                href="#help"
                className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted"
              >
                <LifeBuoy className="h-4 w-4" />
                <span>Help</span>
              </Link>
              <Separator />
              <Link
                href="#account"
                className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted"
              >
                <User className="h-4 w-4" />
                <span>Account</span>
              </Link>
              <Link
                href="#settings"
                className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted"
              >
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
