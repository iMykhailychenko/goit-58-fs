import { createSelector } from '@reduxjs/toolkit';

export const selectUserSearch = state => state.users.search;
export const selectUsers = state => state.users.users;
export const selectIsModalOpen = state => state.users.isModalOpen;

// export const selectFilteredUsers = state => {
//   const users = selectUsers(state);
//   const search = selectUserSearch(state);

//   return users.filter(user => {
//     console.log('in filter');
//     return user.name.toLowerCase().includes(search.toLowerCase());
//   });
// };

export const selectFilteredUsers = createSelector(
  [selectUserSearch, selectUsers],
  (search, users) => {
    return users.filter(user => {
      console.log('in filter');
      return user.name.toLowerCase().includes(search.toLowerCase());
    });
  },
);

// export const selectTototalOpenToWork = state => {
//   const users = selectUsers(state);

//   return users.filter(user => {
//     console.log('selectTototalOpenToWork');
//     return user.isOpenToWork;
//   }).length;
// };

export const selectTototalOpenToWork = createSelector([selectUsers], users => {
  return users.filter(user => {
    console.log('selectTototalOpenToWork');
    return user.isOpenToWork;
  }).length;
});
