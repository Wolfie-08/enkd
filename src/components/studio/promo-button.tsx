"use client";
// Opens the HyperFrames promo in a native <dialog>. Sound is fine here: the visitor pressed play.
import { useRef } from "react";

export function PromoButton({ label, close }: { label: string; close: string }) {
  const dlg = useRef<HTMLDialogElement>(null);
  const vid = useRef<HTMLVideoElement>(null);
  return (
    <>
      <button type="button" className="btn btn--ghost" onClick={() => { dlg.current?.showModal(); vid.current?.play(); }}>
        <svg width="12" height="14" viewBox="0 0 12 14" aria-hidden="true"><path d="M0 0v14l12-7z" fill="currentColor" /></svg>
        {label}
      </button>
      <dialog ref={dlg} className="promo-dialog" onClose={() => vid.current?.pause()}>
        <video ref={vid} src="/studio/promo.mp4" poster="/studio/promo-poster.jpg" controls playsInline preload="none" />
        <form method="dialog">
          <button className="btn btn--ghost">{close}</button>
        </form>
      </dialog>
    </>
  );
}
