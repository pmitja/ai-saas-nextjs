"use client";

import { useState, useEffect } from "react";
import { ProModal } from "@/components/pro-modal";

export const ModalProvider = () => {
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <ProModal />
    </>
  );
};
