import { createListenerMiddleware } from '@reduxjs/toolkit';
import { setItem } from '../slices/selectedItem';
import { selectItem } from '../slices/items';

export const listenerMiddleware = createListenerMiddleware();

// listenerMiddleware.startListening({
//   actionCreator: setItem,
//   effect: ({ payload }, { getState, dispatch }) => {
//     const { entities } = getState();
//     const { ui } = entities;
//     const { key } = payload;
//     dispatch(sortPosts({ [key]: ui[key] }));
//   }
// });

// listenerMiddleware.startListening({
//   actionCreator: checkPosts,
//   effect: (action, { getState, dispatch }) => {
//     const { entities } = getState();
//     const { posts, pages } = entities;
//     let lists = Math.ceil( posts.filteredList.length / ENTRIES_PER_PAGE );
//     lists = lists ? lists : 1;
//     dispatch(setPages({ pages: lists }));
//     pages.currentPage !== 1  &&  dispatch(setCurrentPage({ currentPage: 1 }));
//   }
// });