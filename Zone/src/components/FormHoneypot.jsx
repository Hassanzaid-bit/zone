export default function FormHoneypot() {
  return (
    <div
      className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
      aria-hidden="true"
    >
      <label htmlFor="qzone-website">Leave this field empty</label>
      <input
        id="qzone-website"
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}
