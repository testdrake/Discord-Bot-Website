import { useRouter } from 'next/router';

export default async function invite() {
  // function body

  const router = useRouter();

  return null;
}

export async function getServerSideProps({ res }) {
  res.writeHead(302, { Location: 'https://discord.com/oauth2/authorize?client_id=1217203597603897535&permissions=8&scope=bot' });
  res.end();

  return {
    props: {},
  };
}
