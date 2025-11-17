import { useEffect, useState } from "react";

export function useLocalStorage(LOCAL_STORAGE_KEY, initialTasks){
    const [tasks, setTasks] = useState(() => {
           const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
          return saved ? JSON.parse(saved) : initialTasks;
         });

         useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [LOCAL_STORAGE_KEY, tasks]);

  return[tasks, setTasks];
}