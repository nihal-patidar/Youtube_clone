export const enableDarkTheme = () => {
  document.documentElement.classList.add("dark");
};

export const enableLightTheme = () => {
  document.documentElement.classList.remove("dark");
};

export const toggleTheme = () => {
  document.documentElement.classList.toggle("dark");
};