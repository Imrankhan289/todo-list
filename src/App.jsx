import { useState } from "react";

// Hooks
const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Update Input
  const changeInput = (e) => {
    setInput(e);
  };

  // Handle Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      return alert("Enter your task!");
    }
    setTodos([...todos, input]);
    setInput("");
  };

  // Handle Delete Function
  const handleDelete = (idx) => {
    const newList = todos.filter((index) => {
      return index !== idx;
      //  3        0       = 0
      //           1       = 1
      //           2       = 2
      //           3       =
      //           4       = 4
    });

    setTodos(newList);
  };

  // My App
  return (
    <div
      className=" min-h-screen w-full bg-gradient-to-br from-gray-950
        via-gray-900 to-black text-white flex justify-center items-center p-4"
    >
      <div className="bg-gray-800  rounded-2xl border-white/15 border   flex  flex-col          items-center  w-full max-w-md shadow-2xl p-6 ">
        {/* App Heading */}
        <h1 className="text-3xl font-bold mb-4 mt-4 ">Todo App</h1>

        {/* Form */}
        <div className=" w-full mt-4  ">
          <form onSubmit={handleSubmit}>
            {/* Input */}
            <input
              className=" bg-gray-700 text-lg mb-6 w-full p-3 border border-white/15 rounded-xl focus:border-green-600 transition-all duration-200 outline-none"
              onChange={(e) => {
                changeInput(e.target.value);
              }}
              type="text"
              value={input}
              placeholder="Enter your task"
            />

            {/* Task List */}
            <ul className="list-none w-full p-0">
              {todos.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="bg-gray-700 rounded-xl p-3 flex items-center justify-between text-lg mb-3"
                  >
                    <span>{item}</span>
                    {/* Delete Button */}
                    <button
                      onClick={() => {
                        handleDelete(item, idx);
                      }}
                      type="button"
                      className="bg-red-700 hover:bg-red-800 cursor-pointer transition-all duration-200 active:scale-95 text-white px-3 py-1 rounded-xl text-sm "
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Add Task Button */}
            <button className=" bg-green-700 hover:bg-green-800 transition-all duration-200 outline-none active:scale-98 rounded-xl font-bold cursor-pointer w-full p-2 mt-3 ">
              Add Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
