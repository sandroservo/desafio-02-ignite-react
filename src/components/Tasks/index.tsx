import { TbClipboard, TbClipboardText } from 'react-icons/tb';
import { ITask } from '../../App';
import { List } from '../List'
import styles from './tasks.module.css';

interface TasksProps{
    tasks: ITask[];
    onDelete: (taskId: string) => void;
    onCompleted:(taskId: string) => void
}

export function Tasks({tasks, onDelete, onCompleted}:TasksProps) {
    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter((task) => task.isCompleted).length

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas criadas</p>
                    <span>{tasksQuantity}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Concluidas</p>
                    <span>{completedTasks} de {tasksQuantity}</span>
                </div>
            </header>
            <div className={styles.list}>
                {tasks.map((task)=>(
                    <List key={task.id} task ={task} onDelete={onDelete} onCompleted={onCompleted}/>
                ))}

                {tasks.length <= 0 && (
                    <section className={styles.empty}>
                       <TbClipboardText size={50}/>
                        <div>
                            <p>Você ainda não tem tarefas cadastras</p>
                            <span>Crie tarefas e organize seu itens a fazer</span>
                        </div> 
                    </section>
                )}
                
            </div>
        </section>
    )
}