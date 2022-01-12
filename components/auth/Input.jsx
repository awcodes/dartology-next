import { useRef, useEffect } from "react";

export default function AuthInput(props) {
  let { autoFocus = null, ...attributes } = props;
  const ref = useRef(null);

  useEffect(() => {
    if (autoFocus) {
      ref?.current?.focus?.();
    }
  }, []);

  return <input {...attributes} ref={ref} className="w-full text-gray-300 bg-gray-800 border-gray-700 rounded shadow-sm focus:border-tertiary-300 focus:ring focus:ring-tertiary-200 focus:ring-opacity-50" />;
}
