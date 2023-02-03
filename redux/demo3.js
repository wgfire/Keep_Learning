let initState = {
  count: 0,
};
let store = createStore(initState);

store.subscribe(() => {
  let state = store.getState();
  console.log(state.count);
});
/*自增*/
store.changeState({
  count: store.getState().count + 1,
});
/*自减*/
store.changeState({
  count: store.getState().count - 1,
});
/*我想随便改*/
store.changeState({
  count: "abc",
});
