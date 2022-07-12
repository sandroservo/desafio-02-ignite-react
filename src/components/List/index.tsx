import styles from './list.module.css'
import {TbTrash} from 'react-icons/tb'
import { ITask } from '../../App';
import{BsFillCheckCircleFill} from 'react-icons/bs'

interface Props {
    task:ITask;
    onDelete: (taskId: string) => void;
    onCompleted: (taskId: string) => void;
}

export function List({task, onDelete, onCompleted}:Props) {

    //const isCompleted = true;

    return (
        <div className={styles.list}>
            <button className={styles.checkContainer} onClick={() => onCompleted(task.id)}>
                {task.isCompleted ? <BsFillCheckCircleFill/> : <div/>}
            </button>

            <p className={task.isCompleted ? styles.textCompleted :""}>{task.title}</p>

            <button className={styles.delete} onClick={()=> onDelete(task.id)}>
                <TbTrash size={20}/>
            </button>

            
        </div>
    )
}