import React from 'react'
import { FaCircleCheck, FaPenToSquare } from "react-icons/fa6"
import { MdOutlineDelete } from "react-icons/md"
const TodoItem = ({ status, task, position }) => {
    return (
        <div
            className="flex justify-between bg-neutral-800 px-4 items-center py-2 hover:bg-neutral-700 my-1 sm:my-2">
            <div className="flex items-center gap-3">
                <span className="border-[1px] border-neutral-600 flex items-center justify-center rounded-full w-[20px] h-[20px] text-xs text-neutral-600">{position}</span>
                {task}
            </div>
            <div className="flex gap-3">
                <FaCircleCheck className="hover:text-green-400 hover:scale-125 duration-300 cursor-pointer" />
                <FaPenToSquare className="hover:text-orange-400 hover:scale-125 duration-300 cursor-pointer" />
                <MdOutlineDelete className="hover:text-red-600 hover:scale-125 duration-300 cursor-pointer" />
            </div>
        </div>
    )
}

export default TodoItem
