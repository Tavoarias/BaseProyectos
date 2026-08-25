"use client";

import { useState, type ChangeEvent } from "react";
import type { UserListViewModel } from "../models/UserListViewModel.interface";
import { STRING } from "@/app/constants";

export const useUserListViewModel = (): UserListViewModel => {
  const [newName, setNewName] = useState<string>(STRING.Empty);
  const [users, setUsers] = useState<string[]>([]);

  const trimmedName = newName.trim();
  const hasUsers = users.length > 0;
  const isAddButtonDisabled = trimmedName.length === 0;

  const handleNewNameChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setNewName(event.target.value);
  };

  const handleAddUser = () => {
    if (trimmedName.length === 0) {
      return;
    }

    setUsers((previousUsers) => [...previousUsers, trimmedName]);
    setNewName(STRING.Empty);
  };

  const handleDeleteUser = (index: number) => {
    setUsers((previousUsers) =>
      previousUsers.filter((_, previousIndex) => previousIndex !== index)
    );
  };

  return {
    newName,
    users,
    hasUsers,
    isAddButtonDisabled,
    handleNewNameChange,
    handleAddUser,
    handleDeleteUser,
  };
};
