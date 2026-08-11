"use client";

import Button from "@/app/components/button/Button";
import FormField from "@/app/components/form-field/FormField";
import SectionTitle from "@/app/components/section-title/SectionTitle";
import Text from "@/app/components/text/Text";
import { STRING } from "@/app/constants";
import { BUTTON } from "@/app/components/button/constants/Button.types";
import { USER_LIST } from "./constants/UserList.constants";
import { useUserListViewModel } from "./hooks/useUserListViewModel";

const UserList = () => {
  const {
    newName,
    users,
    hasUsers,
    isAddButtonDisabled,
    handleNewNameChange,
    handleAddUser,
    handleDeleteUser,
  } = useUserListViewModel();

  return (
    <section className="mx-auto max-w-2xl px-4 py-12">
      <SectionTitle text={USER_LIST.LABELS.TITLE} />
      <Text className="mb-6 text-sm leading-6 text-slate-600">
        {USER_LIST.LABELS.DESCRIPTION}
      </Text>

      <div className="grid gap-4">
        <FormField
          id="user-name"
          name="userName"
          label={USER_LIST.LABELS.INPUT_LABEL}
          value={newName}
          placeholder={USER_LIST.LABELS.INPUT_PLACEHOLDER}
          onChange={handleNewNameChange}
          labelSuffix={STRING.Empty}
        />
        <Button
          disabled={isAddButtonDisabled}
          onClick={handleAddUser}
          className="w-fit"
        >
          {USER_LIST.LABELS.ADD_BUTTON}
        </Button>
      </div>

      <div className="mt-8">
        {hasUsers ? (
          <ul className="space-y-3">
            {users.map((user, index) => (
              <li
                key={`${user}-${index}`}
                className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
              >
                <Text className="truncate text-sm text-slate-800">
                  {user}
                </Text>
                <Button
                  variant={BUTTON.DANGER}
                  onClick={() => handleDeleteUser(index)}
                  className="min-w-[96px]"
                >
                  {USER_LIST.LABELS.DELETE_BUTTON}
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <Text className="text-sm text-slate-500">
            {USER_LIST.LABELS.EMPTY_STATE}
          </Text>
        )}
      </div>
    </section>
  );
};

export default UserList;
