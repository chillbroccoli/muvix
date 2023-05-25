export type DisplayMode = 'grid' | 'carousel';

const useSettingsStore = defineStore(
  'settings',
  () => {
    const isDark = ref(true);
    const displayMode = ref<DisplayMode>('carousel');

    function setDisplayMode(value: DisplayMode) {
      displayMode.value = value;
    }

    watch(isDark, (newValue) => {
      if (typeof window === undefined) return;

      if (newValue) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });

    return { displayMode, setDisplayMode, isDark };
  },
  {
    persist: true,
  }
);

export default useSettingsStore;
