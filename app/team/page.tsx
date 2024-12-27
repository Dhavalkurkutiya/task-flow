"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Input } from "@/components/ui/input"

const teamMembers = [
  {
    name: "Dhaval Kurkutiya",
    email: "kurkutiya.dhaval@gmail.com",
    role: "Admin",
    tasks: 12,
  },
  {
    name: "Suraj Ganvit",
    email: "surajganvit@gmail.com",
    role: "Editor",
    tasks: 8,
  },
  {
    name: "Virpal Patel",
    email: "virpalpatel@gmail.com",
    role: "Viewer",
    tasks: 5,
  },
  {
    name: "Shubham Patel",
    email: "shubhampatel@gmail.com",
    role: "Editor",
    tasks: 10,
  },
  {
    name: "Dhaval Kurkutiya",
    email: "kurkutiya.dhaval58@gmail.com",
    role: "Admin",
    tasks: 12,
  },
  {
    name: "Suraj Ganvit",
    email: "surajganvi25@gmail.com",
    role: "Editor",
    tasks: 8,
  },
  {
    name: "Virpal Patel",
    email: "virpalpatel25@gmail.com",
    role: "Viewer",
    tasks: 5,
  },
]

export default function TeamPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTeamMembers = teamMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Team</h2>
        <div className="flex items-center space-x-2">
          <Button>Invite Member</Button>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Input
          placeholder="Search team members..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredTeamMembers.map((member) => (
          <Card key={member.email}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {member.name}
              </CardTitle>
              <Avatar className="h-9 w-9">
                <AvatarImage src={`https://avatar.vercel.sh/${member.email}`} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent>
              <div className="text-sm">{member.email}</div>
              <div className="flex justify-between items-center mt-4">
                <Badge>{member.role}</Badge>
                <div className="text-sm text-muted-foreground">{member.tasks} tasks</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

