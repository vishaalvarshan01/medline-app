import { atom } from "recoil";

const categoryState = atom({
  key: "categoryState",
  default: "All",
});

const searchState = atom({
  key: "searchState",
  default: "",
});

const productId = atom({
  key: "productId",
  default: "",
})

const userId = atom({
  key: "userId",
  default : "",
})

export { categoryState, searchState, productId , userId};
