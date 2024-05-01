import React, { useState } from 'react'
import { TiPlus } from "react-icons/ti"
const TodoForm = ({ onAddTask }) => {
    const [activity, setActivity] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!activity) return;

        const newTask = { activity, status: false, id: Date.now() };
        onAddTask(newTask)
        setActivity('')
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="my-4">
            <div className="flex gap-2 items-center justify-center">
                <input
                    value={activity}
                    onChange={e => setActivity(e.target.value)}
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Enter task ..."
                    className="w-full p-[3px] text-neutral-800" />
                <button
                    className="flex items-center justify-center bg-orange-700 text-white hover:bg-orange-800 duration-300"><TiPlus size={30} /></button>
            </div>
        </form>
    )
}

export default TodoForm
