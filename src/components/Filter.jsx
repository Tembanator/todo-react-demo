import React from 'react'

const Filter = () => {
    return (
        <div className="flex gap-3 my-6">
            <label
                className="font-medium"
                htmlFor="filter">Filter</label>
            <select
                className="bg-slate-200 focus:ring-0 focus:border-0 rounded-sm text-neutral-900 ap"
                name="filter"
                id="filter">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="active">Active</option>
            </select>
        </div>
    )
}

export default Filter
