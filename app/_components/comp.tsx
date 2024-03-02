"use client";

export function ChildComp({ username }: any) {
  return <>
    <h1>{username}</h1>
    <h1>5 seconds</h1>
    <p>(can be client or server rendered)</p>
  </>
}
