import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { IoSearchSharp } from "react-icons/io5";
import useGetConversations from "../../hooks/useGetConversations";
import useConversation from "../../zustand/useConversation";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { loading, conversations } = useGetConversations();
  const { setSelectedConversation } = useConversation();

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search query must be at least 3 characters long");
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No such user found");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleOnChange}
        className="input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        {loading ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : (
          <IoSearchSharp className="w-6 h-6 outline-none" />
        )}
      </button>
    </form>
  );
};

export default SearchInput;
