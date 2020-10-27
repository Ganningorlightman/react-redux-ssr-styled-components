import createStore from "./create-store";

const preload = (typeof window === "undefined" ? {} : window.preloadState);
const store = createStore(preload || {});

export default store;