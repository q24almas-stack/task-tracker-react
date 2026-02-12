export default function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li className={task.completed ? "completed" : ""}>
      <span onClick={() => onToggleTask(task.id)}>
        {task.completed ? "✅ " : "📝 "} {task.text}
      </span>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
}
