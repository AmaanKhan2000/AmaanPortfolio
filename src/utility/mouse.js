export function showCursor(e) {
  const cursorRef = document.querySelector("#__cursor");
  if (!cursorRef) return;
  cursorRef.setAttribute(
    "style",
    `top: ${e.clientY - 10}px; left: ${e.clientX - 10}px; display: block;`
  );
}

export function hideCursor() {
  const cursorRef = document.querySelector("#__cursor");
  if (!cursorRef) return;
  cursorRef.setAttribute("style", "display: none;");
}

export function expandCursor() {
  const cursorRef = document.querySelector("#__cursor");
  if (!cursorRef) return;
  cursorRef.classList.add("expand__cursor");
  setTimeout(() => cursorRef.classList.remove("expand__cursor"), 500);
}
