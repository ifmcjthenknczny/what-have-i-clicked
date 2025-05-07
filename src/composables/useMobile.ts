import { ref, onMounted, onUnmounted, type Ref, type DeepReadonly, readonly } from 'vue';

interface UseMobileReturn {
  isMobile: DeepReadonly<Ref<boolean>>;
}

export function useMobile(breakpointPx: number = 768): UseMobileReturn {
  const isMobileInternal = ref(false);

  const checkAndUpdateMobileStatus = (): void => {
    if (typeof window !== 'undefined') {
      isMobileInternal.value = window.innerWidth <= breakpointPx;
    }
  };

  onMounted(() => {
    checkAndUpdateMobileStatus();
    window.addEventListener('resize', checkAndUpdateMobileStatus);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', checkAndUpdateMobileStatus);
  });

  return { isMobile: readonly(isMobileInternal) }
}
