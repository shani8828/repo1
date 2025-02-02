import React, { useEffect } from "react";

export default function Redirect(props) {
  const { href } = props;
  useEffect(() => {
    window.location.href = href;
  });
  return <></>;
}