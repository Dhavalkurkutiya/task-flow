"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LayoutDashboard, ListTodo, Users, BarChart } from 'lucide-react'

const sidebarItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Tasks', href: '/tasks', icon: ListTodo },
  { name: 'Team', href: '/team', icon: Users },
  { name: 'Reports', href: '/reports', icon: BarChart },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex md:flex-col md:w-64 md:bg-gray-800 md:dark:bg-gray-900">
      <div className="flex-1 flex flex-col min-h-0">
        <ScrollArea className="flex-1">
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {sidebarItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    pathname === item.href
                      ? "bg-gray-900 text-white dark:bg-gray-700"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  <item.icon className="mr-3 h-6 w-6" aria-hidden="true" />
                  <span>{item.name}</span>
                </Button>
              </Link>
            ))}
          </nav>
        </ScrollArea>
      </div>
    </div>
  )
}

