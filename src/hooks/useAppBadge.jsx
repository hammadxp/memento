import { useState } from "react";

export default function useAppBadge() {
  const [counter, setCounter] = useState(0);

  function setBadge() {
    setCounter(counter + 1);

    if (navigator.setAppBadge) {
      navigator.setAppBadge(counter);
    } else if (navigator.setClientBadge) {
      navigator.setClientBadge(counter);
    }
  }

  function clearBadge() {
    setCounter(0);

    if (navigator.clearAppBadge) {
      navigator.clearAppBadge();
    } else if (navigator.clearClientBadge) {
      navigator.clearClientBadge();
    }
  }

  return [setBadge, clearBadge];
}
