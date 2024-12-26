import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CreateTaskDialog } from "@/components/create-task-dialog"

const tasks = [
  {
    id: "TASK-8782",
    title: "You have a new task",
    status: "In Progress", 
    priority: "High",
    assignee: {
      name: "John Doe",
      email: "john@example.com",
    },
  },
  {
    id: "TASK-7878",
    title: "Complete project proposal",
    status: "To Do",
    priority: "Medium",
    assignee: {
      name: "Jane Smith",
      email: "jane@example.com",
    },
  },
  {
    id: "TASK-7512",
    title: "Review code changes",
    status: "In Review",
    priority: "Low",
    assignee: {
      name: "Bob Johnson",
      email: "bob@example.com",
    },
  },
  {
    id: "TASK-9090",
    title: "Update documentation",
    status: "Done",
    priority: "Medium",
    assignee: {
      name: "Alice Brown",
      email: "alice@example.com",
    },
  },
]

export default function TasksPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Tasks</h2>
        <div className="flex items-center space-x-2">
          <CreateTaskDialog />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Task ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Assignee</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell className="font-medium">{task.id}</TableCell>
              <TableCell>{task.title}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src={`https://avatar.vercel.sh/${task.assignee.email}`} />
                    <AvatarFallback>{task.assignee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  {task.assignee.name}
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={task.status === 'Done' ? 'secondary' : 'default'}>
                  {task.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant={
                  task.priority === 'High' ? 'destructive' :
                  task.priority === 'Medium' ? 'default' :
                  'secondary'
                }>
                  {task.priority}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost">Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
