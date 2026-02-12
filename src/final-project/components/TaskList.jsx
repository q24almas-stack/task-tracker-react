import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) return <p style={{textAlign: 'center', color: '#455a64'}}>No tasks yet!</p>;

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}
