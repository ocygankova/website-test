function FasterIcon({ ...props }) {
  return (
    <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.561 29.909l8.773-13.16A1.125 1.125 0 0032.398 15H25.5V6.716a1.125 1.125 0 00-2.061-.624l-8.773 13.16A1.125 1.125 0 0015.602 21H22.5v8.285a1.125 1.125 0 002.061.624z"
        fill="currentColor"
        {...props}
      />
      <path
        opacity=".3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.75 7.5h7.5a2.25 2.25 0 010 4.5h-7.5a2.25 2.25 0 010-4.5zm0 18h7.5a2.25 2.25 0 010 4.5h-7.5a2.25 2.25 0 010-4.5zm-3-9h6a2.25 2.25 0 010 4.5h-6a2.25 2.25 0 010-4.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default FasterIcon;
