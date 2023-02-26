import axios from "axios";
import { TASK_URL_PRIFIX } from "../constants/ApiServiceConstant";
export function saveTask(task){
    return axios.post(TASK_URL_PRIFIX,task)
}

export function getAllTasks(){
    return axios.get(TASK_URL_PRIFIX)

}

export function getPendingTasks(){
    return axios.get(`${TASK_URL_PRIFIX}/pending`)
}

export function getCompletedTasks(){
    return axios.get(`${TASK_URL_PRIFIX}/completed`)
}

export function deleteTask(taskId){
    return axios.delete(`{TASK_URL_PRIFIX}/${taskId}`)
}

export function markTaskAsCompleted(taskId){
    return axios.put(`${TASK_URL_PRIFIX}/${taskId}/mark-completed`)
}