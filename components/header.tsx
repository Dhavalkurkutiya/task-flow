"use client"
import { UserNav } from "./user-nav"
import { ModeToggle } from "./mode-toggle"
import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold">Task Manager</h1>
            </div>
            <nav className="hidden sm:flex sm:gap-6">
              <a href="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Dashboard
              </a>
              <a href="/reports" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Reports
              </a>
              <a href="/tasks" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Tasks
              </a>
              <a href="/team" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Team
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <UserNav />
            <Button
              variant="ghost"
              className="sm:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="border-t py-4 sm:hidden">
            <div className="flex flex-col space-y-3">
              <a href="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Dashboard
              </a>
              <a href="/reports" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Reports
              </a>
              <a href="/tasks" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Tasks
              </a>
              <a href="/team" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Team
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

