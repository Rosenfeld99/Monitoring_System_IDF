import { KEY_WAVES_SYSTEM } from "../constant/constant";

export const userStatic = localStorage.getItem(KEY_WAVES_SYSTEM) || {
  username: "username",
  role: "admin",
  userTests: [],
  reportsClass: [],
  counterEdit: 3,
  isProcess: false,
  process: null,
  lastReport: null,
  history: [],
};

if (!localStorage.getItem(KEY_WAVES_SYSTEM))
  localStorage.setItem(KEY_WAVES_SYSTEM, JSON.stringify(userStatic));
