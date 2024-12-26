import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const tasks = [
  {
    id: "TASK-8782",
    title: "You have a new task",
    assignee: {
      name: "John Doe",
      email: "john@example.com",
    },
    status: "In Progress",
  },
  {
    id: "TASK-7878",
    title: "Complete project proposal",
    assignee: {
      name: "Jane Smith",
      email: "jane@example.com",
    },
    status: "To Do",
  },
  {
    id: "TASK-7512",
    title: "Review code changes",
    assignee: {
      name: "Bob Johnson",
      email: "bob@example.com",
    },
    status: "In Review",
  },
  {
    id: "TASK-9090",
    title: "Update documentation",
    assignee: {
      name: "Alice Brown",
      email: "alice@example.com",
    },
    status: "Done",
  },
]

export function RecentTasks() {
  return (
    <div className="space-y-8">
      {tasks.map((task) => (
        <div key={task.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`https://avatar.vercel.sh/${task.assignee.email}`} alt={task.assignee.name} />
            <AvatarFallback>{task.assignee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{task.assignee.name}</p>
            <p className="text-sm text-muted-foreground">
              {task.title}
            </p>
          </div>
          <div className="ml-auto font-medium">
            {task.status}
          </div>
        </div>
      ))}
    </div>
  )
}

