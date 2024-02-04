import { ChildComp } from "./_components/comp";

const fetchUsername = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("smrdotgg");
    }, 2000);
  });
};


export default async function UserDetails() {
  const username = await fetchUsername();
  return (<ChildComp username={username} />);
}

