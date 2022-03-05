import React from 'react'

const CategoryForm = ({handleSumbit, name, setName,loading}) => {


    return (
        <form onSubmit={handleSumbit} className="cc_sumbit_form ">
            <label> Name</label>
            <input
              type="text"
              className="cc_input"
              onChange={(e) => setName(e.target.value)}
              value={name}
              autoFocus
              required
              placeholder="Enter make name"
            />
            <button className="cc_btn">
              {loading ? "Loading..." : "Save"}
            </button>
          </form>
    )
}

export default CategoryForm
