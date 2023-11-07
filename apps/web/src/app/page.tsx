import { useEffect, useState } from "react";
import { api } from "../core/axiosSetup";

export default function Page({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [text, setText] = useState<string>("");
  useEffect(() => {
    const fetchAndSetText = async () => {
      const apiResponse = await api
        .get<{ message: string }>("/example")
        .then((response) => response.data);
      console.log(apiResponse);
      setText(apiResponse.message);
    };
    fetchAndSetText();
  }, []);
  return (
    <>
      <h1 className="text-xl">Home</h1>
      <p>{text}</p>
      {children}
    </>
  );
}
