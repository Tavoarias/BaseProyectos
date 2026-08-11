import type { ChangeEvent } from "react";

export interface UserListViewModel {
  newName: string;
  users: string[];
  hasUsers: boolean;
  isAddButtonDisabled: boolean;
  handleNewNameChange: (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  handleAddUser: () => void;
  handleDeleteUser: (index: number) => void;
}
