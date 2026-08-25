# User List Feature

## Intent
Provide a small user entry list where an operator can add usernames and remove users from the list.

## In scope
- Render a title and description.
- Provide a labeled text input for username entry.
- Provide an add button to append a username to the list.
- Display added usernames as a list.
- Provide a delete action for each listed username.

## Out of scope
- Persisting usernames beyond the current browser session.
- API integration, backend storage, or Redux state.
- Validation beyond non-empty trimmed username input.

## Requirements
- The feature must live under `app/components/user-list/`.
- UI state and event handlers must be implemented in `hooks/useUserListViewModel.ts`.
- Text values must be stored in feature constants.
- The component must reuse existing shared components: `SectionTitle`, `Text`, `FormField`, `Button`.
- The feature must be usable from `app/page.tsx`.

## Acceptance criteria
- [ ] The page shows a `User list` heading and descriptive text.
- [ ] The username input is labeled `Username`.
- [ ] The add button is labeled `Add user` and is disabled until a non-empty username is entered.
- [ ] Added users appear in a vertical list.
- [ ] Each user row includes a `Delete` button that removes only that row.
- [ ] When the list is empty, the component displays `No users have been added yet.`
