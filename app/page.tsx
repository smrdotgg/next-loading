import { ChildComp } from "./_components/comp";

export const dynamic = 'force-dynamic';

const fetchUsername = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("smrdotgg");
    }, 10000);
  });
};


export default async function UserDetails() {
  const username = await fetchUsername();
  return (<ChildComp username={username} />);
}

