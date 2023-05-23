export type DisplayMode = 'grid' | 'carousel';

const useSettingsStore = defineStore(
  'settings',
  () => {
    const displayMode = ref<DisplayMode>('grid');

    function setDisplayMode(value: DisplayMode) {
      displayMode.value = value;
    }

    return { displayMode, setDisplayMode };
  },
  {
    persist: true,
  }
);

export default useSettingsStore;
